import React, { useState, useEffect, useMemo } from 'react';
import './App.css';
import { participants } from './data/participants';

function App() {
  const [selectedParticipant, setSelectedParticipant] = useState(null);
  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem('participantNotes');
    return saved ? JSON.parse(saved) : {};
  });
  const [promptSearchTerm, setPromptSearchTerm] = useState('');

  // Notları kaydet
  useEffect(() => {
    localStorage.setItem('participantNotes', JSON.stringify(notes));
  }, [notes]);

  // Not ekle/güncelle
  const updateNote = (participantId, note) => {
    setNotes(prev => ({
      ...prev,
      [participantId]: note
    }));
  };

  // Export JSON
  const exportToJSON = () => {
    const data = {
      participants: selectedParticipant ? [selectedParticipant] : participants,
      exportDate: new Date().toISOString(),
      notes: selectedParticipant ? { [selectedParticipant.id]: notes[selectedParticipant.id] } : notes
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `ai-egitim-${selectedParticipant ? selectedParticipant.name.replace(/\s+/g, '-') : 'tum-veriler'}.json`;
    a.click();
  };

  // Export Text
  const exportToText = () => {
    let text = '';
    if (selectedParticipant) {
      text += `${selectedParticipant.name}\n${selectedParticipant.title}\n\n`;
      text += `Odak Alanı: ${selectedParticipant.focus}\n\n`;
      text += 'PROMPTLAR:\n';
      selectedParticipant.personalizedPrompts.forEach((p, i) => {
        text += `\n${i + 1}. ${p.title}\n`;
        text += `Prompt: ${p.prompt}\n`;
        text += `Örnek: ${p.example}\n`;
      });
      if (notes[selectedParticipant.id]) {
        text += `\nNOTLAR:\n${notes[selectedParticipant.id]}\n`;
      }
    } else {
      participants.forEach(p => {
        text += `\n${p.name} - ${p.title}\n`;
        text += `Odak: ${p.focus}\n`;
        text += `Promptlar: ${p.personalizedPrompts.length}\n`;
      });
    }
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `ai-egitim-${selectedParticipant ? selectedParticipant.name.replace(/\s+/g, '-') : 'tum-veriler'}.txt`;
    a.click();
  };

  // Filtrelenmiş promptlar (detay sayfasında)
  const filteredPrompts = useMemo(() => {
    if (!selectedParticipant || !promptSearchTerm) {
      return selectedParticipant?.personalizedPrompts || [];
    }
    return selectedParticipant.personalizedPrompts.filter(p =>
      p.title.toLowerCase().includes(promptSearchTerm.toLowerCase()) ||
      p.prompt.toLowerCase().includes(promptSearchTerm.toLowerCase()) ||
      p.example.toLowerCase().includes(promptSearchTerm.toLowerCase())
    );
  }, [selectedParticipant, promptSearchTerm]);

  return (
    <div className="App">
      <header className="app-header">
        <div className="header-content">
          <h1 className="main-title">
            Kişiselleştirilmiş Yapay Zeka Eğitimi ve Prompt Mühendisliği
          </h1>
        </div>
      </header>

      {!selectedParticipant ? (
        <div className="participants-container">
          <div className="participants-grid">
            {participants.map((participant) => (
                <div
                  key={participant.id}
                  className="participant-card"
                  onClick={() => setSelectedParticipant(participant)}
                  style={{ borderTopColor: participant.color }}
                >
                  <div className="card-header">
                    <span className="participant-icon">{participant.icon}</span>
                    <div className="participant-info">
                      <h3 className="participant-name">{participant.name}</h3>
                      <p className="participant-title">{participant.title}</p>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="focus-area">
                      <strong>Odak Alanı:</strong> {participant.focus}
                    </div>
                    <div className="card-footer-info">
                      <div className="department-badge" style={{ backgroundColor: participant.color }}>
                        {participant.department}
                      </div>
                      <div className="prompt-count">
                        {participant.personalizedPrompts.length} Prompt
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ) : (
        <div className="participant-detail">
          <div className="detail-top-bar">
            <button className="back-button" onClick={() => setSelectedParticipant(null)}>
              ← Geri Dön
            </button>
            <div className="export-buttons">
              <button className="export-btn" onClick={exportToJSON}>
                JSON Export
              </button>
              <button className="export-btn" onClick={exportToText}>
                Text Export
              </button>
            </div>
          </div>

          <div className="detail-header" style={{ backgroundColor: selectedParticipant.color }}>
            <div className="detail-header-content">
              <span className="detail-icon">{selectedParticipant.icon}</span>
              <div>
                <h1 className="detail-name">{selectedParticipant.name}</h1>
                <p className="detail-title">{selectedParticipant.title}</p>
              </div>
            </div>
          </div>

          <div className="detail-content">
            <div className="info-section">
              <h2>Odak Alanı</h2>
              <p className="focus-text">{selectedParticipant.focus}</p>
            </div>

            {/* Notlar Bölümü */}
            <div className="notes-section">
              <h2>Notlar</h2>
              <textarea
                className="notes-textarea"
                placeholder="Bu katılımcı için notlarınızı buraya yazın..."
                value={notes[selectedParticipant.id] || ''}
                onChange={(e) => updateNote(selectedParticipant.id, e.target.value)}
              />
            </div>

            <div className="prompts-section">
              <div className="prompts-header">
                <h2>Kişiselleştirilmiş Promptlar</h2>
                <input
                  type="text"
                  placeholder="Prompt ara..."
                  className="prompt-search-input"
                  value={promptSearchTerm}
                  onChange={(e) => setPromptSearchTerm(e.target.value)}
                />
              </div>
              <div className="prompts-grid">
                {filteredPrompts.length === 0 ? (
                  <p className="empty-state">Arama kriterlerinize uygun prompt bulunamadı.</p>
                ) : (
                  filteredPrompts.map((prompt, index) => (
                    <div key={index} className="prompt-card">
                      <div className="prompt-card-header">
                        <h3 className="prompt-title">{prompt.title}</h3>
                      </div>
                      <div className="prompt-content">
                        <div className="prompt-box">
                          <strong>Prompt:</strong>
                          <p className="prompt-text">{prompt.prompt}</p>
                        </div>
                        <div className="example-box">
                          <strong>Örnek:</strong>
                          <p className="example-text">{prompt.example}</p>
                        </div>
                      </div>
                      <button
                        className="copy-prompt-btn"
                        onClick={() => {
                          navigator.clipboard.writeText(prompt.prompt);
                          alert('Prompt panoya kopyalandı!');
                        }}
                      >
                        Prompt'u Kopyala
                      </button>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* İleri Seviye Teknikler */}
            {selectedParticipant.advancedTechniques && selectedParticipant.advancedTechniques.length > 0 && (
              <div className="advanced-section">
                <h2>İleri Seviye Teknikler</h2>
                <div className="advanced-grid">
                  {selectedParticipant.advancedTechniques.map((tech, index) => (
                    <div key={index} className="advanced-card">
                      <h3>{tech.title}</h3>
                      <p className="tech-description">{tech.description}</p>
                      {tech.example && (
                        <div className="tech-example">
                          <strong>Örnek:</strong>
                          <p>{tech.example}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      <footer className="app-footer">
        <p>Yapay Zeka Eğitim Platformu © 2024</p>
      </footer>
    </div>
  );
}

export default App;
