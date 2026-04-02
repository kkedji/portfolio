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
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop",
    link: "#",
  };

  const casestudies = [
    {
      logo: "https://shadcnblocks.com/images/block/block-2.svg",
      company: t('casestudies.grid.1.company'),
      tags: t('casestudies.grid.1.tags'),
      title: t('casestudies.grid.1.title'),
      subtitle: t('casestudies.grid.1.desc'),
      image: "",
      link: "#",
    },
    {
      logo: "https://shadcnblocks.com/images/block/block-3.svg",
      company: t('casestudies.grid.2.company'),
      tags: t('casestudies.grid.2.tags'),
      title: t('casestudies.grid.2.title'),
      subtitle: t('casestudies.grid.2.desc'),
      image: "",
      link: "#",
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

        <div className="border border-border rounded-xl shadow-sm overflow-hidden bg-white/50 backdrop-blur-md">
          <a
            href={featuredCasestudy.link || "#"}
            className="group grid gap-4 overflow-hidden px-6 lg:px-12 transition-colors duration-500 ease-out hover:bg-muted/40 lg:grid-cols-2"
          >
            <div className="flex flex-col justify-between gap-4 pt-8 md:pt-16 lg:pb-16">
              <div className="flex items-center text-2xl font-bold text-foreground">
                {featuredCasestudy.company}
              </div>
              <div className="mb-4 lg:mb-0">
                <span className="text-xs text-primary font-bold tracking-widest uppercase sm:text-sm">
                  {featuredCasestudy.tags}
                </span>
                <h2 className="mt-4 mb-5 text-3xl font-bold text-balance sm:text-4xl sm:leading-[1.1] text-foreground">
                  {featuredCasestudy.title}
                  <span className="font-medium text-muted-foreground transition-colors duration-500 ease-out group-hover:text-primary/70">
                    {" "}
                    {featuredCasestudy.subtitle}
                  </span>
                </h2>
                <div className="flex items-center gap-2 font-bold text-primary">
                  {t('casestudies.cta')}
                  <MoveRight className="h-5 w-5 transition-transform duration-500 ease-out group-hover:translate-x-1" />
                </div>
              </div>
            </div>
            <div className="relative isolate py-8 lg:py-16">
              <div className="relative isolate h-full border border-border bg-background p-2 rounded-xl shadow-lg">
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
          
          <div className="flex border-t border-border">
            <div className="grid lg:grid-cols-2 w-full">
              {casestudies.map((item, idx) => (
                <a
                  key={item.company}
                  href={item.link || "#"}
                  className={`group flex flex-col justify-between gap-12 border-border bg-white/30 px-6 lg:px-12 py-8 transition-colors duration-500 ease-out hover:bg-muted/40 md:py-12 lg:pb-12 xl:gap-16 ${
                    idx === 0
                      ? ""
                      : "border-t lg:border-t-0 lg:border-l"
                  }`}
                >
                  <div className="flex items-center text-2xl font-bold text-foreground">
                    {item.company}
                  </div>
                  <div>
                    <span className="text-xs text-primary font-bold tracking-widest uppercase sm:text-sm">
                      {item.tags}
                    </span>
                    <h2 className="mt-4 mb-5 text-2xl font-bold text-balance sm:text-3xl sm:leading-tight text-foreground">
                      {item.title}
                      <span className="font-medium text-muted-foreground transition-colors duration-500 ease-out group-hover:text-primary/70">
                        {" "}
                        {item.subtitle}
                      </span>
                    </h2>
                    <div className="flex items-center gap-2 font-bold text-primary">
                      {t('casestudies.viewMore')} 
                      <MoveRight className="h-5 w-5 transition-transform duration-500 ease-out group-hover:translate-x-1" />
                    </div>
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
