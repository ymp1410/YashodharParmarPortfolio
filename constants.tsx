
import React from 'react';
import { Project, Experience, Education } from './types';

export const PERSONAL_INFO = {
  name: "Yashodhar Parmar",
  title: "AI Strategy, Enterprise AI & Agentic Systems",
  email: "yasshodharparmar@gmail.com",
  phone: "+1 (480) 560-1852",
  location: "Tempe, AZ",
  linkedin: "https://www.linkedin.com/in/yashodhar-parmar",
  about: "I am an AI Strategy Professional with a Master’s in AI in Business and about 4 years of hands-on experience, offering a rare blend of technical depth, design centricity, and business acumen. I specialize in enterprise AI deployment and agentic systems, bridging the gap between business strategy and cutting-edge machine intelligence.",
  personalMission: "I operate at the intersection of Tech and Business, fueled by Creativity and Design. My mission is to translate complex machine intelligence into scalable, high-impact business solutions that never compromise on human-centric aesthetics."
};

export const PERSONAL_STORY = {
  narrative: [
    "I am Yashodhar Parmar, an AI Strategy Professional and AI Business Strategist who transforms emerging technologies into scalable business solutions.",
    "From researching large language models and leading XR product roadmaps at Deloitte to building agentic AI systems and analytics dashboards for public-sector clients like the City of Scottsdale, I specialize in bridging business objectives with technical execution.",
    "With experience spanning AI workflows, LLM systems, enterprise automation, and user-centered design, I bring a structured, data-driven, and outcome-focused approach to innovation.",
    "My Motto: People show trust in me and I deliver!"
  ],
  quickFacts: [
    { label: "Obsession", value: "AI Strategy & Agentic Systems" },
    { label: "Global Perspective", value: "Delegate @ London Tech Week" },
    { label: "Academics", value: "4.0 GPA @ ASU W.P. Carey" },
    { label: "Languages", value: "English, Hindi, Gujarati, French" }
  ],
  pillars: [
    { title: "Tech", description: "Python, FastAPI, RAG, and Agentic workflows.", icon: "code" },
    { title: "Business", description: "Consulting strategy, ROI-driven AI, and data analytics.", icon: "briefcase" },
    { title: "Creativity", description: "Podcast direction, storytelling, and innovative media.", icon: "sparkles" },
    { title: "Design", description: "Figma, UI/UX, and immersive experience architecture.", icon: "palette" }
  ]
};

export const EXPERIENCES: Experience[] = [
  {
    role: "AI Research Assistant",
    company: "Department of Information Systems, W. P. Carey School of Business, Arizona State University, Tempe, AZ",
    period: "June 2026 – Present",
    highlights: [
      "Worked on research topics in AI and Large Language Models, including data collection and analysis, machine learning and deep learning modeling, data engineering, cleaning tasks, and labeling tasks.",
      "Provided assistance in developing tutorials and assignments related to Agentic AI, ML, and DL topics in general."
    ]
  },
  {
    role: "AI Business Strategist",
    company: "City of Scottsdale - Capstone, Scottsdale, AZ",
    period: "Jan 2026 – May 2026",
    highlights: [
      "Partnered with the City of Scottsdale for a capstone project to improve and provide data-driven AI strategy for their ScottsdaleEZ platform.",
      "Delivered a prediction model deployed on AWS SageMaker and data analysis driven insights on a Power BI dashboard, enabling officials to predict community issues and deploy assets efficiently, increasing service quality by 30%."
    ]
  },
  {
    role: "Creative Technology Consultant",
    company: "Enterprise Technology ASU (Zoom Innovation Labs), Tempe, AZ",
    period: "Oct 2025 – May 2026",
    highlights: [
      "Worked at Zoom Innovation Labs, supporting client engagements through podcast direction, recording, and production management to enhance content quality and stakeholder engagement.",
      "Developed an Agentic AI chatbot at Zoom Innovation Labs to assist clients with concept ideation and workflow optimization."
    ]
  },
  {
    role: "XR Consultant",
    company: "Deloitte Consulting, India",
    period: "June 2022 – August 2025",
    highlights: [
      "Worked as a Digital Customer Consultant at Deloitte USI (US offices in India) and orchestrated the end-to-end XR experience using 3D tech like Autodesk Maya, Blender, Unreal Engine, etc., catering to Fortune 500 clients and global clients from the US, Canada, UAE, and Saudi Arabia.",
      "Owned the XR product roadmap for enterprises, defining POCs, success metrics, KPIs, and release milestones in collaboration with engineering, design, and business stakeholders.",
      "Awards: “Excellence Applause Award” – 2023 and 2024 performance year; “Outstanding Performance Award” – 2024-25 performance year; “Exceptional” rating in 2024 and 2025."
    ]
  },
  {
    role: "Project Team Lead Intern",
    company: "Technokrat Solutions, India",
    period: "June 2021 – August 2021",
    highlights: [
      "Designed and deployed an IoT data pipeline for RFID-based asset tracking at POWERGRID Corporation of India (PGCIL), overseeing hardware-to-software integration, production reliability, and optimization, reducing error margin from 40% to 0%."
    ]
  }
];

export const EDUCATION: Education[] = [
  {
    degree: "Master of Science, AI in Business",
    institution: "W. P. Carey School of Business, Arizona State University, Tempe, AZ",
    period: "August 2025 – May 2026",
    details: "GPA: 4.0/4.0. Focused on Machine Learning, Programming for AI, and Enterprise Data Analytics."
  },
  {
    degree: "Bachelor of Technology, Electronics and Communication Engineering",
    institution: "Sardar Vallabhbhai National Institute of Technology (SVNIT), Surat, Gujarat, India",
    period: "August 2018 – May 2022",
    details: "Focus on electronics, signal processing, and telecommunications."
  }
];

export const PROJECTS: Project[] = [
  {
    title: "3D Portfolio Showcase",
    description: "A comprehensive gallery of my 3D design work, including high-fidelity architectural walkthroughs, product advertisements, and mechanical physics simulations.",
    tags: ["3D Visualization", "Blender", "Unreal Engine", "Animation"],
    link: "./?page=3d"
  },
  {
    title: "Tiershift",
    description: "Performed data exploration, cleaning, and analysis on a Netflix dataset, and created a tool to help streaming services understand and improve client subscription fit; documented findings and model behavior.",
    tags: ["Data Analysis", "Python", "Machine Learning"],
    link: "https://github.com/Pirate1410/TierShift.git"
  },
  {
    title: "VibeCheckAI",
    description: "Architected a high-impact AI solution bridging intergenerational communication gaps; developed the commercial value proposition, pitch decks, and GTM assets; secured the Audience Choice Award.",
    tags: ["GenAI", "Communication", "LLM", "Business Innovation"],
    link: "https://gemini.google.com/share/e84107e4c613"
  },
  {
    title: "Agentic AI Blog Expert",
    description: "Built a complete tool to go from ideation to draft, to editing and revising, using the OpenAI API.",
    tags: ["Agentic AI", "OpenAI API", "LLMs"],
    link: "https://github.com/Pirate1410/Agentic-AI-Blog-Expert.git"
  },
  {
    title: "Customer Service Automation Chatbot",
    description: "Implemented an agentic AI-powered chatbot that augments customer service operations by partially automating representative tasks through intelligent workflow orchestration.",
    tags: ["Agentic AI", "Chatbot", "Workflow Orchestration"],
    link: "https://github.com/Pirate1410/Customer_Service_agentic_bot.git"
  },
  {
    title: "Phoenix Sky Harbor Airport Visualization",
    description: "Created a dashboard to visualise live car parking data, thus improving the parking lot management.",
    tags: ["Data Visualization", "Dashboard", "Analytics"],
    link: "https://github.com/Pirate1410/PHX_SkyHarbor_Airport_ParkingViz",
    demoLink: "https://ymp1410-phx-skyharbor-airport-parkingviz-app-nhryow.streamlit.app/"
  }
];

export const PRESENTATIONS = [
  {
    title: "Why Fear AI",
    description: "Presentation on why we fear AI, psychology behind it, how it started and how can we mitigate the risks and reduce the fear of AI.",
    videoUrl: "https://drive.google.com/file/d/1K5V0b64Eb3oPDMTVyYbVgTIuQ0DlQ4z3/preview",
    thumbnailUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1932&auto=format&fit=crop"
  },
  {
    title: "The AI Mischief",
    description: "Presentation on how people use AI for wrong deeds and psychology behind it. What are the common risks that we should be aware of, and how to avoid them.",
    videoUrl: "https://drive.google.com/file/d/1vy7Zf7RpTV1UhpHgF9jVtp93J_EDN1Ez/preview",
    thumbnailUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
  }
];

export const SKILLS = {
  strategy: ["Business Value Frameworks", "GTM Strategy", "Solution Blueprinting", "Value Creation Analysis", "Product Roadmap Ownership", "Solution Lifecycle Management", "Agile Workflow", "Stakeholder Management"],
  aiAgentic: ["GenAI", "LLMs", "RAG Architecture", "Agentic Workflows", "n8n", "MCP", "TensorFlow", "Keras", "FastAPI", "Scikit-learn", "LangChain", "CNN", "VLMs", "Ollama", "ML Workflows", "Databricks", "CrewAI", "MLflow", "Model Tracking", "Google AI Studio", "Groq AI", "Claude Code", "Microsoft Copilot"],
  dataAnalytics: ["Power BI", "Tableau", "SQL (PostgreSQL, MySQL)", "Python (Pandas, NumPy, Matplotlib)"],
  aiGovernance: ["NIST AI RMF", "EU AI Act", "Human-in-the-Loop Workflows", "Model Evaluation", "Data Quality", "Auditability", "Responsible AI", "LIME", "SHAP"],
  changeManagement: ["User Training", "Workflow Documentation", "Adoption Measurement", "Stakeholder Feedback", "Iterative Improvement", "Executive Communication"],
  designPrototyping: ["Design using Gestalt Principles", "High-Fidelity Prototyping", "Figma", "FigJam", "Canva", "FlowStep", "NotebookLM", "Adobe Creative Suite"]
};

export const RESUME_CONTEXT = `
Full Name: Yashodhar Parmar
Role: AI Strategy & Agentic Systems Professional
Education: MS in AI in Business (ASU, 4.0 GPA), B.Tech in Electronics (NIT Surat)
Experience Highlights: 
- AI Research Assistant at W.P. Carey School of Business (AI & LLM research).
- AI Business Strategist at City of Scottsdale (reduced resolution time/increased quality by 30%).
- Creative Tech Consultant for Zoom Innovation Labs (built Agentic AI chatbot).
- XR Consultant at Deloitte Consulting (directed XR experiences for Fortune 500s).
- Project Team Lead Intern at Technokrat Solutions (reduced RFID tracking error margin from 40% to 0%).
Skills: GenAI, LLMs, RAG, Agentic Workflows, n8n, MCP, Python, SQL, Power BI, NIST AI RMF, Design/Figma.
Achievements: OpenAI Course Reviewer, Beta Gamma Sigma, Cohort Engagement Board, ISSC volunteer.
Contact: yasshodharparmar@gmail.com, +1 (480) 560-1852.
Location: Tempe, Arizona.
`;
