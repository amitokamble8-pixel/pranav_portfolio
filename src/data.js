/* ==================================================================
   
   ================================================================== */

export const PROFILE = {
  first: "Pranav",
  last: "Reddy",
  fullName: "Pranav Reddy",
  tagline: "",
  /* CONFLICT: portfolio implied Hyderabad (Blue Cross Hyderabad);
     resume states Chennai, Tamil Nadu. Using the resume. */
  location: "Chennai, Tamil Nadu, India",
  email: "pranavreddy2071.gtcs@gmail.com",
  phone: "+91 9789086842",
  bio: [
    /* CONFLICT: portfolio says "Grade 11 AS Level"; resume says Grade 12,
       graduating April 2027. Using the resume. */
    "I'm a Grade 12 student at Gateway The Complete School in Chennai, graduating in April 2027, with a strong interest in mathematics, computer science, and technology. I work mainly in Python, Arduino robotics, and geolocation-based application development.",
    "Most of my technical work is aimed at practical problems. I lead development of an animal rescue reporting app for Blue Cross, Chennai, and prototype sensor-driven systems that connect microcontrollers to real-world data.",
    "Outside the classroom I serve as Head Boy, having previously been House Captain, and my experiences span academics, music, athletics, and community service — each of which has shaped how I approach learning, leadership, and personal growth.",
    "I am driven by curiosity, discipline, and continuous improvement. Whether solving a problem, learning a new concept, performing music, or competing in sports, I enjoy pushing myself beyond my comfort zone.",
  ],
  socials: {
    github: "",
    linkedin: "https://www.linkedin.com/in/pranav-reddy-a1a546324/",
    scholar: "",
    codeforces: "",
    fide: "",
    imo: "",
    wespa: "",
    twitter: "",
  },
  cv: "/resume.pdf",
  photo: "/placeholder-profile.png",
  aboutPhoto: "/placeholder-profile.png",
};

export const NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  {
    label: "Experience",
    children: [
      { label: "Academic Enrichment", to: "/work" },
      { label: "Featured Projects", to: "/projects" },
      { label: "Areas of Interest", to: "/publications" },
    ],
  },

  { label: "Achievements", to: "/awards" },
  { label: "Community & Leadership", to: "/volunteering" },

  { label: "Activities", to: "/sports" },
];

/* ---- Leadership, service & academic programs (renders as "Work Experience" cards) ---- */

export const EXPERIENCE = [
  {
    slug: "ahmedabad-grand-challenges",
    role: "Participant",
    org: "Ahmedabad Grand Challenges Program, Ahmedabad University",
    logo: "",
    location: "Ahmedabad, India",
    dates: "May 2026 – June 2026",
    meta: "Certification · Ahmedabad University · May–Jun 2026",
    badge: "Program",
    desc: "Worked on a real-world urban pollution problem, combining field research, data collection, and engineering to understand and reduce pollution from restaurant operations.",
    bullets: [
      "Built and calibrated pollution sensors to measure air-quality parameters and learned how to operate them in real-world conditions",
      "Conducted field measurements at a working restaurant, collecting pollution data directly from its kitchen and surrounding areas",
      "Analysed the collected data to identify pollution sources and understand how restaurant activities contributed to local air pollution",
      "Designed practical solutions to reduce emissions, exploring engineering approaches for capturing and filtering pollutants from restaurant exhaust",
      "Tested and refined our proposed solutions based on the data and observations gathered during the field study",
      "Presented our findings and proposed solutions, connecting scientific measurements with a real urban environmental problem",
    ],
    tags: ["Urban Pollution", "Sensor Technology", "Data Analysis", "Engineering Solutions"],
    featured: true,
  },
  {
    slug: "young-tech-scholars-plaksha",
    role: "Participant",
    org: "Young Tech Scholars (STEM & Analytics), Plaksha University",
    logo: "",
    location: "",
    dates: "May 2025 – Jun 2025",
    meta: "Certification · Plaksha University · May–Jun 2025",
    badge: "Program",
    desc: "An intensive STEM and analytics program exploring aerodynamics, robotics, and data collection through the design and development of a weather glider.",
    bullets: [
      "Designed and developed a weather glider, applying principles of aerodynamics, buoyancy, and flight efficiency",
      "Built and tested glider prototypes, refining the design to improve stability and performance",
      "Worked with sensors and microcontrollers, learning to code sensors and collect data during flight",
      "Analysed sensor data to understand the glider's performance and environmental conditions",
      "Combined robotics, coding, and engineering to develop a working prototype and demonstrate it through a flight test",
    ],
    tags: ["Aerodynamics", "Robotics", "Sensor Programming", "Arduino", "Data Analysis", "STEM"],
    featured: false,
  },
  {
    slug: "cs50-harvard",
    role: "CS50 Graduate",
    org: "Harvard University",
    logo: "",
    location: "Online",
    dates: "Nov 2025 – Dec 2025",
    meta: "Certification · Harvard University · Nov–Dec 2025",
    badge: "Course",
    desc: "Completed Harvard's Introduction to Computer Science, covering algorithms, data structures, and problem-solving in C, Python, and SQL.",
    bullets: [
      "Studied core computer science concepts including algorithms, data structures, and problem-solving through C, Python, and SQL",
      "Completed hands-on programming assignments and problem sets under Harvard's online curriculum",
      "Developed a final project — a task tracker application — applying programming, database, and problem-solving concepts to build a practical tool for managing tasks",
    ],
    tags: ["Computer Science", "Python", "C", "SQL", "Algorithms", "Data Structures"],
    featured: true,
  },
  {
    /* CONFLICT: portfolio calls this "Techosm"; resume says "Texoham".
       Using the resume spelling — confirm which is correct. */
    slug: "texoham-robotics-engineering-design",
    role: "Participant",
    org: "Robotics and Engineering Design, Texoham",
    logo: "",
    location: "",
    dates: "May 2025",
    meta: "Certification · Texoham · May 2025",
    badge: "Program",
    desc: "Designed and built robotics prototypes applying core engineering design principles.",
    bullets: [
      "Designed and built robotics prototypes applying core engineering design principles",
      "Applied hands-on problem-solving skills to real-world engineering challenges during the program",
    ],
    tags: ["Robotics", "Engineering Design", "Prototyping"],
    featured: false,
  },
  {
    slug: "junior-mba-clever-harvey",
    role: "Participant",
    org: "Junior MBA (Business & Entrepreneurship), Clever Harvey",
    logo: "",
    location: "",
    dates: "Aug 2023 – Oct 2023",
    meta: "Certification · Clever Harvey · Aug–Oct 2023",
    badge: "Program",
    desc: "Learned foundational business concepts including marketing, finance, and entrepreneurship strategy.",
    bullets: [
      "Learned foundational business concepts including marketing, finance, and entrepreneurship strategy",
      "Developed a business plan and pitch as part of a hands-on entrepreneurship simulation",
    ],
    tags: ["Entrepreneurship", "Business Strategy", "Marketing"],
    featured: false,
  },
];

/* ---- Projects ---- */

export const PROJECTS = [
  {
    name: "Detection of Gravitational Waves Using Matched Filtering: An Analysis of LIGO/Virgo Strain Data for GW150914 and GW170817",
    org: "The Curieux Review Publication",
    meta: "Research Article",
    desc: "An analysis of LIGO/Virgo strain data from the gravitational-wave events GW150914 and GW170817, using Python for data processing, filtering, matched filtering, and signal analysis. Detection accuracy was evaluated with ROC curves and a confusion matrix, alongside a study of the method's limitations and proposed improvements to the detection process.",
    tags: ["Python", "Signal Processing", "Matched Filtering", "Astrophysics"],
    featured: true,
  },
  {
    name: "Animal Rescue & Recovery App",
    org: "Independent",
    meta: "Lead Developer · 2025 – Present",
    desc: "A mobile application that streamlines injured-animal reporting. Built the project and successfully pitched it to Blue Cross, Chennai. Geolocation APIs supply real-time coordinates to rescue teams, and a Python/Java backend tracks shelter capacity. Pilot testing reduced manual reporting time and improved rescue response coordination.",
    tags: ["Python", "Java", "Geolocation APIs", "Mobile App"],
    featured: true,
  },
  {
    name: "Robotics & AI Explorations",
    org: "Independent",
    meta: "2024 – Present",
    desc: "Ongoing exploration of AI and robotics for social good using Arduino hardware and Python software — prototyping sensor-driven systems that integrate microcontrollers with real-world data inputs and translating community needs into working technical solutions.",
    tags: ["Arduino", "Robotics", "Artificial Intelligence", "Python"],
    featured: true,
  },
  {
    /* UPDATED: renamed and rewritten to match the actual programme work
       (restaurant air-quality study) rather than the generic description. */
    name: "Restaurant Emissions & Air-Quality Field Study",
    org: "Ahmedabad Grand Challenges Program, Ahmedabad University",
    meta: "May – June 2026",
    desc: "A field study of pollution from restaurant operations: building and calibrating air-quality sensors, taking measurements in a working kitchen and its surroundings, analysing the data to trace pollution sources, and designing and testing engineering approaches for capturing and filtering exhaust emissions.",
    tags: ["Urban Pollution", "Sensor Technology", "Data Analysis", "Engineering Solutions"],
    featured: true,
  },
  {
    /* NEW: the weather glider from the Plaksha programme. */
    name: "Weather Glider Prototype",
    org: "Young Tech Scholars, Plaksha University",
    meta: "May – June 2025",
    desc: "Designed and built a weather glider applying principles of aerodynamics, buoyancy, and flight efficiency. Prototypes were refined for stability and performance, with coded sensors and microcontrollers collecting in-flight data that was analysed to assess glider performance and environmental conditions, culminating in a flight test.",
    tags: ["Aerodynamics", "Robotics", "Sensor Programming", "Arduino", "Data Analysis"],
    featured: true,
  },
  {
    /* NEW: the CS50 final project. */
    name: "Task Tracker Application",
    org: "CS50 Final Project, Harvard University",
    meta: "Nov – Dec 2025",
    desc: "A practical task management tool built as the CS50 final project, applying programming, database, and problem-solving concepts from the course.",
    tags: ["Python", "SQL", "Databases", "Application Development"],
    featured: false,
  },
  {
    name: "Business Plan & Pitch",
    org: "Junior MBA, Clever Harvey",
    meta: "Aug – Oct 2023",
    desc: "Developed a business plan and delivered a pitch as part of a hands-on entrepreneurship simulation, applying concepts from marketing, finance, and business strategy.",
    tags: ["Entrepreneurship", "Business Strategy", "Pitching"],
    featured: false,
  },
];

/* ---- Achievements ---- */

export const AWARDS = [
  {
    icon: "📝",
    title: "SAT — 1440",
    meta: "Standardised Testing",
    detail: "Scored 1440 superscore on the SAT.",
    link: "",
    featured: true,
  },
  {
    icon: "🎹",
    title: "Trinity College London — Grade 6 Keyboard",
    meta: "Music Certification",
    detail: "Grade 6 Keyboard certification from Trinity College London, with continued study of advanced music theory and complex rhythmic patterns.",
    link: "",
    featured: false,
  },
  {
    icon: "🥋",
    title: "Black Belt (Shodan) — Shotokan Karate",
    meta: "Shotokan Karate Dojo, Chennai · 2017–2025",
    detail: "Completed 8+ years of rigorous training culminating in Black Belt (Shodan) certification, serving as a trainee and assistant at the dojo.",
    link: "",
    featured: true,
  },
  {
    icon: "🎓",
    title: "CS50 — Harvard University",
    meta: "Nov–Dec 2025",
    detail: "Completed Harvard's Introduction to Computer Science, covering algorithms, data structures, and problem-solving in C, Python, and SQL.",
    link: "",
    featured: false,
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
  {
    icon: "🎖️",
    title: "Head Boy — Elected to Lead 200+ Students",
    meta: "Gateway The Complete School · 2026–2027",
    detail: "Elected Head Boy, organizing inter-school STEM competitions and sports meets and managing large-scale event logistics, after serving as House Captain in 2025–26.",
    link: "",
    featured: true,
  },
    {
    icon: "⚽",
    title: "School Football Team — Inter-School Participations",
    meta: "Team player since 2015",
    detail: "Participated in inter-school football tournaments, demonstrating teamwork and leadership skills.",
    link: "",
    featured: true,
  },
  {
    icon: "🎓",
    title: "IGCSE — A+ in Mathematics, Physics & Chemistry",
    meta: "Gateway The Complete School",
    detail: "A+ grades in Mathematics, Physics and Chemistry, and an A in Computer Science, at IGCSE.",
    link: "",
    featured: true,
  },
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
];

/* ---- Academic interests ---- */
/* NOTE: the sources list these as bare headings; the one-line descriptions
   were written to fit the component and should be reviewed. */

export const ARTICLES = [
  {
    title: "Computer Science",
    outlet: "Programming in Python, C++ and Java, algorithms, and computational problem solving",
    link: "",
  },
  {
    title: "Artificial Intelligence",
    outlet: "How intelligent systems are built and applied to social-good problems",
    link: "",
  },
  {
    title: "Robotics & Engineering",
    outlet: "Arduino, sensor-driven systems, and engineering design in working prototypes",
    link: "",
  },
  {
    title: "Mathematics",
    outlet: "Logical reasoning and the quantitative foundations behind technical work",
    link: "",
  },
  {
    title: "Data & Analytics",
    outlet: "Data-driven problem solving and analytics applied to real-world questions",
    link: "",
  },
  {
    title: "Entrepreneurship & Innovation",
    outlet: "Business strategy, marketing, and taking new ideas from plan to pitch",
    link: "",
  },
];

/* ---- Service, leadership & activities ---- */

export const VOLUNTEER = {
  stats: [
    { value: "200+", label: "Students Led as Head Boy" },
    { value: "8+", label: "Years of Karate Training" },
    { value: "2", label: "School Leadership Roles" },
  ],
  orgs: [
    {
      name: "Blue Cross, Chennai",
      role: "Animal Rescue Volunteer · 2024 – Present",
      desc: "Assisting in the rehabilitation of distressed animals and coordinating with veterinary staff, alongside administrative and daily operational support. The experience directly prompted the Animal Rescue & Recovery App, built to cut manual reporting time for rescue teams.",
    },
    {
      name: "Gateway The Complete School — Head Boy",
      role: "Head Boy · 2026 – 2027",
      desc: "Elected to lead 200+ students, organizing inter-school STEM competitions and sports meets, managing large-scale event logistics, and developing conflict resolution skills across the student body.",
    },
    {
      name: "Gateway The Complete School — House Captain",
      role: "House Captain · 2025 – 2026",
      desc: "Led house activities and mentored peers across academic and extracurricular events, coordinating with faculty to represent the house in competitions and school assemblies.",
    },
  ],
};

/* ---- Athletics, activities & competitions (renders on the /sports route) ---- */

export const SPORTS = [
  {
    icon: "🥋",
    name: "Shotokan Karate",
    desc: "Black Belt (Shodan) after 8+ years of training at Shotokan Karate Dojo, Chennai (2017–2025), serving as a trainee and assistant at the dojo. The belt ranking system begins with the White Belt (10th/9th Kyū), followed by the Yellow Belt (9th/8th Kyū), Orange Belt (8th/7th Kyū), Green Belt (7th/6th Kyū), Blue Belt (6th/5th Kyū), and Purple Belt (5th/4th Kyū). The Brown Belt represents the 3rd, 2nd, and 1st Kyū levels, while the Black Belt (Shodan) signifies the 1st Dan level.",
  },
  {
    icon: "🎹",
    name: "Keyboard & Performance",
    desc: "Trinity College London Grade 6 Keyboard, with work on complex rhythmic patterns and advanced music theory. Performs at school events and graded examinations, and has taken part in Music Academy talent showcases and inter-school band competitions. The grading system progresses from the Initial Grade, covering basic techniques and note reading, through Grades 1–3, focusing on fundamental skills, rhythm, and fluency. Grades 4–6 develop musical interpretation, expression, and precision, while Grade 8 emphasizes advanced mastery and performance skills.",
  },
  {
    icon: "🏏",
    /* NOTE: portfolio PDF only — not on the resume. Confirm still current. */
    name: "Cricket",
    desc: "Team Captain and bowler. Represented the team in multiple club tournaments and captained the side during the 2021–22 season, developing strategic thinking and decision-making.",
  },
  {
    icon: "⚽",
    /* NOTE: portfolio PDF only — not on the resume. Confirm still current. */
    name: "Football",
    desc: "A football player since 2015, representing the school in inter-school tournaments as a defender, with a focus on teamwork, game strategy, and adaptability under competitive play.",
  },
];

/* ---- Skills ---- */

export const SKILLS = [
  {
    group: "Programming",
    items: ["Python (Proficient)", "C++", "Java", "HTML/CSS", "SQL"],
  },
  {
    group: "Software & Tools",
    items: ["Arduino (Robotics)", "Geolocation APIs", "Microcontrollers", "Database Design"],
  },
  {
    group: "Computer Science",
    items: ["Algorithms", "Data Structures", "Computational Thinking", "Backend Logic"],
  },
  {
    group: "Engineering & Analytics",
    items: ["Engineering Design", "Prototyping", "Sensor Calibration", "Data-Driven Problem Solving", "Design Thinking"],
  },
  {
    group: "Leadership & Business",
    items: ["Team Leadership", "Event Logistics", "Conflict Resolution", "Entrepreneurship", "Mentoring"],
  },
  {
    group: "Languages",
    items: ["English (Fluent)", "Telugu (Fluent)", "Tamil (Intermediate)", "Hindi (Intermediate)"],
  },
];

/* ---- Education ---- */

export const EDUCATION = [
  {
    school: "Gateway The Complete School",
    location: "Chennai, Tamil Nadu, India",
    /* CONFLICT: portfolio said Grade 11 AS Level; resume says Grade 12,
       IGCSE Program, graduating April 2027. Resume used. */
    level: "IGCSE Program · Grade 12 · Graduating April 2027",
    dates: "Graduating Apr 2027",
    gpa: "SAT: 1420",
    /* NOTE: AS-level grades are listed exactly as they appear on the resume.
       Decide whether to publish the full grade list on a public site —
       Chemistry (D) and Computer Science (C) may be better left off. */
    coursework: [
      "AS Level — Mathematics (B)",
      "AS Level — Physics (B)",
      "AS Level — Chemistry (D)",
      "AS Level — Computer Science (C)",
      "IGCSE — Mathematics (A+)",
      "IGCSE — Physics (A+)",
      "IGCSE — Chemistry (A+)",
      "IGCSE — Computer Science (A)",
    ],
  },
];

/* ---- Test scores ---- */
/* NOTE: the reference file exported an empty array, so no component shape was
   defined. The object keys below are my own — adjust to match your component. */

export const TEST_SCORES = [
  {
    test: "SAT",
    score: "1420",
    detail: "",
  },
];

/* ---- Looking ahead ---- */
/* Adapted from the portfolio PDF's "Personal Philosophy" section. */

export const LOOKING_AHEAD = [
  "I am driven by curiosity, discipline, and continuous improvement — whether solving a problem, learning a new concept, performing music, or competing in sports, I enjoy pushing myself beyond my comfort zone.",
  "I hope to continue exploring the intersection of technology, innovation, and problem-solving while contributing meaningfully to the communities and teams I am part of.",
];

export const FOOTER_NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Academic Enrichment", to: "/work" },
  { label: "Featured Projects", to: "/projects" },
  { label: "Areas of Interest", to: "/publications" },
  { label: "Achievements", to: "/awards" },
  { label: "Community & Leadership", to: "/volunteering" },
  { label: "Activities", to: "/sports" },
];

export const FOOTER_PROFILES = [
  { label: "LinkedIn", href: PROFILE.socials.linkedin },
];
