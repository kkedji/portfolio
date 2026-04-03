import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

/**
 * TimelineContent component for on-scroll reveal animations.
 * Adapted from the user reference.
 */
export const TimelineContent = ({
  children,
  animationNum = 0,
  className = '',
  as = 'div',
  customVariants,
  timelineRef, // Optional ref from parent if needed
  ...props
}) => {
  const Component = motion[as] || motion.div;

  const defaultRevealVariants = {
    visible: (i) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.1, // Reduced for tighter feel, user had i * 0.4 which is slow
        duration: 0.5,
        ease: "easeOut"
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: -20,
      opacity: 0,
    },
  };

  const variants = customVariants || defaultRevealVariants;

  return (
    <Component
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      custom={animationNum}
      variants={variants}
      className={cn(className)}
      {...props}
    >
      {children}
    </Component>
  );
};
