import React, { useEffect, useRef, useState, useMemo } from "react";
import Carousel from "react-multi-carousel";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "react-multi-carousel/lib/styles.css";
import { useTextColors } from "./ColorContext";

interface CarouselItemData {
  video?: string;
  image?: string;
  label: string;
}

interface CarouselComponentProps {
  heading: string;
  items: CarouselItemData[];
}

const CarouselComponent: React.FC<CarouselComponentProps> = ({ heading, items }) => {
  const carouselRef = useRef<any>(null);
  const [mounted, setMounted] = useState(false);              // ⟵ avoid SSR hydration funkiness
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleItems, setVisibleItems] = useState(2);
  const { textColor, linkColor } = useTextColors();

  const totalItems = items.length;

  const carouselResponsive = useMemo(() => ({
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 2 },
    tablet:  { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile:  { breakpoint: { max: 464,  min: 0   }, items: 1 },
  }), []);

  const updateVisibleItems = () => {
    const w = typeof window !== "undefined" ? window.innerWidth : 1024;
    if (w >= 1024) setVisibleItems(carouselResponsive.desktop.items);
    else if (w >= 464) setVisibleItems(carouselResponsive.tablet.items);
    else setVisibleItems(carouselResponsive.mobile.items);
  };

  useEffect(() => {
    setMounted(true);
    updateVisibleItems();
    if (typeof window !== "undefined") {
      window.addEventListener("resize", updateVisibleItems);
      return () => window.removeEventListener("resize", updateVisibleItems);
    }
  }, [carouselResponsive]);

  const canGoPrev = currentSlide > 0;
  const canGoNext = currentSlide < Math.max(0, totalItems - visibleItems);

  return (
    <div className="carousel-container">
      <div className="flex justify-between items-center mt-12">
        <div className="flex justify-left text-3xl" style={{ color: textColor }}>
          {heading}
        </div>

        <nav className="space-x-4">
          <button
            type="button"
            className="text-3xl"
            onClick={() => carouselRef.current?.previous()}
            style={{ color: canGoPrev ? linkColor : "#A0AEC0", cursor: canGoPrev ? "pointer" : "not-allowed" }}
            disabled={!canGoPrev}
            aria-label="Previous"
          >
            <IoIosArrowBack className="ml-1" />
          </button>

          <button
            type="button"
            className="text-3xl"
            onClick={() => carouselRef.current?.next()}
            style={{ color: canGoNext ? linkColor : "#A0AEC0", cursor: canGoNext ? "pointer" : "not-allowed" }}
            disabled={!canGoNext}
            aria-label="Next"
          >
            <IoIosArrowForward className="ml-1" />
          </button>
        </nav>
      </div>

      <div className="py-6">
        <div className="relative">
          {/* Render only after mount to avoid hydration issues */}
          {mounted && (
            <Carousel
              ref={carouselRef}
              responsive={carouselResponsive}
              ssr={true}                 // ⟵ helps with Gatsby SSR
              infinite={false}
              arrows={false}
              showDots={false}
              renderDotsOutside={false}
              swipeable
              draggable
              partialVisible={false}
              afterChange={(prev, { currentSlide }: any) => setCurrentSlide(currentSlide)}
              beforeChange={() => {
                // keep your video-autoplay behavior
                const videos = document.getElementsByClassName("carousel-video");
                for (let i = 0; i < videos.length; i++) {
                  const v = videos[i] as HTMLVideoElement;
                  if (v.paused) v.play();
                }
              }}
              containerClass="overflow-visible"  // avoid hidden clipping from library defaults
              itemClass="px-2"                   // your spacing
            >
              {items.map((item, idx) => (
                <CarouselItem key={idx} video={item.video} image={item.image}>
                  {item.label}
                </CarouselItem>
              ))}
            </Carousel>
          )}
        </div>
      </div>
    </div>
  );
};

const CarouselItem: React.FC<{
  video?: string;
  image?: string;
  children: React.ReactNode;
}> = ({ video, image, children }) => {
  return (
    <div className="carousel-item">
      {video ? (
        <video
          className="carousel-video rounded-lg w-full aspect-video object-cover"
          src={video}
          loop
          muted
          playsInline
          autoPlay
        />
      ) : image ? (
        <img
          className="rounded-lg w-full aspect-video object-cover"
          src={image}
          alt={typeof children === "string" ? children : "carousel image"}
          loading="eager"
        />
      ) : null}
      <p className="text-center mt-2">{children}</p>
    </div>
  );
};

export default CarouselComponent;