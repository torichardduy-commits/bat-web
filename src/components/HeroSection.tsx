import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { BatIcon } from "./BatIcon";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-bat-dark via-bat-medium to-bat-dark" />
      
      {/* Stars / dots */}
      <div className="absolute inset-0">
        {Array.from({ length: 60 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white opacity-40"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `pulse ${Math.random() * 3 + 2}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Flying bats silhouettes */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-white"
            initial={{ x: -100, y: Math.random() * 400 }}
            animate={{
              x: ["100vw", "-10vw"],
              y: [Math.random() * 400, Math.random() * 400 + 100, Math.random() * 400],
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              delay: i * 3,
              ease: "linear",
            }}
          >
            <BatIcon className="w-12 h-8 text-white" />
          </motion.div>
        ))}
      </div>

      {/* Moon glow */}
      <div className="absolute top-20 right-20 w-40 h-40 rounded-full bg-bat-accent/10 blur-3xl" />
      <div className="absolute top-24 right-24 w-24 h-24 rounded-full bg-bat-accent/20 blur-2xl" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex justify-center mb-8">
            <BatIcon className="w-16 h-10 text-bat-accent" />
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6">
            <span className="text-gradient">Bats</span>
          </h1>
          <p className="text-xl md:text-2xl text-midnight-200 font-light mb-4 max-w-2xl mx-auto text-balance">
            The misunderstood guardians of the night
          </p>
          <p className="text-base md:text-lg text-midnight-400 max-w-xl mx-auto mb-12 leading-relaxed">
            Discover the extraordinary world of these flying mammals — nature's most fascinating, vital, and unfairly feared creatures.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <a
            href="#facts"
            className="px-8 py-3 rounded-full bg-bat-accent text-bat-dark font-semibold hover:bg-bat-gold transition-colors duration-300"
          >
            Explore Facts
          </a>
          <a
            href="#species"
            className="px-8 py-3 rounded-full border border-midnight-400 text-midnight-200 font-semibold hover:border-bat-accent hover:text-bat-accent transition-colors duration-300"
          >
            Meet Species
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <a href="#facts" className="text-midnight-400 hover:text-bat-accent transition-colors">
          <ChevronDown className="w-8 h-8" />
        </a>
      </motion.div>
    </section>
  );
}
