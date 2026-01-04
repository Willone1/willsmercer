import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface ExpandableSectionProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  defaultOpen?: boolean;
}

export function ExpandableSection({ 
  title, 
  subtitle, 
  children, 
  className,
  defaultOpen = true 
}: ExpandableSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={cn("border-t border-white/10 py-8", className)}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between group py-4"
      >
        <div className="flex flex-col items-start gap-1">
          <span className="text-sm font-mono text-white/40 uppercase tracking-widest group-hover:text-white/60 transition-colors">
            {title}
          </span>
          {subtitle && (
            <span className="text-xs text-white/20 uppercase tracking-tighter">
              {subtitle}
            </span>
          )}
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <ChevronDown className="h-5 w-5 text-white/20 group-hover:text-white transition-colors" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="pt-8 pb-12">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
