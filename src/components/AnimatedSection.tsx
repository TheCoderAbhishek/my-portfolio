// src/components/AnimatedSection.tsx (Corrected)

import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";

// 1. Update the Props interface
interface Props {
  children: ReactNode;
  onViewportEnter?: () => void; // Make the prop optional
}

const AnimatedSection = ({ children, onViewportEnter }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      ref={ref}
      variants={sectionVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ duration: 0.6, ease: "easeOut" }}
      onViewportEnter={onViewportEnter} // 2. Apply the prop here
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection;
