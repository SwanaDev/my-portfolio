import React, { useState, useEffect } from 'react';
import { Mail, Phone, Linkedin, MapPin, Calendar, Briefcase } from 'lucide-react';
import profileImage from './assets/images/portfoliopic.JPG';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'education', 'experience', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 350;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
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

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 250;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

const education = [
  {
    degree: "B.Tech. in Computer Science and Engineering",
    institution: "Amity University, Noida",
    duration: "2022 – 2026 (Ongoing)",
    cgpa: "8.67/10",
    highlights: [
      "Relevant Coursework: Data Structures and Algorithms, Database Management Systems, Object-Oriented Programming"
    ]
  },
  {
    degree: "XII (CBSE)",
    institution: "MDS Public School, Udaipur",
    year: "2022",
    percentage: "95.60%"
  },
  {
    degree: "X (CBSE)",
    institution: "Rockwoods High School, Udaipur",
    year: "2020",
    percentage: "94.80%"
  }
];


  const experience = [
    {
      role: "Software Development Intern",
      company: "Magna Yuma Pvt Ltd",
      duration: "May 2025 - July 2025",
      intro:  "I joined Magna Yuma to get hands on experience building real world applications, and it delivered. I worked on full-stack projects that touched every layer of the development stack: from crafting React components to designing database schemas.",
      description: [
               
        "Built full-stack web applications using React, FastAPI, and MySQL",
        "Designed and implemented RESTful APIs with role-based access control",
        "Created data visualization features to help users understand complex information",
        "Technologies: React.js - FastAPI - MySQL - SQLAlchemy - Git - Bitbucket"
      ]
    },
    
  ];

 const projects = [
  {
    title: "Wildlife Image Classification",
    tech: "Python, TensorFlow/Keras, ResNet, Transfer Learning",
    description: "Developed and deployed a wildlife image classification model using Python, TensorFlow, and ResNet, achieving high accuracy through transfer learning and optimized preprocessing pipelines. Enhanced model robustness through data augmentation strategies, hyperparameter optimization, and implementation of automated evaluation metrics for systematic performance tracking and validation.",
    github: "#",
    live: "#"
  },
  {
    title: "CampusHub",
    tech: "React.js, HTML, CSS, JavaScript",
    description: "Developed a student portal for accessing previous years' question papers by year, subject, and semester using React UI development and component-based architecture. Enhanced user experience and accessibility by implementing search and filter features, optimizing frontend performance, and ensuring cross-device compatibility using responsive design principles.",
    github: "#",
    live: "#"
  }
];


  const skills = {
  "Languages": ["C", "C++", "Java", "Python", "JavaScript"],
  "Tools & Frameworks": ["Git", "GitHub", "Bitbucket", "FastAPI"],
  "Database": ["MySQL","MongoDB"],
 
  "IDE & Editors": ["Jupyter Notebook", "Visual Studio Code", "NetBeans"],
   "Framework & Libraries": ["React.js", "Node.js", "Tailwind", "Scikit-learn", "Pandas", "NumPy", "TensorFlow"],
  "Soft Skills": [
    "Creative Design Thinking",
    "Team Collaboration",
    "Communication & Presentation",
    "Adaptability",]
    
};


  const NavItem = ({ section, label }) => (
    <button
      onClick={() => scrollToSection(section)}
      className={`px-4 py-2 transition-all ${
        activeSection === section
          ? 'border-b-2 border-black'
          : 'text-gray-600 hover:text-black'
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-zinc-50 to-slate-50" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
      {/* Header */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-50 shadow-sm">
        <div className="max-w-5xl mx-auto px-6 py-6">
          <div className="text-center mb-4">
            <h1 className="text-6xl font-bold mb-1 mt-6">Swana Dev</h1>
            <p className="text-2xl text-gray-600 mt-4 ">B.Tech Computer Science and Engineering Student | Final Year</p>
          </div>
          
          <nav className="flex justify-center space-x-8 text-xl">
            <NavItem section="about" label="About" />
            <NavItem section="education" label="Education" />
            <NavItem section="experience" label="Experience" />
            <NavItem section="projects" label="Projects" />
            <NavItem section="contact" label="Contact" />
          </nav>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-5xl mx-auto px-6">
        
        {/* About Section */}
        <section id="about" className="py-16 min-h-screen">
          <h2 className="text-3xl font-bold mb-6 pb-2 border-b border-gray-300">About Me</h2>
          
          {/* Profile Picture */}
          <div className="flex justify-center mb-8">
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-gray-300 shadow-lg">
              <img 
              src={profileImage} 
              alt="Your Name" 
              className="w-full h-full object-cover"
            />
            </div>
          </div>

          <div className="space-y-4 text-lg leading-relaxed text-gray-700 text-justify">
            <p>
              Welcome
            I'm Swana Dev, a final-year CSE student passionate about building elegant software and exploring how AI can enhance everyday applications.
            </p>
            <p>
            I write code because I love creating—transforming abstract ideas into tangible products. My interests span the full development spectrum. I enjoy bringing interfaces to life with React, building the behind-the-scenes logic with Node.js and FastAPI, and experimenting with machine learning through TensorFlow. Each layer presents unique challenges, and I'm energized by figuring out how they work together .

            What draws me to technology is its potential for impact. Whether building a student portal or training an image classification model, I focus on solutions that serve real needs. </p>
            <p>

            I believe in writing code that's clean, maintainable, and thoughtful. Code should tell a story, and I try to make mine readable and robust.

            Beyond development, I'm endlessly curious. I explore new frameworks, study design patterns, and occasionally learn languages, currently tackling German.</p>
            <p>

            As I approach graduation, I'm excited about joining teams that value quality, innovation, and collaboration. I want to work on projects that challenge me and contribute to products that matter.
            </p>
          </div>

          {/* Skills */}
          <div className="mt-10">
            <h3 className="text-2xl font-bold mb-4">Technical Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category} className="border border-gray-200 p-4 hover:border-gray-400 hover:shadow-md transition-all duration-300">
                  <h4 className="font-bold mb-2 text-lg ">{category}</h4>
                  <p className="text-gray-700 text-md">{items.join(', ')}</p>
                </div>
              ))}
            </div>
          </div>

        
{/* Resume Download */}
<div className="mt-10 text-center">
  <a 
    href="/SwanaDev_resume.pdf" 
    download="SwanaDev_Resume.pdf"
    className="inline-block border-2 border-gray-300 bg-gray-50 px-8 py-3 text-lg font-semibold rounded-lg hover:border-black hover:bg-gray-100 hover:shadow-lg transition-all duration-300"
  >
    Download Resume
  </a>
</div>
        </section>

      {/* Education Section */}
<section id="education" className="py-8 min-h-screen">
  <h2 className="text-3xl font-bold mb-6 pb-2 border-b border-gray-300">Education</h2>
  <div className="relative">
    {/* Timeline line */}
    <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gray-300"></div>

    {education.map((edu, index) => (
      <div key={index} className="relative mb-12 pl-8">
        <div className="border border-gray-200 p-6 hover:border-gray-400 hover:shadow-md transition-all duration-300">
          <div className="flex items-start justify-between mb-2 flex-wrap">
            <div>
              <h3 className="text-xl font-bold">{edu.degree}</h3>
              <p className="text-lg text-gray-700">{edu.institution}</p>
            </div>
            <span className="text-gray-600 flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              {edu.duration || edu.year}
            </span>
          </div>

          {/* Location (if available) */}
          {edu.location && (
            <p className="text-gray-600 mb-2">
              <MapPin className="w-4 h-4 inline mr-1" />
              {edu.location}
            </p>
          )}

          {/* CGPA or Percentage */}
          {edu.cgpa && <p className="font-semibold mb-2">CGPA: {edu.cgpa}</p>}
          {edu.percentage && <p className="font-semibold mb-2">Percentage: {edu.percentage}</p>}

          {/* Highlights (optional) */}
          {edu.highlights && (
            <ul className="list-inside text-gray-700 italic">
              {edu.highlights.map((highlight, i) => (
                <li key={i}>{highlight}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    ))}
  </div>
</section>


        {/* Experience Section */}
        <section id="experience" className="py-8 ">
          <h2 className="text-3xl font-bold mb-6 pb-2 border-b border-gray-300">Work Experience</h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gray-300"></div>
            
            {experience.map((exp, index) => (
              <div key={index} className="relative mb-12 pl-8 group">
                {/* Timeline dot */}
                <div className="absolute left-0 top-1 w-3 h-3 bg-white border-2 border-gray-400 rounded-full transform -translate-x-1/2 group-hover:border-black group-hover:scale-125 transition-all duration-300"></div>
                
                <div className="border border-gray-200 p-6 hover:border-gray-400 hover:shadow-md transition-all duration-300">
                  <div className="flex items-start justify-between mb-2 flex-wrap">
                    <div>
                      <h3 className="text-xl font-bold">{exp.role}</h3>
                      <p className="text-lg text-gray-700 flex items-center">
                        <Briefcase className="w-4 h-4 mr-2" />
                        {exp.company}
                      </p>
                    </div>
                    <span className="text-gray-600 flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {exp.duration}
                    </span>
                  </div>
                  <div className='text-gray-700'>{exp.intro}</div>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 mt-3">
                    {exp.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-8 ">
          <h2 className="text-3xl font-bold mb-6 pb-2 border-b border-gray-300">Projects</h2>
          <div className="grid gap-6">
            {projects.map((project, index) => (
              <div key={index} className="border border-gray-200 p-6 hover:border-gray-400 hover:shadow-md transition-all duration-300">
                <div className="flex items-start justify-between mb-3 flex-wrap">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  {/* <div className="flex gap-3">
                    <a href={project.github} className="text-gray-600 hover:text-black transition-colors duration-200">
                      <Github className="w-5 h-5" />
                    </a>
                    <a href={project.live} className="text-gray-600 hover:text-black transition-colors duration-200">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div> */}
                </div>
                <p className="text-lg text-gray-600 mb-3 italic">Tech Stack: {project.tech}</p>
                <p className="text-gray-700 leading-relaxed text-md">{project.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-8 min-h-screen">
          <h2 className="text-3xl font-bold mb-6 pb-2 border-b border-gray-300">Contact Information</h2>
          <div className="max-w-2xl space-y-6">
            <p className="text-lg text-gray-700 mb-8">
              I'm always open to discussing new opportunities, collaborations, or just having a conversation 
              about technology. Feel free to reach out through any of the following channels.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center border-b border-gray-200 pb-4 hover:border-gray-400 transition-colors duration-300">
                <Mail className="w-6 h-6 mr-4 text-gray-600" />
                <div>
                  <p className="font-semibold">Email</p>
                  <a href="mailto:your.email@example.com" className="text-gray-700 hover:text-black transition-colors duration-200">
                    swanadev@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center border-b border-gray-200 pb-4 hover:border-gray-400 transition-colors duration-300">
                <Phone className="w-6 h-6 mr-4 text-gray-600" />
                <div>
                  <p className="font-semibold">Phone</p>
                  <a href="tel:+919876543210" className="text-gray-700 hover:text-black transition-colors duration-200">
                    +91 8233822486
                  </a>
                </div>
              </div>

              <div className="flex items-center border-b border-gray-200 pb-4 hover:border-gray-400 transition-colors duration-300">
                <Linkedin className="w-6 h-6 mr-4 text-gray-600" />
                <div>
                  <p className="font-semibold">LinkedIn</p>
                  <a href=" https://www.linkedin.com/in/swana-dev" className="text-gray-700 hover:text-black transition-colors duration-200" target="_blank" rel="noopener noreferrer">
                     https://www.linkedin.com/in/swana-dev
                  </a>
                </div>
              </div>

              {/* <div className="flex items-center border-b border-gray-200 pb-4 hover:border-gray-400 transition-colors duration-300">
                <Github className="w-6 h-6 mr-4 text-gray-600" />
                <div>
                  <p className="font-semibold">GitHub</p>
                  <a href="https://github.com/yourusername" className="text-gray-700 hover:text-black transition-colors duration-200" target="_blank" rel="noopener noreferrer">
                    github.com/yourusername
                  </a>
                </div>
              </div> */}

              <div className="flex items-center pb-4 hover:border-b hover:border-gray-400 transition-colors duration-300">
                <MapPin className="w-6 h-6 mr-4 text-gray-600" />
                <div>
                  <p className="font-semibold">Location</p>
                  <p className="text-gray-700">Bengaluru,Karnataka, India</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-6 py-8 text-center text-gray-600">
          <p>Swana Dev</p>
        </div>
      </footer>
    </div>
  );
}