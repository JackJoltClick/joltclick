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
      title: "Custom Web Development",
      description: "Cutting-edge websites built with modern frameworks and optimized for performance.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI-Powered Solutions",
      description: "Intelligent features and automation that transform how your business operates.",
      color: "from-green-500 to-teal-500"
    }
  ];

  const features = [
    { text: "Lightning-fast performance", icon: <Rocket className="w-5 h-5" /> },
    { text: "Responsive design across all devices", icon: <Smartphone className="w-5 h-5" /> },
    { text: "SEO optimized for maximum visibility", icon: <Sparkles className="w-5 h-5" /> },
    { text: "Advanced security implementations", icon: <Shield className="w-5 h-5" /> },
    { text: "Scalable architecture", icon: <Code className="w-5 h-5" /> },
    { text: "24/7 support and maintenance", icon: <CheckCircle className="w-5 h-5" /> }
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
      />

      {/* Navigation */}
      <motion.nav 
        className="nav"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="nav-container">
          <motion.div 
            className="logo"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Zap className="w-8 h-8" />
            <span>JOLTCLICK</span>
          </motion.div>
          
          {/* Desktop Navigation */}
          <div className="nav-links desktop-nav">
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#technologies">Technologies</a>
            <motion.a 
              href="#contact" 
              className="cta-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button 
            className="mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
            >
              <a href="#services" onClick={() => setIsMenuOpen(false)}>Services</a>
              <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
              <a href="#technologies" onClick={() => setIsMenuOpen(false)}>Technologies</a>
              <a href="#contact" className="cta-button" onClick={() => setIsMenuOpen(false)}>Get Started</a>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Section */}
      <section className="hero">
        <motion.div 
          className="hero-bg"
          style={{ y: yBg }}
        />
        <motion.div 
          className="hero-content"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <div className="hero-text">
            <motion.h1 variants={fadeInUp}>
              Next-Level Digital
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
                {" "}Experiences
              </motion.span>
            </motion.h1>
            <motion.p variants={fadeInUp}>
              We craft cutting-edge websites and custom applications powered by AI, 
              delivering solutions that drive real business impact and set new industry standards.
            </motion.p>
            <motion.div className="hero-buttons" variants={fadeInUp}>
              <motion.button 
                className="primary-button"
                {...scaleOnHover}
              >
                Start Your Project
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button 
                className="secondary-button"
                {...scaleOnHover}
              >
                View Our Work
              </motion.button>
            </motion.div>
          </div>
          
          <motion.div 
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div 
              className="floating-card"
              {...floatingAnimation}
            >
              <div className="card-header">
                <div className="dots">
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
              <div className="card-content">
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
              />
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div 
          className="scroll-indicator"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </section>

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
            Our Expertise
          </motion.h2>
          <motion.p 
            className="section-subtitle" 
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            Transforming ideas into powerful digital solutions
          </motion.p>
          <motion.div 
            className="services-grid"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div 
                key={index} 
                className="service-card" 
                variants={fadeInUp}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div 
                  className={`service-icon gradient-${index}`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
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
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="features">
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
              <h2>Why Choose JOLTCLICK?</h2>
              <p>
                We combine technical excellence with innovative design to deliver 
                solutions that exceed expectations and drive measurable results.
              </p>
              <motion.div 
                className="features-list"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                {features.map((feature, index) => (
                  <motion.div 
                    key={index} 
                    className="feature-item" 
                    variants={fadeInUp}
                    whileHover={{ x: 10 }}
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.3 }}
                    >
                      {feature.icon}
                    </motion.div>
                    <span>{feature.text}</span>
                  </motion.div>
                ))}
              </motion.div>
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
                    500+
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
            Technologies & Tools
          </motion.h2>
          <motion.p 
            className="section-subtitle" 
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            Cutting-edge technologies that power our solutions
          </motion.p>
          <motion.div 
            className="technologies-grid"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {technologies.map((tech, index) => (
              <motion.div 
                key={index} 
                className="tech-card" 
                variants={fadeInUp}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="tech-header">
                  <motion.div 
                    className="tech-icon"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {tech.icon}
                  </motion.div>
                  <h3>{tech.category}</h3>
                </div>
                <div className="tech-tools">
                  {tech.tools.map((tool, toolIndex) => (
                    <motion.span 
                      key={toolIndex} 
                      className="tech-tool"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: toolIndex * 0.1 }}
                      whileHover={{ scale: 1.1 }}
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
                />
              </motion.div>
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
            Let's discuss how we can bring your vision to life with cutting-edge technology
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
                <Mail className="w-6 h-6" />
                <div>
                  <h4>Email Us</h4>
                  <p>hello@joltclick.com</p>
                </div>
              </motion.div>
              <motion.div 
                className="contact-item"
                whileHover={{ x: 10 }}
              >
                <MapPin className="w-6 h-6" />
                <div>
                  <h4>Visit Us</h4>
                  <p>London, UK</p>
                </div>
              </motion.div>
            </motion.div>
            <motion.form className="contact-form" variants={fadeInUp}>
              <div className="form-group">
                <motion.input 
                  type="text" 
                  placeholder="Your Name" 
                  required 
                  whileFocus={{ scale: 1.02 }}
                />
                <motion.input 
                  type="email" 
                  placeholder="Your Email" 
                  required 
                  whileFocus={{ scale: 1.02 }}
                />
              </div>
              <motion.input 
                type="text" 
                placeholder="Project Type" 
                whileFocus={{ scale: 1.02 }}
              />
              <motion.textarea 
                placeholder="Tell us about your project..." 
                rows="4" 
                required
                whileFocus={{ scale: 1.02 }}
              />
              <motion.button 
                type="submit" 
                className="primary-button"
                {...scaleOnHover}
              >
                Send Message
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.form>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <motion.div 
                className="logo"
                whileHover={{ scale: 1.05 }}
              >
                <Zap className="w-6 h-6" />
                <span>JOLTCLICK</span>
              </motion.div>
              <p>Crafting the future of digital experiences</p>
            </div>
            <div className="footer-links">
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
            </div>
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
