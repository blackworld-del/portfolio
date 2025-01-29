import { Button } from "@/components/ui/button"
import FloatingSkills from "./FloatingSkills"

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden min-h-[calc(100vh-4rem)]">
      <FloatingSkills />
      <div className="container relative z-10 flex flex-col items-center justify-center gap-4 h-full py-8">
        <div className="flex max-w-[980px] flex-col items-center gap-2 text-center bg-background/80 backdrop-blur-sm p-8 rounded-lg">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">OUALID DADAH</h1>
          <p className="text-lg text-muted-foreground">Full Stack Mobile Developer</p>
          <p className="mt-4 text-center max-w-[700px] text-muted-foreground">
            Specializing in React Native, Node.js, and cloud technologies. Building seamless experiences from frontend
            to backend.
          </p>
          <div className="flex gap-4 mt-6">
            <Button asChild>
              <a href="#contact">Contact Me</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="#projects">View Projects</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

