export default function VideoBackground() {
  return (
    <div className="relative h-screen w-full overflow-hidden products">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute left-1/2 top-1/2 min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 object-cover"
      >
        <source src="/backGround/123.mp4" type="video/mp4" />
      </video>

      {/* obsah */}
      <div className="relative z- flex flex-col h-full items-center justify-center">
        <h1 className="text-4xl font-bold text-seven drop-shadow-lg">
          Tvorba webových stránek a e-shopů na míru – rychle, jednoduše a za
          férovou cenu
        </h1>
        <button>
          KONZULTACE ZDARMA
        </button>
        <p>🟢🟡🟡 Příjmám nové zakázky</p>
        <p className="text-xl font-bold text-seven drop-shadow-lg">
          Jsem Vám k dispozici ve všední dny
        </p>
      </div>
    </div>
  );
}
