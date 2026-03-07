export type AchievementPost = {
  slug: string;
  path: string;
  section: 'success-stories' | 'achievements';
  title: string;
  subtitle: string;
  excerpt: string;
  author: string;
  publishDate: string;
  coverImage?: string;
  emoji?: string;
  paragraphs: string[];
};

export const achievementPosts: AchievementPost[] = [
  {
    slug: 'ctf-el-djazair',
    path: '/stories/ctf-el-djazair',
    section: 'success-stories',
    title: 'CTF EL-DJAZAIR',
    subtitle: 'CYBERSECURITY COMPETITION',
    excerpt: 'Our talented ACS members stepped up and won, proving that disciplined preparation and teamwork lead to results.',
    author: 'ACS Media Team',
    publishDate: 'March 2026',
    coverImage: '/ctf-djazair.jpg',
    paragraphs: [
      'CTF El-Djazair was a defining win for ACS. Our talented members trained hard, trusted each other under pressure, and delivered when it mattered most.',
      'From qualifiers to final rounds, the team stayed sharp across web exploitation, forensics, and reverse engineering challenges. Their consistency and focus turned strong preparation into first-place performance.',
      'This victory was more than a trophy. It showed what ACS can achieve when skill, discipline, and team spirit come together.',
    ],
  },
  {
    slug: 'huawei-ict-2025',
    path: '/stories/huawei-ict-2025',
    section: 'success-stories',
    title: 'HUAWEI ICT 2025',
    subtitle: 'ICT COMPETITION',
    excerpt: 'A long, demanding journey from national rounds to regional competition, ending with a global win for ACS.',
    author: 'ACS Tech Team',
    publishDate: 'March 2026',
    coverImage: '/ict.png',
    paragraphs: [
      'Huawei ICT 2025 tested us across every stage. We began at the national level, where our team had to prove consistency, technical depth, and composure to advance.',
      'The regional stage raised the bar even higher. Weeks of intense preparation, mock evaluations, and nonstop iteration helped us compete against top teams and keep moving forward.',
      'Reaching the global stage was already historic, but our team pushed even further and secured the global win. It was the result of endurance, discipline, and a collective belief that we could finish at the top.',
    ],
  },
  {
    slug: 'blackhat-mea-2025',
    path: '/stories/blackhat-mea-2025',
    section: 'success-stories',
    title: 'BLACKHAT MEA',
    subtitle: 'SECURITY CONFERENCE',
    excerpt: 'Representing our country at BlackHat MEA while building meaningful international connections in cybersecurity.',
    author: 'ACS Security Circle',
    publishDate: 'March 2026',
    coverImage: '/blackhat.png',
    paragraphs: [
      'At BlackHat MEA, ACS proudly represented our country on an international cybersecurity stage. Our presence reflected the growth of local talent and the ambition of our community.',
      'Throughout the event, we connected with researchers, engineers, and teams from different regions. Those conversations opened doors for collaboration, mentorship, and future opportunities.',
      'We returned with stronger networks, fresh ideas, and a clear mission: keep building bridges between our local ecosystem and the global cybersecurity community.',
    ],
  },
  
  {
    slug: 'shor-algorithm-implementation',
    path: '/achievements/shor-algorithm-implementation',
    section: 'achievements',
    title: 'Shor Algorithm',
    subtitle: 'BY NASSIM MANSOURI',
    excerpt: 'A quantum project exploring Shor\'s algorithm through simplified and generalized implementations.',
    author: 'Nassim Mansouri',
    publishDate: 'add  2026',
    emoji: '⚛️',
    paragraphs: [
      'Nassim built this repository to study how Shor\'s algorithm can factor integers using quantum workflows and practical experimentation.',
      'The project includes a simplified implementation for factoring 15 and generalized approaches using both Qiskit and PennyLane.',
      'Alongside simulations, the work documents methodology, findings, and limitations when testing quantum factorization toward RSA-related use cases.',
      'Repository: https://github.com/Graychii/Shor-Algorithm-Implementation',
    ],
  },
  {
    slug: 'walle-robot-fighter',
    path: '/achievements/walle-robot-fighter',
    section: 'achievements',
    title: 'Robot Fighter',
    subtitle: 'BY AHMED HOCINE & TEAM WALL-E',
    excerpt: 'Ahmed Hocine and Team WALL-E built a robot fighter for the Afrobot competition.',
    author: 'Ahmed Hocine',
    publishDate: 'March 2026',
    emoji: '🥊',
    paragraphs: [
      'Ahmed Hocine and Team WALL-E designed and built a robot fighter to compete at Afrobot.',
      'The project focused on mechanical durability, responsive control, and rapid iteration before the competition day.',
      'Their work showcased strong collaboration, practical robotics skills, and competitive spirit within the ACS community.',
    ],
  },
];

export function getAchievementPostByPath(path: string) {
  return achievementPosts.find((post) => post.path === path);
}
