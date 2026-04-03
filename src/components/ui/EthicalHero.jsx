import * as React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { cn } from '../../lib/utils';
import { Button } from './Button';
import { Card } from './Card';

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
  features,
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
        {features.map((feature) => (
          <motion.a
            key={feature.id}
            href={feature.href}
            target={feature.href.startsWith('http') ? "_blank" : undefined}
            rel={feature.href.startsWith('http') ? "noopener noreferrer" : undefined}
            aria-label={feature.title}
            variants={FADE_UP_VARIANTS}
            whileHover={{ scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="block h-full"
          >
            <Card className="group h-full overflow-hidden rounded-xl shadow-sm transition-shadow duration-300 ease-in-out hover:shadow-md border-border/50">
              {/* Card Image */}
              <div className="overflow-hidden aspect-video relative">
                <img
                  src={feature.imageUrl}
                  alt={feature.title}
                  className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
              </div>

              {/* Card Content */}
              <div className="p-6">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-lg font-semibold text-foreground line-clamp-2">
                    {feature.title}
                  </h3>
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-muted/50 transition-colors duration-300 group-hover:bg-muted">
                    <ArrowRight className="h-5 w-5 text-muted-foreground transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
                {feature.description && (
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                    {feature.description}
                  </p>
                )}
              </div>
            </Card>
          </motion.a>
        ))}
      </motion.div>
    </motion.section>
  );
}
