import { MoveRight } from "lucide-react";
import React from "react";

const defaultFeaturedCasestudy = {
  logo: "https://shadcnblocks.com/images/block/block-1.svg",
  company: "Data & Stratégie",
  tags: "ANALYSE DE DONNÉES / BUSINESS INTELLIGENCE",
  title: "Automatisation et Valorisation",
  subtitle: "Comment une donnée propre augmente la croissance.",
  image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop",
  link: "#",
};

const defaultCasestudies = [
  {
    logo: "https://shadcnblocks.com/images/block/block-2.svg",
    company: "Reporting",
    tags: "TABLEAUX DE BORD / POWER BI",
    title: "Tableaux de bord interactifs.",
    subtitle: "Gardez l'œil sur vos KPIs en temps réel.",
    image: "",
    link: "#",
  },
  {
    logo: "https://shadcnblocks.com/images/block/block-3.svg",
    company: "Architecture",
    tags: "MIGRATION SQL / CLOUD",
    title: "Migration et robustesse cloud.",
    subtitle: "Rapatriez et sécurisez toutes vos données isolées.",
    image: "",
    link: "#",
  },
];

export const Casestudy5 = ({
  featuredCasestudy = defaultFeaturedCasestudy,
  casestudies = defaultCasestudies,
}) => {
  return (
    <section className="py-20 bg-background" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Mes Services d'Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transformez vos données en leviers de performance et de réduction des risques
          </p>
        </div>

        <div className="border border-border rounded-xl shadow-sm overflow-hidden bg-white/50">
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
                  Mes Solutions Data
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
                  className={`group flex flex-col justify-between gap-12 border-border bg-background/50 px-6 lg:px-12 py-8 transition-colors duration-500 ease-out hover:bg-muted/40 md:py-12 lg:pb-12 xl:gap-16 ${
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
                      Voir plus 
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
