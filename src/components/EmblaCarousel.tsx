import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

interface EmblaCarouselProps {
  images: string[];
}

export const EmblaCarousel: React.FC<EmblaCarouselProps> = ({ images }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    dragFree: true,
    containScroll: "trimSnaps",
  });

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="embla relative max-w-full overflow-hidden">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container flex">
          {images.map((src, index) => (
            <div className="embla__slide flex-[0_0_90%] mr-4" key={index}>
              <img src={src} alt="" className="w-full h-auto object-cover rounded-lg" />
            </div>
          ))}
        </div>
      </div>
      {images.length > 1 && (
        <>
          <button
            className="embla__prev absolute top-1/2 left-2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 disabled:opacity-30"
            onClick={scrollPrev}
            disabled={!prevBtnEnabled}
          >
            &#10094;
          </button>
          <button
            className="embla__next absolute top-1/2 right-2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 disabled:opacity-30"
            onClick={scrollNext}
            disabled={!nextBtnEnabled}
          >
            &#10095;
          </button>
        </>
      )}
    </div>
  );
};
