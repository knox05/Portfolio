const projects = [
  {
    id: "anime-streaming",

    title: "Anime Streaming Website",
    description: "Modern anime streaming platform with smooth UI.",
    longDescription:
      "A full-featured anime streaming platform with responsive UI, smooth animations, episode navigation, and modern design inspired by real streaming platforms like Netflix and Aniwatch.",

    image: "/aniwatch.png",

    tech: ["React", "Tailwind", "GSAP"],

    github: "https://github.com/knox05/AniWatchX",
    live: "https://ani-watch-x.vercel.app/",

    features: [
      "Responsive design",
      "Anime detail pages",
      "Episode player UI",
      "Smooth animations with GSAP",
    ],

    screenshots: [
      "/aniwatch1.png",
      "/aniwatch2.png",
    ],
  },

  {
    id: "lms-system",

    title: "LMS System",
    description: "Full-featured Learning Management System for students and instructors.",
    longDescription:
      "A comprehensive Learning Management System (LMS) designed to manage courses, assignments, students, and instructors with an intuitive and modern UI. It supports role-based access, progress tracking, and interactive learning features.",

    image: "/lms.png",

    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind"],

    github: "https://github.com/knox05/Scholar-X_Frontend",
    live: "https://scholar-x-frontend.vercel.app/",

    features: [
      "Role-based authentication (Student, Instructor, Admin)",
      "Course creation and management",
      "Assignment submission and grading",
      "Progress tracking dashboard",
      "Responsive and modern UI",
    ],

    screenshots: [
      "/lms1.png",
      "/lms2.png",
    ],
  },

  {
    id: "forgetting-risk-model",

    title: "Forgetting Risk Aware Model",
    description: "Machine learning model to predict and analyze user forgetting risk patterns.",
    longDescription:
      "A predictive machine learning system designed to estimate the probability of a user forgetting learned material over time. The model uses behavioral patterns, revision history, and time gaps to identify high-risk forgetting intervals and improve personalized learning retention strategies.",

    image: "/forgetting-risk.png",

    tech: ["Python", "Scikit-learn", "Pandas", "NumPy", "Flask"],

    github: "",
    live: "",

    features: [
      "Forgetting risk prediction using ML",
      "Spaced repetition optimization",
      "User learning behavior analysis",
      "Data-driven revision scheduling",
      "REST API for model integration",
    ],

    screenshots: [
      "/forgetting-risk1.png",
      "/projects/forgetting-risk2.png",
    ],
  },
];

export default projects;