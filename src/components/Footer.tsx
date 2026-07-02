import { Heart } from "lucide-react";
import { BatIcon } from "./BatIcon";

export function Footer() {
  return (
    <footer className="relative py-12 px-6 bg-bat-dark border-t border-midnight-800/50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2 text-bat-accent">
          <BatIcon className="w-5 h-3" />
          <span className="font-bold">Bats</span>
        </div>
        <p className="text-sm text-midnight-400 flex items-center gap-1">
          Built with <Heart className="w-3 h-3 text-bat-rust" /> for the creatures of the night
        </p>
        <p className="text-xs text-midnight-500">
          Images from Pexels
        </p>
      </div>
    </footer>
  );
}
