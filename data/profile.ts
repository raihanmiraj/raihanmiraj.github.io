export type PersonalPhoto = {
  id: string;
  url: string;
  alt: string;
  caption: string;
  category: "music" | "road" | "travel";
  position: string;
};
export type PersonalVideo = {
  title: string;
  url: string;
  youtubeId: string;
  category: "music" | "road" | "travel";
  orientation: "portrait" | "landscape";
  description: string;
  featured: boolean;
};

export const profile = {
  name: "Raihan Islam Miraj",
  title: "Full Stack Developer · AI SaaS Product Engineer",
  location: "Dhaka, Bangladesh",
  neighborhood: "Mirpur, Dhaka, Bangladesh",
  email: "rsnmiraj@gmail.com",
  phone: "+880 1797-482479",
  phoneHref: "tel:+8801797482479",
  url: "https://www.raihanmiraj.com",
  startYear: 2020,
  currentRole: {
    company: "NexiBy LLC",
    role: "Full Stack Developer",
    since: "September 2025",
  },
  description:
    "Raihan Islam Miraj builds AI-powered SaaS products, multi-tenant platforms, payments, APIs, and polished product experiences.",
  resume:
    "https://drive.google.com/file/d/180EiOBvFXP9YIwERBN43dyxSeGEP4891/view",
  socials: {
    github: "https://github.com/raihanmiraj",
    linkedin: "https://www.linkedin.com/in/raihan-miraj/",
    youtube: "https://www.youtube.com/@RaihanMiraj",
    x: "https://x.com/RaihanMiraj",
    codeforces: "https://codeforces.com/profile/Mirajnai",
    beecrowd: "https://judge.beecrowd.com/en/profile/449841",
  },
  education: {
    degree: "B.Sc. in Computer Science and Engineering",
    institution: "Mymensingh Engineering College, Bangladesh",
    status: "Completed",
    cgpa: "3.67",
  },
  music: {
    guitarYears: 11,
    keyboardYears: 6,
    instruments: ["Guitar", "Keyboard / piano", "Ukulele", "Voice"],
    daws: ["FL Studio", "GarageBand", "Logic Pro"],
    recording:
      "I have a sound recording setup for taking small ideas into recorded sessions.",
  },
  road: { ridingYears: "6–7", driving: "Cars, including manual transmission" },
  places: [
    "Bandarban",
    "Cox’s Bazar",
    "Sajek",
    "Nikli Haor",
    "Guliyakhali",
    "Marayangtong",
    "Mymensingh",
  ],
} as const;

export const capabilities = [
  {
    title: "Product engineering",
    number: "01",
    span: 7,
    description:
      "From a product decision to the interface someone uses every day.",
    skills: ["JavaScript", "TypeScript", "React.js", "Next.js", "Tailwind CSS"],
  },
  {
    title: "AI systems",
    number: "02",
    span: 5,
    description: "Useful intelligence, integrated into real product workflows.",
    skills: [
      "OpenAI APIs",
      "LangChain",
      "OpenAI Whisper",
      "AI content generation",
      "Semantic search",
      "Contextual chatbots",
      "AI-assisted workflows",
    ],
  },
  {
    title: "Backend & APIs",
    number: "03",
    span: 4,
    description: "The business logic and integrations behind the experience.",
    skills: [
      "Node.js",
      "Express.js",
      "PHP",
      "Laravel",
      "REST APIs",
      "Socket.IO",
      "OOP",
    ],
  },
  {
    title: "Data & persistence",
    number: "04",
    span: 3,
    description: "Data models that support how a product grows.",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Prisma"],
  },
  {
    title: "SaaS & infrastructure",
    number: "05",
    span: 5,
    description: "The systems that turn an application into a product.",
    skills: [
      "Stripe",
      "Subscriptions",
      "Multi-tenancy",
      "RBAC",
      "Team management",
      "Custom domains",
      "Nginx",
      "Docker",
      "AWS",
      "VPS deployment",
      "Firebase",
      "Third-party API integration",
    ],
  },
  {
    title: "Beyond the core stack",
    number: "06",
    span: 4,
    description:
      "Mobile interfaces and other programming languages I’ve worked with.",
    skills: ["React Native", "Expo", "Vue.js", "Python", "C", "C++", "Java"],
  },
  {
    title: "Tools & workflow",
    number: "07",
    span: 8,
    description:
      "Design, implementation, debugging, and a willingness to learn the right tool for the problem.",
    skills: [
      "GitHub",
      "Figma",
      "Adobe Photoshop",
      "PHPStorm",
      "GitHub Copilot",
      "Cursor AI",
      "ChatGPT",
      "DeepSeek",
      "Firebase",
      "AWS",
      "VPS management",
    ],
  },
] as const;

export const photos: PersonalPhoto[] = [
  {
    id: "bike",
    url: "https://cdn.raihanmiraj.com/images/488304408_3986261698358660_7548325479343190075_n.jpg",
    alt: "Raihan with his motorcycle",
    caption: "On two wheels",
    category: "road",
    position: "50% 55%",
  },
  {
    id: "bike-travel",
    url: "https://cdn.raihanmiraj.com/images/503848178_4054156228235873_7099577505756564015_n.jpg",
    alt: "Raihan and his motorcycle on a trip",
    caption: "A different view from the road",
    category: "road",
    position: "50% 58%",
  },
  {
    id: "guitar",
    url: "https://cdn.raihanmiraj.com/images/475313764_1156185085893875_3119604516355835356_n.jpg",
    alt: "Raihan playing guitar",
    caption: "Eleven years with a guitar",
    category: "music",
    position: "50% 45%",
  },
  {
    id: "travel",
    url: "https://cdn.raihanmiraj.com/images/577387357_4203939793257515_7976836698103770611_n.jpg",
    alt: "Raihan exploring outdoors in Bangladesh",
    caption: "Time away, a wider perspective",
    category: "travel",
    position: "50% 50%",
  },
  {
    id: "ukulele",
    url: "https://cdn.raihanmiraj.com/images/78732490_2455952908056221_2096790711646027776_n.jpg",
    alt: "Raihan with a ukulele",
    caption: "A smaller instrument, another way to play",
    category: "music",
    position: "50% 45%",
  },
  {
    id: "car",
    url: "https://cdn.raihanmiraj.com/images/669885522_18402216628178396_2677062306574433634_n.jpg",
    alt: "Raihan driving a car",
    caption: "Behind the wheel",
    category: "road",
    position: "50% 45%",
  },
];
export const videos: PersonalVideo[] = [
  {
    title: "Piano Session",
    url: "https://www.youtube.com/shorts/7thy_i-7AbA?feature=share",
    youtubeId: "7thy_i-7AbA",
    category: "music",
    orientation: "portrait",
    description: "A session at the keys.",
    featured: true,
  },
  {
    title: "Winter Guitar Session",
    url: "https://youtu.be/SNJ9QKfc5T8",
    youtubeId: "SNJ9QKfc5T8",
    category: "music",
    orientation: "landscape",
    description: "Playing a song with my brother during winter.",
    featured: true,
  },
  {
    title: "Bandarban Trekking",
    url: "https://youtu.be/_i2_7kBmnIU",
    youtubeId: "_i2_7kBmnIU",
    category: "travel",
    orientation: "landscape",
    description: "Out on a trek in Bandarban.",
    featured: true,
  },
  {
    title: "Music at Guliyakhali Sea Beach",
    url: "https://youtu.be/-Zc0Pk872lA",
    youtubeId: "-Zc0Pk872lA",
    category: "music",
    orientation: "landscape",
    description: "Music meets a day by the sea.",
    featured: false,
  },
  {
    title: "Hornet Ride — 300 Feet",
    url: "https://youtube.com/shorts/YKLqDEcWwZE?si=3krXBgUGgYxmQbGV",
    youtubeId: "YKLqDEcWwZE",
    category: "road",
    orientation: "portrait",
    description: "A moment from a motorcycle ride.",
    featured: false,
  },
  {
    title: "R15 V3 Ride — Uttara Diabari",
    url: "https://youtube.com/shorts/brSuC3KuE7M?si=yNHNwRncHgPQTBLe",
    youtubeId: "brSuC3KuE7M",
    category: "road",
    orientation: "portrait",
    description: "On the R15 V3 at Uttara Diabari.",
    featured: false,
  },
  {
    title: "Singing at Marayangtong Hill",
    url: "https://www.youtube.com/shorts/6_0G4bkxT7Y?feature=share",
    youtubeId: "6_0G4bkxT7Y",
    category: "travel",
    orientation: "portrait",
    description: "A song, a hill, and a little time away.",
    featured: false,
  },
  {
    title: "Mymensingh Ride",
    url: "https://youtube.com/shorts/2DqFpIpyvhM?si=IR3xSNvA4Fj-q565",
    youtubeId: "2DqFpIpyvhM",
    category: "road",
    orientation: "portrait",
    description: "My bike, on the road in Mymensingh.",
    featured: false,
  },
];
