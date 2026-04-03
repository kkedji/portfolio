import * as React from "react"
import { cva } from "class-variance-authority"
import { motion } from "framer-motion"
import { cn } from "../../lib/utils"

export const transformVariants = (direction) => ({
  hidden: {
    x: direction === "left" ? -40 : direction === "right" ? 40 : 0,
    y: direction === "top" ? -40 : direction === "bottom" ? 40 : 0,
    scale: direction === "z" ? 0.95 : 1,
    opacity: 0,
  },
  visible: {
    x: 0,
    y: 0,
    scale: 1,
    opacity: 1,
  },
})

export const GRADIENT_COLORS = {
  blue: [
    { color: "#E0F2FE", start: "0%" },
    { color: "#BAE6FD", start: "30%" },
    { color: "#3A5BA0", start: "60%" },
    { color: "#F0F9FF", start: "100%" },
  ],
  black: [
    { color: "#F8FAFC", start: "0%" },
    { color: "#E2E8F0", start: "30%" },
    { color: "#94A3B8", start: "60%" },
    { color: "#F1F5F9", start: "100%" }, // Silver Blue
  ],
  purple: [
    { color: "#F5F3FF", start: "0%" },
    { color: "#DDD6FE", start: "30%" },
    { color: "#7C3AED", start: "60%" },
    { color: "#FDF4FF", start: "100%" },
  ],
  green: [
    { color: "#F0FDF4", start: "0%" },
    { color: "#BBF7D0", start: "30%" },
    { color: "#16A34A", start: "60%" },
    { color: "#F0FDF4", start: "100%" },
  ],
  skyblue: [
    { color: "#F0F9FF", start: "0%" },
    { color: "#BAE6FD", start: "30%" },
    { color: "#0EA5E9", start: "60%" },
    { color: "#F0F9FF", start: "100%" },
  ],
  red: [
    { color: "#FEF2F2", start: "0%" },
    { color: "#FECACA", start: "30%" },
    { color: "#DC2626", start: "60%" },
    { color: "#FEF2F2", start: "100%" },
  ],
}

const GRADIENT_SIZES = {
  default: { width: "70%", height: "55%" },
  sm: { width: "50%", height: "35%" },
  lg: { width: "85%", height: "70%" },
}

const GRADIENT_POSITIONS = {
  top: { x: "50%", y: "-10%" },
  center: { x: "50%", y: "50%" },
  bottom: { x: "50%", y: "110%" },
  left: { x: "-10%", y: "0%" },
  right: { x: "110%", y: "0%" },
}

const TRANSITION_CONFIG = { ease: [0.25, 0.1, 0.25, 1], duration: 0.8 }

const heroVariants = cva(
  "relative min-h-[500px] w-full overflow-hidden flex flex-col items-center text-center justify-center text-center place-content-center",
  {
    variants: {
      layout: {
        default: "flex flex-col items-center text-center justify-center",
        colLeft: "flex flex-col justify-center items-start text-left",
      },
    },
    defaultVariants: {
      layout: "default",
    },
  }
)

export function Hero({ children, className, layout, ...props }) {
  return (
    <section className={cn(heroVariants({ layout }), className)} {...props}>
      {children}
    </section>
  )
}

export function BgGradient({
  gradientSize = "default",
  gradientPosition = "top",
  gradientColors = "purple",
  className,
  ...props
}) {
  const actualSize = typeof gradientSize === "string" ? GRADIENT_SIZES[gradientSize] : gradientSize
  const actualPosition = typeof gradientPosition === "string" ? GRADIENT_POSITIONS[gradientPosition] : gradientPosition
  const colors = typeof gradientColors === "string" ? GRADIENT_COLORS[gradientColors] : gradientColors

  const gradientString = colors
    .map(({ color, start }) => `${color} ${start}`)
    .join(", ")

  const gradientStyle = `radial-gradient(${actualSize.width} ${actualSize.height} at ${actualPosition.x} ${actualPosition.y}, ${gradientString})`

  const dominantColor = colors[colors.length - 1].color

  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 size-full select-none",
        className
      )}
      style={{
        background: dominantColor,
        backgroundImage: gradientStyle,
        ...props.style,
      }}
      {...props}
    />
  )
}

function Word({
  word,
  transition = TRANSITION_CONFIG,
  direction = "bottom",
}) {
  const characters = word.split("")
  return (
    <span className="inline-block text-nowrap align-top">
      {characters.map((char, index) => (
        <span key={index} className="inline-block">
          <motion.span
            className="inline-block"
            variants={transformVariants(direction)}
            transition={transition}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        </span>
      ))}
    </span>
  )
}

export function TextStagger({
  text,
  stagger = 0.05,
  transition,
  direction = "bottom",
  className,
  as: Component = "span",
  ...props
}) {
  const words = text.split(" ")

  return (
    <motion.div
      transition={{ staggerChildren: stagger }}
      initial="hidden"
      whileInView={"visible"}
      viewport={{ once: true }}
      className={cn("relative", className)}
      {...props}
    >
      <Component>
        {words.map((word, index) => (
          <React.Fragment key={index}>
            <Word transition={transition} direction={direction} word={word} />
            {index < words.length - 1 && "\u00A0"}
          </React.Fragment>
        ))}
      </Component>
    </motion.div>
  )
}

export const AnimatedContainer = React.forwardRef(({ children, className, transformDirection = "bottom", ...props }, ref) => {
  return (
    <motion.div
      className={cn("relative z-10", className)}
      ref={ref}
      variants={transformVariants(transformDirection)}
      initial="hidden"
      whileInView={"visible"}
      viewport={{ once: true, ...props.viewport }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
        delay: 0.2,
        ...props.transition,
      }}
      {...props}
    >
      {children}
    </motion.div>
  )
})
AnimatedContainer.displayName = "AnimatedContainer"
