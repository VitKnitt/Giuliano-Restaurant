import { useState, useEffect, useRef } from "react";

type CounterBoxProps = {
  target: number;     // konečná hodnota
  text: string;       // text pod číslem
  duration?: number;  // délka animace v ms
};

export default function CounterBox({ target, text, duration = 1500 }: CounterBoxProps) {
  const [count, setCount] = useState(0);
  const hasAnimatedRef = useRef(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasAnimatedRef.current) {
          hasAnimatedRef.current = true; 
          animateCounter();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  const animateCounter = () => {
    let start = 0;
    const stepTime = Math.max(Math.floor(duration / target), 10);

    const interval = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= target) {
        clearInterval(interval);
      }
    }, stepTime);
  };

  return (
    <div
      ref={ref}
      className="flex flex-col items-center justify-center p-6 rounded-2xl shadow-lg bg-one"
    >
      <span className="text-5xl">{count}</span>
      <p className="mt-2 text-lg">{text}</p>
    </div>
  );
}
