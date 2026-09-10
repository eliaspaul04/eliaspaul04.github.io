const asset = (path) => `${import.meta.env.BASE_URL}${path}`;

const projects = [
  {
    id: "petpulse",
    number: "01",

    title: "PetPulse",
    category: "Machine Learning / Full Stack",
    year: "2025",

    shortDescription:
      "A machine learning-powered pet health diagnosis platform that predicts potential illnesses from symptoms and pet-specific information, while providing confidence levels, severity guidance, user profiles, and diagnostic history.",

    overview:
      "PetPulse is a web-based pet health diagnosis system designed to help pet owners assess potential illnesses using observable symptoms and pet-specific information. The platform combines machine learning with a full-stack web application to provide accessible preliminary health guidance.",

    problem:
      "Pet owners may struggle to understand early signs of illness, particularly when immediate veterinary care is unavailable. Existing symptom checkers can also provide limited or generic guidance without considering multiple symptoms or maintaining a history of previous assessments.",

    solution:
      "PetPulse allows users to enter information about their pet, including animal type, breed, age, gender, symptom duration, and multiple symptoms. The data is processed by a Random Forest classifier that predicts a potential disease and returns supporting information such as confidence level, severity, disease description, and veterinary guidance.",

    technologies: [
      "Python",
      "Flask",
      "Random Forest",
      "scikit-learn",
      "pandas",
      "MongoDB",
      "Tailwind CSS",
      "JavaScript",
    ],

    features: [
      "Symptom-based disease prediction using a Random Forest classifier",
      "Multi-symptom and pet-specific input",
      "User registration and authentication",
      "Secure password hashing",
      "Persistent diagnostic history",
      "Confidence-level explanations",
      "Disease severity information",
      "Veterinary visit recommendations",
      "Searchable and filterable user history",
      "Downloadable diagnostic reports",
      "Responsive web interface",
    ],

    highlights: [
      "Built an end-to-end machine learning web application",
      "Integrated a trained ML model into a Flask backend",
      "Stored user accounts and diagnosis history using MongoDB",
      "Designed a complete workflow from symptom input to prediction and history tracking",
    ],

    image: asset("projects/petpulse/hero.png"),

    gallery: [
      {
        image: asset("projects/petpulse/diagnostic.png"),
        title: "Diagnostic Assistant",
        description:
          "Pet details and multi-symptom input used to generate a diagnosis.",
      },

      {
        image: asset("projects/petpulse/prediction.png"),
        title: "Prediction Result",
        description:
          "Disease prediction with confidence, severity and veterinary guidance.",
      },

      {
        image: asset("projects/petpulse/profile.png"),
        title: "Diagnosis History",
        description:
          "User profile with saved diagnoses, filtering and downloadable reports.",
      },

      {
        image: asset("projects/petpulse/architecture.png"),
        title: "Prediction Workflow",
        description:
          "System flow across the user, frontend, backend and machine-learning model.",
      },
    ],

    video: asset("projects/petpulse/demo.mp4"),

    videoPoster: asset("projects/petpulse/video-poster.png"),

    github: null,
    liveDemo: null,

    featured: true,
  },

  {
    id: "vehicle-sales-analysis",
    number: "02",

    title: "Vehicle Sales Analysis",
    category: "Data Analytics / Business Intelligence",
    year: "2025",

    shortDescription:
      "A business intelligence and predictive analytics project exploring the U.S. used-car market through data cleaning, visualization, market analysis, and J48 decision-tree classification.",

    overview:
      "This project analysed a U.S. used-vehicle sales dataset to identify patterns affecting vehicle sales, pricing, age, condition, mileage, transmission type, body style, colour preferences, and geographic performance.",

    problem:
      "Used-car pricing and demand are influenced by many interconnected factors. The goal of the project was to transform a large vehicle-sales dataset into useful business insights while also exploring whether vehicle characteristics could be used for predictive classification.",

    solution:
      "The dataset was cleaned and prepared for analysis before being explored through business intelligence visualisations. A J48 decision-tree model was then developed to classify vehicle age categories using characteristics such as mileage, condition, transmission, state, and body style.",

    technologies: [
      "Tableau",
      "Data Analysis",
      "Data Visualization",
      "Data Mining",
      "J48 Decision Tree",
      "Data Preprocessing",
      "Excel",
    ],

    features: [
      "Used-car market exploratory analysis",
      "Vehicle make and sales analysis",
      "Mileage and pricing analysis",
      "Vehicle condition analysis",
      "Transmission and body-style analysis",
      "Regional sales analysis",
      "Data cleaning and preprocessing",
      "Decision-tree classification",
      "Business intelligence interpretation",
    ],

    highlights: [
      "Achieved 94.65% classification accuracy using a J48 decision tree",
      "Identified mileage and vehicle condition as important classification factors",
      "Connected analytical findings to inventory and pricing decisions",
      "Combined visual analytics with predictive data mining",
    ],

    image: asset("projects/vehicle-sales/hero.png"),

    gallery: [
      {
        image: asset("projects/vehicle-sales/sales-by-make.png"),
        title: "Sales by Vehicle Make",
        description:
          "Compared total selling price across vehicle makes to identify the strongest contributors to overall sales.",
      },

      {
        image: asset("projects/vehicle-sales/sales-by-state.png"),
        title: "Regional Sales Distribution",
        description:
          "Mapped vehicle sales across US states to identify regional differences in selling activity.",
      },

      {
        image: asset("projects/vehicle-sales/price-condition.png"),
        title: "Price vs Vehicle Condition",
        description:
          "Examined how vehicle condition influences average selling price and overall market value.",
      },

      {
        image: asset("projects/vehicle-sales/mileage-analysis.png"),
        title: "Mileage and Selling Price",
        description:
          "Explored the relationship between odometer mileage and selling price to understand depreciation patterns.",
      },
    ],

    featuredMedia: {
      image: asset("projects/vehicle-sales/decision-tree.png"),

      eyebrow: "DATA MINING / J48 CLASSIFICATION",

      title: "Vehicle Age Classification",

      description:
        "A J48 decision tree was used to classify vehicles into the Moderate and Old age categories. The model correctly classified 672 out of 710 instances in the reported evaluation, achieving 94.65% accuracy. The analysis highlighted odometer category, vehicle condition, transmission, state, body style and other vehicle attributes as useful predictors of age classification.",

      metric: "94.65%",

      metricLabel: "CLASSIFICATION ACCURACY",
    },

    video: null,
    videoPoster: null,

    github: null,
    liveDemo: null,

    featured: true,
  },

  {
    id: "sales-intelligence-dashboard",
    number: "03",

    title: "Sales Intelligence Dashboard",
    category: "Business Intelligence / Tableau",
    year: "2023",

    shortDescription:
        "An interactive Tableau business intelligence project analysing customer behaviour, geographic profitability, order trends, regional performance, and future sales through forecasting.",

    overview:
        "This project transformed a multi-table sales dataset into a collection of interactive Tableau visualisations and a consolidated business intelligence dashboard. The analysis explored customer behaviour, sales territories, profitability, order trends, geographic performance, and future sales.",

    problem:
        "The project required raw sales and customer data to be transformed into clear business insights that could explain differences in customer behaviour, sales performance, profitability, regional activity, and trends over time.",

    solution:
        "The dataset was analysed through multiple Tableau worksheets using sorting, filtering, highlighting, calculated fields, geographic mapping, trend analysis, and forecasting. A calculated Profit field was created from Sales Amount, Product Standard Cost, Tax Amount, and Freight, while the final visualisations were combined into an interactive dashboard.",

    technologies: [
        "Tableau",
        "Excel",
        "Business Intelligence",
        "Data Visualization",
        "Forecasting",
        "Calculated Fields",
        "Dashboard Design",
    ],

    features: [
        "Customer commute-distance analysis",
        "Sales territory analysis",
        "Occupation-based filtering",
        "Country-level sales comparison",
        "Calculated profit analysis",
        "Geographic profit mapping",
        "Quarterly order trend analysis",
        "Three-year sales forecasting",
        "Regional profitability analysis",
        "Interactive dashboard",
        "Highlighting and filtering",
    ],

    highlights: [
        "Built an interactive Tableau dashboard combining six analytical visualisations",
        "Created a calculated Profit metric using sales, product cost, tax, and freight",
        "Mapped countries generating at least $1 million in profit",
        "Analysed order-quantity trends across quarters",
        "Produced a three-year sales forecast",
        "Compared profitability across the United Kingdom, France, and Germany",
    ],

    image: asset("projects/sales-dashboard/hero.png"),

    gallery: [
        {
        image: asset("projects/sales-dashboard/profit-map.png"),
        title: "High-Profit Sales Territories",
        description:
            "Mapped countries generating at least $1 million in calculated profit to identify high-performing sales territories.",
        },

        {
        image: asset("projects/sales-dashboard/order-trends.png"),
        title: "Order Quantity Trends",
        description:
            "Analysed order quantities across quarters and years to identify seasonal patterns and changes in demand.",
        },

        {
        image: asset("projects/sales-dashboard/sales-forecast.png"),
        title: "Sales Forecast",
        description:
            "Used Tableau forecasting to estimate future sales performance across year and month.",
        },

        {
        image: asset("projects/sales-dashboard/regional-profit.png"),
        title: "Regional Profitability",
        description:
            "Compared total profit across the United Kingdom, France, and Germany.",
        },
    ],

    featuredMedia: {
        image: asset("projects/sales-dashboard/profit-map.png"),

        eyebrow: "GEOGRAPHIC PROFITABILITY / TABLEAU",

        title: "Where Profit Was Generated",

        description:
            "A calculated Profit field was created using Sales Amount, Product Standard Cost, Tax Amount, and Freight. The resulting map highlighted countries generating at least $1 million in profit, making geographic differences in profitability easier to identify.",

        metric: "$1M+",

        metricLabel: "PROFIT THRESHOLD",
    },

    video: null,
    videoPoster: null,

    github: null,
    liveDemo: null,

    featured: true,
    },

  {
    id: "after-school-club",
    number: "04",

    title: "After School Club",
    category: "Full Stack Development",
    year: "2024",

    shortDescription:
      "A full-stack web application for browsing and purchasing after-school activities, featuring search, sorting, inventory tracking, shopping-cart functionality, checkout, order storage, and REST API integration.",

    overview:
      "After School Club is a full-stack web application that allows users to discover and purchase extracurricular activities including programming, photography, football, gaming, drama, yoga, and creative clubs.",

    problem:
      "The application was designed to provide a structured way for users to browse different activities, compare them, monitor availability, add activities to a cart, and complete an order through a single platform.",

    solution:
      "The frontend was built with Vue.js and communicates with a Node.js and Express backend connected to MongoDB. REST API endpoints handle product retrieval, search, order creation, and inventory updates.",

    technologies: [
      "Vue.js",
      "JavaScript",
      "Node.js",
      "Express",
      "MongoDB",
      "REST API",
      "Postman",
    ],

    features: [
      "Activity catalogue",
      "Search functionality",
      "Sorting by price",
      "Sorting by rating",
      "Sorting by location",
      "Sorting by availability",
      "Shopping cart",
      "Real-time inventory tracking",
      "Checkout flow",
      "Order total calculations",
      "Customer order forms",
      "MongoDB order storage",
      "REST API integration",
      "API testing with Postman",
    ],

    highlights: [
      "Built separate frontend and backend applications",
      "Implemented REST API endpoints using Express",
      "Connected application data to MongoDB",
      "Implemented dynamic cart and inventory behaviour",
      "Deployed frontend and backend components separately",
    ],

    image: asset("projects/after-school-club/hero.png"),

    gallery: [
        {
            image: asset("projects/after-school-club/catalogue.png"),
            title: "Activity Catalogue",
            description:
            "The main catalogue interface lets users browse available after-school activities with images, pricing, ratings, availability and quick add-to-cart actions.",
        },

        {
            image: asset("projects/after-school-club/search.png"),
            title: "Activity Search",
            description:
            "Users can search the catalogue to quickly find activities matching their interests.",
        },

        {
            image: asset("projects/after-school-club/cart.png"),
            title: "Shopping Cart",
            description:
            "Selected activities are managed through a dynamic shopping cart with quantity controls, item totals and overall order pricing.",
        },

        {
            image: asset("projects/after-school-club/checkout.png"),
            title: "Checkout Flow",
            description:
            "The checkout interface collects customer information, delivery preferences and order details before submitting the order to the backend.",
        },
    ],

video: null,
videoPoster: null,

    github: {
      frontend:
        "https://github.com/eliaspaul04/AfterSchoolClubFrontend.git",
      backend:
        "https://github.com/eliaspaul04/AfterSchoolClubBackend.git",
    },

    liveDemo:
      "https://eliaspaul04.github.io/AfterSchoolClubFrontend/",

    featured: true,
  },

  {
    id: "soundcritique",
    number: "05",

    title: "SoundCritique",
    category: "Full Stack Web Development",
    year: "2024",

    shortDescription:
        "A full-stack music community platform where users can discover, share, and review music through user-generated posts with artist information, reviews, images, audio playback, search, and genre filtering.",

    overview:
        "SoundCritique is a full-stack music community web application designed to bring music discovery and user-generated content into one platform. Users can register and log in, browse community posts, upload music reviews with artist and song information, attach images and audio files, search content, filter posts by genre, and view their own contributions through a user profile.",

    problem:
        "The project explored how a music-focused platform could combine content discovery with community participation rather than functioning as a static catalogue. The goal was to give users a place to share music recommendations and reviews while making community content searchable, filterable, and connected to individual user accounts.",

    solution:
        "SoundCritique was developed using HTML, CSS and JavaScript on the frontend with an Express and MongoDB backend. Session-based authentication controls access to protected functionality, while Multer handles image and audio uploads. REST-style routes support registration, login, logout, post creation, content retrieval, search, genre filtering, and user-specific post data.",

    technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Node.js",
        "Express",
        "MongoDB",
        "Express Session",
        "Multer",
        "Postman",
    ],

    features: [
        "User registration",
        "User login and logout",
        "Session-based authentication",
        "Authenticated music post uploads",
        "Audio file uploads",
        "Image file uploads",
        "Artist and song information",
        "User-written music reviews",
        "Community music feed",
        "Genre-based post filtering",
        "Search by artist, song title, genre, or review",
        "User profile page",
        "User-specific post history",
        "Post count tracking",
        "Artist recommendations",
        "Listening history interface",
        "Audio playback",
    ],

    highlights: [
        "Built a full-stack music community application",
        "Connected an Express backend to MongoDB for persistent user and post data",
        "Implemented session-based authentication for protected functionality",
        "Created authenticated image and audio upload functionality using Multer",
        "Built search across artist names, song titles, genres, and review content",
        "Implemented genre-based filtering for user-generated posts",
        "Created user profiles that retrieve account information and uploaded posts",
    ],

    image: asset("projects/soundcritique/hero.png"),

    gallery: [
        {
        image: asset("projects/soundcritique/home.png"),
        title: "Music Discovery Home",
        description:
            "The home page presents top songs, top albums, artist recommendations, listening history and a featured community post.",
        },

        {
        image: asset("projects/soundcritique/feed.png"),
        title: "Community Music Feed",
        description:
            "The feed displays music posts created by users, including artist information, song titles, audio playback, genres, reviews and community actions.",
        },

        {
        image: asset("projects/soundcritique/upload.png"),
        title: "Music Post Upload",
        description:
            "Authenticated users can create a music post by entering artist and song information, adding a genre and review, and uploading image and audio files.",
        },

        {
        image: asset("projects/soundcritique/filter.png"),
        title: "Genre Filtering",
        description:
            "The feed can be filtered by genre, allowing users to narrow the community content to categories such as pop, rock and hip hop.",
        },

        {
        image: asset("projects/soundcritique/profile.png"),
        title: "User Profile",
        description:
            "The user page displays the logged-in user's account information, post count and previously created music posts.",
        },

        {
        image: asset("projects/soundcritique/api.png"),
        title: "API Testing with Postman",
        description:
            "Web-service endpoints were documented and tested using Postman, including request methods, parameters, request bodies and responses.",
        },
    ],

    video: null,
    videoPoster: null,

    github: null,
    liveDemo: null,

    featured: false,
    },

  {
    id: "bird-strike",
    number: "06",

    title: "Bird Strike",
    category: "Interactive Web Development",
    year: "2024",

    shortDescription:
        "A browser-based aircraft game where players avoid incoming birds, manage limited lives and time, build their score, and compete for a place on the leaderboard.",

    overview:
        "Bird Strike is an interactive browser game built around a simple arcade-style challenge: control an aircraft, avoid incoming birds, survive as long as possible, and achieve the highest score. The project combines gameplay mechanics with account registration, login, player tracking and leaderboard functionality.",

    problem:
        "The project focused on creating an engaging browser-based game while managing multiple real-time mechanics including aircraft movement, bird collisions, scoring, lives, timers and increasing difficulty.",

    solution:
        "The game was developed using JavaScript, HTML and CSS with multiple difficulty levels. Players can register and log in, start a game, avoid bird obstacles, lose lives when collisions occur, earn points, and have their scores recorded for the leaderboard.",

    technologies: [
        "JavaScript",
        "HTML",
        "CSS",
        "Session Storage",
        "Web Game Development",
    ],

    features: [
        "Three difficulty levels",
        "Timed gameplay",
        "Increasing difficulty",
        "Aircraft movement",
        "Bird obstacles",
        "Collision detection",
        "Lives system",
        "Scoring system",
        "User registration",
        "User login",
        "Player tracking",
        "High-score leaderboard",
    ],

    highlights: [
        "Implemented real-time collision detection",
        "Built scoring and player-life systems",
        "Created progressively harder gameplay levels",
        "Used session storage for player-specific information",
        "Developed leaderboard functionality",
    ],

    image: asset("projects/bird-strike/hero.png"),

    gallery: [
        {
        image: asset("projects/bird-strike/gameplay.png"),
        title: "Interactive Gameplay",
        description:
            "Players control an aircraft while avoiding incoming birds, managing limited lives, time and score during gameplay.",
        },

        {
        image: asset("projects/bird-strike/leaderboard.png"),
        title: "High-Score Leaderboard",
        description:
            "Player scores are presented through a leaderboard with usernames, rankings and high-score positions.",
        },

        {
        image: asset("projects/bird-strike/login.png"),
        title: "Player Login",
        description:
            "Registered players can log in to access the game and their player-specific information.",
        },

        {
        image: asset("projects/bird-strike/register.png"),
        title: "Player Registration",
        description:
            "New players can create an account before accessing the game's authenticated functionality.",
        },
    ],

    video: asset("projects/bird-strike/demo.mp4"),

    videoPoster: asset("projects/bird-strike/video-poster.png"),

    github: null,
    liveDemo: null,

    featured: false,
    },
];

export default projects;