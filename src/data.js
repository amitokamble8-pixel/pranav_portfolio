/* ==================================================================
   data.js — every piece of content on the site lives here.
   Edit this file; the components never need to change.

   Source: Pranav_Reddy_Portfolio_.pdf
   Schema: mirrors the reference data.js exactly (same export names,
   same object shapes) so existing components work unchanged.

   ⚠ REVIEW BEFORE PUBLISHING — items marked "NOTE" below were not
   stated in the source PDF and were inferred or constructed.
   ================================================================== */

export const PROFILE = {
  first: "Pranav",
  last: "Reddy",
  fullName: "Pranav Reddy",
  tagline: "Student | Technology Enthusiast | Musician | Athlete",
  /* NOTE: the PDF never states a city. "Hyderabad" is inferred from the
     Blue Cross of Hyderabad volunteering. Verify or clear this field. */
  location: "Hyderabad, India",
  email: "",
  phone: "",
  bio: [
    "I am a Grade 11 AS Level student at Gateway The Complete School with a strong interest in mathematics, computer science, and technology. I enjoy exploring challenging ideas, building new skills, and applying what I learn both inside and outside the classroom.",
    "My experiences span academics, music, athletics, and community service, each of which has shaped my approach to learning, leadership, and personal growth.",
    "I am driven by curiosity, discipline, and continuous improvement. Whether solving a problem, learning a new concept, performing music, or competing in sports, I enjoy pushing myself beyond my comfort zone and embracing new challenges.",
  ],
  socials: {
    github: "",
    scholar: "",
    linkedin: "",
    codeforces: "",
    fide: "",
    imo: "",
    wespa: "",
    twitter: "",
  },
  cv: "/placeholder-cv.pdf",
  photo: "/placeholder-profile.png",
  aboutPhoto: "/placeholder-profile.png",
};

export const NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  {
    label: "Academics",
    children: [
      { label: "Academic Enrichment", to: "/work" },
      { label: "Projects", to: "/projects" },
      { label: "Areas of Interest", to: "/publications" },
    ],
  },

  { label: "Achievements", to: "/awards" },
  { label: "Community & Leadership", to: "/volunteering" },

  { label: "Activities", to: "/sports" },
];

/* ---- Academic enrichment (renders as "Work Experience" cards) ---- */

export const EXPERIENCE = [
  {
    slug: "cs50-harvard",
    role: "CS50 Graduate",
    org: "Harvard University",
    logo: "",
    location: "",
    dates: "",
    meta: "Academic Enrichment · Harvard University ·",
    badge: "Course",
    desc: "Completed Harvard University's introductory computer science course, gaining exposure to programming, algorithms, computational thinking, and problem-solving.",
    bullets: [
      "Completed Harvard University's introductory computer science course (CS50)",
      "Gained exposure to programming fundamentals, algorithms, and data structures",
      "Developed computational thinking and structured problem-solving skills",
    ],
    tags: ["Computer Science", "Algorithms", "Problem Solving"],
    featured: true,
  },
  {
    slug: "young-technology-scholars-plaksha",
    role: "Participant",
    org: "Young Technology Scholars (YTS), Plaksha University",
    logo: "",
    location: "",
    dates: "",
    meta: "Technology Program · Plaksha University ·",
    badge: "Program",
    desc: "Participated in a technology-focused learning program designed to introduce students to innovation, emerging technologies, and interdisciplinary problem-solving.",
    bullets: [
      "Participated in a technology-focused learning program at Plaksha University",
      "Explored technology and innovation alongside design thinking methods",
      "Studied real-world applications of technology through interdisciplinary problem-solving",
    ],
    tags: ["Technology", "Innovation", "Design Thinking"],
    featured: true,
  },
  {
    slug: "techosm-robotics-program",
    role: "Participant",
    org: "Techosm Robotics Program",
    logo: "",
    location: "",
    dates: "",
    meta: "Robotics & Engineering Program ·",
    badge: "Program",
    desc: "Developed practical experience in robotics and engineering through hands-on projects and technical learning.",
    bullets: [
      "Built practical experience in robotics through hands-on projects",
      "Worked on engineering design and automation concepts",
      "Applied technical learning to structured problem-solving tasks",
    ],
    tags: ["Robotics", "Engineering Design", "Automation"],
    featured: true,
  },
  {
    slug: "juniormba-clever-harvey",
    role: "Participant",
    org: "JuniorMBA — Clever Harvey",
    logo: "",
    location: "",
    dates: "",
    meta: "Business & Entrepreneurship Program · Clever Harvey ·",
    badge: "Program",
    desc: "Completed a structured entrepreneurship and business program that introduced core concepts in business strategy, leadership, and innovation.",
    bullets: [
      "Completed a structured entrepreneurship and business programme",
      "Studied core concepts in business strategy, marketing, and innovation",
      "Developed an introduction to leadership in a business context",
    ],
    tags: ["Entrepreneurship", "Business Strategy", "Marketing"],
    featured: false,
  },
];

/* ---- Projects ---- */
/* NOTE: the source PDF has no separate "projects" section. The entries below
   are drawn from the hands-on components of the programmes described above.
   Replace with real project write-ups (title, scope, outcome) when available. */

export const PROJECTS = [
  {
    name: "CS50 Problem Sets & Final Coursework",
    org: "Harvard University",
    meta: "Computer Science",
    desc: "Programming work completed through Harvard's CS50, covering programming fundamentals, algorithms, data structures, and computational thinking.",
    tags: ["Programming", "Algorithms", "Data Structures"],
    featured: true,
  },
  {
    name: "Robotics & Automation Builds",
    org: "Techosm Robotics Program",
    meta: "Hands-On Technical Work",
    desc: "Hands-on robotics and engineering projects covering engineering design, automation, and applied problem-solving.",
    tags: ["Robotics", "Engineering Design", "Automation"],
    featured: true,
  },
  {
    name: "Technology & Innovation Coursework",
    org: "Young Technology Scholars, Plaksha University",
    meta: "Design Thinking",
    desc: "Interdisciplinary work on emerging technologies and design thinking, focused on how technology is applied to real-world problems.",
    tags: ["Innovation", "Design Thinking", "Technology"],
    featured: false,
  },
];

/* ---- Achievements ---- */

export const AWARDS = [
  {
    icon: "🏅",
    title: "National-Level Olympiad Qualifier",
    meta: "Academic Competitions",
    detail:
      "Qualified for National-Level Olympiads across multiple disciplines, with consistent participation in competitive academic assessments and strong foundations in mathematics, logical reasoning, and problem-solving.",
    link: "",
    featured: true,
  },
  {
    icon: "🔤",
    title: "International-Level Spell Bee Participant",
    meta: "Language & Communication",
    detail:
      "Reached the International Level in Spell Bee competitions on multiple occasions, demonstrating advanced vocabulary, language proficiency, and verbal reasoning.",
    link: "",
    featured: true,
  },
  {
    icon: "🎓",
    title: "CS50 — Harvard University",
    meta: "Academic Enrichment",
    detail:
      "Completed Harvard University's introductory computer science course, covering programming, algorithms, computational thinking, and problem-solving.",
    link: "",
    featured: true,
  },
  {
    icon: "🎹",
    title: "Trinity Grade 8 Keyboard",
    meta: "Trinity College London",
    detail:
      "Achieved Trinity College London Grade 8 Keyboard certification, having learned keyboard since 2016.",
    link: "",
    featured: true,
  },
  {
    icon: "🥋",
    title: "Black Belt — Karate",
    meta: "World Funakoshi Shotokan Karate Organisation",
    detail:
      "Achieved Black Belt certification through the World Funakoshi Shotokan Karate Organisation, competing in Kumite and Kata from 2019–2023.",
    link: "",
    featured: true,
  },
  {
    icon: "🏏",
    title: "Cricket Team Captain — 2021–22 Season",
    meta: "Club Cricket",
    detail:
      "Served as Team Captain during the 2021–22 season and represented the team in multiple club tournaments.",
    link: "",
    featured: false,
  },
];

/* ---- Academic interests ---- */
/* NOTE: the PDF lists these interests as bare headings only. The one-line
   descriptions in `outlet` were written to fit the component and should be
   reviewed. */

export const ARTICLES = [
  {
    title: "Computer Science",
    outlet: "Programming, algorithms, and computational approaches to solving problems",
    link: "",
  },
  {
    title: "Mathematics",
    outlet: "Logical reasoning and quantitative foundations, including Further Mathematics",
    link: "",
  },
  {
    title: "Artificial Intelligence",
    outlet: "How intelligent systems are built and where they are usefully applied",
    link: "",
  },
  {
    title: "Engineering & Technology",
    outlet: "Engineering design, robotics, and automation in practical settings",
    link: "",
  },
  {
    title: "Entrepreneurship & Innovation",
    outlet: "Business strategy, marketing, and how new ideas are taken to market",
    link: "",
  },
];

/* ---- Service, leadership & activities ---- */

export const VOLUNTEER = {
  /* NOTE: the PDF gives no volunteering hours or headcounts. These stat
     values are constructed from the facts stated (4+ years of school
     performances, 2025 volunteering, captain + school representation).
     Replace with real figures if you have them. */
  stats: [
    { value: "2025", label: "Volunteer — Blue Cross of Hyderabad" },
    { value: "4+", label: "Years Performing at School Events" },
    { value: "2", label: "Team Leadership & Representation Roles" },
  ],
  orgs: [
    {
      name: "Blue Cross of Hyderabad",
      role: "Volunteer · 2025",
      desc: "Contributed to animal welfare initiatives as a volunteer, assisting in the care of disabled animals, supporting administrative and file organisation activities, and contributing to daily operations and welfare efforts.",
    },
    {
      name: "Cricket — Team Captain",
      role: "Captain · 2021–22 Season",
      desc: "Served as Team Captain during the 2021–22 season and represented the team in multiple club tournaments as a bowler, developing strategic thinking and decision-making through leading a side.",
    },
    {
      name: "School Band & Music Performances",
      role: "Performer & School Representative",
      desc: "Represented the school in inter-school band competitions and performed alongside fellow student musicians at major school events for the past four years, developing collaboration and teamwork through ensemble performance.",
    },
  ],
};

/* ---- Athletics, activities & competitions (renders on the /sports route) ---- */

export const SPORTS = [
  {
    icon: "🏏",
    name: "Cricket",
    desc: "Team Captain and bowler. Represented the team in multiple club tournaments and captained the side during the 2021–22 season, developing strategic thinking and decision-making.",
  },
  {
    icon: "⚽",
    name: "Football",
    desc: "A dedicated football player since 2015, representing the school in inter-school tournaments as a defender, with a focus on teamwork, game strategy, and adaptability under competitive play.",
  },
  {
    icon: "🥋",
    name: "Karate",
    desc: "Black Belt certified through the World Funakoshi Shotokan Karate Organisation, competing in Kumite and Kata from 2019–2023 after years of consistent training in physical and mental discipline.",
  },
  {
    icon: "🎹",
    name: "Keyboard & Performance",
    desc: "Learning keyboard since 2016 and certified at Trinity College London Grade 8. Regular performer at school and community events, Music Academy talent showcases, and inter-school band competitions.",
  },
];

/* ---- Skills ---- */
/* NOTE: the source PDF has a "Skills Developed" section (analytical thinking,
   communication, intellectual curiosity, resilience); the remaining items are
   drawn from the focus areas listed under each programme. No languages section
   exists in the PDF, so none is listed here — add one if needed. */

export const SKILLS = [
  {
    group: "Computer Science & Technology",
    items: ["Programming Fundamentals", "Algorithms", "Data Structures", "Computational Thinking"],
  },
  {
    group: "Engineering & Robotics",
    items: ["Robotics", "Engineering Design", "Automation", "Applied Problem Solving"],
  },
  {
    group: "Business & Innovation",
    items: ["Entrepreneurship", "Business Strategy", "Marketing", "Design Thinking"],
  },
  {
    group: "Academic & Personal",
    items: ["Analytical Thinking", "Communication", "Intellectual Curiosity", "Resilience"],
  },
  {
    group: "Music & Performance",
    items: ["Musicianship", "Discipline", "Creativity", "Stage Performance"],
  },
];

/* ---- Education ---- */
/* NOTE: no graduation year, GPA, or grades are stated in the PDF. `gpa` is
   left empty and the class year is omitted rather than guessed. */

export const EDUCATION = [
  {
    school: "Gateway The Complete School",
    location: "",
    level: "AS Level · Grade 11",
    dates: "",
    gpa: "",
    coursework: [
      "Mathematics",
      "Further Mathematics",
      "Physics",
      "Chemistry",
      "Computer Science",
      "English General Paper",
    ],
  },
];

/* ---- Test scores (none listed in the source document) ---- */
/* NOTE: the PDF lists competitions and certifications rather than standardised
   test scores — those are captured under AWARDS and EXPERIENCE. */

export const TEST_SCORES = [];

/* ---- Looking ahead ---- */
/* Adapted from the "Personal Philosophy" section of the PDF. */

export const LOOKING_AHEAD = [
  "I am driven by curiosity, discipline, and continuous improvement — whether solving a problem, learning a new concept, performing music, or competing in sports, I enjoy pushing myself beyond my comfort zone.",
  "I hope to continue exploring the intersection of technology, innovation, and problem-solving while contributing meaningfully to the communities and teams I am part of.",
];

export const FOOTER_NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Academic Enrichment", to: "/work" },
  { label: "Projects", to: "/projects" },
  { label: "Areas of Interest", to: "/publications" },
  { label: "Achievements", to: "/awards" },
  { label: "Community & Leadership", to: "/volunteering" },
  { label: "Activities", to: "/sports" },
];

export const FOOTER_PROFILES = [
  { label: "LinkedIn", href: PROFILE.socials.linkedin },
];
