import { SchoolData } from '@/types';

export const schoolData: SchoolData = {
  campuses: [
    {
      id: 1,
      name: "Oued Zem Campus",
      icon: "🏛️",
      location: "Oued Zem",
      address: "Oued Zem, Morocco",
      description: "Our flagship campus in Oued Zem, offering all languages with state-of-the-art facilities.",
      allLanguages: true
    },
    {
      id: 2,
      name: "North Campus",
      icon: "🏫",
      location: "Northside",
      address: "456 North Avenue, Learning City, LC 12346",
      description: "Modern facilities in the northside area, providing comprehensive language education.",
      allLanguages: true
    },
    {
      id: 3,
      name: "South Campus",
      icon: "🏢",
      location: "Southside",
      address: "789 South Boulevard, Learning City, LC 12347",
      description: "Conveniently located in the south, offering full language programs.",
      allLanguages: true
    },
    {
      id: 4,
      name: "East Campus",
      icon: "🏬",
      location: "Eastside",
      address: "321 East Street, Learning City, LC 12348",
      description: "Eastern campus with excellent language learning facilities.",
      allLanguages: true
    },
    {
      id: 5,
      name: "West Campus",
      icon: "🏪",
      location: "Westside",
      address: "654 West Drive, Learning City, LC 12349",
      description: "Western location providing quality language education.",
      allLanguages: true
    },
    {
      id: 6,
      name: "Central Campus",
      icon: "🏙️",
      location: "City Center",
      address: "987 Central Plaza, Learning City, LC 12350",
      description: "Centrally located campus offering all language programs.",
      allLanguages: true
    }
  ],

  languages: [
    {
      id: "english",
      name: "English",
      icon: "https://flagcdn.com/w80/gb.png",
      description: "Master the global language of business and communication",
      levels: "Beginner (A1) to Advanced (C2)",
      duration: "12-48 weeks per level",
      classSizes: "8-15 students",
      schedule: "Morning, Afternoon, Evening & Weekend classes available"
    },
    {
      id: "spanish",
      name: "Spanish",
      icon: "https://flagcdn.com/w80/es.png",
      description: "Learn the second most spoken language in the world",
      levels: "Beginner (A1) to Advanced (C2)",
      duration: "12-48 weeks per level",
      classSizes: "8-15 students",
      schedule: "Morning, Afternoon, Evening & Weekend classes available"
    },
    {
      id: "french",
      name: "French",
      icon: "https://flagcdn.com/w80/fr.png",
      description: "Discover the language of culture, diplomacy, and elegance",
      levels: "Beginner (A1) to Advanced (C2)",
      duration: "12-48 weeks per level",
      classSizes: "8-15 students",
      schedule: "Morning, Afternoon, Evening & Weekend classes available"
    },
    {
      id: "german",
      name: "German",
      icon: "https://flagcdn.com/w80/de.png",
      description: "Open doors to opportunities in Europe's largest economy",
      levels: "Beginner (A1) to Advanced (C2)",
      duration: "12-48 weeks per level",
      classSizes: "8-15 students",
      schedule: "Morning, Afternoon, Evening & Weekend classes available"
    },
    {
      id: "chinese",
      name: "Chinese (Mandarin)",
      icon: "https://flagcdn.com/w80/cn.png",
      description: "Learn the most spoken language in the world",
      levels: "Beginner (HSK 1) to Advanced (HSK 6)",
      duration: "12-48 weeks per level",
      classSizes: "8-12 students",
      schedule: "Morning, Afternoon, Evening & Weekend classes available"
    },
    {
      id: "japanese",
      name: "Japanese",
      icon: "https://flagcdn.com/w80/jp.png",
      description: "Explore the language of innovation and tradition",
      levels: "Beginner (N5) to Advanced (N1)",
      duration: "12-48 weeks per level",
      classSizes: "8-12 students",
      schedule: "Morning, Afternoon, Evening & Weekend classes available"
    },
    {
      id: "italian",
      name: "Italian",
      icon: "https://flagcdn.com/w80/it.png",
      description: "Experience the language of art, music, and cuisine",
      levels: "Beginner (A1) to Advanced (C2)",
      duration: "12-48 weeks per level",
      classSizes: "8-15 students",
      schedule: "Morning & Evening classes available"
    },
    {
      id: "portuguese",
      name: "Portuguese",
      icon: "https://flagcdn.com/w80/pt.png",
      description: "Connect with over 250 million speakers worldwide",
      levels: "Beginner (A1) to Advanced (C2)",
      duration: "12-48 weeks per level",
      classSizes: "8-15 students",
      schedule: "Afternoon & Evening classes available"
    },
    {
      id: "russian",
      name: "Russian",
      icon: "https://flagcdn.com/w80/ru.png",
      description: "Master one of the UN's official languages",
      levels: "Beginner (A1) to Advanced (C2)",
      duration: "12-48 weeks per level",
      classSizes: "6-12 students",
      schedule: "Morning & Evening classes available"
    },
    {
      id: "arabic",
      name: "Arabic",
      icon: "https://flagcdn.com/w80/sa.png",
      description: "Learn the language of the Middle East and North Africa",
      levels: "Beginner to Advanced",
      duration: "12-48 weeks per level",
      classSizes: "6-12 students",
      schedule: "Afternoon & Evening classes available"
    },
    {
      id: "korean",
      name: "Korean",
      icon: "https://flagcdn.com/w80/kr.png",
      description: "Discover the language of K-pop and Korean culture",
      levels: "Beginner (TOPIK 1) to Advanced (TOPIK 6)",
      duration: "12-48 weeks per level",
      classSizes: "8-12 students",
      schedule: "Afternoon & Evening classes available"
    },
    {
      id: "hindi",
      name: "Hindi",
      icon: "https://flagcdn.com/w80/in.png",
      description: "Connect with India's rich cultural heritage",
      levels: "Beginner to Advanced",
      duration: "12-48 weeks per level",
      classSizes: "8-12 students",
      schedule: "Morning & Weekend classes available"
    }
  ],

  teachers: [
    {
      id: 1,
      name: "Dr. Emily Johnson",
      title: "Ph.D. in Applied Linguistics",
      photo: "👩‍🏫",
      languageId: "english",
      specialization: "IELTS & TOEFL Preparation",
      experience: 15,
      rating: 4.9,
      students: 500,
      bio: "Dr. Emily Johnson has been teaching English for over 15 years with a specialization in test preparation. She has helped hundreds of students achieve their dream scores in IELTS and TOEFL exams. Her dynamic teaching style combines rigorous academic preparation with practical communication skills.",
      education: [
        "Ph.D. in Applied Linguistics - Cambridge University",
        "M.A. in TESOL - University of London",
        "B.A. in English Literature - Oxford University"
      ],
      certifications: [
        "CELTA Certified",
        "IELTS Examiner Certification",
        "TOEFL iBT Specialist"
      ],
      courses: [
        "IELTS Preparation (All Bands)",
        "TOEFL iBT Preparation",
        "Academic English",
        "Business English Communication"
      ],
      languages: ["English (Native)", "French (Fluent)", "Spanish (Intermediate)"],
      schedule: "Monday-Friday: 9 AM - 5 PM",
      email: "emily.johnson@globallanguage.edu"
    },
    {
      id: 2,
      name: "Prof. María García",
      title: "Master in Hispanic Studies",
      photo: "👩‍🏫",
      languageId: "spanish",
      specialization: "Conversational Spanish & Culture",
      experience: 12,
      rating: 4.8,
      students: 450,
      bio: "Professor María García brings authentic Spanish culture to every lesson. Born in Madrid and having taught in 5 countries, she offers an immersive learning experience that goes beyond grammar to embrace the rich Hispanic heritage and modern usage.",
      education: [
        "Master in Hispanic Studies - Universidad Complutense de Madrid",
        "B.A. in Spanish Language and Literature - Universidad de Barcelona"
      ],
      certifications: [
        "DELE Examiner",
        "Cervantes Institute Certified Instructor",
        "Spanish for Business Certificate"
      ],
      courses: [
        "Conversational Spanish (All Levels)",
        "Spanish for Business",
        "DELE Exam Preparation",
        "Latin American Culture & Spanish"
      ],
      languages: ["Spanish (Native)", "English (Fluent)", "Catalan (Native)"],
      schedule: "Monday-Saturday: 10 AM - 6 PM",
      email: "maria.garcia@globallanguage.edu"
    },
    {
      id: 3,
      name: "Sophie Dubois",
      title: "Master in French Literature",
      photo: "👩‍🏫",
      languageId: "french",
      specialization: "French Literature & Culture",
      experience: 10,
      rating: 4.9,
      students: 380,
      bio: "Sophie Dubois is a passionate French educator from Paris who believes in teaching language through culture and literature. Her classes are known for their engaging discussions about French cinema, literature, and contemporary society.",
      education: [
        "Master in French Literature - Sorbonne University",
        "B.A. in Modern Languages - Université Paris-Sorbonne"
      ],
      certifications: [
        "DELF/DALF Examiner",
        "Alliance Française Certified Teacher",
        "French for Professional Purposes Certificate"
      ],
      courses: [
        "French Conversation & Culture",
        "French Literature",
        "Business French",
        "DELF/DALF Preparation"
      ],
      languages: ["French (Native)", "English (Fluent)", "Italian (Intermediate)"],
      schedule: "Tuesday-Saturday: 9 AM - 5 PM",
      email: "sophie.dubois@globallanguage.edu"
    },
    {
      id: 4,
      name: "Dr. Klaus Mueller",
      title: "Ph.D. in Germanic Languages",
      photo: "👨‍🏫",
      languageId: "german",
      specialization: "Technical German & Business",
      experience: 18,
      rating: 4.7,
      students: 420,
      bio: "Dr. Klaus Mueller specializes in teaching German for professional and academic purposes. With extensive experience in corporate training and university teaching, he helps students master both everyday and technical German.",
      education: [
        "Ph.D. in Germanic Languages - Heidelberg University",
        "M.A. in German Studies - Ludwig Maximilian University"
      ],
      certifications: [
        "Goethe-Institut Certified Teacher",
        "TestDaF Examiner",
        "Business German Specialist"
      ],
      courses: [
        "German for Business",
        "Technical German",
        "TestDaF Preparation",
        "Conversational German (All Levels)"
      ],
      languages: ["German (Native)", "English (Fluent)", "French (Intermediate)"],
      schedule: "Monday-Friday: 8 AM - 4 PM",
      email: "klaus.mueller@globallanguage.edu"
    },
    {
      id: 5,
      name: "Li Wei",
      title: "Master in Chinese Language Education",
      photo: "👨‍🏫",
      languageId: "chinese",
      specialization: "Business Chinese & HSK",
      experience: 14,
      rating: 4.8,
      students: 390,
      bio: "Li Wei brings modern teaching methods to traditional Chinese language education. His innovative approach makes learning Chinese characters and tones accessible and enjoyable for international students.",
      education: [
        "Master in Chinese Language Education - Beijing Normal University",
        "B.A. in Chinese Language and Literature - Peking University"
      ],
      certifications: [
        "HSK Examiner Certification",
        "International Chinese Language Teacher Certificate",
        "Business Chinese Instructor"
      ],
      courses: [
        "HSK Preparation (All Levels)",
        "Business Chinese",
        "Conversational Mandarin",
        "Chinese Characters Mastery"
      ],
      languages: ["Mandarin Chinese (Native)", "English (Fluent)", "Cantonese (Native)"],
      schedule: "Monday-Saturday: 10 AM - 7 PM",
      email: "li.wei@globallanguage.edu"
    },
    {
      id: 6,
      name: "Yuki Tanaka",
      title: "Master in Japanese Language Teaching",
      photo: "👩‍🏫",
      languageId: "japanese",
      specialization: "JLPT Preparation & Japanese Culture",
      experience: 11,
      rating: 4.9,
      students: 360,
      bio: "Yuki Tanaka combines traditional Japanese teaching methods with modern pedagogy. Her classes incorporate Japanese pop culture, making language learning engaging while maintaining academic rigor.",
      education: [
        "Master in Japanese Language Teaching - Tokyo University",
        "B.A. in Japanese Literature - Waseda University"
      ],
      certifications: [
        "Japanese Language Teaching Competency Test",
        "JLPT Examiner",
        "Japanese for Business Certificate"
      ],
      courses: [
        "JLPT Preparation (N5-N1)",
        "Business Japanese",
        "Conversational Japanese",
        "Japanese Culture Through Language"
      ],
      languages: ["Japanese (Native)", "English (Fluent)", "Korean (Intermediate)"],
      schedule: "Tuesday-Saturday: 9 AM - 6 PM",
      email: "yuki.tanaka@globallanguage.edu"
    },
    {
      id: 7,
      name: "Marco Rossi",
      title: "Master in Italian Language & Culture",
      photo: "👨‍🏫",
      languageId: "italian",
      specialization: "Italian Culture & Conversation",
      experience: 9,
      rating: 4.8,
      students: 280,
      bio: "Marco Rossi from Rome brings the passion and energy of Italy to every class. His immersive teaching style helps students not just learn Italian, but live it.",
      education: [
        "Master in Italian Language & Culture - Sapienza University of Rome",
        "B.A. in Italian Studies - University of Bologna"
      ],
      certifications: [
        "CILS Examiner",
        "Italian Language Teacher Certificate",
        "Italian for Tourism Specialist"
      ],
      courses: [
        "Italian Conversation",
        "Italian Culture & Civilization",
        "Business Italian",
        "CILS Exam Preparation"
      ],
      languages: ["Italian (Native)", "English (Fluent)", "French (Intermediate)"],
      schedule: "Monday-Friday: 10 AM - 6 PM",
      email: "marco.rossi@globallanguage.edu"
    },
    {
      id: 8,
      name: "Ana Silva",
      title: "Master in Portuguese Language",
      photo: "👩‍🏫",
      languageId: "portuguese",
      specialization: "Brazilian & European Portuguese",
      experience: 10,
      rating: 4.7,
      students: 250,
      bio: "Ana Silva specializes in both Brazilian and European Portuguese variants. Her comprehensive approach ensures students can communicate effectively in any Portuguese-speaking country.",
      education: [
        "Master in Portuguese Language - University of Lisbon",
        "B.A. in Portuguese & Lusophone Studies - University of São Paulo"
      ],
      certifications: [
        "CELPE-Bras Examiner",
        "Portuguese Language Teacher Certificate",
        "Portuguese for Business"
      ],
      courses: [
        "Brazilian Portuguese",
        "European Portuguese",
        "Business Portuguese",
        "CELPE-Bras Preparation"
      ],
      languages: ["Portuguese (Native)", "Spanish (Fluent)", "English (Fluent)"],
      schedule: "Tuesday-Saturday: 11 AM - 7 PM",
      email: "ana.silva@globallanguage.edu"
    },
    {
      id: 9,
      name: "Prof. Dmitri Volkov",
      title: "Ph.D. in Slavic Languages",
      photo: "👨‍🏫",
      languageId: "russian",
      specialization: "Russian Literature & Advanced Grammar",
      experience: 16,
      rating: 4.9,
      students: 320,
      bio: "Professor Dmitri Volkov is a renowned expert in Russian literature and linguistics. With a passion for Dostoevsky and Tolstoy, he brings Russian culture alive through language instruction. His structured approach helps students master the complexities of Russian grammar.",
      education: [
        "Ph.D. in Slavic Languages - Moscow State University",
        "M.A. in Russian Literature - Saint Petersburg University",
        "B.A. in Linguistics - Moscow State University"
      ],
      certifications: [
        "TORFL (Test of Russian as a Foreign Language) Examiner",
        "Russian Language Teaching Certificate",
        "Advanced Grammar Specialist"
      ],
      courses: [
        "Russian for Beginners",
        "Advanced Russian Grammar",
        "Russian Literature in Context",
        "Business Russian"
      ],
      languages: ["Russian (Native)", "English (Fluent)", "German (Intermediate)"],
      schedule: "Monday-Friday: 9 AM - 5 PM",
      email: "dmitri.volkov@globallanguage.edu"
    },
    {
      id: 10,
      name: "Dr. Ahmed Al-Rahman",
      title: "Ph.D. in Arabic Linguistics",
      photo: "👨‍🏫",
      languageId: "arabic",
      specialization: "Modern Standard Arabic & Classical Arabic",
      experience: 13,
      rating: 4.8,
      students: 290,
      bio: "Dr. Ahmed Al-Rahman specializes in teaching both Modern Standard Arabic and Classical Arabic. Born in Cairo, he has extensive experience teaching Arabic to non-native speakers and helps students navigate the beautiful complexities of the Arabic language and script.",
      education: [
        "Ph.D. in Arabic Linguistics - Cairo University",
        "M.A. in Islamic Studies - Al-Azhar University",
        "B.A. in Arabic Language - Cairo University"
      ],
      certifications: [
        "Arabic Language Teaching Certificate",
        "Quranic Arabic Specialist",
        "Modern Standard Arabic Instructor"
      ],
      courses: [
        "Modern Standard Arabic (All Levels)",
        "Classical Arabic",
        "Business Arabic",
        "Arabic Calligraphy & Writing"
      ],
      languages: ["Arabic (Native)", "English (Fluent)", "French (Intermediate)"],
      schedule: "Sunday-Thursday: 2 PM - 8 PM",
      email: "ahmed.alrahman@globallanguage.edu"
    },
    {
      id: 11,
      name: "Park Min-Jun",
      title: "Master in Korean Language Education",
      photo: "👨‍🏫",
      languageId: "korean",
      specialization: "K-Culture & TOPIK Preparation",
      experience: 8,
      rating: 4.9,
      students: 410,
      bio: "Park Min-Jun is a dynamic Korean language instructor who seamlessly integrates K-pop, K-drama, and Korean culture into language learning. His engaging teaching style has made Korean accessible and fun for students of all ages.",
      education: [
        "Master in Korean Language Education - Seoul National University",
        "B.A. in Korean Literature - Yonsei University"
      ],
      certifications: [
        "TOPIK Examiner Certification",
        "Korean Language Teacher Certificate",
        "Korean Culture Instructor"
      ],
      courses: [
        "Korean for Beginners",
        "TOPIK Preparation (I & II)",
        "Korean Through K-Culture",
        "Business Korean"
      ],
      languages: ["Korean (Native)", "English (Fluent)", "Japanese (Intermediate)"],
      schedule: "Tuesday-Saturday: 10 AM - 7 PM",
      email: "minjun.park@globallanguage.edu"
    },
    {
      id: 12,
      name: "Priya Sharma",
      title: "Master in Hindi Literature",
      photo: "👩‍🏫",
      languageId: "hindi",
      specialization: "Hindi & Indian Culture",
      experience: 11,
      rating: 4.8,
      students: 270,
      bio: "Priya Sharma brings the richness of Indian culture and Bollywood into her Hindi language classes. Her warm teaching style and cultural insights make learning Hindi an enriching experience that goes beyond just language acquisition.",
      education: [
        "Master in Hindi Literature - University of Delhi",
        "B.A. in Hindi & Sanskrit - Jawaharlal Nehru University"
      ],
      certifications: [
        "Hindi Language Teaching Certificate",
        "Sanskrit Studies Certificate",
        "Bollywood Hindi Specialist"
      ],
      courses: [
        "Hindi for Beginners",
        "Conversational Hindi",
        "Hindi Through Bollywood",
        "Business Hindi"
      ],
      languages: ["Hindi (Native)", "English (Fluent)", "Urdu (Native)", "Punjabi (Fluent)"],
      schedule: "Monday-Saturday: 9 AM - 5 PM",
      email: "priya.sharma@globallanguage.edu"
    },
    {
      id: 13,
      name: "Michael Thompson",
      title: "Master in TESOL",
      photo: "👨‍🏫",
      languageId: "english",
      specialization: "Business English & Communication",
      experience: 14,
      rating: 4.7,
      students: 520,
      bio: "Michael Thompson specializes in Business English and professional communication. With a background in corporate training, he helps professionals enhance their English skills for international business environments, presentations, and negotiations.",
      education: [
        "Master in TESOL - University of Edinburgh",
        "B.A. in Business Administration - University of Toronto",
        "Certificate in Corporate Training - Harvard Extension"
      ],
      certifications: [
        "CELTA Certified",
        "Business English Specialist Certificate",
        "Cambridge English Examiner"
      ],
      courses: [
        "Business English Communication",
        "English for Presentations",
        "Negotiation English",
        "Professional Email Writing"
      ],
      languages: ["English (Native)", "Spanish (Intermediate)"],
      schedule: "Monday-Friday: 1 PM - 8 PM",
      email: "michael.thompson@globallanguage.edu"
    },
    {
      id: 14,
      name: "Carlos Mendoza",
      title: "Bachelor in Spanish Education",
      photo: "👨‍🏫",
      languageId: "spanish",
      specialization: "Latin American Spanish & Culture",
      experience: 9,
      rating: 4.8,
      students: 380,
      bio: "Carlos Mendoza from Buenos Aires brings the vibrant energy of Latin America to his Spanish classes. He specializes in Latin American Spanish variants and helps students understand the cultural nuances across different Spanish-speaking countries.",
      education: [
        "Bachelor in Spanish Education - Universidad de Buenos Aires",
        "Certificate in Latin American Studies - UNAM Mexico"
      ],
      certifications: [
        "DELE Certified Instructor",
        "Spanish for Specific Purposes Certificate",
        "Latin American Culture Specialist"
      ],
      courses: [
        "Latin American Spanish",
        "Spanish Conversation Intensive",
        "Travel Spanish",
        "Spanish Through Music & Dance"
      ],
      languages: ["Spanish (Native)", "English (Fluent)", "Portuguese (Intermediate)"],
      schedule: "Tuesday-Saturday: 11 AM - 7 PM",
      email: "carlos.mendoza@globallanguage.edu"
    },
    {
      id: 15,
      name: "Pierre Lefebvre",
      title: "Bachelor in French Education",
      photo: "👨‍🏫",
      languageId: "french",
      specialization: "French for Beginners & Travel",
      experience: 7,
      rating: 4.7,
      students: 310,
      bio: "Pierre Lefebvre makes learning French fun and accessible for beginners. His practical approach focuses on real-world communication, making students confident to use French in everyday situations and while traveling in French-speaking countries.",
      education: [
        "Bachelor in French Education - Université de Lyon",
        "Certificate in Tourism French - Alliance Française"
      ],
      certifications: [
        "DELF Certified Instructor",
        "French for Tourism Certificate",
        "Interactive French Teaching Diploma"
      ],
      courses: [
        "French for Beginners",
        "Travel French Essentials",
        "French Pronunciation Workshop",
        "Everyday French Conversation"
      ],
      languages: ["French (Native)", "English (Fluent)", "Spanish (Intermediate)"],
      schedule: "Monday-Friday: 9 AM - 5 PM",
      email: "pierre.lefebvre@globallanguage.edu"
    },
    {
      id: 16,
      name: "Anna Schmidt",
      title: "Master in German Language Teaching",
      photo: "👩‍🏫",
      languageId: "german",
      specialization: "German for Beginners & Conversational German",
      experience: 10,
      rating: 4.8,
      students: 360,
      bio: "Anna Schmidt from Munich brings warmth and patience to German language instruction. She specializes in making German grammar accessible for beginners and creating a supportive environment where students feel comfortable practicing conversation.",
      education: [
        "Master in German Language Teaching - University of Munich",
        "B.A. in Germanic Studies - University of Vienna"
      ],
      certifications: [
        "Goethe-Institut Certified Teacher",
        "German for Integration Certificate",
        "Conversational German Specialist"
      ],
      courses: [
        "German for Beginners (A1-A2)",
        "Conversational German Practice",
        "German Grammar Simplified",
        "German Culture & Traditions"
      ],
      languages: ["German (Native)", "English (Fluent)", "Italian (Intermediate)"],
      schedule: "Tuesday-Saturday: 10 AM - 6 PM",
      email: "anna.schmidt@globallanguage.edu"
    },
    {
      id: 17,
      name: "Zhang Ming",
      title: "Bachelor in Chinese Language Education",
      photo: "👩‍🏫",
      languageId: "chinese",
      specialization: "Chinese for Beginners & Character Writing",
      experience: 9,
      rating: 4.7,
      students: 340,
      bio: "Zhang Ming specializes in teaching Chinese to complete beginners. Her patient and systematic approach to teaching Chinese characters and tones has helped hundreds of students overcome their initial fears and make rapid progress in Mandarin.",
      education: [
        "Bachelor in Chinese Language Education - Shanghai Normal University",
        "Certificate in Teaching Chinese Characters - Confucius Institute"
      ],
      certifications: [
        "International Chinese Language Teacher Certificate",
        "Chinese Character Teaching Specialist",
        "Pinyin & Pronunciation Expert"
      ],
      courses: [
        "Chinese for Complete Beginners",
        "Chinese Character Writing",
        "Chinese Pronunciation Mastery",
        "Survival Chinese"
      ],
      languages: ["Mandarin Chinese (Native)", "English (Fluent)", "Shanghainese (Native)"],
      schedule: "Monday-Friday: 2 PM - 8 PM",
      email: "ming.zhang@globallanguage.edu"
    },
    {
      id: 18,
      name: "Kenji Yamamoto",
      title: "Bachelor in Japanese Language Teaching",
      photo: "👨‍🏫",
      languageId: "japanese",
      specialization: "Japanese for Business & Anime Japanese",
      experience: 8,
      rating: 4.8,
      students: 400,
      bio: "Kenji Yamamoto offers a unique blend of business Japanese and pop culture Japanese. Whether you're preparing for business in Japan or want to understand anime without subtitles, Kenji's courses cater to diverse learning goals.",
      education: [
        "Bachelor in Japanese Language Teaching - Osaka University",
        "Certificate in Business Japanese - Japan Foundation"
      ],
      certifications: [
        "Japanese Language Teaching Competency Test",
        "Business Japanese Certificate",
        "Japanese Pop Culture Specialist"
      ],
      courses: [
        "Business Japanese Fundamentals",
        "Japanese Through Anime & Manga",
        "Keigo (Honorific Japanese)",
        "Japanese for Job Interviews"
      ],
      languages: ["Japanese (Native)", "English (Fluent)", "Mandarin (Intermediate)"],
      schedule: "Wednesday-Sunday: 12 PM - 8 PM",
      email: "kenji.yamamoto@globallanguage.edu"
    },
    {
      id: 19,
      name: "Giulia Romano",
      title: "Bachelor in Italian Linguistics",
      photo: "👩‍🏫",
      languageId: "italian",
      specialization: "Italian Cooking & Language",
      experience: 6,
      rating: 4.9,
      students: 260,
      bio: "Giulia Romano combines her passion for Italian cuisine with language teaching. Her innovative 'Italian Through Cooking' classes are incredibly popular, where students learn Italian while exploring authentic Italian recipes and culinary traditions.",
      education: [
        "Bachelor in Italian Linguistics - University of Florence",
        "Culinary Arts Certificate - Italian Culinary Institute"
      ],
      certifications: [
        "CILS Certified Instructor",
        "Italian Culinary Language Specialist",
        "Italian for Tourism Certificate"
      ],
      courses: [
        "Italian Through Cooking",
        "Italian for Food Lovers",
        "Travel Italian",
        "Italian Conversation Café"
      ],
      languages: ["Italian (Native)", "English (Fluent)", "Spanish (Intermediate)"],
      schedule: "Monday-Friday: 3 PM - 9 PM",
      email: "giulia.romano@globallanguage.edu"
    },
    {
      id: 20,
      name: "João Santos",
      title: "Bachelor in Portuguese Studies",
      photo: "👨‍🏫",
      languageId: "portuguese",
      specialization: "Brazilian Portuguese & Music",
      experience: 7,
      rating: 4.8,
      students: 230,
      bio: "João Santos from Rio de Janeiro teaches Brazilian Portuguese through music, samba, and Brazilian culture. His energetic classes make learning Portuguese a joyful experience, incorporating Brazilian rhythm and cultural expressions.",
      education: [
        "Bachelor in Portuguese Studies - Federal University of Rio de Janeiro",
        "Certificate in Brazilian Music - Brazilian Music Conservatory"
      ],
      certifications: [
        "CELPE-Bras Certified Instructor",
        "Brazilian Portuguese Specialist",
        "Portuguese Through Music Certificate"
      ],
      courses: [
        "Brazilian Portuguese Essentials",
        "Portuguese Through Bossa Nova",
        "Brazilian Culture & Language",
        "Conversational Brazilian Portuguese"
      ],
      languages: ["Portuguese (Native)", "English (Fluent)", "Spanish (Fluent)"],
      schedule: "Tuesday-Saturday: 1 PM - 7 PM",
      email: "joao.santos@globallanguage.edu"
    }
  ],

  branches: []
};

// Initialize branches as copy of campuses for backward compatibility
schoolData.branches = schoolData.campuses;

// Helper functions
export const getCampusById = (id: number) => 
  schoolData.campuses.find(campus => campus.id === id);

export const getLanguageById = (id: string) => 
  schoolData.languages.find(language => language.id === id);

export const getTeacherById = (id: number) => 
  schoolData.teachers.find(teacher => teacher.id === id);

export const getTeachersByLanguage = (languageId: string) => 
  schoolData.teachers.filter(teacher => teacher.languageId === languageId);

export const getAllLanguages = () => schoolData.languages;

export const getAllCampuses = () => schoolData.campuses;

export const getAllTeachers = () => schoolData.teachers;
