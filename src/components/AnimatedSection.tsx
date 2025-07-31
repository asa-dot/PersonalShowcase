import type { ReactNode } from "react";
import { motion, type Variants } from "framer-motion";

interface AnimatedSectionProps {
  id: string;
  className?: string;
  children: ReactNode;
  effect?: "fade" | "fadeUp"; // Permite elegir el tipo de animación
  once?: boolean; // Controla si la animación ocurre solo una vez
}

// Animaciones disponibles
const variantsMap: Record<string, Variants> = {
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.7, ease: "easeOut" } },
  },
  fadeUp: {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  },
};

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  id,
  className,
  children,
  effect = "fade",
  once = true,
}) => (
  <motion.section
    id={id}
    className={className}
    variants={variantsMap[effect]}
    initial="hidden"
    whileInView="visible"
    viewport={{ once }}
    style={{ opacity: 1 }} // Fallback para evitar que quede invisible
  >
    {children}
  </motion.section>
);

export default AnimatedSection;
