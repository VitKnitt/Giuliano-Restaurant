import tailwind from "../../img/TechnologiesIcons/tailwind.png";

export default function ImageWithSquares() {
  return (
    <div className="relative w-80 h-80 group mx-auto">
      {/* Čtverec vlevo nahoře */}
      <div className="absolute -top-6 -left-6 w-20 h-20 bg-one rounded-md transition-transform duration-300 ease-out group-hover:scale-110 group-hover:-rotate-6 z-0" />

      {/* Čtverec vpravo dole */}
      <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-two rounded-md transition-transform duration-300 ease-out group-hover:scale-110 group-hover:rotate-6 z-0" />

      {/* Hlavní obrázek */}
      <img
        src={tailwind}
        alt="Main"
        className="relative z-10 w-full h-full object-cover rounded-lg shadow-lg"
      />
    </div>
  );
}
