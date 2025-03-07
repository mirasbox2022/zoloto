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

      <div className="relative mb-12">
        <Sparkles className="w-24 h-24 text-gold-400" />
      </div>

      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-6xl md:text-8xl font-bold gold-gradient mb-6 text-center"
      >
        ZOLOTO
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-2xl md:text-3xl text-gold-300 mb-4 text-center"
      >
        Салон красоты
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-lg md:text-xl text-gold-200 mb-8 text-center"
      >
        Идеальное сочетание стиля, качества и заботы о вас.
      </motion.p>

      <motion.a
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
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
