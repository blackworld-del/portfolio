import { Card, CardContent } from "@/components/ui/card"
import { Code, Server, Database, Cloud } from "lucide-react"

const skills = [
  {
    category: "Frontend",
    icon: Code,
    items: ["React Native", "React", "TypeScript", "HTML/CSS"],
  },
  {
    category: "Backend",
    icon: Server,
    items: ["Node.js", "Express", "Python", "Django"],
  },
  {
    category: "Database",
    icon: Database,
    items: ["MongoDB", "PostgreSQL", "Firebase"],
  },
  {
    category: "DevOps",
    icon: Cloud,
    items: ["Docker", "AWS", "CI/CD", "Git"],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="container py-8 md:py-12 lg:py-24">
      <h2 className="text-3xl font-bold tracking-tighter md:text-4xl mb-8 text-center">Skills</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {skills.map((skill) => (
          <Card key={skill.category} className="overflow-hidden">
            <CardContent className="p-0">
              <div className="bg-primary p-4 flex items-center justify-between">
                <h3 className="text-lg font-semibold text-primary-foreground">{skill.category}</h3>
                <skill.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <ul className="p-4 space-y-2">
                {skill.items.map((item) => (
                  <li key={item} className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-primary mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

