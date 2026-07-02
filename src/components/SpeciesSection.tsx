import { motion } from "framer-motion";
import { MapPin, Ruler, Weight } from "lucide-react";
import { batSpecies } from "../data/bats";

export function SpeciesSection() {
  return (
    <section id="species" className="relative py-24 px-6 bg-gradient-to-b from-bat-medium to-bat-dark">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gradient">Meet the Species</h2>
          <p className="text-midnight-300 max-w-2xl mx-auto text-lg">
            Over 1,400 species of bats exist, making them the second largest order of mammals. Here are some of the most remarkable.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {batSpecies.map((bat, i) => (
            <motion.div
              key={bat.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="glass-card rounded-2xl overflow-hidden group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={bat.image}
                  alt={bat.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bat-dark/80 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4">
                  <h3 className="text-xl font-bold text-white">{bat.name}</h3>
                  <p className="text-xs text-bat-accent italic">{bat.scientificName}</p>
                </div>
              </div>

              <div className="p-6">
                <p className="text-midnight-200 text-sm leading-relaxed mb-4">
                  {bat.description}
                </p>

                <div className="flex flex-wrap gap-3 mb-4">
                  <span className="inline-flex items-center gap-1 text-xs text-midnight-400 bg-midnight-900/50 px-3 py-1 rounded-full">
                    <Ruler className="w-3 h-3" /> {bat.wingspan}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs text-midnight-400 bg-midnight-900/50 px-3 py-1 rounded-full">
                    <Weight className="w-3 h-3" /> {bat.weight}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs text-midnight-400 bg-midnight-900/50 px-3 py-1 rounded-full">
                    <MapPin className="w-3 h-3" /> {bat.region}
                  </span>
                </div>

                <div className="border-t border-midnight-800 pt-4">
                  <p className="text-xs text-bat-gold">
                    <span className="font-semibold">Fun fact: </span>{bat.funFact}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
