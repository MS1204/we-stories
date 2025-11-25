import React, { useEffect, useState } from "react";

interface Slide {
  image: string;
  label: string;
}

interface ImageShowcaseProps {
  slides: Slide[];
}

const ImageShowcase: React.FC<ImageShowcaseProps> = ({ slides }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextIndex = (index: number) => (index + 1) % slides.length;

  return (
    <div className="relative w-full max-w-7xl mx-auto h-[500px] flex items-center justify-center overflow-hidden">
      <div className="relative flex items-center justify-center">
        {slides.map((slide, index) => {
          const isActive = index === activeIndex;
          const isNext = index === nextIndex(activeIndex);
          const isNextNext = index === nextIndex(nextIndex(activeIndex));
          const isNextNextNext = index === nextIndex(nextIndex(nextIndex(activeIndex)));

          let className =
            "absolute transition-all duration-700 ease-in-out transform";

          if (isActive) {
            className += " scale-100 z-30 opacity-100";
          } else if (isNext) {
            className += " scale-100 translate-x-[250px] z-20 opacity-90";
          } else if (isNextNext) {
            className += " scale-100 translate-x-[480px] z-10 opacity-70";
          } else if (isNextNextNext) {
            className += " scale-100 translate-x-[680px] opacity-50";
          } else {
            className += " opacity-0";
          }

          return (
            <div key={index} className={className}>
              <img
                src={slide.image}
                alt={slide.label}
                className="w-[700px] h-[450px] object-cover rounded-lg shadow-lg"
              />
              {isActive && (
                <div className="absolute bottom-5 left-10 text-2xl font-semibold text-yellow-400 bg-black/60 px-4 py-2 rounded">
                  {slide.label}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === activeIndex ? "bg-yellow-400" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageShowcase;
