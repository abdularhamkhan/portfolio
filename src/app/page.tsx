const skillsets = [
  {
    label: "Conversational AI - Voice Agents",
    items: ["Pipecat", "OpenAI", "Deepgram STT", "Cartesia STT", "Deepgram TTS", "ElevenLabs TTS", "Chroma DB", "RAG", "Twillio", "Vonage", "Retell",],
  },
  {
    label: "Languages",
    items: ["Python", "JavaScript", "TypeScript", "SQL"],
  },
  {
    label: "Frontend",
    items: ["ReactJS", "NextJS", "React Native"],
  },
  {
    label: "Backend",
    items: ["FASTAPI", "Flask", "NodeJS", "Firebase","Supabase", "Convex",  ],
  },
  {
    label: "Database",
    items: ["PostgreSQL", "MongoDB", "Redis", "AWS S3", "Chorma DB"],
  },
  {
    label: "State Management",
    items: ["Redux", "Zustand"],
  },
  {
    label: "DevOps",
    items: [
      "Linux",
      "Git",
      "Docker",
      "Kubernetes",
      "Kafka",
      "AWS",
      "Digital Ocean",
      "Vercel",
      "Render",
      "Railway",
      "Nginx",
    ],
  },
  {
    label: "MLOps",
    items: ["DVC", "TensorFlow", "MLflow", "Airflow"],
  },
  {
    label: "Supporting Tech",
    items: [
      "Prisma ORM",
      "Neon",
      "Clerk",
      "Resend",
      "Cloudinary",
      "Algolia",
      "Agora",
      "Pusher",
      "Zod",
      "Multer",
      "Pandas",
      "NumPy",
      "Keras",
      "Matplotlib",
    ],
  },
];

const projects = [
  {
    name: "Labyrinth — FYP",
    stack:
      "TypeScript, Next.js, Node.js, PostgreSQL, Prisma, Redis, Docker, Kafka, DigitalOcean",
    desc: "Web-based collaboration platform connecting students, freelancers, and professionals through matchmaking and workspace tools. Built 80+ REST API endpoints and shipped full SDLC with CI/CD in six months, including recommendations, chat, and project management.",
  },
  {
    name: "Voice agents",
    stack:
      "Python, FastAPI, Twilio, GPT-4o-mini, Deepgram STT/TTS, Pipecat, Vonage, Retell, Hostinger",
    desc: "Medical voice agents tuned for low-latency interaction with advanced barge-in and ASR/IVR optimizations for high-volume patient scheduling.",
  },
  {
    name: "With a Twist",
    stack:
      "TypeScript, React Native, Node.js, PostgreSQL, Prisma, Redis, Docker, DigitalOcean",
    desc: "AI-first mobile puzzle game with P2P, P2C, and multiplayer rooms, puzzle creation via RAG, Ollama, and vector DBs. Online/offline modes, social circles, leaderboards, WebSocket-backed APIs, and Redis Pub/Sub for notifications with sub-millisecond cache hits.",
  },
  {
    name: "Payer",
    stack: "TypeScript, React Native, Expo, Convex",
    desc: "Secure mobile wallet for instant transfers, Pakistani carrier top-ups, and day-to-day money management with pixel-perfect UI, robust CRUD, middleware, and cloud deployment.",
  },
  {
    name: "Facial recognition CI/CD",
    stack:
      "Python, TensorFlow, MLflow, MobileNet, Streamlit, Docker, Git CI/CD, Kaggle",
    desc: "Pipeline for automated retraining on new datasets, deployment of model updates, and ongoing performance monitoring.",
  },
];

export default function Home() {
  return (
    <>
      <main className="mx-auto max-w-[980px] px-5 pb-28 pt-16 md:px-8 md:pb-40 md:pt-24">
        {/* Hero — clarity: hierarchy + breathing room */}
        <section className="mb-24 md:mb-32">
          <p className="mb-3 text-[17px] font-medium text-apple-muted md:text-[19px]">
            Hello, I&apos;m
          </p>
          <h1 className="mb-6 text-[48px] font-semibold leading-[1.05] tracking-[-0.03em] text-apple-ink md:text-[72px] md:leading-[1.02] lg:text-[80px]">
            Abdul Arham Khan
          </h1>
          <p className="mb-4 max-w-[42rem] text-[21px] font-medium leading-snug tracking-[-0.02em] text-apple-ink md:text-[28px] md:leading-tight">
            Software engineer building backend systems and data-driven products.
          </p>
          <p className="mb-12 text-[15px] text-apple-muted md:text-[17px]">Lahore, Punjab, Pakistan</p>
          <div className="flex flex-wrap gap-3 md:gap-4">
            <a
              className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-apple-blue px-7 text-[15px] font-medium text-white transition-colors hover:bg-apple-blue-hover"
              href="/resume.pdf"
            >
              Download CV
            </a>
            <a
              className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-apple-blue bg-transparent px-7 text-[15px] font-medium text-apple-blue transition-colors hover:bg-apple-blue/[0.06]"
              href="#connect"
            >
              Get in touch
            </a>
          </div>
          <div className="mt-14 grid gap-4 sm:grid-cols-3">
            {[
              {
                k: "Currently",
                v: "AI-Backend Engineer at Quishub — HIPAA-aware clinical platforms",
              },
              { k: "Also", v: "AI/ML Engineer (Voice Systems) at Nybbl" },
              { k: "Network", v: "3,111+ LinkedIn followers" },
            ].map((row) => (
              <div
                key={row.k}
                className="rounded-2xl border border-apple-line bg-apple-card px-5 py-5 shadow-apple-sm md:px-6 md:py-6"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-apple-muted">
                  {row.k}
                </p>
                <p className="mt-2 text-[15px] leading-snug text-apple-ink">{row.v}</p>
              </div>
            ))}
          </div>
        </section>

        {/* About — deference: typography carries the story */}
        <section className="mb-24 md:mb-32" id="about">
          <p className="mb-2 text-[12px] font-semibold uppercase tracking-[0.1em] text-apple-muted">
            About
          </p>
          <h2 className="mb-10 text-[40px] font-semibold leading-tight tracking-[-0.03em] text-apple-ink md:text-[48px]">
            Reliable systems, built for real use.
          </h2>
          <p className="max-w-[42rem] text-[17px] leading-[1.47] text-apple-muted md:text-[19px] md:leading-[1.45]">
            I&apos;m a software engineer focused on building backend systems that are reliable,
            maintainable, and designed for real-world use. My work centers on backend engineering,
            system design, and data-driven products, with hands-on delivery across Node.js, TypeScript,
            Python, relational databases, event-driven patterns, and containerized deployments.
          </p>
          <p className="mt-6 max-w-[42rem] text-[17px] leading-[1.47] text-apple-muted md:text-[19px] md:leading-[1.45]">
            Previously at vCERN, I contributed to backend services and AI-powered features in close
            collaboration with engineers and designers. Beyond professional roles, I have built and
            shipped production projects including a collaboration platform, an AI-enabled multiplayer
            app, a secure digital wallet, and an ML CI/CD pipeline.
          </p>
          <p className="mt-14 max-w-[42rem] text-[21px] font-semibold leading-snug tracking-[-0.02em] text-apple-ink md:text-[24px]">
            Ownership, technical depth, and long-term scalable thinking.
          </p>
        </section>

        {/* Skills */}
        <section className="mb-24 md:mb-32" id="skills">
          <p className="mb-2 text-[12px] font-semibold uppercase tracking-[0.1em] text-apple-muted">
            Skills
          </p>
          <h2 className="mb-12 text-[40px] font-semibold leading-tight tracking-[-0.03em] text-apple-ink md:text-[48px]">
            Tools and stacks I ship with.
          </h2>
          <div className="grid gap-5">
            {skillsets.map((group) => (
              <article
                key={group.label}
                className="rounded-2xl border border-apple-line bg-apple-card p-7 shadow-apple-sm md:p-9"
              >
                <h3 className="mb-5 text-[19px] font-semibold tracking-[-0.02em] text-apple-ink md:text-[21px]">
                  {group.label}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-apple-section px-3.5 py-1.5 text-[13px] font-medium text-apple-ink md:px-4 md:py-2 md:text-[14px]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-24 md:mb-32">
          <p className="mb-2 text-[12px] font-semibold uppercase tracking-[0.1em] text-apple-muted">
            Education
          </p>
          <h2 className="mb-10 text-[40px] font-semibold leading-tight tracking-[-0.03em] text-apple-ink md:text-[48px]">
            FAST NUCES
          </h2>
          <div className="rounded-2xl border border-apple-line bg-apple-card p-8 shadow-apple-sm md:p-10">
            <p className="text-[17px] font-medium text-apple-blue md:text-[19px]">
              Bachelor of Science in Computer Science
            </p>
            <p className="mt-3 text-[15px] text-apple-muted">2021 — 2025 · Lahore, Pakistan</p>
          </div>
        </section>

        {/* Experience — depth: layered cards, calm rhythm */}
        <section className="mb-24 md:mb-32" id="experience">
          <p className="mb-2 text-[12px] font-semibold uppercase tracking-[0.1em] text-apple-muted">
            Experience
          </p>
          <h2 className="mb-12 text-[40px] font-semibold leading-tight tracking-[-0.03em] text-apple-ink md:text-[48px]">
            Where I&apos;ve contributed.
          </h2>
          <div className="space-y-5">
            <article className="rounded-2xl border border-apple-line bg-apple-card p-8 shadow-apple-sm md:p-10">
              <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-apple-subtle">
                Current
              </div>
              <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
                <p className="text-[22px] font-semibold tracking-[-0.02em] text-apple-ink md:text-[24px]">
                  Quishub
                </p>
                <p className="text-[13px] text-apple-muted">Apr 2026 — Present</p>
              </div>
              <p className="mt-2 text-[15px] font-medium text-apple-ink">
                AI-Backend Engineer · Clinical history & compliance · Part-time
              </p>
              <p className="mt-1 text-[13px] text-apple-muted">Lahore, Punjab, Pakistan · On-site</p>
              <ul className="mt-6 space-y-3 text-[15px] leading-relaxed text-apple-muted md:text-[16px]">
                <li className="flex gap-3">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-apple-border" aria-hidden />
                  <span>
                    Design and build multi-tenant platforms for HIPAA/PHI-compliant clinical history
                    management, with end-to-end ownership of architecture aligned to US healthcare
                    data-security expectations.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-apple-border" aria-hidden />
                  <span>
                    Ship AI-assisted workflows that scribe prescriptions, reports, and clinical
                    histories into production, integrated safely with the rest of the stack.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-apple-border" aria-hidden />
                  <span>
                    Develop backend services in Node.js and Python; build and maintain RESTful APIs and
                    connect AI and third-party services into secure, auditable release paths.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-apple-border" aria-hidden />
                  <span>
                    Implement authentication, authorization, and secrets management; harden for
                    reliability and performance as usage grows.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-apple-border" aria-hidden />
                  <span>
                    Partner with frontend and ML teams to deliver features end-to-end, from design
                    through deployment and operations.
                  </span>
                </li>
              </ul>
            </article>
            <article className="rounded-2xl border border-apple-line bg-apple-card p-8 shadow-apple-sm md:p-10">
              <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-apple-subtle">
                Current
              </div>
              <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
                <p className="text-[22px] font-semibold tracking-[-0.02em] text-apple-ink md:text-[24px]">
                  Nybbl Ventures
                </p>
                <p className="text-[13px] text-apple-muted">Feb 2026 — Present</p>
              </div>
              <p className="mt-2 text-[15px] font-medium text-apple-ink">
                AI/ML Engineer · Conversational AI and voice systems
              </p>
              <p className="mt-1 text-[13px] text-apple-muted">Lahore, Punjab, Pakistan · On-site</p>
              <ul className="mt-6 space-y-3 text-[15px] leading-relaxed text-apple-muted md:text-[16px]">
                <li className="flex gap-3">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-apple-border" aria-hidden />
                  <span>
                    Engineer low-latency, production-grade AI voice agents for real-time patient
                    workflows.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-apple-border" aria-hidden />
                  <span>
                    Implement barge-in handling, ASR/IVR optimizations, and resilient retry/backoff
                    flows.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-apple-border" aria-hidden />
                  <span>
                    Integrate Twilio, Vonage, Pipecat, Retell, and streaming STT/TTS with FastAPI
                    services.
                  </span>
                </li>
              </ul>
            </article>
            <article className="rounded-2xl border border-apple-line bg-apple-card p-8 shadow-apple-sm md:p-10">
              <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
                <p className="text-[22px] font-semibold tracking-[-0.02em] text-apple-ink md:text-[24px]">
                  vCERN LLC
                </p>
                <p className="text-[13px] text-apple-muted">Mar 2025 — Present</p>
              </div>
              <p className="mt-2 text-[15px] font-medium text-apple-ink">
                Backend Engineer (Contract) · AI-first Software Engineer (Part-time)
              </p>
              <p className="mt-1 text-[13px] text-apple-muted">Remote · Chicago, Illinois</p>
              <ul className="mt-6 space-y-3 text-[15px] leading-relaxed text-apple-muted md:text-[16px]">
                <li className="flex gap-3">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-apple-border" aria-hidden />
                  <span>
                    Built and maintained backend services for web/mobile applications with high
                    scalability requirements.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-apple-border" aria-hidden />
                  <span>
                    Designed and optimized data structures and backend APIs, including 50+ endpoints for
                    With a Twist.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-apple-border" aria-hidden />
                  <span>
                    Collaborated across product, design, and engineering to deliver dependable AI-powered
                    features.
                  </span>
                </li>
              </ul>
            </article>
            <article className="rounded-2xl border border-apple-line bg-apple-card p-8 shadow-apple-sm md:p-10">
              <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
                <p className="text-[22px] font-semibold tracking-[-0.02em] text-apple-ink md:text-[24px]">
                  Texagon
                </p>
                <p className="text-[13px] text-apple-muted">Jun 2024 — Sept 2024</p>
              </div>
              <p className="mt-2 text-[15px] font-medium text-apple-ink">Frontend development intern</p>
              <p className="mt-1 text-[13px] text-apple-muted">Remote · Delaware, US</p>
              <ul className="mt-6 space-y-3 text-[15px] leading-relaxed text-apple-muted md:text-[16px]">
                <li className="flex gap-3">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-apple-border" aria-hidden />
                  <span>
                    Job board application with TypeScript, React, and Tailwind CSS; enhanced UI with
                    Chakra UI, Ant Design, and Material UI.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-apple-border" aria-hidden />
                  <span>Supabase as BaaS for a solid, efficient application foundation.</span>
                </li>
              </ul>
            </article>
          </div>
        </section>

        {/* Projects */}
        <section className="mb-24 md:mb-32" id="work">
          <p className="mb-2 text-[12px] font-semibold uppercase tracking-[0.1em] text-apple-muted">
            Work
          </p>
          <h2 className="mb-12 text-[40px] font-semibold leading-tight tracking-[-0.03em] text-apple-ink md:text-[48px]">
             Projects
          </h2>
          <div className="space-y-5">
            {projects.map((p) => (
              <article
                key={p.name}
                className="rounded-2xl border border-apple-line bg-apple-card p-8 shadow-apple-sm md:p-10"
              >
                <h3 className="text-[21px] font-semibold tracking-[-0.02em] text-apple-ink md:text-[24px]">
                  {p.name}
                </h3>
                <p className="mt-3 text-[13px] leading-relaxed text-apple-subtle md:text-[14px]">
                  {p.stack}
                </p>
                <p className="mt-5 text-[15px] leading-relaxed text-apple-muted md:text-[16px]">
                  {p.desc}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* Trusted by */}
        <section className="mb-24 md:mb-32">
          <p className="mb-10 text-center text-[12px] font-semibold uppercase tracking-[0.14em] text-apple-muted">
            Trusted by
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:gap-x-16">
            {["Quishub", "Nybbl Ventures", "vCERN LLC", "FAST NUCES"].map((name) => (
              <span
                key={name}
                className="text-[15px] font-semibold tracking-[-0.01em] text-apple-subtle md:text-[17px]"
              >
                {name}
              </span>
            ))}
          </div>
        </section>

        {/* Quote */}
        <section className="mb-24 rounded-3xl bg-apple-section px-8 py-14 md:mb-32 md:px-16 md:py-20">
          <p className="mx-auto max-w-[36rem] text-center text-[19px] font-normal leading-[1.45] tracking-[-0.01em] text-apple-muted md:text-[21px] md:leading-[1.5]">
            I build backend systems for real usage, not just demos. Across voice AI, real-time mobile
            products, wallets, and ML pipelines, I focus on clean architecture, reliable APIs, and
            scalable delivery. My goal is simple: ship software that stays dependable as complexity and
            traffic grow.
          </p>
        </section>

        {/* Connect */}
        <section className="pb-8 md:pb-12" id="connect">
          <h2 className="mb-4 text-center text-[40px] font-semibold leading-[1.05] tracking-[-0.04em] text-apple-ink md:text-[56px]">
            Let&apos;s talk.
          </h2>
          <p className="mx-auto mb-12 max-w-md text-center text-[17px] text-apple-muted md:text-[19px]">
            Email or LinkedIn works best. I&apos;m always open to meaningful engineering conversations.
          </p>
          <div className="flex flex-col items-center gap-5 text-center">
            <a
              className="text-[17px] font-medium text-apple-blue transition-opacity hover:opacity-80 md:text-[19px]"
              href="mailto:theabdularhamkhan@gmail.com"
            >
              theabdularhamkhan@gmail.com
            </a>
            <a
              className="text-[15px] text-apple-muted transition-colors hover:text-apple-ink"
              href="tel:+923090526241"
            >
              +92 309 0526241
            </a>
            <div className="flex flex-wrap justify-center gap-8 pt-2 text-[14px] font-medium">
              <a
                className="text-apple-blue transition-opacity hover:opacity-80"
                href="https://www.linkedin.com/in/abdul-arham-khan"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                className="text-apple-blue transition-opacity hover:opacity-80"
                href="https://github.com/abdularhamkhan"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-apple-line bg-apple-footer py-12 text-center text-[13px] text-apple-muted">
        © {new Date().getFullYear()} Abdul Arham Khan
      </footer>
    </>
  );
}
