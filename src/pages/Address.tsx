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
        className="max-w-md w-full glass gold-border rounded-2xl overflow-hidden"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
          <img
            src="https://github.com/mirasbox2022/zoloto/blob/0e7d755853152330c64e3220449cf7738b393a8c/src/pages/zoloto.png"
            alt="Salon exterior"
            className="w-full h-64 object-cover"
          />
        </div>
        
        <div className="p-8">
          <div className="flex items-center mb-6">
            <MapPin className="text-gold-400 mr-3 h-6 w-6" />
            <p className="text-gold-200 text-lg">Улица Толе би, 261, Алматы</p>
          </div>
          
          <a
            href="https://2gis.kz/almaty/geo/70000001025074792"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-black font-bold py-3 px-6 rounded-xl text-center transition-all duration-300 transform hover:scale-[1.02]"
          >
            Открыть в 2GIS
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Address;
