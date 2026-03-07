# ACS Landing Page — Content Architecture v2
> **Updated with redesign brief.** All sections below reflect the new terminology, structure, and added sections.
> Hero section excluded per scope.

---

## Terminology Reference

| Old Term | New Term |
|---|---|
| Students | Youth / Members |
| Campus | Community |
| Academic Year | Season |
| Executive Team | Core Team |
| What We Do | How We Grow |
| Finance | Partnerships & Outreach |

---

## 1. Navbar

**Position:** Fixed / Sticky top
**Layout:** Logo left · Nav links center/right · CTA button far right

| Element | Type | Content |
|---|---|---|
| Logo | Image + Text | `logo.svg` — "Advanced Computing Society" |
| Nav Link 1 | Anchor | `About` → `#about` |
| Nav Link 2 | Anchor | `How We Grow` → `#how-we-grow` |
| Nav Link 3 | Anchor | `Events` → `#events` |
| Nav Link 4 | Anchor | `Contact` → `#contact` |
| CTA Button | Button / Link | `Join Us` → `#join` |

---

## 2. Section: Hero

> 🔒 **Keep the existing hero section design and content exactly as-is.** No changes.

---

## 3. Section: Who We Are
**Anchor ID:** `#about`
**Purpose:** Introduce the club's identity, values, and inclusive community spirit.

### Heading
```
Who We Are
```

### Body Copy (Official Description)
```
The Advanced Computing Society (ACS) is the heartbeat of tech at
Abderrahmane Laala Youth House. We are more than just coders; we are
a family of innovators enabled by the Jisr Numuw Initiative. Our mission
is to build bridges (Jisr) for youth to master technology and create
real impact in our society.
```

### Feature Items (3 items)
> Use icons from the **Solar Icons** library. Choose the best representation method.

#### Item 1 — Community First
- **Title:** `Community First`
- **Body:** We bring together youth from all backgrounds to learn, share, and grow together in a supportive environment.

#### Item 2 — Skill Development
- **Title:** `Skill Development`
- **Body:** Through workshops, hackathons, and projects, we help members develop practical skills for real-world challenges.

#### Item 3 — Innovation Hub
- **Title:** `Innovation Hub`
- **Body:** We encourage creative thinking and provide resources to turn innovative ideas into impactful projects.

### Decorative Asset
- `favicon.svg` (ACS logo watermark)

---

## 3. Section: Our Structure
**Anchor ID:** `#structure`
**Purpose:** Showcase the club's organizational hierarchy and four departments in a clear, visual hierarchy.

### Heading
```
Our Structure
```

### Chart
> 🗂 **Render this section as an interactive org chart** using [React Flow](https://reactflow.dev/) or [D3.js](https://d3js.org/). Do not use cards. The chart should communicate hierarchy and relationships between the Core Team and the four departments.
> Use icons from the **Solar Icons** library throughout.

#### Org Chart Data

**Root Node**
- Label: `ACS`
- Sub-label: `Advanced Computing Society`

**Level 1 — Core Team** *(reports to root)*
- Label: `Core Team`
> Previously "Executive Team" — renamed to reflect a family-first culture.

**Level 2 — Departments** *(report to Core Team)*

| Department | Tagline | Roles |
|---|---|---|
| `Tech & Development` | Building the Future. | Developers, Engineers, Hackers |
| `Design & Media` | Visualizing the Vision. | UI/UX Designers, Content Creators, Photographers |
| `HR & Talent` | Nurturing Potential. | Onboarding, Member Relations, Talent Scouts |
| `Partnerships & Outreach` | Connecting Communities. | External Relations, Community Manager, Event Coordinator |

> `Partnerships & Outreach` replaces the old "Finance" department. The club's real currency is connections — speakers, event spaces, collaborations.

### Scrolling Ticker / Marquee (4 items)
```
◆ Building the Future
◆ Visualizing the Vision
◆ Nurturing Potential
◆ Connecting Communities
```

### Decorative Asset
- `favicon.svg` (ACS logo watermark)

---

## 4. Section: Achievement Gallery
**Anchor ID:** `#achievements`
**Purpose:** Prove to new youth that "I can do this too." Two sub-sections: competition wins + real member projects.

### Heading
```
Achievement Gallery
```

### Sub-heading
```
Explore memorable achievements and real projects built by our members —
showing that anyone can succeed!
```

---

### Sub-section A: Success Stories

**Label:** `Success Stories`

#### Achievement Image
- **File:** `ctf-djazair.jpg`
- **Alt:** `CTF El-Djazair Competition`

#### Achievement Badges (3 items)
> Use icons from the **Solar Icons** library.

| Title | Result |
|---|---|
| `CTF El-Djazair` | `1st & 2nd Place` |
| `Huawei ICT 2025` | `Grand Prize Winners` |
| `BlackHat MEA` | `2025 Qualifiers` |

---

### Sub-section B: Member Projects (Digital Wall)
**Purpose:** Showcase real builds by members, humanizing the club's output.

**Format:** Cards or grid tiles, each showing:
- Member first name + project name
- Short one-liner description
- Optional thumbnail / screenshot

**Example Entries (placeholders — replace with real member projects):**

| Member | Project | Description |
|---|---|---|
| Ahmed | First Python Game | A classic Snake game built from scratch in week 3 of the bootcamp. |
| Sarah | Arduino Robot | An obstacle-avoiding robot presented at Afrobot 2025. |
| Youcef | Discord Bot | A community bot that manages event registrations automatically. |

> 📌 **Content Note:** Gather real submissions via Google Form or Discord: "Share your project name + 1 sentence + a screenshot."

---

## 5. Section: How We Grow
**Anchor ID:** `#how-we-grow`
**Purpose:** Explain program types. Emphasize growth over just listing activities.

> ⚠️ Previously "What We Do" — renamed to `How We Grow` to signal transformation, not just output.

### Heading
```
How We Grow
```

### Body Copy
```
We foster growth through diverse activities and events that enhance technical
skills, encourage collaboration, and prepare members for successful careers
in technology.
```

### Activity Items (6 items)
> Use icons from the **Solar Icons** library. Choose the best representation method — not necessarily cards.

#### Item 1 — Workshops & Tutorials
- **Title:** `Workshops & Tutorials`
- **Body:** Regular hands-on sessions covering programming languages, frameworks, and cutting-edge technologies to help members grow their skills.

#### Item 2 — Hackathons
- **Title:** `Hackathons`
- **Body:** Participate in competitive coding events where teams build innovative solutions in limited time, fostering creativity and growth.

#### Item 3 — Guest Lectures
- **Title:** `Guest Lectures`
- **Body:** Host industry professionals and researchers to share insights on latest trends and career opportunities, expanding knowledge and perspectives.

#### Item 4 — Networking Events
- **Title:** `Networking Events`
- **Body:** Connect with peers, alumni, and industry partners to build lasting professional relationships and grow your network.

#### Item 5 — Peer Learning *(new)*
- **Title:** `Peer Learning`
- **Body:** We learn by teaching each other. Seniors mentor juniors in a cycle of continuous growth.

#### Item 6 — Open Access *(new)*
- **Title:** `Open Access`
- **Body:** As part of the Youth House, our resources are open to all members, supporting learning and growth for everyone.

---

## 6. Section: Learning Path *(NEW)*
**Anchor ID:** `#learning-path`
**Purpose:** Visual roadmap showing a new member's journey from day one to becoming a mentor. Removes intimidation for newcomers.

### Heading
```
Your Journey at ACS
```

### Sub-heading
```
Every expert was once a beginner. Here's how we grow together.
```

### Roadmap Steps (4 stages — horizontal or vertical timeline)

| Stage | Label | Action |
|---|---|---|
| Step 1 | `Newbie` | Join Discord & attend a "Hello World" workshop. |
| Step 2 | `Member` | Build a small project — anything counts. |
| Step 3 | `Contributor` | Help organize an event or run a session. |
| Step 4 | `Mentor` | Teach others. Share what you know. Lead a team. |

> Use icons from the **Solar Icons** library for each stage.

---

## 7. Section: Our Impact / Milestones *(NEW)*
**Anchor ID:** `#impact`
**Purpose:** High-visibility social proof. Prove ACS is a "Star" club through accurate, verified numbers.

### Heading
```
Our Impact
```

### Stats Data
> Use icons from the **Solar Icons** library. Choose the best representation method for the numbers.

| Value | Label |
|---|---|
| `2+` | Seasons Active |
| `1,000+` | Youth Reached |
| `3+` | Competition Wins |
| `2+` | Major Events Organized |
| `10+` | Workshops Delivered |

> 📌 **Content Note:** Replace all values with accurate numbers from club records before publishing.

---

## 8. Section: Past Events
**Anchor ID:** `#events`
**Purpose:** Showcase real events with human energy — not just logistics. Add "Vibe Check" photos.

### Heading
```
Past Events
```

### Sub-heading
```
Check out some of our recent activities and events that brought our community together.
```

---

### Event Card 1 — Afrobot 2025 *(Star Event)*
- **Logo / Image:** `Afrobot.svg`
- **Status Badge:** ⭐ Star Event
- **Title:** `Afrobot`
- **Description:** One of the largest youth robotics gatherings in the region, putting Abderrahmane Laala Youth House on the national map. Afrobot 2025 featured robotics competitions, hands-on educational workshops, inspiring tech showcases, and vibrant community engagement.
- **Date:** `07 July, 2025`
- **Location:** `Sablettes Park, Algiers, Algeria`
- **Attendance:** `1,000+ attendees`
- **Vibe Check:** Add photos of attendees laughing, high-fiving, eating during the event.

---

### Event Card 2 — JISR NUMUW Ideathon
- **Logo / Image:** `Jisrnumuw.svg`
- **Title:** `JISR NUMUW Ideathon`
- **Context Note:** *(Clarify in UI: this is the specific Ideathon event, distinct from the broader Jisr Numuw Initiative)*
- **Description:** A marathon of minds where youth solvers gathered to hack solutions for community growth.
- **Date:** `5-6 July, 2025`
- **Location:** `Sablettes Park, Algiers, Algeria`
- **Attendance:** `110+ attendees`
- **Vibe Check:** Add photos of attendees collaborating, presenting, celebrating.

---

## 9. Section: Enabled By / Partners *(NEW)*
**Anchor ID:** `#partners`
**Purpose:** Establish credibility and institutional backing. Show the ecosystem supporting ACS.

### Heading
```
Enabled By
```

### Logo Banner — Core Enablers (horizontal row, badge style)

| Entity | Notes |
|---|---|
| Ministry of Youth | Government endorsement |
| Wilaya of Algiers | Regional authority backing |
| Abderrahmane Laala Youth House | Host institution |
| Jisr Numuw Initiative | Program enabler |

> 📌 **Asset Note:** Gather official SVG logos from each entity. Use greyscale or consistent sizing for visual harmony.

### Optional Sub-section: `Trusted By` / Collaborators
- Add further partner logos here as collaborations grow (other clubs, universities, companies).

---

## 10. Section: Join / CTA
**Anchor ID:** `#join`
**Purpose:** Convert visitors into members. Clear value proposition, zero barrier to entry.

### Heading
```
Ready to Join?
```

### Body Copy
```
Become part of a thriving community of youth who build, learn, and grow
together. Take your skills to the next level.
```

### Benefits List (6 items)
```
✓ Access to exclusive workshops and events
✓ Networking opportunities with industry professionals
✓ Hands-on project experience
✓ Resume-building activities
✓ Mentorship from senior members
✓ Free resources and learning materials
```

### Primary CTA Button
```
Join ACS Today
```

### Footnote
```
Membership is free for all youth. No experience required!
```

---

## 11. Section: Visit Us *(NEW)*
**Anchor ID:** `#visit`
**Purpose:** Reinforce ACS's physical existence. A location pin builds trust and invites walk-ins.

### Heading
```
Visit Us
```

### Body Copy
```
We're based at Abderrahmane Laala Youth House — come say hello.
```

### Map Embed
- **Type:** Google Maps iframe or static map image with pin
- **Address:** `92 Bd Des Martyrs, El Madania, Algiers`
- **Map Link:** `https://maps.google.com/?q=92+Bd+Des+Martyrs,+El+Madania,+Algiers`

### Address Display Block
```
Abderrahmane Laala Youth House
Tech Hub
92 Bd Des Martyrs, El Madania, Algiers
```

---

## 12. Section: Contact
**Anchor ID:** `#contact`
**Purpose:** Direct communication channels.

### Heading
```
Get In Touch
```

### Body Copy
```
Have questions or want to learn more? We'd love to hear from you.
```

### Contact Items

| Channel | Label | Value / Link |
|---|---|---|
| Email | `Email` | `contact@acsociety.club` → `mailto:contact@acsociety.club` |
| Discord | `Discord` | `Join our server` → *(link TBD)* |
| Social | `Follow Us` | *(social handles TBD)* |

---

## 13. Footer

> 🔒 **Keep the existing footer design as-is.** Do not redesign the layout or structure. Only update the information below to reflect the correct details.

### Updated Information

**Address:**
```
Abderrahmane Laala Youth House
Tech Hub
92 Bd Des Martyrs, El Madania, Algiers
```

**Copyright Line:**
```
© 2025 Advanced Computing Society. All rights reserved.
```

---

## Image Assets Summary

### Existing Assets (in `/public`)

| Filename | Type | Used In |
|---|---|---|
| `logo.svg` | SVG | Navbar, Hero, Footer |
| `favicon.svg` | SVG | Who We Are, Our Structure |
| `ctf-djazair.jpg` | JPEG | Achievement Gallery |
| `Jisrnumuw.svg` | SVG | Past Events — JISR NUMUW |
| `Afrobot.svg` | SVG | Past Events — Afrobot |

### Assets Still Needed

| Filename | Type | Used In | Source |
|---|---|---|---|
| `crowd-afrobot.jpg` | JPEG | Our Impact bg / Afrobot card | Pull from event photos |
| `ministry-youth-logo.svg` | SVG | Enabled By banner | Official source |
| `wilaya-alger-logo.svg` | SVG | Enabled By banner | Official source |
| `laala-logo.svg` | SVG | Enabled By banner | Official source |
| `jisr-numuw-logo.svg` | SVG | Enabled By banner | Official source |
| `member-project-*.jpg` | JPEG | Digital Wall cards | Member submissions |

---

## Full Section Order

```
1.  Navbar
    ── (Hero — excluded from scope) ──
2.  Who We Are             #about
3.  Our Structure          #structure
4.  Achievement Gallery    #achievements
5.  How We Grow            #how-we-grow
6.  Learning Path          #learning-path     ← NEW
7.  Our Impact             #impact            ← NEW
8.  Past Events            #events
9.  Enabled By             #partners          ← NEW
10. Join / CTA             #join
11. Visit Us               #visit             ← NEW
12. Contact                #contact
13. Footer
```