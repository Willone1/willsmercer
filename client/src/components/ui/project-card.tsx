import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  category?: string;
  role?: string;
  description: string;
  stats?: string[];
  year?: string;
  location?: string;
}

export function ProjectCard({ title, category, role, description, stats, year, location }: ProjectCardProps) {
  return (
    <motion.div 
      whileHover={{ y: -4 }}
      className="group relative flex flex-col gap-4 rounded-lg border border-white/5 bg-white/5 p-6 md:p-8 hover:border-white/10 hover:bg-white/10 transition-colors"
    >
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h3 className="text-xl font-display font-medium text-white">{title}</h3>
            {category && (
              <span className="rounded-full bg-white/10 px-2.5 py-0.5 text-xs font-medium text-white/80">
                {category}
              </span>
            )}
          </div>
          <div className="text-sm text-white/40 font-mono mb-4">
            {role && <span>{role} • </span>}
            {location && <span>{location}</span>}
            {year && <span> • {year}</span>}
          </div>
        </div>
        <ArrowUpRight className="h-5 w-5 text-white/20 group-hover:text-white transition-colors" />
      </div>

      <p className="text-white/70 leading-relaxed text-sm md:text-base">
        {description}
      </p>

      {stats && stats.length > 0 && (
        <div className="mt-auto pt-6 grid grid-cols-1 md:grid-cols-2 gap-3">
          {stats.map((stat, i) => (
            <div key={i} className="flex items-center gap-2 text-xs md:text-sm text-white/50">
              <div className="h-1 w-1 rounded-full bg-white/30" />
              {stat}
            </div>
          ))}
        </div>
      )}
    </motion.div>
  );
}
