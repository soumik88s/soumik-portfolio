import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API endpoint for contact messages
  app.post("/api/contact", (req, res) => {
    const { name, email, subject, message } = req.body;
    
    if (!name || !email || !message) {
      return res.status(400).json({ 
        success: false, 
        error: "Name, email, and message are required fields." 
      });
    }

    console.log(`[CONTACT FORM SUBMISSION] From: ${name} (${email}) | Subject: ${subject || 'No Subject'}`);
    console.log(`[MESSAGE CONTENT]: ${message}`);

    // Return success response with timestamp
    return res.status(200).json({
      success: true,
      message: "Thank you for reaching out! Soumik will get back to you shortly.",
      timestamp: new Date().toISOString()
    });
  });

  // API endpoint for downloadable resume
  app.get("/api/resume/download", (req, res) => {
    res.setHeader("Content-Type", "text/plain");
    res.setHeader("Content-Disposition", 'attachment; filename="Soumik_Chakraborty_Resume.txt"');
    
    const resumeText = `===================================================================
SOUMIK CHAKRABORTY
Computer Science & Business Systems Undergraduate
Email: soumikchakraborty88s@gmail.com | Phone: +91 8927156464
Location: Bankura, West Bengal, India
GitHub: https://github.com/soumikchakraborty
LinkedIn: https://linkedin.com/in/soumikchakraborty
===================================================================

EDUCATION
-------------------------------------------------------------------
Techno Main Salt Lake, Kolkata, West Bengal
B.Tech in Computer Science & Business Systems (2023 - 2027)
CGPA: 7.00 / 10.0

Bankura Christian Collegiate School, Bankura
Higher Secondary (WBCHSE) - 77.5% (2023)
Secondary (WBBSE) - 89.57% (2021)

TECHNICAL SKILLS
-------------------------------------------------------------------
Languages: Python, Java, C, C++, JavaScript, TypeScript, SQL
Frontend: HTML5, CSS3, React.js, Next.js, Tailwind CSS, Framer Motion
Backend: Node.js, Express.js, REST APIs, Socket.IO, Firebase Authentication
Databases: MongoDB, MySQL
Developer Tools: Git, GitHub, VS Code, Wireshark, Postman
Core CS: Data Structures & Algorithms, DBMS, Operating Systems, Computer Networks, Software Engineering

FEATURED PROJECTS
-------------------------------------------------------------------
1. Online Scholarship Management System
   Tech: React.js, Node.js, Express.js, MongoDB, Firebase Auth
   - Full-stack scholarship portal enabling students to browse scholarships, apply online, and track status.
   - Built role-based authentication and intuitive admin dashboard for managing applications.

2. DevConnect - Developer Collaboration Platform
   Tech: React, TypeScript, Node.js, Express.js, MongoDB, Socket.IO
   - Real-time developer collaboration platform with JWT auth, project management, and chat rooms.
   - Built responsive UI, real-time messaging, and interactive task boards.

3. Academic CGPA Calculator & Planner
   Tech: HTML5, CSS3, JavaScript
   - Interactive academic utility to compute cumulative CGPA, predict target SGPA, and track progress.

ACHIEVEMENTS & CERTIFICATIONS
-------------------------------------------------------------------
- 2nd Place - Innovation Coding Competition
- 4★ Problem Solving on HackerRank
- 4★ SQL Rating on HackerRank
- 200+ Coding Problems Solved across LeetCode & HackerRank
- NPTEL Certification in DBMS (Elite)
- HackerRank Certified in Problem Solving, JavaScript, and SQL
- Udemy Certifications in Data Structures & Algorithms (DSA), Full-Stack HTML/CSS/JS

===================================================================
`;
    res.send(resumeText);
  });

  // Vite middleware for development vs static serve for production
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
