import { useState, useEffect, type ReactNode } from 'react';

const NAV = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

const SKILLS = [
  { group: 'Programming', items: ['Java', 'C++', 'C#', 'SQL', 'JavaScript', 'Python'] },
  { group: 'Tools and Platforms', items: ['Unity', 'Git', 'Plaid', 'Convex', 'React', 'Node.js'] },
];

const EXPERIENCE = [
  {
    title: 'VR Developer Intern',
    company: 'Besound Studios',
    location: 'Toronto, ON',
    dates: 'Jan 2025 - Apr 2025',
    bullets: [
      'Developed C# application logic for a Unity-based VR training platform, implementing event-driven interactions, animation state machines and scene transitions',
      'Collaborated with cross-disciplinary teams to prototype and test interactive simulations, debug features and analyze performance to improve usability and stability',
      'Documented application architecture and system behaviors to support knowledge transfer and ongoing development',
    ],
  },
  {
    title: 'Deal Analyst',
    company: 'Dilawri Group of Companies',
    location: 'Mississauga, ON',
    dates: 'Apr 2026 - Jul 2026',
    bullets: [
      'Reconciled 150+ transactions monthly and worked with cross-functional stakeholders to resolve pricing discrepancies, missing documentation and posting exceptions in CDK and One-Eighty',
    ],
  },
  {
    title: 'Data Management Analyst Intern',
    company: 'Transdev Canada',
    location: 'Brampton, ON',
    dates: 'Jan 2024 - May 2024',
    bullets: [
      'Validated asset records in IBM Maximo and reconciled them against Excel using VLOOKUP and PivotTables, identifying variances and improving data quality and reporting reliability',
    ],
  },
];

type Project = {
  title: string;
  description: string;
  tags: string[];
  demo?: string;
  github?: string;
  featured?: boolean;
};

const PROJECTS: Project[] = [
  {
    title: 'Personal Finance AI Manager',
    description:
      'Full-stack finance app with Plaid transaction syncing, AI-assisted categorization, budget and goal tracking, Clerk authentication, and offline transaction storage using service workers and IndexedDB.',
    tags: ['React', 'TypeScript', 'Convex', 'Plaid'],
    demo: 'https://personal-finance-agent-sz7v.onrender.com/',
    github: 'https://github.com/roypushpak/personal-finance-agent',
    featured: true,
  },
  {
    title: 'Insurance Quote Agents',
    description:
      'Insurance comparison prototype that turns spoken descriptions into structured risk profiles with the Web Speech API, then runs parallel Playwright agents across four simulated carrier sites to normalize coverage into comparable quotes.',
    tags: ['JavaScript', 'Node.js', 'Playwright', 'Web Speech API'],
    demo: 'https://roypushpak.github.io/insurance-quote-agents/',
    github: 'https://github.com/roypushpak/insurance-quote-agents',
    featured: true,
  },
  {
    title: 'Movie Management System',
    description: 'Responsive movie management system with Gemini AI integration and OMDb API.',
    tags: ['PHP', 'JavaScript', 'SQL'],
    demo: 'https://movie-app-grof.onrender.com/',
    github: 'https://github.com/roypushpak/movie-management-system',
  },
  {
    title: 'Reminder App',
    description:
      'Secure, responsive reminders web application with PostgreSQL database and robust security measures.',
    tags: ['PHP', 'PostgreSQL', 'JavaScript'],
    demo: 'https://reminders-app-nuw8.onrender.com/',
    github: 'https://github.com/roypushpak/reminders-app',
  },
  {
    title: 'Chat Application',
    description:
      'TCP client-server chat app with desktop GUIs, multi-client support, and ACK-based echo responses.',
    tags: ['Python', 'TCP Sockets', 'Tkinter'],
    github: 'https://github.com/roypushpak/ChatApplication',
  },
];

const EDUCATION = [
  {
    degree: 'Bachelor of Computer Science (Honours)',
    school: 'Algoma University',
    location: 'Brampton, ON',
    dates: '2023 - 2025',
    note: 'GPA: 3.9/4.0',
  },
  {
    degree: 'Bachelor of Commerce in Accounting',
    school: 'University of Toronto',
    location: 'Mississauga, ON',
    dates: '2019 - 2023',
  },
];

const COURSEWORK = [
  'Data Structures',
  'Analysis of Algorithms',
  'Database Management Systems',
  'Web Development',
  'Software Engineering',
  'Operating Systems',
  'Computer Networks',
];

const LINKS = {
  email: 'mailto:roypushpak3@gmail.com',
  github: 'https://github.com/roypushpak',
  linkedin: 'https://linkedin.com/in/pushpak-roy-882954160',
  resume: "/Pushpak Roy's Resume.pdf",
};

function GitHubIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
    </svg>
  );
}

function LinkedInIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 110-4.13 2.06 2.06 0 010 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

function MailIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 17L17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SectionHeading({ index, title }: { index: string; title: string }) {
  return (
    <div className="flex items-center gap-4 mb-12">
      <span className="font-mono text-sm text-emerald-400">{index}.</span>
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">{title}</h2>
      <span className="h-px flex-1 bg-gradient-to-r from-white/15 to-transparent" />
    </div>
  );
}

function Section({ id, children }: { id: string; children: ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24 py-20">
      <div className="max-w-6xl mx-auto px-6">{children}</div>
    </section>
  );
}

const card =
  'rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm transition-colors hover:border-emerald-400/40';

export function Portfolio() {
  const [activeSection, setActiveSection] = useState('about');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;
      for (const { id } of NAV) {
        const element = document.getElementById(id);
        if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <div className="relative min-h-screen bg-[#07080c] text-slate-300 font-sans antialiased selection:bg-emerald-400/30 selection:text-white overflow-x-hidden">
      {/* Background */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:28px_28px] [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
      <div aria-hidden="true" className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[36rem] w-[60rem] rounded-full bg-gradient-to-r from-emerald-500/20 via-cyan-500/15 to-violet-500/20 blur-3xl" />

      {/* Navigation */}
      <nav className="fixed top-4 inset-x-0 z-50 px-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between rounded-2xl border border-white/10 bg-[#07080c]/70 backdrop-blur-xl px-5 h-14">
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="font-mono text-sm text-white">
            <span className="text-emerald-400">~/</span>pushpak-roy
          </button>
          <div className="hidden md:flex items-center gap-1">
            {NAV.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-3 py-1.5 text-sm rounded-lg transition-colors ${
                  activeSection === item.id ? 'text-white bg-white/10' : 'text-slate-400 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          <a
            href={LINKS.resume}
            download="Pushpak_Roy_Resume.pdf"
            className="hidden md:inline-flex items-center rounded-lg bg-white text-slate-900 text-sm font-medium px-3.5 py-1.5 hover:bg-emerald-300 transition-colors"
          >
            Resume
          </a>
          <button
            onClick={() => setMenuOpen((open) => !open)}
            className="md:hidden p-2 -mr-2 text-slate-300 hover:text-white"
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 7h16M4 12h16M4 17h16'} />
            </svg>
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden max-w-6xl mx-auto mt-2 rounded-2xl border border-white/10 bg-[#0c0e14]/95 backdrop-blur-xl p-2">
            {NAV.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-4 py-2.5 rounded-lg text-sm ${
                  activeSection === item.id ? 'text-white bg-white/10' : 'text-slate-400 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero */}
      <header className="relative pt-40 pb-24 md:pt-48 md:pb-32">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-[1.2fr_1fr] gap-14 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 font-mono text-xs text-slate-400 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Mississauga, ON
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-white leading-[1.05]">
              Pushpak Roy
            </h1>
            <p className="mt-4 text-2xl sm:text-3xl font-medium tracking-tight bg-gradient-to-r from-emerald-300 via-cyan-300 to-violet-300 bg-clip-text text-transparent">
              Computer Science Graduate
            </p>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400">
              Computer science graduate with C#/Unity development experience and full-stack finance and AI
              application projects.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <button
                onClick={() => scrollToSection('projects')}
                className="rounded-xl bg-emerald-400 text-slate-950 font-semibold px-6 py-3 hover:bg-emerald-300 transition-colors shadow-[0_0_40px_-10px_rgba(52,211,153,0.7)]"
              >
                View Projects
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="rounded-xl border border-white/15 text-white font-medium px-6 py-3 hover:bg-white/5 transition-colors"
              >
                Get In Touch
              </button>
              <div className="flex items-center gap-1 ml-1">
                <a href={LINKS.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="p-2.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors">
                  <GitHubIcon />
                </a>
                <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-2.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors">
                  <LinkedInIcon />
                </a>
                <a href={LINKS.email} aria-label="Email" className="p-2.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors">
                  <MailIcon />
                </a>
              </div>
            </div>
          </div>

          {/* Terminal card */}
          <div className="rounded-2xl border border-white/10 bg-[#0c0e14]/90 shadow-2xl shadow-emerald-500/5 overflow-hidden">
            <div className="flex items-center gap-2 px-4 h-10 border-b border-white/10">
              <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
              <span className="h-3 w-3 rounded-full bg-[#28c840]" />
              <span className="ml-3 font-mono text-xs text-slate-500">pushpak@portfolio: ~</span>
            </div>
            <pre className="p-5 font-mono text-[13px] leading-6 text-slate-300 overflow-x-auto">
              <span className="text-emerald-400">$</span> whoami{'\n'}
              <span className="text-slate-500">{'{'}</span>{'\n'}
              {'  '}<span className="text-cyan-300">"name"</span>: <span className="text-amber-200">"Pushpak Roy"</span>,{'\n'}
              {'  '}<span className="text-cyan-300">"degree"</span>: <span className="text-amber-200">"BCS (Honours), Algoma U"</span>,{'\n'}
              {'  '}<span className="text-cyan-300">"gpa"</span>: <span className="text-violet-300">3.9</span>,{'\n'}
              {'  '}<span className="text-cyan-300">"languages"</span>: [<span className="text-amber-200">"Java"</span>, <span className="text-amber-200">"C#"</span>, <span className="text-amber-200">"Python"</span>, <span className="text-amber-200">"JS"</span>],{'\n'}
              {'  '}<span className="text-cyan-300">"building"</span>: <span className="text-amber-200">"finance and AI apps"</span>{'\n'}
              <span className="text-slate-500">{'}'}</span>{'\n'}
              <span className="text-emerald-400">$</span> <span className="inline-block w-2 h-4 align-middle bg-emerald-400 animate-pulse" />
            </pre>
          </div>
        </div>
      </header>

      {/* About */}
      <Section id="about">
        <SectionHeading index="01" title="About" />
        <div className="grid md:grid-cols-3 gap-4">
          <div className={`${card} md:col-span-2 p-8`}>
            <p className="text-lg leading-relaxed text-slate-300">
              I'm a Computer Science graduate from Algoma University with a strong foundation in software
              development, from C# and Unity to full-stack React, TypeScript and Node.js applications.
            </p>
            <p className="mt-5 leading-relaxed text-slate-400">
              I combine software development skills with accounting and enterprise data management experience,
              which shapes the finance and AI tools I build. I'm always eager to learn new technologies and take
              on challenging projects.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {['Problem Solver', 'Team Player', 'Continuous Learner'].map((trait) => (
                <span key={trait} className="rounded-full border border-white/10 px-3 py-1 text-sm text-slate-300">
                  {trait}
                </span>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
            {[
              { value: '3.9', label: 'GPA out of 4.0' },
              { value: `${PROJECTS.length}`, label: 'Shipped projects' },
              { value: `${EXPERIENCE.length}`, label: 'Professional roles' },
            ].map((stat, i) => (
              <div key={stat.label} className={`${card} p-6 ${i === 2 ? 'col-span-2 md:col-span-1' : ''}`}>
                <div className="text-4xl font-semibold tracking-tight text-white">{stat.value}</div>
                <div className="mt-1 font-mono text-xs uppercase tracking-wider text-slate-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Skills */}
      <Section id="skills">
        <SectionHeading index="02" title="Skills" />
        <div className="grid md:grid-cols-2 gap-4">
          {SKILLS.map((group) => (
            <div key={group.group} className={`${card} p-8`}>
              <h3 className="font-mono text-sm text-emerald-400 mb-5">{group.group}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span key={skill} className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 font-mono text-sm text-slate-200">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Experience */}
      <Section id="experience">
        <SectionHeading index="03" title="Experience" />
        <ol className="relative border-l border-white/10 ml-2 space-y-10">
          {EXPERIENCE.map((job) => (
            <li key={job.company} className="pl-8 relative">
              <span className="absolute -left-[7px] top-2 h-3.5 w-3.5 rounded-full border-2 border-emerald-400 bg-[#07080c]" />
              <div className={`${card} p-6 md:p-8`}>
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{job.title}</h3>
                    <p className="text-emerald-300">
                      {job.company} <span className="text-slate-500">· {job.location}</span>
                    </p>
                  </div>
                  <span className="font-mono text-sm text-slate-500">{job.dates}</span>
                </div>
                <ul className="space-y-2">
                  {job.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3 text-slate-400 leading-relaxed">
                      <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-slate-500" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      {/* Projects */}
      <Section id="projects">
        <SectionHeading index="04" title="Projects" />
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-4">
          {PROJECTS.map((project, i) => (
            <article
              key={project.title}
              className={`${card} group flex flex-col p-7 ${project.featured ? 'lg:col-span-3' : 'lg:col-span-2'}`}
            >
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-xs text-slate-500">{String(i + 1).padStart(2, '0')}</span>
                {project.featured && (
                  <span className="rounded-full bg-emerald-400/10 border border-emerald-400/20 px-2.5 py-0.5 font-mono text-[11px] text-emerald-300">
                    Featured
                  </span>
                )}
              </div>
              <h3 className="text-xl font-semibold text-white group-hover:text-emerald-300 transition-colors">
                {project.title}
              </h3>
              <p className="mt-3 text-slate-400 leading-relaxed flex-1">{project.description}</p>
              <div className="mt-6 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-md bg-white/[0.06] px-2 py-1 font-mono text-xs text-slate-300">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-6 pt-5 border-t border-white/10 flex items-center gap-5 text-sm">
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="group/link inline-flex items-center gap-1 text-white hover:text-emerald-300 transition-colors">
                    Live Demo <ArrowIcon />
                  </a>
                )}
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="group/link inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors">
                    <GitHubIcon className="w-4 h-4" /> Source
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* Education */}
      <Section id="education">
        <SectionHeading index="05" title="Education" />
        <div className="grid md:grid-cols-2 gap-4">
          {EDUCATION.map((edu) => (
            <div key={edu.school} className={`${card} p-8`}>
              <span className="font-mono text-sm text-slate-500">{edu.dates}</span>
              <h3 className="mt-3 text-xl font-semibold text-white">{edu.degree}</h3>
              <p className="mt-1 text-emerald-300">
                {edu.school} <span className="text-slate-500">· {edu.location}</span>
              </p>
              {edu.note && (
                <span className="mt-5 inline-block rounded-md bg-white/[0.06] px-2.5 py-1 font-mono text-xs text-slate-300">
                  {edu.note}
                </span>
              )}
            </div>
          ))}
          <div className={`${card} p-8 md:col-span-2`}>
            <h3 className="font-mono text-sm text-emerald-400 mb-5">Relevant Coursework</h3>
            <div className="flex flex-wrap gap-2">
              {COURSEWORK.map((course) => (
                <span key={course} className="rounded-lg border border-white/10 px-3 py-1.5 text-sm text-slate-300">
                  {course}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-emerald-500/10 via-cyan-500/5 to-violet-500/10 p-10 md:p-16 text-center">
          <span className="font-mono text-sm text-emerald-400">06. What's next?</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight text-white">Let's Work Together</h2>
          <p className="mt-5 max-w-xl mx-auto text-lg text-slate-400">
            I'm always interested in new opportunities and exciting projects. Let's discuss how we can bring your
            ideas to life.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a href={LINKS.email} className="inline-flex items-center gap-2 rounded-xl bg-emerald-400 text-slate-950 font-semibold px-6 py-3 hover:bg-emerald-300 transition-colors">
              <MailIcon /> roypushpak3@gmail.com
            </a>
            <a href={LINKS.resume} download="Pushpak_Roy_Resume.pdf" className="rounded-xl border border-white/15 text-white font-medium px-6 py-3 hover:bg-white/5 transition-colors">
              Download Resume
            </a>
          </div>
          <div className="mt-8 flex justify-center gap-6 text-sm">
            <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
              <LinkedInIcon className="w-4 h-4" /> LinkedIn
            </a>
            <a href={LINKS.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
              <GitHubIcon className="w-4 h-4" /> GitHub
            </a>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-2 font-mono text-xs text-slate-500">
          <p>&copy; 2026 Pushpak Roy. All rights reserved.</p>
          <p>Built with React, TypeScript and Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}
