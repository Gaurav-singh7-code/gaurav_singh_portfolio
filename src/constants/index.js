import project1 from "../assets/projects/project-1.jpeg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.png";
import project5 from "../assets/projects/project-5.jpg";

export const HERO_CONTENT = `
Ever the curious cat (minus the nine lives), I thrive at the intersection of AI, ML, and data science, constantly chasing the next big thing. With a knack for transforming coffee into code, I developed a CNN model at Samsung R&D that tells blurry from sharp with a 73% accuracy (just don't ask it about my Monday mornings). My journey has led me to streamline data pipelines, charm sponsors, and even wrangle AR tech into a metaverse showcase, proving that I'm as comfortable in a boardroom as I am in a debugging session. Whether it's securing Rs. 15,000 in sponsorships or analyzing 100+ datasets, my drive to learn and innovate never hits a pause. Let's just say, if there's a challenge, I've probably tried to automate it. `;

export const ABOUT_TEXT = ["I am a final-year B.Tech student in Computer Science at Vellore Institute of Technology, with a strong foundation in Java, machine learning and data science. My academic journey has been driven by a passion for these fields, and I am currently expanding my knowledge by studying artificial intelligence. With a keen analytical mind and a commitment to innovation, I am eager to explore opportunities in data science where I can apply my skills and contribute to impactful projects."]

export const EXPERIENCES = [
  {
    year: "Feb 2024 - Present",
    role: "Research Intern",
    company: "Samsung R&D, Bangalore",
    description: `Developed a lightweight CNN model achieving 73% accuracy in image classification, designed a real-time image classification Android app using Java, and curated a custom dataset of 3000+ images.`,
    technologies: ["Python", "AI/ML", "Java", "Android"],
  },
  {
    year: "Oct 2023 - Dec 2023",
    role: "Software Development Intern",
    company: "Benchmark Computer Solutions LTD, Mumbai",
    description: `Streamlined a data pipeline for 500,000 CSV entries, automated SQL query formation using Stored Procedures, optimized hardcoded logic from 3900+ to 272 lines, achieving 92% accuracy in the first testing phase.`,
    technologies: ["Advanced MySQL", "SQL", "Stored Procedures"],
  },
  {
    year: "Apr 2023 - Mar 2024",
    role: "Vice Chairperson",
    company: "IEEE-PCS, VIT Vellore",
    description: `Organized high-profile events attracting 4000+ students, enhanced the chapter website, secured Rs. 15,000 in sponsorships, and demonstrated strong project management and technical skills.`,
    technologies: ["Leadership", "Team-building", "Storytelling"],
  },
  {
    year: "Aug 2023 - Nov 2023",
    role: "Data Analyst",
    company: "Trainity",
    description: `Completed 8+ projects using Python, SQL, and Tableau, analyzed 100+ datasets, and identified key data trends, improving project completion time by 20% and accuracy by 15%.`,
    technologies: ["MySQL", "Excel", "Python", "Power BI"],
  },
];

export const EDUCATIONS = [
  {
    year: "2021 - 2025",
    role: "Undergraduate",
    company: "Vellore Institute of Technology, Vellore",
    description: `Pursuing a Bachelor of Technology in Computer Science and Engineering with a CGPA of 9.06, actively participated in co-curricular activities, including hackathons.`,
    technologies: ["DSA", "DBMS", "Operating Systems", "Computer Networks", "Software Engineering"],
  },
  {
    year: "2018 - 2021",
    role: "High School",
    company: "Ryan International School, Mumbai",
    description: `Achieved 94.4% in Class 10 and 89.4% in Class 12 exams, with a strong foundation in mathematics and sciences.`,
    technologies: ["Python", "Maths", "Physics", "Chemistry"],
  },
];

export const PROJECTS = [
  {
    title: "EEG Driven Brain Simulation Analysis",
    image: project1,
    description: "Developed a deep learning model with 74% accuracy for EEG and brain stimuli analysis using CNN, RNN, and ANN-MLP methodologies.",
    technologies: ["Python", "Deep Learning", "CNN", "RNN", "ANN-MLP"],
  },
  {
    title: "Android App for Real-time Image Classification",
    image: project2,
    description: "Developed an Android app for real-time image classification using a CNN model, implementing efficient algorithms to reduce inference time and improve user experience.",
    technologies: ["Java", "Android Studio"],
  },
  {
    title: "Impact of Car Features on Profitability and Consumer Demand",
    image: project3,
    description: "Cleaned 11,000 rows of automotive data, improving accuracy by 65% using correlation matrix, regression analysis, and Box-Whiskers chart.",
    technologies: ["Advanced Excel", "Data Analysis"],
  },
  {
    title: "Operational and Metric Analytics",
    image: project4,
    description: "Tracked user engagement across devices using MySQL, identifying 1467 highest engagement instances through rigorous SQL queries.",
    technologies: ["MySQL", "SQL Queries"],
  },
  {
    title: "Bank Loan Approvals Analysis",
    image: project5,
    description: "Processed and eliminated 20+ outliers in raw data, deriving trustable insights from over 20K rows of data to ensure customer success.",
    technologies: ["Advanced Excel", "Data Cleaning", "Data Analysis"],
  },
];

export const CONTACT = {
  address: "Mumbai, India",
  phoneNo: "+91 8591331353 ",
  email: "gauravsinghgrow@gmail.com",
};