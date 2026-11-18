import { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: "laptop-price-predictor",
    title: "Laptop Price Predictor",
    tagline: "AI-powered laptop valuation and market price estimation",
    description: "An interactive full-stack application that estimates laptop market prices from hardware specifications using a trained machine-learning model.",
    detailedDescription: "Laptop Price Predictor simplifies laptop valuation by translating technical specifications into estimated market prices. The React interface collects details such as brand, processor, RAM, GPU, storage, operating system, display size, resolution, and weight. A FastAPI backend validates the inputs, performs PPI and feature processing, and sends the prepared data to a serialized XGBoost-based stacking model for real-time prediction. Results are displayed in INR, USD, and EUR through a responsive, accessible interface.",
    technologies: ["Python", "FastAPI", "React", "JavaScript", "Scikit-learn", "XGBoost", "Pandas", "Joblib"],
    category: "Machine Learning",
    status: "Completed",
    githubUrl: "https://github.com/vivekmahajan2/Laptop_Price_Predictor",
    liveDemoUrl: "",
    thumbnail: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80",
    highlights: [
      "Built an interactive React interface with presets for budget, everyday, gaming, and MacBook configurations.",
      "Developed a FastAPI prediction endpoint with Pydantic request validation and CORS support.",
      "Integrated a serialized stacking model using Random Forest, XGBoost, and gradient boosting.",
      "Calculated display PPI dynamically from resolution and screen dimensions.",
      "Added multi-currency price output for INR, USD, and EUR with responsive loading and error states."
    ],
    architectureNotes: "Laptop Specifications -> React Configuration Interface -> PPI and Feature Processing -> FastAPI /predict Endpoint -> Pandas Feature Frame -> Serialized Stacking Model -> INR, USD, and EUR Price Response."
  },
  {
    id: "ipc-ai-legal-assistant",
    title: "IPC.AI – Indian Legal AI Assistant",
    tagline: "Semantic retrieval and legal research assistant powered by RAG",
    description: "An AI-powered legal assistant designed to retrieve relevant Indian legal provisions using Retrieval-Augmented Generation (RAG) and semantic search.",
    detailedDescription: "Navigating legal statutes such as the Indian Penal Code (IPC) and corresponding legal precedents requires high-precision semantic lookup. IPC.AI indexes legal statutes and contextual explanations within ChromaDB using dense Sentence Transformers. When a user presents a natural language query or case scenario, the system performs cosine similarity retrieval and feeds retrieved statutory context into an LLM for structured, referenced guidance.",
    technologies: ["Python", "RAG", "LangChain", "ChromaDB", "Sentence Transformers", "LLMs"],
    category: "Generative AI",
    status: "Completed",
    githubUrl: "https://github.com/vivekmahajan2/IPC.AI_3.git",
    liveDemoUrl: "https://ipc-ai-legal-demo.vercel.app",
    thumbnail: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80",
    highlights: [
      "Chunked and indexed statutory legal texts with metadata tagging for sections, penalties, and provisions.",
      "Implemented dense vector embeddings with Sentence Transformers for contextual cross-matching.",
      "Integrated LangChain QA chains with strict system prompts to prevent hallucination of legal sections.",
      "Incorporated citation references in generated responses to ensure verifiability."
    ],
    architectureNotes: "User Query -> Sentence Transformer Embedder -> ChromaDB Vector Store (Top-k statutory chunks) -> Prompt Orchestrator -> LLM Generation with Section Reference Attribution."
  },
  {
    id: "careerpilot-ai",
    title: "CareerPilot AI – AI Job Outreach Agent",
    tagline: "Autonomous multi-agent opportunity scout with human-in-the-loop validation",
    description: "An AI-powered job discovery and outreach automation platform that finds relevant job opportunities across different platforms and supports human-approved applications.",
    detailedDescription: "Built with Agentic AI principles, this system coordinates specialized autonomous agents: a Job Scout Agent that parses listings matching targeted skill criteria, an Analyst Agent that ranks match suitability against candidate profiles, and an Outreach Drafter Agent that composes personalized cover letters. Crucially, the platform enforces human-in-the-loop review before any outreach dispatch occurs.",
    technologies: ["Python", "Agentic AI", "LLMs", "Automation", "FastAPI", "Redis"],
    category: "Agentic AI",
    status: "In Progress",
    githubUrl: "https://github.com/vivekmahajan2/Carrer_Agent.git",
    liveDemoUrl: "https://job-agent-demo.vercel.app",
    thumbnail: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
    highlights: [
      "Engineered multi-agent state graph coordinating Scout, Evaluator, and Composer worker agents.",
      "Implemented Redis task queues for asynchronous background scraping and LLM generation.",
      "Built interactive approval dashboard ensuring human control over all external actions.",
      "Utilized structured JSON schema outputs to enforce reliable deterministic tool execution."
    ],
    architectureNotes: "Stateful Agent Graph (LangGraph / Custom state machine) with Redis asynchronous execution queue and FastAPI control plane featuring Human-In-The-Loop approval gates."
  },
  {
    id: "semantic-cache",
    title: "Semantic Cache for LLM Queries",
    tagline: "High-performance vector similarity caching to curb LLM latency & API spend",
    description: "An intelligent caching system that uses semantic similarity to identify repeated or similar user queries and reduce unnecessary LLM API calls.",
    detailedDescription: "Standard exact-match caching fails with LLM prompts due to lexical variations (e.g., 'What is machine learning?' vs 'Explain machine learning to me'). This semantic caching system converts incoming queries into vector embeddings and evaluates cosine similarity against previously cached query clusters. Matches exceeding a configurable threshold return cached outputs instantly, drastically reducing latency and token costs.",
    technologies: ["Python", "Embeddings", "Vector Databases", "NLP", "LLMs", "FastAPI"],
    category: "Generative AI",
    status: "Completed",
    githubUrl: "https://github.com/vivekmahajan2/Semantic-cache.git",
    liveDemoUrl: "https://semantic-cache-demo.vercel.app",
    thumbnail: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
    highlights: [
      "Integrated fast embedding generation with vector similarity thresholding.",
      "Demonstrated significant latency reduction (from ~1200ms LLM calls to <45ms cache hits).",
      "Designed configurable TTL, semantic distance cutoffs, and cache eviction policies.",
      "Benchmarked cache hit accuracy across varied paraphrased query test suites."
    ],
    architectureNotes: "Prompt -> Embedding Model -> Approximate Nearest Neighbor (ANN) Index -> Similarity Check (>= threshold ? Instant Return : Forward to LLM & Async Cache Insert)."
  },
  {
    id: "vidtranscript-ai",
    title: "VidTranscript AI",
    tagline: "YouTube video summarization and transcript-powered RAG Q&A assistant",
    description: "A full-stack Generative AI application that extracts YouTube transcripts, generates structured executive summaries, and enables context-grounded question answering using Retrieval-Augmented Generation.",
    detailedDescription: "VidTranscript AI transforms YouTube videos into interactive knowledge resources. Users can submit YouTube URLs, short links, embed links, or video IDs to extract timestamped transcripts with multilingual caption fallbacks. The FastAPI backend processes transcripts using LangChain's RecursiveCharacterTextSplitter, generates semantic embeddings with HuggingFace's all-MiniLM-L6-v2 model, and stores them in a FAISS vector database for efficient similarity search. Groq-powered LLMs generate structured executive summaries containing key takeaways, topic breakdowns, and actionable insights, while the RAG-powered chat assistant answers user questions strictly using retrieved transcript context. The application also features a responsive dark-mode glassmorphism interface with interactive tabs, transcript search, copy functionality, and robust LLM model fallbacks.",
    technologies: ["Python", "FastAPI", "Uvicorn", "LangChain", "FAISS", "Groq", "HuggingFace", "Sentence Transformers", "HTML5", "CSS3", "JavaScript"],
    category: "Generative AI",
    status: "Completed",
    githubUrl: "https://github.com/vivekmahajan2/VidTranscript.git",
    liveDemoUrl: "",
    thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80",
    highlights: [
      "Implemented YouTube transcript extraction supporting standard URLs, short links, embed URLs, and raw video IDs with multilingual caption fallbacks.",
      "Built a Retrieval-Augmented Generation pipeline using LangChain, FAISS, and HuggingFace sentence-transformer embeddings.",
      "Implemented semantic document chunking with RecursiveCharacterTextSplitter using a chunk size of 1,000 characters and 200-character overlap.",
      "Integrated Groq LLMs to generate structured executive summaries with key takeaways, topic breakdowns, and actionable insights.",
      "Developed a grounded conversational RAG assistant that retrieves relevant transcript chunks and answers questions using video context.",
      "Implemented automatic Groq model fallbacks to improve reliability during model availability issues and rate limits.",
      "Designed a responsive dark-mode glassmorphism interface featuring AI summaries, interactive chat, timestamped transcripts, and transcript search.",
      "Integrated FastAPI REST endpoints for transcript extraction, AI summarization, and context-aware question answering."
    ],
    architectureNotes: "YouTube URL / Video ID -> FastAPI Backend -> YouTube Transcript Extraction -> Transcript Processing -> Recursive Character Text Splitting -> HuggingFace Sentence Transformer Embeddings -> FAISS Vector Database -> User Question -> Semantic Similarity Search -> Retrieved Transcript Context -> Groq LLM -> Grounded RAG Answer. For Summarization: Full Transcript -> Groq LLM -> Structured Executive Summary with Key Takeaways, Topic Breakdown, and Actionable Insights."
  }
];
