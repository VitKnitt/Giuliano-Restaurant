import { Link } from "react-scroll";
import pizzaGif from '../../img/restaurant/icons/pizzaGif.gif'

export function AboutUsText() {
  return (
    <article className="flex flex-wrap">
      <div className="max-w-prose">
        <p className="text-seven text-2xl">CHUTNÉ PIZZY</p>
        <h2 className="md:text-4xl lg:text-7xl pb-4 text-seven font-bold mb-3 ">
          Tradiční pečená pizza v peci
        </h2>
        <p className="text-base md:text-xl text-gray-600 pb-4 leading-relaxed">
          Vychutnejte si autentickou pizzu pečenou v peci. Přijďte ochutnat naše
          jedinečné recepty!
        </p>
        <div className="pt-3">
          <Link
            to="Contact"
            spy={true}
            smooth={true}
            duration={500}
            className="cursor-pointer hover:bg-six border-2
                      border-seven bg-three p-3 rounded-xl max-w-36
                      text-center text-xl font-bold"
          >
            Napište nám
          </Link>
        </div>
      </div>
        <img src={pizzaGif} alt="pizza gif" className="max-w-[10rem] max-h-[10rem]"/>
    </article>
  );
}
