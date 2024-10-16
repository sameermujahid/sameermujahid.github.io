import awsCertificate from '../assets/aws_certificate.pdf';
import nptelCertificate from '../assets/nptel_certificate.pdf';
import courseraCertificate from '../assets/coursera_certificate.pdf';
import skill1 from '../assets/skill1.jpg'; // adjust the path
import skill2 from '../assets/skill2.jpg'; // adjust the path

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
      {
        name: "MERA SAHAI: Mera Sahai Platform",
        date: "2003",
        description: 
        "As a web developer for the jobseeker support platform, I oversaw modules allowing everyone to upload job and project alerts. I'm proud of my part in this important effort, which aims to make it easier for jobseekers.",
        downloadLink: '/assets/mera_sahai_project.pdf',
        view: 'https://github.com/sameermujahid/student_performance/tree/master',
        image: skill1,
      },
      {
        name: "Water Quality Prediction and Classification",
        date: "2003",
        description: 
        "For my college project, I developed a system using SVM and XGBoost to predict and classify water quality based on diverse parameters. This project highlighted my machine learning skills and strengthened my abilities in project management, problem-solving, and independent work.",
        downloadLink: '/assets/water_quality_project.pdf',
        view: 'https://github.com/sameermujahid/student_performance/tree/master',
        image: skill2,
      },
      {
        name: "Heart Disease Prediction using ML",
        date: "2003",
        description: 
        "For my college project, I developed a system using SVM and XGBoost to predict and classify water quality based on diverse parameters. This project highlighted my machine learning skills and strengthened my abilities in project management, problem-solving, and independent work.",
        downloadLink: '/assets/water_quality_project.pdf',
        view: 'https://github.com/sameermujahid/student_performance/tree/master',
        image: skill2,
      },
      {
        name: "Student Performance prediction using ML",
        date: "2003",
        description: 
        "For my college project, I developed a system using SVM and XGBoost to predict and classify water quality based on diverse parameters. This project highlighted my machine learning skills and strengthened my abilities in project management, problem-solving, and independent work.",
        downloadLink: '/assets/water_quality_project.pdf',
        view: 'https://github.com/sameermujahid/student_performance/tree/master',
        image: skill2,
      }
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
