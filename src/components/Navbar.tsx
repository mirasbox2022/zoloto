import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const menuItems = [
  { path: '/', label: 'Главная' },
  { path: '/address', label: 'Адрес' },
  { path: '/contacts', label: 'Контакты' },
  { path: '/services', label: 'Услуги' },
];

const Navbar: React.FC<NavbarProps> = ({ isOpen, setIsOpen }) => {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="px-6 py-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold gold-gradient">ZOLOTO</Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gold-400 hover:text-gold-300 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '-100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '-100%' }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            className="fixed top-0 left-0 h-screen w-80 menu-gradient backdrop-blur-lg z-40 pt-20"
          >
            <div className="flex flex-col space-y-6 p-8">
              {menuItems.map((item) => (
                <motion.div
                  key={item.path}
                  whileHover={{ x: 10 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className="text-xl text-gold-300 hover:text-gold-400 transition-colors"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;