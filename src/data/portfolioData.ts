import { 
  ProjectItem, 
  SkillCategory, 
  AchievementItem, 
  CertificateItem, 
  EducationItem, 
  CodingProfile 
} from '../types';

export const PERSONAL_INFO = {
  name: "Soumik Chakraborty",
  shortName: "SC",
  title: "Computer Science & Business Systems Undergraduate",
  tagline: "Building scalable full-stack web applications, AI-powered solutions & modern user experiences.",
  typingTitles: [
    "Full Stack Developer",
    "React & Node.js Developer",
    "CSBS Undergraduate",
    "Problem Solver (200+ Solved)",
    "Open Source Enthusiast",
    "AI Enthusiast"
  ],
  bio: "Computer Science & Business Systems undergraduate passionate about building scalable full-stack web applications, AI-powered solutions, and modern user experiences. Experienced with React, Node.js, Express, MongoDB, TypeScript, Firebase, REST APIs, and core computer science fundamentals.",
  detailedAbout: "I am a motivated Computer Science & Business Systems student at Techno Main Salt Lake. My passion lies in engineering robust software systems from conception to cloud deployment. I combine strong algorithmic problem-solving skills with modern web technologies to create impactful digital products.",
  location: "Bankura, West Bengal, India",
  email: "soumikchakraborty88s@gmail.com",
  phone: "+91 8927156464",
  cgpa: "7.00",
  socials: {
    github: "https://github.com/soumikchakraborty",
    linkedin: "https://linkedin.com/in/soumikchakraborty",
    hackerrank: "https://www.hackerrank.com/profile/soumikchakraborty88s",
    leetcode: "https://leetcode.com/u/soumikchakraborty/"
  },
  stats: {
    projectsCompleted: 10,
    problemsSolved: 200,
    certifications: 7,
    cgpa: 7.00
  },
  coreFundamentals: [
    "Data Structures & Algorithms",
    "Database Management Systems (DBMS)",
    "Operating Systems (OS)",
    "Computer Networks (CN)",
    "Software Engineering",
    "Object Oriented Programming (OOP)"
  ]
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming Languages",
    iconName: "Code2",
    color: "from-blue-500 to-indigo-600",
    skills: [
      { name: "Python", level: 85, iconName: "Terminal", category: "Programming" },
      { name: "JavaScript", level: 92, iconName: "FileCode", category: "Programming" },
      { name: "TypeScript", level: 85, iconName: "FileCode2", category: "Programming" },
      { name: "Java", level: 80, iconName: "Coffee", category: "Programming" },
      { name: "C", level: 85, iconName: "Cpu", category: "Programming" },
      { name: "C++", level: 80, iconName: "Layers", category: "Programming" },
    ]
  },
  {
    title: "Frontend Engineering",
    iconName: "Layout",
    color: "from-cyan-500 to-blue-600",
    skills: [
      { name: "React", level: 90, iconName: "Atom", category: "Frontend" },
      { name: "Tailwind CSS", level: 92, iconName: "Palette", category: "Frontend" },
      { name: "HTML5", level: 95, iconName: "FileText", category: "Frontend" },
      { name: "CSS3", level: 90, iconName: "Sparkles", category: "Frontend" },
      { name: "Next.js", level: 80, iconName: "Globe", category: "Frontend" },
    ]
  },
  {
    title: "Backend & Cloud",
    iconName: "Server",
    color: "from-purple-500 to-indigo-600",
    skills: [
      { name: "Node.js", level: 88, iconName: "Server", category: "Backend" },
      { name: "Express.js", level: 88, iconName: "Cpu", category: "Backend" },
      { name: "REST APIs", level: 90, iconName: "Network", category: "Backend" },
      { name: "Firebase", level: 82, iconName: "Flame", category: "Backend" },
    ]
  },
  {
    title: "Databases",
    iconName: "Database",
    color: "from-emerald-500 to-teal-600",
    skills: [
      { name: "MongoDB", level: 85, iconName: "Leaf", category: "Databases" },
      { name: "MySQL", level: 82, iconName: "Database", category: "Databases" },
    ]
  },
  {
    title: "Developer Tools",
    iconName: "Wrench",
    color: "from-amber-500 to-orange-600",
    skills: [
      { name: "Git", level: 88, iconName: "GitBranch", category: "Tools" },
      { name: "GitHub", level: 90, iconName: "Github", category: "Tools" },
      { name: "VS Code", level: 95, iconName: "Laptop", category: "Tools" },
      { name: "Wireshark", level: 75, iconName: "Radio", category: "Tools" },
    ]
  },
  {
    title: "Core Computer Science",
    iconName: "BookOpen",
    color: "from-fuchsia-500 to-rose-600",
    skills: [
      { name: "DSA", level: 85, iconName: "Binary", category: "Core CS" },
      { name: "DBMS", level: 88, iconName: "Table", category: "Core CS" },
      { name: "OOP", level: 88, iconName: "Box", category: "Core CS" },
      { name: "Operating Systems", level: 80, iconName: "HardDrive", category: "Core CS" },
      { name: "Computer Networks", level: 78, iconName: "Share2", category: "Core CS" },
    ]
  },
  {
    title: "Professional & Soft Skills",
    iconName: "Users",
    color: "from-violet-500 to-purple-600",
    skills: [
      { name: "Problem Solving", level: 92, iconName: "Brain", category: "Soft Skills" },
      { name: "Communication", level: 88, iconName: "MessageSquare", category: "Soft Skills" },
      { name: "Time Management", level: 85, iconName: "Clock", category: "Soft Skills" },
      { name: "Statistics", level: 78, iconName: "BarChart3", category: "Soft Skills" },
      { name: "MS Excel", level: 82, iconName: "FileSpreadsheet", category: "Soft Skills" },
    ]
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "scholarship-system",
    title: "Online Scholarship Management System",
    subtitle: "Full-Stack Portal for Student Applications & Approvals",
    category: "Full Stack",
    description: "Developed a full-stack scholarship management portal enabling students to browse scholarships, apply online, upload required documents, and track application status in real time.",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Firebase Auth"],
    features: [
      "Role-Based Authentication (Student & Admin roles)",
      "Interactive Student & Admin Dashboard",
      "Secure RESTful APIs for Application Processing",
      "Cloud Document Upload & Verification System",
      "MongoDB Database with Mongoose Schemas"
    ],
    liveDemoUrl: "#",
    githubUrl: "https://github.com/soumikchakraborty",
    featured: true,
    imageBg: "from-blue-600/30 via-indigo-600/20 to-purple-600/30"
  },
  {
    id: "devconnect",
    title: "DevConnect",
    subtitle: "Real-time Developer Collaboration Platform",
    category: "Full Stack",
    description: "Developed a full-stack collaboration platform featuring secure authentication, project management, real-time chat rooms, developer profile showcases, and dynamic task tracking.",
    techStack: ["React", "TypeScript", "Node.js", "Express.js", "MongoDB", "Socket.IO"],
    features: [
      "JWT Authentication & Session Management",
      "Real-time Instant Messaging with Socket.IO",
      "Project & Task Kanban Dashboard",
      "Live Notification Center for Team Activity",
      "Fully Responsive Modern Dark UI"
    ],
    liveDemoUrl: "#",
    githubUrl: "https://github.com/soumikchakraborty",
    featured: true,
    imageBg: "from-purple-600/30 via-violet-600/20 to-cyan-600/30"
  },
  {
    id: "cgpa-calculator",
    title: "CGPA Calculator & Target Planner",
    subtitle: "Academic Performance Insight Tool",
    category: "Utilities",
    description: "A responsive academic CGPA calculator that computes cumulative CGPA, predicts required future SGPA for target grades, validates subject inputs, and provides visual academic charts.",
    techStack: ["HTML5", "CSS3", "JavaScript"],
    features: [
      "Target CGPA Future Planner & Simulator",
      "Strict Input Validation & Multi-semester support",
      "Visual Progress Bar & Insight Analytics",
      "Mobile-First Responsive Interface"
    ],
    liveDemoUrl: "#",
    githubUrl: "https://github.com/soumikchakraborty",
    featured: true,
    imageBg: "from-cyan-600/30 via-teal-600/20 to-blue-600/30"
  }
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    id: "hackathon-2nd",
    title: "2nd Place",
    category: "Coding Contest",
    issuer: "Innovation Coding Competition",
    metric: "Runner-Up Winner",
    description: "Secured 2nd position among 50+ teams by building an innovative software prototype in a high-intensity time-bound hackathon.",
    iconName: "Trophy",
    badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/30"
  },
  {
    id: "hackerrank-problem-solving",
    title: "4★ Problem Solving",
    category: "Competitive Coding",
    issuer: "HackerRank",
    metric: "4 Star Badge",
    description: "Earned 4-Star rating on HackerRank by solving complex algorithmic challenges across dynamic programming, data structures, and logic.",
    iconName: "Star",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30"
  },
  {
    id: "hackerrank-sql",
    title: "4★ SQL Badge",
    category: "Database Mastery",
    issuer: "HackerRank",
    metric: "4 Star Rating",
    description: "Achieved 4-Star SQL badge on HackerRank, proving expertise in complex relational queries, subqueries, joins, and database optimizations.",
    iconName: "Database",
    badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/30"
  },
  {
    id: "problems-solved",
    title: "200+ Coding Problems",
    category: "DSA Practice",
    issuer: "LeetCode & HackerRank",
    metric: "200+ Solved",
    description: "Demonstrated strong algorithmic foundations by consistently solving 200+ algorithmic problems across arrays, strings, trees, and graphs.",
    iconName: "BrainCircuit",
    badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/30"
  }
];

export const CERTIFICATES: CertificateItem[] = [
  {
    id: "nptel-dbms",
    title: "Database Management System (DBMS)",
    issuer: "NPTEL (IIT Kharagpur)",
    issueDate: "2024",
    category: "Database",
    badgeText: "Elite Certification",
    skillsCovered: ["Relational Algebra", "SQL Queries", "Normalization", "ACID Properties", "Transactions"],
    previewGradient: "from-blue-600 to-indigo-700"
  },
  {
    id: "hr-problem-solving",
    title: "Problem Solving (Intermediate)",
    issuer: "HackerRank",
    issueDate: "2024",
    category: "Algorithms",
    badgeText: "Skill Certified",
    skillsCovered: ["Data Structures", "Algorithms", "Greedy Logic", "Sorting & Searching"],
    previewGradient: "from-emerald-600 to-teal-700"
  },
  {
    id: "hr-javascript",
    title: "JavaScript (Basic & Intermediate)",
    issuer: "HackerRank",
    issueDate: "2024",
    category: "Frontend",
    badgeText: "Verified Certificate",
    skillsCovered: ["ES6+", "Promises & Async/Await", "DOM Manipulation", "Functional Programming"],
    previewGradient: "from-amber-500 to-orange-600"
  },
  {
    id: "hr-sql",
    title: "SQL (Advanced Queries)",
    issuer: "HackerRank",
    issueDate: "2024",
    category: "Database",
    badgeText: "Skill Certified",
    skillsCovered: ["Complex Joins", "Aggregations", "Subqueries", "Indexing"],
    previewGradient: "from-cyan-600 to-blue-700"
  },
  {
    id: "udemy-dsa",
    title: "Data Structures & Algorithms in C++ / Java",
    issuer: "Udemy",
    issueDate: "2023",
    category: "DSA",
    badgeText: "Course Completion",
    skillsCovered: ["Recursion", "Trees & Graphs", "Dynamic Programming", "Time Complexity Analysis"],
    previewGradient: "from-purple-600 to-indigo-800"
  },
  {
    id: "udemy-web-dev",
    title: "Full Stack Web Development (HTML, CSS, JS)",
    issuer: "Udemy",
    issueDate: "2023",
    category: "Web Development",
    badgeText: "Course Completion",
    skillsCovered: ["Responsive Design", "Flexbox & Grid", "RESTful API Integration", "Git Version Control"],
    previewGradient: "from-violet-600 to-fuchsia-700"
  },
  {
    id: "nptel-ml",
    title: "Machine Learning Foundations",
    issuer: "NPTEL",
    issueDate: "In Progress (2026)",
    category: "Artificial Intelligence",
    badgeText: "Currently Enrolled",
    skillsCovered: ["Supervised Learning", "Regression & Classification", "Neural Networks Intro", "Python ML Libraries"],
    previewGradient: "from-rose-600 to-pink-700"
  }
];

export const EDUCATION: EducationItem[] = [
  {
    id: "techno-main",
    institution: "Techno Main Salt Lake",
    degree: "Bachelor of Technology (B.Tech)",
    field: "Computer Science & Business Systems (CSBS)",
    years: "2023 - 2027",
    grade: "7.00",
    gradeType: "CGPA",
    location: "Kolkata, West Bengal, India",
    courses: [
      "Data Structures & Algorithms",
      "Database Management Systems",
      "Operating Systems",
      "Object Oriented Programming",
      "Computer Networks",
      "Software Engineering",
      "Business Fundamentals"
    ],
    iconName: "GraduationCap"
  },
  {
    id: "bccs-12th",
    institution: "Bankura Christian Collegiate School",
    degree: "Higher Secondary (12th Grade - WBCHSE)",
    field: "Science Stream (Pure Physics, Chemistry, Math, CS)",
    years: "2021 - 2023",
    grade: "77.5%",
    gradeType: "Percentage",
    location: "Bankura, West Bengal, India",
    courses: ["Mathematics", "Physics", "Chemistry", "Computer Science"],
    iconName: "School"
  },
  {
    id: "bccs-10th",
    institution: "Bankura Christian Collegiate School",
    degree: "Secondary Examination (10th Grade - WBBSE)",
    field: "General Secondary Education",
    years: "2019 - 2021",
    grade: "89.57%",
    gradeType: "Percentage",
    location: "Bankura, West Bengal, India",
    courses: ["General Science", "Mathematics", "Social Studies", "Languages"],
    iconName: "Award"
  }
];

export const CODING_PROFILES: CodingProfile[] = [
  {
    id: "github",
    platform: "GitHub",
    handle: "@soumikchakraborty",
    statTitle: "Repositories & Open Source",
    statValue: "10+ Repos | Active Committer",
    profileUrl: "https://github.com/soumikchakraborty",
    iconName: "Github",
    colorGradient: "from-gray-700 to-gray-900 border-slate-700",
    badgeText: "Code Repository"
  },
  {
    id: "linkedin",
    platform: "LinkedIn",
    handle: "Soumik Chakraborty",
    statTitle: "Professional Network",
    statValue: "500+ Connections",
    profileUrl: "https://linkedin.com/in/soumikchakraborty",
    iconName: "Linkedin",
    colorGradient: "from-blue-700 to-blue-900 border-blue-600/40",
    badgeText: "Connect"
  },
  {
    id: "hackerrank",
    platform: "HackerRank",
    handle: "soumikchakraborty88s",
    statTitle: "Badges & Ratings",
    statValue: "4★ Problem Solving | 4★ SQL",
    profileUrl: "https://www.hackerrank.com/profile/soumikchakraborty88s",
    iconName: "Terminal",
    colorGradient: "from-emerald-700 to-green-900 border-emerald-600/40",
    badgeText: "4-Star Coder"
  },
  {
    id: "leetcode",
    platform: "LeetCode",
    handle: "soumikchakraborty",
    statTitle: "Problem Solving",
    statValue: "200+ Solved Problems",
    profileUrl: "https://leetcode.com/u/soumikchakraborty/",
    iconName: "Code",
    colorGradient: "from-amber-600 to-orange-800 border-amber-600/40",
    badgeText: "200+ Solved"
  }
];
