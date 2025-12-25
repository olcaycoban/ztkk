import React, { useState } from 'react';
import './App.css';
import { participants } from './data/participants';

function App() {
  const [selectedParticipant, setSelectedParticipant] = useState(null);

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
              <p className="focus-text" style={{ textTransform: 'capitalize' }}>{selectedParticipant.focus}</p>
            </div>

            <div className="prompts-section">
              <div className="prompts-header">
                <h2>Kişiselleştirilmiş Promptlar</h2>
              </div>
              <div className="prompts-grid">
                {selectedParticipant.personalizedPrompts.map((prompt, index) => (
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
                ))}
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
