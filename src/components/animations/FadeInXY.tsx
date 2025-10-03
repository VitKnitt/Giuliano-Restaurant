import { useEffect, useRef, useState } from "react";

type FadeInProps = {
  children: React.ReactNode;
  direction?: "left" | "right" | "up" | "down";
};

/*
<FadeIn direction="left">
  <p>Tento text fade-in zleva</p>
</FadeIn>
*/

export default function FadeInXY({ children, direction = "up" }: FadeInProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target); // jen jednou
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  // výchozí posun podle směru
  const directionClasses = {
    up: "translate-y-8",
    down: "-translate-y-8",
    left: "translate-x-8",
    right: "-translate-x-8",
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-in-out transform ${
        visible ? "opacity-100 translate-x-0 translate-y-0" : `opacity-0 ${directionClasses[direction]}`
      }`}
    >
      {children}
    </div>
  );
}
