import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Instagram } from 'lucide-react';

const Contacts = () => {
  const contactButtons = [
    {
      href: "https://wa.me/77027711043",
      icon: <Phone className="text-gold-400 h-6 w-6" />,
      text: "+7 702 771 1043"
    },
    {
      href: "https://wa.me/77273746005",
      icon: <Phone className="text-gold-400 h-6 w-6" />,
      text: "+7 727 374 6005"
    },
    {
      href: "https://www.instagram.com/zoloto__beautysalon/",
      icon: <Instagram className="text-gold-400 h-6 w-6" />,
      text: "@zoloto__beautysalon"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-24 p-4 flex flex-col items-center"
    >
      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-4xl font-bold gold-gradient mb-12"
      >
        Контакты
      </motion.h1>
      
      <div className="max-w-md w-full space-y-6">
        {contactButtons.map((contact, index) => (
          <motion.a
            key={contact.href}
            href={contact.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center glass gold-border p-6 rounded-xl hover:bg-white/10 transition-all duration-300 card-hover"
          >
            <div className="mr-6">{contact.icon}</div>
            <span className="text-gold-200 text-lg">{contact.text}</span>
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
};

export default Contacts;