import picar from "../../img/restaurant/picar.jpg";
import owner from "../../img/restaurant/owner.jpg";

export function DreamTeam() {
  const team = [
    {
      name: "Giovanni Bellucci",
      img: picar,
      alt: "Giovanni Bellucci",
      description:
        "Hlavní pizzaiolo s více než 15 lety zkušeností. Ovládá tajemství tradiční italské pece na dřevo a s láskou připravuje pizzy s křupavým těstem a autentickými surovinami. Jeho specialitou je Margherita, kterou povýšil na skutečný kulinářský zážitek.",
    },
    {
      name: "Leo Nitce",
      img: owner,
      alt: "Leo Nitce",
      description:
        "Majitel restaurace a srdce celého podniku. Do své pizzerie přinesl nejen autentické recepty, ale také rodinnou atmosféru a vášeň pro poctivou kuchyni. Jeho snem je, aby se každý host cítil jako doma v malé italské trattorii.",
    },
  ];

  return (
    <section className="bg-six flex flex-wrap justify-center gap-20 p-5 py-32 sm:py-64 m-auto">
      {team.map((member, index) => (
        <div
          key={index}
          className="flex flex-col items-center text-center max-w-xs p-4 rounded-lg shadow-lg shadow-one border-2 border-one"
        >
          <img className="h-auto p-4" src={member.img} alt={member.alt} />
          <p className="font-bold text-2xl text-seven">{member.name}</p>
          <p className="text-sm mt-2 text-xl text-seven">
            {member.description}
          </p>
        </div>
      ))}
    </section>
  );
}
