import pizza1 from "../../img/restaurant/pizza1.png";
import testo from "../../img/restaurant/testo.jpg";
import sauce from "../../img/restaurant/sauce.jpg";




export function ProductsCard() {
  const card = [
    {
      title: "Tradiční pizza",
      description1: "Autentická italská chuť pizzy.",
      path: pizza1,
    },
    {
      title: "Domácí těsto na pizzu",
      description1: "Snadné a kvalitní těsto",
      path: testo,
    },
    {
      title: "Ručně vyráběné omáčky",
      description1: "Omáčky pro skvělou chuť.",
      path: sauce,
    },
  ];

  return (
    <section
      aria-label="Features"
      className="flex flex-wrap gap-6 justify-evenly"
    >
      {/*  <article key={index} className="border-t-4 border-two rounded-xl overflow-hidden hover:shadow-lg hover:shadow-shadow hover:translate-y-[-10px] transition-transform duration-300" */}
      {card.map((feature, index) => (
        <article
          key={index}
          className="border-8 border-three bg-two bg-opacity-[90%] 
          shadow-md shadow-shadow rounded-xl overflow-hidden 
          hover:shadow-lg hover:shadow-seven shadow-one hover:translate-y-[-10px] 
          transition-transform duration-300 sm:w-[300px] w-[250px]"
        >
          <img
            src={feature.path}
            alt="Product"
            className="w-full h-40 object-cover"
          />
          <div className="p-5">
            <h2 className="text-2xl">{feature.title}</h2>
            <ul>
              <li className="mt-2 text-xl">{feature.description1}</li>
            </ul>
          </div>
        </article>
      ))}
    </section>
  );
}
