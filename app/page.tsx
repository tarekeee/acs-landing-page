import { Hero } from "@/components/hero"
import { WhoWeAre } from "@/components/who-we-are"
import { WhatWeDo } from "@/components/what-we-do"
import { PastEvents } from "@/components/past-events"
import { JoinUs } from "@/components/join-us"
import { Contact } from "@/components/contact"
import { Navigation } from "@/components/navigation"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <WhoWeAre />
      <WhatWeDo />
      <PastEvents />
      <JoinUs />
      <Contact />
    </main>
  )
}
