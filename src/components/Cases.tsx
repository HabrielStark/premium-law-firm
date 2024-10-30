import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const cases = [
  {
    title: 'International Merger Success',
    category: 'Corporate Law',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80',
    description: 'Successfully facilitated a $2B cross-border merger',
    link: '#cases/merger',
  },
  {
    title: 'Landmark IP Victory',
    category: 'Intellectual Property',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80',
    description: 'Protected crucial patents in breakthrough technology',
    link: '#cases/ip',
  },
  {
    title: 'Complex Litigation Win',
    category: 'Litigation',
    image: 'https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?auto=format&fit=crop&q=80',
    description: 'Secured a major victory in a high-stakes dispute',
    link: '#cases/litigation',
  },
];

export default function Cases() {
  const handleCaseClick = (link: string) => {
    // For now, we'll just scroll to contact section when a case is clicked
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="cases" className="py-24 bg-black/40">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Featured Cases
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore our track record of success across various practice areas
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              onClick={() => handleCaseClick(item.link)}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-xl">
                <div className="aspect-[4/3]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="text-purple-400 text-sm mb-2">{item.category}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{item.description}</p>
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center text-purple-400"
                  >
                    <span className="mr-2">Read More</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}