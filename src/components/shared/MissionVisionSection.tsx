"use client";

import { motion } from "framer-motion";

const missionPoints = [
  "To cultivate enduring partnerships with our clients by delivering insightful, value-oriented design and build solutions tailored for residential, commercial, and lifestyle environments.",
  "To integrate architecture, interiors, landscapes, and turnkey execution through a multidisciplinary approach that ensures precision, quality, and excellence at every phase of the project.",
  "To champion sustainability through responsible design practices, mindful material selection, and methodologies that promote long-term environmental stewardship.",
  "To create a safe, supportive, and inspiring workplace for our employees, emphasising career development, continuous learning, collaboration, and long-term stability.",
];

const visionPoints = [
  "Our goal is to foster enduring relationships with clients through thoughtful, value-driven design and build solutions tailored for residential, commercial, and lifestyle spaces.",
  "We aim to create functional and enduring environments that are uncompromisingly refined, bringing comfort, joy, and meaning to those who live and work within them.",
  "We strive to redefine architecture and design by seamlessly blending global sensibilities with Indian craftsmanship, innovation, and a touch of modern minimalism.",
  "Our vision encompasses the creation of holistic environments—integrating architecture, interiors, landscapes, and built forms—that inspire well-being, creativity, and a profound connection between people and their surroundings.",
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

function Card({
  title,
  icon,
  points,
  delay,
}: {
  title: string;
  icon: React.ReactNode;
  points: string[];
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className="flex flex-col bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 h-full"
    >
      {/* Card Header — light gray, centered */}
      <div className="bg-gray-200 px-8 py-6 flex flex-col items-center justify-center gap-2 border-b border-gray-300">
        <span className="text-3xl">{icon}</span>
        <h2 className="text-xl font-black text-gray-800 tracking-tight uppercase text-center">{title}</h2>
      </div>

      {/* Points */}
      <motion.ul
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="flex flex-col gap-4 p-8 flex-1"
      >
        {points.map((point, i) => (
          <motion.li key={i} variants={itemVariants} className="flex items-start gap-3">
            <span className="flex-shrink-0 relative top-[0.6rem] w-2 h-2 rounded-full bg-gray-900" />
            <p className="text-gray-700 text-base leading-relaxed">{point}</p>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
}

export function MissionVisionSection() {
  return (
    <section className="bg-gray-50 pt-8 pb-16 px-4">
      {/* Section Header — no "Our Purpose" label, smaller text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center mb-10"
      >
        <h2 className="text-4xl font-bold text-black leading-tight">
          Driven by a Clear Mission, Guided by an Enduring Vision
        </h2>
      </motion.div>

      {/* Two Column Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card title="Our Mission" icon="🎯" points={missionPoints} delay={0} />
        <Card title="Our Vision" icon="🌟" points={visionPoints} delay={0.15} />
      </div>
    </section>
  );
}
