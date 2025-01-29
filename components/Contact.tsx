"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"

export default function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to a server
    console.log({ name, email, message })
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    })
    setName("")
    setEmail("")
    setMessage("")
  }

  return (
    <section id="contact" className="container py-8 md:py-12 lg:py-24">
      <h2 className="text-3xl font-bold tracking-tighter md:text-4xl mb-8 text-center">Contact Me</h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
        <Input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <Input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Textarea placeholder="Your Message" value={message} onChange={(e) => setMessage(e.target.value)} required />
        <Button type="submit" className="w-full">
          Send Message
        </Button>
      </form>
    </section>
  )
}

