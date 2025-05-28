import type { ReactNode } from "react";
import { motion, type Variants } from "framer-motion";

interface AnimatedSectionProps {
  id: string;
  className?: string;
  children: ReactNode;
}

// Variantes para fade+up
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  id,
  className,
  children,
}) => (
  <motion.section
    id={id}
    className={className}
    variants={fadeInUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: false, amount: 0.25 }}
  >
    {children}
  </motion.section>
);

export default AnimatedSection;
