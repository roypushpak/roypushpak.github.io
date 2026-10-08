import { useState, useEffect } from 'react';

export function Portfolio() {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'skills', 'experience', 'projects', 'education', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-3xl mx-auto px-6">
          <div className="flex justify-center items-center h-16">
            <div className="hidden md:block">
              <div className="flex space-x-1">
                {[
                  { id: 'about', label: 'About' },
                  { id: 'skills', label: 'Skills' },
                  { id: 'experience', label: 'Experience' },
                  { id: 'projects', label: 'Projects' },
                  { id: 'education', label: 'Education' },
                  { id: 'contact', label: 'Contact' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                      activeSection === item.id
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
            <div className="md:hidden absolute right-6">
              <button
                onClick={() => {
                  const mobileMenu = document.getElementById('mobile-menu');
                  if (mobileMenu) {
                    mobileMenu.classList.toggle('hidden');
                  }
                }}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-blue-50 focus:outline-none"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* Mobile menu */}
        <div id="mobile-menu" className="md:hidden hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
            {[
              { id: 'about', label: 'About' },
              { id: 'skills', label: 'Skills' },
              { id: 'experience', label: 'Experience' },
              { id: 'projects', label: 'Projects' },
              { id: 'education', label: 'Education' },
              { id: 'contact', label: 'Contact' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  scrollToSection(item.id);
                  const mobileMenu = document.getElementById('mobile-menu');
                  if (mobileMenu) {
                    mobileMenu.classList.add('hidden');
                  }
                }}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                  activeSection === item.id
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="mb-8">
            <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-4xl font-bold shadow-xl">
              PR
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-4">Pushpak Roy</h1>
            <p className="text-2xl text-gray-600 mb-6">Computer Science Graduate</p>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Computer science graduate with C#/Unity development experience and full-stack
              finance and AI application projects.
            </p>
          </div>
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
            >
              Get In Touch
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
            >
              View Projects
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Hello! I'm Pushpak Roy</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                I'm a Computer Science graduate from Algoma University with a strong
                foundation in software development, from C# and Unity to full-stack
                React, TypeScript and Node.js applications.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                I combine software development skills with accounting and enterprise data
                management experience, which shapes the finance and AI tools I build. I'm always
                eager to learn new technologies and take on challenging projects.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  Problem Solver
                </span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  Team Player
                </span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                  Continuous Learner
                </span>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Quick Facts</h4>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Bachelor of Computer Science (Honours)
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  3.9/4.0 GPA
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Experience in VR Development, Accounting and Data Management
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Proficient in Java, C++, C#, SQL, JavaScript and Python
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Skills & Technologies</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Programming</h3>
              <div className="flex flex-wrap gap-2">
                {['Java', 'C++', 'C#', 'SQL', 'JavaScript', 'Python'].map((skill) => (
                  <span key={skill} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-lg text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Tools and Platforms</h3>
              <div className="flex flex-wrap gap-2">
                {['Unity', 'Git', 'Plaid', 'Convex', 'React', 'Node.js'].map((skill) => (
                  <span key={skill} className="bg-green-50 text-green-700 px-3 py-1 rounded-lg text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Work Experience</h2>
          <div className="space-y-12">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl border-l-4 border-blue-600">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900">VR Developer Intern</h3>
                  <p className="text-blue-600 font-medium">Besound Studios, Toronto, ON</p>
                </div>
                <span className="text-gray-500 font-medium">Jan 2025 - Apr 2025</span>
              </div>
              <ul className="text-gray-600 space-y-2">
                <li>• Developed C# application logic for a Unity-based VR training platform, implementing event-driven interactions, animation state machines and scene transitions</li>
                <li>• Collaborated with cross-disciplinary teams to prototype and test interactive simulations, debug features and analyze performance to improve usability and stability</li>
                <li>• Documented application architecture and system behaviors to support knowledge transfer and ongoing development</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-r from-purple-50 to-violet-50 p-8 rounded-2xl border-l-4 border-purple-600">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900">Deal Analyst</h3>
                  <p className="text-purple-600 font-medium">Dilawri Group of Companies, Mississauga, ON</p>
                </div>
                <span className="text-gray-500 font-medium">Apr 2026 - Jul 2026</span>
              </div>
              <ul className="text-gray-600 space-y-2">
                <li>• Reconciled 150+ transactions monthly and worked with cross-functional stakeholders to resolve pricing discrepancies, missing documentation and posting exceptions in CDK and One-Eighty</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-2xl border-l-4 border-green-600">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900">Data Management Analyst Intern</h3>
                  <p className="text-green-600 font-medium">Transdev Canada, Brampton, ON</p>
                </div>
                <span className="text-gray-500 font-medium">Jan 2024 - May 2024</span>
              </div>
              <ul className="text-gray-600 space-y-2">
                <li>• Validated asset records in IBM Maximo and reconciled them against Excel using VLOOKUP and PivotTables, identifying variances and improving data quality and reporting reliability</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                <span className="text-white text-6xl font-bold">F</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Personal Finance AI Manager</h3>
                <p className="text-gray-600 mb-4">
                  Full-stack finance app with Plaid transaction syncing, AI-assisted categorization, budget and goal tracking, Clerk authentication, and offline transaction storage using service workers and IndexedDB.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">React</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">TypeScript</span>
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">Convex</span>
                  <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">Plaid</span>
                </div>
                <div className="flex space-x-3">
                  <a href="https://personal-finance-agent-sz7v.onrender.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium transition-colors">
                    Live Demo
                  </a>
                  <a href="https://github.com/roypushpak/personal-finance-agent" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800 font-medium transition-colors">
                    GitHub
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="h-48 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                <span className="text-white text-6xl font-bold">I</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Insurance Quote Agents</h3>
                <p className="text-gray-600 mb-4">
                  Insurance comparison prototype that turns spoken descriptions into structured risk profiles with the Web Speech API, then runs parallel Playwright agents across four simulated carrier sites to normalize coverage into comparable quotes.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">JavaScript</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Node.js</span>
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">Playwright</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Web Speech API</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Education</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6">
                <span className="text-white text-2xl font-bold">🎓</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">Bachelor of Computer Science (Honours)</h3>
              <p className="text-blue-600 font-medium mb-2">Algoma University, Brampton, ON</p>
              <p className="text-gray-600">2023 - 2025 | GPA: 3.9/4.0</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-6">
                <span className="text-white text-2xl font-bold">📊</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">Graduate Diploma in Accounting</h3>
              <p className="text-blue-600 font-medium mb-2">Wilfrid Laurier University, Waterloo, ON</p>
              <p className="text-gray-600">2026 Candidate</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mb-6">
                <span className="text-white text-2xl font-bold">💼</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">Bachelor of Commerce in Accounting</h3>
              <p className="text-blue-600 font-medium mb-2">University of Toronto, Mississauga, ON</p>
              <p className="text-gray-600">2019 - 2023</p>
            </div>
          </div>
          <div className="grid gap-8">
            {/* Coursework Card */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mb-6">
                <span className="text-white text-2xl font-bold">📚</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Relevant Coursework</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Data Structures</span>
                </div>
                <div className="flex items-center">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Analysis of Algorithms</span>
                </div>
                <div className="flex items-center">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Database Management Systems</span>
                </div>
                <div className="flex items-center">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Web Development</span>
                </div>
                <div className="flex items-center">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Software Engineering</span>
                </div>
                <div className="flex items-center">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Operating Systems</span>
                </div>
                <div className="flex items-center">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Computer Networks</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Let's Work Together</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects. 
            Let's discuss how we can bring your ideas to life.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-xl">📧</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
              <a href="mailto:roypushpak3@gmail.com" className="text-gray-600 hover:text-blue-600 transition-colors">
                roypushpak3@gmail.com
              </a>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 text-xl">💼</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">LinkedIn</h3>
              <a href="https://linkedin.com/in/pushpak-roy-882954160" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
                linkedin.com/in/pushpak-roy-882954160
              </a>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">GitHub</h3>
              <a href="https://github.com/roypushpak" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
                github.com/roypushpak
              </a>
            </div>
          </div>
          
          <div className="flex justify-center space-x-4">
            <a 
              href="mailto:roypushpak3@gmail.com" 
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl inline-block"
            >
              Send Message
            </a>
            <a 
              href="/Pushpak Roy's Resume.pdf" 
              download="Pushpak_Roy_Resume.pdf"
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors inline-block"
            >
              Download Resume
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-400 mb-4">
            &copy; 2026 Pushpak Roy. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            Built with React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
}
