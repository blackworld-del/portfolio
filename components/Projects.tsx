import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Mobile E-commerce App",
    description: "A full-stack mobile app for e-commerce with real-time inventory updates.",
    technologies: ["React Native", "Node.js", "MongoDB", "Socket.io"],
    demoUrl: "#",
    codeUrl: "#",
  },
  {
    title: "Task Management Platform",
    description: "A web and mobile application for team task management and collaboration.",
    technologies: ["React", "Express", "PostgreSQL", "React Native"],
    demoUrl: "#",
    codeUrl: "#",
  },
  {
    title: "IoT Home Automation",
    description: "An IoT project for home automation with mobile app control.",
    technologies: ["Python", "React Native", "MQTT", "Raspberry Pi"],
    demoUrl: "#",
    codeUrl: "#",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="container py-8 md:py-12 lg:py-24">
      <h2 className="text-3xl font-bold tracking-tighter md:text-4xl mb-8 text-center">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card key={project.title}>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button asChild variant="outline">
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                  Demo
                </a>
              </Button>
              <Button asChild>
                <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                  Code
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}

