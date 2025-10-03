import { Link } from "react-scroll";
import logoMini from '../img/restaurant/logoMini.png'

const Footer = () => {
  return (
    <footer
      id="Kontakt"
      className="scroll-mt-[70px] bg-one text-gray-300 py-10 border-t-4 border-three text-center"
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo + krátký text */}
        <div>
          <img src={logoMini} alt="logoMini" className="w-16 mb-3" />
          <p className="text-sm">
           Poctivá italská pizza přímo z pece. Tradice, chuť a láska k řemeslu.
          </p>
        </div>

        {/* Navigace */}
        <div>
          <h3 className="text-white font-semibold mb-3">Navigace</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                to="AboutUs"
                spy={true}
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-white"
              >
                O nás
              </Link>
            </li>
            <li>
              <Link
                to="Products"
                spy={true}
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-white"
              >
                Produkty
              </Link>
            </li>
            <li>
              <Link
                to="Menu"
                spy={true}
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-white"
              >
                Menu
              </Link>
            </li>
            <li>
              <Link
                to="Galerie"
                spy={true}
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-white"
              >
                Galerie
              </Link>
            </li>
            <li>
              <Link
                to="Contact"
                spy={true}
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-white"
              >
                Kontakt
              </Link>
            </li>
          </ul>
        </div>

        {/* Kontakt */}
        <div>
          <h3 className="text-white font-semibold mb-3">Kontakt</h3>
          <ul className="space-y-2 text-sm">
            <li>Email: Giuliano@gmail.com</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">Adresa</h3>
          <ul className="space-y-2 text-sm">
            <li>Giuliano Restaurant</li>
            <li>Na Příkopech 257</li>
            <li>388 01 Blatná</li>
          </ul>
        </div>
      </div>

      {/* spodní lišta */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Všechna práva vyhrazena.</p>
        <div className="flex flex-row justify-center items-center gap-5"></div>
      </div>
    </footer>
  );
};

export default Footer;
