import awsCertificate from '../assets/aws_certificate.pdf';
import nptelCertificate from '../assets/nptel_certificate.pdf';
import courseraCertificate from '../assets/coursera_certificate.pdf';
// import skill1 from '../assets/skill1.jpg'; // adjust the path
import skill2 from '../assets/c-.webp'; // adjust the path
import project1 from '../assets/project1.webp'; // adjust the path
import project2 from '../assets/project2.webp'; // adjust the path
import project3 from '../assets/project3.webp'; // adjust the path
import project4 from '../assets/project4.webp'; // adjust the path
import project5 from '../assets/project5.jpeg'; // adjust the path
import project6 from '../assets/project6.webp'; // adjust the path
import project7 from '../assets/project7.webp'; // adjust the path
import project8 from '../assets/project8.jpg'; // adjust the path
import project10 from '../assets/project10.jpg'; // adjust the path
import project11 from '../assets/project11.jpg'; // adjust the path
import project12 from '../assets/project12.webp'; // adjust the path
import project13 from '../assets/project13.webp'; // adjust the path
import project14 from '../assets/project14.jpg'; // adjust the path
import project15 from '../assets/project15.jpg'; // adjust the path

const resumeData = {
    name: "Shaik Sameer Mujahid",
    education: {
      btech: {
        degree: "B.Tech",
        branch: "Computer Science and Engineering",
        year: "2020-2024",
        university: "Adikavi Nannaya University, Rajanagaram",
        gpa: "8.8"
      },
      intermediate: {
        degree: "MPC",
        year: "2018-2020",
        college: "Tirumala Junior College, Katheru",
        percentage: "9.5"
      },
      ssc: {
        year: "2017-2018",
        school: "Keshava Reddy High School",
        gpa: "10.00"
      }
    },
    skills: {
      programming_languages: ["C", "Python", "JAVA Basics"],
      platforms: ["Google", "Amazon Web Services (AWS)"],
      database: ["SQL"],
      presentation: ["MS Excel", "MS Word", "MS PowerPoint"],
      web_fundamentals: ["HTML", "CSS", "React JS", "WordPress"],
      framework: ["Django Restframework"],
      additional_skills: ["Jira Management", "Keka", "MS Teams"]
    },
    strengths: ["Leadership", "Critical thinking", "Prioritization skills", "Adaptability", "Versatile"],
    languages: ["Hindi", "English", "Telugu"],
    internship_experience: [
      {
        company: "MYC Mine and Yours Company, Vizag",
        role: "Full Stack Developer (Intern)",
        responsibilities: "Gained insights into business planning and pre-production steps for live projects. Contributed to various tasks, enhancing understanding of industry practices."
      },
      {
        company: "Arthashastra Intelligence, Hyderabad",
        role: "Frontend Developer (Intern)",
        duration: "5 months",
        responsibilities: "Developed responsive interfaces using React for frontend components. Created essential components in React using Django Rest Framework. Built and maintained entire websites using Wordpress."
      }
    ],
    courses_certificates: [
      {
        course: "AWS - Academy Foundation",
        duration: "OCT-DEC 2022",
        description: "Completed the AWS Academy Foundation program, mastering cloud computing and AWS services to design, develop, and deploy scalable applications.",
        pdf: awsCertificate, // Reference to the imported PDF
      },
      {
        course: "NPTEL - Internet of Things",
        duration: "JUL-OCT 2022",
        description: "Completed the Internet of Things course, understanding IoT concepts and technologies, and gaining hands-on experience in designing IoT solutions.",
        pdf: nptelCertificate, // Reference to the imported PDF
      },
      {
        course: "Coursera - Data Science",
        duration: "FEB-APR 2022",
        description: "Completed the Data Science course, learning data wrangling, exploratory data analysis, statistical modeling, and machine learning.",
        pdf: courseraCertificate, // Reference to the imported PDF
      }
    ],
    projects: [
      // 🔹 1️⃣ PROJECTS WITH BOTH GITHUB AND LIVE LINKS
      {
        name: "AI Visual Search System",
        date: "2024",
        description: "Developed an AI-powered visual search system that retrieves similar images from a dataset based on user-uploaded images. Fine-tuned a pre-trained Hugging Face vision model to achieve 92% similarity accuracy using deep learning embeddings and cosine similarity metrics.",
        downloadLink: '/assets/ai_visual_search_project.pdf',
        github: 'https://github.com/sameermujahid/ikea-lens',
        view: 'https://huggingface.co/spaces/sameer-mujahid/ikea-lens',
        image: project12,
      },
      {
        name: "AI Property Recommendation System",
        date: "2024",
        description: "Designed an AI-based property recommendation system that suggests properties based on user preferences such as type, budget, and features. Integrated a feedback loop for continuous accuracy improvement, boosting user engagement by 30%.",
        downloadLink: '/assets/ai_property_recommendation_project.pdf',
        github: 'https://github.com/sameermujahid/property-recommendation',
        view: 'https://huggingface.co/spaces/sameer-mujahid/recommendation-system',
        image: project13,
      },
      {
        name: "Attendance System",
        date: "2024",
        description: "This project implements a real-time attendance system using YOLOv8 for facial recognition. It captures attendance via webcam and logs details with timestamps. The system sends email notifications and allows exporting to Excel for management.",
        downloadLink: '/assets/attendance_system_project.pdf',
        github: 'https://github.com/sameermujahid/attendance_application',
        view: 'https://huggingface.co/spaces/sameer-mujahid/attendance-system',
        image: project11,
      },
      {
        name: "AI Interviewer",
        date: "2024",
        description: "Developed an AI-powered interviewer system where users can upload their resume and specify their target job title. The system curates 10 technical and 10 behavioral interview questions tailored to the job role, simulating real interview scenarios and providing actionable feedback.",
        downloadLink: '',
        github: 'https://github.com/sameermujahid/ai-interviewer',
        view: 'https://huggingface.co/spaces/sameer-mujahid/ai-interviewer',
        image: project15, // Add image if available
      },
      
      {
        name: "Student Performance Prediction using ML",
        date: "2023",
        description: "Analyzed factors influencing student performance using ML algorithms to predict grades. Focused on improving interpretability and actionable insights for educators.",
        downloadLink: '/assets/student_performance_project.pdf',
        github: 'https://github.com/sameermujahid/student-grade-predictor',
        view: 'https://studentperformance-rwgv44z58msw4wqhtk8iou.streamlit.app/',
        image: project2,
      },
      {
        name: "Personal Portfolio",
        date: "2024",
        description: "Created a personal portfolio website to showcase my projects and skills. Enhanced my web design, UI/UX, and presentation skills.",
        downloadLink: '/assets/portfolio_project.pdf',
        github: 'https://github.com/sameermujahid/sameermujahid.github.io',
        view: 'https://sameermujahid.github.io',
        image: project8,
      },
      {
        name: "Chatbot using RAG",
        date: "2024",
        description: "Developed a conversational AI chatbot using Retrieval-Augmented Generation (RAG) to provide accurate and context-aware responses, handling over 10,000 user queries per day. Integrated NLP techniques to understand and generate human-like responses, achieving a 90% user satisfaction rate.",
        downloadLink: '',
        github: 'https://github.com/sameermujahid/customer-chatbot',
        view: '',
        image: project14,
      },
      // 🔹 2️⃣ PROJECTS WITH ONLY GITHUB LINKS
      {
        name: "Heart Disease Prediction using ML",
        date: "2023",
        description: "Created a predictive model using SVM and XGBoost to assess heart disease risk based on clinical data. This project deepened my expertise in machine learning and reinforced my analytical skills.",
        downloadLink: '/assets/heart_disease_project.pdf',
        github: 'https://github.com/sameermujahid/Heart_Disease_Prediction',
        view: '',
        image: project4,
      },
      {
        name: "License Plate Detection and Recognition",
        date: "2024",
        description: "Created a dataset of 5,000 images and trained YOLOv8 using a pre-trained model for license plate detection and text recognition, achieving 98% accuracy. Utilized OpenCV and Tesseract OCR for text extraction, reducing processing time by 40% and improving detection speed by 35%.",
        downloadLink: '',
        github: 'https://github.com/sameermujahid/license-plate',
        view: '',
        image: project3,
      },

    
      {
        name: "Job Analysis System",
        date: "2024",
        description: "Comprehensive analysis of job listings scraped from Naukri, focusing on trends in job requirements, salary expectations, and skill demands. Generated actionable insights for job seekers and recruiters.",
        downloadLink: '/assets/job_analysis_project.pdf',
        github: 'https://github.com/sameermujahid/job-analysis',
        view: '',
        image: project10,
      },
      {
        name: "Naukri Web Scraper",
        date: "2024",
        description: "Built a Python-based web scraper using BeautifulSoup to extract over 10,000 job listings, collecting details like job titles, company names, and salary data for large-scale market analysis.",
        downloadLink: '',
        github: 'https://github.com/sameermujahid/Naukri-web-scraper',
        view: '',
        image: project7,
      },

      // 🔹 3️⃣ PROJECTS WITH NEITHER GITHUB NOR LIVE LINKS
      {
        name: "Water Quality Prediction and Classification",
        date: "2023",
        description: "Developed a system using SVM and XGBoost to predict and classify water quality based on diverse environmental parameters. This project showcased my machine learning skills and strengthened my problem-solving abilities.",
        downloadLink: '/assets/water_quality_project.pdf',
        github: '',
        view: '',
        image: project1,
      },
      // {
      //   name: "Face Mask Detection",
      //   date: "2024",
      //   description: "Built a real-time face mask detection system using YOLO and OpenCV for video processing, achieving 95% precision and 92% recall. Optimized the model using transfer learning and data augmentation to reduce inference time by 25%.",
      //   downloadLink: '',
      //   github: '',
      //   view: '',
      //   image: project5,
      // },
    ],
    
    contact: {
      phone: "8317506633",
      email: "sameermujahid7777@gmail.com",
      linkedin: "www.linkedin.com/in/shaik-sameer-mujahid",
      github: "https://github.com/sameermujahid"
    },
    ongoing_courses: [
      {
        course: "Social Prachar - Data Science with AI",
        duration: "FEB-(Expected Completion: JUL 2024)",
        description: "Currently enrolled in a 6-month course focused on Data Science with AI, covering advanced Python topics, data analysis, machine learning, and artificial intelligence."
      }
    ]
  };
  
  export default resumeData;
