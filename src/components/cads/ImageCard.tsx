import boxerImg from "../../img/boxer.webp";

export function ImageCard() {
  const card = [
    {
      title: "test",
      description:
        "Built with performance in mind. Lightning-fast load times and 99.9% uptime guaranteed.",
      path: boxerImg,
    },
    {
      title: "test",
      description:
        "Built with performance in mind. Lightning-fast load times and 99.9% uptime guaranteed.",
      path: boxerImg,
    },
    {
      title: "test",
      description:
        "Built with performance in mind. Lightning-fast load times and 99.9% uptime guaranteed.",
      path: boxerImg,
    },
  ];

  return (
    <section
      aria-label="Features"
      className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {/*  <article key={index} className="border-t-4 border-two rounded-xl overflow-hidden hover:shadow-lg hover:shadow-shadow hover:translate-y-[-10px] transition-transform duration-300" */}
      {card.map((feature, index) => (
        <article key={index} className="flex flex-col justify-center items-center align-center w-[300px] rounded-xl shadow-2xl shadow-shadow">
          <img
            src={feature.path}
            alt="Product"
            className="w-full h-40 object-cover"
          />
          <div className="p-5">
            <h2 className="text-xl">{feature.title}</h2>
            <p className="mt-2">{feature.description}</p>
          </div>
        </article>
      ))}
    </section>
  );
}
