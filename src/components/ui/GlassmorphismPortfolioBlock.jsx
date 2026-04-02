import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Twitter,
  Mail
} from "lucide-react";

// For UI Badge substitution since we don't have shadcn badge installed by default in the project, I will inline a simple badge or create a basic Badge component layout inline
const inlineBadge = "inline-flex items-center gap-2 rounded-full border border-border/50 bg-background/55 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-primary backdrop-blur transition-colors hover:bg-background/70";

const highlights = [
  {
    title: "15+ années d'expertise",
    description: "Industrie bancaire, analyse de données avancée, modélisation des risques et présentations en comités de direction.",
  },
  {
    title: "Domaines d'intervention",
    description: "Business Intelligence, structuration de base de données SQL, reporting Power BI et web-apps fullstack.",
  },
  {
    title: "Stratégie d'Accompagnement",
    description: "Conseil personnalisé pour les PME et institutions cherchant à transformer leurs données en réel levier décisionnel.",
  },
];

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
  return (
    <section className="relative min-h-screen overflow-hidden px-4 md:px-6 py-20 lg:py-32 bg-background">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative overflow-hidden rounded-[2rem] border border-border/50 bg-white/40 dark:bg-background/45 p-6 md:p-12 shadow-2xl backdrop-blur-3xl"
        >
          {/* Glass gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none" />

          <div className="relative grid gap-12 lg:grid-cols-2">
            {/* Left column - Main content */}
            <div className="space-y-8">
              <div className={inlineBadge}>
                Profil & Vision
              </div>

              <div className="space-y-4">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-3xl font-bold tracking-tight text-foreground md:text-5xl leading-tight"
                >
                  Sename Kudjo Kedji, <br />
                  <span className="text-primary font-black">Consultant Data Indépendant</span>
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="max-w-xl text-lg leading-relaxed text-muted-foreground font-medium"
                >
                  Avec plus de quinze ans d'expérience dans l'industrie bancaire, j'aide aujourd'hui les organisations à transformer leurs données en leviers de performance. Mon approche combine rigueur analytique, vision technologique et ingénierie logicielle.
                </motion.p>
              </div>

              {/* Highlights grid */}
              <div className="grid gap-4 sm:grid-cols-1">
                {highlights.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    whileHover={{ y: -4 }}
                    className="group relative overflow-hidden rounded-2xl border border-border/40 bg-white/60 dark:bg-background/60 p-6 backdrop-blur transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.04] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 -z-10" />
                    <div className="relative space-y-2">
                      <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
                        {item.title}
                      </p>
                      <p className="text-sm font-medium leading-relaxed text-foreground">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Removed CTA per user request */}
            </div>

            {/* Right column - Profile card */}
            <div className="relative">
              <div className="absolute inset-0 rounded-[32px] bg-gradient-to-b from-primary/20 via-transparent to-transparent blur-3xl" />
              <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-[28px] border border-border/50 bg-white/50 dark:bg-background/60 p-8 backdrop-blur-xl shadow-xl">
                <div className="flex flex-col items-center text-center">
                  {/* Avatar with glow */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="relative mb-8 mt-4"
                  >
                    <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/30 blur-2xl" />
                    <img
                      src="/images/profile.jpg"
                      alt="Sename Kudjo Kedji"
                      className="relative h-40 w-40 rounded-full border-4 border-white/50 object-cover shadow-[0_25px_60px_rgba(15,23,42,0.2)]"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="space-y-2"
                  >
                    <h3 className="text-3xl font-bold tracking-tight text-foreground">
                      Sename Kudjo Kedji
                    </h3>
                    <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
                      Expertise Bancaire · Développement Data
                    </p>
                  </motion.div>

                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mt-6 max-w-sm text-sm font-medium leading-relaxed text-muted-foreground"
                  >
                    Allier la rigueur institutionnelle à l'agilité des outils modernes pour créer des interfaces et tableaux de bord qui transforment la donnée complexe en évidence.
                  </motion.p>
                </div>

                {/* Social links */}
                <motion.div
                  variants={listVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-80px" }}
                  className="mt-8 flex flex-col gap-3"
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
                        className="group flex items-center justify-between rounded-2xl border border-border/40 bg-white/80 dark:bg-background/80 px-4 py-3 text-left transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:bg-white dark:hover:bg-background hover:shadow-md"
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.985 }}
                      >
                        <div className="flex items-center gap-3">
                          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-border/40 bg-white dark:bg-background text-primary shadow-[0_10px_30px_rgba(15,23,42,0.1)] transition-all group-hover:shadow-[0_10px_30px_rgba(15,23,42,0.15)] group-hover:scale-110">
                            <Icon className="h-5 w-5" />
                          </span>
                          <div>
                            <p className="text-sm font-bold text-foreground">
                              {social.label}
                            </p>
                            <p className="text-xs font-medium text-muted-foreground">
                              {social.handle}
                            </p>
                          </div>
                        </div>
                        <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
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
