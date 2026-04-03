import * as React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { cn } from '../../lib/utils';
import { Button } from './Button';

const FADE_UP_VARIANTS = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', duration: 0.8 } },
};

const STAGGER_CONTAINER_VARIANTS = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export function EthicalHero({
  title,
  subtitle,
  ctaLabel,
  ctaHref,
  features = [],
  className
}) {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={STAGGER_CONTAINER_VARIANTS}
      className={cn("container mx-auto max-w-6xl px-4 py-16 sm:py-24", className)}
    >
      {/* 1. Hero Text Content */}
      <div className="mx-auto max-w-3xl text-center">
        <motion.h1
          variants={FADE_UP_VARIANTS}
          className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl"
        >
          {title}
        </motion.h1>

        <motion.p
          variants={FADE_UP_VARIANTS}
          className="mt-6 text-lg leading-8 text-muted-foreground"
        >
          {subtitle}
        </motion.p>

        {ctaLabel && (
          <motion.div variants={FADE_UP_VARIANTS} className="mt-10">
            <Button size="lg" asChild>
              <a href={ctaHref}>{ctaLabel}</a>
            </Button>
          </motion.div>
        )}
      </div>

      {/* 2. Feature Card Grid */}
      <motion.div
        variants={STAGGER_CONTAINER_VARIANTS}
        className="mt-16 grid grid-cols-1 gap-6 sm:mt-24 md:grid-cols-3"
      >
        {features.map((feature, idx) => (
          <motion.div
            key={feature.id || idx}
            variants={FADE_UP_VARIANTS}
            className="block h-full"
          >
            <div className="glass-card group relative p-6 transition-all duration-500 hover:scale-[1.02] flex flex-col h-full">
              {/* Icon area */}
              <div className="mb-6 flex h-14 w-14 float-animation items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                {feature.icon || <ExternalLink className="h-6 w-6" />}
              </div>

              <div className="flex flex-col flex-grow">
                <h3 className="mb-3 text-xl font-bold text-foreground">
                  {feature.title}
                </h3>
                <p className="mb-6 text-sm text-muted-foreground leading-relaxed flex-grow line-clamp-3">
                  {feature.description}
                </p>

                <div className="mt-auto">
                  <div className="mb-6 flex flex-wrap gap-2">
                    {feature.tags?.map((tag) => (
                      <span key={tag} className="skill-badge">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={feature.href || "#"}
                    className="inline-flex items-center text-sm font-bold text-primary transition-all hover:gap-2 group-hover:text-primary-400"
                  >
                    {feature.ctaText || 'Explorer'}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
