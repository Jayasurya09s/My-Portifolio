import { useState, useEffect } from 'react';
import { NavLink } from './NavLink';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '#projects' },
    { name: 'Hackathons', href: '#hackathons' },
    { name: 'Skills', href: '/skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-panel border-b border-neon-blue/30' : ''
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <NavLink to="/" className="text-xl sm:text-2xl font-bold text-neon-blue text-glow-blue">
            MJ<span className="text-neon-violet">.</span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = typeof window !== 'undefined' && 
                (link.href === '/' ? window.location.pathname === '/' : 
                 window.location.pathname === link.href || 
                 window.location.hash === link.href);
              
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative transition-colors duration-300 group ${
                    isActive ? 'text-neon-cyan' : 'text-foreground hover:text-neon-cyan'
                  }`}
                >
                  {link.name}
                  <motion.span
                    className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-neon-cyan to-neon-blue"
                    initial={{ width: 0 }}
                    animate={{ width: isActive ? '100%' : 0 }}
                    transition={{ duration: 0.3 }}
                  ></motion.span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon-cyan group-hover:w-full transition-all duration-300"></span>
                  {isActive && (
                    <motion.span
                      layoutId="navbar-glow"
                      className="absolute inset-0 -z-10 blur-xl bg-neon-cyan/20 rounded-lg"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-neon-blue p-2"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-panel mt-2 rounded-lg overflow-hidden"
          >
            <div className="flex flex-col space-y-4 p-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-foreground hover:text-neon-cyan transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};
