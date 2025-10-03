export function Offer() {
  const pizzas = [
    {
      name: "Margherita",
      ingredients: "Rajčatová omáčka, mozzarella, bazalka",
      price: 149,
    },
    {
      name: "Prosciutto",
      ingredients: "Rajčatová omáčka, mozzarella, šunka",
      price: 169,
    },
    {
      name: "Funghi",
      ingredients: "Rajčatová omáčka, mozzarella, žampiony",
      price: 159,
    },
    {
      name: "Quattro Formaggi",
      ingredients: "Mix čtyř sýrů: mozzarella, gorgonzola, parmazán, eidam",
      price: 189,
    },
    {
      name: "Capricciosa",
      ingredients: "Rajčatová omáčka, mozzarella, šunka, žampiony, artyčoky",
      price: 179,
    },
    {
      name: "Diavola",
      ingredients: "Rajčatová omáčka, mozzarella, pikantní salám, chilli",
      price: 189,
    },
    {
      name: "Vegetariana",
      ingredients:
        "Rajčatová omáčka, mozzarella, paprika, cibule, cuketa, olivy",
      price: 179,
    },
    {
      name: "Tonno",
      ingredients: "Rajčatová omáčka, mozzarella, tuňák, cibule",
      price: 189,
    },
    {
      name: "Calzone",
      ingredients:
        "Skládaná pizza plněná šunkou, mozzarellou a rajčatovou omáčkou",
      price: 199,
    },
  ];

  //bg-fixed
  //bg-[url('/backGround/cccoil.svg')]
  return (
    <section id="Menu"
    className="bg-two bg-center bg-no-repeat bg-[url('/backGround/nemu.svg')] 
                        flex flex-col items-center flex-wrap gap-10 p-5 py-64">
      <h2 className="text-2xl md:text-7xl">MENU</h2>
      <p className="border-b-4 w-[50%]"></p>
      <ul className="">
        {pizzas.map((pizza, index) => (
          <li key={index} className="flex flex-row gap-4 items-end pb-3">
            <div>
              <h2>{pizza.name}</h2>
              <p className="">{pizza.ingredients}</p>
            </div>
            <p className="price">{pizza.price} Kč</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
