import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Twitter,
  Mail,
  Map,
  MoveRight,
  Database,
  Terminal,
  BarChart3,
  FileSpreadsheet,
  Activity
} from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { cn } from "../../lib/utils";

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

export function GlassmorphismPortfolioBlock({ lightMode = false }) {
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
    <section className={cn(
      "relative min-h-[85vh] flex items-center overflow-hidden px-4 md:px-6 py-10 lg:py-16 transition-colors duration-500",
      lightMode ? "bg-white" : "bg-background"
    )}>
      <div className="mx-auto max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className={cn(
            "relative overflow-hidden rounded-[2rem] border p-6 md:p-8 shadow-2xl transition-all duration-500",
            lightMode ? "border-gray-100 bg-gray-50/50" : "border-white/10 bg-white/5 backdrop-blur-3xl"
          )}
        >
          {/* Glass gradient overlay */}
          <div className={cn(
            "absolute inset-0 pointer-events-none",
            lightMode ? "bg-gradient-to-br from-blue-50 via-transparent to-transparent" : "bg-gradient-to-br from-primary/10 via-transparent to-transparent"
          )} />

          <div className="relative grid gap-8 lg:grid-cols-2">
            {/* Left column - Main content */}
            <div className="space-y-6">
              <div className={cn(
                "inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] backdrop-blur transition-colors",
                lightMode ? "border-blue-100 bg-blue-50 text-blue-600" : "border-white/10 bg-white/5 text-blue-400 hover:bg-white/10"
              )}>
                {t('glassmorphism.badge')}
              </div>

              <div className="space-y-4">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className={cn(
                    "text-2xl font-bold tracking-tight md:text-4xl leading-tight",
                    lightMode ? "text-gray-900" : "text-white"
                  )}
                >
                  Sename Kudjo Kedji, <br />
                  <span className={cn("font-extrabold", lightMode ? "text-gray-900" : "text-white")}>{t('glassmorphism.subtitle').split('&')[0] + '&'}</span>
                  <br />
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-400 to-pink-500 font-extrabold">
                    {t('glassmorphism.subtitle').split('&')[1]}
                  </span>
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className={cn(
                    "max-w-xl text-base leading-relaxed font-light",
                    lightMode ? "text-gray-600" : "text-slate-300"
                  )}
                >
                  {t('glassmorphism.desc1')}
                </motion.p>


                {/* Tools & Stack Section */}
                <div className="pt-4 grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <p className="text-xs font-bold uppercase tracking-widest text-blue-600">Outils & Stack</p>
                    <div className="grid gap-3">
                      <div className="flex items-center gap-3">
                        <BarChart3 className="h-4 w-4 text-blue-500" />
                        <span className={cn("text-xs font-medium", lightMode ? "text-gray-700" : "text-slate-300")}>{t('glassmorphism.tools_stack.powerbi')}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Database className="h-4 w-4 text-blue-500" />
                        <span className={cn("text-xs font-medium", lightMode ? "text-gray-700" : "text-slate-300")}>{t('glassmorphism.tools_stack.sql')}</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4 pt-8">
                    <div className="grid gap-3">
                      <div className="flex items-center gap-3">
                        <Terminal className="h-4 w-4 text-blue-500" />
                        <span className={cn("text-xs font-medium", lightMode ? "text-gray-700" : "text-slate-300")}>{t('glassmorphism.tools_stack.python')}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <FileSpreadsheet className="h-4 w-4 text-blue-500" />
                        <span className={cn("text-xs font-medium", lightMode ? "text-gray-700" : "text-slate-300")}>{t('glassmorphism.tools_stack.excel')}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right column - Profile card */}
            <div className="relative">
              <div className="absolute inset-0 rounded-[32px] bg-gradient-to-b from-blue-400/10 via-transparent to-transparent blur-3xl opacity-50" />
              <div className={cn(
                "relative flex h-full flex-col justify-between overflow-hidden rounded-[28px] border p-6 backdrop-blur-xl shadow-xl transition-all duration-500",
                lightMode ? "border-gray-100 bg-white" : "border-white/10 bg-white/5"
              )}>
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
                    <h3 className={cn(
                      "text-2xl font-bold tracking-tight",
                      lightMode ? "text-gray-900" : "text-white"
                    )}>
                      Sename Kudjo Kedji
                    </h3>
                    <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-600">
                      {t('glassmorphism.cardSubtitle')}
                    </p>
                  </motion.div>

                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className={cn(
                      "mt-4 max-w-sm text-sm font-light leading-relaxed",
                      lightMode ? "text-gray-600" : "text-slate-300"
                    )}
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
                  className="mt-6 flex flex-col gap-3"
                >
                  {/* Journey Link */}
                  <motion.div variants={itemVariants}>
                    <Link
                      to="/parcours"
                      className={cn(
                        "group flex items-center justify-between rounded-xl border px-4 py-4 text-left transition-all bg-blue-600 border-blue-500 hover:bg-blue-700 shadow-lg shadow-blue-500/20",
                      )}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-center gap-3">
                        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white border border-white/30">
                          <Map className="h-5 w-5" />
                        </span>
                        <div>
                          <p className="text-sm font-bold text-white">
                            {t('header.profile_journey')}
                          </p>
                          <p className="text-xs font-medium text-blue-100">
                            {t('header.profile_journey_desc')}
                          </p>
                        </div>
                      </div>
                      <MoveRight className="h-5 w-5 text-white transition-transform group-hover:translate-x-1" />
                    </Link>
                  </motion.div>

                  <div className="h-px bg-gray-100 my-2" />

                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={social.label}
                        variants={itemVariants}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                          "group flex items-center justify-between rounded-xl border px-4 py-2.5 text-left transition-all",
                          lightMode 
                            ? "border-gray-100 bg-gray-50 hover:border-blue-200 hover:bg-blue-50" 
                            : "border-white/5 bg-white/5 hover:border-blue-400/30 hover:bg-white/10"
                        )}
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.985 }}
                      >
                        <div className="flex items-center gap-3">
                          <span className={cn(
                            "flex h-10 w-10 items-center justify-center rounded-full border text-blue-600 transition-all group-hover:scale-110",
                            lightMode ? "border-blue-100 bg-white" : "border-white/10 bg-white/5"
                          )}>
                            <Icon className="h-5 w-5" />
                          </span>
                          <div>
                            <p className={cn(
                              "text-sm font-bold",
                              lightMode ? "text-gray-900" : "text-white"
                            )}>
                              {social.label}
                            </p>
                            <p className={cn(
                              "text-xs font-medium",
                              lightMode ? "text-gray-500" : "text-slate-400"
                            )}>
                              {social.handle}
                            </p>
                          </div>
                        </div>
                        <ArrowUpRight className={cn(
                          "h-5 w-5 transition-all",
                          lightMode ? "text-gray-400 group-hover:text-blue-600" : "text-slate-500 group-hover:text-blue-400"
                        )} />
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
