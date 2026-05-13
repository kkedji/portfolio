import React, { useState } from "react";
import { ExternalLink, PlayCircle } from "lucide-react";
import { Card, CardContent } from "./Card";
import { useTranslation } from "react-i18next";

import { cn } from "../../lib/utils";

export default function FeaturedAppDemo({ app, lightMode = false }) {
  const { t } = useTranslation();
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className={cn(
      "w-full py-16 relative border-t transition-colors duration-500 first:border-0 last:border-b-0",
      lightMode ? "bg-white border-gray-100" : "bg-transparent text-foreground border-white/5"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="text-left mb-12">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
            <h2 className={cn(
              "text-3xl md:text-5xl font-bold tracking-tight",
              lightMode ? "text-gray-900" : "gradient-text"
            )}>
              {app.title}
            </h2>
            {app.demoLink && app.demoLink !== "#" && (
              <a
                href={app.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "inline-flex shrink-0 items-center gap-2 rounded-lg border px-4 py-3 text-sm font-bold transition-colors",
                  lightMode
                    ? "border-blue-100 bg-blue-50 text-blue-700 hover:bg-blue-100"
                    : "border-white/10 bg-white/10 text-white hover:bg-white/20"
                )}
              >
                {app.siteLabel || app.demoLink.replace(/^https?:\/\//, "")}
                <ExternalLink className="size-4" />
              </a>
            )}
          </div>
          <p className={cn(
            "text-lg md:text-xl max-w-4xl font-light mt-4",
            lightMode ? "text-gray-600" : "text-muted-foreground"
          )}>
            {app.description}
          </p>
        </header>

        {/* Templates Grid */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full relative z-10">
          {/* Main video/image card */}
          <Card className={cn(
            "lg:col-span-2 p-2 overflow-hidden relative mb-4 lg:mb-0 flex flex-col min-h-[300px] md:min-h-[400px] lg:min-h-[500px] rounded-[2rem] border-0 shadow-xl",
            lightMode ? "bg-gray-50" : "bg-gray-100"
          )}>
            <CardContent className="p-0 relative flex-grow group rounded-3xl overflow-hidden">
              {isPlaying && app.videoUrl ? (
                <iframe
                  className="w-full h-full absolute inset-0 object-cover rounded-3xl"
                  src={`${app.videoUrl.replace("watch?v=", "embed/")}?autoplay=1`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                <>
                  <img
                    src={app.thumbnail || "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop"}
                    alt={app.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />

                  {/* Play button overlay */}
                  {app.videoUrl && (
                    <button
                      onClick={() => setIsPlaying(true)}
                      className="absolute inset-0 flex items-center justify-center transition-transform hover:scale-110 z-20"
                    >
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-600/90 rounded-full flex items-center justify-center text-white shadow-2xl backdrop-blur-sm">
                        <PlayCircle className="w-10 h-10 sm:w-12 sm:h-12" strokeWidth={1.5} />
                      </div>
                    </button>
                  )}
                </>
              )}
            </CardContent>
          </Card>

          {/* Feature cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 h-full">
            {app.features.map((feature, i) => (
              <div
                key={i}
                className={cn(
                  "flex flex-col p-6 transition-all border rounded-[2rem]",
                  lightMode 
                    ? "bg-gray-50 border-gray-100 hover:bg-white hover:shadow-xl hover:-translate-y-1" 
                    : "glass-card border-white/10 hover:bg-white/10"
                )}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-sm shrink-0 border border-blue-200">
                    {i + 1}
                  </div>
                  <h3 className={cn(
                    "text-lg font-bold",
                    lightMode ? "text-gray-900" : "text-foreground"
                  )}>
                    {t('apps.features')}
                  </h3>
                </div>
                <p className={cn(
                  "text-base font-light leading-relaxed",
                  lightMode ? "text-gray-600" : "text-muted-foreground"
                )}>
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack / Integrations */}
        <section className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm relative z-10">
          {app.tags.map((tag, idx) => (
            <div
              key={idx}
              className={cn(
                "p-4 flex items-center gap-4 transition-all border rounded-2xl",
                lightMode 
                  ? "bg-white border-gray-100 hover:shadow-md" 
                  : "glass-card border-white/10 hover:bg-white/10"
              )}
            >
              <div className={cn(
                "w-12 h-12 shrink-0 rounded-xl border shadow-sm flex items-center justify-center font-bold text-[10px] uppercase text-center p-1 leading-none break-all overflow-hidden",
                lightMode ? "bg-blue-50 border-blue-100 text-blue-600" : "bg-white/10 border-white/20 text-primary"
              )}>
                {tag.substring(0, 3)}
              </div>
              <div>
                <div className={cn(
                  "font-bold",
                  lightMode ? "text-gray-900" : "text-foreground"
                )}>{t('apps.tech_label', 'Tech')}</div>
                <div className={cn(
                  "text-xs font-medium",
                  lightMode ? "text-gray-500" : "text-muted-foreground"
                )}>{tag}</div>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
