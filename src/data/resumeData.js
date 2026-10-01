// resumeData.js — Single Source of Truth for the entire portfolio
//
// IMPORTANT:
// Components should contain presentation/interaction logic only.
// Personal/professional content, links, labels, assets, and display data live here.

import profileImage from '../assets/profile.webp';
import aboutImage from '../assets/about5.jpg';
import resumePDF from '../assets/sameer_mujahid_resume.pdf';

import awsCertificate from '../assets/aws_certificate.pdf';
import nptelCertificate from '../assets/nptel_certificate.pdf';
import courseraCertificate from '../assets/coursera_certificate.pdf';
import arthashastraCertificate from '../assets/arthashastra_certificate.pdf';

import project1 from '../assets/project1.webp';
import project2 from '../assets/project2.webp';
import project3 from '../assets/project3.webp';
import project4 from '../assets/project4.webp';
import project7 from '../assets/project7.webp';
import project8 from '../assets/project8.jpg';
import project10 from '../assets/project10.jpg';
import project11 from '../assets/project11.jpg';
import project12 from '../assets/project12.webp';
import project13 from '../assets/project13.webp';
import project14 from '../assets/project14.jpg';
import project15 from '../assets/project15.jpg';

const resumeData = {
  // ────────────────────────────────────────────────────────────────────────────
  // Identity / assets
  // ────────────────────────────────────────────────────────────────────────────
  name: 'Shaik Sameer Mujahid',
  shortName: 'Sameer',
  assets: {
    profileImage,
    aboutImage,
    resumePDF,
  },

  // ────────────────────────────────────────────────────────────────────────────
  // Navigation
  // ────────────────────────────────────────────────────────────────────────────
  navigation: [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'more', label: 'Work' },
    { id: 'connect', label: 'Connect' },
  ],

  // ────────────────────────────────────────────────────────────────────────────
  // Social profiles
  // icon is a stable key; React icon components stay in the UI modules.
  // ────────────────────────────────────────────────────────────────────────────
  socials: [
    {
      key: 'linkedin',
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/shaik-sameer-mujahid/',
    },
    {
      key: 'github',
      label: 'GitHub',
      href: 'https://github.com/sameermujahid',
    },
    {
      key: 'instagram',
      label: 'Instagram',
      href: 'https://www.instagram.com/sameer.mujahid/',
    },
    {
      key: 'twitter',
      label: 'Twitter',
      href: 'https://x.com/sameer__mujahid',
    },
  ],

  // ────────────────────────────────────────────────────────────────────────────
  // Hero
  // ────────────────────────────────────────────────────────────────────────────
  hero: {
    availability: 'Available for opportunities',
    firstLine: 'Hi, I’m',
    highlightedName: 'SK Sameer',
    lastName: 'Mujahid',
    roles: [
      { title: 'AI / ML Engineer', color: '#2997ff' },
      { title: 'Data Scientist', color: '#34c759' },
      { title: 'Data Analyst', color: '#ff9f0a' },
    ],
    descriptionBeforeBreak: 'Building intelligent systems and',
    descriptionAfterBreak: 'data-driven solutions that matter.',
    resumeModalTitle: 'SK Sameer Mujahid — Resume',
    resumeDownloadName: 'sameer_mujahid_resume.pdf',
    scrollTarget: 'about',
    scrollLabel: 'Scroll to About section',
  },

  // ────────────────────────────────────────────────────────────────────────────
  // About
  // ────────────────────────────────────────────────────────────────────────────
  about: {
    label: 'About',
    titleLineOne: 'Who I am,',
    titleLineTwo: 'and what I do.',
    paragraphs: [
      'Hello! I’m a passionate engineer specializing in AI, machine learning, and full-stack development. My work spans LLMs, RAG systems, data pipelines, and web applications turning complex problems into elegant, scalable solutions.',
      'I thrive at the intersection of data and software, always exploring new frameworks, contributing to projects, and growing both technically and creatively.',
    ],
    stats: [
      { value: '1+', label: 'Years experience' },
      { value: '15+', label: 'Projects built' },
      { value: '3+', label: 'Certifications' },
    ],
    imageAlt: 'About SK Sameer Mujahid',
  },

  strengths: ['Leadership', 'Critical thinking', 'Prioritization', 'Adaptability', 'Versatile'],
  languages: ['Hindi', 'English', 'Telugu'],

  // ────────────────────────────────────────────────────────────────────────────
  // Education
  // ────────────────────────────────────────────────────────────────────────────
  education: {
    btech: {
      id: 1,
      degree: 'B.Tech – Computer Science & Engineering',
      branch: 'Computer Science and Engineering',
      institution: 'Adikavi Nannaya University, Rajanagaram',
      university: 'Adikavi Nannaya University, Rajanagaram',
      period: '2020 – 2024',
      year: '2020–2024',
      gpa: 8.16,
      gpaText: '8.16',
      maxGpa: 10,
      description: 'Focused on ML, data science, and full-stack development with various projects and internships.',
      color: '#2997ff',
    },
    intermediate: {
      id: 2,
      degree: 'Intermediate (MPC)',
      institution: 'Tirumala Junior College, Katheru',
      college: 'Tirumala Junior College, Katheru',
      period: '2018 – 2020',
      year: '2018–2020',
      gpa: 9.5,
      percentage: '9.5',
      maxGpa: 10,
      description: 'Mathematics, Physics, and Chemistry with a strong academic foundation.',
      color: '#34c759',
    },
    ssc: {
      id: 3,
      degree: 'SSC',
      institution: 'Keshava Reddy High School',
      school: 'Keshava Reddy High School',
      period: '2017 – 2018',
      year: '2017–2018',
      gpa: 10.0,
      gpaText: '10.00',
      maxGpa: 10,
      description: 'Completed secondary school with outstanding performance.',
      color: '#ff9f0a',
    },
  },

  // ────────────────────────────────────────────────────────────────────────────
  // Skills
  // ────────────────────────────────────────────────────────────────────────────
  skills: {
    categories: [
      {
        key: 'programming',
        label: 'Programming',
        color: '#2997ff',
        gridArea: '1 / 1 / 2 / 3',
        skills: [
          { name: 'Python', icon: 'python' },
          { name: 'SQL', icon: 'database' },
          { name: 'JavaScript', icon: 'javascript' },
        ],
      },
      {
        key: 'ml',
        label: 'Machine Learning',
        color: '#34c759',
        gridArea: '1 / 3 / 3 / 4',
        skills: [
          { name: 'scikit-learn', icon: 'scikitLearn' },
          { name: 'Supervised' },
          { name: 'Unsupervised' },
          { name: 'Regression' },
          { name: 'Classification' },
          { name: 'Clustering' },
          { name: 'Model Eval' },
        ],
      },
      {
        key: 'genai',
        label: 'Generative AI',
        color: '#ff9f0a',
        gridArea: '1 / 4 / 3 / 5',
        skills: [
          { name: 'LangChain' },
          { name: 'RAG' },
          { name: 'LoRA Fine-tuning' },
          { name: 'Prompt Eng.' },
          { name: 'HuggingFace', icon: 'robot' },
          { name: 'Response Eval' },
        ],
      },
      {
        key: 'dl',
        label: 'Deep Learning',
        color: '#bf5af2',
        gridArea: '2 / 1 / 3 / 2',
        skills: [
          { name: 'PyTorch', icon: 'pytorch' },
          { name: 'TensorFlow', icon: 'tensorflow' },
          { name: 'Neural Nets' },
        ],
      },
      {
        key: 'data',
        label: 'Data & Analysis',
        color: '#64d2ff',
        gridArea: '2 / 2 / 3 / 3',
        skills: [
          { name: 'Pandas', icon: 'pandas' },
          { name: 'NumPy', icon: 'numpy' },
          { name: 'Preprocessing' },
          { name: 'Cleaning' },
        ],
      },
      {
        key: 'nlp',
        label: 'NLP',
        color: '#ff6b6b',
        gridArea: '3 / 1 / 4 / 2',
        skills: [
          { name: 'Transformers' },
          { name: 'Embeddings' },
          { name: 'NLP Pipelines' },
        ],
      },
      {
        key: 'cv',
        label: 'Computer Vision',
        color: '#5e5ce6',
        gridArea: '3 / 2 / 4 / 3',
        skills: [
          { name: 'YOLOv8' },
          { name: 'Img Processing' },
          { name: 'Feature Ext.' },
        ],
      },
      {
        key: 'backend',
        label: 'Backend & APIs',
        color: '#30d158',
        gridArea: '3 / 3 / 4 / 5',
        skills: [
          { name: 'FastAPI', icon: 'fastapi' },
          { name: 'REST APIs' },
          { name: 'Django', icon: 'django' },
          { name: 'Flask', icon: 'flask' },
        ],
      },
      {
        key: 'cloud',
        label: 'Cloud',
        color: '#0071e3',
        gridArea: '4 / 1 / 5 / 2',
        skills: [
          { name: 'AWS', icon: 'aws' },
          { name: 'GCP', icon: 'googleCloud' },
          { name: 'Azure', icon: 'azure' },
        ],
      },
      {
        key: 'databases',
        label: 'Databases',
        color: '#ac8e68',
        gridArea: '4 / 2 / 5 / 3',
        skills: [
          { name: 'PostgreSQL', icon: 'postgresql' },
          { name: 'MySQL' },
          { name: 'FAISS' },
        ],
      },
      {
        key: 'visualization',
        label: 'Visualization',
        color: '#ff375f',
        gridArea: '4 / 3 / 5 / 4',
        skills: [
          { name: 'Power BI', icon: 'powerbi' },
          { name: 'Matplotlib' },
          { name: 'Seaborn' },
          { name: 'Plotly', icon: 'plotly' },
        ],
      },
      {
        key: 'deployment',
        label: 'Deployment',
        color: '#ffd60a',
        gridArea: '4 / 4 / 5 / 5',
        skills: [
          { name: 'Docker', icon: 'docker' },
          { name: 'API Deploy' },
          { name: 'Model Serving' },
        ],
      },
      {
        key: 'tools',
        label: 'Tools',
        color: '#98989d',
        gridArea: '5 / 1 / 6 / 3',
        skills: [
          { name: 'Git', icon: 'git' },
          { name: 'GitHub' },
          { name: 'Jira', icon: 'jira' },
          { name: 'Teams', icon: 'teams' },
        ],
      },
      {
        key: 'frontend',
        label: 'Frontend',
        color: '#32ade6',
        gridArea: '5 / 3 / 6 / 5',
        skills: [
          { name: 'React', icon: 'react' },
          { name: 'HTML' },
          { name: 'CSS' },
          { name: 'WordPress' },
          { name: 'Tailwind' },
        ],
      },
    ],

    // Original resume-style groupings retained for compatibility.
    programming_languages: ['C', 'Python', 'JavaScript'],
    platforms: ['Google Cloud', 'Amazon Web Services (AWS)', 'Microsoft Azure'],
    database: ['SQL', 'PostgreSQL', 'MySQL', 'FAISS'],
    web_fundamentals: ['HTML', 'CSS', 'React JS', 'WordPress', 'Tailwind'],
    frameworks: ['Django Rest Framework', 'FastAPI', 'Flask'],
    ml_tools: ['scikit-learn', 'PyTorch', 'TensorFlow', 'LangChain', 'HuggingFace'],
    additional_skills: ['Docker', 'Git', 'Jira', 'MS Teams', 'Power BI'],
    views: [
      { id: 'mosaic', label: '⊞  Mosaic' },
      { id: 'list', label: '≡  List' },
      { id: 'stream', label: '∞  Stream' },
    ],
    titleSuffix: 'domains of expertise.',
  },

  // ────────────────────────────────────────────────────────────────────────────
  // Experience
  // ────────────────────────────────────────────────────────────────────────────
  experience: [
    {
  company: 'NXGN Technologies India Pvt Ltd',
  location: 'Hyderabad',
  role: 'AI Engineer',
  duration: 'May 2026 – Present',
  type: 'Full-time',
  color: '#af52de',
  responsibilities: [
    'Develop and deploy AI-driven solutions using LLMs and modern machine learning techniques.',
    'Build and integrate AI systems to automate workflows and improve operational efficiency.',
    'Design and implement scalable AI applications for real-world business use cases.',
  ],
  skills: ['Python', 'LLMs', 'Generative AI', 'Machine Learning', 'AI'],
  companyUrl: 'https://www.nxgntech.com/',
  certificateUrl: '',
},

    {
      company: 'CINCYR Tech Private Limited',
      location: 'Hyderabad',
      role: 'Data Scientist',
      duration: 'Dec 2024 – Present',
      type: 'Internship',
      color: '#2997ff',
      responsibilities: [
        'Led development of LLMs and RAG models, enhancing AI-driven decision-making.',
        'Created custom datasets and fine-tuned LLMs for domain-specific real estate AI.',
        'Deployed ML models, increasing operational efficiency and optimizing workflows.',
        'Integrated AI solutions, reducing manual effort by 20%.',
      ],
      skills: ['Python', 'LLMs', 'RAG', 'Machine Learning', 'Deployment'],
      companyUrl: 'https://cincyrtech.com/',
      certificateUrl: '',
    },
    {
      company: 'SocialTek',
      location: 'Hyderabad',
      role: 'Data Science Intern',
      duration: 'Jul 2024 – Dec 2024',
      type: 'Internship',
      color: '#34c759',
      responsibilities: [
        'Analyzed 500,000+ records, ensuring 99% data accuracy and 20% faster retrieval.',
        'Conducted EDA, improving data-driven decision-making by 18%.',
        'Created synthetic datasets, augmenting training data by 35%.',
        'Built ATS tool, boosting recruitment efficiency by 25%.',
      ],
      skills: ['Python', 'EDA', 'Pandas', 'Data Analysis', 'ATS'],
      companyUrl: 'https://socialtek.in/',
      certificateUrl: '',
    },
    {
      company: 'Arthashastra Intelligence',
      location: 'Hyderabad',
      role: 'Machine Learning Intern',
      duration: 'Dec 2023 – Jun 2024',
      type: 'Internship',
      color: '#ff9f0a',
      responsibilities: [
        'Optimized data pipelines, reducing processing time by 20%.',
        'Built scalable web apps using React and Django.',
        'Developed ML models improving customer segmentation by 12%.',
        'Integrated AI solutions, reducing costs by 10%.',
      ],
      skills: ['Python', 'React', 'Django', 'Machine Learning'],
      companyUrl: 'https://arthashastra.ai/',
      certificateUrl: arthashastraCertificate,
    },
  ],


  // ────────────────────────────────────────────────────────────────────────────
  // Certificates
  // ────────────────────────────────────────────────────────────────────────────
  courses_certificates: [
    {
      course: 'AWS – Academy Foundation',
      duration: 'OCT – DEC 2022',
      description: 'Completed the AWS Academy Foundation program, mastering cloud computing and AWS services to design, develop, and deploy scalable applications.',
      pdf: awsCertificate,
    },
    {
      course: 'NPTEL – Internet of Things',
      duration: 'JUL – OCT 2022',
      description: 'Completed the Internet of Things course, understanding IoT concepts and technologies, and gaining hands-on experience in designing IoT solutions.',
      pdf: nptelCertificate,
    },
    {
      course: 'Coursera – Data Science',
      duration: 'FEB – APR 2022',
      description: 'Completed the Data Science course, learning data wrangling, exploratory data analysis, statistical modeling, and machine learning techniques.',
      pdf: courseraCertificate,
    },
  ],

  // ────────────────────────────────────────────────────────────────────────────
  // Projects
  // ────────────────────────────────────────────────────────────────────────────
  projects: [
    {
      name: 'AI Visual Search System',
      date: '2024',
      description: 'Built an AI-powered visual search system that retrieves visually similar images using deep learning embeddings. Fine-tuned a Hugging Face vision transformer on a custom dataset to improve feature extraction. Implemented cosine similarity and vector indexing for fast retrieval, achieving 92% accuracy. Optimized inference performance for real-time search applications.',
      github: 'https://github.com/sameermujahid/ikea-lens',
      view: 'https://huggingface.co/spaces/sameer-mujahid/ikea-lens',
      image: project12,
    },
    {
      name: 'AI Property Recommendation System',
      date: '2024',
      description: 'Developed an intelligent property recommendation system using machine learning and user preference modeling. Implemented content-based filtering with feature engineering on property attributes such as budget, location, and amenities. Integrated a feedback loop to continuously refine recommendations, improving user engagement by 30% and personalization accuracy.',
      github: 'https://github.com/sameermujahid/property-recommendation',
      view: 'https://huggingface.co/spaces/sameer-mujahid/recommendation-system',
      image: project13,
    },
    {
      name: 'Attendance System',
      date: '2024',
      description: 'Engineered a real-time attendance system using YOLOv8-based facial recognition and OpenCV for live video processing. Automated attendance logging with timestamps, reducing manual errors by 95%. Integrated email notifications via SMTP and Excel export functionality for reporting. Optimized detection pipeline for faster processing and real-time performance.',
      github: 'https://github.com/sameermujahid/attendance_application',
      view: 'https://huggingface.co/spaces/sameer-mujahid/attendance-system',
      image: project11,
    },
    {
      name: 'AI Interviewer',
      date: '2024',
      description: 'Developed an AI-powered interview simulation platform using LLMs that generates role-specific technical and behavioral questions from user-uploaded resumes. Implemented NLP-based resume parsing and prompt engineering to create personalized interview flows. Provided intelligent feedback and evaluation to enhance candidate preparation and confidence.',
      github: 'https://github.com/sameermujahid/ai-interviewer',
      view: 'https://huggingface.co/spaces/sameer-mujahid/ai-interviewer',
      image: project15,
    },
    {
      name: 'Student Performance Prediction',
      date: '2023',
      description: 'Built a machine learning model to predict student academic performance using supervised learning algorithms. Performed extensive data preprocessing, feature engineering, and model evaluation to improve accuracy. Generated interpretable insights to identify key factors influencing performance, supporting data-driven decision-making in education.',
      github: 'https://github.com/sameermujahid/student-grade-predictor',
      view: 'https://studentperformance-rwgv44z58msw4wqhtk8iou.streamlit.app/',
      image: project2,
    },
    {
      name: 'Personal Portfolio',
      date: '2024',
      description: 'Designed and developed a modern personal portfolio using React with an Apple-inspired UI/UX. Implemented smooth animations, dark/light theme switching, and responsive design principles. Focused on performance optimization and user experience to effectively showcase projects, skills, and professional profile.',
      github: 'https://github.com/sameermujahid/sameermujahid.github.io',
      view: 'https://sameermujahid.github.io',
      image: project8,
    },
    {
      name: 'Chatbot using RAG',
      date: '2024',
      description: 'Built a scalable conversational AI chatbot using Retrieval-Augmented Generation (RAG) with LangChain and FAISS. Integrated vector search for context-aware responses and optimized prompt engineering for improved accuracy. Designed to handle over 10,000 daily queries with low latency, achieving 90% user satisfaction.',
      github: 'https://github.com/sameermujahid/customer-chatbot',
      view: '',
      image: project14,
    },
    {
      name: 'Heart Disease Prediction',
      date: '2023',
      description: 'Developed a predictive healthcare model using SVM and XGBoost to assess heart disease risk from clinical data. Applied feature selection, hyperparameter tuning, and model evaluation techniques to improve prediction accuracy. Enabled early risk detection through data-driven insights.',
      github: 'https://github.com/sameermujahid/Heart_Disease_Prediction',
      view: '',
      image: project4,
    },
    {
      name: 'License Plate Detection',
      date: '2024',
      description: 'Built a computer vision system using YOLOv8 for real-time license plate detection and recognition. Created a custom dataset of 5,000+ images and integrated Tesseract OCR for text extraction. Achieved 98% detection accuracy while reducing processing time by 40% through pipeline optimization.',
      github: 'https://github.com/sameermujahid/license-plate',
      view: '',
      image: project3,
    },
    {
      name: 'Job Analysis System',
      date: '2024',
      description: 'Performed large-scale analysis of job market data scraped from Naukri using Python and data analytics techniques. Identified trends in skills, salaries, and job demand. Built data visualizations and insights to help job seekers align with industry requirements and improve employability.',
      github: 'https://github.com/sameermujahid/job-analysis',
      view: '',
      image: project10,
    },
    {
      name: 'Naukri Web Scraper',
      date: '2024',
      description: 'Developed a scalable web scraping system using BeautifulSoup and Python to extract over 10,000 job listings. Collected structured data including job roles, companies, and salary information for downstream analysis. Ensured efficient data handling and preprocessing for large datasets.',
      github: 'https://github.com/sameermujahid/Naukri-web-scraper',
      view: '',
      image: project7,
    },
    {
      name: 'Water Quality Prediction',
      date: '2023',
      description: 'Built a machine learning model using SVM and XGBoost to classify water quality based on environmental parameters. Applied data preprocessing, feature scaling, and model tuning to improve prediction performance. Contributed to environmental monitoring through data-driven insights.',
      github: '',
      view: '',
      image: project1,
    },
  ],

  // ────────────────────────────────────────────────────────────────────────────
  // Contact
  // ────────────────────────────────────────────────────────────────────────────
  contact: {
    phone: '8317506633',
    email: 'sameermujahid7777@gmail.com',
    linkedin: 'https://www.linkedin.com/in/shaik-sameer-mujahid/',
    github: 'https://github.com/sameermujahid',
  },

  connect: {
    label: 'Connect',
    titleLineOne: 'Let’s connect and explore',
    titleLineTwo: 'opportunities.',
    subtitle: 'Whether you’re looking to collaborate, discuss opportunities, or just connect, I’d love to hear from you.',
    opportunityTag: 'Open to opportunities',
    infoTitle: 'Let’s connect',
    infoBody: 'I’m always open to new opportunities, collaborations, and conversations. Feel free to reach out for projects, job opportunities, or just to say hello!',
    form: {
      nameLabel: 'Your Name',
      namePlaceholder: 'John Doe',
      emailLabel: 'Email Address',
      emailPlaceholder: 'john@example.com',
      messageLabel: 'Message',
      messagePlaceholder: 'Tell me about your project, opportunity, or idea...',
      submitLabel: 'Send Message',
      loadingLabel: 'Sending message...',
      successTitle: 'Message sent successfully!',
      successText: 'Thank you for reaching out! I’ll get back to you as soon as possible.',
      resetLabel: 'Send another message',
    },
  },

  // ────────────────────────────────────────────────────────────────────────────
  // Footer
  // ────────────────────────────────────────────────────────────────────────────
  footer: {
    tagline: 'Building AI × Full Stack Experiences',
  },

  // ────────────────────────────────────────────────────────────────────────────
  // Section/tab presentation text
  // ────────────────────────────────────────────────────────────────────────────
  sections: {
    about: {
      label: 'About',
      titleLineOne: 'Who I am,',
      titleLineTwo: 'and what I do.',
    },
    skills: {
      label: 'Skills',
    },
    work: {
      defaultTab: 'Projects',
      tabs: [
        { id: 'Projects', label: 'Projects' },
        { id: 'Experience', label: 'Experience' },
        { id: 'Education', label: 'Education' },
        { id: 'Certificates', label: 'Certificates' },
      ],
      projects: {
        label: 'Projects',
        title: 'Things I’ve built.',
      },
      experience: {
        label: 'Experience',
        title: 'Where I’ve worked.',
      },
      education: {
        label: 'Education',
        title: 'Academic journey.',
      },
      certificates: {
        label: 'Certificates',
        title: 'Certifications & courses.',
      },
    },
  },
};

export default resumeData;
