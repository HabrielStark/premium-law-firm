import React from 'react';
import { motion } from 'framer-motion';
import { Scale, FileText, Users, Building2, Globe2, Shield } from 'lucide-react';

const services = [
  {
    icon: Scale,
    title: 'Corporate Law',
    description: 'Strategic legal solutions for businesses of all sizes',
  },
  {
    icon: FileText,
    title: 'Intellectual Property',
    description: 'Protecting your innovations and creative assets',
  },
  {
    icon: Users,
    title: 'Employment Law',
    description: 'Comprehensive workplace legal solutions',
  },
  {
    icon: Building2,
    title: 'Real Estate',
    description: 'Expert guidance in property transactions',
  },
  {
    icon: Globe2,
    title: 'International Law',
    description: 'Cross-border legal expertise and consultation',
  },
  {
    icon: Shield,
    title: 'Litigation',
    description: 'Powerful advocacy in complex disputes',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export default function Services() {
  return (
    <section id="services" className="py-24 bg-black/40">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive legal solutions powered by cutting-edge technology and decades of expertise
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
                <div className="relative bg-white/5 p-8 rounded-xl backdrop-blur-sm border border-white/10 h-full">
                  <Icon className="w-12 h-12 text-purple-400 mb-4" />
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    {service.title}
                  </h3>
                  <p className="text-gray-400">{service.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}