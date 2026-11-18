import { ServiceItem } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: "ml-solutions",
    title: "Machine Learning Solutions",
    shortDesc: "Predictive modeling & statistical machine learning algorithms",
    description: "Designing, training, and evaluating custom supervised and unsupervised machine learning pipelines. Specializing in regression, classification, feature engineering, and ensemble models (Random Forest, XGBoost) tailored to tabular and structured datasets.",
    iconName: "Cpu",
    technologies: ["Scikit-learn", "XGBoost", "Python", "Pandas", "Ensemble Methods"]
  },
  {
    id: "ai-app-dev",
    title: "AI Application Development",
    shortDesc: "Full-stack AI systems with resilient backend architectures",
    description: "Developing end-to-end intelligent software applications that connect machine learning models with responsive user interfaces. Implementing performant REST APIs using FastAPI, async background workers, and PostgreSQL/Supabase databases.",
    iconName: "Layers",
    technologies: ["FastAPI", "Python", "Supabase", "SQLAlchemy", "React"]
  },
  {
    id: "gen-ai-integration",
    title: "Generative AI Integration",
    shortDesc: "Prompt engineering, LLM orchestration & API integration",
    description: "Integrating frontier LLMs and open-source models into software workflows. Formulating robust structured prompts, output parsing with JSON schemas, function calling, and latency-optimized inference pipelines.",
    iconName: "Sparkles",
    technologies: ["Large Language Models", "OpenAI / Claude API", "Prompt Engineering", "JSON Schema"]
  },
  {
    id: "rag-development",
    title: "RAG Application Development",
    shortDesc: "Semantic search, vector databases & knowledge retrieval",
    description: "Building Retrieval-Augmented Generation (RAG) pipelines over proprietary documents and domain knowledge bases. Implementing document chunking strategies, dense embeddings, vector stores (ChromaDB), and grounded context delivery to prevent hallucinations.",
    iconName: "Database",
    technologies: ["LangChain", "ChromaDB", "Sentence Transformers", "Vector Embeddings"]
  },
  {
    id: "ai-workflow-automation",
    title: "AI Workflow Automation",
    shortDesc: "Autonomous agentic workflows & human-in-the-loop systems",
    description: "Constructing multi-agent automation systems that decompose complex multi-step objectives into coordinated tasks. Incorporating tool use, Model Context Protocol (MCP), asynchronous task queues, and mandatory human approval checkpoints.",
    iconName: "Bot",
    technologies: ["Agentic AI", "LangGraph", "Redis Queues", "FastAPI", "Tool Calling"]
  },
  {
    id: "data-analysis-viz",
    title: "Data Analysis & Visualization",
    shortDesc: "Exploratory data analysis, statistical insights & dashboards",
    description: "Extracting actionable insights from messy datasets through rigorous exploratory data analysis (EDA), anomaly detection, correlation analysis, and intuitive visual storytelling using modern visualization libraries.",
    iconName: "BarChart3",
    technologies: ["NumPy", "Pandas", "Matplotlib", "Seaborn", "Jupyter"]
  }
];

