export const PERSONAL_INFO = {
  name: "Sumaiya Haq",
  title: "AI Engineer | Full Stack Developer | Computer Science Student",
  location: "Bangladesh / Remote",
  email: "sumaiya.haq.dev@gmail.com",
  github: "https://github.com/Sumaiya-Haq",
  linkedin: "https://linkedin.com/in/sumaiya-haq",
  twitter: "https://twitter.com/SumaiyaHaqDev",
  bio: "I am passionate about Artificial Intelligence, Large Language Models, Full Stack Development, and building immersive digital experiences. I enjoy solving complex problems, creating modern applications, and continuously learning new technologies.",
  stats: [
    { label: "Years Experience", value: "3+" },
    { label: "AI Models Deployed", value: "15+" },
    { label: "Full Stack Projects", value: "25+" },
    { label: "Client Satisfaction", value: "100%" }
  ]
};

export const SKILL_CATEGORIES = [
  {
    category: "AI & Machine Learning",
    color: "#7C3AED",
    skills: [
      { name: "Large Language Models (LLMs)", level: 92 },
      { name: "PyTorch & TensorFlow", level: 88 },
      { name: "LangChain & LlamaIndex", level: 90 },
      { name: "Computer Vision (OpenCV)", level: 82 },
      { name: "NLP & Transformers", level: 89 },
      { name: "RAG & Vector DBs (Chroma/Pinecone)", level: 94 }
    ]
  },
  {
    category: "Frontend Development",
    color: "#3B82F6",
    skills: [
      { name: "React.js & Next.js", level: 95 },
      { name: "Three.js & React Three Fiber", level: 86 },
      { name: "Tailwind CSS & Framer Motion", level: 96 },
      { name: "TypeScript / JavaScript (ES6+)", level: 92 },
      { name: "Redux Toolkit & Zustand", level: 90 }
    ]
  },
  {
    category: "Backend & Cloud",
    color: "#22D3EE",
    skills: [
      { name: "Node.js & Express", level: 90 },
      { name: "Python / FastApi / Django", level: 93 },
      { name: "RESTful APIs & GraphQL", level: 88 },
      { name: "Docker & Containerization", level: 84 },
      { name: "AWS & Vercel / Render", level: 82 }
    ]
  },
  {
    category: "Databases & Tools",
    color: "#A78BFA",
    skills: [
      { name: "PostgreSQL & MongoDB", level: 89 },
      { name: "Pinecone / Qdrant / ChromaDB", level: 91 },
      { name: "Git / GitHub / CI/CD", level: 94 },
      { name: "Postman & Swagger", level: 90 }
    ]
  }
];

export const EXPERIENCE_DATA = [
  {
    role: "AI & LLM Solutions Developer",
    company: "Autonomous AI Labs",
    period: "2023 - Present",
    description: "Architected retrieval-augmented generation (RAG) pipelines, fine-tuned Llama 3 models, and deployed multi-agent AI systems serving thousands of daily requests.",
    technologies: ["Python", "PyTorch", "LangChain", "FastAPI", "Pinecone", "Docker"]
  },
  {
    role: "Full Stack Engineer Intern",
    company: "TechNova Systems",
    period: "2022 - 2023",
    description: "Developed modern web web applications using React, Tailwind CSS, and Node.js. Built interactive dashboard analytics and scalable REST APIs.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"]
  },
  {
    role: "Undergraduate AI Researcher",
    company: "University AI & Robotics Lab",
    period: "2022 - Present",
    description: "Conducting research on prompt compression techniques, domain adaptation for specialized LLMs, and real-time 3D web visualizations.",
    technologies: ["Python", "Transformers", "Three.js", "PyTorch"]
  }
];

export const PROJECTS_DATA = [
  {
    id: "neural-rag-assistant",
    title: "Neural-RAG: Enterprise Knowledge Agent",
    subtitle: "Context-Aware Enterprise AI Assistant",
    description: "An advanced RAG-driven AI platform with hybrid vector search, context re-ranking, and real-time streaming answers for enterprise documents.",
    longDescription: "Neural-RAG empowers organizations to index multi-modal documents, query huge repositories in milliseconds, and receive hallucination-free answers with precise citations.",
    category: "AI",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    tags: ["React", "FastAPI", "Pinecone", "LangChain", "Tailwind CSS"],
    liveDemo: "https://example.com/demo1",
    github: "https://github.com/Sumaiya-Haq",
    featured: true
  },
  {
    id: "3d-sumaiya-verse",
    title: "SumaiyaVerse 3D Portfolio",
    subtitle: "Cinematic Interactive 3D Web Experience",
    description: "An Awwwards-inspired immersive 3D portfolio showcasing a serene cyber village with dynamic weather, lighting, river, moon, and firefly shaders.",
    longDescription: "Built with React Three Fiber, Three.js, custom GLSL shaders, Framer Motion, and GSAP. Features 60FPS WebGL performance across mobile and desktop.",
    category: "3D & Web",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
    tags: ["React", "Three.js", "R3F", "Tailwind CSS", "GSAP"],
    liveDemo: "https://example.com/demo2",
    github: "https://github.com/Sumaiya-Haq",
    featured: true
  },
  {
    id: "vision-detect-ai",
    title: "VisionPulse AI Diagnostics",
    subtitle: "Real-time Computer Vision Platform",
    description: "Deep learning system for real-time video stream analysis, anomaly detection, and object classification with custom UI web controls.",
    longDescription: "Utilizes YOLOv8 and custom PyTorch backbones for low-latency video inference piped through WebSockets to a React dashboard.",
    category: "AI",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
    tags: ["PyTorch", "OpenCV", "React", "WebSockets", "FastAPI"],
    liveDemo: "https://example.com/demo3",
    github: "https://github.com/Sumaiya-Haq",
    featured: true
  },
  {
    id: "saas-flow-engine",
    title: "FlowCrafter SaaS Workflow Automation",
    subtitle: "Visual Drag-and-Drop Node Automation",
    description: "Modern SaaS workflow builder allowing users to seamlessly construct automated AI pipelines and connect API webhooks.",
    longDescription: "Features visual canvas node manipulation, automated error retries, dark glassmorphism UI, and real-time execution logs.",
    category: "Full Stack",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    tags: ["Next.js", "TypeScript", "Node.js", "MongoDB", "Tailwind CSS"],
    liveDemo: "https://example.com/demo4",
    github: "https://github.com/Sumaiya-Haq",
    featured: false
  }
];

export const RESEARCH_DATA = [
  {
    title: "Efficient Context Compression for Multimodal Large Language Models",
    publisher: "Under Review / Tech ArXiv",
    year: "2024",
    abstract: "Proposing a novel selective token pruning method for transformer context windows that reduces memory overhead by 40% without compromising retrieval precision.",
    link: "https://github.com/Sumaiya-Haq"
  },
  {
    title: "WebGL Shader Optimization Patterns in React Three Fiber Architecture",
    publisher: "Web3D Research Forum",
    year: "2023",
    abstract: "Exploring instanced rendering, custom vertex displacement shaders, and frame-budget allocation for low-power GPU mobile devices.",
    link: "https://github.com/Sumaiya-Haq"
  }
];

export const EDUCATION_DATA = [
  {
    degree: "Bachelor of Science in Computer Science & Engineering",
    institution: "Premier University",
    year: "2021 - Present",
    grade: "CGPA: 3.92 / 4.00",
    highlights: ["Focus on Artificial Intelligence, Machine Learning, and Software Architecture", "Dean's Honor List for 6 Consecutive Semesters", "Lead Coordinator of AI Student Society"]
  }
];

export const CERTIFICATES_DATA = [
  {
    title: "Deep Learning Specialization",
    issuer: "DeepLearning.AI / Coursera",
    date: "2023",
    credentialId: "DL-98214-SH"
  },
  {
    title: "Generative AI with Large Language Models",
    issuer: "AWS & DeepLearning.AI",
    date: "2024",
    credentialId: "GAI-44109-SH"
  },
  {
    title: "Full-Stack Web Development Bootcamp",
    issuer: "Udemy Certified",
    date: "2022",
    credentialId: "FSWD-77123-SH"
  }
];

export const TESTIMONIALS_DATA = [
  {
    name: "Dr. Aris Thorne",
    role: "AI Research Director",
    company: "NextGen AI Lab",
    comment: "Sumaiya possesses an incredible ability to bridge theoretical machine learning concepts with sleek, production-grade WebGL applications. She is a powerhouse engineer.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
  },
  {
    name: "Marcus Vance",
    role: "Lead Software Architect",
    company: "CyberPulse Tech",
    comment: "Working with Sumaiya was seamless. Her attention to UI detail, 3D aesthetics, and performance optimization is truly world-class.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
  }
];
