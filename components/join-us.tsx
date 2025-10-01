import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"

export function JoinUs() {
  const benefits = [
    "Access to exclusive workshops and events",
    "Networking opportunities with industry professionals",
    "Hands-on project experience",
    "Resume-building activities",
    "Mentorship from senior members",
    "Free resources and learning materials",
  ]

  return (
    <section id="join" className="py-24 sm:py-32 bg-secondary/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-balance">Ready to Join?</h2>
            <p className="text-lg sm:text-xl text-muted-foreground text-pretty leading-relaxed">
              Become part of a thriving community of tech enthusiasts and take your skills to the next level.
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-8 sm:p-12">
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button size="lg" className="text-base px-8">
                Join ACS Today
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                Membership is free for all students. No experience required!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
