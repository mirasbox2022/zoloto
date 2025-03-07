import React from 'react';
import { motion } from 'framer-motion';
import { Scissors, Syringe, Space, Mail, MessageCircle, Eye, Sparkles, Car } from 'lucide-react';

const serviceCategories = [
  {
    title: 'Услуги',
    icon: <Syringe className="text-gold-400 h-6 w-6" />,
    items: ['Инъекционные процедуры', 'Аппаратная косметология', 'Чистка лица', 'Пилинги']
  },
  {
    title: 'Парикмахерские услуги',
    icon: <Scissors className="text-gold-400 h-6 w-6" />,
    items: [
      'Детская стрижка',
      'Стрижка бороды',
      'Наращивание волос',
      'Кератиновое выпрямление',
      'Химическая завивка',
      'Плетение кос',
      'Сложное окрашивание',
      'Афрокосы',
      'Афрокудри',
      'Ботокс волос',
      'Полировка волос',
      'Свадебные и вечерние прически',
      'Прикорневой объем',
      'Женская стрижка от 3000 тг',
      'Мужская стрижка от 2500 тг'
    ]
  },
  {
    title: 'Ногтевые студии',
    icon: <Mail className="text-gold-400 h-6 w-6" />,
    items: [
      'Педикюр',
      'Наращивание гелем',
      'Наращивание акрилом',
      'Мужской маникюр',
      'Детский маникюр',
      'Гель-лак',
      'Аппаратный маникюр',
      'Парафиновые ванночки',
      'Без покрытия от 2500 тг'
    ]
  },
  {
    title: 'Массаж',
    icon: <MessageCircle className="text-gold-400 h-6 w-6" />,
    items: ['Массаж лица', 'Оздоровительный массаж', 'Антицеллюлитный массаж', 'Спортивный массаж']
  },
  {
    title: 'Ресницы и брови',
    icon: <Eye className="text-gold-400 h-6 w-6" />,
    items: [
      'Наращивание ресниц',
      'Ламинирование ресниц',
      'Окрашивание ресниц',
      'Коррекция бровей',
      'Окрашивание бровей',
      'Ламинирование бровей'
    ]
  },
  {
    title: 'Эпиляция',
    icon: <Sparkles className="text-gold-400 h-6 w-6" />,
    items: ['Шугаринг']
  },
  {
    title: 'Пирсинг',
    icon: <Space className="text-gold-400 h-6 w-6" />,
    items: ['Классический прокол мочки уха']
  },
  {
    title: 'Выезд на дом',
    icon: <Car className="text-gold-400 h-6 w-6" />,
    items: []
  }
];

const Services = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-24 p-4"
    >
      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-4xl font-bold gold-gradient mb-12 text-center"
      >
        Услуги
      </motion.h1>
      
      <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {serviceCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            className="glass gold-border rounded-xl p-6 card-hover"
          >
            <div className="flex items-center mb-4">
              {category.icon}
              <h2 className="text-xl font-bold text-gold-400 ml-3">{category.title}</h2>
            </div>
            
            <ul className="space-y-2">
              {category.items.map((item, i) => (
                <li key={i} className="text-gold-200">{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Services;