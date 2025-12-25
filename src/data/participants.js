// Her katılımcı için kişiselleştirilmiş eğitim içeriği
export const participants = [
  {
    id: 1,
    name: "Yusuf Selçuk Şimşek",
    title: "Kurumsal Ürün ve Müşteri Deneyimi Yönetimi Bölüm Başkanı",
    department: "Kurumsal",
    focus: "kurumsal müşteri deneyimi, ürün geliştirme, kurumsal segment",
    color: "#1e40af",
    icon: "🏢",
    personalizedPrompts: [
      {
        title: "Açık ve Net Talimat - Kurumsal Portföy Raporu",
        prompt: "[ROL]: Sen kurumsal bankacılık portföy yönetimi uzmanısın.\n\n[GÖREV]: Kurumsal kredi portföyümüzün Q4 2024 performansını 3 paragrafta özetle.\n\n[İÇERİK]:\n1. Hedef gerçekleşme oranı (bütçe vs gerçekleşen)\n2. NPL (takipteki alacaklar) trendi ve sektörel dağılım\n3. 2025 Q1 için öncelikli 3 aksiyon önerisi\n\n[FORMAT]: Executive summary formatında, yönetim sunumuna hazır",
        example: "Q4 Performans Özeti:\n1. Hedef Gerçekleşme: Kurumsal portföy 2.4M TL büyüme ile %96 hedef gerçekleşti...\n2. NPL Trendi: %2.1'den %1.8'e düştü, özellikle imalat sektöründe iyileşme...\n3. Q1 Aksiyonlar: Enerji sektörü aktif pazarlama, NPL takip sistematiği güçlendirme..."
      },
      {
        title: "Rol Atama - Kurumsal Müşteri Analizi",
        prompt: "[ROL]: Sen 15 yıllık deneyime sahip bir kurumsal bankacılık uzmanısın. Sermaye piyasaları, proje finansmanı ve kurumsal yönetişim konularında derin bilgin var.\n\n[GÖREV]: ABC Holding'in (yıllık ciro 500M TL, 8 grup şirketi) nakit akış döngüsünü analiz et.\n\n[ANALİZ KAPSAMI]:\n- Grup şirketleri arası nakit akışı\n- Mevsimsellik ve working capital ihtiyaçları\n- Mevcut banka ilişkileri ve spread yapısı\n\n[ÇIKTI]: Cash pooling ve group treasury stratejisi öner. Potansiyel maliyet tasarrufu hesapla.",
        example: "ABC Holding Nakit Akış Analizi:\n\nMevcut Durum: 8 şirket farklı bankalarda işlem yapıyor, ortalama 45M TL atıl nakit...\n\nCash Pooling Önerisi:\n- Notional pooling ile %2.5 spread avantajı\n- Tahmini yıllık tasarruf: 1.2M TL\n- Treasury merkezi yapılandırma..."
      },
      {
        title: "Adım Adım Düşündürme - Kredi Değerlendirme",
        prompt: "[ROL]: Sen kurumsal kredi değerlendirme uzmanısın.\n\n[GÖREV]: Bu kredi başvurusunu değerlendirmeden önce şu adımları sırayla izle:\n\nADIM 1: Şirketin faaliyet gösterdiği sektörün risk seviyesini değerlendir (son 2 yıl verileri)\nADIM 2: Finansal oranları analiz et (likidite, kaldıraç, karlılık)\nADIM 3: Teminat yapısını ve değerini değerlendir\nADIM 4: Şirket yönetiminin deneyimini ve track record'unu incele\nADIM 5: Son olarak kredi önerisini ve şartlarını belirle\n\n[KISITLAMALAR]:\n- Her adımda bulgularını açıkça belirt\n- Risk skorunu 1-10 arasında puanla\n- Kredi komitesi sunumuna hazır format",
        example: "Kredi Değerlendirme - XYZ Tekstil A.Ş.:\n\nADIM 1 - Sektör Riski: Tekstil sektörü orta-yüksek risk (7/10). Enerji maliyetleri ve döviz kuru baskısı...\nADIM 2 - Finansal Oranlar: Cari oran 1.4, Finansal kaldıraç %45, FAVÖK marjı %12...\nADIM 3 - Teminat: Fabrika binası 25M TL, makine parkı 8M TL...\n..."
      },
      {
        title: "Örnek Verme (Few-Shot) - Müşteri Geri Bildirim Analizi",
        prompt: "[ROL]: Sen kurumsal müşteri deneyimi analisti olarak çalışıyorsun.\n\n[GÖREV]: Kurumsal müşteri geri bildirimlerini kategorize et ve aksiyonları belirle.\n\n[ÖRNEKLER]:\nGeri Bildirim: 'İhracat kredisi başvurumuz 3 hafta sürdü, rakip banka 1 haftada sonuçlandırıyor' \n→ Kategori: Süreç Verimsizliği \n→ Öncelik: Yüksek \n→ Aksiyon: Kredi süreç haritalaması ve iyileştirme\n\nGeri Bildirim: 'Relationship manager'ımız çok proaktif, sektörel raporlar gönderiyor'\n→ Kategori: Pozitif Deneyim\n→ Öncelik: Düşük\n→ Aksiyon: Best practice olarak yaygınlaştır\n\nGeri Bildirim: 'Treasury ürünleriniz rakiplere göre pahalı'\n→ Kategori: Fiyatlandırma\n→ Öncelik: Orta\n→ Aksiyon: Competitive pricing analizi\n\n[ŞİMDİ SEN ANALİZ ET]:\nGeri Bildirim: 'Dijital platformda döviz işlemleri için limit arttırma taleplerimiz geç sonuçlanıyor'\n→ [AI tamamlar]",
        example: "Kategori: Dijital Kanal & Operasyonel\nÖncelik: Yüksek\nAksiyon: Dijital limit yönetim sürecini otomatize et, SLA 24 saate indir"
      },
      {
        title: "Format Belirleme - Kurumsal Segment Karşılaştırma",
        prompt: "[ROL]: Kurumsal segment stratejisti olarak görev yapıyorsun.\n\n[GÖREV]: Kurumsal müşteri segmentlerimizi (Büyük Kurumsal, Orta Ölçek Kurumsal, Küçük Kurumsal) karşılaştırmalı olarak analiz et.\n\n[ANALİZ KRİTERLERİ]:\n- Ortalama kredi büyüklüğü\n- Karlılık (NIM - Net Interest Margin)\n- Cross-sell oranı (ürün başına müşteri)\n- Operasyonel maliyet\n\n[FORMAT]: Sonuçları şu tablo formatında sun:\n\n| Segment | Müşteri Sayısı | Ort. Kredi (M TL) | NIM % | Cross-Sell | Maliyet/Müşteri | Strateji Önerisi |\n|---------|----------------|-------------------|-------|------------|-----------------|------------------|\n| Büyük   |                |                   |       |            |                 |                  |\n\n[SON]: Hangi segmente odaklanmamız gerektiğini gerekçeli öner.",
        example: "| Segment | Müşteri Sayısı | Ort. Kredi | NIM % | Cross-Sell | Maliyet/Müşteri |\n|---------|----------------|------------|-------|------------|-----------------|\n| Büyük   | 45             | 12.5M      | 1.8%  | 4.2        | 125K            |\n| Orta    | 180            | 3.2M       | 2.4%  | 2.8        | 45K             |\n| Küçük   | 420            | 0.8M       | 3.1%  | 1.9        | 18K             |\n\nÖneri: Orta segment en optimal risk/getiri dengesi sunuyor..."
      }
    ],
    advancedTechniques: [
      {
        title: "1. Açık ve Net Talimat (Clear Instruction)",
        description: "En kritik teknik. Belirsizliği ortadan kaldır, spesifik ol.",
        example: "❌ Kötü: 'Kurumsal müşteriler hakkında rapor hazırla'\n✅ İyi: 'Yıllık cirosu 50M+ TL olan imalat sektörü kurumsal müşterilerimizin son 6 aylık kredi kullanım trendini analiz et. Sektör bazında grupla, büyüme fırsatlarını belirt, 2 sayfa özet rapor hazırla.'"
      },
      {
        title: "2. Rol Atama (Role Prompting)",
        description: "AI'a uzmanlık rolü vererek daha derinlikli ve bağlama uygun yanıtlar al.",
        example: "Prompt Örneği:\n'Sen 20 yıl kurumsal bankacılık deneyimine sahip bir CFO danışmanısın. Holding yapılarında grup içi finansman optimizasyonu konusunda uzmansın. XYZ Grubunun (12 şirket) inter-company kredi yapısını analiz et ve vergi optimizasyonu öner.'"
      },
      {
        title: "3. Adım Adım Düşündürme (Chain-of-Thought)",
        description: "Karmaşık problemlerde AI'ı adım adım düşünmeye zorla. Daha doğru sonuçlar verir.",
        example: "Prompt Örneği:\n'Bu kurumsal müşterinin kredi limit artırım talebini şu sırayla değerlendir:\n1. Önce mevcut finansal performansı son 3 yıl bazında analiz et\n2. Sektör trend ve risk göstergelerini karşılaştır\n3. Mevcut teminat yapısının yeni limit için yeterliliğini hesapla\n4. Artırım önerisini gerekçelendir veya reddet\nHer adımda bulgularını paylaş.'"
      },
      {
        title: "4. Örnek Verme (Few-Shot Learning)",
        description: "İstediğin çıktı formatını örneklerle göster. AI pattern'i öğrenir.",
        example: "Prompt Örneği:\n'Kurumsal müşteri taleplerini kategorize et:\n\nTalep: Kredi faiz oranı indirim talebi → Kategori: Fiyatlandırma → Yetki: İlişki Yöneticisi + Ürün Sorumlusu\nTalep: Yeni teminat tanımlama → Kategori: Operasyonel → Yetki: Krediler Destek\nTalep: Export factoring limiti → Kategori: Ürün → Yetki: Dış Ticaret\n\nŞimdi şunu kategorize et:\nTalep: Banka garantisi limiti artırımı → [AI tamamlar]'"
      },
      {
        title: "5. Kısıtlamalar ve Format Belirleme",
        description: "Çıktının formatını, uzunluğunu ve kısıtlarını net belirt. Kontrol sende kalsın.",
        example: "Prompt Örneği:\n'Kurumsal segment stratejisini analiz et.\n\n[KISITLAMALAR]:\n- Maksimum 500 kelime\n- KVKK'ya uygun, müşteri ismi kullanma\n- Sadece son 12 ay verisi\n- Rakip bank referansı yok\n\n[FORMAT]:\n1. Executive Summary (100 kelime)\n2. Key Findings (3 bullet)\n3. Stratejik Öneriler (3 öneri, her biri 1 paragraf)\n4. Beklenen Etki (sayısal)'"
      }
    ]
  },
  {
    id: 2,
    name: "Sait Yıldırım Yakasız",
    title: "Bireysel Ürün ve Müşteri Deneyimi Yönetimi Bölüm Başkanı",
    department: "Bireysel",
    focus: "bireysel müşteri deneyimi, kişisel ürünler, bireysel segment",
    color: "#059669",
    icon: "👤",
    personalizedPrompts: [
      {
        title: "Açık ve Net Talimat - Bireysel Müşteri Yolculuğu",
        prompt: "[ROL]: Sen bireysel müşteri deneyimi tasarımcısısın.\n\n[GÖREV]: 25-35 yaş arası genç profesyonel segmentimiz için dijital onboarding yolculuğunu optimize et.\n\n[KAPSAM]:\n1. Mevcut dijital hesap açma sürecindeki drop-off noktalarını belirle\n2. Her adımda müşteri sürtünmesini (friction) analiz et\n3. Rakip bankaların en iyi 3 uygulamasını karşılaştır\n4. Yeni müşteri yolculuğu öner (max 5 adım)\n\n[HEDEF]: Conversion rate'i %45'ten %65'e çıkarmak\n[FORMAT]: Adım adım journey map + iyileştirme önerileri",
        example: "Mevcut Durum Analizi:\nAdım 1: Mobil uygulama indirme - Drop-off %15 (uygulama boyutu 120MB, çok büyük)\nAdım 2: Kimlik doğrulama - Drop-off %25 (e-devlet şifresi gerektiriyor, kullanıcılar hatırlamıyor)\n...\n\nYeni Journey Önerisi:\n1. Hafif onboarding (email + telefon) - 30 saniye\n2. Video KYC (yapay zeka destekli) - 2 dakika\n..."
      },
      {
        title: "Rol Atama - Finansal Eğitim İçeriği",
        prompt: "[ROL]: Sen bireysel müşteriler için finansal okuryazarlık eğitmeni ve davranışsal ekonomi uzmanısın. Karmaşık finansal kavramları basit, günlük hayattan örneklerle anlatma becerisine sahipsin.\n\n[HEDEF KİTLE]: 18-25 yaş, üniversite öğrencileri ve yeni mezunlar\n\n[GÖREV]: 'Birikim yapmanın önemi' konusunda 5 bölümlük mikro-öğrenme içeriği tasarla.\n\n[GEREKSINIMLER]:\n- Her bölüm 90 saniye video için senaryo\n- Günlük hayattan somut örnekler\n- Gamification öğeleri ekle\n- Her bölümün sonunda pratik aksiyon\n\n[TON]: Samimi, öğretici ama ağırbaşlı değil",
        example: "Bölüm 1: Kahve Paradoksu (90 saniye)\n\n[Açılış - 15sn]\n'Her sabah aldığın 50 TL'lik kahve, 10 yıl sonra ne olabilir biliyor musun? Hazır ol, şok olacaksın!'\n\n[İçerik - 50sn]\nGünlük 50 TL x 365 gün = 18.250 TL/yıl\nBunu %15 getiri sağlayan yatırım fonuna koysaydın:\n- 5 yıl sonra: 123K TL\n- 10 yıl sonra: 370K TL (bir arabanın peşinatı!)\n\n[Aksiyon - 25sn]\nBu hafta challenge: Günlük bir küçük harcamayı kes, uygulamamızdaki 'Kahve Kumbaram'a at. Kim 1 hafta devam ederse 100 TL bonus!'"
      },
      {
        title: "Adım Adım Düşündürme - Kredi Kartı Öneri Motoru",
        prompt: "[ROL]: Bireysel ürün öneri motoru tasarımcısısın.\n\n[GÖREV]: Müşterilerimize kişiselleştirilmiş kredi kartı önerisi yapmak için karar ağacı oluştur.\n\n[ADIMLAR]:\nADIM 1: Müşteri segmentini belirle (yaş, gelir, meslek, dijital kullanım)\nADIM 2: Harcama davranışını analiz et (son 6 ay verileri: kategoriler, tutar, sıklık)\nADIM 3: Mevcut ürün kullanım profilini değerlendir (hangi ürünleri kullanıyor, aktif mi?)\nADIM 4: Life-stage ihtiyaçlarını tahmin et (evlilik, bebek, ev alımı gibi belirtiler)\nADIM 5: Bu 4 adım çıktısına göre en uygun 2 kredi kartını öner ve gerekçelendir\n\n[ÇIKTI FORMATI]: Her adımı bullet points + final öneri kart",
        example: "Müşteri: Ayşe Yılmaz, 29, Yazılım Mühendisi\n\nADIM 1 - Segment: GenY, Yüksek gelir (15K+), Dijital native\nADIM 2 - Harcama: Online alışveriş 60%, Yemek siparişi 20%, Ulaşım 15%\nADIM 3 - Mevcut: Vadesiz hesap aktif, bireysel emeklilik var, kredi kartı YOK\nADIM 4 - Life-stage: Bekâr, seyahat aramaları fazla (tatil planlıyor olabilir)\n\nÖNERİ 1: Digital Life Kart - Online alışverişlerde %5 cashback\nÖNERİ 2: Travel Rewards Kart - Mil biriktirme, havalimanı lounge"
      },
      {
        title: "Örnek Verme (Few-Shot) - Müşteri Şikayet Analizi",
        prompt: "[ROL]: Bireysel müşteri şikayet analisti ve çözüm önerici olarak görev yapıyorsun.\n\n[GÖREV]: Gelen müşteri şikayetlerini kategorize et, aciliyet seviyesi belirle ve çözüm öner.\n\n[ÖRNEKLER]:\n\nŞikayet: 'Mobil uygulamaya giriş yapamıyorum, şifremi sıfırlamak istiyorum ama SMS gelmiyor'\n→ Kategori: Teknik/Erişim Sorunu\n→ Aciliyet: Yüksek (müşteri bankacılık yapamıyor)\n→ Çözüm: 1) Anında çağrı merkezi araması yönlendir 2) Alternatif doğrulama (email) sun 3) IT'ye SMS gateway ticket aç\n\nŞikayet: 'ATM'den para çekerken ekstra ücret aldınız, iade istiyorum'\n→ Kategori: Ücret/Fiyatlandırma\n→ Aciliyet: Orta\n→ Çözüm: 1) İşlem detayını sorgula 2) Anlaşmalı ATM değilse müşteriyi bilgilendir 3) Goodwill gesture olarak 1 kez iade\n\nŞikayet: 'Kredi başvurum reddedildi ama neden açıklanmadı'\n→ Kategori: Kredi/Red Gerekçesi\n→ Aciliyet: Orta\n→ Çözüm: 1) KKB skorunu paylaş 2) Red nedenini şeffaf açıkla 3) Düzeltme için öneriler sun (ör: kredi kartı borcu kapatma)\n\n[ŞİMDİ SEN ANALİZ ET]:\nŞikayet: 'Yurt dışında kartım bloke oldu, tatilim mahvoldu, kimseye ulaşamadım'\n→ [AI tamamlar]",
        example: "Kategori: Kritik Operasyonel/Müşteri Deneyimi\nAciliyet: ÇOK YÜKSEK (reputasyon riski)\nÇözüm:\n1) Anında müşteriye ulaş ve özür dile\n2) Kartı hemen aktifleştir, acil nakit desteği sun\n3) Tatil boyunca özel yardım hattı ata\n4) Goodwill: Yıllık kart ücreti iadesi + havale ücreti muafiyeti\n5) Root cause: Yurt dışı bildirimi sistemi iyileştirmesi yap"
      },
      {
        title: "Format Belirleme - Segment Karlılık Analizi",
        prompt: "[ROL]: Bireysel segment karlılık analisti olarak görev yapıyorsun.\n\n[GÖREV]: Bireysel müşteri segmentlerimizi (Premium, Standart, Genç) karlılık açısından analiz et.\n\n[ANALİZ METRİKLERİ]:\n- Segment büyüklüğü (müşteri sayısı)\n- Ortalama bakiye (TL)\n- Aylık gelir (ürün bazlı: mevduat, kredi, kart işlem komisyonu)\n- Operasyonel maliyet (şube ziyareti, çağrı merkezi, dijital)\n- Net karlılık (müşteri başına/yıl)\n\n[FORMAT]: Excel tarzı tablo formatında sun:\n\n| Segment | Müşteri | Ort.Bakiye | Mevduat Geliri | Kredi Geliri | Kart Geliri | Maliyet | Net Kar | Kar/Müşteri |\n|---------|---------|------------|----------------|--------------|-------------|---------|---------|-------------|\n\n[EK ANALİZ]: \n- En karlı segment hangisi?\n- Maliyet optimizasyon önerileri\n- Cross-sell ile kar artırım potansiyeli",
        example: "| Segment  | Müşteri | Ort.Bakiye | Mevduat | Kredi | Kart | Maliyet | Net Kar | Kar/Müşteri |\n|----------|---------|------------|---------|-------|------|---------|---------|-------------|\n| Premium  | 50K     | 125K TL    | 2.5M    | 8M    | 1.2M | 4.8M    | 6.9M    | 138 TL/yıl  |\n| Standart | 500K    | 18K TL     | 8M      | 22M   | 6M   | 28M     | 8M      | 16 TL/yıl   |\n| Genç     | 200K    | 3K TL      | 0.5M    | 2M    | 2.5M | 6M      | -1M     | -5 TL/yıl   |\n\nBulgular:\n- Premium en karlı (70x daha fazla)\n- Genç segment zarar ediyor ama future value yüksek\n- Standart segment: Cross-sell ile kredi kartı penetrasyonu artırılmalı"
      }
    ],
    advancedTechniques: [
      {
        title: "1. Açık ve Net Talimat",
        description: "Belirsizlik bırakma. Ne istediğini, hangi formatta, hangi detayda istediğini açıkça belirt.",
        example: "❌ 'Bireysel müşterilere kampanya tasarla'\n✅ 'Maaşını bankamıza yönlendiren 25-40 yaş bireysel müşteriler için 3 aylık welcome kampanyası tasarla. İçerik: kredi kartı, bireysel kredi ve yatırım fonları için özel avantajlar. Hedef: Ayda 500 yeni maaş müşterisi kazanmak. Bütçe: 250K TL. Format: Kampanya brief (1 sayfa) + finansal projeksiyon.'"
      },
      {
        title: "2. Rol Atama",
        description: "AI'a kişilik ve uzmanlık kazandır. Daha empatik ve bağlama uygun yanıtlar al.",
        example: "Prompt: 'Sen 10 yıldır bireysel müşterilerle çalışan, müşteri psikolojisini iyi anlayan bir müşteri deneyimi uzmanısın. Aynı zamanda davranışsal iktisat konusunda da bilgin var. Genç müşterilerin tasarruf yapmakta zorlanma nedenlerini analiz et ve bankamızın mobil uygulamasına ekleyeceğimiz \"gamified saving\" özelliğini tasarla.'"
      },
      {
        title: "3. Adım Adım Düşündürme",
        description: "Karmaşık karar süreçlerini parçalara ayır. Her adımda mantığı görmek daha doğru sonuç verir.",
        example: "Prompt: 'Bir müşteriye ihtiyaç kredisi onayı vermeden önce şu adımları izle:\n\nAdım 1: Gelir durumunu analiz et (maaş, düzenli gelir, ek gelir kaynakları)\nAdım 2: Mevcut borç yükünü hesapla (kredi kartı, diğer krediler, toplam taksit)\nAdım 3: Ödeme kapasitesini belirle (gelirin max %40'ı borç servisi olabilir)\nAdım 4: Kredi skoru ve geçmiş ödeme davranışını kontrol et\nAdım 5: Son karar ver ve limiti/vadeyi belirle\n\nHer adımda bulgularını paylaş ve nihai kararını gerekçelendir.'"
      },
      {
        title: "4. Örnek Verme (Few-Shot Learning)",
        description: "İstediğin yanıt tarzını örneklerle öğret. Tutarlılık ve kalite artar.",
        example: "Prompt: 'Müşteri geri bildirimlerinden insight çıkar:\n\nGeri Bildirim: \"Kredi kartı başvurum 2 gün içinde onaylandı, çok hızlıydı\" → İnsight: Hızlı onay memnuniyet sürücüsü → Aksiyon: \"2 gün garanti\" kampanyası yap\n\nGeri Bildirim: \"Uygulama sürekli hata veriyor, çok sinir bozucu\" → İnsight: Teknik stabilite kritik pain point → Aksiyon: IT'ye öncelikli bug fixing\n\nGeri Bildirim: \"Hesap açarken evraklar çok karışıktı, ne yapacağımı anlamadım\" → İnsight: Onboarding UX zayıf → Aksiyon: Step-by-step guide ve video ekle\n\nŞimdi sen analiz et:\nGeri Bildirim: \"Para transferi yaparken hep IBAN'ı elle giriyorum, kişilerim kayıtlı olmalı\" → [AI tamamlar]'"
      },
      {
        title: "5. Kısıtlamalar ve Format",
        description: "Çıktıyı kontrol altına al. Uzunluk, dil, format, kapsam sınırları belirle.",
        example: "Prompt: 'Bireysel kredi ürün katalogunu özetle.\n\n[KISITLAMALAR]:\n- Sadece aktif pazarlanan 5 ürün\n- Maksimum 150 kelime\n- Teknik terim kullanma (müşteri dilinde)\n- Faiz oranı detayı yok (sadece \"rekabetçi\" de)\n\n[FORMAT]:\nHer ürün için:\n- Ürün Adı\n- Kime uygundur (1 cümle)\n- Ana avantajı (1 cümle)\n- Maksimum tutar ve vade\n\n[TON]: Samimi ve davetkar, satış baskısı yok'"
      }
    ]
  },
  {
    id: 3,
    name: "Kamil Önder",
    title: "Perakende Portföy Yönetimi-1 Bölüm Başkanı",
    department: "Perakende",
    focus: "perakende portföy yönetimi, kredi portföyü, risk yönetimi",
    color: "#dc2626",
    icon: "📊",
    personalizedPrompts: [
      {
        title: "Açık ve Net Talimat - NPL Trend Raporu",
        prompt: "[ROL]: Perakende portföy risk analisti olarak görev yapıyorsun.\n\n[GÖREV]: Perakende kredi portföyümüzdeki NPL (takipteki alacaklar) trendini analiz et ve Q1 2025 için risk haritası oluştur.\n\n[KAPSAM]:\n1. Son 12 ay NPL oranı trendi (aylık)\n2. Ürün bazlı dağılım (konut kredisi, ihtiyaç kredisi, taşıt kredisi, kredi kartı)\n3. Coğrafi dağılım (şehir bazlı top 10)\n4. Erken uyarı sinyalleri (30-60-90 gün gecikme trendi)\n\n[ÇIKTI]:\n- Executive summary (5 bullet point)\n- Trend grafikleri açıklaması\n- Riskli segmentler (kırmızı alarm)\n- 3 öncelikli aksiyon önerisi\n\n[FORMAT]: Management sunumuna hazır, max 2 sayfa",
        example: "NPL Trend Analizi Özet:\n\n1. Genel Durum: NPL oranı %3.2'den %3.8'e yükseldi (son 12 ay)\n2. En Riskli Ürün: Taşıt kredisi (%5.1 NPL - enerji fiyatları etkisi)\n3. Coğrafi Risk: Ankara ve Bursa'da artış trendi (%4.2 ve %4.5)\n4. Erken Uyarı: 30-60 gün bucket'ı %8.2'ye çıktı (risk)\n\nÖncelikli Aksiyonlar:\n1. Taşıt kredisi portföyü: Proaktif restructuring kampanyası\n2. Ankara/Bursa: Bölgesel collection stratejisi\n3. Erken uyarı sistemi: Otomatik SMS/arama tetikleyiciler"
      },
      {
        title: "Rol Atama - Portföy Çeşitlendirme Stratejisi",
        prompt: "[ROL]: Sen 20 yıl tecrübeli bir perakende portföy yöneticisi ve risk uzmanısın. Basel düzenlemeleri, sermaye yeterliliği ve risk ağırlıklı varlık hesaplama konularında derin bilgiye sahipsin.\n\n[BAĞLAM]: Bankamızın perakende kredi portföyü 5.2 Milyar TL. Mevcut dağılım: %60 konut kredisi, %25 ihtiyaç kredisi, %15 taşıt kredisi. Regulatör sermaye rasyomuz %14.2.\n\n[GÖREV]: \n1. Mevcut portföy konsantrasyonunun risklerini değerlendir\n2. Optimal ürün mix'i öner (risk-getiri dengesi)\n3. Yeni hedef dağılımın sermaye ve karlılık etkisini hesapla\n4. 12 aylık geçiş planı tasarla\n\n[KISITLAMALAR]:\n- Sermaye rasyosu min %13 olmalı\n- NPL tahmini max %3.5\n- Büyüme hedefi: %15 (780M TL)",
        example: "Portföy Çeşitlendirme Stratejisi:\n\nMevcut Risk Analizi:\n- Konut %60 → Konsantrasyon riski yüksek, faiz artışı senaryosunda kırılganlık\n- Risk ağırlığı: Konut %35, İhtiyaç %75, Taşıt %75\n\nÖnerilen Hedef Mix:\n- Konut: %55 (5% azalış)\n- İhtiyaç: %30 (5% artış)\n- Taşıt: %15 (sabit)\n\nBeklenen Etki:\n- Sermaye rasyosu: %13.8'e düşer (hala hedefin üstünde)\n- NIM artışı: +0.3bp (ihtiyaç kredisi daha karlı)\n- Diversifikasyon endeksi: 0.62'den 0.68'e iyileşir"
      },
      {
        title: "Adım Adım Düşündürme - Erken Uyarı Sistemi",
        prompt: "[ROL]: Perakende portföy erken uyarı sistemi tasarımcısı olarak çalışıyorsun.\n\n[GÖREV]: NPL'ye dönüşmeden önce riskli kredileri tespit eden bir skorlama modeli tasarla.\n\n[ADIMLAR]:\nADIM 1: Hangi değişkenlerin NPL'yi öngördüğünü belirle (geçmiş veri analizi)\n- Ödeme geçmişi (gecikme sıklığı ve süresi)\n- Kredi kullanım oranı değişimi\n- Gelir/taksit oranı değişimi\n- Ekonomik göstergeler (işsizlik, enflasyon)\n\nADIM 2: Her değişkene risk ağırlığı ata (1-10 skala)\n\nADIM 3: Toplam risk skoru hesaplama formülü oluştur\n\nADIM 4: Risk eşikleri belirle (Yeşil<40, Sarı 40-70, Kırmızı>70)\n\nADIM 5: Her risk seviyesi için müdahale aksiyonu tanımla\n\n[ÇIKTI]: Model dokümantasyonu + aksiyon matrisi",
        example: "Erken Uyarı Risk Skoru Modeli:\n\nADIM 1 - Öngörücü Değişkenler:\n- Son 6 ay gecikme sayısı (korelasyon: 0.72)\n- Kredi kartı kullanım oranı artışı (kor: 0.58)\n- Ödeme/gelir oranı >%50 (kor: 0.65)\n- İşsizlik oranı artışı (kor: 0.41)\n\nADIM 2 - Ağırlıklar:\n- Gecikme: 40 puan (en kritik)\n- Kart kullanım: 25 puan\n- Ödeme yükü: 25 puan\n- İşsizlik: 10 puan\n\nADIM 3 - Formül:\nRisk Skoru = (Gecikme × 4) + (Kart × 2.5) + (Ödeme × 2.5) + (İşsizlik × 1)\n\nADIM 4 & 5 - Aksiyon Matrisi:\nYeşil (0-40): Rutin monitoring\nSarı (41-70): SMS hatırlatma + esnek ödeme önerisi\nKırmızı (71-100): Proaktif arama + restructuring teklifi"
      },
      {
        title: "Örnek Verme (Few-Shot) - Portföy Kalite Kategorileme",
        prompt: "[ROL]: Perakende portföy kalite analisti olarak müşterileri risk kategorilerine ayırıyorsun.\n\n[GÖREV]: Kredi müşterilerini ödeme davranışına göre kategorize et ve her kategori için aksiyon belirle.\n\n[ÖRNEKLER]:\n\nMüşteri Profili: 24 ay kredi, hiç gecikme yok, kredi kartı ödeme tam → Kategori: A (Mükemmel) → Aksiyon: Cross-sell fırsat (ek ürün sun), limit artırımı\n\nMüşteri Profili: 36 ay kredi, 2 kez 15 gün gecikme, kredi kartı min ödeme → Kategori: B (Standart) → Aksiyon: Monitoring, dijital hatırlatmalar\n\nMüşteri Profili: 18 ay kredi, son 3 ayda 2 gecikme (30+ gün), kredi kartı %90 kullanım → Kategori: C (İzleme) → Aksiyon: Proaktif arama, ödeme kolaylığı sun\n\nMüşteri Profili: 12 ay kredi, 90+ gün gecikme, kredi kartı limit aşımı → Kategori: D (NPL Risk) → Aksiyon: Acil restructuring, legal süreç hazırlığı\n\n[ŞİMDİ SEN SINIFLANDIR]:\nMüşteri Profili: 30 ay kredi, son 6 ayda 4 kez gecikme (10-20 gün arası), kredi kartı düzenli ödeme, son 2 ayda gelir %20 düştü\n→ [AI tamamlar]",
        example: "Kategori: C+ (Yakın İzleme - Geçici Zorluk)\n\nAnaliz: Daha önce sorunsuz müşteri, son dönem gelir kaybı yaşamış. Kredi kartı ödeme disiplini devam ediyor (iyi sinyal). 4 gecikme endişe verici ama henüz NPL seviyesinde değil.\n\nAksiyon:\n1. Öncelikli: Müşteriyle temasa geç, durum tespiti (işten çıkarma? geçici?)\n2. Çözüm: 3 ay ödemesiz dönem (grace period) sun\n3. Alternatif: Vade uzatımı teklifiile aylık taksit düşür\n4. İzleme: 15 günde bir otomatik kontrol, iyileşme yoksa B kategorisine düş"
      },
      {
        title: "Format Belirleme - Portföy Vintage Analizi",
        prompt: "[ROL]: Perakende portföy performans analisti olarak görev yapıyorsun.\n\n[GÖREV]: Son 3 yıl kullandırılan kredilerin vintage (yıl kümesi) analizi yap.\n\n[ANALİZ KRİTERLERİ]:\n- Her vintage için toplam kullandırım\n- Yaş bazlı (0-6 ay, 7-12 ay, 13-24 ay, 25+ ay) NPL oranları\n- Kümülatif zarar oranı\n- En iyi ve en kötü performans gösteren vintage\n\n[FORMAT]: Şu tabloda sun:\n\n| Vintage | Kullandırım (M TL) | NPL 0-6 ay | NPL 7-12 ay | NPL 13-24 ay | NPL 25+ ay | Kümülatif Zarar % | Yorum |\n|---------|-------------------|------------|-------------|--------------|-----------|-------------------|-------|\n| 2022    |                   |            |             |              |           |                   |       |\n| 2023    |                   |            |             |              |           |                   |       |\n| 2024    |                   |            |             |              |           |                   |       |\n\n[EK İSTENEN]:\n- Hangi yıl kullandırımı en kaliteliydi?\n- Son kullandırımlarda risk artışı var mı?\n- Kredi politikası değişikliği gerekli mi?",
        example: "| Vintage | Kullandırım | NPL 0-6 | NPL 7-12 | NPL 13-24 | NPL 25+ | Küm.Zarar | Yorum |\n|---------|------------|---------|----------|-----------|---------|-----------|-------|\n| 2022    | 1,850M     | 0.8%    | 1.2%     | 2.1%      | 3.2%    | 2.8%      | En iyi performans |\n| 2023    | 2,100M     | 1.1%    | 1.8%     | 2.8%      | -       | 2.2%*     | Orta, takipte |\n| 2024    | 2,450M     | 1.5%    | 2.3%     | -         | -       | 1.9%*     | Erken NPL yüksek, endişe |\n\n* Henüz mature olmadı, tahmin\n\nBulgular:\n1. 2024 kullandırımları erken NPL gösteriyor (1.5% vs 0.8%)\n2. 2022 en kaliteli vintage (toplam zarar %2.8)\n3. 2024'te kredi politikası gevşemiş olabilir\n\nÖneri: Derhal kredi skorlama eşiklerini gözden geçir, onay süreçlerini sıkılaştır"
      }
    ],
    advancedTechniques: [
      {
        title: "1. Açık ve Net Talimat",
        description: "Spesifik ol. Hangi veriye, hangi döneme, hangi formatta ihtiyacın var - açıkça belirt.",
        example: "❌ 'Portföy riskini analiz et'\n✅ 'Son 24 ay kullandırılan perakende kredilerin (konut, ihtiyaç, taşıt) ürün bazlı NPL oranlarını vintage analiziyle karşılaştır. Her ürün için 0-6-12-18-24 ay NPL maturation curve çiz. En riskli 2 segment için kök neden analizi yap. Çıktı: 1 sayfa executive summary + 3 grafik.'"
      },
      {
        title: "2. Rol Atama",
        description: "AI'a portföy yöneticisi, risk uzmanı gibi roller vererek daha profesyonel ve derinlikli analizler al.",
        example: "Prompt: 'Sen Basel III düzenlemelerini çok iyi bilen, 15 yıl deneyimli bir perakende portföy risk başkanısın. Aynı zamanda makroekonomik göstergelerin kredi portföyüne etkilerini modelleme konusunda uzmansın. Faiz oranı %25'ten %50'ye çıktığında perakende kredi portföyümüzün nasıl etkileneceğini analiz et (NPL, erken ödeme, yeni kullandırım). Stress test senaryosu oluştur.'"
      },
      {
        title: "3. Adım Adım Düşündürme",
        description: "Karmaşık portföy kararlarında AI'ı adım adım mantık yürütmeye zorla. Daha güvenilir sonuçlar verir.",
        example: "Prompt: 'Bir kredi restructuring talebini değerlendirmeden önce:\n\nAdım 1: Müşterinin mevcut borç yükünü hesapla (toplam taksit/gelir oranı)\nAdım 2: Gecikme geçmişini analiz et (kaç kez, ne kadar süre)\nAdım 3: Gelir durumundaki değişimi değerlendir (işsizlik, gelir düşüşü)\nAdım 4: Ödeme kapasitesini yeniden hesapla\nAdım 5: Restructuring parametrelerini belirle (vade uzatma, faiz indirimi) ve NPV etkisini hesapla\n\nHer adımı detaylandır ve restructuring kararını gerekçelendir.'"
      },
      {
        title: "4. Örnek Verme (Few-Shot Learning)",
        description: "İstediğin analiz tarzını örneklerle göster. Tutarlı çıktılar al.",
        example: "Prompt: 'Portföy segmentlerini kaliteye göre sınıfla:\n\nSegment: Konut kredisi, ortalama kredi yaşı 36 ay, NPL %2.1, collection rate %85 → Kalite: İyi → Aksiyon: Mevcut strateji devam\n\nSegment: İhtiyaç kredisi, ortalama yaş 18 ay, NPL %5.2, collection rate %68 → Kalite: Zayıf → Aksiyon: Proaktif collection, yeni kullandırım durdur\n\nŞimdi sen sınıfla:\nSegment: Taşıt kredisi, ortalama yaş 24 ay, NPL %4.8, collection rate %72, trend: NPL son 6 ayda +1.2bp arttı → [AI tamamlar]'"
      },
      {
        title: "5. Kısıtlamalar ve Format",
        description: "Portföy raporlarında formatı ve kısıtları net belirle. Regülatör raporlar gibi.",
        example: "Prompt: 'Aylık portföy kalite raporunu hazırla.\n\n[KISITLAMALAR]:\n- Sadece perakende krediler (ticari hariç)\n- Son 3 ay verisi\n- Müşteri isimleri yok (aggregated data)\n- Regülasyon tanımlarını kullan (90+ gün NPL)\n\n[FORMAT]:\n1. Executive Summary (5 bullet, max 100 kelime)\n2. NPL Trend Grafiği açıklaması\n3. Ürün Bazlı Tablo (konut/ihtiyaç/taşıt)\n4. Risk Flagleri (red/yellow/green)\n5. Aksiyon Önerileri (3 öncelikli)\n\n[ÇIKTI]: PDF'e dönüştürülmeye hazır format'"
      }
    ]
  },
  {
    id: 4,
    name: "İrem Gökalp",
    title: "Ticari ve İşletme Portföy Yönetimi Bölüm Başkanı",
    department: "Ticari",
    focus: "ticari portföy, KOBİ bankacılığı, işletme kredileri",
    color: "#7c3aed",
    icon: "🏪",
    personalizedPrompts: [
      {
        title: "Açık ve Net Talimat - KOBİ Portföy Analizi",
        prompt: "[ROL]: Ticari portföy yönetimi uzmanısın.\n\n[GÖREV]: KOBİ kredi portföyümüzü (toplam 3.8 Milyar TL) sektör ve risk bazında analiz et.\n\n[KAPSAM]:\n1. Top 5 sektörün portföy içindeki payı ve NPL oranları\n2. Ciro bazlı segmentasyon (0-5M, 5-25M, 25-50M, 50M+ TL)\n3. Coğrafi konsantrasyon riski (il bazında)\n4. Teminat yapısı dağılımı\n\n[ÇIKTI]:\n- Sektörel risk matrisi (2x2: Konsantrasyon vs NPL)\n- Büyüme fırsatı olan 3 segment\n- Risk azaltma için 3 aksiyon\n\n[FORMAT]: Yönetim sunumu, 3 sayfa max",
        example: "KOBİ Portföy Analizi:\n\nSektörel Dağılım:\n1. İmalat: %35 (1.33M TL), NPL %4.2\n2. Ticaret: %25 (950M TL), NPL %5.8 (risk!)\n3. Hizmet: %18 (684M TL), NPL %2.9\n4. İnşaat: %12 (456M TL), NPL %7.1 (yüksek risk!)\n5. Diğer: %10\n\nRisk Matrisi:\nYüksek Risk: İnşaat (yüksek NPL + konsantrasyon)\nİzleme: Ticaret (yüksek NPL)\nFırsat: Hizmet sektörü (düşük NPL, büyüme potansiyeli)"
      },
      {
        title: "Rol Atama - KOBİ Müşteri Kazanım Stratejisi",
        prompt: "[ROL]: Sen 12 yıl KOBİ segment portföy yöneticisi olarak çalışan, sektörel dinamikleri çok iyi bilen bir uzmansın. Aynı zamanda KOBİ girişimcilik ekosistemini yakından tanıyorsun ve hangi işletmelerin büyüme potansiyeli olduğunu hızlı tespit edebiliyorsun.\n\n[BAĞLAM]: Bankamızın İzmir bölgesinde KOBİ pazarında %12 payımız var. Hedef: 18 ayda %18'e çıkarmak.\n\n[GÖREV]:\n1. İzmir'deki en yüksek potansiyelli 3 KOBİ sektörünü belirle\n2. Her sektör için ideal müşteri profilini tanımla\n3. Kazanım stratejisi tasarla (kanal, mesaj, teklif)\n4. İlk 6 ay için sayısal hedefler koy\n\n[KISITLAMALAR]:\n- Mevcut risk iştahı çerçevesinde (NPL max %4)\n- Sektör konsantrasyonu max %30\n- Ortalama kredi büyüklüğü min 2M TL",
        example: "İzmir KOBİ Kazanım Stratejisi:\n\nPotansiyel Sektörler:\n1. Medikal Cihaz İmalatı (35 firma, ortalama ciro 15M TL)\n2. Yazılım/Teknoloji (120 firma, yüksek büyüme)\n3. Gıda İhracatı (80 firma, döviz getirici)\n\nHedef Profil (Medikal örnek):\n- Ciro: 10-30M TL\n- Faaliyet süresi: 5+ yıl\n- İhracat oranı: %30+\n- Kurulu banka ilişkisi zayıf\n\nKazanım Taktiği:\n- Kanal: Doğrudan satış + medikal fuarlar\n- Mesaj: Sektör expertise + özel finansman ürünleri\n- İlk teklif: İhracat kredisi + TL işletme kredisi paketi"
      },
      {
        title: "Adım Adım Düşündürme - KOBİ Kredi Değerlendirme",
        prompt: "[ROL]: KOBİ kredi değerlendirme uzmanı.\n\n[GÖREV]: KOBİ kredi başvurusunu adım adım değerlendir.\n\n[ADIMLAR]:\nADIM 1: İşletmenin faaliyet süresini ve sektörünü değerlendir\nADIM 2: Mali tabloları analiz et (son 2 yıl)\nADIM 3: Nakit akış projeksiyonu yap\nADIM 4: Teminat ve kefalet yapısını kontrol et\nADIM 5: Kredi skoru ve geçmiş ödeme davranışını incele\nADIM 6: Limit ve vade önerisi sun\n\n[ÇIKTI]: Onay/red kararı + gerekçe",
        example: "KOBİ Kredi Değerlendirme: ABC Tekstil Ltd.\n\nADIM 1: 8 yıl faaliyet, tekstil imalat\nADIM 2: Ciro 12M TL, FAVÖK 1.8M TL, borç/özkaynak 1.2\nADIM 3: Aylık nakit akışı 150K TL, mevsimsel dalgalanma var\nADIM 4: Fabrika binası teminat (değer 5M TL), ortaklar kefil\nADIM 5: Kredi skoru 680 (orta-iyi), geçmiş ödemeler düzenli\nADIM 6: KARAR: 2M TL işletme kredisi, 12 ay vade, onay"
      },
      {
        title: "Örnek Verme (Few-Shot) - Sektör Risk Kategorileme",
        prompt: "[ROL]: KOBİ sektör risk analisti.\n\n[GÖREV]: KOBİ sektörlerini risk seviyesine göre kategorize et.\n\n[ÖRNEKLER]:\nSektör: Yazılım/Teknoloji, büyüme %25, NPL %1.8 → Risk: Düşük → Strateji: Aktif büyüme\n\nSektör: İnşaat, ekonomik gerileme, NPL %8.5 → Risk: Yüksek → Strateji: Yeni kullandırım durdur\n\nSektör: Gıda perakende, stabil, NPL %3.2 → Risk: Orta → Strateji: Mevcut müşteri odaklı\n\n[ŞİMDİ SEN SINIFLANDIR]:\nSektör: Otomotiv yan sanayi, ihracat odaklı, döviz kuru riski var, NPL %4.5 → [AI tamamlar]",
        example: "Risk: Orta-Yüksek\nNedeni: Döviz kuru volatilitesi, global oto sektörü daralması riski\nStrateji: \n- Seçici büyüme (sadece güçlü müşteriler)\n- Döviz hedge mecburiyeti\n- Yakın monitoring (3 ayda bir gözden geçir)"
      },
      {
        title: "Format Belirleme - KOBİ Portföy Komite Raporu",
        prompt: "[ROL]: KOBİ portföy raporlama uzmanı.\n\n[GÖREV]: Aylık KOBİ kredi komitesi için standart rapor hazırla.\n\n[İÇERİK]:\n- Portföy büyüklüğü ve büyüme\n- Sektör dağılımı ve performans\n- Yeni kullandırımlar (top 10)\n- NPL ve watch list\n- Risk uyarıları\n\n[FORMAT]:\n| Metrik | Değer | Hedef | Varyans | Yorum |\n|--------|-------|-------|---------|-------|\n\n[TON]: Yönetici odaklı, aksiyon odaklı",
        example: "### KOBİ Portföy Komite Raporu - Aralık 2024\n\n**Özet:**\n- Portföy: 3.85M TL (+1.3% mom)\n- NPL: %4.1 (hedef %4.0, hafif üstünde)\n- Yeni kullandırım: 280M TL\n\n| Sektör | Portföy | NPL % | Trend |\n|--------|---------|-------|-------|\n| İmalat | 1.35M | 4.2% | → |\n| Ticaret | 0.95M | 5.8% | ↑ Risk |\n| Hizmet | 0.68M | 2.9% | ↓ İyi |\n\n**Aksiyonlar:**\n1. Ticaret sektörü: Yeni kullandırım durdur, mevcut müşteri review\n2. Hizmet: Büyüme fırsatı, marketing kampanyası"
      }
    ],
    advancedTechniques: [
      {
        title: "1. Açık ve Net Talimat",
        description: "KOBİ analizlerinde belirsizlik düşmanındır. Sektör, büyüklük, bölge gibi parametreleri net belirt.",
        example: "❌ 'KOBİ portföyünü analiz et'\n✅ 'İmalat sektöründe faaliyet gösteren, yıllık ciro 10-50M TL arası, İstanbul ve Kocaeli illerinde bulunan KOBİ müşterilerimizin (toplam 145 firma) son 18 ay kredi kullanım davranışını analiz et. Limit kullanım oranı, cross-sell potansiyeli ve risk skorlaması yap. Çıktı: Excel dosyası + insights raporu.'"
      },
      {
        title: "2. Rol Atama",
        description: "KOBİ segmentine has sorunları anlayan, girişimci dilinde konuşan roller ver.",
        example: "Prompt: 'Sen KOBİ işletmecilerin dilinden çok iyi anlayan, 15 yıl sahada çalışmış bir ticari bankacısın. KOBİ müşterilerimize finansal danışmanlık e-bülten hazırlıyoruz. Konusu: Enflasyon döneminde working capital yönetimi. KOBİ sahibi gibi düşün, onların dilinde yaz, 500 kelime, pratik taktikler ver.'"
      },
      {
        title: "3. Adım Adım Düşündürme",
        description: "KOBİ kredi kararları çok parametreli. Adım adım değerlendirme yaptır.",
        example: "Prompt: 'Bir KOBİ'ye işletme kredisi vermeden önce:\n\nAdım 1: İşletmenin sektörel konumunu değerlendir (sektör büyüyor mu, rekabet?)\nAdım 2: Mali tabloları analiz et (likidite, karlılık, borçlanma)\nAdım 3: Ortak/yönetici profilini incele (deneyim, diğer işler)\nAdım 4: Çek/senet geçmişi sorgula\nAdım 5: Teminat ve kefalet yapısını değerlendir\nAdım 6: Final limit ve şartları belirle'"
      },
      {
        title: "4. Örnek Verme (Few-Shot)",
        description: "KOBİ segment kategorileme, skorlama için örneklerle öğret.",
        example: "Prompt: 'KOBİ'leri büyüme potansiyeline göre kategorize et:\n\nFirma: 8 yıllık plastik ambalaj imalatçısı, ciro %35 büyüdü, 2 yeni müşteri kazandı, dijital dönüşüm yatırımı yapıyor → Kategori: Yüksek Potansiyel → Aksiyon: Proaktif yatırım kredisi teklifi\n\nFirma: 25 yıllık tekstil, ciro stabil, eski ekipman, yenilik yok → Kategori: Olgun/Durağan → Aksiyon: Cross-sell (ödeme sistemleri)\n\nŞimdi sen kategorize et:\nFirma: 5 yıllık e-ticaret lojistik, ciro 3 yılda 4x büyümüş, angel yatırım almış, 2. şube açıyor → [AI tamamlar]'"
      },
      {
        title: "5. Kısıtlamalar ve Format",
        description: "KOBİ raporlarında format standartlaştır. Tekrarlanabilir analiz için şablon kullan.",
        example: "Prompt: 'Aylık KOBİ portföy komitesi raporunu hazırla.\n\n[KISITLAMALAR]:\n- Sadece ticari krediler (>5M TL limit)\n- Son çeyrek verisi\n- Sektör bazlı (en az 10 firma olan sektörler)\n- Firma isimleri anonimleştir\n\n[FORMAT]:\n1. Executive Summary (5 metrik + yorum)\n2. Sektör Performans Tablosu\n3. Yeni Kullandırımlar (top 10)\n4. NPL/Watch List (dikkat gereken)\n5. Aksiyon Planı\n\n[SAYFALAR]: Max 4 sayfa, charts dahil'"
      }
    ]
  },
  {
    id: 5,
    name: "Bekir Eken",
    title: "Perakende Portföy Yönetimi-2 Bölüm Başkanı",
    department: "Perakende",
    focus: "perakende portföy, tahsilat, kredi risk yönetimi",
    color: "#ea580c",
    icon: "📈",
    personalizedPrompts: [
      {
        title: "Açık ve Net Talimat - Tahsilat Stratejisi",
        prompt: "[ROL]: Perakende tahsilat stratejisti olarak çalışıyorsun.\n\n[GÖREV]: NPL portföyündeki (500M TL) tahsilat verimliliğini artırmak için veri tabanlı strateji geliştir.\n\n[ANALİZ KAPSAMI]:\n1. Tahsilat başarı oranlarını kanal bazında karşılaştır (SMS, arama, saha, yasal)\n2. Müşteri segmentlerine göre en etkili yaklaşımları belirle (yaş, gelir, gecikme süresi)\n3. Maliyet-etkinlik analizi (kanal başına tahsilat maliyeti vs toplanan tutar)\n4. Collection scorecard tasarla\n\n[HEDEF]: Tahsilat oranını %35'ten %45'e çıkarmak\n[FORMAT]: Aksiyon planı + 12 aylık tahsilat projeksiyonu",
        example: "Tahsilat Optimizasyonu Analizi:\n\nKanal Performansı:\n- SMS (otomatik): Maliyet 0.5 TL, başarı %8, ortalama tahsilat 850 TL\n- Çağrı merkezi: Maliyet 12 TL, başarı %22, ort. tahsilat 2.1K TL\n- Saha: Maliyet 85 TL, başarı %48, ort. tahsilat 5.8K TL\n\nEn Etkili Segment-Kanal Eşleşmesi:\n- Genç (18-30), <3 ay gecikme → SMS + app bildirimi (düşük maliyet)\n- Orta yaş (31-50), 3-6 ay → Çağrı merkezi (proaktif ödeme planı)\n- 6+ ay → Saha ziyareti (yüksek tutar)\n\nÖneri: Segmentasyona göre kanal mix optimize et, tahmini iyileşme: +10bp collection rate"
      }
    ],
    advancedTechniques: [
      {
        title: "1. Açık ve Net Talimat",
        description: "Tahsilat ve risk analizlerinde metrik, segment ve zaman aralığını net belirt.",
        example: "❌ 'Tahsilat stratejisi yap'\n✅ '90+ gün gecikmiş konut kredisi müşterilerinin (toplam 1.250 kişi, 180M TL) son 6 ay tahsilat kanalı yanıt oranlarını analiz et. Her kanal için (SMS, arama, saha) maliyet-fayda analizi yap. En düşük maliyetle en yüksek tahsilat oranını verecek kanal mix öner. Çıktı: Karar matrisi + 6 aylık projeksiyon.'"
      }
    ]
  },
  {
    id: 6,
    name: "Emre Kamanlı",
    title: "Perakende Portföy Yönetimi 3 Bölüm Başkanı",
    department: "Perakende",
    focus: "perakende portföy, müşteri segmentasyonu, portföy büyümesi",
    color: "#0891b2",
    icon: "💡",
    personalizedPrompts: [
      {
        title: "Açık ve Net Talimat - Büyüme Stratejisi",
        prompt: "[ROL]: Perakende portföy büyüme stratejisti.\n\n[GÖREV]: Perakende kredi portföyünü 12 ayda 1.2 Milyar TL büyütmek için stratejik plan hazırla.\n\n[KAPSAM]:\n1. Mevcut portföy kompozisyonunu analiz et (ürün, segment, coğrafya)\n2. Büyüme fırsatlarını belirle (underserved segmentler, coğrafyalar)\n3. Rekabet analizi (rakiplerin büyüme hızı, pazar payları)\n4. Risk iştahı göz önünde bulundur (NPL hedefi max %3.5)\n\n[ÇIKTI]:\n- Ürün bazlı büyüme hedefleri\n- Müşteri kazanım stratejisi\n- Fiyatlandırma yaklaşımı\n- İlk 6 ay aksiyon planı\n\n[FORMAT]: Stratejik plan dokümanı (5 sayfa)",
        example: "Büyüme Stratejisi:\n\nMevcut Durum: 3.8 Milyar TL portföy\n- Konut %65, İhtiyaç %25, Taşıt %10\n- Coğrafi: İstanbul %40, İzmir %15, Ankara %12, Diğer %33\n\nFırsat Analizi:\n1. Gen-Z segment (22-27 yaş): Underpenetrated, dijital odaklı, hızlı büyüme\n2. Anadolu şehirleri: Pazar payı düşük, rekabetyazılı az\n3. Yeşil konut kredisi: ESG trend, devlet teşvikli\n\nBüyüme Hedefi Dağılımı:\n- Konut: +600M TL (yeşil konut odaklı)\n- İhtiyaç: +400M TL (Gen-Z dijital kampanya)\n- Taşıt: +200M TL (elektrikli araç özel)\n\nAksiyon:\n- Dijital onboarding süresini 48 saatten 24 saate indir\n- Anadolu'da 15 şehirde lokal kampanya"
      }
    ],
    advancedTechniques: [
      {
        title: "1. Açık ve Net Talimat",
        description: "Büyüme stratejilerinde hedef, zaman, kısıt parametrelerini mutlaka belirt.",
        example: "❌ 'Portföyü büyüt'\n✅ '12 ay içinde perakende portföyü 1.2M TL büyütmek için stratejik plan hazırla. Kısıtlar: NPL max %3.5, sermaye rasyosu min %13, yeni müşteri kazanım maliyeti max 500 TL/müşteri. Ürün ve coğrafya bazında hedefleri dağıt, rakip analizi ekle, ilk 6 ay hızlı kazanım taktikleri öner. Format: 5 sayfa strateji dokümanı + Excel finansal model.'"
      }
    ]
  },
  {
    id: 7,
    name: "Faruk Bişiren",
    title: "Kurumsal Şube Bankacılığı Bölüm Başkanı",
    department: "Kurumsal",
    focus: "kurumsal şube operasyonları, müşteri ilişkileri yönetimi",
    color: "#1e40af",
    icon: "🏦",
    personalizedPrompts: [
      {
        title: "Açık ve Net Talimat - Şube Performans Analizi",
        prompt: "[ROL]: Kurumsal şube operasyon yöneticisi.\n\n[GÖREV]: 12 kurumsal şubemizin operasyonel performansını analiz et ve iyileştirme planı hazırla.\n\n[METRİKLER]:\n1. Müşteri memnuniyeti (NPS skoru)\n2. İşlem süresi ortalamaları (kredi onay, işlem hizmetleri)\n3. Cross-sell başarısı (şube başına)\n4. Relationship manager verimliliği (portföy büyüklüğü, müşteri sayısı)\n\n[ÇIKTI]:\n- Şube bazlı performans karnesi\n- Best practice'ler (en iyi 3 şube)\n- İyileştirme gereken alanlar\n- 90 günlük aksiyon planı\n\n[FORMAT]: Dashboard özeti + detay rapor",
        example: "Kurumsal Şube Performans Kartı:\n\nEn İyi Performans: İstanbul Levent Şubesi\n- NPS: 72 (hedef 65)\n- Kredi onay süresi: 3.2 gün (ortalama 5.1)\n- Cross-sell: 4.8 ürün/müşteri\n- RM verimliliği: 18M TL/RM\n\nİyileştirme Gereken: Ankara Çankaya\n- NPS: 48 (düşük)\n- Onay süresi: 7.5 gün (yavaş)\n- Cross-sell: 2.1 (zayıf)\n\nAksiyon: Levent'teki süreç optimizasyonlarını Çankaya'ya replike et, RM eğitimi"
      },
      {
        title: "Rol Atama - Müşteri İlişkileri Stratejisi",
        prompt: "[ROL]: Sen 18 yıldır kurumsal bankacılıkta, özellikle müşteri ilişkileri yönetiminde uzman bir profesyonelsin. C-level yöneticilerle iletişim kurma, ihtiyaç analizi ve uzun vadeli ilişki geliştirme konularında derin deneyime sahipsin.\n\n[GÖREV]: Kurumsal şubelerimiz için 'Client Relationship Excellence' programı tasarla.\n\n[KAPSAM]:\n1. Relationship Manager yetkinlik matrisi\n2. Müşteri segmentasyonu ve ilişki stratejisi (A/B/C müşteri)\n3. Proaktif iletişim takvimi ve içerik önerileri\n4. Ölçüm metrikleri (wallet share, retention rate)\n\n[HEDEF]: Müşteri retention oranını %92'den %96'ya çıkarmak",
        example: "Client Relationship Excellence Programı:\n\nRM Yetkinlikler:\n- Finansal analiz (bilanço okuma, sektör trendi)\n- Danışmanlık satış (çözüm odaklı)\n- C-level iletişim (stratejik konuşma)\n\nİlişki Stratejisi:\nA Segment (50M+ portföy):\n- Çeyrek bazlı yüz yüze stratejik görüşme\n- Özel sektör raporları\n- CFO/CEO networking etkinlikleri\n\nB Segment (10-50M):\n- 6 ayda bir görüşme\n- Aylık dijital insights\n\nC Segment (<10M):\n- Yılda 2 görüşme\n- Self-service dijital platformlar"
      },
      {
        title: "Adım Adım Düşündürme - Yeni Şube Açma Kararı",
        prompt: "[ROL]: Kurumsal şube network planlama uzmanı.\n\n[GÖREV]: Yeni bir kurumsal şube açmak için karar sürecini adım adım değerlendir.\n\n[ADIMLAR]:\nADIM 1: Bölgesel pazar potansiyelini analiz et (kurumsal firma sayısı, sektör dağılımı)\nADIM 2: Rekabet yoğunluğunu değerlendir (mevcut bankalar, pazar payları)\nADIM 3: Mevcut müşteri dağılımını incele (o bölgede kaç müşterimiz var, şubesiz mi hizmet alıyorlar)\nADIM 4: Maliyet-fayda analizi (kira, personel vs gelir projeksiyonu)\nADIM 5: Break-even süresi hesapla\nADIM 6: Karar ver: Aç / Bekle / Red\n\n[ÇIKTI]: Karar notu + 3 yıllık projeksiyon",
        example: "Yeni Şube Değerlendirme: Bursa Nilüfer\n\nADIM 1 - Pazar: 180 büyük kurumsal (imalat ağırlıklı), toplam tahmini kredi ihtiyacı 850M TL\nADIM 2 - Rekabet: 4 banka şubesi var, pazar lideri Bank A (%32)\nADIM 3 - Müşteri: 22 müşterimiz Bursa'da, İstanbul şubeden hizmet alıyor (memnuniyetsizlik var)\nADIM 4 - Maliyet: 2.5M TL/yıl (kira+maaş+operasyon)\nADIM 5 - Break-even: 18. ayda (120M TL portföy gerekli)\nADIM 6 - KARAR: AÇ (yüksek potansiyel, mevcut müşteri hoşnutsuzluğu giderilebilir)"
      },
      {
        title: "Örnek Verme (Few-Shot) - Şube Tipi Belirleme",
        prompt: "[ROL]: Kurumsal şube modelleme uzmanı.\n\n[GÖREV]: Kurumsal şubelerimizi tip ve konsepte göre sınıflandır.\n\n[ÖRNEKLER]:\nŞube: İstanbul Maslak, 8 RM, portföy 850M TL, premium ofis, meeting room 5 → Tip: Flagship → Konsept: Full-service + networking hub\n\nŞube: İzmir Alsancak, 4 RM, portföy 320M TL, standart ofis, meeting 2 → Tip: Standart → Konsept: İlişki odaklı, temel hizmetler\n\nŞube: Kocaeli Gebze, 2 RM, portföy 180M TL, sanayi bölgesi, pratik ofis → Tip: Light → Konsept: Hızlı işlem, saha ağırlıklı\n\n[ŞİMDİ SEN SINIFLANDIR]:\nŞube: Ankara Söğütözü, 6 RM, portföy 520M TL, prestijli plaza, meeting 4, kamu kurumlarına yakın → [AI tamamlar]",
        example: "Tip: Regional Hub\nKonsept: Public sector focus + full corporate service\nÖzellikler:\n- Kamu ihalesi danışmanlığı\n- Treasury ürünleri expertise\n- Düzenli networking (kamu-özel sektör)\nTarget müşteri: Kamu tedarikçileri, büyük kurumsal"
      },
      {
        title: "Format Belirleme - Şube Bütçe Performansı",
        prompt: "[ROL]: Kurumsal şube finansal performans analisti.\n\n[GÖREV]: Aylık şube bazlı bütçe gerçekleşme raporu hazırla.\n\n[ANALİZ KRİTERLERİ]:\n- Gelir (net faiz, komisyon)\n- Operasyon maliyeti\n- Net katkı\n- Bütçe sapması (%)\n\n[FORMAT]:\n| Şube | Hedef Gelir | Gerçekleşen | Maliyet | Net Katkı | Bütçe Var % | Durum |\n|------|-------------|-------------|---------|-----------|-------------|-------|\n\n[EK]: Top 3 performer ve bottom 3 için yorum ekle",
        example: "| Şube | Hedef | Gerçekleşen | Maliyet | Net Katkı | Var % | Durum |\n|------|-------|-------------|---------|-----------|-------|-------|\n| Maslak | 12M | 13.2M | 2.8M | 10.4M | +10% | 🟢 Hedef üstü |\n| Levent | 8M | 8.5M | 2.1M | 6.4M | +6% | 🟢 İyi |\n| Çankaya | 6M | 4.8M | 2.5M | 2.3M | -20% | 🔴 Hedef altı |\n\nYorum:\nTop: Maslak - Yeni kazanılan 2 büyük kurumsal etkili\nBottom: Çankaya - Portföy küçülmesi, aksiyon gerekli"
      }
    ],
    advancedTechniques: [
      {
        title: "1. Açık ve Net Talimat",
        description: "Şube operasyonlarında metrik, zaman dilimi ve karşılaştırma kritelerlerini net belirt.",
        example: "❌ 'Şube performansını analiz et'\n✅ '12 kurumsal şubemizin Q4 2024 performansını analiz et. Metrikler: NPS, cross-sell oranı, işlem süresi, RM verimliliği, bütçe gerçekleşme. Her şubeyi benchmark'a göre skoreala (1-5), en iyi 3 ve en kötü 3 şubeyi detaylandır, iyileştirme aksiyonları sun. Çıktı: Dashboard + detay rapor.'"
      },
      {
        title: "2. Rol Atama",
        description: "Şube yönetimi, müşteri ilişkileri gibi alanlarda deneyim ve perspektif ver.",
        example: "Prompt: 'Sen 15 yıldır kurumsal şube yönetiminde çalışan, operasyonel mükemmellik ve müşteri deneyimi konularında uzman bir yöneticisin. Şube ekiplerini motive etme ve performansı artırma konusunda başarılı track record'un var. Kurumsal şube relationship manager'larına \"Proaktif Müşteri İlişkileri\" eğitim modülü tasarla.'"
      },
      {
        title: "3. Adım Adım Düşündürme",
        description: "Şube açma, kapama, dönüştürme gibi stratejik kararlarda adım adım değerlendirme yaptır.",
        example: "Prompt: 'Bir şubeyi kapatma kararı vermeden önce:\nAdım 1: Şubenin son 3 yıl finansal performansını incele\nAdım 2: Bölgesel pazar potansiyelini tekrar değerlendir\nAdım 3: Müşteri dağılımını analiz et (alternatif şubeye transfer edilebilir mi)\nAdım 4: Maliyetsama yaparak tasarruf hesapla\nAdım 5: Reputasyon riskini değerlendir\nAdım 6: Final karar ver'"
      },
      {
        title: "4. Örnek Verme (Few-Shot)",
        description: "Şube tipi, müşteri segmentasyonu gibi kategorilendirmelerde örneklerle öğret.",
        example: "Prompt: 'Kurumsal müşterileri ilişki yönetimi modeline göre sınıflandır:\n\nMüşteri: Holding A, 250M TL portföy, 12 grup şirketi, her hafta temas → Model: Strategic Partnership (dedicated RM + ürün uzmanı ekibi)\n\nMüşteri: Firma B, 35M TL, tek şirket, ayda bir görüşme → Model: Standard RM (tek RM yeterli)\n\nŞimdi sınıflandır:\nMüşteri: Kooperatif C, 80M TL, 3 şirket, karmaşık yapı, sık finansman ihtiyacı → [AI tamamlar]'"
      },
      {
        title: "5. Kısıtlamalar ve Format",
        description: "Şube raporlarında standart format kullan, karşılaştırılabilir çıktılar al.",
        example: "Prompt: 'Aylık şube performans raporu hazırla.\n\n[KISITLAMALAR]:\n- Sadece kurumsal şubeler\n- Son 2 çeyrek karşılaştırmalı\n- Müşteri isimleri gizli\n- Metrikler standart (NPS, gelir, maliyet, net katkı)\n\n[FORMAT]:\n1. Executive Summary (5 metrik)\n2. Şube bazlı tablo\n3. Best/Worst performers analizi\n4. Aksiyon önerileri\n\n[ÇIKTI]: PowerPoint'e aktarılabilir format'"
      }
    ]
  },
  {
    id: 8,
    name: "Emin Turan",
    title: "Ticari Şube Bankacılığı-1 Bölüm Başkanı",
    department: "Ticari",
    focus: "ticari şube operasyonları, KOBİ ilişkileri",
    color: "#7c3aed",
    icon: "🏪",
    personalizedPrompts: [
      {
        title: "Açık ve Net Talimat - KOBİ Şube Performansı",
        prompt: "[ROL]: Ticari şube operasyon müdürü.\n\n[GÖREV]: 25 ticari şubemizin KOBİ müşteri kazanımı ve portföy büyümesi performansını analiz et.\n\n[METRİKLER]:\n1. Yeni KOBİ kazanımı (şube başına/ay)\n2. Portföy büyüme hızı (%)\n3. Ortalama işlem süresi (kredi onay, hesap açma)\n4. Müşteri memnuniyeti (anket skoru)\n\n[ÇIKTI]:\n- Şube bazlı performans karnesi\n- Coğrafi analiz (hangi bölge daha başarılı)\n- Best practice paylaşımı\n- Düşük performanslı şubeler için aksiyon planı\n\n[FORMAT]: Dashboard + yönetici özeti",
        example: "Ticari Şube Performans Analizi:\n\nTop Performer: İzmir Bornova Şubesi\n- Yeni KOBİ: 18/ay (hedef 12)\n- Büyüme: %22 (ortalama %15)\n- Onay süresi: 2.1 gün (hedef 3)\n- Memnuniyet: 8.4/10\n\nBaşarı Faktörleri: Lokal sanayi bölgesine yakınlık, proaktif saha ziyaretleri, hızlı karar\n\nLow Performer: Ankara Kızılay\n- Yeni KOBİ: 6/ay\n- Büyüme: %8\n\nAksiyon: Bornova şube müdürünün deneyimlerini paylaşım workshop'u"
      },
      {
        title: "Rol Atama - KOBİ Müşteri Deneyimi",
        prompt: "[ROL]: Sen 12 yıldır KOBİ'lerle çalışan, onların dilinden anlayan, ihtiyaçlarını hızlı tespit edebilen bir ticari bankacısın. Şube operasyonlarını müşteri gözüyle değerlendirme yeteneğine sahipsin.\n\n[GÖREV]: Ticari şubelerimizde 'KOBİ Customer Journey' haritası çıkar ve iyileştirme önerileri sun.\n\n[KAPSAM]:\n- İlk temas (keşif)\n- İhtiyaç analizi\n- Teklif sunumu\n- Onay ve kullandırım\n- Devam eden ilişki\n\n[ÇIKTI]: Her aşamada müşteri pain point'leri ve çözüm önerileri",
        example: "KOBİ Customer Journey:\n\n1. İlk Temas:\nPain: Şubeye gitmek zaman kaybı, iş sahibi çok meşgul\nÇözüm: Mobil relationship officer, müşterinin işyerinde buluşma\n\n2. İhtiyaç Analizi:\nPain: Standart sorular, gerçek ihtiyaç anlaşılmıyor\nÇözüm: İşletme ziyareti, sektörel expertise\n\n3. Teklif:\nPain: Karmaşık finansal jargon, anlaşılmaz\nÇözüm: Görselleştirilmiş, senaryolu sunum\n\n4. Onay:\nPain: Çok evrak, uzun süre\nÇözüm: Dijital evrak, 48 saat garanti"
      },
      {
        title: "Adım Adım Düşündürme - Şube Kapasite Planlama",
        prompt: "[ROL]: Ticari şube kapasite planlama uzmanı.\n\n[GÖREV]: Bir ticari şubenin kapasite artırımına ihtiyacı olup olmadığını değerlendir.\n\n[ADIMLAR]:\nADIM 1: Mevcut iş yükünü ölç (müşteri sayısı, işlem hacmi, ziyaret sayısı)\nADIM 2: Personel kapasitesini analiz et (RM sayısı, operasyon personeli)\nADIM 3: Verimlilik metriklerini hesapla (müşteri/RM, işlem/personel)\nADIM 4: Benchmark ile karşılaştır (diğer şubeler, sektör standartı)\nADIM 5: Büyüme projeksiyonunu dahil et (gelecek 12 ay beklenti)\nADIM 6: Karar: Kapasite artırımı gerek / Mevcut yeterli / Optimizasyon öncelikli",
        example: "Kapasite Değerlendirmesi: Bursa Osmangazi Şubesi\n\nADIM 1 - İş Yükü:\n- 180 aktif KOBİ müşteri\n- Aylık 450 işlem\n- 120 müşteri ziyareti/ay\n\nADIM 2 - Personel:\n- 3 RM, 2 operasyon personeli\n\nADIM 3 - Verimlilik:\n- 60 müşteri/RM (benchmark: 50)\n- 90 işlem/operasyon personeli (benchmark: 75)\n\nADIM 4 - Karşılaştırma: Kapasite üstü çalışıyor\n\nADIM 5 - Projeksiyon: +25 yeni müşteri bekleniyor (6 ay)\n\nADIM 6 - KARAR: Acil 1 RM + 1 operasyon personeli ekle"
      },
      {
        title: "Örnek Verme (Few-Shot) - Müşteri İhtiyaç Kategorileme",
        prompt: "[ROL]: Ticari şube müşteri ihtiyaç analisti.\n\n[GÖREV]: KOBİ müşteri taleplerini kategorize et ve doğru ürün/çözüm eşleştir.\n\n[ÖRNEKLER]:\nTalep: İhracat siparişi aldım, 90 gün vadeli ödeme istiyorlar → Kategori: Dış Ticaret Finansmanı → Çözüm: Export factoring + akreditif\n\nTalep: Her ay maaş ödemelerinde nakit sıkıntısı yaşıyorum → Kategori: Working Capital → Çözüm: Rotatif işletme kredisi + maaş ödeme sistemi\n\nTalep: Yeni makine alacağım, 5 yıl vadeli → Kategori: Yatırım Finansmanı → Çözüm: Makine kredisi + leasing karşılaştırması\n\n[ŞİMDİ SEN EŞLEŞTİR]:\nTalep: Müşterilerim kredi kartıyla ödeme yapmak istiyor ama POS cihazım yok → [AI tamamlar]",
        example: "Kategori: Ödeme Çözümleri & Nakit Yönetimi\nÇözüm:\n1. POS cihazı (fiziksel + sanal)\n2. QR kod ödemesi\n3. Online ödeme entegrasyonu\n4. Ek: İşletme hesabıyla entegre, otomatik mutabakat"
      },
      {
        title: "Format Belirleme - Şube Aylık Rapor",
        prompt: "[ROL]: Ticari şube raporlama uzmanı.\n\n[GÖREV]: Şube müdürleri için standart aylık performans raporu şablonu hazırla.\n\n[İÇERİK]:\n- Müşteri kazanımı (yeni/kayıp)\n- Portföy büyümesi (TL ve %)\n- Ürün bazlı dağılım\n- Risk göstergeleri (NPL, watch list)\n- Müşteri memnuniyeti\n- Aksiyon planı (gelecek ay)\n\n[FORMAT]: Tek sayfa özet + detay tablolar\n\n[TON]: Yönetici odaklı, kısa ve net",
        example: "### Ticari Şube Aylık Rapor - Bursa Nilüfer\n**Dönem:** Aralık 2024\n\n**Öne Çıkanlar:**\n- ✅ 14 yeni KOBİ (hedef 12)\n- ✅ Portföy +%3.8 (18M TL)\n- ⚠️ NPL %4.1'e yükseldi (izlemede)\n\n**Ürün Dağılımı:**\n- İşletme kredisi: 45M TL\n- Yatırım kredisi: 12M TL\n- Dış ticaret: 8M TL\n\n**Risk:**\n- NPL: %4.1 (geçen ay %3.7)\n- Watch list: 8 firma\n\n**Gelecek Ay Aksiyonlar:**\n1. İmalat sektörü odaklı kampanya\n2. NPL'deki 2 firmaya proaktif restructuring\n3. Müşteri memnuniyet anketi"
      }
    ],
    advancedTechniques: [
      {
        title: "1. Açık ve Net Talimat",
        description: "Ticari şube analizlerinde segmenti (KOBİ büyüklüğü), coğrafyayı ve metrikleri net belirt.",
        example: "❌ 'Şube performansını değerlendir'\n✅ '25 ticari şubemizin Q4 performansını KOBİ kazanımı, portföy büyümesi, NPL oranı ve müşteri memnuniyeti metriklerinde analiz et. Her şubeyi bölgesel (Marmara, Ege, İç Anadolu) olarak grupla, bölge içi benchmark yap, top 3 ve bottom 3 şubeleri detaylandır. Çıktı: Excel dashboard + 2 sayfa yönetici özeti.'"
      },
      {
        title: "2. Rol Atama",
        description: "Ticari bankacılık ve KOBİ ilişkileri konusunda deneyim ve yaklaşım ver.",
        example: "Prompt: 'Sen 10 yıl sahada KOBİ müşterileriyle çalışmış, onların zorluklarını iyi bilen bir ticari şube müdürüsün. İşletme sahiplerinin günlük operasyonel sorunlarını anlıyor ve hızlı çözümler üretebiliyorsun. Yeni şube müdürlerine \"KOBİ Müşteri İlişkileri El Kitabı\" hazırla.'"
      },
      {
        title: "3. Adım Adım Düşündürme",
        description: "Şube kapasite, yeni şube açma gibi operasyonel kararlarda adım adım analiz yaptır.",
        example: "Prompt: 'Yeni bir ticari şube açmadan önce:\nAdım 1: Bölgedeki KOBİ yoğunluğunu araştır (sanayi bölgesi, ticaret merkezi)\nAdım 2: Rekabet haritası çıkar (kaç banka şubesi var)\nAdım 3: Potansiyel müşteri tabanını tahmin et\nAdım 4: Maliyet-gelir projeksiyonu yap (3 yıl)\nAdım 5: Alternatif modelleri değerlendir (tam şube vs mobil officer)\nAdım 6: Karar ver'"
      },
      {
        title: "4. Örnek Verme (Few-Shot)",
        description: "KOBİ talep kategorileme, şube tipi belirleme gibi sınıflandırmalarda örnekle öğret.",
        example: "Prompt: 'KOBİ finansman taleplerini kategorize et:\n\nTalep: Hammadde alımı için 3 ay vadeli kredi → Kategori: Working Capital → Ürün: Rotatif işletme kredisi\n\nTalep: Yeni fabrika binası inşaatı → Kategori: Yatırım → Ürün: Yatırım kredisi, uzun vade\n\nTalep: Dışarıdan ithalat yapacağım, TL'im yok → Kategori: Döviz ihtiyacı → Ürün: Döviz kredisi + forward\n\nŞimdi sen kategorize et:\nTalep: Online mağaza açtım, müşteriler kartla ödeme yapmak istiyor → [AI tamamlar]'"
      },
      {
        title: "5. Kısıtlamalar ve Format",
        description: "Ticari şube raporlarında standart format ve metrik kullan, karşılaştırılabilir olsun.",
        example: "Prompt: 'Aylık ticari şube performans raporu hazırla.\n\n[KISITLAMALAR]:\n- Sadece ticari şubeler (bireysel/kurumsal hariç)\n- Son 3 ay trendi\n- KOBİ segmenti (ciro <50M TL)\n- Müşteri isimleri anonimleştir\n\n[FORMAT]:\n1. Executive Summary (3 önemli bulgu)\n2. Şube Performans Tablosu\n3. Best Practice (en iyi şube hikayesi)\n4. Improvement Plan (düşük performanslı için)\n\n[SAYFALAR]: Max 3 sayfa'"
      }
    ]
  },
  {
    id: 9,
    name: "Cihan Öztürk",
    title: "Ticari Şube Bankacılığı-2 Bölüm Başkanı",
    department: "Ticari",
    focus: "ticari şube network yönetimi, operasyonel verimlilik",
    color: "#7c3aed",
    icon: "🏢",
    personalizedPrompts: [
      {
        title: "Açık ve Net Talimat - Şube Network Optimizasyonu",
        prompt: "[ROL]: Ticari şube network planlama ve optimizasyon uzmanı.\n\n[GÖREV]: 30 ticari şubemizin coğrafi dağılımını ve verimliliğini analiz et, network optimizasyon planı öner.\n\n[ANALİZ KAPSAMI]:\n1. Coğrafi dağılım ve pazar potansiyeli eşleşmesi\n2. Şube yoğunluğu analizi (overlap, coverage gap)\n3. Şube başına maliyet-gelir analizi\n4. Alternatif modeller (tam şube vs hafif şube vs mobil ekip)\n\n[ÇIKTI]:\n- Kapatılması/dönüştürülmesi önerilen şubeler\n- Yeni açılması gereken bölgeler\n- 24 aylık dönüşüm planı\n- Maliyet tasarrufu ve gelir etkisi\n\n[FORMAT]: Stratejik plan dokümanı + harita görselleştirmesi",
        example: "Network Optimizasyon Planı:\n\nMevcut Durum:\n- 30 şube, 8 ilde\n- Ortalama şube maliyeti: 1.8M TL/yıl\n- 5 şube break-even altında\n\nFindings:\n1. İstanbul Anadolu'da 4 şube var, kanibalizasyon oluşuyor\n2. Gaziantep'te şube yok ama 45 müşterimiz var (potansiyel)\n3. Eskişehir şubesi 3 yıldır zarar ediyor\n\nÖneriler:\n- Kapat: Eskişehir (mobil ekiple hizmet)\n- Dönüştür: İstanbul Anadolu'daki 1 şubeyi light model'e\n- Aç: Gaziantep (full branch)\n\nEtki: -2.5M TL maliyet, +3.8M TL gelir (net +6.3M TL/yıl)"
      }
    ],
    advancedTechniques: [
      {
        title: "1. Açık ve Net Talimat",
        description: "Network planlama gibi stratejik konularda kapsam, zaman ve kısıtları belirt.",
        example: "❌ 'Şube network'ü optimize et'\n✅ '30 ticari şubemizin coğrafi dağılımını analiz et. Her şube için 3 yıllık maliyet-gelir performansını değerlendir, pazar potansiyelini (KOBİ yoğunluğu) haritalandır, overlap ve coverage gap'leri belirt. Kapatma, dönüştürme (light branch) veya yeni açma önerilerini gerekçelendir. 24 aylık roadmap hazırla, finansal etki hesapla. Çıktı: Stratejik plan + harita.'"
      },
      {
        title: "2. Rol Atama",
        description: "Network stratejisi, operasyonel verimlilik konularında liderlik perspektifi ver.",
        example: "Prompt: 'Sen 12 yıl şube network yönetimi yapmış, operasyonel verimliliği artırarak maliyetleri düşüren ve aynı zamanda müşteri deneyimini bozmadan kanal dönüşümlerini başarıyla yöneten bir yöneticisin. Ticari şube network'ümüz için 3 yıllık \"Digital First, Branch Light\" stratejisi hazırla.'"
      },
      {
        title: "3. Adım Adım Düşündürme",
        description: "Şube kapatma, dönüştürme gibi hassas kararlarda adım adım risk-fayda analizi yaptır.",
        example: "Prompt: 'Bir şubeyi kapatma/dönüştürme kararı öncesi:\nAdım 1: Son 3 yıl finansal performans (zarar mı?)\nAdım 2: Bölge pazar potansiyeli değişmiş mi? (sanayi taşınmış, ekonomik gerileme)\nAdım 3: Müşteri sadakati ve alternatif hizmet kanalları (dijital, diğer şube mesafesi)\nAdım 4: Maliyet-fayda: Kapatmanın tasarrufu vs müşteri kaybı riski\nAdım 5: Alternatifleri değerlendir (light branch, mobil RM)\nAdım 6: Karar ver'"
      },
      {
        title: "4. Örnek Verme (Few-Shot)",
        description: "Şube tipi, model dönüşümü gibi sınıflandırmalarda örneklerle öğret.",
        example: "Prompt: 'Şubeleri dönüşüm modeline göre sınıflandır:\n\nŞube: Ankara Çankaya, 250 KOBİ, high-touch, karmaşık talepler → Model: Full Service Branch (mevcut)\n\nŞube: Kayseri, 80 KOBİ, basit talepler, dijital adoption yüksek → Model: Light Branch (2 personel, appointment-based)\n\nŞube: Zonguldak, 35 KOBİ, düşük işlem, uzak → Model: Mobile RM + Digital (şube kapatma)\n\nŞimdi sınıflandır:\nŞube: Bursa İnegöl, 120 KOBİ, mobilya sektörü, yoğun dış ticaret işlemleri, saha ziyareti önemli → [AI tamamlar]'"
      },
      {
        title: "5. Kısıtlamalar ve Format",
        description: "Stratejik raporlarda finansal etki, zaman planı gibi kritik bilgileri standartlaştır.",
        example: "Prompt: 'Şube network optimizasyon planı hazırla.\n\n[KISITLAMALAR]:\n- 24 aylık zaman dilimi\n- Müşteri kaybı max %5\n- Toplam maliyet kesintisi hedefi min 10%\n- Regülatör gerekliliklere uygun\n\n[FORMAT]:\n1. Executive Summary (1 sayfa)\n2. Mevcut Durum Analizi (şube bazlı metrikler)\n3. Öneriler (kapat/dönüştür/aç detayları)\n4. Roadmap (Gantt chart)\n5. Finansal Etki (maliyet-gelir projeksiyonu)\n\n[ÇIKTI]: Yönetim kurulu sunumuna hazır döküman'"
      }
    ]
  },
  {
    id: 10,
    name: "Dr. Serdar Eldemir",
    title: "İstanbul Şube Bankacılığı Bölüm Başkanı",
    department: "Şube",
    focus: "İstanbul bölgesi şube yönetimi, bölgesel stratejiler",
    color: "#db2777",
    icon: "🌆",
    personalizedPrompts: [
      {
        title: "Açık ve Net Talimat - İstanbul Şube Stratejisi",
        prompt: "[ROL]: İstanbul bölge şube stratejisti.\n\n[GÖREV]: İstanbul'daki 45 şubemizin (kurumsal, ticari, bireysel) performansını bölgesel analiz et ve 2025 stratejisi hazırla.\n\n[ANALİZ]:\n1. İlçe bazlı pazar payı ve potansiyel (Avrupa/Anadolu yakası)\n2. Şube tipi bazlı performans (flagship, standart, hafif)\n3. Rakip yoğunluğu ve rekabet dinamikleri\n4. Demografik değişimler ve etkileri\n\n[ÇIKTI]:\n- Bölgesel büyüme fırsatları\n- Şube açma/kapatma/dönüştürme önerileri\n- Segment bazlı stratejiler (kurumsal Maslak'ta, perakende Anadolu'da gibi)\n- 12 aylık aksiyon planı\n\n[FORMAT]: Stratejik sunum (20 slayt)",
        example: "İstanbul Şube Stratejisi 2025:\n\nBölgesel Bulgular:\nAnadolu Yakası:\n- Yüksek büyüme (genç nüfus, yeni konut projeleri)\n- Perakende potansiyeli güçlü\n- Şube sayımız yetersiz (18 şube, %40 pazar potansiyeli)\n\nAvrupa Yakası:\n- Olgun pazar\n- Kurumsal yoğunluk (Maslak, Levent)\n- Şube sayımız fazla, kanibalizasyon var\n\nStrateji:\n1. Anadolu'da 5 yeni şube aç (Ümraniye, Kartal, Maltepe)\n2. Avrupa'da 2 şubeyi light model'e dönüştür\n3. Maslak/Levent: Kurumsal flagship konsept güçlendir\n4. Anadolu: Genç müşteri odaklı, dijital entegre şubeler"
      }
    ],
    advancedTechniques: [
      {
        title: "1. Açık ve Net Talimat",
        description: "Bölgesel stratejilerde coğrafi detay, segment ayrımı ve zaman planı belirt.",
        example: "❌ 'İstanbul şubelerini analiz et'\n✅ 'İstanbul'daki 45 şubemizi Avrupa/Anadolu yakası olarak grupla, ilçe bazlı pazar potansiyeli ve mevcut penetrasyonu karşılaştır. Şube tipine göre (flagship/standart/light) performans metriklerini değerlendir, demografik trend ve rakip haritasını dahil et. 2025 için bölge bazlı büyüme stratejisi ve şube network dönüşüm planı öner. Çıktı: 20 slaytlık stratejik sunum.'"
      },
      {
        title: "2. Rol Atama",
        description: "Bölgesel liderlik, şehir dinamiklerini anlama perspektifi ver.",
        example: "Prompt: 'Sen 15 yıldır İstanbul bankacılık pazarında çalışan, şehrin her bölgesinin sosyo-ekonomik dinamiklerini yakından tanıyan bir bölge yöneticisisin. Avrupa ve Anadolu yakasının farklı müşteri profillerini, rekabet yapısını ve büyüme trendlerini çok iyi biliyorsun. İstanbul için 3 yıllık şube network master planı hazırla.'"
      },
      {
        title: "3. Adım Adım Düşündürme",
        description: "Bölgesel stratejilerde pazar analizi, rekabet, müşteri davranışı gibi katmanları adım adım ele al.",
        example: "Prompt: 'İstanbul bölgesi için stratejik plan hazırlarken:\nAdım 1: Demografik analiz (nüfus yoğunluğu, gelir dağılımı, yaş profili)\nAdım 2: Mevcut şube network'ümüz ve performansı\nAdım 3: Rakip bankların şube yoğunluğu ve konumlanması\nAdım 4: Pazar payımız ve potansiyel (bölge bazlı gap analizi)\nAdım 5: Büyüme trendleri (yeni konut projeleri, ofis bölgeleri)\nAdım 6: Strateji: Hangi bölgeye yatırım, hangi bölgede optimize'"
      },
      {
        title: "4. Örnek Verme (Few-Shot)",
        description: "Bölgeleri potansiyel, strateji tipine göre sınıflandırırken örneklerle öğret.",
        example: "Prompt: 'İstanbul ilçelerini strateji kategorisine göre sınıflandır:\n\nİlçe: Maslak/Levent, kurumsal yoğun, premium segment → Kategori: Corporate Hub → Strateji: Flagship şubeler, high-touch servis\n\nİlçe: Ümraniye, genç nüfus, orta gelir, hızlı büyüme → Kategori: Growth Zone → Strateji: Yeni şubeler, dijital entegre, perakende odaklı\n\nİlçe: Beyoğlu merkez, olgun pazar, yüksek rekabet → Kategori: Mature/Optimize → Strateji: Verimlilik odaklı, light branch\n\nŞimdi sen sınıflandır:\nİlçe: Başakşehir, yeni yerleşim, aileleryeni taşındı, konut odaklı → [AI tamamlar]'"
      },
      {
        title: "5. Kısıtlamalar ve Format",
        description: "Bölgesel strateji raporlarında standart metrik, zaman dilimi ve format kullan.",
        example: "Prompt: 'İstanbul bölgesi yıllık stratejik plan hazırla.\n\n[KISITLAMALAR]:\n- 12 aylık planlama dönemi\n- Bölge bazlı (Avrupa/Anadolu, ilçe detaylı)\n- Segment ayrımında (bireysel/ticari/kurumsal)\n- Finansal hedefler dahil (büyüme, karlılık)\n\n[FORMAT]:\n1. Executive Summary (2 slayt)\n2. Mevcut Durum (pazar, şube, performans - 5 slayt)\n3. Bölgesel Stratejiler (8 slayt)\n4. Aksiyon Planı (3 slayt)\n5. Finansal Hedefler (2 slayt)\n\n[TOTAL]: 20 slayt, yönetim kurulu sunumu'"
      }
    ]
  },
  {
    id: 11,
    name: "Mustafa Cenksal Koçak",
    title: "Tarımsal Bankacılık Bölüm Başkanı",
    department: "Tarımsal",
    focus: "tarımsal finansman, çiftçi kredileri, tarım teknolojileri",
    color: "#16a34a",
    icon: "🌾",
    personalizedPrompts: [
      {
        title: "Açık ve Net Talimat - Tarımsal Kredi Portföy Analizi",
        prompt: "[ROL]: Tarımsal bankacılık portföy analisti.\n\n[GÖREV]: Tarımsal kredi portföyümüzü (1.2 Milyar TL) ürün tipi, bölge ve mevsimsellik açısından analiz et.\n\n[KAPSAM]:\n1. Ürün tipi dağılımı (tohum, gübre, ekipman, arazi alımı)\n2. Coğrafi dağılım (bölge ve il bazında)\n3. Mevsimsel kredi kullanım ve geri ödeme patternleri\n4. Risk profili (kuraklık, don, fiyat dalgalanması)\n\n[ÇIKTI]:\n- Segment bazlı performans\n- Riskli bölgeler ve ürünler\n- Mevsimsel likidite planlaması\n- İklim değişikliği risk senaryosu\n\n[FORMAT]: Yönetim raporu + risk haritası",
        example: "Tarımsal Portföy Analizi:\n\nÜrün Dağılımı:\n- Tohum/Gübre: 450M TL (%38) - kısa vadeli, mevsimsel\n- Ekipman: 380M TL (%32) - orta vadeli\n- Arazi: 280M TL (%23) - uzun vadeli\n- Diğer: 90M TL\n\nCoğrafi:\n- Çukurova: %28 (pamuk, mısır)\n- Ege: %22 (zeytin, üzüm)\n- İç Anadolu: %18 (buğday)\n\nMevsimsellik:\n- Mart-Mayıs: Yüksek kullandırım (ekim sezonu)\n- Eylül-Kasım: Yüksek tahsilat (hasat)\n\nRisk: Çukurova'da kuraklık riski, güney bölgede su stresi"
      },
      {
        title: "Rol Atama - Çiftçi Eğitim Programı",
        prompt: "[ROL]: Sen 15 yıldır tarımsal finansman alanında çalışan, çiftçilerin dilinden anlayan, modern tarım teknikleri konusunda bilgi sahibi bir tarımsal bankacılık uzmanısın.\n\n[GÖREV]: Çiftçi müşterilerimiz için \"Akıllı Tarım ve Finansman Yönetimi\" eğitim programı tasarla.\n\n[İÇERİK]:\n- Kredi türleri ve doğru kullanım\n- Mevsimsel nakit akışı yönetimi\n- Devlet destekleri ve başvuru\n- Dijital tarım araçları\n- Risk yönetimi (sigorta, forward)\n\n[HEDEF]: Çiftçilerin finansal okuryazarlığını artırmak, kredilerin etkin kullanımını sağlamak",
        example: "Çiftçi Eğitim Programı:\n\nModül 1: Tarımsal Krediler 101\n- İşletme kredisi vs yatırım kredisi\n- Faiz hesaplama\n- Geri ödeme planlaması\n\nModül 2: Nakit Akışı Planlama\n- Ekim-hasat döngüsü\n- Masraf takvimi\n- Beklenmedik durumlar için rezerv\n\nModül 3: Devlet Destekleri\n- Hangi destekler var?\n- Nasıl başvurulur?\n- Bankadan nasıl entegre edilir?\n\nModül 4: Modern Tarım\n- Akıllı sulama\n- Drone ile tarla analizi\n- Dijital ürün takibi"
      },
      {
        title: "Adım Adım Düşündürme - Tarımsal Kredi Onay Süreci",
        prompt: "[ROL]: Tarımsal kredi değerlendirme uzmanı.\n\n[GÖREV]: Bir çiftçinin tarımsal kredi talebini değerlendirirken adım adım analiz yap.\n\n[ADIMLAR]:\nADIM 1: Çiftçinin deneyimini ve geçmiş üretim performansını değerlendir\nADIM 2: Arazi büyüklüğü, lokasyon ve toprak kalitesini incele\nADIM 3: Ekilen ürün ve pazar fiyat trendini analiz et\nADIM 4: Mevsimsel nakit akışı ve geri ödeme kapasitesini hesapla\nADIM 5: İklim riski ve sigorta durumunu kontrol et\nADIM 6: Devlet desteği uygunluğunu değerlendir\nADIM 7: Kredi miktarı ve vadeyi belirle\n\n[ÇIKTI]: Onay/red kararı + gerekçe",
        example: "Kredi Değerlendirme: Ahmet Yılmaz - Buğday Üretimi\n\nADIM 1: 12 yıl çiftçilik deneyimi, son 3 yıl istikrarlı üretim\nADIM 2: 50 dönüm, Konya Ereğli, kuru tarım, orta kalite toprak\nADIM 3: Buğday fiyatı 6.5 TL/kg, son 2 yıl stabil\nADIM 4: Tahmini gelir 325K TL, maliyet 180K TL, net 145K TL\nADIM 5: TARSİM sigortası mevcut, don riski orta\nADIM 6: Mazot desteği ve gübre desteği alıyor\nADIM 7: KARAR: 80K TL işletme kredisi, 12 ay vade, hasat sonrası ödeme"
      },
      {
        title: "Örnek Verme (Few-Shot) - Tarımsal Ürün Kategorileme",
        prompt: "[ROL]: Tarımsal kredi ürün uzmanı.\n\n[GÖREV]: Çiftçi taleplerini doğru kredi ürünüyle eşleştir.\n\n[ÖRNEKLER]:\nTalep: Ekim için tohum ve gübre almam gerekiyor → Kategori: Mevsimsel İşletme → Ürün: Kısa vadeli işletme kredisi (6-12 ay)\n\nTalep: Yeni traktör alacağım → Kategori: Yatırım → Ürün: Tarımsal ekipman kredisi (36-60 ay) + leasing seçeneği\n\nTalep: Seramda kuracağım, arazi aldım → Kategori: Sabit Yatırım → Ürün: Tarımsal proje kredisi (uzun vade) + devlet desteği\n\n[ŞİMDİ SEN EŞLEŞTİR]:\nTalep: Hasat sonrası ürünlerimi depolamak için soğuk hava deposu kuracağım → [AI tamamlar]",
        example: "Kategori: Alt Yapı Yatırımı\nÜrün: Tarımsal yatırım kredisi (60-120 ay vade)\nEk Hizmetler:\n- Proje fizibilitesi desteği\n- TKDK desteği başvuru rehberliği\n- Enerji verimliliği danışmanlığı (maliyet düşürme)"
      },
      {
        title: "Format Belirleme - Mevsimsel Kredi Kullanım Raporu",
        prompt: "[ROL]: Tarımsal bankacılık raporlama uzmanı.\n\n[GÖREV]: Mevsimsel kredi kullanım ve tahsilat performansını raporla.\n\n[METRİKLER]:\n- Aylık kredi kullandırım (ürün bazlı)\n- Tahsilat oranı (hasat dönemleri)\n- NPL oranı (bölge ve ürün bazlı)\n- Devlet desteği entegrasyonu\n\n[FORMAT]:\n| Dönem | Ürün | Kullandırım (M TL) | Tahsilat (M TL) | NPL % | Yorum |\n|-------|------|-------------------|-----------------|-------|-------|\n\n[EK]: Mevsimsel trend analizi ve bir sonraki sezon projeksiyonu",
        example: "| Dönem | Ürün | Kullandırım | Tahsilat | NPL | Yorum |\n|-------|------|-------------|----------|-----|-------|\n| Mar-May | Tohum/Gübre | 180M | 15M | 2.1% | Ekim sezonu pik |\n| Jun-Aug | Ekipman | 85M | 95M | 1.8% | Hasat öncesi yatırım |\n| Sep-Nov | Genel | 45M | 280M | 1.5% | Hasat tahsilatı yüksek |\n| Dec-Feb | Düşük | 25M | 35M | 3.2% | Sezon dışı |\n\nTrend: Ekim (Mar-May) ve hasat (Sep-Nov) net döngü. NPL Aralık-Şubat'ta artıyor (likidite sıkışması)."
      }
    ],
    advancedTechniques: [
      {
        title: "1. Açık ve Net Talimat",
        description: "Tarımsal analizlerde mevsimsellik, bölge, ürün tipi gibi parametreleri mutlaka belirt.",
        example: "❌ 'Tarımsal kredi portföyünü analiz et'\n✅ 'Tarımsal kredi portföyümüzü (1.2M TL) ürün tipi (tohum, ekipman, arazi), bölge (7 coğrafi bölge) ve mevsimsel döngü açısından analiz et. Son 24 ay kullandırım ve tahsilat patternlerini incele, NPL'yi bölge ve ürün bazında kır, iklim riski (kuraklık, don) senaryolarını dahil et. Çıktı: Risk haritası + mevsimsel projeksiyon.'"
      },
      {
        title: "2. Rol Atama",
        description: "Tarımsal bankacılıkta çiftçi psikolojisi, mevsimsel döngüler konusunda deneyim ver.",
        example: "Prompt: 'Sen 12 yıldır tarımsal finansman alanında çalışan, çiftçilerin dilinden ve ihtiyaçlarından çok iyi anlayan, aynı zamanda modern tarım teknolojileri ve iklim değişikliği etkilerini takip eden bir uzmansın. Çiftçi müşterilerimiz için \"İklim Değişikliğine Uyum ve Akıllı Tarım\" rehberi hazırla.'"
      },
      {
        title: "3. Adım Adım Düşündürme",
        description: "Tarımsal kredi kararlarında birden fazla risk faktörü var, adım adım değerlendirme kritik.",
        example: "Prompt: 'Tarımsal kredi onayı öncesi:\nAdım 1: Çiftçi deneyimi ve geçmiş üretim\nAdım 2: Arazi kalitesi ve lokasyon\nAdım 3: Ürün pazar analizi\nAdım 4: Mevsimsel nakit akışı\nAdım 5: İklim/doğa riski\nAdım 6: Sigorta durumu\nAdım 7: Devlet desteği\nAdım 8: Final karar'"
      },
      {
        title: "4. Örnek Verme (Few-Shot)",
        description: "Çiftçi taleplerini ürün kategorisiyle eşleştirirken örneklerle öğret.",
        example: "Prompt: 'Tarımsal talepleri ürün ile eşleştir:\n\nTalep: Tohum alacağım → İşletme kredisi kısa vade\nTalep: Traktör alacağım → Ekipman kredisi orta vade\nTalep: Sera kuracağım → Yatırım kredisi uzun vade + devlet desteği\n\nŞimdi eşleştir:\nTalep: Damla sulama sistemi kuracağım → [AI tamamlar]'"
      },
      {
        title: "5. Kısıtlamalar ve Format",
        description: "Tarımsal raporlarda mevsimselliği ve bölgesel farklılıkları standart formatta sun.",
        example: "Prompt: 'Mevsimsel tarımsal kredi raporu hazırla.\n\n[KISITLAMALAR]:\n- 4 mevsim bazlı\n- Ürün tipi ayrımında\n- Bölge bazlı risk dahil\n- NPL ve tahsilat performansı\n\n[FORMAT]:\n1. Özet (mevsimsel highlights)\n2. Tablo (dönem, ürün, kullandırım, tahsilat)\n3. Risk Analizi (bölge, iklim)\n4. Bir Sonraki Sezon Projeksiyonu'"
      }
    ]
  },
  {
    id: 12,
    name: "Özlem Melek Sezer",
    title: "Veri Analitiği Bölüm Başkanlığı",
    department: "Teknoloji",
    focus: "veri analitiği, big data, iş zekası, makine öğrenmesi",
    color: "#2563eb",
    icon: "📊",
    personalizedPrompts: [
      {
        title: "Açık ve Net Talimat - Müşteri Segmentasyon Modeli",
        prompt: "[ROL]: Veri bilimci ve müşteri analitiği uzmanı.\n\n[GÖREV]: Bireysel müşteri tabanımızı (2.5M müşteri) davranış bazlı segmentlere ayıran makine öğrenmesi modeli tasarla.\n\n[VERİ KAYNAKLARI]:\n- İşlem verileri (son 12 ay)\n- Ürün kullanımı (hangi ürünler aktif)\n- Dijital davranış (app, web kullanımı)\n- Demografik bilgiler\n\n[MODEL ÇIKTISI]:\n- 5-7 farklı segment (örn: Dijital Native, Geleneksel, Yatırımcı)\n- Her segmentin özellikleri\n- Segment bazlı aksiyon önerileri\n- Model doğruluğu ve validasyon metrikleri\n\n[ÇIKTI]:\n- Model dokümantasyonu\n- Segment profil kartları\n- Business aksiyonlar\n\n[FORMAT]: Teknik rapor + business özeti",
        example: "Müşteri Segmentasyon Modeli:\n\nYöntem: K-Means Clustering + RFM Analizi\n\nSegmentler:\n1. Digital Natives (18-30 yaş, %22)\n- Yüksek app kullanımı, düşük şube\n- Ürünler: Kredi kartı, dijital cüzdan\n- Aksiyon: Gamification, sosyal medya kampanyaları\n\n2. Traditional Savers (50+ yaş, %28)\n- Şube odaklı, mevduat yoğun\n- Düşük dijital\n- Aksiyon: Dijital onboarding desteği\n\n3. Investors (35-55, yüksek gelir, %15)\n- Yatırım ürünleri aktif\n- Yüksek wallet share\n- Aksiyon: Premium hizmet, özel danışmanlık\n\nModel Performansı:\n- Silhouette score: 0.68\n- Segment ayrımı net"
      },
      {
        title: "Rol Atama - AI Tabanlı Fraud Detection",
        prompt: "[ROL]: Sen makine öğrenmesi ve fraud detection konusunda 10 yıl deneyime sahip bir veri bilimcisin. Bankacılık fraud patternlerini çok iyi tanıyorsun ve real-time sistemler kurma expertise'ine sahipsin.\n\n[GÖREV]: Kredi kartı işlemlerinde fraud (dolandırıcılık) tespiti yapan AI model tasarla.\n\n[KAPSAM]:\n- Feature engineering (hangi veriler kullanılacak)\n- Model seçimi (Random Forest, Neural Network, Anomaly Detection)\n- Real-time vs batch processing\n- False positive oranını minimize etme\n- Business kuralları entegrasyonu\n\n[HEDEF]: Fraud tespiti %85'ten %95'e çıkarmak, false positive %10'dan %3'e düşürmek",
        example: "Fraud Detection AI Modeli:\n\nFeature Set:\n- İşlem tutarı (ortalamadan sapma)\n- İşlem saati (gece vs gündüz)\n- Lokasyon (ev/iş vs yeni lokasyon)\n- İşlem sıklığı (normalden fazla mı)\n- Merchant tipi (risk kategorisi)\n- Cihaz değişimi\n\nModel: Ensemble (Random Forest + LSTM)\n- Random Forest: Kural bazlı patternler\n- LSTM: Zaman serisi anomali\n\nReal-Time Pipeline:\n1. İşlem gelir → Feature extract (50ms)\n2. Model inference (100ms)\n3. Risk skoru > 0.85 → SMS onay\n4. Skor > 0.95 → İşlem bloke\n\nBeklenen Performans:\n- Fraud detection: %93\n- False positive: %4\n- Latency: <200ms"
      },
      {
        title: "Adım Adım Düşündürme - Veri Analitiği Projesi Planı",
        prompt: "[ROL]: Veri analitiği proje yöneticisi.\n\n[GÖREV]: Yeni bir veri analitiği projesini baştan sona planla.\n\n[ADIMLAR]:\nADIM 1: Business problemi ve hedefleri net tanımla\nADIM 2: Gerekli veri kaynaklarını belirle (internal, external)\nADIM 3: Veri kalitesini değerlendir (eksiklik, tutarsızlık)\nADIM 4: Analitik yaklaşım seç (descriptive, predictive, prescriptive)\nADIM 5: Proof of Concept (POC) ile feasibility test et\nADIM 6: Production pipeline tasarla (data engineering, model deployment)\nADIM 7: Monitoring ve sürekli iyileştirme planı\nADIM 8: Business entegrasyonu ve adoption stratejisi\n\n[ÇIKTI]: Proje planı + timeline + resource planning",
        example: "Veri Analitiği Projesi: Churn Prediction\n\nADIM 1: Problem: Bireysel müşteri kaybını 3 ay önceden tahmin et\nADIM 2: Veri: İşlem logu, ürün kullanımı, müşteri hizmetleri iletişimi, NPS\nADIM 3: Kalite: %8 eksik veri (imputation gerek), 2 tabloda tutarsızlık var\nADIM 4: Yaklaşım: Predictive (classification)\nADIM 5: POC: 6 aylık veri ile test, %78 accuracy\nADIM 6: Pipeline: Airflow ile günlük batch, model retrain aylık\nADIM 7: Monitoring: Model drift detection, aylık performa ns review\nADIM 8: Adoption: CRM entegrasyonu, retention ekibine dashboard\n\nTimeline: 4 ay (POC 1 ay, production 3 ay)"
      },
      {
        title: "Örnek Verme (Few-Shot) - Veri Kalite Sorunları",
        prompt: "[ROL]: Veri kalite analisti.\n\n[GÖREV]: Veri kalite sorunlarını tespit et ve çözüm öner.\n\n[ÖRNEKLER]:\nSorun: Müşteri yaş alanında negatif değerler var → Tip: Data Validation Error → Çözüm: Input validation rule ekle, mevcut veriyi temizle\n\nSorun: Aynı müşteri 3 farklı ID ile kayıtlı → Tip: Duplication → Çözüm: Master data management, entity resolution\n\nSorun: İşlem tarihleri gelecekte → Tip: Timestamp Error → Çözüm: Sistem saati kontrolü, veri import validasyonu\n\n[ŞİMDİ SEN TANI]:\nSorun: Kredi başvuru tablosunda onay tarihi, başvuru tarihinden önce → [AI tamamlar]",
        example: "Tip: Logical Inconsistency (İş Kuralı İhlali)\nKök Neden: Farklı sistemler arasında zaman senkronizasyonu yok veya manuel veri girişi hatası\nÇözüm:\n1. Kısa vade: SQL constraint ekle (onay_tarihi >= başvuru_tarihi)\n2. Orta vade: ETL pipeline'a data quality check ekle\n3. Uzun vade: Zaman serisi tutarlılık testi otomasyonu\n4. Mevcut veri: Anomali kayıtları data steward'a escalate"
      },
      {
        title: "Format Belirleme - Aylık Analitiği Raporu",
        prompt: "[ROL]: Veri analitiği raporlama uzmanı.\n\n[GÖREV]: Yönetim için aylık veri analitiği ve AI performans raporu hazırla.\n\n[İÇERİK]:\n- Aktif modeller ve performans metrikleri\n- Yeni insight'lar (business değeri)\n- Veri kalitesi göstergeleri\n- AI/ML proje durumları\n- Bir sonraki ay planı\n\n[FORMAT]:\n| Model | Kullanım Alanı | Performans | Trend | Business Etkisi |\n|-------|----------------|------------|-------|----------------|\n\n[TON]: Executive-friendly, teknik detay minimize, business değer vurgusu",
        example: "### Veri Analitiği Aylık Rapor - Aralık 2024\n\n**Özet:**\n- 8 aktif production modeli\n- Churn prediction ile 1.2M TL müşteri kaybı önlendi\n- Veri kalitesi %94 (target %95)\n\n**Model Performans Tablosu:**\n| Model | Alan | Performans | Trend | Etki |\n|-------|------|------------|-------|------|\n| Churn Prediction | Retention | 82% accuracy | ↑ | 1.2M TL tasarruf |\n| Fraud Detection | Security | 91% precision | → | 850K TL zarar önlendi |\n| Cross-Sell | Marketing | 18% conversion | ↑ | 2.8M TL gelir |\n\n**Yeni İnsight'lar:**\n1. Mobil app kullanan müşterilerde churn %40 daha düşük\n2. Kredi kartı limitinde 3+ red alan müşterilerin %65'i rakibe geçiyor\n\n**Gelecek Ay:**\n- NLP tabanlı müşteri şikayet analizi POC\n- Real-time recommendation engine deployment"
      }
    ],
    advancedTechniques: [
      {
        title: "1. Açık ve Net Talimat",
        description: "Veri analitiği projelerinde veri kaynağı, metrik, zaman dilimi ve çıktı formatını net belirt.",
        example: "❌ 'Müşteri davranışını analiz et'\n✅ 'Bireysel müşterilerimizin (2.5M) son 12 ay işlem verisi, ürün kullanımı ve dijital davranışını kullanarak K-Means ile 5-7 segment oluştur. Her segment için profil kartı (demografi, davranış, ürün tercihi) hazırla, segment başına aksiyon önerileri sun. Çıktı: Teknik model raporu + business özet + Tableau dashboard.'"
      },
      {
        title: "2. Rol Atama",
        description: "Veri bilimi, makine öğrenmesi, big data gibi teknik alanlarda uzmanlık ver.",
        example: "Prompt: 'Sen 12 yıldır finansal hizmetler sektöründe veri bilimi ve makine öğrenmesi projeleri yürütüyorsun. Real-time fraud detection, churn prediction ve recommendation sistemleri konusunda derin deneyime sahipsin. Bankamız için end-to-end ML operasyon (MLOps) stratejisi hazırla.'"
      },
      {
        title: "3. Adım Adım Düşündürme",
        description: "Veri projelerinde iş problemi tanımından production'a kadar adımları net tanımla.",
        example: "Prompt: 'Yeni bir ML projesi başlatırken:\nAdım 1: Business problem net tanımla\nAdım 2: Veri kaynaklarını belirle\nAdım 3: Veri kalitesini değerlendir\nAdım 4: Feature engineering\nAdım 5: Model seçimi ve eğitim\nAdım 6: Validation\nAdım 7: Production deployment\nAdım 8: Monitoring\nHer adımda çıktıyı ve geçiş kriterini belirt.'"
      },
      {
        title: "4. Örnek Verme (Few-Shot)",
        description: "Veri kalite sorunları, model performans değerlendirme gibi konularda örneklerle öğret.",
        example: "Prompt: 'Veri kalite sorunlarını sınıflandır:\n\nSorun: Eksik değer %30 → Tip: Completeness → Çözüm: Imputation veya drop\nSorun: Aynı kayıt 5 kez → Tip: Duplication → Çözüm: Deduplication\nSorun: Yaş -5 → Tip: Validation → Çözüm: Input rule\n\nŞimdi sınıflandır:\nSorun: Farklı tablolarda aynı müşteri için farklı adres bilgisi → [AI tamamlar]'"
      },
      {
        title: "5. Kısıtlamalar ve Format",
        description: "Veri raporlarında metrik, performans, business etkisi gibi standart formatlarda sun.",
        example: "Prompt: 'Aylık AI/ML performans raporu hazırla.\n\n[KISITLAMALAR]:\n- Sadece production modeller\n- Son 30 gün performansı\n- Business etkisi (TL olarak)\n- Teknik detay minimum (executive için)\n\n[FORMAT]:\n1. Executive Summary (3 bullet)\n2. Model Performans Tablosu\n3. Yeni İnsight'lar (business değeri ile)\n4. Gelecek Ay Planı\n\n[SAYFALAR]: Max 2 sayfa'"
      }
    ]
  },
  {
    id: 13,
    name: "Recep Uğur Güllü",
    title: "Kurumsal Mimari Bölüm Başkanı",
    department: "Teknoloji",
    focus: "enterprise architecture, sistem entegrasyonu, teknoloji stratejisi",
    color: "#7c2d12",
    icon: "🏗️",
    personalizedPrompts: [
      {
        title: "Açık ve Net Talimat - Sistem Entegrasyon Analizi",
        prompt: "[ROL]: Enterprise architect ve sistem entegrasyon uzmanı.\n\n[GÖREV]: Bankamızın mevcut core banking sistem mimarisini analiz et ve modernizasyon roadmap'i hazırla.\n\n[KAPSAM]:\n1. Mevcut sistem envanteri (core banking, CRM, digital channels, datawarehouse)\n2. Entegrasyon noktaları ve sorun alanları\n3. Legacy sistem bağımlılıkları\n4. API yönetimi ve microservices stratejisi\n\n[ÇIKTI]:\n- As-Is mimari diyagram\n- To-Be hedef mimari\n- Gap analizi\n- 3 yıllık dönüşüm roadmap'i\n- Risk ve maliyet analizi\n\n[FORMAT]: Mimari dökümanı + yönetici sunumu",
        example: "Kurumsal Mimari Modernizasyon Planı:\n\nAs-Is Durum:\n- Monolithic core banking (20 yıllık)\n- 45 farklı sistem, point-to-point entegrasyonlar\n- API yönetimi yok\n- Real-time veri senkronizasyonu sorunlu\n\nSorun Alanları:\n- Yeni ürün lansmanı 6-9 ay sürüyor (çok entegrasyon)\n- Sistem kesintisi riski yüksek\n- Dijital kanallar yavaş (legacy bağımlılığı)\n\nTo-Be Hedef:\n- Microservices mimarisi\n- API Gateway (centralized)\n- Event-driven architecture\n- Cloud-native\n\nRoadmap:\nYıl 1: API layer kurulumu, pilot microservice\nYıl 2: Core modüllerin ayrıştırılması\nYıl 3: Legacy sistemden tam geçiş"
      }
    ],
    advancedTechniques: [
      {
        title: "1. Açık ve Net Talimat",
        description: "Mimari analizlerde mevcut durum, hedef, zaman dilimi ve teknik kısıtları net belirt.",
        example: "❌ 'Sistem mimarisini iyileştir'\n✅ 'Mevcut core banking sistemimizin (monolithic, 20 yıllık) As-Is mimarisini dokümante et, tüm entegrasyon noktalarını haritalandır, performans darboğazlarını belirle. Microservices ve API-first yaklaşımıyla To-Be hedef mimarisi tasarla. 3 yıllık modernizasyon roadmap'i hazırla (her yıl major milestone'lar ile), risk ve maliyet analizi ekle. Çıktı: Teknik mimari rapor + yönetim sunumu.'"
      },
      {
        title: "2. Rol Atama",
        description: "Enterprise architecture, cloud, microservices gibi alanlarda derin teknik deneyim ver.",
        example: "Prompt: 'Sen 15 yıldır enterprise architecture alanında çalışan, özellikle finansal kurumların legacy sistem modernizasyonunu başarıyla yöneten bir mimarsın. Monolithic'ten microservices'e geçiş, cloud migration ve API ekonomisi konularında derin expertise'in var. Bankamız için \"Cloud-First, API-Driven\" teknoloji stratejisi hazırla.'"
      },
      {
        title: "3. Adım Adım Düşündürme",
        description: "Mimari dönüşümler karmaşık, adım adım planlama ve risk yönetimi kritik.",
        example: "Prompt: 'Core banking modernizasyonu yaparken:\nAdım 1: Mevcut sistemi dokümante et (as-is)\nAdım 2: Critical path ve bağımlılıkları belirle\nAdım 3: Pilot modül seç (düşük risk, yüksek değer)\nAdım 4: To-be mimari tasarla\nAdım 5: Aşamalı geçiş planı (big-bang değil)\nAdım 6: Her aşamada rollback planı\nAdım 7: Monitoring ve performans\nHer adımda risk değerlendirmesi yap.'"
      },
      {
        title: "4. Örnek Verme (Few-Shot)",
        description: "Mimari pattern'leri, entegrasyon tiplerini örneklerle kategorize et.",
        example: "Prompt: 'Entegrasyon patternlerini sınıflandır:\n\nSenaryo: Real-time müşteri bakiye sorgula → Pattern: Synchronous API Call → Teknoloji: REST API\n\nSenaryo: Günlük batch raporlama → Pattern: Batch ETL → Teknoloji: Scheduled job\n\nSenaryo: İşlem bildirimi gönder → Pattern: Event-driven async → Teknoloji: Message queue (Kafka)\n\nŞimdi sınıflandır:\nSenaryo: Yeni hesap açıldığında tüm sistemlere bildir (CRM, fraud, analytics) → [AI tamamlar]'"
      },
      {
        title: "5. Kısıtlamalar ve Format",
        description: "Mimari dokümanlarda standart notasyonlar (C4, UML) ve katmanlı anlatım kullan.",
        example: "Prompt: 'Target mimari dokümantasyonu hazırla.\n\n[KISITLAMALAR]:\n- C4 model notasyonu kullan (Context, Container, Component)\n- Her layer için technology stack belirt\n- Non-functional requirements dahil (performance, security, scalability)\n- Cloud provider agnostic\n\n[FORMAT]:\n1. System Context (high-level)\n2. Container Diagram (major systems)\n3. Component Diagram (key modules)\n4. Deployment Diagram\n5. Architecture Decision Records (ADR)\n\n[ÇIKTI]: Visio/Lucidchart diyagramlar + 10 sayfa döküman'"
      }
    ]
  },
  {
    id: 14,
    name: "Onur Osman Halıcı",
    title: "Bilgi Teknolojileri Yönetimi Bölüm Başkanı",
    department: "Teknoloji",
    focus: "IT operasyonları, altyapı yönetimi, siber güvenlik",
    color: "#0f172a",
    icon: "💻",
    personalizedPrompts: [
      {
        title: "Açık ve Net Talimat - IT Altyapı Performans Analizi",
        prompt: "[ROL]: IT operasyon ve altyapı yöneticisi.\n\n[GÖREV]: Bankamızın IT altyapısının (server, network, storage) performansını analiz et ve iyileştirme planı hazırla.\n\n[KAPSAM]:\n1. Sistem uptime ve kesinti analizi (son 12 ay)\n2. Kapasite kullanımı (CPU, memory, disk, bandwidth)\n3. Performans darboğazları\n4. Disaster recovery ve backup durumu\n5. Güvenlik açıkları ve patch yönetimi\n\n[ÇIKTI]:\n- Sistem sağlığı raporu\n- Kritik riskler ve acil aksiyonlar\n- Kapasite artırım ihtiyaçları\n- 12 aylık iyileştirme roadmap'i\n\n[FORMAT]: Teknik rapor + yönetici özeti + dashboard",
        example: "IT Altyapı Analizi:\n\nPerformans Durumu:\n- Uptime: %99.2 (hedef %99.5)\n- 8 kesinti (toplam 58 saat)\n- En uzun: Core banking 12 saat (disk arızası)\n\nKapasite:\n- Production server CPU: %78 (risk eşiği %80)\n- Storage: %85 dolu (6 ay içinde kapasite artırımı gerek)\n- Network bandwidth: Peak saatlerde %92\n\nRiskler:\n1. Storage kapasitesi kritik seviyede\n2. Backup sistemi 3 yıllık, yedek parça yok\n3. 45 server'da security patch eksik\n\nAcil Aksiyonlar:\n1. Storage genişletme (1 ay)\n2. Backup sistem yenileme (3 ay)\n3. Security patch campaign (2 hafta)"
      }
    ],
    advancedTechniques: [
      {
        title: "1. Açık ve Net Talimat",
        description: "IT operasyon analizlerinde metrik, zaman dilimi, kritik eşik değerlerini belirt.",
        example: "❌ 'IT altyapısını analiz et'\n✅ 'Son 12 ay IT altyapı performansını analiz et: sistem uptime (hedef %99.5), kesinti sayısı ve süresi, CPU/memory/storage kapasite kullanımı (risk eşiği %80), network latency, backup başarı oranı (hedef %100). Kritik riskleri flag'le, kapasite artırım ihtiyaçlarını hesapla, 12 aylık iyileştirme roadmap'i öner. Çıktı: Teknik rapor + risk matrisi + dashboard.'"
      },
      {
        title: "2. Rol Atama",
        description: "IT operasyon, altyapı, güvenlik konularında operasyonel deneyim ve sorun çözme yaklaşımı ver.",
        example: "Prompt: 'Sen 12 yıldır IT operasyon ve altyapı yönetiminde çalışan, 7/24 sistemlerin kesintisiz çalışmasını sağlayan, incident management ve problem-solving konusunda çok deneyimli bir yöneticisin. Aynı zamanda siber güvenlik tehditleri ve best practice'leri yakından takip ediyorsun. Bankamız için \"IT Resilience ve Business Continuity\" stratejisi hazırla.'"
      },
      {
        title: "3. Adım Adım Düşündürme",
        description: "IT incident'larda root cause analizi ve çözüm süreci adım adım yönetilmeli.",
        example: "Prompt: 'Sistem kesintisi sonrası post-mortem analizi yaparken:\nAdım 1: Incident timeline'ı dokümante et (ne zaman başladı, ne kadar sürdü)\nAdım 2: Root cause belirle (hardware, software, network, insan hatası)\nAdım 3: Impact analizi (kaç kullanıcı, hangi servisler)\nAdım 4: Response sürecini değerlendir (ne kadar hızlı müdahale)\nAdım 5: Permanent fix planla\nAdım 6: Benzer incident'ları önlemek için iyileştirmeler\nHer adımda bulguları dokümante et.'"
      },
      {
        title: "4. Örnek Verme (Few-Shot)",
        description: "IT sorunlarını kategori ve önceliğe göre sınıflandırırken örneklerle öğret.",
        example: "Prompt: 'IT incident'ları önceliğe göre sınıflandır:\n\nIncident: Core banking erişilemiyor → Öncelik: P1 (Critical) → Müdahale: Anında, tüm ekip\n\nIncident: Email sistemi yavaş → Öncelik: P2 (High) → Müdahale: 1 saat içinde\n\nIncident: Test ortamında hata → Öncelik: P3 (Medium) → Müdahale: Gün içinde\n\nŞimdi sınıflandır:\nIncident: Mobil uygulama login olmuyor, 50K müşteri etkileniyor → [AI tamamlar]'"
      },
      {
        title: "5. Kısıtlamalar ve Format",
        description: "IT raporlarında metrik, SLA, trend gibi operasyonel bilgileri standart formatta sun.",
        example: "Prompt: 'Aylık IT operasyon raporu hazırla.\n\n[KISITLAMALAR]:\n- Son 30 gün verileri\n- SLA compliance (uptime, response time)\n- Incident ve change sayısı\n- Kapasite metrikleri\n\n[FORMAT]:\n1. Executive Summary (SLA durumu, kritik incident'lar)\n2. Availability Metrics (uptime, kesinti)\n3. Performance Metrics (CPU, memory, storage)\n4. Incident Summary (P1/P2/P3)\n5. Gelecek Ay Planı (change, upgrade)\n\n[SAYFALAR]: Max 4 sayfa'"
      }
    ]
  },
  {
    id: 15,
    name: "Görkem Özdemir",
    title: "Dijital Portföy Yönetimi Bölüm Başkanı",
    department: "Dijital",
    focus: "dijital kanallar, mobil bankacılık, online portföy",
    color: "#06b6d4",
    icon: "📱",
    personalizedPrompts: [
      {
        title: "Açık ve Net Talimat - Dijital Kanal Performansı",
        prompt: "[ROL]: Dijital kanal ve portföy performans yöneticisi.\n\n[GÖREV]: Dijital kanallarımızın (mobil app, web, API) kullanım ve portföy performansını analiz et.\n\n[KAPSAM]:\n1. Kanal bazlı kullanıcı sayısı ve aktiflik (DAU, MAU)\n2. Dijital kanallardan açılan hesap/kredi sayısı\n3. Dijital portföy büyüklüğü ve büyüme hızı\n4. Conversion funnel analizi (indirme → kayıt → ilk işlem → aktif kullanım)\n5. Dijital vs şube karlılık karşılaştırması\n\n[ÇIKTI]:\n- Kanal performans dashboard'u\n- Conversion iyileştirme fırsatları\n- Dijital müşteri profili\n- 12 aylık büyüme stratejisi\n\n[FORMAT]: Veri raporu + aksiyon planı",
        example: "Dijital Kanal Analizi:\n\nKullanım:\n- Mobil App: 850K MAU (Monthly Active Users), DAU 320K\n- Web: 420K MAU\n- API (fintech ortakları): 180K işlem/ay\n\nPortföy:\n- Dijital müşteri: 1.2M (toplam 2.5M'nin %48'i)\n- Dijital portföy: 4.8 Milyar TL (büyüme %22/yıl)\n- Ortalama ürün/dijital müşteri: 2.8 (şube: 1.9)\n\nConversion Funnel:\n- App indirme: 100K/ay\n- Kayıt: 45K (%45 conversion) → İyileştirme fırsatı\n- İlk işlem: 32K (%71)\n- 30 gün aktif: 24K (%75)\n\nFırsat: Kayıt conversion'ı düşük, onboarding UX iyileştirmesi gerekli"
      }
    ],
    advancedTechniques: [
      {
        title: "1. Açık ve Net Talimat",
        description: "Dijital kanal analizlerinde kullanıcı metrikleri, conversion, portföy büyümesini net tanımla.",
        example: "❌ 'Dijital kanalları analiz et'\n✅ 'Mobil app, web ve API kanallarımızın son 12 ay performansını analiz et: MAU/DAU, yeni kullanıcı kazanımı, conversion funnel (indirme→kayıt→aktif), dijital portföy büyüklüğü ve büyüme hızı, ürün penetrasyonu, dijital vs şube karlılık karşılaştırması. Conversion drop-off noktalarını belirle, iyileştirme önerileri sun. Çıktı: Dashboard + 12 aylık dijital büyüme stratejisi.'"
      },
      {
        title: "2. Rol Atama",
        description: "Dijital ürün yönetimi, kullanıcı deneyimi, growth hacking konularında deneyim ver.",
        example: "Prompt: 'Sen 10 yıldır dijital ürün yönetimi ve growth alanında çalışan, mobil bankacılık uygulamalarının kullanıcı deneyimini optimize eden, data-driven growth stratejileri geliştiren bir yöneticisin. A/B testing, funnel optimization ve dijital acquisition konularında derin deneyime sahipsin. Mobil uygulamamız için \"User Activation ve Retention\" stratejisi hazırla.'"
      },
      {
        title: "3. Adım Adım Düşündürme",
        description: "Dijital conversion optimizasyonunda funnel'ı adım adım analiz et, her aşamada drop-off nedenlerini bul.",
        example: "Prompt: 'Dijital onboarding conversion'ını artırmak için:\nAdım 1: Funnel'ı map'le (indirme → kayıt → kimlik doğrulama → ilk işlem)\nAdım 2: Her adımda conversion oranını ölç\nAdım 3: En büyük drop-off noktasını belirle\nAdım 4: Drop-off nedenini analiz et (UX sorunu, teknik hata, sürtünme)\nAdım 5: Hipotez oluştur (örn: kimlik doğrulama çok karmaşık)\nAdım 6: A/B test ile valide et\nAdım 7: Kazanan varyasyonu deploy et\nHer adımda veri ile destekle.'"
      },
      {
        title: "4. Örnek Verme (Few-Shot)",
        description: "Dijital kullanıcı segmentlerini davranışa göre kategorize ederken örneklerle öğret.",
        example: "Prompt: 'Dijital müşterileri davranışa göre sınıflandır:\n\nKullanıcı: App'i günlük açıyor, para transferi yapıyor, bildirimlere tıklıyor → Segment: Power User → Aksiyon: Premium features sun, referral program\n\nKullanıcı: Ayda 1-2 kez bakiye kontrolü, başka işlem yok → Segment: Passive → Aksiyon: Engagement campaign, use-case education\n\nKullanıcı: Kayıt oldu ama hiç işlem yapmadı → Segment: Dormant → Aksiyon: Onboarding reminder, incentive\n\nŞimdi sınıflandır:\nKullanıcı: İlk 2 hafta çok aktifti, son 30 gün giriş yapmadı → [AI tamamlar]'"
      },
      {
        title: "5. Kısıtlamalar ve Format",
        description: "Dijital raporlarda kullanıcı metrikleri, conversion, engagement gibi standart KPI'ları kullan.",
        example: "Prompt: 'Aylık dijital kanal performans raporu hazırla.\n\n[KISITLAMALAR]:\n- Son 30 gün + 3 ay trend\n- Kanal bazlı (mobil, web, API)\n- Core KPI'lar: MAU, DAU, conversion rate, ARPU, retention\n- Benchmark ile karşılaştır (sektör ortalaması)\n\n[FORMAT]:\n1. Executive Summary (3 key metric)\n2. User Metrics (MAU, DAU, growth)\n3. Conversion Funnel\n4. Engagement & Retention\n5. Product Adoption (feature usage)\n6. Next Month Goals\n\n[SAYFALAR]: Max 3 sayfa'"
      }
    ]
  },
  {
    id: 16,
    name: "Emrah Uluğ",
    title: "Dijital Bankacılık Bölüm Başkanı",
    department: "Dijital",
    focus: "dijital strateji, fintech ortaklıkları, inovasyon",
    color: "#8b5cf6",
    icon: "🚀",
    personalizedPrompts: [
      {
        title: "Açık ve Net Talimat - Dijital Dönüşüm Stratejisi",
        prompt: "[ROL]: Dijital bankacılık ve dönüşüm stratejisti.\n\n[GÖREV]: Bankamızın 3 yıllık dijital dönüşüm stratejisini hazırla.\n\n[KAPSAM]:\n1. Mevcut dijital olgunluk seviyesi (digital maturity assessment)\n2. Pazar trendleri (neo-banks, embedded finance, open banking)\n3. Rekabet analizi (dijital liderler ne yapıyor)\n4. Teknoloji yatırım alanları (AI, blockchain, cloud)\n5. Organizasyon ve kültür dönüşümü\n6. Fintech ortaklık stratejisi\n\n[ÇIKTI]:\n- As-Is dijital durum analizi\n- To-Be hedef vizyon\n- 3 yıllık roadmap (her yıl major initiative'ler)\n- Yatırım ihtiyacı ve ROI projeksiyonu\n- Risk ve başarı faktörleri\n\n[FORMAT]: Stratejik plan dokümanı (30 sayfa) + yönetim kurulu sunumu",
        example: "Dijital Dönüşüm Stratejisi 2025-2027:\n\nMevcut Durum:\n- Dijital müşteri penetrasyonu %48 (sektör ort. %62)\n- Mobil app rating 4.2/5 (lider bankalar 4.6+)\n- API'ler kapalı, fintech entegrasyonu yok\n- Kültür: Geleneksel, risk-averse\n\nHedef Vizyon 2027:\n- \"Digital-First Bank\": %75 müşteri dijital\n- Open Banking liderliği\n- 5+ fintech ortaklığı\n- AI-powered personalization\n\nRoadmap:\nYıl 1 (2025): Mobil app yenileme, API Banking platformu, ilk 2 fintech ortaklığı\nYıl 2 (2026): Embedded finance (e-ticaret, marketplace), AI recommendation engine\nYıl 3 (2027): Neo-bank subsidiary, blockchain pilot, tam dijital onboarding\n\nYatırım: 45M TL (3 yıl)\nBeklenen ROI: 3. yılda %180"
      }
    ],
    advancedTechniques: [
      {
        title: "1. Açık ve Net Talimat",
        description: "Dijital strateji hazırlarken vizyon, zaman dilimi, yatırım, organizasyonel değişimi dahil et.",
        example: "❌ 'Dijital strateji hazırla'\n✅ '3 yıllık dijital dönüşüm stratejisi hazırla: Mevcut dijital olgunluk (müşteri penetrasyonu, teknoloji, kültür) değerlendir, pazar trend (neo-bank, embedded finance, open banking) ve rekabet analizi yap, hedef vizyon tanımla, her yıl için major initiative'leri ve milestone'ları belirt, teknoloji yatırımı (AI, API, cloud) ve organizasyon değişim planını dahil et, ROI projeksiyonu hesapla. Çıktı: 30 sayfa strateji dokümanı + yönetim kurulu sunumu.'"
      },
      {
        title: "2. Rol Atama",
        description: "Dijital dönüşüm, fintech ekosistemi, inovasyon konularında vizyon ve liderlik deneyimi ver.",
        example: "Prompt: 'Sen 12 yıldır dijital bankacılık ve fintech ekosisteminde çalışan, birden fazla dijital dönüşüm projesini başarıyla yöneten, yeni teknoloji trendlerini (AI, blockchain, embedded finance) yakından takip eden ve organizasyonel değişim liderliği yapabilen bir stratejistsin. Bankamız için \"Digital-First, Customer-Obsessed\" vizyonu ve 3 yıllık dönüşüm stratejisi hazırla.'"
      },
      {
        title: "3. Adım Adım Düşündürme",
        description: "Dijital dönüşüm karmaşık, çok boyutlu. Teknoloji, süreç, insan, kültür boyutlarını adım adım ele al.",
        example: "Prompt: 'Dijital dönüşüm stratejisi hazırlarken:\nAdım 1: Mevcut durum analizi (technology, process, people, culture)\nAdım 2: Benchmark ve trend analizi (ne yapılıyor, nereye gidiyor)\nAdım 3: Vizyon ve hedef tanımlama (3-5 yıl sonra nerede olacağız)\nAdım 4: Gap analizi (mevcut vs hedef)\nAdım 5: Initiative belirleme (hangi projeler)\nAdım 6: Roadmap (öncelik, bağımlılık, timeline)\nAdım 7: Organizasyon ve değişim yönetimi\nAdım 8: Yatırım ve ROI\nHer boyutu dengeli ele al.'"
      },
      {
        title: "4. Örnek Verme (Few-Shot)",
        description: "Dijital initiative'leri tip, etki, önceliğe göre sınıflandırırken örneklerle öğret.",
        example: "Prompt: 'Dijital initiative'leri kategorize et:\n\nInitiative: Mobil app yenileme → Kategori: Foundation → Öncelik: Yüksek → Etki: Tüm müşteriler\n\nInitiative: AI chatbot → Kategori: Efficiency → Öncelik: Orta → Etki: Müşteri hizmetleri maliyeti -%30\n\nInitiative: Neo-bank kurmak → Kategori: New Business → Öncelik: Orta-Düşük → Etki: Yeni segment\n\nŞimdi kategorize et:\nInitiative: Open Banking API platformu kurarak fintech'lere açmak → [AI tamamlar]'"
      },
      {
        title: "5. Kısıtlamalar ve Format",
        description: "Dijital strateji dokümanlarında vizyon, roadmap, yatırım, organizasyon gibi bölümleri standartlaştır.",
        example: "Prompt: '3 yıllık dijital dönüşüm stratejisi hazırla.\n\n[KISITLAMALAR]:\n- 3 yıl planlama horizonu\n- Teknoloji + süreç + organizasyon boyutları dahil\n- Yatırım bütçesi ve ROI projeksiyonu\n- Riskler ve başarı faktörleri\n\n[FORMAT]:\n1. Executive Summary (2 sayfa)\n2. Mevcut Durum (digital maturity) (5 sayfa)\n3. Pazar ve Rekabet (4 sayfa)\n4. Hedef Vizyon (3 sayfa)\n5. Strategic Roadmap (8 sayfa)\n6. Organizasyon ve Değişim (4 sayfa)\n7. Yatırım ve ROI (3 sayfa)\n8. Risk ve Başarı Faktörleri (1 sayfa)\n\n[TOTAL]: 30 sayfa'"
      }
    ]
  }
];
