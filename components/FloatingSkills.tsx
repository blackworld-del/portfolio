import type { ReactNode } from "react"
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaDocker,
  FaGitAlt,
  FaPython,
  FaAws,
  FaJs,
  FaCss3Alt,
  FaHtml5,
} from "react-icons/fa"
import {
  SiTypescript,
  SiGraphql,
  SiMongodb,
  SiPostgresql,
  SiRedux,
  SiFirebase,
  SiKubernetes,
  SiSwift,
} from "react-icons/si"
import { TbBrandReactNative, TbBrandNextjs } from "react-icons/tb"

const skills = [
  { icon: <FaReact />, name: "React", position: { top: "20%", right: "10%" } },
  { icon: <FaNodeJs />, name: "Node.js", position: { bottom: "15%", left: "15%" } },
  { icon: <FaDatabase />, name: "Database", position: { top: "40%", left: "20%" } },
  { icon: <FaDocker />, name: "Docker", position: { bottom: "30%", right: "25%" } },
  { icon: <FaGitAlt />, name: "Git", position: { top: "60%", right: "5%" } },
  { icon: <FaPython />, name: "Python", position: { bottom: "10%", right: "10%" } },
  { icon: <FaAws />, name: "AWS", position: { top: "5%", right: "30%" } },
  { icon: <FaJs />, name: "JavaScript", position: { top: "25%", left: "40%" } },
  { icon: <SiTypescript />, name: "TypeScript", position: { bottom: "20%", left: "35%" } },
  { icon: <SiGraphql />, name: "GraphQL", position: { top: "20%", left: "10%" } },
  { icon: <SiMongodb />, name: "MongoDB", position: { top: "15%", left: "60%" } },
  { icon: <SiPostgresql />, name: "PostgreSQL", position: { bottom: "40%", right: "15%" } },
  { icon: <SiRedux />, name: "Redux", position: { top: "50%", right: "40%" } },
  { icon: <SiFirebase />, name: "Firebase", position: { bottom: "25%", left: "5%" } },
  { icon: <SiKubernetes />, name: "Kubernetes", position: { top: "35%", right: "20%" } },
  { icon: <TbBrandNextjs />, name: "Next.js", position: { bottom: "5%", left: "45%" } },
  { icon: <FaCss3Alt />, name: "CSS3", position: { top: "80%", right: "35%" } },
  { icon: <FaHtml5 />, name: "HTML5", position: { top: "45%", left: "5%" } },
]

interface FloatingIconProps {
  children: ReactNode
  style: React.CSSProperties
}

const FloatingIcon: React.FC<FloatingIconProps> = ({ children, style }) => (
  <div
    className="absolute text-4xl text-primary/30 animate-float"
    style={{
      ...style,
      animationDuration: `${Math.random() * 10 + 20}s`,
      animationDelay: `-${Math.random() * 10}s`,
    }}
  >
    {children}
  </div>
)

export default function FloatingSkills() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {skills.map((skill, index) => (
        <FloatingIcon key={index} style={skill.position}>
          {skill.icon}
        </FloatingIcon>
      ))}
    </div>
  )
}

