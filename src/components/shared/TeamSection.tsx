"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const team = [
  {
    name: "Ar. Prince K. Kumar",
    role: "Principal Architect (Founder/Director)",
    image: "/images/team/Prince.jpg",
    qual: "B. Arch",
    descr:
      "Prince’s journey in architecture has been marked by dedication and talent right from the start. His hard work and passion have propelled him to immense success in just 5 years, and he’s eager to continue rising in the future. His determination and vision are the keys to his bright career ahead in the field of architecture.",
  },
  {
    name: "Kajal Singh",
    role: "Director",
    image: "/images/team/Kajal.jpg",
    qual: "M. Comm",
    descr:
      "Kajal Singh, a Mass Communication expert, rises to prominence as Director of Manthan Design Studio. Her inspiring journey from academia to leading a thriving design firm showcases the fusion of education, creativity, and entrepreneurship, driving excellence and innovation.",
  },
];

export function TeamSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl text-gray-900 mb-4 text-center">
          Meet <span className="font-bold"> Our Team</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12 text-center">
          A diverse and experienced team passionate about creating extraordinary
          spaces.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-5">
          {team.map((member, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-xl overflow-hidden shadow group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <Image
                src={member.image}
                alt={member.name}
                width={400}
                height={300}
                className="w-full h-64 object-cover group-hover:scale-105 transition"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold py-1">{member.name}</h3>
                <p className="text-sm text-gray-500 font-bold pb-1">
                  {member.role}
                </p>
                <p className="text-sm text-gray-500 pb-1">{member.qual}</p>
                <p className="text-base text-gray-900 pb-1">{member.descr}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
