import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const Address = () => {
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
        Наш адрес
      </motion.h1>
      
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="max-w-lg w-full glass gold-border rounded-2xl overflow-hidden"
      >
        <a
          href="https://2gis.kz/almaty/geo/70000001025074792"
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
            <img
              src="/zoloto.png"
              alt="Salon exterior"
              className="w-full h-96 object-cover"
            />
          </div>
        </a>
        
        <div className="p-6 flex items-center">
          <MapPin className="text-gold-400 mr-3 h-6 w-6" />
          <p className="text-gold-200 text-lg">Улица Толе би, 261, Алматы</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Address;
