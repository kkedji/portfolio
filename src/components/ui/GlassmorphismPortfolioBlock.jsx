import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Twitter,
  Mail
} from "lucide-react";
import { useTranslation } from "react-i18next";

// For UI Badge substitution since we don't have shadcn badge installed by default in the project, I will inline a simple badge or create a basic Badge component layout inline
const inlineBadge = "inline-flex items-center gap-2 rounded-full border border-border/50 bg-background/55 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-primary backdrop-blur transition-colors hover:bg-background/70";



const socialLinks = [
  {
    label: "LinkedIn",
    handle: "Sename Kudjo Kedji",
    href: "https://www.linkedin.com/in/sename-kudjo-kedji-bb849035/",
    icon: Linkedin,
  },
  {
    label: "Twitter",
    handle: "@senameskk",
    href: "https://twitter.com/senameskk",
    icon: Twitter,
  },
  {
    label: "GitHub",
    handle: "kkedji",
    href: "https://github.com/kkedji",
    icon: Github,
  },
];

const listVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
    },
  },
};

export function GlassmorphismPortfolioBlock() {
  const { t } = useTranslation();

  const highlights = [
    {
      title: t('glassmorphism.highlights.1.title'),
      description: t('glassmorphism.highlights.1.desc'),
    },
    {
      title: t('glassmorphism.highlights.2.title'),
      description: t('glassmorphism.highlights.2.desc'),
    },
    {
      title: t('glassmorphism.highlights.3.title'),
      description: t('glassmorphism.highlights.3.desc'),
    },
  ];

  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden px-4 md:px-6 py-10 lg:py-16 bg-background">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-6 md:p-8 shadow-2xl backdrop-blur-3xl"
        >
          {/* Glass gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent pointer-events-none" />

          <div className="relative grid gap-8 lg:grid-cols-2">
            {/* Left column - Main content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-blue-400 backdrop-blur transition-colors hover:bg-white/10">
                {t('glassmorphism.badge')}
              </div>

              <div className="space-y-4">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-2xl font-bold tracking-tight text-white md:text-4xl leading-tight"
                >
                  Sename Kudjo Kedji, <br />
                  <span className="text-blue-400 font-extrabold">{t('glassmorphism.subtitle')}</span>
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="max-w-xl text-base leading-relaxed text-slate-300 font-light"
                >
                  {t('glassmorphism.desc1')}
                </motion.p>
              </div>

              {/* Highlights grid */}
              <div className="grid gap-3 sm:grid-cols-1">
                {highlights.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    whileHover={{ y: -4 }}
                    className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/5 p-4 backdrop-blur transition-all hover:border-blue-400/30 hover:bg-white/10 hover:shadow-lg hover:shadow-blue-400/5"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 -z-10" />
                    <div className="relative space-y-2">
                      <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-400">
                        {item.title}
                      </p>
                      <p className="text-sm font-medium leading-relaxed text-white">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right column - Profile card */}
            <div className="relative">
              <div className="absolute inset-0 rounded-[32px] bg-gradient-to-b from-blue-400/10 via-transparent to-transparent blur-3xl" />
              <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-xl">
                <div className="flex flex-col items-center text-center">
                  {/* Avatar with glow */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="relative mb-4 mt-2"
                  >
                    <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-400/20 blur-2xl" />
                    <img
                      src="/images/profile.jpg"
                      alt="Sename Kudjo Kedji"
                      className="relative h-32 w-32 rounded-full border-2 border-white/20 object-cover shadow-2xl"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="space-y-2"
                  >
                    <h3 className="text-2xl font-bold tracking-tight text-white">
                      Sename Kudjo Kedji
                    </h3>
                    <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-400">
                      {t('glassmorphism.cardSubtitle')}
                    </p>
                  </motion.div>

                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mt-4 max-w-sm text-sm font-light leading-relaxed text-slate-300"
                  >
                    {t('glassmorphism.cardDesc')}
                  </motion.p>
                </div>

                {/* Social links */}
                <motion.div
                  variants={listVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-80px" }}
                  className="mt-6 flex flex-col gap-2"
                >
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={social.label}
                        variants={itemVariants}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between rounded-xl border border-white/5 bg-white/5 px-4 py-2.5 text-left transition-all hover:border-blue-400/30 hover:bg-white/10"
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.985 }}
                      >
                        <div className="flex items-center gap-3">
                          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-blue-400 transition-all group-hover:scale-110">
                            <Icon className="h-5 w-5" />
                          </span>
                          <div>
                            <p className="text-sm font-bold text-white">
                              {social.label}
                            </p>
                            <p className="text-xs font-medium text-slate-400">
                              {social.handle}
                            </p>
                          </div>
                        </div>
                        <ArrowUpRight className="h-5 w-5 text-slate-500 transition-all group-hover:text-blue-400" />
                      </motion.a>
                    );
                  })}
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
