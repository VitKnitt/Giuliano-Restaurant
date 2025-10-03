export function OpeningHours() {
  //bg-fixed
  //bg-[url('/backGround/cccoil.svg')]

  const openingHours = [
    { day: "Pondělí", hours: "11:00 - 22:00" },
    { day: "Úterý", hours: "11:00 - 22:00" },
    { day: "Středa", hours: "11:00 - 22:00" },
    { day: "Čtvrtek", hours: "11:00 - 22:00" },
    { day: "Pátek", hours: "11:00 - 23:00" },
    { day: "Sobota", hours: "12:00 - 23:00" },
    { day: "Neděle", hours: "12:00 - 21:00" },
  ];

  return (
    <section className="bg-two bg-opacity-[95%] flex flex-col w-[18rem] justify-center p-5 pb-20 mx-auto">
      <h2 className="text-4xl font-bold text-six mb-4 text-center">
        Otevírací hodiny
      </h2>
      <ul className="divide-y divide-six">
        {openingHours.map((day, index) => (
          <li key={index} className="flex justify-between py-2 text-xl">
            <span className="font-medium text-six">{day.day}</span>
            <span className="text-six">{day.hours}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
