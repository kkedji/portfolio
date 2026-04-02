import React, { useState, useRef } from "react";
import { cn } from "../../lib/utils";
import { 
  motion, 
  useMotionValue, 
  useMotionTemplate, 
  useAnimationFrame 
} from "framer-motion";

export const TheInfiniteGrid = ({ children, className }) => {
  const containerRef = useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const { left, top } = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

  const gridOffsetX = useMotionValue(0);
  const gridOffsetY = useMotionValue(0);

  const speedX = 0.5; 
  const speedY = 0.5;

  useAnimationFrame(() => {
    const currentX = gridOffsetX.get();
    const currentY = gridOffsetY.get();
    gridOffsetX.set((currentX + speedX) % 40);
    gridOffsetY.set((currentY + speedY) % 40);
  });

  const maskImage = useMotionTemplate`radial-gradient(350px circle at ${mouseX}px ${mouseY}px, black 0%, transparent 100%)`;

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className={cn(
        "relative w-full min-h-[70vh] flex flex-col items-center justify-center overflow-hidden bg-background px-4 py-20",
        className
      )}
    >
      {/* Base Grid - Constant Opacity */}
      <div className="absolute inset-0 z-0 opacity-[0.03]">
        <GridPattern offsetX={gridOffsetX} offsetY={gridOffsetY} />
      </div>

      {/* Hover Reveal Grid */}
      <motion.div 
        className="absolute inset-0 z-0 opacity-[0.12] dark:opacity-[0.2]"
        style={{ 
          maskImage, 
          WebkitMaskImage: maskImage 
        }}
      >
        <GridPattern offsetX={gridOffsetX} offsetY={gridOffsetY} />
      </motion.div>

      {/* Decorative Blobs */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute right-[-10%] top-[-10%] w-[45%] h-[45%] rounded-full bg-primary/15 dark:bg-primary/10 blur-[120px] animate-pulse" />
        <div className="absolute left-[-5%] bottom-[-10%] w-[35%] h-[35%] rounded-full bg-blue-500/15 dark:bg-blue-600/10 blur-[100px]" />
        <div className="absolute right-[20%] bottom-[-5%] w-[25%] h-[25%] rounded-full bg-accent/10 blur-[80px]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center text-center">
        {children}
      </div>
    </div>
  );
};

const GridPattern = ({ offsetX, offsetY }) => {
  return (
    <svg className="w-full h-full">
      <defs>
        <motion.pattern
          id="grid-pattern-infinite"
          width="40"
          height="40"
          patternUnits="userSpaceOnUse"
          style={{ x: offsetX, y: offsetY }}
        >
          <path
            d="M 40 0 L 0 0 0 40"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-foreground/30" 
          />
        </motion.pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid-pattern-infinite)" />
    </svg>
  );
};
