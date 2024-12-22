import project1 from "../assets/projects/Project1.jpeg";
import project2 from "../assets/projects/Project2.jpeg";
import project3 from "../assets/projects/Project3.jpeg";
import project4 from "../assets/projects/project4.jpeg";
import researchproject1 from "../assets/projects/RP1.jpg";
import researchproject2 from "../assets/projects/RP2.jpeg";
import SAS from "../assets/Certificate/SAS.png"


export const HERO_CONTENT = `I am an aspiring Data/Business Analyst eager to embark on a career in the corporate world and explore early career opportunities. With a robust educational background and hands-on experience in data analysis and business intelligence, I am equipped with the skills and knowledge necessary to drive data-driven decision-making and contribute to business growth. My goal is to leverage my expertise in data analytics to provide valuable insights and innovative solutions that will enhance business performance in a dynamic and fast-paced environment. I am dedicated to continuous learning and passionate about transforming data into actionable strategies.`;

export const ABOUT_TEXT = `I am a dedicated professional pursuing a Master’s in Management of Information Systems with a robust background in data analysis and web development. My experience includes roles as a Financial Planning Analyst, Data Analyst Intern, and Full Stack Web Developer Intern. I have honed skills in Python, R, and Java, and am proficient in tools like Power BI, Tableau, and SAS Enterprise Miner. My technical expertise extends to web development with technologies such as HTML, CSS, PHP, and React. My projects, from real-time finance dashboards to predictive models for health risk assessment, reflect my ability to drive data-driven decisions and solve complex problems. I’ve contributed to publications in IEEE and IJRASET, showcasing my research capabilities. I’m passionate about leveraging data to optimize business processes and eager to tackle new challenges in the corporate world.`;

export const EXPERIENCES = [
  {
    year: "June 2024 - Aug 2024",
    role: "Financial Planning Analyst",
    company: "Brookfield Properties, Bengaluru, India",
    description: `Assist in preparing financial statements, budgets, forecasts, and variance analysis. Conduct market research, analyze economic trends, and support FP&A team projects, including drafting presentations for clients.`,
    technologies: ["Microsoft Excel", "PowerPoint"]
  },
  {
    year: "Feb 2023 – May 2023",
    role: "Data Analyst Intern",
    company: "Patil Construction Company, Bengaluru, India",
    description: `Created a real-time finance dashboard in Power BI for financial tracking and decision-making. Automated an online leave request form to streamline approval processes by improving efficiency.`,
    technologies: ["Power BI", "Tableau", "n8n workflow"]
  },
  {
    year: "Jun 2022 – Jul 2022",
    role: "Full Stack Web Developer Intern",
    company: "Karnataka Power Corporation Limited, Bengaluru, India",
    description: `Developed the Inspection Bungalow Booking System using PHP, HTML, and MySQL. Created a user-friendly online interface to improve reservation administration and productivity.`,
    technologies: ["HTML", "CSS", "PHP", "MySQL", "Bootstrap"]
  }
];


const EDUCATION = [
  {
    title: "Master of Science, Management of Information Systems",
    institution: "University Of Illinois Springfield",
    location: "Springfield,IL,USA",
    dates: "May 2023 - May 2025",
    gpa: "3.96/4.0",
    
  },
  {
    title: "Bachelor of Technology, Computer Science and Engineering",
    institution: "PES University",
    location: "Bengaluru ,Karnataka, India",
    dates: "Aug 2019 - May 2023",
    gpa: "3.14/4.0",
   
  }
];

export const PROJECTS = [
  {
    title: "Case Study: Perfume E-Commerce Market Analysis",
    image: project1,
    link:"https://github.com/shreya250101/ebay-perfume-case-study",
    description: "Analyzed 2,000 eBay perfume listings, uncovering trends in brand popularity, pricing, and regional sales. Proposed recommendations for inventory and marketing, potentially boosting sales by 15%.",
    technologies: ["Python", "SQL", "Tableau"],
    date: "July 2024"
  },
  {
    title: "Exploring Predictive Models for Diabetes Risk Assessment Using Data Mining Techniques",
    image: project2,
    link:"",
    description: "Analyzed BRFSS data and visualized insights, achieving a 98.18% accuracy rate in predicting diabetes risk factors. Highlighted key variables using decision trees, neural networks, and regression models for enhanced insights.",
    technologies: ["SAS Enterprise Miner", "Tableau"],
    date: "Jan 2024 - Mar 2024"
  },
  {
    title: "Abstractive Text Summarization",
    image: project3,
    link:"https://github.com/shreya250101/Abstractive-Text-Summarization",
    description: "Used lemmatization, LSTM, and bidirectional LSTM to summarize text, reducing it by 70%. Employed vectorization and tokenization for 95% accurate model training with high-dimensional vectors.",
    technologies: ["Lemmatization", "LSTM", "Bidirectional LSTM", "Tokenization"],
    date: "Mar 2022 - May 2022"
  },
  {
    title: "Blood Bank",
    image: project4,
    link:"https://github.com/shreya250101/Blood-Bank-Management-System",
    description: "Led platform development for blood donors and receivers, connecting with hospitals. Utilized PostgreSQL and PHP for backend, and user interface designing is done with CSS.",
    technologies: ["PostgreSQL", "PHP", "HTML", "CSS"],
    date: "Aug 2021 - Dec 2021"
  }
];


export const RESEARCH_PROJECTS = [
  {
    title: "Autism Spectrum Disorder Detection System",
    image: researchproject1,
    link:"https://ieeexplore.ieee.org/document/10170707",
    description: "Conducted Logistic Regression, achieving 100% and 98% accuracies for age groups (0-3 years and 4-11 years). Employed CNN models (MobileNet, EfficientNet), achieving 95.3% accuracy in ASD recognition from face photos. Presented at IEEE INCET 2023 titled “Automated Identification and Classification of Autism Spectrum Disorder using Behavioral and Visual Patterns in Children”.",
    technologies: ["Facial Recognition", "Logistic Regression", "CNNs"],
    date: "Jan 2022 - May 2023"
  },
  {
    title: "Anatomizing Terrorism",
    image:researchproject2,
    link:"https://www.ijraset.com/research-paper/anatomizing-terrorism",
    description: "Analyzed GTD and World Happiness data using k-NN, Random Forest, and ANN, aiding with visualizations. Conducted extensive data cleaning, removing features, and reducing null values for enhanced accuracy. Published as a journal to IJRASET in September 2022.",
    technologies: ["Scikit-learn", "TensorFlow/Keras", "Pandas", "NumPy", "Seaborn", "Wordcloud"],
    date: "Sept 2022"
  }
];


export const CONTACT = {
  address: "Springfield, IL",
  phoneNo: "217-220-3071",
  email: "shreyavishwas67@gmail.com",
}

export const CERTIFICATES = [
  {
    title: "Applied Analytics Using SAS Enterprise Miner, SAS version 5.3",
    institution: "SAS",
    date: "Mar 2024",
    link: "https://www.credly.com/badges/07d8751e-6b17-4bb0-b9ff-9b358145cf9d/linked_in_profile", // replace with actual link
    image:SAS
  }
];
