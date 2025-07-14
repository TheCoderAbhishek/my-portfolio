// src/components/AnimatedSection.tsx (Corrected)

import { motion, useInView } from "framer-motion";
// Change is on this line: added 'type' before ReactNode
import { useRef, type ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const AnimatedSection = ({ children }: Props) => {
  const ref = useRef(null);
  // The 'amount' property ensures the animation triggers when 20% of the element is visible
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
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection;
