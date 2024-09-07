"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import Image from "next/image";

interface EmblaCarouselProps {
  images: string[];
}

const EmblaCarouselComponent: React.FC<EmblaCarouselProps> = ({ images }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  return (
    <>
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {images.map((image, index) => (
              <div
                className="embla__slide w-[300px] h-auto md:w-[500px] lg:w-[500px]"
                key={index}
              >
                <Image
                  width={1728}
                  height={2160}
                  quality={100}
                  priority={true}
                  src={image}
                  alt={`Slide ${index}`}
                  className="w-full h-auto md:w-[500px] lg:w-[500px] flex justify-center items-center"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={`embla__dot${
                index === selectedIndex ? " embla__dot--selected" : ""
              }`}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default EmblaCarouselComponent;
