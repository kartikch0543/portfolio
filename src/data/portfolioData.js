export const portfolioData = {
  hero: {
    name: 'Kartik Choudhary',
    headline:
      'I build full stack products that balance strong engineering with thoughtful UI. My focus is turning ambitious ideas into fast, readable, production-ready experiences using React, Node.js, MongoDB, and modern web tooling.',
    roles: ['Full Stack Developer', 'Problem Solver', 'Tech Enthusiast'],
    skills: ['C++', 'Java', 'Python', 'React', 'Node.js', 'MongoDB', 'JavaScript'],
    image: '/profile.png',
    location: 'Punjab, India',
    college: 'Lovely Professional University, Punjab',
    status: 'Open to internships and meaningful collaborations',
    metrics: [
      { label: 'Projects Built', value: '03+' },
      { label: 'Internship Ready', value: 'Available' },
      { label: 'Primary Stack', value: 'MERN' },
    ],
  },
  about: {
    whoIAm:
      'I am Kartik Choudhary, a developer who enjoys the full journey of building on the web, from interface details to backend logic. I care about products that feel clear, useful, and polished rather than just technically complete.',
    myJourney:
      'My path into development started with curiosity about how digital products actually work beneath the surface. I built a foundation with C++, Java, and Python, then moved into full stack development where I could combine logic, design, and product thinking.\n\nSince then, I have worked on AI-powered platforms, food ordering systems, and booking experiences that taught me how to connect frontend, backend, and database decisions into one smooth user flow.',
    whatIDo: [
      'Build full stack web applications using the MERN stack',
      'Design responsive frontend experiences with strong visual hierarchy',
      'Create REST APIs and backend systems with practical structure',
      'Integrate AI workflows and third-party services where they add value',
      'Refine interfaces using real user feedback and performance awareness',
    ],
    careerGoals:
      'My goal is to grow into a software engineer who can ship products that are scalable, thoughtfully designed, and genuinely useful. I am especially motivated by work that blends product engineering, system design, and practical AI integration.',
    beyondCoding:
      'Beyond coding, I enjoy spaces where technology meets leadership and curiosity. Organizing a Fin-a-thon with 200+ participants strengthened how I collaborate, communicate, and keep momentum when ideas turn into execution.\n\nI also like exploring finance and business concepts because they sharpen the way I think about users, value, and real-world product decisions.',
    myApproach:
      'I believe strong software feels calm, intentional, and easy to trust. My approach focuses on:',
    myApproachPoints: [
      'Clean architecture',
      'Scalable development',
      'User-centric design',
      'Continuous improvement',
    ],
    journeyStats: [
      { label: 'Role', value: 'Full Stack Developer' },
      { label: 'College', value: 'Lovely Professional University' },
      { label: 'CGPA', value: '7.06' },
      { label: 'Location', value: 'Punjab, India' },
    ],
  },
  skillCategories: [
    {
      title: 'Languages',
      description: 'Core programming strength for logic building, problem solving, and development fundamentals.',
      skills: [
        { name: 'C++', level: 90 },
        { name: 'Java', level: 85 },
        { name: 'C', level: 84 },
        { name: 'JavaScript', level: 90 },
        { name: 'Python', level: 80 },
      ],
    },
    {
      title: 'Frontend',
      description: 'Modern tools for building responsive, polished, and user-friendly interfaces.',
      skills: [
        { name: 'React', level: 92 },
        { name: 'HTML', level: 95 },
        { name: 'CSS', level: 90 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'Framer Motion', level: 82 },
      ],
    },
    {
      title: 'Backend',
      description: 'Backend technologies used to build APIs, data flows, and full-stack application logic.',
      skills: [
        { name: 'Node.js', level: 86 },
        { name: 'Express', level: 84 },
        { name: 'MongoDB', level: 86 },
        { name: 'MySQL', level: 80 },
        { name: 'Firebase', level: 82 },
      ],
    },
    {
      title: 'Tools',
      description: 'Platforms and workflows that support efficient shipping, collaboration, and iteration.',
      skills: [
        { name: 'GitHub', level: 90 },
        { name: 'Vercel', level: 84 },
        { name: 'Postman', level: 86 },
        { name: 'REST APIs', level: 86 },
        { name: 'Netlify', level: 82 },
      ],
    },
  ],
  softSkills: [
    {
      title: 'Problem Solving',
      description: 'Strong analytical thinking shaped by coding practice, debugging, and iterative product work.',
    },
    {
      title: 'Adaptability',
      description: 'Comfortable learning quickly, shifting context, and improving solutions as requirements evolve.',
    },
    {
      title: 'Ownership',
      description: 'I like carrying ideas from rough concept to finished implementation with care and consistency.',
    },
    {
      title: 'Teamwork',
      description: 'Collaboration, leadership, and communication strengthened through events and shared builds.',
    },
  ],
  projects: [
    {
      title: 'DigiGenius',
      category: 'AI',
      filters: ['AI', 'Full Stack', 'Web Apps'],
      description:
        'AI-powered commerce experience with Gemini chatbot support, product browsing, cart functionality, and UX refinements informed by 600+ real user interactions.',
      stack: ['React', 'Node.js', 'Express', 'Firebase', 'Gemini API'],
      liveUrl: 'https://digit-genius.vercel.app/',
      sourceUrl: 'https://github.com/kartikch0543',
      image: '/project-previews/placement-prep.svg',
      accent: 'from-cyan-500/24 via-sky-500/12 to-teal-500/24',
    },
    {
      title: 'Foodie',
      category: 'Full Stack',
      filters: ['Full Stack', 'Web Apps'],
      description:
        'Food ordering platform with authentication, cart management, order flow, and a complete MERN-based architecture focused on usability and speed.',
      stack: ['MERN Stack', 'React', 'Node.js', 'MongoDB'],
      liveUrl: 'https://food-mu-five.vercel.app/',
      sourceUrl: 'https://github.com/kartikch0543',
      image: '/project-previews/analytics-dashboard.svg',
      accent: 'from-sky-500/22 via-cyan-500/12 to-blue-500/22',
    },
    {
      title: 'Movie Booking System',
      category: 'Full Stack',
      filters: ['Full Stack', 'Web Apps'],
      description:
        'Movie ticket booking platform with seat selection, login flow, and booking management designed as a practical end-to-end MERN user experience.',
      stack: ['MERN Stack', 'React', 'Node.js', 'MongoDB'],
      liveUrl: 'https://movie-booking-prlb.onrender.com/',
      sourceUrl: 'https://github.com/kartikch0543',
      image: '/project-previews/campus-connect.svg',
      accent: 'from-teal-500/22 via-cyan-500/12 to-indigo-500/22',
    },
  ],
  education: [
    {
      title: 'Lovely Professional University, Punjab',
      subtitle: 'B.Tech CSE',
      meta: 'Aug 2023 - Present',
      description: 'CGPA: 7.06',
    },
    {
      title: 'Darshan Academy, Ludhiana',
      subtitle: 'Intermediate',
      meta: '72%',
      description: 'Higher secondary education with a strong academic base.',
    },
    {
      title: 'Darshan Academy, Ludhiana',
      subtitle: 'Matriculation',
      meta: '75%',
      description: 'Schooling focused on strong academic fundamentals.',
    },
  ],
  resume: {
    title: 'Resume / CV',
    subtitle:
      'A clear, ATS-friendly summary of my full stack capabilities, education, projects, and technical growth.',
    preview: '/cv-preview.svg',
    downloadUrl: '/Kartik-Choudhary-CV.pdf',
  },
  resumeHighlights: {
    skills: [
      {
        title: 'Full Stack Mastery',
        subtitle: 'MERN Stack proficiency',
        meta: 'React, Node, Express, MongoDB',
        description: 'Able to architect and build responsive, scalable, and user-focused web applications.',
      },
      {
        title: 'Modern Development',
        subtitle: 'Clean Code & UI/UX',
        meta: 'Tailwind, Framer Motion',
        description: 'Focused on creating responsive, visually engaging, and polished interfaces.',
      },
    ],
    projects: [
      {
        title: 'AI & Full Stack Innovation',
        subtitle: 'Real World Applications',
        meta: 'DigiGenius, Foodie, Movie Booking',
        description: 'Demonstrates hands-on work with AI integrations, cart systems, booking flows, and database-backed experiences.',
      },
      {
        title: 'Data-Driven Optimization',
        subtitle: 'Improving UX',
        meta: '600+ Real User Interactions',
        description: 'Used real user interaction data to improve the DigiGenius user interface and overall experience.',
      },
    ],
    certificates: [
      {
        title: 'NPTEL Cloud Computing',
        subtitle: 'IIT Kanpur',
        meta: 'Certification',
        date: '2024',
        image: '/certificates/cloud-computing.svg',
        description: 'Validation of cloud computing knowledge and distributed systems fundamentals.',
      },
      {
        title: 'Java Mobile App Development',
        subtitle: 'LPU',
        meta: 'Certification',
        date: '2025',
        image: '/certificates/java-mobile.svg',
        description: 'Covered practical Java mobile development concepts and implementation basics.',
      },
      {
        title: 'Code-A-Haunt',
        subtitle: 'Competitive Coding Event',
        meta: 'Rank 6',
        date: '2024',
        image: '/certificates/code-a-haunt.svg',
        description: 'Demonstrated strong competitive coding skills and problem-solving under pressure.',
      },
      {
        title: 'Web Hackathon',
        subtitle: 'Hackathon Participation',
        meta: 'Web Development',
        date: '2024',
        image: '/certificates/web-hackathon.svg',
        description: 'Showcased rapid problem solving, collaboration, and practical implementation.',
      },
    ],
  },
  achievements: [
    {
      title: 'Conducted Fin-a-thon',
      date: '200+ Participants',
      description: 'Organized a Fin-a-thon with over 200 participants, demonstrating technical leadership and teamwork.',
    },
    {
      title: 'Secured Rank 6 - Code-A-Haunt',
      date: 'Competitive Event',
      description: 'Achieved Rank 6 in Code-A-Haunt, reflecting strong coding speed and logical problem-solving ability.',
    },
    {
      title: 'Strong Problem Solving',
      date: 'Ongoing',
      description: 'Continuously improving logical thinking through coding practice and real project debugging.',
    },
    {
      title: 'Leadership and Collaboration',
      date: 'Ongoing',
      description: 'Built confidence in teamwork, communication, and event coordination through technical initiatives.',
    },
  ],
  contact: {
    email: 'kartikchoudhary0543@gmail.com',
    phone: '+91-9878868915',
    linkedin: 'https://www.linkedin.com/in/kartik-ch',
    github: 'https://github.com/kartikch0543',
    location: 'Punjab, India',
    formRecipient: 'kartikchoudhary0543@gmail.com',
  },
};
