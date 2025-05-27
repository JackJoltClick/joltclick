import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  Zap, 
  Code, 
  Smartphone, 
  Brain, 
  CheckCircle, 
  Mail,
  MapPin,
  Menu,
  X,
  ChevronDown,
  Sparkles,
  Rocket,
  Shield,
  Database,
  Globe,
  Cloud,
  Palette
} from 'lucide-react';
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  
  // Parallax effects
  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  // Mouse tracking for interactive elements
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const scaleOnHover = {
    whileHover: { 
      scale: 1.05,
      transition: { duration: 0.2 }
    },
    whileTap: { scale: 0.95 }
  };

  const floatingAnimation = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "High-Converting Websites",
      description: "Beautiful designs that actually convert. We build websites that don't just impress visitors—they turn them into paying customers.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Strategic Mobile Apps",
      description: "Mobile experiences that users love and businesses profit from. Every feature designed with your ROI in mind.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Intelligent Automation",
      description: "AI-powered solutions that streamline operations and boost efficiency. Real automation that delivers measurable results.",
      color: "from-green-500 to-teal-500"
    }
  ];

  const features = [
    { text: "Performance-optimized for maximum conversions", icon: <Rocket className="w-5 h-5" /> },
    { text: "Mobile-first design that works on every device", icon: <Smartphone className="w-5 h-5" /> },
    { text: "SEO strategy that gets you found by customers", icon: <Sparkles className="w-5 h-5" /> },
    { text: "Enterprise-grade security you can trust", icon: <Shield className="w-5 h-5" /> },
    { text: "Scalable architecture that grows with your business", icon: <Code className="w-5 h-5" /> },
    { text: "Dedicated support when you need it most", icon: <CheckCircle className="w-5 h-5" /> }
  ];

  const technologies = [
    {
      category: "Frontend",
      icon: <Globe className="w-6 h-6" />,
      tools: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      category: "Backend",
      icon: <Database className="w-6 h-6" />,
      tools: ["Node.js", "Python", "PostgreSQL", "MongoDB", "Redis", "GraphQL"],
      color: "from-green-500 to-emerald-500"
    },
    {
      category: "Mobile",
      icon: <Smartphone className="w-6 h-6" />,
      tools: ["React Native", "Flutter", "Swift", "Kotlin", "Expo", "Firebase"],
      color: "from-purple-500 to-pink-500"
    },
    {
      category: "AI/ML",
      icon: <Brain className="w-6 h-6" />,
      tools: ["TensorFlow", "PyTorch", "OpenAI", "Hugging Face", "LangChain", "Pinecone"],
      color: "from-orange-500 to-red-500"
    },
    {
      category: "Cloud & DevOps",
      icon: <Cloud className="w-6 h-6" />,
      tools: ["AWS", "Docker", "Kubernetes", "Vercel", "GitHub Actions", "Terraform"],
      color: "from-indigo-500 to-purple-500"
    },
    {
      category: "Design",
      icon: <Palette className="w-6 h-6" />,
      tools: ["Figma", "Adobe XD", "Sketch", "Principle", "Lottie", "After Effects"],
      color: "from-pink-500 to-rose-500"
    }
  ];

  return (
    <div className="App">
      {/* Cursor follower for desktop */}
      <motion.div 
        className="cursor-follower"
        animate={{
          x: mousePosition.x - 10,
          y: mousePosition.y - 10,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
        aria-hidden="true"
      />

      {/* Navigation */}
      <motion.nav 
        className="nav"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="nav-container">
          <motion.div 
            className="logo"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Zap className="w-8 h-8" aria-hidden="true" />
            <span>JOLTCLICK</span>
          </motion.div>
          
          {/* Desktop Navigation */}
          <div className="nav-links desktop-nav">
            <a href="#services" aria-label="View our services">Services</a>
            <a href="#about" aria-label="Learn about JOLTCLICK">About</a>
            <a href="#technologies" aria-label="See our technologies">Technologies</a>
            <motion.a 
              href="#contact" 
              className="cta-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Get started with your project"
            >
              Get Started
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button 
            className="mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.9 }}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className="mobile-nav"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              role="menu"
            >
              <a href="#services" onClick={() => setIsMenuOpen(false)} role="menuitem">Services</a>
              <a href="#about" onClick={() => setIsMenuOpen(false)} role="menuitem">About</a>
              <a href="#technologies" onClick={() => setIsMenuOpen(false)} role="menuitem">Technologies</a>
              <a href="#contact" className="cta-button" onClick={() => setIsMenuOpen(false)} role="menuitem">Get Started</a>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Section */}
      <header className="hero">
        <motion.div 
          className="hero-bg"
          style={{ y: yBg }}
          aria-hidden="true"
        />
        <motion.div 
          className="hero-content"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <div className="hero-text">
            <motion.h1 variants={fadeInUp}>
              Digital Solutions That
              <motion.span 
                className="gradient-text"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                {" "}Drive Results
              </motion.span>
            </motion.h1>
            <motion.p variants={fadeInUp}>
              Most agencies build websites that look pretty but don't perform. We engineer 
              high-converting digital experiences that turn your visitors into customers 
              and grow your bottom line.
            </motion.p>
            <motion.div className="hero-buttons" variants={fadeInUp}>
              <motion.button 
                className="primary-button"
                {...scaleOnHover}
                aria-label="Start your project with JOLTCLICK"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </motion.button>
              <motion.button 
                className="secondary-button"
                {...scaleOnHover}
                aria-label="View our portfolio and previous work"
              >
                View Case Studies
              </motion.button>
            </motion.div>
          </div>
          
          <motion.div 
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            aria-label="Animated code visualization"
          >
            <motion.div 
              className="floating-card"
              {...floatingAnimation}
            >
              <div className="card-header">
                <div className="dots" aria-hidden="true">
                  <motion.span
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0 }}
                  />
                  <motion.span
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                  />
                  <motion.span
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                  />
                </div>
              </div>
              <div className="card-content" aria-hidden="true">
                <motion.div 
                  className="code-line"
                  animate={{ width: ["0%", "100%", "100%"] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0 }}
                />
                <motion.div 
                  className="code-line short"
                  animate={{ width: ["0%", "60%", "60%"] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                />
                <motion.div 
                  className="code-line"
                  animate={{ width: ["0%", "100%", "100%"] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                />
                <motion.div 
                  className="code-line medium"
                  animate={{ width: ["0%", "80%", "80%"] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
                />
              </div>
            </motion.div>

            {/* Floating particles */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="floating-particle"
                animate={{
                  y: [-20, -60, -20],
                  x: [-10, 10, -10],
                  opacity: [0.3, 0.8, 0.3]
                }}
                transition={{
                  duration: 3 + i * 0.5,
                  repeat: Infinity,
                  delay: i * 0.5
                }}
                style={{
                  left: `${20 + i * 15}%`,
                  top: `${30 + (i % 2) * 20}%`
                }}
                aria-hidden="true"
              />
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div 
          className="scroll-indicator"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          aria-label="Scroll down to see more"
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </header>

      {/* Services Section */}
      <section id="services" className="services">
        <motion.div 
          className="container"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            What Sets Us Apart
          </motion.h2>
          <motion.p 
            className="section-subtitle" 
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            Results-driven solutions that deliver measurable business growth
          </motion.p>
          <motion.div 
            className="services-grid"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            role="list"
          >
            {services.map((service, index) => (
              <motion.article 
                key={index} 
                className="service-card" 
                variants={fadeInUp}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                role="listitem"
              >
                <motion.div 
                  className={`service-icon gradient-${index}`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  aria-hidden="true"
                >
                  {service.icon}
                </motion.div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <motion.div 
                  className="service-glow"
                  animate={{
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.5
                  }}
                  aria-hidden="true"
                />
              </motion.article>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="about" className="features">
        <motion.div 
          className="container"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="features-content">
            <motion.div 
              className="features-text"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2>Why Leading Businesses Choose JOLTCLICK</h2>
              <p>
                While other agencies focus on vanity metrics, we focus on what matters: 
                your ROI. Every decision we make is designed to drive measurable results 
                for your business.
              </p>
              <motion.ul 
                className="features-list"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                role="list"
              >
                {features.map((feature, index) => (
                  <motion.li 
                    key={index} 
                    className="feature-item" 
                    variants={fadeInUp}
                    whileHover={{ x: 10 }}
                    role="listitem"
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.3 }}
                      aria-hidden="true"
                    >
                      {feature.icon}
                    </motion.div>
                    <span>{feature.text}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
            <motion.div 
              className="features-visual"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="stats-card"
                whileHover={{ scale: 1.02 }}
                role="region"
                aria-label="Company statistics"
              >
                <motion.div 
                  className="stat"
                  whileHover={{ scale: 1.1 }}
                >
                  <motion.h3
                    animate={{ 
                      textShadow: [
                        "0 0 10px #00d4ff",
                        "0 0 20px #00d4ff",
                        "0 0 10px #00d4ff"
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    50+
                  </motion.h3>
                  <p>Projects Delivered</p>
                </motion.div>
                <motion.div 
                  className="stat"
                  whileHover={{ scale: 1.1 }}
                >
                  <motion.h3
                    animate={{ 
                      textShadow: [
                        "0 0 10px #00d4ff",
                        "0 0 20px #00d4ff",
                        "0 0 10px #00d4ff"
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  >
                    98%
                  </motion.h3>
                  <p>Client Satisfaction</p>
                </motion.div>
                <motion.div 
                  className="stat"
                  whileHover={{ scale: 1.1 }}
                >
                  <motion.h3
                    animate={{ 
                      textShadow: [
                        "0 0 10px #00d4ff",
                        "0 0 20px #00d4ff",
                        "0 0 10px #00d4ff"
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  >
                    24/7
                  </motion.h3>
                  <p>Support Available</p>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Technologies Section */}
      <section id="technologies" className="technologies">
        <motion.div 
          className="container"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            Our Technology Stack
          </motion.h2>
          <motion.p 
            className="section-subtitle" 
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            Cutting-edge technologies that give your business a competitive advantage
          </motion.p>
          <motion.div 
            className="technologies-grid"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            role="list"
          >
            {technologies.map((tech, index) => (
              <motion.article 
                key={index} 
                className="tech-card" 
                variants={fadeInUp}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                role="listitem"
              >
                <div className="tech-header">
                  <motion.div 
                    className="tech-icon"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    aria-hidden="true"
                  >
                    {tech.icon}
                  </motion.div>
                  <h3>{tech.category}</h3>
                </div>
                <div className="tech-tools" role="list">
                  {tech.tools.map((tool, toolIndex) => (
                    <motion.span 
                      key={toolIndex} 
                      className="tech-tool"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: toolIndex * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                      role="listitem"
                    >
                      {tool}
                    </motion.span>
                  ))}
                </div>
                <motion.div 
                  className="tech-glow"
                  animate={{
                    opacity: [0.3, 0.7, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.5
                  }}
                  aria-hidden="true"
                />
              </motion.article>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <motion.div 
          className="container"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            Ready to Transform Your Digital Presence?
          </motion.h2>
          <motion.p 
            className="section-subtitle" 
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            Let's discuss how we can help you achieve your business goals with a strategic digital solution
          </motion.p>
          <motion.div 
            className="contact-content"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div className="contact-info" variants={fadeInUp}>
              <motion.div 
                className="contact-item"
                whileHover={{ x: 10 }}
              >
                <Mail className="w-6 h-6" aria-hidden="true" />
                <div>
                  <h4>Email Us</h4>
                  <p>
                    <a href="mailto:hello@joltclick.com" aria-label="Send email to JOLTCLICK">
                      hello@joltclick.com
                    </a>
                  </p>
                </div>
              </motion.div>
              <motion.div 
                className="contact-item"
                whileHover={{ x: 10 }}
              >
                <MapPin className="w-6 h-6" aria-hidden="true" />
                <div>
                  <h4>Visit Us</h4>
                  <p>London, UK</p>
                </div>
              </motion.div>
            </motion.div>
            <motion.form 
              className="contact-form" 
              variants={fadeInUp}
              aria-label="Contact form"
            >
              <div className="form-group">
                <motion.input 
                  type="text" 
                  placeholder="Your Name" 
                  required 
                  whileFocus={{ scale: 1.02 }}
                  aria-label="Your name"
                />
                <motion.input 
                  type="email" 
                  placeholder="Your Email" 
                  required 
                  whileFocus={{ scale: 1.02 }}
                  aria-label="Your email address"
                />
              </div>
              <motion.input 
                type="text" 
                placeholder="Project Type" 
                whileFocus={{ scale: 1.02 }}
                aria-label="Type of project"
              />
              <motion.textarea 
                placeholder="Tell us about your project..." 
                rows="4" 
                required
                whileFocus={{ scale: 1.02 }}
                aria-label="Project description"
              />
              <motion.button 
                type="submit" 
                className="primary-button w-full"
                {...scaleOnHover}
                aria-label="Send message to JOLTCLICK"
              >
                Get Your Strategy Session
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </motion.button>
            </motion.form>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="footer" role="contentinfo">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <motion.div 
                className="logo"
                whileHover={{ scale: 1.05 }}
              >
                <Zap className="w-6 h-6" aria-hidden="true" />
                <span>JOLTCLICK</span>
              </motion.div>
              <motion.p 
                className="footer-tagline"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Transforming businesses through strategic digital solutions
              </motion.p>
            </div>
            <nav className="footer-links" aria-label="Footer navigation">
              <div>
                <h4>Services</h4>
                <motion.a href="#services" whileHover={{ x: 5 }}>Web Development</motion.a>
                <motion.a href="#services" whileHover={{ x: 5 }}>Mobile Apps</motion.a>
                <motion.a href="#services" whileHover={{ x: 5 }}>AI Solutions</motion.a>
              </div>
              <div>
                <h4>Company</h4>
                <motion.a href="#about" whileHover={{ x: 5 }}>About Us</motion.a>
                <motion.a href="#technologies" whileHover={{ x: 5 }}>Technologies</motion.a>
                <motion.a href="#contact" whileHover={{ x: 5 }}>Contact</motion.a>
              </div>
            </nav>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 JOLTCLICK. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
