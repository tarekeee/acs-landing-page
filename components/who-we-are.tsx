import { Users, Target, Lightbulb } from "lucide-react"

export function WhoWeAre() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-balance">Who We Are</h2>
          <p className="text-lg sm:text-xl text-muted-foreground text-pretty leading-relaxed">
            The Advanced Computing Society is a student-led organization dedicated to fostering innovation,
            collaboration, and technical excellence in the field of computer science and technology.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-background border-2 border-border rounded-xl p-8 hover:border-primary hover:shadow-lg transition-all">
            <div className="w-14 h-14 bg-primary/15 rounded-xl flex items-center justify-center mb-6">
              <Users className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-4">Community First</h3>
            <p className="text-muted-foreground leading-relaxed">
              We bring together students from all backgrounds to learn, share, and grow together in a supportive
              environment.
            </p>
          </div>

          <div className="bg-background border-2 border-border rounded-xl p-8 hover:border-primary hover:shadow-lg transition-all">
            <div className="w-14 h-14 bg-primary/15 rounded-xl flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-4">Skill Development</h3>
            <p className="text-muted-foreground leading-relaxed">
              Through workshops, hackathons, and projects, we help members develop practical skills for real-world
              challenges.
            </p>
          </div>

          <div className="bg-background border-2 border-border rounded-xl p-8 hover:border-primary hover:shadow-lg transition-all">
            <div className="w-14 h-14 bg-primary/15 rounded-xl flex items-center justify-center mb-6">
              <Lightbulb className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-4">Innovation Hub</h3>
            <p className="text-muted-foreground leading-relaxed">
              We encourage creative thinking and provide resources to turn innovative ideas into impactful projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
