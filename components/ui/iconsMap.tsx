import * as Si from "react-icons/si";
import { 
  MonitorSmartphone, FlaskConical, Layers, Infinity, 
  Users2, BrainCircuit, LineChart, Lightbulb, Code, Repeat
} from "lucide-react";

export const skillIcons = {
  // Frontend
  "React": <Si.SiReact className="text-[#61DAFB]" />,
  "Next.js": <Si.SiNextdotjs />,
  "TypeScript": <Si.SiTypescript className="text-[#3178C6]" />,
  "JavaScript (ES6+)": <Si.SiJavascript className="text-[#F7DF1E]" />,
  "HTML5": <Si.SiHtml5 className="text-[#E34F26]" />,
  "CSS3": <Si.SiCss3 className="text-[#1572B6]" />,
  "Tailwind CSS": <Si.SiTailwindcss className="text-[#06B6D4]" />,
  "Diseño Responsive": <MonitorSmartphone className="text-slate-400" />,

  // Backend
  "Node.js (NestJS)": <Si.SiNestjs className="text-[#E0234E]" />,
  "Express": <Si.SiExpress />,
  "Prisma": <Si.SiPrisma />,
  "PHP (Laravel, Zend)": <Si.SiLaravel className="text-[#FF2D20]" />,
  "Python (Django)": <Si.SiDjango className="text-[#092E20]" />,
  "MySQL": <Si.SiMysql className="text-[#4479A1]" />,
  "PostgreSQL": <Si.SiPostgresql className="text-[#336791]" />,

  // Testing
  "Cypress": <Si.SiCypress className="text-[#17202C]" />,
  "Jest": <Si.SiJest className="text-[#C21325]" />,
  "Unit Testing": <FlaskConical />,
  "Integration Testing": <Layers />,

  // Herramientas
  "Git": <Si.SiGit className="text-[#F05032]" />,
  "Github": <Si.SiGithub />,
  "Gitlab": <Si.SiGitlab className="text-[#FC6D26]" />,
  "NPM": <Si.SiNpm className="text-[#CB3837]" />,
//   "AWS (S3)": <Si.SiAmazonaws className="text-[#FF9900]" />,
//   "Azure": <Si.SiMicrosoftazure className="text-[#0078D4]" />,
  "CI/CD pipelines": <Infinity />,
  // "Postman": <Si.SiPostman className="text-[#FF6C37]" />,
  "Webpack": <Si.SiWebpack className="text-[#8DD6F9]" />,

  // Soft Skills
  "Jira": <Si.SiJira className="text-[#0052CC]" />,
  "Scrum": <Repeat />,
  "Nexus Scrum": <Repeat />,
  "Trabajo en equipo": <Users2 />,
  "Pensamiento Crítico": <BrainCircuit />,
  "Capacidad de análisis": <LineChart />,
  "Resolución de problemas": <Lightbulb />,
};
