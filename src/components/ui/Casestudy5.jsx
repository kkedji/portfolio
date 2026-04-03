import { MoveRight } from "lucide-react";
import React from "react";
import { useTranslation } from "react-i18next";

export const Casestudy5 = () => {
  const { t } = useTranslation();

  const featuredCasestudy = {
    logo: "https://shadcnblocks.com/images/block/block-1.svg",
    company: t('casestudies.featured.company'),
    tags: t('casestudies.featured.tags'),
    title: t('casestudies.featured.title'),
    subtitle: t('casestudies.featured.desc'),
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop",
    link: "/projets",
  };

  const casestudies = [
    {
      company: t('casestudies.grid.1.company'),
      tags: t('casestudies.grid.1.tags'),
      title: t('casestudies.grid.1.title'),
      subtitle: t('casestudies.grid.1.desc'),
      link: "#services",
    },
    {
      company: t('casestudies.grid.2.company'),
      tags: t('casestudies.grid.2.tags'),
      title: t('casestudies.grid.2.title'),
      subtitle: t('casestudies.grid.2.desc'),
      link: "#services",
    },
    {
      company: t('casestudies.grid.3.company'),
      tags: t('casestudies.grid.3.tags'),
      title: t('casestudies.grid.3.title'),
      subtitle: t('casestudies.grid.3.desc'),
      link: "#services",
    },
  ];
  return (
    <section className="py-20 bg-transparent" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            {t('casestudies.sectionTitle')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('casestudies.sectionDesc')}
          </p>
        </div>

        <div className="glass-card border-white/10 overflow-hidden">
          <a
            href={featuredCasestudy.link || "#"}
            className="group grid gap-4 overflow-hidden px-6 lg:px-12 transition-colors duration-500 ease-out hover:bg-white/5 lg:grid-cols-2"
          >
            <div className="flex flex-col justify-between gap-4 pt-8 md:pt-16 lg:pb-16">
              <div className="flex items-center text-2xl font-bold text-foreground">
                {featuredCasestudy.company}
              </div>
              <div className="mb-4 lg:mb-0">
                <span className="text-xs text-blue-400 font-bold tracking-widest uppercase sm:text-sm">
                  {featuredCasestudy.tags}
                </span>
                <h2 className="mt-4 mb-5 text-3xl font-bold text-balance sm:text-4xl sm:leading-[1.1] text-foreground leading-tight">
                  {featuredCasestudy.title}
                </h2>
                <div className="grid gap-6 mb-8">
                  <div>
                    <span className="text-sm font-bold text-blue-400 uppercase tracking-wider">{t('casestudies.featured.problem_label')}</span>
                    <p className="text-muted-foreground mt-1 font-light">{t('casestudies.featured.problem_desc')}</p>
                  </div>
                  <div>
                    <span className="text-sm font-bold text-blue-400 uppercase tracking-wider">{t('casestudies.featured.solution_label')}</span>
                    <p className="text-muted-foreground mt-1 font-light">{t('casestudies.featured.solution_desc')}</p>
                  </div>
                  <div>
                    <span className="text-sm font-bold text-blue-400 uppercase tracking-wider">{t('casestudies.featured.impact_label')}</span>
                    <ul className="list-disc list-inside text-muted-foreground mt-1 space-y-1 font-light">
                      {Object.values(t('casestudies.featured.impact_points', { returnObjects: true })).map((point, idx) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative isolate py-8 lg:py-16">
              <div className="relative isolate h-full border border-white/10 bg-white/5 p-2 rounded-xl shadow-lg">
                <div className="h-full overflow-hidden rounded-lg">
                  <img
                    src={featuredCasestudy.image}
                    alt="placeholder"
                    className="aspect-[14/9] h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </a>
          
          <div className="flex border-t border-white/10">
            <div className="grid lg:grid-cols-3 w-full">
              {casestudies.map((item, idx) => (
                <a
                  key={item.company}
                  href={item.link || "#"}
                  className={`group flex flex-col justify-between gap-12 bg-white/5 border-white/10 px-6 lg:px-12 py-8 transition-colors duration-500 ease-out hover:bg-white/10 md:py-12 lg:pb-12 xl:gap-16 ${
                    idx === 0
                      ? ""
                      : "border-t lg:border-t-0 lg:border-l"
                  }`}
                >
                  <div className="flex items-center text-2xl font-bold text-foreground">
                    {item.company}
                  </div>
                  <div>
                    <span className="text-xs text-blue-400 font-bold tracking-widest uppercase sm:text-sm">
                      {item.tags}
                    </span>
                    <h2 className="mt-4 mb-5 text-2xl font-bold text-balance sm:text-3xl sm:leading-tight text-foreground">
                      {item.title}
                      <span className="font-light text-muted-foreground transition-colors duration-500 ease-out group-hover:text-white/80">
                        {" "}
                        {item.subtitle}
                      </span>
                    </h2>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
