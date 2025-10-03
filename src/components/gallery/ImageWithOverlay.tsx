export default function ImageWithOverlay() {
  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Obrázek */}
      <img
        src="/backGround/introduction.jpg"
        alt="Background"
        className="w-full h-[400px] object-cover"
      />

      {/* Překryv */}
      <div
        className="
          absolute bottom-4 left-1/2 -translate-x-1/2
          sm:left-8 sm:translate-x-0
          lg:left-[-50px] lg:bottom-[40px]
          bg-white/80 p-3 sm:p-4 rounded-lg shadow-lg
          max-w-[90%] sm:max-w-xs
        "
      >
        <h2 className="text-lg sm:text-xl font-bold">Nadpis</h2>
        <p className="text-sm sm:text-base text-gray-700">
          Tohle je překrývající element.
        </p>
      </div>
    </div>
  );
}
