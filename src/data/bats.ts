export interface BatSpecies {
  id: number;
  name: string;
  scientificName: string;
  description: string;
  wingspan: string;
  weight: string;
  region: string;
  image: string;
  funFact: string;
}

export const batSpecies: BatSpecies[] = [
  {
    id: 1,
    name: "Flying Fox",
    scientificName: "Pteropus vampyrus",
    description: "One of the largest bat species in the world, with a wingspan exceeding 1.5 meters. Despite their name, they feed exclusively on fruits, nectar, and flowers.",
    wingspan: "150 – 170 cm",
    weight: "900 – 1,200 g",
    region: "Southeast Asia",
    image: "https://images.pexels.com/photos/1618606/pexels-photo-1618606.jpeg?auto=compress&cs=tinysrgb&w=800",
    funFact: "They can fly up to 60 km in a single night while foraging for food."
  },
  {
    id: 2,
    name: "Mexican Free-tailed Bat",
    scientificName: "Tadarida brasiliensis",
    description: "Famous for forming the largest bat colonies in the world. These aerial insectivores are among the fastest mammals, reaching speeds of over 160 km/h in level flight.",
    wingspan: "30 – 35 cm",
    weight: "11 – 14 g",
    region: "Americas",
    image: "https://images.pexels.com/photos/53581/bats-mouse-eared-bat-myanmar-fly-53581.jpeg?auto=compress&cs=tinysrgb&w=800",
    funFact: "Bracken Cave in Texas hosts over 15 million of these bats — the largest known colony."
  },
  {
    id: 3,
    name: "Vampire Bat",
    scientificName: "Desmodus rotundus",
    description: "The only mammals that feed entirely on blood. They have heat sensors on their noses to detect blood vessels near the skin surface of their prey.",
    wingspan: "35 – 40 cm",
    weight: "25 – 40 g",
    region: "Central & South America",
    image: "https://images.pexels.com/photos/13284132/pexels-photo-13284132.jpeg?auto=compress&cs=tinysrgb&w=800",
    funFact: "They share blood meals with roost-mates who failed to feed — one of the few examples of reciprocal altruism in non-primates."
  },
  {
    id: 4,
    name: "Horseshoe Bat",
    scientificName: "Rhinolophus ferrumequinum",
    description: "Named for their distinctive noseleaf that resembles a horseshoe. They are expert echolocators, emitting calls through their nostrils.",
    wingspan: "30 – 32 cm",
    weight: "13 – 19 g",
    region: "Europe, Asia, Africa",
    image: "https://images.pexels.com/photos/162203/palm-trees-sunset-tropical-summer-162203.jpeg?auto=compress&cs=tinysrgb&w=800",
    funFact: "Their echolocation calls can reach frequencies of 83 kHz — far beyond human hearing range."
  },
  {
    id: 5,
    name: "Bumblebee Bat",
    scientificName: "Craseonycteris thonglongyai",
    description: "The world's smallest mammal, weighing about as much as a penny. It has a pig-like snout and large ears relative to its tiny body.",
    wingspan: "13 – 15 cm",
    weight: "1.5 – 2 g",
    region: "Thailand, Myanmar",
    image: "https://images.pexels.com/photos/36762/marbling-art-work-pattern-36762.jpeg?auto=compress&cs=tinysrgb&w=800",
    funFact: "It was only discovered in 1974, making it one of the most recently found mammal species."
  },
  {
    id: 6,
    name: "Hoary Bat",
    scientificName: "Lasiurus cinereus",
    description: "North America's most widespread bat, known for its beautiful frosted or 'hoary' appearance. These solitary bats are strong fliers and highly migratory.",
    wingspan: "34 – 41 cm",
    weight: "20 – 35 g",
    region: "North & South America",
    image: "https://images.pexels.com/photos/1619296/pexels-photo-1619296.jpeg?auto=compress&cs=tinysrgb&w=800",
    funFact: "They are among the few bats that undertake long-distance seasonal migrations, traveling thousands of kilometers."
  }
];

export const batFacts = [
  {
    title: "Masters of the Night",
    description: "Bats are the only mammals capable of sustained flight. Their wings are modified hands with membranes stretched between elongated fingers.",
    icon: "Wing"
  },
  {
    title: "Echolocation Experts",
    description: "Most bats navigate and hunt in complete darkness using echolocation, emitting high-frequency sounds that bounce off objects.",
    icon: "Radar"
  },
  {
    title: "Nature's Pest Control",
    description: "A single bat can eat up to 1,200 mosquitoes per hour. They save the agricultural industry billions of dollars annually.",
    icon: "Bug"
  },
  {
    title: "Vital Pollinators",
    description: "Over 500 plant species rely on bats for pollination, including agave, bananas, and durian. They are essential for tropical ecosystems.",
    icon: "Flower"
  },
  {
    title: "Seed Dispersers",
    description: "Fruit bats help regenerate forests by dispersing seeds over vast areas. They are critical for restoring tropical rainforests.",
    icon: "Tree"
  },
  {
    title: "Ancient Creatures",
    description: "Bats have existed for over 50 million years. They have evolved to occupy nearly every habitat on Earth except the polar regions.",
    icon: "Clock"
  }
];
