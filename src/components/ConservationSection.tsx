import { motion } from "framer-motion";
import { Shield, Heart, AlertTriangle, TrendingDown } from "lucide-react";

export function ConservationSection() {
  const threats = [
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "White-nose Syndrome",
      description: "A fungal disease that has killed over 6 million bats in North America since 2006.",
    },
    {
      icon: <TrendingDown className="w-6 h-6" />,
      title: "Habitat Loss",
      description: "Deforestation and urbanization destroy the caves and forests bats depend on for roosting.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Wind Turbines",
      description: "Tens of thousands of bats are killed annually by collisions with wind turbines.",
    },
  ];

  return (
    <section id="conservation" className="relative py-24 px-6 bg-bat-dark">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gradient">Conservation</h2>
          <p className="text-midnight-300 max-w-2xl mx-auto text-lg">
            Many bat species are in decline. Understanding the threats is the first step toward protecting them.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {threats.map((threat, i) => (
            <motion.div
              key={threat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card rounded-2xl p-8 border-b-2 border-bat-rust/30"
            >
              <div className="w-12 h-12 rounded-xl bg-bat-rust/10 flex items-center justify-center mb-5 text-bat-rust">
                {threat.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">{threat.title}</h3>
              <p className="text-midnight-300 text-sm leading-relaxed">{threat.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-2xl p-8 md:p-12 text-center border-bat-teal/20"
        >
          <div className="w-16 h-16 rounded-full bg-bat-teal/10 flex items-center justify-center mx-auto mb-6 text-bat-teal">
            <Heart className="w-8 h-8" />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">How You Can Help</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-3xl mx-auto">
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-bat-teal/20 flex items-center justify-center text-bat-teal font-bold shrink-0 mt-1">1</div>
              <div>
                <p className="text-white font-medium mb-1">Install a Bat House</p>
                <p className="text-midnight-300 text-sm">Provide safe roosting spaces in your backyard. A single bat house can shelter hundreds of bats.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-bat-teal/20 flex items-center justify-center text-bat-teal font-bold shrink-0 mt-1">2</div>
              <div>
                <p className="text-white font-medium mb-1">Avoid Pesticides</p>
                <p className="text-midnight-300 text-sm">Pesticides reduce the insect populations bats feed on and can poison them directly.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-bat-teal/20 flex items-center justify-center text-bat-teal font-bold shrink-0 mt-1">3</div>
              <div>
                <p className="text-white font-medium mb-1">Protect Dark Skies</p>
                <p className="text-midnight-300 text-sm">Light pollution disrupts bat foraging and navigation. Use motion sensors and shielded lights.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-bat-teal/20 flex items-center justify-center text-bat-teal font-bold shrink-0 mt-1">4</div>
              <div>
                <p className="text-white font-medium mb-1">Spread Awareness</p>
                <p className="text-midnight-300 text-sm">Challenge myths and misconceptions about bats. Education is key to conservation.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
