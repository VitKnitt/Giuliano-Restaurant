import { useEffect, useState } from "react";
import domaci from "../../img/restaurant/domaci.png";
import italska from "../../img/restaurant/italska.png";
import pizza from "../../img/restaurant/pizza.png";

const images = [
  domaci,
  italska,
  pizza
];


export function GPhoto() {
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
    <div className="relative overflow-hidden rounded-2xl">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`slide-${idx}`}
            className="flex-shrink-0 object-cover"
          />
        ))}
      </div>
    </div>
  );
}
