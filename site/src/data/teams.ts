export interface Resource {
  title: string;
  url: string;
  description: string;
}

export interface RoadmapLevel {
  level: string;
  title: string;
  focus: string;
  timeframe: string;
}

export interface Interaction {
  role: string;
  description: string;
}

export interface Role {
  title: string;
  shortTitle: string;
  summary: string;
  responsibilities: string[];
  skills: string[];
  tools: string[];
  roadmap: RoadmapLevel[];
  interactions: Interaction[];
  bestPractices: string[];
  resources: Resource[];
}

export interface Team {
  id: string;
  name: string;
  originalName: string;
  color: string;
  bg: string;
  border: string;
  roles: Role[];
}

export const teams: Team[] = [
  {
    "id": "product-strategy",
    "name": "Product Strategy & Experience",
    "originalName": "Ideation & Strategy",
    "color": "text-cyan-400",
    "bg": "bg-cyan-500/10",
    "border": "border-cyan-500/20",
    "roles": [
      {
        "title": "Product Manager",
        "shortTitle": "PM",
        "summary": "Defines product vision, strategy, and roadmap while aligning engineering, design, and business stakeholders to deliver user and business value.",
        "responsibilities": [
          "Define product vision, strategy, and roadmap",
          "Prioritize features and manage the backlog",
          "Conduct market and competitive research",
          "Write requirements, user stories, and acceptance criteria",
          "Lead cross-functional execution and launches",
          "Measure product metrics and iterate based on data"
        ],
        "skills": [
          "Strategic thinking",
          "Data analysis",
          "Stakeholder management",
          "Agile/Scrum",
          "User empathy",
          "Roadmapping"
        ],
        "tools": [
          "Jira",
          "Productboard",
          "Figma",
          "Amplitude",
          "Confluence",
          "Slack"
        ],
        "roadmap": [
          {
            "level": "1",
            "title": "Associate Product Manager",
            "focus": "Learn fundamentals, support backlog and user research",
            "timeframe": "0–1 years"
          },
          {
            "level": "2",
            "title": "Product Manager",
            "focus": "Own a product area, define roadmap, and lead launches",
            "timeframe": "1–3 years"
          },
          {
            "level": "3",
            "title": "Senior Product Manager",
            "focus": "Drive strategy, mentor PMs, and own key metrics",
            "timeframe": "3–6 years"
          },
          {
            "level": "4",
            "title": "Director of Product",
            "focus": "Lead product domain and align with company strategy",
            "timeframe": "6–10 years"
          },
          {
            "level": "5",
            "title": "VP / Chief Product Officer",
            "focus": "Set company-wide product vision and portfolio",
            "timeframe": "10+ years"
          }
        ],
        "interactions": [
          {
            "role": "Engineering",
            "description": "Collaborate on feasibility, scope, and delivery."
          },
          {
            "role": "UX/UI Design",
            "description": "Align on user needs and design solutions."
          },
          {
            "role": "Product Marketing",
            "description": "Coordinate launches, positioning, and go-to-market."
          },
          {
            "role": "Executive Leadership",
            "description": "Present roadmap, metrics, and strategic bets."
          }
        ],
        "bestPractices": [
          "Prioritize outcomes over outputs",
          "Validate assumptions with user research",
          "Keep roadmaps flexible and transparent",
          "Communicate decisions and trade-offs clearly",
          "Measure success with clear KPIs"
        ],
        "resources": [
          {
            "title": "Inspired",
            "url": "https://www.svpg.com/inspired/",
            "description": "Classic product management principles by Marty Cagan."
          },
          {
            "title": "Cracking the PM Interview",
            "url": "https://www.amazon.com/Cracking-PM-Interview-Product-Technology/dp/0984782818",
            "description": "Interview and career guide for PMs."
          },
          {
            "title": "ProductPlan Blog",
            "url": "https://www.productplan.com/blog/",
            "description": "Roadmapping and product strategy resources."
          },
          {
            "title": "Mind the Product",
            "url": "https://www.mindtheproduct.com/",
            "description": "Product management community and articles."
          },
          {
            "title": "Lenny's Newsletter",
            "url": "https://www.lennysnewsletter.com/",
            "description": "Product advice and frameworks from Lenny Rachitsky."
          }
        ]
      },
      {
        "title": "Product Marketing Manager",
        "shortTitle": "PMM",
        "summary": "Bridges product, marketing, and sales to craft positioning, messaging, and go-to-market strategies that drive adoption and revenue.",
        "responsibilities": [
          "Develop positioning, messaging, and value propositions",
          "Plan and execute product launches",
          "Conduct market, competitor, and customer research",
          "Create sales enablement content and training",
          "Collaborate on pricing and packaging",
          "Track campaign performance and optimize GTM"
        ],
        "skills": [
          "Storytelling",
          "Market research",
          "Messaging and positioning",
          "Cross-functional collaboration",
          "Data analysis",
          "Project management"
        ],
        "tools": [
          "Salesforce",
          "HubSpot",
          "Marketo",
          "Gong",
          "Notion",
          "Google Analytics"
        ],
        "roadmap": [
          {
            "level": "1",
            "title": "Associate Product Marketing Manager",
            "focus": "Support launches, research, and content creation",
            "timeframe": "0–1 years"
          },
          {
            "level": "2",
            "title": "Product Marketing Manager",
            "focus": "Own product launches and messaging for a product line",
            "timeframe": "1–3 years"
          },
          {
            "level": "3",
            "title": "Senior Product Marketing Manager",
            "focus": "Lead portfolio strategy and drive revenue impact",
            "timeframe": "3–6 years"
          },
          {
            "level": "4",
            "title": "Director of Product Marketing",
            "focus": "Build team and align GTM with company goals",
            "timeframe": "6–10 years"
          },
          {
            "level": "5",
            "title": "VP Marketing / CMO",
            "focus": "Own global marketing and brand strategy",
            "timeframe": "10+ years"
          }
        ],
        "interactions": [
          {
            "role": "Product Management",
            "description": "Translate roadmap into market-facing messaging."
          },
          {
            "role": "Sales",
            "description": "Enable reps with collateral, training, and competitive intel."
          },
          {
            "role": "Demand Generation",
            "description": "Align campaigns with launch goals."
          },
          {
            "role": "Customer Success",
            "description": "Gather feedback and identify expansion opportunities."
          }
        ],
        "bestPractices": [
          "Know the customer deeply",
          "Keep messaging simple and differentiated",
          "Align launches across teams early",
          "Use data to refine GTM",
          "Iterate based on sales and customer feedback"
        ],
        "resources": [
          {
            "title": "Product Marketing Alliance",
            "url": "https://productmarketingalliance.com/",
            "description": "PMM community, courses, and templates."
          },
          {
            "title": "Crossing the Chasm",
            "url": "https://www.amazon.com/Crossing-Chasm-3rd-Disruptive-Mainstream/dp/0062292986",
            "description": "Framework for bringing tech products to market."
          },
          {
            "title": "HubSpot Marketing Blog",
            "url": "https://blog.hubspot.com/marketing",
            "description": "GTM and inbound marketing resources."
          },
          {
            "title": "SaaStr",
            "url": "https://www.saastr.com/",
            "description": "B2B SaaS growth and marketing insights."
          },
          {
            "title": "Pragmatic Institute",
            "url": "https://www.pragmaticinstitute.com/",
            "description": "Product marketing and management training."
          }
        ]
      },
      {
        "title": "UX/UI Designer & User Researcher",
        "shortTitle": "UX",
        "summary": "Researches user needs, designs intuitive interfaces, and validates solutions to create seamless digital experiences.",
        "responsibilities": [
          "Conduct user interviews, surveys, and usability tests",
          "Create personas, journey maps, and wireframes",
          "Design high-fidelity interfaces and prototypes",
          "Build and maintain design systems",
          "Collaborate with product and engineering",
          "Validate designs with iterative user feedback"
        ],
        "skills": [
          "User research",
          "Wireframing and prototyping",
          "Visual design",
          "Interaction design",
          "Information architecture",
          "Empathy and communication"
        ],
        "tools": [
          "Figma",
          "Sketch",
          "Maze",
          "Hotjar",
          "Adobe XD",
          "UserTesting"
        ],
        "roadmap": [
          {
            "level": "1",
            "title": "Junior UX/UI Designer",
            "focus": "Learn design tools, support research and wireframes",
            "timeframe": "0–1 years"
          },
          {
            "level": "2",
            "title": "UX/UI Designer",
            "focus": "Own design tasks and run usability tests",
            "timeframe": "1–3 years"
          },
          {
            "level": "3",
            "title": "Senior Product Designer",
            "focus": "Lead end-to-end product design and mentor juniors",
            "timeframe": "3–6 years"
          },
          {
            "level": "4",
            "title": "Lead UX / Design Manager",
            "focus": "Drive design strategy and team processes",
            "timeframe": "6–10 years"
          },
          {
            "level": "5",
            "title": "Director / VP of Design",
            "focus": "Shape design culture and org-wide UX vision",
            "timeframe": "10+ years"
          }
        ],
        "interactions": [
          {
            "role": "Product Manager",
            "description": "Align user problems with product priorities."
          },
          {
            "role": "Engineering",
            "description": "Hand off designs and collaborate on feasibility."
          },
          {
            "role": "Technical Writer",
            "description": "Ensure UI copy and docs are clear."
          },
          {
            "role": "User Researcher",
            "description": "Synthesize insights that inform design decisions."
          }
        ],
        "bestPractices": [
          "Start with user research, not pixels",
          "Design for accessibility and inclusion",
          "Maintain consistency through design systems",
          "Prototype early and test often",
          "Document design rationale clearly"
        ],
        "resources": [
          {
            "title": "Nielsen Norman Group",
            "url": "https://www.nngroup.com/",
            "description": "UX research and usability guidance."
          },
          {
            "title": "Figma Best Practices",
            "url": "https://help.figma.com/hc/en-us/categories/360002051613",
            "description": "Official Figma tutorials and guides."
          },
          {
            "title": "Don't Make Me Think",
            "url": "https://www.amazon.com/Dont-Make-Me-Think-Usability/dp/0321965515",
            "description": "Classic usability book by Steve Krug."
          },
          {
            "title": "Laws of UX",
            "url": "https://lawsofux.com/",
            "description": "Principles for designing better interfaces."
          },
          {
            "title": "UX Design Institute",
            "url": "https://www.uxdesigninstitute.com/",
            "description": "Professional UX courses and certifications."
          }
        ]
      },
      {
        "title": "Technical Writer",
        "shortTitle": "TW",
        "summary": "Creates clear, accurate documentation and enablement content that helps users adopt and succeed with the product.",
        "responsibilities": [
          "Write and maintain product and API documentation",
          "Create onboarding guides, tutorials, and FAQs",
          "Collaborate with engineers and PMs on release docs",
          "Validate accuracy through hands-on testing",
          "Maintain information architecture and navigation",
          "Use analytics to improve content quality"
        ],
        "skills": [
          "Technical writing",
          "Information architecture",
          "Docs-as-code workflows",
          "API literacy",
          "Editing and quality control",
          "Stakeholder interviewing"
        ],
        "tools": [
          "GitHub",
          "Markdown",
          "Docusaurus",
          "Confluence",
          "Postman",
          "Vale"
        ],
        "roadmap": [
          {
            "level": "1",
            "title": "Junior Technical Writer",
            "focus": "Write clear docs and learn product basics",
            "timeframe": "0–1 years"
          },
          {
            "level": "2",
            "title": "Technical Writer",
            "focus": "Own documentation areas and release notes",
            "timeframe": "1–3 years"
          },
          {
            "level": "3",
            "title": "Senior Technical Writer",
            "focus": "Lead doc strategy, IA, and quality standards",
            "timeframe": "3–6 years"
          },
          {
            "level": "4",
            "title": "Documentation Lead / Principal",
            "focus": "Govern docs-as-code systems and mentor writers",
            "timeframe": "6–10 years"
          },
          {
            "level": "5",
            "title": "Director / Head of Documentation",
            "focus": "Own global documentation strategy and operations",
            "timeframe": "10+ years"
          }
        ],
        "interactions": [
          {
            "role": "Engineering",
            "description": "Review technical accuracy and validate examples."
          },
          {
            "role": "Product Manager",
            "description": "Align docs with roadmap and feature releases."
          },
          {
            "role": "UX/UI Designer",
            "description": "Ensure consistent terminology and in-product copy."
          },
          {
            "role": "Customer Support",
            "description": "Turn ticket themes into helpful docs."
          }
        ],
        "bestPractices": [
          "Write for the reader's task, not the product",
          "Keep docs accurate, concise, and scannable",
          "Use docs-as-code for version control",
          "Validate instructions in real environments",
          "Measure and improve based on user feedback"
        ],
        "resources": [
          {
            "title": "Write the Docs",
            "url": "https://www.writethedocs.org/",
            "description": "Global technical writing community."
          },
          {
            "title": "Docs-as-Code",
            "url": "https://www.writethedocs.org/guide/docs-as-code/",
            "description": "Approach for managing docs with developer tools."
          },
          {
            "title": "I'd Rather Be Writing",
            "url": "https://idratherbewriting.com/",
            "description": "Technical writing blog by Tom Johnson."
          },
          {
            "title": "Google Developer Documentation Style Guide",
            "url": "https://developers.google.com/style",
            "description": "Widely used writing and style reference."
          },
          {
            "title": "Docusaurus",
            "url": "https://docusaurus.io/",
            "description": "Open-source documentation site generator."
          }
        ]
      }
    ]
  },
  {
    "id": "engineering",
    "name": "Engineering & Architecture",
    "originalName": "Development & Engineering",
    "color": "text-violet-400",
    "bg": "bg-violet-500/10",
    "border": "border-violet-500/20",
    "roles": [
      {
        "title": "System Architect / Solutions Architect",
        "shortTitle": "Architect",
        "summary": "Designs high-level system structures and technology solutions that align business goals with scalable, reliable engineering.",
        "responsibilities": [
          "Define overall system architecture and tech stack",
          "Create solution designs for business requirements",
          "Ensure scalability, security, and performance",
          "Evaluate and recommend platforms and tools",
          "Align architecture with business and product goals",
          "Guide engineering teams on implementation standards"
        ],
        "skills": [
          "System design",
          "Cloud platforms",
          "Microservices",
          "API design",
          "Security principles",
          "Stakeholder communication"
        ],
        "tools": [
          "AWS/Azure/GCP",
          "Kubernetes",
          "Terraform",
          "ArchiMate",
          "Draw.io",
          "Confluence"
        ],
        "roadmap": [
          {
            "level": "1",
            "title": "Junior Architect",
            "focus": "Learn design patterns and assist in solution documentation",
            "timeframe": "0–2 years"
          },
          {
            "level": "2",
            "title": "Solutions Architect",
            "focus": "Design end-to-end solutions for specific products or projects",
            "timeframe": "3–5 years"
          },
          {
            "level": "3",
            "title": "Senior Solutions Architect",
            "focus": "Lead complex enterprise architectures and mentor teams",
            "timeframe": "5–8 years"
          },
          {
            "level": "4",
            "title": "Principal Architect",
            "focus": "Define organization-wide architectural standards and strategy",
            "timeframe": "8–12 years"
          },
          {
            "level": "5",
            "title": "Chief Architect",
            "focus": "Drive technology vision across the entire company",
            "timeframe": "12+ years"
          }
        ],
        "interactions": [
          {
            "role": "Product Manager",
            "description": "Translate business requirements into technical architecture"
          },
          {
            "role": "Engineering Manager",
            "description": "Ensure feasibility and alignment with delivery timelines"
          },
          {
            "role": "Software Engineers",
            "description": "Provide guidance on implementation and coding standards"
          },
          {
            "role": "DevOps / SRE",
            "description": "Align infrastructure with system reliability goals"
          }
        ],
        "bestPractices": [
          "Design for scalability and failure",
          "Document decisions with ADRs",
          "Prefer proven over trendy technologies",
          "Involve security early in design",
          "Validate designs with prototypes and reviews"
        ],
        "resources": [
          {
            "title": "AWS Well-Architected Framework",
            "url": "https://aws.amazon.com/architecture/well-architected/",
            "description": "Guidance for designing secure, resilient, and efficient systems on AWS"
          },
          {
            "title": "Martin Fowler's Software Architecture Guide",
            "url": "https://martinfowler.com/architecture/",
            "description": "Articles and patterns on enterprise architecture"
          },
          {
            "title": "Designing Data-Intensive Applications",
            "url": "https://dataintensive.net/",
            "description": "Book on building reliable, scalable, and maintainable systems"
          },
          {
            "title": "The Twelve-Factor App",
            "url": "https://12factor.net/",
            "description": "Methodology for building modern SaaS applications"
          },
          {
            "title": "TOGAF Standard",
            "url": "https://www.opengroup.org/togaf",
            "description": "Enterprise architecture framework and methodology"
          }
        ]
      },
      {
        "title": "Software Engineer (Frontend/Backend/Full-Stack)",
        "shortTitle": "Software Engineer",
        "summary": "Builds, tests, and maintains software applications across client-side, server-side, or both.",
        "responsibilities": [
          "Write clean, maintainable, and efficient code",
          "Build user interfaces or server-side logic",
          "Implement and consume APIs",
          "Collaborate on technical design and code reviews",
          "Debug and resolve production issues",
          "Contribute to automated testing and CI/CD pipelines"
        ],
        "skills": [
          "Programming languages",
          "Data structures and algorithms",
          "API development",
          "Version control",
          "Testing and debugging",
          "System design basics"
        ],
        "tools": [
          "VS Code / IntelliJ",
          "Git/GitHub",
          "React/Angular/Vue",
          "Node.js/Python/Java",
          "Docker",
          "Jest/Postman"
        ],
        "roadmap": [
          {
            "level": "1",
            "title": "Junior Engineer",
            "focus": "Write features with mentorship and learn codebase conventions",
            "timeframe": "0–2 years"
          },
          {
            "level": "2",
            "title": "Mid-Level Engineer",
            "focus": "Own features independently and improve code quality",
            "timeframe": "2–4 years"
          },
          {
            "level": "3",
            "title": "Senior Engineer",
            "focus": "Lead technical design and mentor junior engineers",
            "timeframe": "4–7 years"
          },
          {
            "level": "4",
            "title": "Staff Engineer",
            "focus": "Drive cross-team technical initiatives and architecture",
            "timeframe": "7–10 years"
          },
          {
            "level": "5",
            "title": "Principal Engineer",
            "focus": "Set technical direction and influence engineering strategy",
            "timeframe": "10+ years"
          }
        ],
        "interactions": [
          {
            "role": "Product Manager",
            "description": "Clarify requirements and estimate delivery effort"
          },
          {
            "role": "UX/UI Designer",
            "description": "Implement user-facing designs and interactions"
          },
          {
            "role": "QA Engineer",
            "description": "Resolve bugs and improve test coverage"
          },
          {
            "role": "DevOps Engineer",
            "description": "Deploy, monitor, and troubleshoot applications"
          }
        ],
        "bestPractices": [
          "Write tests alongside production code",
          "Keep functions and components small and focused",
          "Review code thoroughly and respectfully",
          "Document APIs and complex logic",
          "Automate repetitive tasks and deployments"
        ],
        "resources": [
          {
            "title": "MDN Web Docs",
            "url": "https://developer.mozilla.org/",
            "description": "Comprehensive documentation for web technologies"
          },
          {
            "title": "freeCodeCamp",
            "url": "https://www.freecodecamp.org/",
            "description": "Free coding curriculum for frontend, backend, and full-stack"
          },
          {
            "title": "LeetCode",
            "url": "https://leetcode.com/",
            "description": "Practice platform for coding and algorithm challenges"
          },
          {
            "title": "Clean Code by Robert C. Martin",
            "url": "https://www.oreilly.com/library/view/clean-code/9780136083238/",
            "description": "Book on writing readable and maintainable code"
          },
          {
            "title": "The Odin Project",
            "url": "https://www.theodinproject.com/",
            "description": "Full-stack web development curriculum"
          }
        ]
      },
      {
        "title": "Database Administrator (DBA)",
        "shortTitle": "DBA",
        "summary": "Manages, secures, and optimizes databases to ensure data availability, integrity, and performance.",
        "responsibilities": [
          "Install, configure, and upgrade database systems",
          "Monitor performance and tune queries",
          "Implement backup, recovery, and disaster recovery plans",
          "Ensure data security and access controls",
          "Automate maintenance and monitoring tasks",
          "Support developers with schema and query design"
        ],
        "skills": [
          "SQL and relational databases",
          "Query optimization",
          "Backup and recovery",
          "Database security",
          "NoSQL systems",
          "Performance tuning"
        ],
        "tools": [
          "PostgreSQL/MySQL/SQL Server",
          "MongoDB",
          "AWS RDS/Aurora",
          "pgAdmin/DBeaver",
          "Terraform",
          "Datadog/Prometheus"
        ],
        "roadmap": [
          {
            "level": "1",
            "title": "Junior DBA",
            "focus": "Assist with backups, monitoring, and basic troubleshooting",
            "timeframe": "0–2 years"
          },
          {
            "level": "2",
            "title": "DBA",
            "focus": "Manage production databases and optimize queries",
            "timeframe": "2–5 years"
          },
          {
            "level": "3",
            "title": "Senior DBA",
            "focus": "Design HA/DR strategies and lead migrations",
            "timeframe": "5–8 years"
          },
          {
            "level": "4",
            "title": "Lead DBA",
            "focus": "Define database standards and govern data practices",
            "timeframe": "8–12 years"
          },
          {
            "level": "5",
            "title": "Principal Database Architect",
            "focus": "Shape enterprise data strategy and platform architecture",
            "timeframe": "12+ years"
          }
        ],
        "interactions": [
          {
            "role": "Software Engineers",
            "description": "Advise on schema design, indexing, and query performance"
          },
          {
            "role": "Data Engineers",
            "description": "Ensure reliable data pipelines and storage foundations"
          },
          {
            "role": "Security Team",
            "description": "Implement access controls and compliance measures"
          },
          {
            "role": "DevOps / SRE",
            "description": "Maintain database availability and incident response"
          }
        ],
        "bestPractices": [
          "Automate backups and test restores regularly",
          "Index wisely and monitor query performance",
          "Apply least-privilege access controls",
          "Keep database versions patched and secure",
          "Document schemas, procedures, and runbooks"
        ],
        "resources": [
          {
            "title": "PostgreSQL Documentation",
            "url": "https://www.postgresql.org/docs/",
            "description": "Official PostgreSQL reference and administration guide"
          },
          {
            "title": "Use The Index, Luke",
            "url": "https://use-the-index-luke.com/",
            "description": "Free guide to SQL indexing and performance"
          },
          {
            "title": "SQL Server Docs",
            "url": "https://docs.microsoft.com/en-us/sql/",
            "description": "Microsoft SQL Server administration and development docs"
          },
          {
            "title": "Database of Databases",
            "url": "https://dbdb.io/",
            "description": "Reference for comparing database management systems"
          },
          {
            "title": "MongoDB University",
            "url": "https://university.mongodb.com/",
            "description": "Free courses on MongoDB administration and development"
          }
        ]
      },
      {
        "title": "Quality Assurance (QA) Engineer / Tester",
        "shortTitle": "QA Engineer",
        "summary": "Ensures software meets quality requirements by designing, executing, and automating tests throughout the development lifecycle.",
        "responsibilities": [
          "Create and maintain test plans, test cases, and test data",
          "Execute manual and automated functional, regression, and exploratory tests",
          "Identify, document, and track bugs through resolution",
          "Collaborate with developers and product managers on requirements",
          "Integrate automated tests into CI/CD pipelines",
          "Analyze test results and report on quality metrics"
        ],
        "skills": [
          "Manual and automated testing techniques",
          "Test design and clear bug reporting",
          "Programming/scripting with Python, JavaScript, or Java",
          "API and database testing including SQL",
          "CI/CD and version control with Git",
          "Analytical thinking and attention to detail"
        ],
        "tools": [
          "Playwright / Selenium / Cypress",
          "Jira / TestRail / Zephyr",
          "Postman / REST Assured",
          "GitHub Actions / Jenkins",
          "Browser DevTools",
          "SQL clients / Docker"
        ],
        "roadmap": [
          {
            "level": "1",
            "title": "Junior QA Engineer / Tester",
            "focus": "Learn testing fundamentals, manual testing, and bug reporting.",
            "timeframe": "0-1 year"
          },
          {
            "level": "2",
            "title": "QA Engineer",
            "focus": "Build automation frameworks, API tests, and CI integration.",
            "timeframe": "1-3 years"
          },
          {
            "level": "3",
            "title": "Senior QA Engineer",
            "focus": "Design test architecture, mentor others, and broaden coverage.",
            "timeframe": "3-5 years"
          },
          {
            "level": "4",
            "title": "QA Lead / SDET",
            "focus": "Define test strategy, build frameworks, and drive quality culture.",
            "timeframe": "5-7 years"
          },
          {
            "level": "5",
            "title": "QA Manager / Director of Quality",
            "focus": "Lead quality organization, risk management, and metrics.",
            "timeframe": "7+ years"
          }
        ],
        "interactions": [
          {
            "role": "Software Engineers",
            "description": "Pair on bug reproduction, clarify requirements, and review fixes."
          },
          {
            "role": "Product Managers",
            "description": "Refine acceptance criteria and align test coverage with user outcomes."
          },
          {
            "role": "DevOps / SRE",
            "description": "Integrate tests into pipelines and monitor production quality signals."
          },
          {
            "role": "UX / Designers",
            "description": "Validate usability, accessibility, and design consistency."
          }
        ],
        "bestPractices": [
          "Shift-left testing and early requirement review",
          "Write clear, reproducible bug reports with steps and evidence",
          "Automate regression suites and keep tests maintainable",
          "Use risk-based prioritization for test coverage",
          "Maintain traceability between requirements, tests, and defects"
        ],
        "resources": [
          {
            "title": "Coursera QA Engineer Guide",
            "url": "https://www.coursera.org/articles/quality-assurance-engineer",
            "description": "Overview of QA duties, skills, and career outlook."
          },
          {
            "title": "ISTQB Foundation Level",
            "url": "https://www.istqb.org/",
            "description": "Industry-recognized software testing certification body."
          },
          {
            "title": "Ministry of Testing",
            "url": "https://www.ministryoftesting.com/",
            "description": "Community, courses, and resources for software testers."
          },
          {
            "title": "Playwright Documentation",
            "url": "https://playwright.dev/",
            "description": "Modern cross-browser automation library and testing guide."
          },
          {
            "title": "Postman Learning Center",
            "url": "https://learning.postman.com/",
            "description": "API testing tutorials and best practices."
          }
        ]
      },
      {
        "title": "Forward Deployed Engineer (FDE)",
        "shortTitle": "FDE",
        "summary": "Embeds with customers to build production-grade solutions using the company's platform while feeding field insights back to product teams.",
        "responsibilities": [
          "Embed with customers to understand workflows and requirements",
          "Design and ship production code in client environments",
          "Translate business problems into scalable platform solutions",
          "Build data pipelines, integrations, and AI/LLM applications",
          "Contribute reusable components and learnings to the core product",
          "Collaborate with sales and customer success to expand adoption"
        ],
        "skills": [
          "Full-stack and data engineering with Python, SQL, and JavaScript/TypeScript",
          "Customer-facing communication and consulting",
          "Rapid prototyping and problem decomposition",
          "Cloud and containerization with AWS/Azure/GCP, Docker, and Kubernetes",
          "AI/LLM integration, RAG, and orchestration",
          "Systems thinking and end-to-end ownership"
        ],
        "tools": [
          "Palantir Foundry / AIP or equivalent platforms",
          "Python / PySpark / SQL",
          "Docker / Kubernetes / Terraform",
          "Git / GitHub / CI-CD pipelines",
          "LLM APIs / vector databases / orchestration frameworks",
          "Cloud consoles for AWS, Azure, and GCP"
        ],
        "roadmap": [
          {
            "level": "1",
            "title": "Junior Forward Deployed Engineer",
            "focus": "Learn platform internals and support customer implementations.",
            "timeframe": "0-1 year"
          },
          {
            "level": "2",
            "title": "Forward Deployed Engineer",
            "focus": "Own customer use cases end-to-end and build pipelines and apps.",
            "timeframe": "1-3 years"
          },
          {
            "level": "3",
            "title": "Senior Forward Deployed Engineer",
            "focus": "Lead complex deployments, mentor others, and shape reusable patterns.",
            "timeframe": "3-5 years"
          },
          {
            "level": "4",
            "title": "Staff / Principal FDE",
            "focus": "Drive platform strategy, architecture, and cross-customer playbooks.",
            "timeframe": "5-7 years"
          },
          {
            "level": "5",
            "title": "FDE Manager / Director",
            "focus": "Scale the FDE organization, set delivery standards, and influence roadmap.",
            "timeframe": "7+ years"
          }
        ],
        "interactions": [
          {
            "role": "Customers / End Users",
            "description": "Co-locate or embed to discover pain points and validate solutions."
          },
          {
            "role": "Product Managers",
            "description": "Channel field feedback into roadmap priorities and feature requirements."
          },
          {
            "role": "Software Engineers / Platform Teams",
            "description": "Contribute code, reusable modules, and integration patterns."
          },
          {
            "role": "Sales / Customer Success",
            "description": "Support expansion, proof-of-value, and successful onboarding."
          }
        ],
        "bestPractices": [
          "Ship working production code, not just demos",
          "Document reusable patterns and customer playbooks",
          "Maintain tight feedback loops between field and product",
          "Decompose ambiguous problems into scoped milestones",
          "Prioritize customer outcomes and operational stability"
        ],
        "resources": [
          {
            "title": "Palantir Careers - FDE",
            "url": "https://www.palantir.com/careers/",
            "description": "Palantir's forward deployed engineering roles and culture."
          },
          {
            "title": "JADA Squad FDE Guide",
            "url": "https://www.jadasquad.com/blog/forward-deployed-engineer",
            "description": "Breakdown of FDE responsibilities and career path."
          },
          {
            "title": "Forward Deployed AI Engineer Guide",
            "url": "https://www.sundeepteki.org/advice/forward-deployed-ai-engineer",
            "description": "Deep dive into AI-era FDE skills and implementations."
          },
          {
            "title": "Palantir Foundry Documentation",
            "url": "https://www.palantir.com/docs/foundry/",
            "description": "Official docs for the Foundry data platform."
          },
          {
            "title": "Forward Deployed Engineer Job Example",
            "url": "https://www.fwddeploy.com/jobs/palantir-forward-deployed-engineer-fde-9e392865",
            "description": "Sample FDE job description and requirements."
          }
        ]
      }
    ]
  },
  {
    "id": "operations",
    "name": "Platform Operations & Customer Success",
    "originalName": "Deployment & Operations",
    "color": "text-emerald-400",
    "bg": "bg-emerald-500/10",
    "border": "border-emerald-500/20",
    "roles": [
      {
        "title": "DevOps Engineer",
        "shortTitle": "DevOps",
        "summary": "Bridges development and operations to automate, deploy, and maintain reliable software systems.",
        "responsibilities": [
          "Build and maintain CI/CD pipelines",
          "Manage cloud infrastructure and IaC",
          "Monitor system health and reliability",
          "Automate deployments and rollback procedures",
          "Collaborate with developers on release workflows",
          "Troubleshoot production incidents"
        ],
        "skills": [
          "Linux system administration",
          "Scripting (Python/Bash)",
          "Container orchestration",
          "Cloud platform expertise",
          "Infrastructure as Code",
          "Monitoring and observability"
        ],
        "tools": [
          "Docker",
          "Kubernetes",
          "Terraform",
          "Jenkins/GitHub Actions",
          "AWS/Azure/GCP",
          "Prometheus/Grafana"
        ],
        "roadmap": [
          {
            "level": "1",
            "title": "Junior DevOps Engineer",
            "focus": "Learn Linux, Git, scripting, and cloud basics",
            "timeframe": "0-2 years"
          },
          {
            "level": "2",
            "title": "DevOps Engineer",
            "focus": "Build CI/CD pipelines and manage containerized workloads",
            "timeframe": "2-4 years"
          },
          {
            "level": "3",
            "title": "Senior DevOps Engineer",
            "focus": "Architect infrastructure, implement IaC, and optimize reliability",
            "timeframe": "4-6 years"
          },
          {
            "level": "4",
            "title": "DevOps Lead / Architect",
            "focus": "Design platform strategy and mentor teams",
            "timeframe": "6-9 years"
          },
          {
            "level": "5",
            "title": "Principal DevOps / Platform Director",
            "focus": "Drive engineering efficiency and cloud strategy",
            "timeframe": "9+ years"
          }
        ],
        "interactions": [
          {
            "role": "Software Engineers",
            "description": "Enable fast, reliable deployments and resolve environment issues"
          },
          {
            "role": "Security Engineers",
            "description": "Integrate security scanning and compliance into pipelines"
          },
          {
            "role": "Technical Support",
            "description": "Provide runbooks and infrastructure context for incidents"
          },
          {
            "role": "Product Managers",
            "description": "Align release schedules with infrastructure capacity"
          }
        ],
        "bestPractices": [
          "Automate repetitive tasks",
          "Manage infrastructure as code for all environments",
          "Monitor everything with actionable alerts",
          "Practice immutable deployments",
          "Document runbooks and postmortems"
        ],
        "resources": [
          {
            "title": "DevOps Roadmap",
            "url": "https://roadmap.sh/devops",
            "description": "Interactive guide to DevOps skills and career progression"
          },
          {
            "title": "The Phoenix Project",
            "url": "https://itrevolution.com/the-phoenix-project/",
            "description": "Classic book on DevOps principles and lean IT"
          },
          {
            "title": "AWS DevOps Blog",
            "url": "https://aws.amazon.com/blogs/devops/",
            "description": "Best practices and updates for AWS DevOps practitioners"
          },
          {
            "title": "Kubernetes Documentation",
            "url": "https://kubernetes.io/docs/home/",
            "description": "Official guides for container orchestration"
          },
          {
            "title": "Terraform Tutorials",
            "url": "https://developer.hashicorp.com/terraform/tutorials",
            "description": "Hands-on lessons for infrastructure as code"
          }
        ]
      },
      {
        "title": "Security Engineer",
        "shortTitle": "Security",
        "summary": "Protects systems, networks, and data by designing and operating defensive security controls.",
        "responsibilities": [
          "Design and maintain security architecture",
          "Perform vulnerability assessments and patching",
          "Monitor for threats and incidents",
          "Implement identity and access management",
          "Conduct security reviews of code and infrastructure",
          "Ensure compliance with security standards"
        ],
        "skills": [
          "Network security",
          "Threat modeling",
          "Incident response",
          "Cryptography fundamentals",
          "Risk assessment",
          "Secure coding practices"
        ],
        "tools": [
          "SIEM (Splunk/Elastic)",
          "Firewall and IDS/IPS",
          "Vulnerability scanners",
          "HashiCorp Vault",
          "Penetration testing tools",
          "Cloud security services"
        ],
        "roadmap": [
          {
            "level": "1",
            "title": "Junior Security Engineer",
            "focus": "Learn networking, operating systems, and security fundamentals",
            "timeframe": "0-2 years"
          },
          {
            "level": "2",
            "title": "Security Engineer",
            "focus": "Operate SIEM, conduct vulnerability scans, and respond to alerts",
            "timeframe": "2-4 years"
          },
          {
            "level": "3",
            "title": "Senior Security Engineer",
            "focus": "Design security controls and lead incident response",
            "timeframe": "4-6 years"
          },
          {
            "level": "4",
            "title": "Security Architect / Lead",
            "focus": "Architect enterprise security programs and mentor analysts",
            "timeframe": "6-9 years"
          },
          {
            "level": "5",
            "title": "Principal Security Engineer / CISO",
            "focus": "Define security strategy and governance",
            "timeframe": "9+ years"
          }
        ],
        "interactions": [
          {
            "role": "DevOps Engineers",
            "description": "Embed security controls into CI/CD and cloud infrastructure"
          },
          {
            "role": "Software Engineers",
            "description": "Review code and guide secure development practices"
          },
          {
            "role": "IT Operations",
            "description": "Coordinate patching, logging, and network segmentation"
          },
          {
            "role": "Legal/Compliance",
            "description": "Ensure controls meet regulatory requirements"
          }
        ],
        "bestPractices": [
          "Shift-left security in development",
          "Enforce least privilege access",
          "Run regular patching and vulnerability scans",
          "Centralize logging and monitoring",
          "Document incident response playbooks"
        ],
        "resources": [
          {
            "title": "Cyber Security Roadmap",
            "url": "https://roadmap.sh/cyber-security",
            "description": "Interactive roadmap for cyber security careers"
          },
          {
            "title": "NIST Cybersecurity Framework",
            "url": "https://www.nist.gov/cyberframework",
            "description": "Guidance for managing cybersecurity risk"
          },
          {
            "title": "OWASP Top 10",
            "url": "https://owasp.org/www-project-top-ten/",
            "description": "Standard awareness document for web application security"
          },
          {
            "title": "Cloud Security Engineer Roadmap",
            "url": "https://pwnedlabs.io/roadmaps/cloud-security-engineer/roadmap.pdf",
            "description": "Step-by-step guide to cloud security engineering"
          },
          {
            "title": "SANS Reading Room",
            "url": "https://www.sans.org/reading-room/",
            "description": "Whitepapers on security tools, threats, and practices"
          }
        ]
      },
      {
        "title": "Technical Support / Customer Success Manager",
        "shortTitle": "Support & Success",
        "summary": "Helps customers adopt the product, resolve issues, and maximize long-term value.",
        "responsibilities": [
          "Resolve technical support tickets",
          "Guide customers through onboarding and adoption",
          "Monitor customer health and satisfaction",
          "Drive renewals and reduce churn",
          "Create knowledge base and training content",
          "Advocate customer needs to product and engineering"
        ],
        "skills": [
          "Active listening and empathy",
          "Technical troubleshooting",
          "Communication and negotiation",
          "CRM and data literacy",
          "Project management",
          "Product expertise"
        ],
        "tools": [
          "Zendesk / Freshdesk",
          "Salesforce / HubSpot CRM",
          "Gainsight / ChurnZero",
          "Slack / Microsoft Teams",
          "Confluence / Notion",
          "Analytics dashboards"
        ],
        "roadmap": [
          {
            "level": "1",
            "title": "Support Specialist / Associate CSM",
            "focus": "Learn product, handle tickets, and build customer rapport",
            "timeframe": "0-2 years"
          },
          {
            "level": "2",
            "title": "Technical Support Engineer / CSM",
            "focus": "Solve complex issues and manage a portfolio of accounts",
            "timeframe": "2-4 years"
          },
          {
            "level": "3",
            "title": "Senior CSM / Support Lead",
            "focus": "Lead renewals, adoption strategies, and escalation management",
            "timeframe": "4-6 years"
          },
          {
            "level": "4",
            "title": "Customer Success Manager / Support Manager",
            "focus": "Build success programs and manage a team",
            "timeframe": "6-9 years"
          },
          {
            "level": "5",
            "title": "Director of Customer Success / VP Support",
            "focus": "Own customer lifecycle strategy and revenue retention",
            "timeframe": "9+ years"
          }
        ],
        "interactions": [
          {
            "role": "Product Managers",
            "description": "Share customer feedback to inform roadmap priorities"
          },
          {
            "role": "Engineering / DevOps",
            "description": "Escalate bugs and coordinate technical resolutions"
          },
          {
            "role": "Sales",
            "description": "Identify upsell opportunities and align on account plans"
          },
          {
            "role": "Marketing",
            "description": "Provide testimonials and drive case studies"
          }
        ],
        "bestPractices": [
          "Respond promptly and set clear expectations",
          "Document solutions for self-service",
          "Proactively monitor customer health",
          "Personalize onboarding to customer goals",
          "Close the feedback loop with product teams"
        ],
        "resources": [
          {
            "title": "Customer Success Management Guide",
            "url": "https://www.gainsight.com/essential-guide/customer-success-management/",
            "description": "Comprehensive guide to the CSM role and career"
          },
          {
            "title": "HubSpot Academy Inbound Service",
            "url": "https://academy.hubspot.com/courses/inbound-service",
            "description": "Free course on modern customer service fundamentals"
          },
          {
            "title": "Customer Success Curated Resources",
            "url": "https://github.com/mutedblues/Customer-Success-Management",
            "description": "Community-curated list of CS articles, books, and tools"
          },
          {
            "title": "ChurnZero Blog",
            "url": "https://churnzero.com/blog/",
            "description": "Articles on CS strategy, skills, and metrics"
          },
          {
            "title": "SuccessCOACHING Best Practices",
            "url": "https://successcoaching.co/blog/8-customer-success-enablement-best-practices-to-adopt-in-2024",
            "description": "Enablement practices for high-performing CS teams"
          }
        ]
      }
    ]
  },
  {
    "id": "revenue",
    "name": "Revenue, Sales & Marketing",
    "originalName": "Go-to-Market, Sales & Promotion",
    "color": "text-amber-400",
    "bg": "bg-amber-500/10",
    "border": "border-amber-500/20",
    "roles": [
      {
        "title": "Sales Manager / Account Executive",
        "shortTitle": "Account Executive",
        "summary": "Owns the full sales cycle from qualified lead to closed contract, acting as a trusted advisor who aligns the company's solution to the buyer's business outcomes and revenue targets.",
        "responsibilities": [
          "Run discovery calls to uncover buyer pain points, constraints, and business goals",
          "Qualify inbound leads and SDR handoffs using frameworks like BANT or MEDDPICC",
          "Map stakeholders and identify decision-makers, champions, and blockers",
          "Deliver tailored product presentations and ROI-driven business cases",
          "Manage deal stages, timelines, and mutual action plans in the CRM",
          "Negotiate terms with procurement, legal, and finance stakeholders",
          "Close new business and identify early expansion or upsell opportunities",
          "Maintain CRM hygiene for accurate forecasting and pipeline visibility",
          "Collaborate with sales engineering, marketing, and customer success on deal strategy and handoffs",
          "Hit or exceed assigned quota and revenue targets consistently"
        ],
        "skills": [
          "Discovery and consultative questioning",
          "Value articulation and ROI storytelling",
          "Pipeline management and forecasting",
          "Objection handling and negotiation",
          "Stakeholder mapping and multi-threading",
          "Sales qualification frameworks (BANT, MEDDICC, SPIN)",
          "Executive presence and active listening",
          "Resilience, adaptability, and coachability",
          "CRM and sales process discipline",
          "Time management and prioritization"
        ],
        "tools": [
          "Salesforce or HubSpot CRM for opportunity and pipeline management",
          "LinkedIn Sales Navigator for account research and stakeholder mapping",
          "Outreach, Salesloft, or Apollo for sales engagement and sequencing",
          "Gong or Chorus for call recording, coaching, and conversation intelligence",
          "Clari or InsightSquared for forecasting and pipeline analytics",
          "PandaDoc, DocuSign, or CPQ tools for proposals and contracts",
          "Slack or Microsoft Teams for internal deal collaboration",
          "Notion or Confluence for battlecards and enablement content",
          "Zoom or Google Meet for virtual selling",
          "Calendar/scheduling tools like Calendly or Chili Piper"
        ],
        "roadmap": [
          {
            "level": "Intern / SDR",
            "title": "Sales Development Representative (SDR) / BDR",
            "focus": "Learn prospecting, qualification basics, CRM hygiene, and objection handling",
            "timeframe": "0-2 years"
          },
          {
            "level": "Junior AE",
            "title": "Associate Account Executive / Inside Sales Rep",
            "focus": "Close smaller deals, master discovery, and build pipeline discipline",
            "timeframe": "1-3 years"
          },
          {
            "level": "Mid-Market AE",
            "title": "Account Executive",
            "focus": "Own full-cycle sales for mid-market accounts and consistently hit quota",
            "timeframe": "2-5 years"
          },
          {
            "level": "Senior AE",
            "title": "Senior Account Executive / Enterprise AE",
            "focus": "Manage complex, multi-stakeholder deals and larger territories",
            "timeframe": "4-7 years"
          },
          {
            "level": "Sales Lead / Manager",
            "title": "Team Lead / Sales Manager",
            "focus": "Coach a team, inspect deals, and drive team quota attainment",
            "timeframe": "6-9 years"
          },
          {
            "level": "Director / VP",
            "title": "Director of Sales / VP of Sales",
            "focus": "Build sales strategy, optimize processes, and scale the revenue organization",
            "timeframe": "8-15 years"
          }
        ],
        "interactions": [
          {
            "role": "Sales Engineer",
            "description": "Partners on technical demos, proofs of concept, and security/technical objections"
          },
          {
            "role": "Marketing & Communications Specialist",
            "description": "Provides feedback on lead quality and requests targeted collateral, case studies, and campaigns"
          },
          {
            "role": "Channel & Partnerships Manager",
            "description": "Coordinates on partner-sourced deals, co-selling motions, and partner-led accounts"
          },
          {
            "role": "Customer Success Manager",
            "description": "Ensures smooth handoff and shares account context for onboarding and expansion"
          },
          {
            "role": "Revenue Operations",
            "description": "Aligns on pipeline hygiene, forecasting, territory planning, and tool optimization"
          }
        ],
        "bestPractices": [
          "Always do pre-call research and enter every meeting with a clear agenda",
          "Qualify early and disqualify poor-fit prospects to protect pipeline quality",
          "Multi-thread deals by building relationships with several stakeholders",
          "Lead with value and business outcomes rather than product features",
          "Keep CRM data clean and updated to support accurate forecasting",
          "Follow a structured sales methodology (MEDDPICC, SPIN, Challenger) consistently",
          "Seek feedback from peers and managers, and continuously refine your pitch"
        ],
        "resources": [
          {
            "title": "SPIN Selling by Neil Rackham",
            "url": "https://www.oreilly.com/library/view/spin-selling/9781260027099/",
            "description": "Research-based classic on consultative questioning for complex B2B sales."
          },
          {
            "title": "The Challenger Sale by Matthew Dixon & Brent Adamson",
            "url": "https://www.penguin.co.uk/authors/80741/matthew-dixon",
            "description": "Bestselling framework on teaching, tailoring, and taking control of customer conversations."
          },
          {
            "title": "HubSpot Academy Inbound Sales Certification",
            "url": "https://academy.hubspot.com/courses/inbound-sales",
            "description": "Free, globally recognized course on inbound sales methodology and modern buyer engagement."
          },
          {
            "title": "MEDDIC Academy",
            "url": "https://meddic.academy/",
            "description": "Official source for MEDDPICC sales qualification training and certifications."
          },
          {
            "title": "Sales Hacker Community",
            "url": "https://www.saleshacker.com/",
            "description": "Large free B2B sales community with articles, templates, podcasts, and peer discussions."
          },
          {
            "title": "RevGenius",
            "url": "https://www.revgenius.com/",
            "description": "Global revenue community with 60k+ members focused on GTM, sales, and RevOps."
          },
          {
            "title": "Salesforce Trailhead",
            "url": "https://trailhead.salesforce.com/",
            "description": "Free interactive learning platform for CRM, Sales Cloud, and sales operations skills."
          }
        ]
      },
      {
        "title": "Sales Engineer",
        "shortTitle": "Sales Engineer",
        "summary": "Bridges deep product expertise and consultative selling by running demos, architecting solutions, and resolving technical objections to de-risk complex deals for buying committees.",
        "responsibilities": [
          "Conduct technical discovery to understand client requirements, architecture, and integration needs",
          "Create and deliver tailored product demonstrations and proofs of concept (PoCs)",
          "Respond to RFPs/RFIs with accurate technical and solution-oriented content",
          "Answer deep technical questions from IT, security, and engineering stakeholders",
          "Build business cases, ROI models, and architecture diagrams that align to client outcomes",
          "Collaborate with account executives on deal strategy, objection handling, and closing plans",
          "Gather prospect feedback and communicate product gaps or requirements to product/engineering",
          "Support security reviews, compliance questionnaires, and data privacy evaluations",
          "Provide post-sale technical onboarding and handoff to customer success or implementation teams",
          "Stay current on product roadmap, competitor offerings, and emerging technology trends"
        ],
        "skills": [
          "Deep product and technical domain knowledge",
          "Solution architecture and integration design",
          "API, SDK, webhook, and data workflow understanding",
          "Demonstration and whiteboarding",
          "Consultative discovery and requirements mapping",
          "Business case and ROI construction",
          "Executive and technical communication",
          "Objection handling and risk mitigation",
          "Project management and multitasking",
          "AI-assisted demo and enablement workflows"
        ],
        "tools": [
          "CRM (Salesforce, HubSpot) for opportunity tracking and activity logging",
          "Demo platforms (Demodesk, Walnut, Reprise) for interactive product tours",
          "Presentation tools (PowerPoint, Google Slides, Prezi) and whiteboarding (Miro, Lucidchart)",
          "Collaboration tools (Slack, Microsoft Teams, Zoom)",
          "Cloud consoles (AWS, Azure, GCP) for technical validation",
          "API testing tools (Postman) and sandbox environments",
          "Security/compliance platforms (Vanta, Drata, OneTrust) and questionnaires",
          "Product analytics or monitoring tools",
          "Knowledge bases (Confluence, Notion) and battlecards",
          "Video messaging tools (Loom, Vidyard) for async technical explanations"
        ],
        "roadmap": [
          {
            "level": "Technical Intern / Support",
            "title": "Technical Support Engineer / Solutions Intern",
            "focus": "Build product knowledge, communication skills, and customer-facing confidence",
            "timeframe": "0-1 year"
          },
          {
            "level": "Associate SE",
            "title": "Associate Sales Engineer / Solutions Consultant",
            "focus": "Support senior SEs on demos, RFPs, and technical discovery calls",
            "timeframe": "1-3 years"
          },
          {
            "level": "Sales Engineer",
            "title": "Sales Engineer / Solutions Engineer",
            "focus": "Own technical sales cycle for assigned deals and run independent demos/POCs",
            "timeframe": "2-5 years"
          },
          {
            "level": "Senior SE",
            "title": "Senior Sales Engineer / Lead Solutions Engineer",
            "focus": "Handle enterprise deals, mentor junior SEs, and lead complex evaluations",
            "timeframe": "4-8 years"
          },
          {
            "level": "Principal SE / Architect",
            "title": "Principal Sales Engineer / Solutions Architect",
            "focus": "Define best practices, design complex solutions, and support strategic accounts",
            "timeframe": "7-12 years"
          },
          {
            "level": "SE Leadership",
            "title": "Director of Solutions Engineering / VP of Presales",
            "focus": "Scale the presales team, optimize processes, and align SE strategy with revenue goals",
            "timeframe": "10-15 years"
          }
        ],
        "interactions": [
          {
            "role": "Account Executive",
            "description": "Joins discovery and demo calls, shapes technical win strategy, and clears blockers"
          },
          {
            "role": "Product Manager",
            "description": "Provides market feedback, raises feature requests, and aligns on roadmap messaging"
          },
          {
            "role": "Engineering / Security",
            "description": "Escalates architecture, integration, and security/compliance questions"
          },
          {
            "role": "Customer Success",
            "description": "Hands off technical requirements and evaluation context for smooth onboarding"
          },
          {
            "role": "Marketing",
            "description": "Contributes to technical collateral, case studies, and competitive battlecards"
          },
          {
            "role": "Partnerships Manager",
            "description": "Supports partner integrations, co-selling, and technical alliance validation"
          }
        ],
        "bestPractices": [
          "Always tailor demos to the prospect's specific use case and business outcome",
          "Lead discovery before demonstrating to avoid feature-only conversations",
          "Build reusable proof-of-concept templates and evaluation plans",
          "Translate technical capabilities into clear business value for non-technical buyers",
          "Maintain a feedback loop with product and engineering on common objections",
          "Keep demo environments current and reliable to avoid credibility gaps",
          "Document everything in the CRM so account executives and CS have full context"
        ],
        "resources": [
          {
            "title": "Apollo.io How to Become a Sales Engineer",
            "url": "https://www.apollo.io/insights/how-to-become-a-sales-engineer",
            "description": "Practical guide covering skills, education, and a 12-month roadmap for aspiring SEs."
          },
          {
            "title": "Coursera: What Is a Sales Engineer?",
            "url": "https://www.coursera.org/articles/sales-engineer",
            "description": "Overview of the role, skills, and qualifications for technical sales careers."
          },
          {
            "title": "PreSales Collective",
            "url": "https://www.presalescollective.com/",
            "description": "Global community for presales professionals with training, events, and networking."
          },
          {
            "title": "AWS Cloud Practitioner Certification",
            "url": "https://aws.amazon.com/certification/certified-cloud-practitioner/",
            "description": "Foundational cloud certification useful for SEs supporting cloud or SaaS solutions."
          },
          {
            "title": "Salesforce Trailhead",
            "url": "https://trailhead.salesforce.com/",
            "description": "Free platform to learn CRM architecture, Sales Cloud, and solution design basics."
          },
          {
            "title": "The Challenger Sale by Matthew Dixon & Brent Adamson",
            "url": "https://www.penguin.co.uk/authors/80741/matthew-dixon",
            "description": "Essential reading on insight-driven selling and controlling complex customer conversations."
          },
          {
            "title": "MEDDIC Academy",
            "url": "https://meddic.academy/",
            "description": "Official training and certification for MEDDPICC qualification in enterprise deals."
          }
        ]
      },
      {
        "title": "Marketing & Communications Specialist",
        "shortTitle": "Marketing Specialist",
        "summary": "Drives brand awareness, demand generation, and audience engagement by creating and distributing compelling content across digital, social, and traditional channels while aligning messaging with business goals.",
        "responsibilities": [
          "Develop and execute integrated marketing and communications campaigns",
          "Write and edit content for blogs, social media, emails, press releases, and websites",
          "Manage social media presence, scheduling, community engagement, and analytics",
          "Coordinate with sales to create enablement collateral such as case studies and battlecards",
          "Plan and execute events, webinars, trade shows, and product launches",
          "Monitor media coverage, brand mentions, and online reputation",
          "Analyze campaign performance using marketing analytics and optimize based on data",
          "Support SEO/SEM, email marketing, and paid media initiatives",
          "Maintain brand voice, style guides, and messaging consistency across channels",
          "Conduct audience and market research to inform messaging and campaign strategy"
        ],
        "skills": [
          "Writing, editing, and storytelling",
          "Content strategy and campaign planning",
          "Social media management and community engagement",
          "SEO/SEM and digital analytics",
          "Email marketing and marketing automation",
          "Graphic design and basic multimedia production",
          "Project management and cross-functional coordination",
          "Data analysis and performance measurement",
          "Brand positioning and messaging",
          "Crisis communication and reputation management"
        ],
        "tools": [
          "HubSpot, Marketo, or Mailchimp for marketing automation and email",
          "Google Analytics 4 and Google Search Console for web analytics",
          "Hootsuite, Buffer, or Later for social media management",
          "Canva, Adobe Creative Cloud, or Figma for design and creative assets",
          "WordPress, Webflow, or Contentful for content management",
          "Salesforce or HubSpot CRM for lead tracking and handoff",
          "Slack, Asana, or Monday.com for project coordination",
          "SEMrush, Ahrefs, or Moz for SEO and keyword research",
          "Cision, Meltwater, or Brandwatch for media monitoring",
          "Google Workspace or Microsoft 365 for content collaboration"
        ],
        "roadmap": [
          {
            "level": "Intern / Coordinator",
            "title": "Marketing Coordinator / Communications Intern",
            "focus": "Execute tasks, write content, schedule social posts, and learn campaign mechanics",
            "timeframe": "0-1 year"
          },
          {
            "level": "Specialist",
            "title": "Marketing & Communications Specialist",
            "focus": "Own channel execution, create content, and measure campaign performance",
            "timeframe": "1-3 years"
          },
          {
            "level": "Senior Specialist",
            "title": "Senior Marketing Specialist / Content Strategist",
            "focus": "Lead campaigns, develop strategy, and mentor junior team members",
            "timeframe": "3-5 years"
          },
          {
            "level": "Manager",
            "title": "Marketing Communications Manager / Campaign Manager",
            "focus": "Manage budgets, teams, and cross-functional campaign execution",
            "timeframe": "5-8 years"
          },
          {
            "level": "Director",
            "title": "Director of Marketing / Communications Director",
            "focus": "Set brand and GTM strategy, oversee multiple channels, and advise leadership",
            "timeframe": "8-12 years"
          },
          {
            "level": "Executive",
            "title": "VP Marketing / Chief Marketing Officer",
            "focus": "Own global marketing vision, revenue alignment, and organizational growth",
            "timeframe": "12+ years"
          }
        ],
        "interactions": [
          {
            "role": "Account Executive / Sales Manager",
            "description": "Provides sales enablement content, shares lead insights, and aligns on campaign follow-up"
          },
          {
            "role": "Sales Engineer",
            "description": "Turns technical demos and proof points into customer-facing collateral and case studies"
          },
          {
            "role": "Channel & Partnerships Manager",
            "description": "Develops co-branded campaigns, partner enablement materials, and joint events"
          },
          {
            "role": "Product Manager",
            "description": "Learns roadmap details and turns product updates into launch messaging"
          },
          {
            "role": "Design / Creative",
            "description": "Produces visuals, videos, and brand assets for campaigns and content"
          },
          {
            "role": "Revenue Operations",
            "description": "Tracks lead flow, attribution, funnel metrics, and campaign ROI"
          }
        ],
        "bestPractices": [
          "Document a clear content calendar and campaign brief before execution",
          "Maintain consistent brand voice and messaging across every channel",
          "Use data to prioritize channels and optimize spend based on performance",
          "Repurpose high-performing content into multiple formats to maximize reach",
          "Align marketing goals directly with sales pipeline and revenue targets",
          "Test subject lines, creatives, and CTAs continuously to improve engagement",
          "Build a feedback loop with sales to refine messaging and improve lead quality"
        ],
        "resources": [
          {
            "title": "HubSpot Academy Inbound Marketing Certification",
            "url": "https://academy.hubspot.com/courses/inbound-marketing",
            "description": "Free certification covering inbound methodology, content strategy, and lead nurturing."
          },
          {
            "title": "Google Analytics Certification",
            "url": "https://analytics.google.com/analytics/academy/",
            "description": "Free training and exam to prove proficiency in Google Analytics 4 and digital measurement."
          },
          {
            "title": "Content Marketing Institute",
            "url": "https://contentmarketinginstitute.com/",
            "description": "Leading resource for content marketing strategy, research, and best practices."
          },
          {
            "title": "SEMrush Academy",
            "url": "https://www.semrush.com/academy/",
            "description": "Free courses on SEO, content marketing, PPC, and social media analytics."
          },
          {
            "title": "Copyblogger",
            "url": "https://copyblogger.com/",
            "description": "Long-standing resource for content writing, copywriting, and content marketing education."
          },
          {
            "title": "American Marketing Association (AMA)",
            "url": "https://www.ama.org/",
            "description": "Professional marketing association with training, certifications, and industry research."
          },
          {
            "title": "MarketingProfs",
            "url": "https://www.marketingprofs.com/",
            "description": "Training and community for B2B marketers seeking practical skills and templates."
          }
        ]
      },
      {
        "title": "Channel & Partnerships Manager",
        "shortTitle": "Partnerships Manager",
        "summary": "Builds and scales indirect revenue channels by identifying, recruiting, enabling, and managing strategic partners, resellers, and alliances that expand market reach and drive partner-sourced revenue.",
        "responsibilities": [
          "Identify, evaluate, and recruit partners that align with company strategy and ICP",
          "Negotiate partnership agreements, terms, incentive structures, and co-sell frameworks",
          "Develop and execute partner enablement programs, training, and certifications",
          "Create co-marketing and co-selling campaigns with partners to generate pipeline",
          "Monitor partner performance through KPIs, dashboards, and regular business reviews",
          "Maintain partner relationships through regular communication and executive alignment",
          "Resolve channel conflicts and align partner activities with direct sales motions",
          "Collaborate with sales, marketing, and product to support partner-led opportunities",
          "Manage partner portals, PRM tools, and deal registration processes",
          "Provide market and competitive insights to inform ecosystem and GTM strategy"
        ],
        "skills": [
          "Strategic relationship building and networking",
          "Negotiation and contract management",
          "Business development and partner recruitment",
          "Program design and partner enablement",
          "Data analysis and performance measurement",
          "Cross-functional collaboration and stakeholder management",
          "Conflict resolution and diplomacy",
          "Market analysis and ecosystem thinking",
          "Project management and prioritization",
          "Cultural intelligence and executive presence"
        ],
        "tools": [
          "Partner relationship management (PRM) platforms like PartnerStack, Impartner, or Kiflo",
          "CRM (Salesforce, HubSpot) for partner-sourced opportunity tracking",
          "Slack or Microsoft Teams for partner and internal collaboration",
          "LinkedIn and LinkedIn Sales Navigator for partner research and outreach",
          "Asana, Monday.com, or Notion for program and project management",
          "Analytics tools and BI dashboards for partner performance reporting",
          "LMS platforms for partner training and certification",
          "Marketing automation (HubSpot, Marketo) for co-marketing campaigns",
          "Deal registration and referral tracking systems",
          "Video conferencing (Zoom, Google Meet) for partner onboarding and QBRs"
        ],
        "roadmap": [
          {
            "level": "Coordinator / Associate",
            "title": "Partnerships Coordinator / Partner Associate",
            "focus": "Support partner operations, maintain databases, and assist with onboarding",
            "timeframe": "0-1 year"
          },
          {
            "level": "Partner Manager",
            "title": "Channel / Partnerships Manager",
            "focus": "Own a portfolio of partners, recruit new partners, and drive pipeline",
            "timeframe": "1-4 years"
          },
          {
            "level": "Senior Partner Manager",
            "title": "Senior Partnerships Manager / Strategic Alliances Manager",
            "focus": "Manage strategic accounts, complex deals, and high-value alliances",
            "timeframe": "3-6 years"
          },
          {
            "level": "Team Lead / Director",
            "title": "Director of Partnerships / Channel Sales Director",
            "focus": "Build the partnership strategy, team, and processes to scale the channel",
            "timeframe": "6-10 years"
          },
          {
            "level": "VP / Executive",
            "title": "VP of Strategic Partnerships / Chief Partnerships Officer",
            "focus": "Own the global partner ecosystem and align it with corporate strategy and revenue",
            "timeframe": "10-15 years"
          }
        ],
        "interactions": [
          {
            "role": "Account Executive / Sales Manager",
            "description": "Coordinates on partner-sourced deals, co-selling, and account mapping"
          },
          {
            "role": "Marketing & Communications Specialist",
            "description": "Develops co-branded campaigns, partner collateral, and joint events"
          },
          {
            "role": "Sales Engineer",
            "description": "Enables partners technically and supports complex partner-led evaluations"
          },
          {
            "role": "Product Manager",
            "description": "Aligns on integration roadmaps, partner product fit, and joint solutions"
          },
          {
            "role": "Legal / Finance",
            "description": "Negotiates contracts, incentive terms, and partner payout structures"
          },
          {
            "role": "Customer Success",
            "description": "Ensures partner-referred customers receive smooth onboarding and support"
          }
        ],
        "bestPractices": [
          "Define clear partner tiers, expectations, and KPIs from day one",
          "Invest in partner enablement and certification before expecting pipeline",
          "Communicate regularly through QBRs, newsletters, and Slack/portal updates",
          "Protect against channel conflict with transparent deal registration rules",
          "Focus on a small number of high-quality partners before scaling broadly",
          "Track partner-sourced and partner-influenced revenue rigorously",
          "Create win-win incentives that align partner success with company growth"
        ],
        "resources": [
          {
            "title": "PartnerStack Resources & Guides",
            "url": "https://www.partnerstack.com/resources",
            "description": "Practical guides, reports, and playbooks for building SaaS partner programs."
          },
          {
            "title": "TealHQ Partnerships Manager Career Path",
            "url": "https://www.tealhq.com/career-paths/partnerships-manager",
            "description": "Detailed overview of responsibilities, skills, and career progression for partnership managers."
          },
          {
            "title": "Crossbeam",
            "url": "https://www.crossbeam.com/",
            "description": "Partner ecosystem platform for account mapping and co-selling with partners."
          },
          {
            "title": "HubSpot Academy Inbound Sales Certification",
            "url": "https://academy.hubspot.com/courses/inbound-sales",
            "description": "Free certification useful for understanding partner co-selling and buyer engagement."
          },
          {
            "title": "MEDDIC Academy",
            "url": "https://meddic.academy/",
            "description": "Sales qualification training that helps partner managers inspect and support complex deals."
          },
          {
            "title": "RevGenius",
            "url": "https://www.revgenius.com/",
            "description": "Revenue community with active channels for partnerships, channel sales, and GTM."
          },
          {
            "title": "PartnerStack: State of Partnerships in GTM Report",
            "url": "https://www.partnerstack.com/resources/research-lab",
            "description": "Research reports on partnership trends, benchmarks, and ecosystem growth."
          }
        ]
      }
    ]
  },
  {
    "id": "leadership",
    "name": "Delivery & Technical Leadership",
    "originalName": "Project Leadership & Management",
    "color": "text-rose-400",
    "bg": "bg-rose-500/10",
    "border": "border-rose-500/20",
    "roles": [
      {
        "title": "Project Manager / Technical Program Manager",
        "shortTitle": "PM / TPM",
        "summary": "Technical Program Managers orchestrate complex, cross-functional technical initiatives by combining deep technical fluency with strategic program-management oversight, ensuring engineering teams deliver solutions that align with business objectives, schedules, and budgets.",
        "responsibilities": [
          "Define program goals, scope, and success criteria in collaboration with senior stakeholders and product leadership.",
          "Develop and maintain comprehensive program schedules, roadmaps, and budgets to keep delivery on track.",
          "Coordinate communication across engineering, product, design, operations, vendors, and executive sponsors.",
          "Identify, track, and resolve cross-team dependencies and critical-path risks before they block delivery.",
          "Drive resolution of technical and operational issues by working directly with engineering teams and subject-matter experts.",
          "Monitor and report program health, milestones, and metrics to leadership and stakeholders.",
          "Implement and continuously improve Agile, Scrum, Kanban, or hybrid program-management methodologies.",
          "Ensure quality, security, compliance, and governance standards are met across program deliverables.",
          "Facilitate post-mortems and retrospectives to capture lessons learned and improve future execution.",
          "Mentor junior program managers and build repeatable delivery playbooks for the organization."
        ],
        "skills": [
          "Systems thinking and technical architecture literacy",
          "Program and project management (predictive, Agile, hybrid)",
          "Technical roadmapping and strategic planning",
          "Software development lifecycle (SDLC) and CI/CD practices",
          "Cloud platforms and DevOps fundamentals",
          "Risk management and dependency analysis",
          "Stakeholder management and executive communication",
          "Data-driven decision making and performance metrics",
          "Influence without authority and conflict resolution",
          "Budgeting, resource allocation, and vendor management"
        ],
        "tools": [
          "Jira / Azure DevOps / Linear – backlog, sprint, and release tracking",
          "Microsoft Project / Smartsheet / Asana – schedule and portfolio planning",
          "Confluence / Notion – documentation and knowledge management",
          "Slack / Microsoft Teams – real-time team and stakeholder communication",
          "GitHub / GitLab – code repositories, pull requests, and release coordination",
          "Google Workspace / Office 365 – reporting, presentations, and collaboration",
          "Miro / Lucidchart – process mapping, architecture diagrams, and workshops",
          "Tableau / Power BI / spreadsheets – dashboards, KPIs, and status reporting"
        ],
        "roadmap": [
          {
            "level": "Intern / Coordinator",
            "title": "Technical Program Management Intern or Project Coordinator",
            "focus": "Learn company processes, support scheduling and status tracking, document meeting notes, and assist with small workstream coordination.",
            "timeframe": "0–1 year"
          },
          {
            "level": "Junior / Associate",
            "title": "Associate Technical Program Manager",
            "focus": "Own well-defined project components, manage tasks and timelines for a single team, and build familiarity with Agile ceremonies and tooling.",
            "timeframe": "1–3 years"
          },
          {
            "level": "Professional",
            "title": "Technical Program Manager",
            "focus": "Lead medium-complexity programs end-to-end, coordinate cross-functional dependencies, manage risks, and drive predictable delivery outcomes.",
            "timeframe": "3–6 years"
          },
          {
            "level": "Senior",
            "title": "Senior Technical Program Manager",
            "focus": "Own high-impact, ambiguous programs; influence technical and product strategy; mentor junior TPMs; and optimize organizational delivery processes.",
            "timeframe": "6–10 years"
          },
          {
            "level": "Principal / Lead",
            "title": "Principal or Lead Technical Program Manager",
            "focus": "Drive the most complex, multi-year initiatives; set TPM standards and playbooks; act as the face of a business unit or large domain.",
            "timeframe": "10–15 years"
          },
          {
            "level": "Executive",
            "title": "Director / VP of Technical Program Management",
            "focus": "Build and lead the TPM function, align program portfolio with company strategy, manage budgets at scale, and shape engineering culture.",
            "timeframe": "15+ years"
          }
        ],
        "interactions": [
          {
            "role": "Software Engineers",
            "description": "Clarify requirements, unblock technical dependencies, review sprint progress, and align delivery timelines with implementation reality."
          },
          {
            "role": "Product Managers",
            "description": "Translate roadmap priorities into executable plans, negotiate scope and trade-offs, and ensure releases meet customer and business goals."
          },
          {
            "role": "Engineering Managers / Tech Leads",
            "description": "Align on team capacity, technical debt, hiring needs, and architectural decisions that affect program scope and schedule."
          },
          {
            "role": "Quality Assurance & Release Engineering",
            "description": "Coordinate test plans, release windows, deployment readiness, and rollback procedures to ensure stable launches."
          },
          {
            "role": "Executive Stakeholders",
            "description": "Provide concise status updates, escalate risks and decisions, and secure sponsorship for strategic initiatives."
          },
          {
            "role": "Vendors & External Partners",
            "description": "Manage contracts, integrations, deliverables, and timelines for third-party services or outsourced components."
          }
        ],
        "bestPractices": [
          "Start every program with clearly defined scope, success criteria, and a RACI matrix to prevent ambiguity.",
          "Maintain a single source of truth for schedules, risks, and decisions that is visible to all stakeholders.",
          "Run regular risk and dependency reviews rather than waiting for issues to escalate.",
          "Communicate early and often using the right level of detail for each audience.",
          "Balance agility with governance by tailoring methodologies to the program's uncertainty and scale.",
          "Use retrospectives and post-mortems to institutionalize lessons learned and continuous improvement.",
          "Protect team focus by shielding engineers from unnecessary meetings and context switching."
        ],
        "resources": [
          {
            "title": "PMBOK Guide (Project Management Body of Knowledge)",
            "url": "https://www.pmi.org/pmbok-guide-standards",
            "description": "PMI's foundational standard for project management processes, terminology, and best practices."
          },
          {
            "title": "Project Management Professional (PMP) Certification",
            "url": "https://www.pmi.org/certifications/project-management-pmp",
            "description": "Globally recognized certification validating experience and competency in leading projects."
          },
          {
            "title": "Certified ScrumMaster (CSM)",
            "url": "https://www.scrumalliance.org/get-certified/scrum-master-track/certified-scrummaster",
            "description": "Scrum Alliance certification for facilitating Agile teams and Scrum ceremonies."
          },
          {
            "title": "Google Project Management Certificate",
            "url": "https://www.coursera.org/professional-certificates/google-project-management",
            "description": "Coursera professional certificate covering Agile, Scrum, stakeholder management, and real-world project execution."
          },
          {
            "title": "Book: The Mythical Man-Month by Fred Brooks",
            "url": "https://www.amazon.com/Mythical-Man-Month-Software-Engineering-Anniversary/dp/0201835959",
            "description": "Classic essays on software project estimation, team scaling, and communication overhead."
          },
          {
            "title": "Book: Scrum: The Art of Doing Twice the Work in Half the Time by Jeff Sutherland",
            "url": "https://www.amazon.com/Scrum-Doing-Twice-Work-Half/dp/038534645X",
            "description": "Practical introduction to the Scrum framework from one of its co-creators."
          },
          {
            "title": "PMI.org Community & Resources",
            "url": "https://www.pmi.org",
            "description": "Industry body offering standards, certifications, research, templates, and local chapter events."
          }
        ]
      },
      {
        "title": "Technical Team Leader",
        "shortTitle": "Tech Lead",
        "summary": "Technical Team Leaders guide engineering teams by combining hands-on technical depth with people leadership, owning architecture and code quality decisions while mentoring engineers and aligning delivery with product and business goals.",
        "responsibilities": [
          "Lead technical design, architecture, and code-quality decisions for the team's domain.",
          "Mentor, coach, and develop engineers through code reviews, pair programming, and career conversations.",
          "Own delivery outcomes by breaking down work, estimating effort, and driving sprint or iteration execution.",
          "Set and enforce engineering standards for testing, observability, security, and documentation.",
          "Collaborate with product managers to refine requirements and negotiate technical trade-offs.",
          "Identify, prioritize, and pay down technical debt while balancing new feature delivery.",
          "Facilitate team rituals such as stand-ups, planning, retrospectives, and architecture reviews.",
          "Hire, onboard, and retain engineering talent to build high-performing teams.",
          "Troubleshoot production issues and guide incident response and post-incident improvements.",
          "Represent the team in cross-functional discussions and communicate technical concepts to non-technical stakeholders."
        ],
        "skills": [
          "System design and software architecture",
          "Strong programming and code-review proficiency",
          "CI/CD, DevOps, and modern release practices",
          "People management, mentoring, and coaching",
          "Agile / Scrum / Kanban methodologies",
          "Communication and stakeholder management",
          "Conflict resolution and decision-making under uncertainty",
          "Roadmap prioritization and technical debt management",
          "Observability, reliability, and incident management",
          "Emotional intelligence and team culture building"
        ],
        "tools": [
          "GitHub / GitLab – version control, code review, and CI/CD pipelines",
          "Jira / Azure DevOps / Linear – task tracking and sprint management",
          "Confluence / Notion / Wiki – technical documentation and runbooks",
          "Slack / Microsoft Teams – team communication and incident coordination",
          "IDEs (VS Code, JetBrains, etc.) – daily development and debugging",
          "Jenkins / GitHub Actions / CircleCI – build, test, and deployment automation",
          "AWS / Azure / GCP – cloud infrastructure and platform services",
          "Datadog / Prometheus / Grafana – monitoring, logging, and alerting"
        ],
        "roadmap": [
          {
            "level": "Intern / Junior",
            "title": "Software Engineering Intern or Junior Developer",
            "focus": "Build coding fundamentals, learn the tech stack, contribute to small features, and absorb team conventions and feedback.",
            "timeframe": "0–1 year"
          },
          {
            "level": "Software Engineer",
            "title": "Software Engineer",
            "focus": "Deliver features independently, write tests, participate in code reviews, and develop domain expertise.",
            "timeframe": "1–3 years"
          },
          {
            "level": "Senior Engineer",
            "title": "Senior Software Engineer",
            "focus": "Own complex technical problems, mentor junior engineers, influence design decisions, and lead small projects end-to-end.",
            "timeframe": "3–6 years"
          },
          {
            "level": "Technical Lead",
            "title": "Technical Team Leader / Lead Engineer",
            "focus": "Guide team architecture and delivery, balance hands-on coding with people leadership, and act as the technical authority for the domain.",
            "timeframe": "6–10 years"
          },
          {
            "level": "Staff / Principal or Engineering Manager",
            "title": "Staff Engineer / Principal Engineer or Engineering Manager",
            "focus": "Drive organization-wide technical strategy, lead large-scale initiatives, or manage multiple engineering teams and managers.",
            "timeframe": "10–15 years"
          },
          {
            "level": "Distinguished / Executive",
            "title": "Distinguished Engineer / Director or VP of Engineering",
            "focus": "Shape company-wide technology vision, lead engineering at scale, drive innovation, and influence C-level strategy.",
            "timeframe": "15+ years"
          }
        ],
        "interactions": [
          {
            "role": "Software Engineers",
            "description": "Pair on complex tasks, review code, unblock technical problems, and provide growth-oriented feedback."
          },
          {
            "role": "Product Managers",
            "description": "Refine requirements, clarify feasibility, negotiate scope, and ensure the roadmap is technically achievable."
          },
          {
            "role": "Engineering Managers",
            "description": "Share people-management responsibilities, align on hiring, promotions, team health, and long-term capacity planning."
          },
          {
            "role": "Technical Program Managers / Project Managers",
            "description": "Coordinate delivery timelines, dependencies, risks, and cross-team commitments across programs."
          },
          {
            "role": "QA Engineers",
            "description": "Define test strategies, review test coverage, and align on quality gates and release readiness."
          },
          {
            "role": "UX / Product Designers",
            "description": "Translate designs into implementable solutions, discuss interaction feasibility, and iterate on user experience trade-offs."
          }
        ],
        "bestPractices": [
          "Lead by example: stay close to the code, review regularly, and demonstrate the quality standards you expect.",
          "Create psychological safety so team members can raise concerns, admit mistakes, and challenge ideas constructively.",
          "Enforce a rigorous but pragmatic code-review culture focused on learning and shared ownership.",
          "Balance feature delivery with continuous investment in quality, observability, and technical debt reduction.",
          "Provide timely, specific, and actionable feedback in one-on-ones and code reviews.",
          "Document architecture decisions (ADRs), runbooks, and onboarding guides to reduce tribal knowledge.",
          "Delegate ownership and decision-making to grow engineers while remaining available as an escalation path."
        ],
        "resources": [
          {
            "title": "Book: The Manager's Path by Camille Fournier",
            "url": "https://www.amazon.com/Managers-Path-Leaders-Navigating-Growth/dp/1491973897",
            "description": "Practical guide to the engineering-leadership journey from tech lead to senior management."
          },
          {
            "title": "Book: An Elegant Puzzle by Will Larson",
            "url": "https://www.amazon.com/Elegant-Puzzle-Systems-Engineering-Management/dp/1732265186",
            "description": "Systems-of-engineering-management essays on scaling teams, culture, and organizational design."
          },
          {
            "title": "Book: Staff Engineer by Will Larson",
            "url": "https://www.amazon.com/Staff-Engineer-Leadership-beyond-management/dp/1736417916",
            "description": "Guide to technical leadership roles beyond the management track, including tech lead and staff engineer archetypes."
          },
          {
            "title": "Professional Scrum Master (PSM I)",
            "url": "https://www.scrum.org/professional-scrum-certifications/professional-scrum-master",
            "description": "Scrum.org certification for understanding and applying Scrum principles as a team leader or Scrum Master."
          },
          {
            "title": "LeadDev Community & Conferences",
            "url": "https://leaddev.com",
            "description": "Community, articles, and events focused on engineering leadership, team health, and technical management."
          },
          {
            "title": "Coursera: Engineering Project Management Specialization (Rice University)",
            "url": "https://www.coursera.org/specializations/engineering-project-management",
            "description": "Specialization covering project initiation, planning, risk, change control, and Agile for technical leaders."
          },
          {
            "title": "Book: The Mythical Man-Month by Fred Brooks",
            "url": "https://www.amazon.com/Mythical-Man-Month-Software-Engineering-Anniversary/dp/0201835959",
            "description": "Essential reading on the complexities of software teams, communication, and estimation."
          }
        ]
      }
    ]
  }
];
