import { motion } from "framer-motion";
import { Radar, Bug, Flower, Leaf, Clock, Moon } from "lucide-react";
import { batFacts } from "../data/bats";

const iconMap: Record<string, React.ReactNode> = {
  Wing: <Moon className="w-8 h-8" />,
  Radar: <Radar className="w-8 h-8" />,
  Bug: <Bug className="w-8 h-8" />,
  Flower: <Flower className="w-8 h-8" />,
  Tree: <Leaf className="w-8 h-8" />,
  Clock: <Clock className="w-8 h-8" />,
};

export function FactsSection() {
  return (
    <section id="facts" className="relative py-24 px-6 bg-gradient-to-b from-bat-dark to-bat-medium">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gradient">Why Bats Matter</h2>
          <p className="text-midnight-300 max-w-2xl mx-auto text-lg">
            Beyond the myths and misconceptions, bats are ecological superheroes that keep our ecosystems thriving.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {batFacts.map((fact, i) => (
            <motion.div
              key={fact.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="glass-card rounded-2xl p-8 group hover:border-bat-accent/30 transition-colors duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-bat-accent/10 flex items-center justify-center mb-5 text-bat-accent group-hover:bg-bat-accent/20 transition-colors duration-300">
                {iconMap[fact.icon]}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{fact.title}</h3>
              <p className="text-midnight-300 leading-relaxed text-sm">{fact.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
