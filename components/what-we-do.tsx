import { Code, Rocket, GraduationCap, Network } from "lucide-react"

export function WhatWeDo() {
  const activities = [
    {
      icon: Code,
      title: "Workshops & Tutorials",
      description:
        "Regular hands-on sessions covering programming languages, frameworks, and cutting-edge technologies.",
    },
    {
      icon: Rocket,
      title: "Hackathons",
      description:
        "Organize and participate in competitive coding events where teams build innovative solutions in limited time.",
    },
    {
      icon: GraduationCap,
      title: "Guest Lectures",
      description:
        "Host industry professionals and researchers to share insights on latest trends and career opportunities.",
    },
    {
      icon: Network,
      title: "Networking Events",
      description: "Connect with peers, alumni, and industry partners to build lasting professional relationships.",
    },
  ]

  return (
    <section id="what-we-do" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-balance">What We Do</h2>
          <p className="text-lg sm:text-xl text-muted-foreground text-pretty leading-relaxed">
            We organize diverse activities and events to enhance technical skills, foster collaboration, and prepare
            members for successful careers in technology.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="bg-card border-2 border-border rounded-xl p-6 hover:border-primary hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-primary/15 rounded-xl flex items-center justify-center mb-4">
                <activity.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-3">{activity.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{activity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
