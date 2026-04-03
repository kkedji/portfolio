import React from "react";
import { ArrowRight } from "lucide-react";
import { Card } from "./Card";
import { Button } from "./Button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNavigation,
} from "./Carousel";

export default function GalleryHoverCarousel({
  heading = "",
  items = [],
}) {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col md:flex-row justify-between items-end gap-4">
          <h2 className="text-3xl font-bold text-gray-900">
            {heading}
          </h2>
        </div>

        <div className="w-full">
          {items.length === 0 ? (
            <div className="text-center text-gray-500 py-10">
              Aucun projet trouvé pour cette catégorie.
            </div>
          ) : (
            <Carousel key={heading} className="w-full">
              <CarouselContent>
                {items.map((item) => (
                  <CarouselItem key={item.id} className="basis-full md:basis-1/2 lg:basis-1/3 pl-4">
                    <a href={item.url} target="_blank" rel="noopener noreferrer" className="group block relative w-full h-[350px]">
                      <Card className="overflow-hidden h-full w-full rounded-2xl border-0 shadow-lg">
                        {/* Image */}
                        <div className="relative h-full w-full transition-all duration-500 group-hover:h-1/2">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="h-full w-full object-cover object-center"
                          />
                          {/* Fade overlay at bottom */}
                          <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>

                        {/* Text Section */}
                        <div className="absolute bottom-0 left-0 w-full px-6 transition-all duration-500 h-1/2 flex flex-col justify-center bg-white opacity-0 group-hover:opacity-100 translate-y-10 group-hover:translate-y-0">
                          <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">{item.title}</h3>
                          <p className="text-gray-600 text-sm line-clamp-3">
                            {item.summary}
                          </p>
                          <Button
                            variant="outline"
                            size="icon"
                            className="absolute bottom-4 right-4 rounded-full text-primary-600 border-primary-200 hover:bg-primary-50 group-hover:rotate-0 -rotate-45 transition-all duration-500"
                          >
                            <ArrowRight className="h-4 w-4" />
                          </Button>
                        </div>
                      </Card>
                    </a>
                  </CarouselItem>
                ))}
              </CarouselContent>
              {items.length > 3 && (
                <CarouselNavigation className="hidden md:flex w-full left-0 px-0 -mx-4 absolute top-1/2 -translate-y-1/2 z-10 justify-between pointer-events-none" alwaysShow={true} />
              )}
            </Carousel>
          )}
        </div>
      </div>
    </section>
  );
}
