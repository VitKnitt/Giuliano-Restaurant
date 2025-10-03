import { Link } from "react-scroll";
import logo from '../../img/restaurant/logo.png'

export function IntroText() {
  return (
    <article
      className="
        max-w-prose p-3 sm:p-4 md:p-6 
        text-center flex flex-col justify-center self-center 
        max-h-64 sm:max-h-[100%] md:max-h-[100%]
      "
    >
      <h1 className="text-lg text-six sm:text-xl md:text-5xl lg:text-7xl lg:pb-10 text-white font-bold mb-2 sm:mb-3 leading-tight md:leading-[1.2] lg:leading-[1.2] border-b-2">
        Tradiční pizzy
      </h1>

      <h2 className="text-xs text-gray-200 sm:text-sm md:text-base lg:text-2xl text-white italic leading-relaxed pb-5">
        Pochutnejte si na originální chuti
      </h2>
      <Link
        to="Products"
        spy={true}
        smooth={true}
        duration={500}
        className="cursor-pointer
         mx-auto  max-w-36 p-3 mb-3
         hover:text-four hover:bg-two bg-three rounded-xl text-center text-xl font-bold border-2 border-two hover:border-black"
      >
        Domácí pizzy
      </Link>
      <img src={logo} alt="pizza-restaurace" className="min-w-[100%] pt-5"/>
    </article>
  );
}
