// resumeData.js — Portfolio Data
import awsCertificate      from '../assets/aws_certificate.pdf';
import nptelCertificate    from '../assets/nptel_certificate.pdf';
import courseraCertificate from '../assets/coursera_certificate.pdf';

import project1  from '../assets/project1.webp';
import project2  from '../assets/project2.webp';
import project3  from '../assets/project3.webp';
import project4  from '../assets/project4.webp';
import project7  from '../assets/project7.webp';
import project8  from '../assets/project8.jpg';
import project10 from '../assets/project10.jpg';
import project11 from '../assets/project11.jpg';
import project12 from '../assets/project12.webp';
import project13 from '../assets/project13.webp';
import project14 from '../assets/project14.jpg';
import project15 from '../assets/project15.jpg';

const resumeData = {
  name: 'Shaik Sameer Mujahid',

  education: {
    btech: {
      degree: 'B.Tech',
      branch: 'Computer Science and Engineering',
      year: '2020–2024',
      university: 'Adikavi Nannaya University, Rajanagaram',
      gpa: '8.16',
    },
    intermediate: {
      degree: 'MPC',
      year: '2018–2020',
      college: 'Tirumala Junior College, Katheru',
      percentage: '9.5',
    },
    ssc: {
      year: '2017–2018',
      school: 'Keshava Reddy High School',
      gpa: '10.00',
    },
  },

  skills: {
    programming_languages: ['C', 'Python', 'JavaScript'],
    platforms: ['Google Cloud', 'Amazon Web Services (AWS)', 'Microsoft Azure'],
    database: ['SQL', 'PostgreSQL', 'MySQL', 'FAISS'],
    web_fundamentals: ['HTML', 'CSS', 'React JS', 'WordPress', 'Tailwind'],
    frameworks: ['Django Rest Framework', 'FastAPI', 'Flask'],
    ml_tools: ['scikit-learn', 'PyTorch', 'TensorFlow', 'LangChain', 'HuggingFace'],
    additional_skills: ['Docker', 'Git', 'Jira', 'MS Teams', 'Power BI'],
  },

  strengths: ['Leadership', 'Critical thinking', 'Prioritization', 'Adaptability', 'Versatile'],
  languages: ['Hindi', 'English', 'Telugu'],

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

  contact: {
    phone: '8317506633',
    email: 'sameermujahid7777@gmail.com',
    linkedin: 'https://www.linkedin.com/in/shaik-sameer-mujahid',
    github: 'https://github.com/sameermujahid',
  },
};

export default resumeData;
