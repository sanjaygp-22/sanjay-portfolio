import { contactConfig, type ContactConfig } from '../config/contact';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  technologies: string[];
  category: string;
  githubUrl?: string;
  demoUrl?: string;
  status: 'Production' | 'Completed' | 'Active Development';
}

export interface SkillGroup {
  groupName: string;
  summary: string;
  items: {
    name: string;
    type: 'Language' | 'Framework' | 'Domain' | 'Tool';
    highlight?: boolean;
    note?: string;
  }[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issuerLogoText: string;
  credentialUrl?: string;
  credentialId?: string;
  issueDate?: string;
  category: 'Generative AI & Data' | 'Software & Web' | 'Honors & Workshops';
  description: string;
  coreCompetencies: string[];
}

export interface PortfolioData {
  personal: {
    name: string;
    headline: string;
    role: string;
    status: string;
    intro: string;
    resumeUrl: string;
  };
  about: {
    lead: string;
    paragraphs: string[];
    academic: {
      degree: string;
      specialization: string;
      focus: string;
      institution?: string;
    };
    engineeringValues: {
      title: string;
      description: string;
    }[];
  };
  skills: SkillGroup[];
  projects: Project[];
  certifications: Certification[];
  contact: ContactConfig;
}

export const portfolioData: PortfolioData = {
  personal: {
    name: 'SANJAY G.P.',
    headline: 'Building the Future Through Code.',
    role: 'AI & Data Science Student | Developer',
    status: 'Available for high-impact AI & Software projects',
    intro:
      'Artificial Intelligence and Data Science undergraduate interested in building intelligent applications, software systems, AI-powered tools and practical automation solutions.',
    resumeUrl: '#resume',
  },

  about: {
    lead:
      'Passionate about the intersection of mathematical reasoning, intelligent algorithms, and elegant software design.',
    paragraphs: [
      'I am an AI and Data Science undergraduate driven by an innate curiosity to understand complex systems and distill them into efficient, reliable software. My journey focuses on architecting modern applications that harness machine learning models to solve real-world engineering bottlenecks.',
      'From building end-to-end media automation engines to training acoustic anomaly models and developing conversational AI assistants, I approach engineering with a craftsman mindset: clean code, optimal algorithmic efficiency, and intentional design.',
      'My core interests span software engineering, artificial intelligence, automated workflow pipelines, and scalable full-stack architectures. I believe that thoughtful engineering and minimalism yield the most resilient solutions.',
    ],
    academic: {
      degree: 'B.Tech in Artificial Intelligence & Data Science',
      institution: 'Sri Krishna College of Engineering and Technology (SKCET), Coimbatore',
      specialization: 'Artificial Intelligence & Data Science',
      focus: 'Machine Learning, Neural Networks, Intelligent Systems & Data Analysis',
    },
    engineeringValues: [
      {
        title: 'Principled Architecture',
        description:
          'Writing modular, maintainable, and type-safe systems that scale predictably and handle edge cases gracefully.',
      },
      {
        title: 'Applied Intelligence',
        description:
          'Deploying machine learning models where they deliver authentic utility rather than superficial novelty.',
      },
      {
        title: 'Automation First',
        description:
          'Eliminating repetitive toil by engineering robust, observable automation pipelines and scriptable workflows.',
      },
    ],
  },

  skills: [
    {
      groupName: 'Languages',
      summary: 'Strong foundational understanding of object-oriented and systems programming',
      items: [
        { name: 'Java', type: 'Language', highlight: true, note: 'OOP, Robust Backend Design' },
        { name: 'Python', type: 'Language', highlight: true, note: 'AI/ML, Automation, Scripting' },
        { name: 'C++', type: 'Language', highlight: true, note: 'Algorithms, Data Structures' },
      ],
    },
    {
      groupName: 'AI & Deep Learning',
      summary: 'Mathematical foundations and modern neural network frameworks',
      items: [
        { name: 'TensorFlow', type: 'Framework', highlight: true, note: 'Deep Learning & Model Training' },
        { name: 'AI & Machine Learning', type: 'Domain', highlight: true, note: 'Supervised, Unsupervised & Anomaly Detection' },
      ],
    },
    {
      groupName: 'Frontend & Web Architecture',
      summary: 'Building high-performance, accessible, and responsive user interfaces',
      items: [
        { name: 'Frontend Development', type: 'Domain', highlight: true, note: 'React, TypeScript, Modern Component Systems' },
      ],
    },
    {
      groupName: 'Version Control & Workflow',
      summary: 'Collaborative development, branching workflows, and repository hygiene',
      items: [
        { name: 'Git and GitHub', type: 'Tool', highlight: true, note: 'Version Control, Collaborative Workflows' },
      ],
    },
  ],

  projects: [
    {
      id: 'ember',
      title: 'EMBER',
      subtitle: 'Personal AI Assistant',
      description:
        'An intelligent, context-aware personal AI assistant engineered for high-efficiency desktop interaction, task automation, and streamlined natural language query processing.',
      highlights: [
        'Contextual query execution and proactive task suggestions',
        'Custom modular architecture designed for local and API-driven model integration',
        'Minimalist, distraction-free interface prioritizing speed and keyboard navigation',
      ],
      technologies: ['Python', 'AI & Machine Learning', 'Natural Language Processing', 'APIs'],
      category: 'AI Assistant',
      status: 'Active Development',
    },
    {
      id: 'storypilot',
      title: 'STORYPILOT',
      subtitle: 'YouTube Automation System',
      description:
        'An end-to-end automated pipeline for YouTube content creation, transforming topic concepts into structured scripts, voice synthesis, asset assembly, and scheduled distribution.',
      highlights: [
        'Automated script generation leveraging structured prompt engineering',
        'Automated asset retrieval, synchronization, and audio rendering pipeline',
        'Eliminates repetitive video creation toil with programmatic batch workflows',
      ],
      technologies: ['Python', 'Automation', 'Video Processing', 'APIs', 'Git'],
      category: 'Automation Pipeline',
      status: 'Completed',
    },
    {
      id: 'machinesense',
      title: 'MachineSense',
      subtitle: 'Machine Sound Fault Detection',
      description:
        'An industrial acoustic predictive maintenance system that analyzes machine sound recordings to detect abnormal conditions and mechanical faults using audio signal processing and machine learning.',
      highlights: [
        'Audio signal processing and machine-invariant feature extraction on MIMII pump dataset',
        'Random Forest classification architecture achieving high anomaly detection precision',
        'Integrated with React and FastAPI for real-time machine sound diagnostics',
      ],
      technologies: ['Python', 'FastAPI', 'Audio Signal Processing', 'Machine Learning', 'React'],
      category: 'Predictive Maintenance',
      githubUrl: 'https://github.com/sanjaygp-22/MachineSense_TECHNOVA',
      status: 'Completed',
    },
    {
      id: 'ai-crack-detection',
      title: 'AI Crack Detection',
      subtitle: 'Structural Defect Detection',
      description:
        'A computer vision inspection system designed to identify, localize, and segment surface fissures and structural defects in concrete infrastructure from high-resolution imagery.',
      highlights: [
        'Convolutional neural network (CNN) architectures for automated crack localization and classification',
        'Image preprocessing pipelines for noise suppression, adaptive thresholding, and defect segmentation',
        'Engineered to assist civil structural inspections by prioritizing safety-critical structural anomalies',
      ],
      technologies: ['Python', 'Computer Vision', 'Deep Learning', 'CNN', 'OpenCV'],
      category: 'Computer Vision',
      status: 'Completed',
    },
  ],

  certifications: [
    {
      id: 'msft-genai',
      title: 'Microsoft Generative AI for Data Analysis',
      issuer: 'Microsoft',
      issuerLogoText: 'MSFT',
      credentialUrl: 'https://coursera.org/verify/professional-cert/XDNBLZKB53TY',
      credentialId: 'XDNBLZKB53TY',
      issueDate: 'May 27, 2026',
      category: 'Generative AI & Data',
      description:
        '6-Course Professional Certificate mastering generative AI tools across data analysis, predictive modeling, synthetic data creation, and automated workflow pipelines.',
      coreCompetencies: [
        'Generative AI for Data Analysis',
        'Data Processing & Optimization',
        'Predictive Modeling',
        'Time-Series Forecasting',
        'Root Cause Analysis',
        'Workflow Automation',
      ],
    },
    {
      id: 'ibm-ai-basics',
      title: 'Getting Started with Artificial Intelligence',
      issuer: 'IBM SkillsBuild',
      issuerLogoText: 'IBM',
      credentialUrl: 'https://www.credly.com/badges/0469f417-e9ec-43fd-9210-3a839d0a3e04',
      credentialId: '0469f417-e9ec-43fd-9210-3a839d0a3e04',
      issueDate: 'Mar 17, 2026',
      category: 'Generative AI & Data',
      description:
        'Fundamental foundations of Artificial Intelligence, cognitive systems, machine learning paradigms, and ethical model deployment standards.',
      coreCompetencies: [
        'Artificial Intelligence Foundations',
        'Cognitive Systems',
        'Machine Learning Concepts',
        'AI Ethics & Governance',
      ],
    },
    {
      id: 'ibm-prompt-eng',
      title: 'Generative AI: Prompt Engineering Basics',
      issuer: 'IBM',
      issuerLogoText: 'IBM',
      credentialUrl: 'https://coursera.org/verify/S70Y09RQ9IV9',
      credentialId: 'S70Y09RQ9IV9',
      issueDate: 'May 20, 2026',
      category: 'Generative AI & Data',
      description:
        'Advanced methodologies in prompt engineering, context framing, few-shot conditioning, and programmatic integration of large language models.',
      coreCompetencies: [
        'Prompt Engineering',
        'LLM Context Conditioning',
        'Few-Shot Prompting',
        'AI Productivity Tools',
      ],
    },
    {
      id: 'snowflake-dev',
      title: 'Intro to Snowflake for Devs, Data Scientists, Data Engineers',
      issuer: 'Snowflake',
      issuerLogoText: 'SNOW',
      credentialUrl: 'https://coursera.org/verify/G8MWP4X661TY',
      credentialId: 'G8MWP4X661TY',
      issueDate: 'May 27, 2026',
      category: 'Generative AI & Data',
      description:
        'Cloud data warehousing, scalable data architecture, SQL data manipulation, and building high-performance data engineering pipelines on Snowflake.',
      coreCompetencies: [
        'Cloud Data Warehousing',
        'Snowflake Architecture',
        'SQL for Data Science',
        'Data Engineering Pipelines',
      ],
    },
    {
      id: 'meta-front-end',
      title: 'Introduction to Front-End Development',
      issuer: 'Meta',
      issuerLogoText: 'META',
      credentialUrl: 'https://coursera.org/verify/YAKKXNEANZDA',
      credentialId: 'YAKKXNEANZDA',
      issueDate: 'Feb 16, 2026',
      category: 'Software & Web',
      description:
        'Modern client-side web development fundamentals, responsive UI architecture, semantic HTML5, and CSS layout engines.',
      coreCompetencies: [
        'Responsive Web Design',
        'Semantic HTML5',
        'Modern CSS Architecture',
        'UI/UX Design Principles',
      ],
    },
    {
      id: 'meta-javascript',
      title: 'Programming with JavaScript',
      issuer: 'Meta',
      issuerLogoText: 'META',
      credentialUrl: 'https://coursera.org/verify/RY9NVI0W7XQT',
      credentialId: 'RY9NVI0W7XQT',
      issueDate: 'Feb 17, 2026',
      category: 'Software & Web',
      description:
        'Advanced ES6+ JavaScript, object-oriented programming, asynchronous paradigms, DOM interactions, and automated testing with Jest.',
      coreCompetencies: [
        'Modern JavaScript (ES6+)',
        'Asynchronous Programming',
        'Object-Oriented JavaScript',
        'Unit Testing with Jest',
      ],
    },
    {
      id: 'meta-version-control',
      title: 'Version Control',
      issuer: 'Meta',
      issuerLogoText: 'META',
      credentialUrl: 'https://coursera.org/verify/BDPPS00X87B5',
      credentialId: 'BDPPS00X87B5',
      issueDate: 'Feb 18, 2026',
      category: 'Software & Web',
      description:
        'Professional Git command-line workflows, branch management, merge conflict resolution, rebase operations, and collaborative repository hygiene.',
      coreCompetencies: [
        'Git CLI Mastery',
        'Branching & Merging',
        'Collaborative GitHub Workflows',
        'Version History & Rebase',
      ],
    },
    {
      id: 'ibm-java',
      title: 'Java Programming for Beginners',
      issuer: 'IBM',
      issuerLogoText: 'IBM',
      credentialUrl: 'https://coursera.org/verify/3ZG4VCPP4APS',
      credentialId: '3ZG4VCPP4APS',
      issueDate: 'Oct 19, 2025',
      category: 'Software & Web',
      description:
        'Foundational Java programming, object-oriented concepts, class structures, method overriding, and computational logic.',
      coreCompetencies: [
        'Java Syntax & Types',
        'Object-Oriented Programming',
        'Data Collections',
        'Algorithmic Logic',
      ],
    },
    {
      id: 'iiit-computer-org',
      title: 'Fundamentals of Computer Organization',
      issuer: 'IIIT Hyderabad',
      issuerLogoText: 'IIIT',
      credentialUrl: 'https://coursera.org/verify/AUG13Y3JH4FH',
      credentialId: 'AUG13Y3JH4FH',
      issueDate: 'Mar 12, 2026',
      category: 'Software & Web',
      description:
        'Processor architecture, instruction execution cycle, memory hierarchy, cache organization, and computer systems engineering.',
      coreCompetencies: [
        'Computer Systems Architecture',
        'Instruction Sets',
        'Memory Hierarchy & Caches',
        'Pipelining',
      ],
    },
    {
      id: 'iit-palakkad-genai',
      title: 'Gen AI Workshop — Petrichor\'26',
      issuer: 'IIT Palakkad',
      issuerLogoText: 'IIT',
      issueDate: 'Sep 27, 2025',
      category: 'Honors & Workshops',
      description:
        'Hands-on immersion in state-of-the-art Generative AI architectures, neural model inference, and practical implementation during Petrichor\'26 at IIT Palakkad.',
      coreCompetencies: [
        'Generative Models',
        'Neural Inference',
        'Deep Learning Application',
      ],
    },
    {
      id: 'isro-remote-sensing',
      title: 'Advances in Thermal Infrared Remote Sensing',
      issuer: 'ISRO / IIRS',
      issuerLogoText: 'ISRO',
      issueDate: 'Oct 15, 2025',
      category: 'Honors & Workshops',
      description:
        'Specialized technical workshop organized by Indian Space Research Organisation (ISRO) and Indian Institute of Remote Sensing (IIRS) on spatial analysis.',
      coreCompetencies: [
        'Thermal Infrared Remote Sensing',
        'Geospatial Data Processing',
        'Ecological Machine Analysis',
      ],
    },
    {
      id: 'skcet-vision-ai',
      title: 'Vision AI 2025 Project Expo',
      issuer: 'SKCET',
      issuerLogoText: 'SKCET',
      issueDate: 'Sep 15, 2025',
      category: 'Honors & Workshops',
      description:
        'Showcased applied engineering prototype at the Department of Artificial Intelligence and Data Science Project Expo held on Engineers\' Day 2025.',
      coreCompetencies: [
        'Computer Vision System Design',
        'Model Prototyping',
        'Technical Presentation',
      ],
    },
  ],

  contact: contactConfig,
};
