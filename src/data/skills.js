const skills = [
  {
    id: "python",
    name: "Python",
    category: "Data & Analytics",
    description:
      "Used for data analysis, machine learning workflows, and predictive applications.",
    evidence: [
      {
        type: "project",
        id: "petpulse",
        label: "PetPulse",
        detail: "Machine-learning web application and prediction workflow.",
      },
      {
        type: "experience",
        id: "shunya-ekai",
        label: "Shunya Ekai Technologies",
        detail: "Logistics ML model for transport classification and prediction.",
      },
    ],
  },

  {
    id: "power-bi",
    name: "Power BI",
    category: "Data & Analytics",
    description:
      "Used to turn operational data into dashboards, reporting views, and business insights.",
    evidence: [
      {
        type: "experience",
        id: "kfc",
        label: "KFC / YUM! Brands",
        detail: "Operational dashboards and data reporting during internship work.",
      },
    ],
  },

  {
    id: "excel",
    name: "Excel",
    category: "Data & Analytics",
    description:
      "Used for data validation, analysis, lookup workflows, and business reporting.",
    evidence: [
      {
        type: "experience",
        id: "kfc",
        label: "KFC / YUM! Brands",
        detail: "Sales and transaction validation using XLOOKUP and integrity checks.",
      },
      {
        type: "project",
        id: "vehicle-sales-analysis",
        label: "Vehicle Sales Analysis",
        detail: "Data preparation and analysis of a used-vehicle sales dataset.",
      },
      {
        type: "project",
        id: "sales-intelligence-dashboard",
        label: "Sales Intelligence Dashboard",
        detail: "Used as part of the underlying business intelligence workflow.",
      },
    ],
  },

  {
    id: "tableau",
    name: "Tableau",
    category: "Data & Analytics",
    description:
      "Used to build interactive analytical visualisations, dashboards, maps, trends, and forecasts.",
    evidence: [
      {
        type: "project",
        id: "vehicle-sales-analysis",
        label: "Vehicle Sales Analysis",
        detail: "Market analysis and visual exploration of used-vehicle sales data.",
      },
      {
        type: "project",
        id: "sales-intelligence-dashboard",
        label: "Sales Intelligence Dashboard",
        detail: "Interactive dashboard with profitability mapping, trends, and forecasting.",
      },
    ],
  },

  {
    id: "data-analysis",
    name: "Data Analysis",
    category: "Data & Analytics",
    description:
      "Turning raw datasets into structured findings, patterns, and decision-oriented insights.",
    evidence: [
      {
        type: "project",
        id: "vehicle-sales-analysis",
        label: "Vehicle Sales Analysis",
        detail: "Explored pricing, mileage, condition, regional performance, and vehicle trends.",
      },
      {
        type: "project",
        id: "sales-intelligence-dashboard",
        label: "Sales Intelligence Dashboard",
        detail: "Analysed customer behaviour, profitability, order trends, and regional performance.",
      },
      {
        type: "experience",
        id: "kfc",
        label: "KFC / YUM! Brands",
        detail: "Validated operational data and supported reporting workflows.",
      },
    ],
  },

  {
    id: "javascript",
    name: "JavaScript",
    category: "Software & Web",
    description:
      "Used across interactive interfaces, web applications, APIs, and browser-based systems.",
    evidence: [
      {
        type: "project",
        id: "after-school-club",
        label: "After School Club",
        detail: "Frontend behaviour and REST API integration.",
      },
      {
        type: "project",
        id: "soundcritique",
        label: "SoundCritique",
        detail: "Interactive frontend and full-stack web functionality.",
      },
      {
        type: "project",
        id: "bird-strike",
        label: "Bird Strike",
        detail: "Game mechanics, collision detection, scoring, timing, and player logic.",
      },
      {
        type: "experience",
        id: "shunya-ekai",
        label: "Shunya Ekai Technologies",
        detail: "EV route-mapping application and logistics-focused development work.",
      },
    ],
  },

  {
    id: "react",
    name: "React",
    category: "Software & Web",
    description:
      "Used to build component-based interfaces and interactive frontend applications.",
    evidence: [
      {
        type: "experience",
        id: "shunya-ekai",
        label: "Shunya Ekai Technologies",
        detail: "EV Route Mapping application using React and Google Maps API.",
      },
    ],
  },

  {
    id: "vue",
    name: "Vue.js",
    category: "Software & Web",
    description:
      "Used to build the frontend of a full-stack web application connected to backend services.",
    evidence: [
      {
        type: "project",
        id: "after-school-club",
        label: "After School Club",
        detail: "Frontend application connected to the Node.js and Express backend.",
      },
    ],
  },

  {
    id: "node",
    name: "Node.js",
    category: "Software & Web",
    description:
      "Used for backend application development and server-side web functionality.",
    evidence: [
      {
        type: "project",
        id: "after-school-club",
        label: "After School Club",
        detail: "Backend services supporting products, orders, and inventory.",
      },
      {
        type: "project",
        id: "soundcritique",
        label: "SoundCritique",
        detail: "Express web service and backend functionality.",
      },
    ],
  },

  {
    id: "express",
    name: "Express",
    category: "Software & Web",
    description:
      "Used to build REST-style backend services and application routes.",
    evidence: [
      {
        type: "project",
        id: "after-school-club",
        label: "After School Club",
        detail: "REST API endpoints for products, orders, and inventory.",
      },
      {
        type: "project",
        id: "soundcritique",
        label: "SoundCritique",
        detail: "Express web service supporting authentication, uploads, search, and posts.",
      },
    ],
  },

  {
    id: "mongodb",
    name: "MongoDB",
    category: "Software & Web",
    description:
      "Used for persistent application data including users, posts, orders, and diagnostic history.",
    evidence: [
      {
        type: "project",
        id: "after-school-club",
        label: "After School Club",
        detail: "Stored application and order-related data.",
      },
      {
        type: "project",
        id: "soundcritique",
        label: "SoundCritique",
        detail: "Persistent user and music-post data.",
      },
      {
        type: "project",
        id: "petpulse",
        label: "PetPulse",
        detail: "Stored user accounts and diagnostic history.",
      },
    ],
  },

  {
    id: "machine-learning",
    name: "Machine Learning",
    category: "Machine Learning & Engineering",
    description:
      "Applied machine learning to classification and prediction problems using project datasets.",
    evidence: [
      {
        type: "project",
        id: "petpulse",
        label: "PetPulse",
        detail: "Random Forest classification for symptom-based disease prediction.",
      },
      {
        type: "project",
        id: "vehicle-sales-analysis",
        label: "Vehicle Sales Analysis",
        detail: "J48 decision-tree classification with reported 94.65% accuracy.",
      },
      {
        type: "experience",
        id: "shunya-ekai",
        label: "Shunya Ekai Technologies",
        detail: "Logistics ML model for transport-mode classification and prediction.",
      },
    ],
  },

  {
    id: "scikit-learn",
    name: "scikit-learn",
    category: "Machine Learning & Engineering",
    description:
      "Used for building and evaluating machine-learning models in Python.",
    evidence: [
      {
        type: "project",
        id: "petpulse",
        label: "PetPulse",
        detail: "Random Forest classifier integrated into the application backend.",
      },
    ],
  },

  {
    id: "rest-api",
    name: "REST APIs",
    category: "Machine Learning & Engineering",
    description:
      "Used to connect frontend applications with backend services and persistent data.",
    evidence: [
      {
        type: "project",
        id: "after-school-club",
        label: "After School Club",
        detail: "REST API integration between Vue frontend and Express backend.",
      },
      {
        type: "project",
        id: "soundcritique",
        label: "SoundCritique",
        detail: "REST-style routes for accounts, posts, search, filtering, and profiles.",
      },
    ],
  },

  {
    id: "workflow-automation",
    name: "Workflow Automation",
    category: "Machine Learning & Engineering",
    description:
      "Experience documenting processes and identifying opportunities for process improvement and automation.",
    evidence: [
      {
        type: "experience",
        id: "intertec",
        label: "Intertec Systems",
        detail: "BPMN workflows, field validation, stakeholder requirements, and process optimisation.",
      },
      {
        type: "experience",
        id: "kfc",
        label: "KFC / YUM! Brands",
        detail: "Supported operational workflows and training-data quality processes.",
      },
    ],
  },
];

export const skillCategories = [
  {
    id: "data",
    title: "DATA & ANALYTICS",
    skills: skills.filter(
      (skill) => skill.category === "Data & Analytics"
    ),
  },
  {
    id: "software",
    title: "SOFTWARE & WEB",
    skills: skills.filter(
      (skill) => skill.category === "Software & Web"
    ),
  },
  {
    id: "ml",
    title: "MACHINE LEARNING & ENGINEERING",
    skills: skills.filter(
      (skill) => skill.category === "Machine Learning & Engineering"
    ),
  },
];

export default skills;