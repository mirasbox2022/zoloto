import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,184,0,0.1)_0%,_transparent_70%)]" />
      
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ 
          type: "spring",
          stiffness: 200,
          damping: 20,
          delay: 0.2 
        }}
        className="relative mb-12"
      >
        <div className="absolute inset-0 animate-pulse bg-gold-400 rounded-full blur-xl opacity-20" />
        <Sparkles className="w-24 h-24 text-gold-400" />
      </motion.div>
      
      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-6xl md:text-8xl font-bold gold-gradient mb-6 text-center"
      >
        ZOLOTO
      </motion.h1>
      
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-2xl md:text-3xl text-gold-300 mb-8 text-center"
      >
        Салон красоты
      </motion.p>
      
      <motion.a
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8 }}
        href="https://wa.me/77027711043"
        target="_blank"
        rel="noopener noreferrer"
        className="glass gold-border px-8 py-4 rounded-full text-gold-200 hover:bg-gold-500 hover:text-white transition"
      >
        Записаться
      </motion.a>
    </motion.div>
  );
};

export default Home;
