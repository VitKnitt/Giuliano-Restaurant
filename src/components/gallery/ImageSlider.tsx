import { useEffect, useState } from "react";

const images = [
  "/images/pizza1.jpg",
  "/images/pizza2.jpg",
  "/images/pizza3.jpg",
];

export function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-3xl overflow-hidden rounded-2xl shadow-lg mx-auto">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`slide-${idx}`}
            className="w-full flex-shrink-0 object-cover"
          />
        ))}
      </div>
    </div>
  );
}
