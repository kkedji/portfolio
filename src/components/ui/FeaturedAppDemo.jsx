import React, { useState } from "react";
import { PlayCircle } from "lucide-react";
import { Card, CardContent } from "./Card";
import { useTranslation } from "react-i18next";

export default function FeaturedAppDemo({ app }) {
  const { t } = useTranslation();
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="w-full bg-white text-gray-900 py-16 border-b border-gray-100 last:border-0 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="text-left mb-12">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            {app.title}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl">
            {app.description}
          </p>
        </header>

        {/* Templates Grid */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-4 h-full relative z-10">
          {/* Main video/image card */}
          <Card className="lg:col-span-2 bg-gray-100 p-2 overflow-hidden relative mb-4 lg:mb-0 flex flex-col min-h-[300px] md:min-h-[400px] lg:min-h-[500px] rounded-2xl border-0 shadow-lg">
            <CardContent className="p-0 relative flex-grow group rounded-xl overflow-hidden">
              {isPlaying && app.videoUrl ? (
                <iframe
                  className="w-full h-full absolute inset-0 object-cover rounded-xl"
                  src={`${app.videoUrl.replace("watch?v=", "embed/")}?autoplay=1`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                <>
                  <img
                    src={app.thumbnail || "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop"}
                    alt={app.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />

                  {/* Play button overlay */}
                  {app.videoUrl && (
                    <button
                      onClick={() => setIsPlaying(true)}
                      className="absolute inset-0 flex items-center justify-center transition-transform hover:scale-110"
                    >
                      <PlayCircle className="w-16 h-16 sm:w-20 sm:h-20 text-white drop-shadow-xl" strokeWidth={1.5} />
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
                className="flex flex-col border border-gray-200 bg-white rounded-xl p-4 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 font-bold text-sm shrink-0">
                    {i + 1}
                  </div>
                  <h3 className="text-base font-semibold text-gray-900 line-clamp-1">
                    {t('apps.features')}
                  </h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed pl-11">
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack / Integrations */}
        <section className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm relative z-10">
          {app.tags.map((tag, idx) => (
            <div
              key={idx}
              className="p-3 flex items-center gap-3 bg-gray-50 hover:bg-gray-100 rounded-xl transition border border-gray-100"
            >
              <div className="w-10 h-10 shrink-0 rounded-xl bg-white border border-gray-200 shadow-sm flex items-center justify-center text-primary-600 font-bold text-[10px] uppercase text-center p-1 leading-none break-all overflow-hidden">
                {tag.substring(0, 3)}
              </div>
              <div>
                <div className="font-semibold text-gray-900">{t('apps.tech_label', 'Tech')}</div>
                <div className="text-xs text-gray-500 line-clamp-1">{tag}</div>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
