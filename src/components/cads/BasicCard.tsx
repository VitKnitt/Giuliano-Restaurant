export function BasicCard() {
  const card = [
    {
      title: "test",
      description:
        "Built with performance in mind. Lightning-fast load times and 99.9% uptime guaranteed.",
      badge: "Performance",
    },
    {
      title: "test",
      description:
        "Built with performance in mind. Lightning-fast load times and 99.9% uptime guaranteed.",
      badge: "Performance",
    },
    {
      title: "test",
      description:
        "Built with performance in mind. Lightning-fast load times and 99.9% uptime guaranteed.",
      badge: "Performance",
    },
  ];

  return (
    <section
      aria-label="Features"
      className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 bg-one p-16"
    >
      {card.map((feature, index) => (
        <article key={index} className="border-2 rounded-xl border-two p-5 bg-one">
          <div className="flex items-center justify-between pb-8">
            <h2 className="text-2xl">{feature.title}</h2>
            <p className="bg-three p-2 rounded-2xl text-xs">
              {feature.badge}
            </p>
          </div>
          <p>{feature.description}</p>
        </article>
      ))}
    </section>
  );
}
