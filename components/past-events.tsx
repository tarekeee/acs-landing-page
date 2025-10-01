import { Calendar, MapPin, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function PastEvents() {
  const events = [
    {
      title: "JISR NUMUW",
      date: "5-6 July, 2025",
      location: "Sablettes Park, Algiers, Algeria",
      attendees: 85,
      description:
        "JISR NUMUW is a national event that brings together Algeria’s brightest youth to design innovative and interconnected solutions aimed at empowering and uniting young people across the country’s provinces.",
      image: "/Jisrnumuw.svg",
    },
    {
      title: "Afrobot",
      date: "07 July, 2025",
      location: "Sablettes Park, Algiers, Algeria",
      attendees: 120,
      link: "https://afrobot.africa/",
      description:
        "Afrobot is a large-scale public festival culminating in an electrifying day of robotics competitions, hands-on educational workshops, inspiring tech showcases, and vibrant community engagement. Afrobot 2025 will be hosted in the heart of Algiers at Open Air Theater in Sablettes on July 7th, 2025, the festival is designed to be an unforgettable experience for participants and spectators alike, and a welcoming beacon for future international guests and collaborators.",
      image: "/Afrobot.svg",
    },
  ];

  return (
    <section id="events" className="py-24 sm:py-32 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-balance">
            Past Events
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground text-pretty leading-relaxed">
            Check out some of our recent activities and events that brought our
            community together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {events.map((event, index) => (
            <Card
              key={index}
              className="overflow-hidden border-2 hover:border-primary hover:shadow-lg transition-all"
            >
              <img
                src={event.image || "/placeholder.svg"}
                alt={event.title}
                className="w-full h-48 object-contain bg-white p-3"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">{event.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {event.description}
                </p>
                <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-primary" />
                    <span>{event.attendees} attendees</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
