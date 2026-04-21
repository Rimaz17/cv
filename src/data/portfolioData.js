export const person = {
  name: 'Rimaz Saththar',
  role: 'Full-Stack Developer (Backend-Focused)',
  headline: 'I build scalable systems and high-impact software.',
  subHeadline:
    'Computer Science undergraduate blending backend engineering depth, startup execution, and elite QA performance.',
  email: 'rimaz.asm@gmail.com',
  github: 'https://github.com/Rimaz17',
  linkedin: 'https://www.linkedin.com/in/rimaz-saththar-704605333',
  cvPath: `${import.meta.env.BASE_URL}Rimaz_Saththar_CV.pdf`,
}

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
]

export const projects = [
  {
    title: 'LinkForge',
    stack: [
      'Node.js',
      'Express',
      'PostgreSQL',
      'Redis',
      'JWT',
      'bcrypt',
      'nanoid',
      'Docker',
      'Docker Compose',
      'React',
      'Vite',
      'Tailwind CSS',
    ],
    impact:
      'Implemented a cache-aside redirect architecture using Redis-first lookup with PostgreSQL fallback, significantly reducing database pressure on high-frequency short links and improving redirect latency.',
    highlights: [
      'Built JWT-authenticated URL creation with optional expiration dates and click-count tracking.',
      'Auto-initialized DB schema on container startup with full Docker Compose orchestration for API, PostgreSQL, and Redis.',
    ],
    github: 'https://github.com/Rimaz17/LinkForge.git',
    live: '',
  },
  {
    title: 'Clovio',
    stack: [
      'FastAPI (Python)',
      'React (TypeScript)',
      'PostgreSQL',
      'Groq/DeepSeek LLMs',
      'JWT',
      'Railway',
      'Vercel',
      'GitHub Actions',
    ],
    impact:
      'Built an AI-powered academic collaboration platform with automated milestone generation and workload-aware team orchestration.',
    highlights: [
      'Implemented an AI milestone engine that decomposes project descriptions into structured milestones, effort points, and suggested timelines.',
      'Built smart task assignment that matches tasks by skills and workload, including fairness quantification using a Gini Coefficient score.',
      'Set up CI/CD with backend deployment on Railway, frontend deployment on Vercel, and GitHub Actions-driven automation.',
    ],
    github: 'https://github.com/SDGP-Clovio/clovio-platform.git',
    live: 'https://www.clovio.app/',
  },
  {
    title: 'ShopSphere',
    stack: ['React 19', 'Node.js', 'Express', 'SQLite', 'Sequelize ORM', 'AWS Elastic Beanstalk'],
    impact:
      'Delivered a full API-driven buyer journey with product catalog, live search, cart management, checkout, order placement, and delivery tracking.',
    highlights: [
      'Deployed on AWS Elastic Beanstalk behind an Application Load Balancer with auto-scaling.',
      'Structured backend operations for consistent deployment and production behavior.',
    ],
    github: 'https://github.com/Rimaz17/ShopSphere.git',
    live: 'http://ecommerce-project-react-env.eba-kzpqz8sk.eu-north-1.elasticbeanstalk.com/',
  },
  {
    title: 'Task Manager REST API',
    stack: [
      'Python',
      'Django',
      'Django REST Framework',
      'JWT (simplejwt)',
      'SQLite',
      'Thunder Client',
    ],
    impact:
      'Engineered a secure multi-user REST API with JWT authentication and strict user-level data isolation.',
    highlights: [
      'Implemented advanced query support with status/priority/completion filters, full-text search, ordering, and pagination.',
      'Built endpoints to production REST conventions for maintainability and scale-readiness.',
    ],
    github: 'https://github.com/Rimaz17/TaskManager.git',
    live: '',
  },
  {
    title: 'Automated Price Intelligence System',
    stack: ['Python', 'Selenium', 'JSON', 'smtplib', 'Windows Task Scheduler'],
    impact:
      'Built Selenium-driven dynamic scraping for JavaScript-rendered pages where requests/BeautifulSoup workflows fail, using explicit waits to mimic real user behavior.',
    highlights: [
      'Maintained JSON-based price history and compared entries to detect significant price movement.',
      'Automated Gmail alert dispatch on price drops and scheduled execution through Windows Task Scheduler.',
    ],
    github: 'https://github.com/Rimaz17/PriceTracker.git',
    live: '',
  },
]

export const experience = [
  {
    period: 'Jan 2026 - Present',
    role: 'Co-Founder & Tech Lead',
    company: 'QuickBrix',
    summary:
      'Leading full-stack development of a multi-portal digital marketplace for construction supplies while driving startup execution and investor readiness.',
    points: [
      'Owning architecture and delivery using Flutter, Django, and PostgreSQL for MVP milestones.',
      'Managing a cross-functional team of 6 across frontend, backend, QA, and design.',
      'Integrating Google Maps, Firebase, and payment gateways while preparing investor pitch and financial readiness.',
    ],
  },
  {
    period: 'Aug 2022 - Present',
    role: 'Freelance Software QA Tester',
    company: 'Test IO, uTest, TesterWork, Testbirds',
    summary:
      'Diamond-tier tester with high-impact bug discovery on global consumer platforms and consistent top-ranking quality outcomes.',
    points: [
      'Reported 500+ verified bugs across major web/mobile platforms including Facebook, Instagram, and Canva.',
      'Ranked top 3 among 60+ testers in about 90% of active projects with multiple #1 placements for bug quality.',
      'Selected for specialized research teams targeting critical bugs on Facebook and Instagram; earned multiple client awards.',
      'Used Charles Proxy and Android SDK tools to capture logs and produce detailed reproduction-ready reports.',
    ],
  },
]

export const skills = [
  {
    category: 'Backend',
    items: ['Node.js', 'Python', 'Django', 'FastAPI', 'REST APIs', 'Microservices'],
  },
  {
    category: 'Frontend',
    items: ['React', 'Tailwind CSS', 'TypeScript', 'UI Architecture'],
  },
  {
    category: 'Data & Storage',
    items: ['PostgreSQL', 'Redis', 'MongoDB', 'Query Optimization'],
  },
  {
    category: 'DevOps & Cloud',
    items: ['Docker', 'AWS', 'CI/CD', 'Observability'],
  },
]

export const achievements = [
  {
    title: 'Diamond-Tier QA Excellence',
    detail: 'Recognized in top-tier performance brackets for competitive quality assurance testing outcomes.',
  },
  {
    title: '500+ Bugs Validated',
    detail: 'Uncovered and documented critical defects with reproducible evidence and actionable severity analysis.',
  },
  {
    title: 'Startup Engineering Leadership',
    detail: 'Steered product engineering decisions and delivery at QuickBrix under high-velocity constraints.',
  },
]
