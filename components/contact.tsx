import { Mail, MessageSquare, Github, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-balance">Get In Touch</h2>
            <p className="text-lg sm:text-xl text-muted-foreground text-pretty leading-relaxed">
              Have questions or want to learn more? We'd love to hear from you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card border border-border rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium mb-1">Email</p>
                    <a
                      href="mailto:contact@acsociety.club"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      contact@acsociety.club
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium mb-1">Discord</p>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      Join our server
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-border">
                <p className="font-medium mb-4">Follow Us</p>
                <div className="flex gap-3">
                  <Button size="icon" variant="outline" className="hover:border-primary/50 bg-transparent">
                    <Github className="w-5 h-5" />
                  </Button>
                  <Button size="icon" variant="outline" className="hover:border-primary/50 bg-transparent">
                    <Linkedin className="w-5 h-5" />
                  </Button>
                  <Button size="icon" variant="outline" className="hover:border-primary/50 bg-transparent">
                    <Twitter className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6">Office Hours</h3>

              <div className="space-y-4">
                <div>
                  <p className="font-medium mb-2">Weekly Meetings</p>
                  <p className="text-muted-foreground">Thursdays, 6:00 PM - 8:00 PM</p>
                  <p className="text-sm text-muted-foreground mt-1">Student Center, Room 204</p>
                </div>

                <div className="pt-4 border-t border-border">
                  <p className="font-medium mb-2">Office Hours</p>
                  <p className="text-muted-foreground">Monday - Friday</p>
                  <p className="text-muted-foreground">2:00 PM - 5:00 PM</p>
                  <p className="text-sm text-muted-foreground mt-1">Tech Hub, Room 101</p>
                </div>

                <div className="pt-4 border-t border-border">
                  <p className="font-medium mb-2">Location</p>
                  <p className="text-muted-foreground">Computer Science Building</p>
                  <p className="text-muted-foreground">123 University Ave</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="mt-24 pt-8 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-sm text-muted-foreground">
            <p>© 2025 Advanced Computing Society. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </section>
  )
}
