import boxerImg from "../../img/boxer.webp";
import blank from "../../img/blank.png";

export default function InfiniteCarousel() {
  const images = [
    boxerImg,
    blank,
    boxerImg,
    blank,
    boxerImg,
    blank,
  ];

  return (
     <div className="flex items-center justify-center bg-[#E3E3E3]">
      <div className="slider relative mx-auto h-[150px] w-[960px] overflow-hidden bg-white shadow-lg bg-black">
        <div className="slide-track flex animate-scroll">
          {[...images, ...images].map((src, i) => (
            <div key={i} className="slide h-[100px] w-[250px] flex-shrink-0">
              <img src={src} height={100} width={250} alt={`slide-${i}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
