import { useState } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
import logoMini from '../img/restaurant/logoMini.png'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { to: "AboutUs", label: "O nás" },
    { to: "Products", label: "Produkty" },
    { to: "Menu", label: "Menu" },
    { to: "Galerie", label: "Galerie" },
    { to: "Contact", label: "Kontakt" },
  ];

  return (
    <header className="fixed top-0 z-10 flex h-[70px] w-full items-center justify-between bg-one px-6 md:px-12 shadow opacity-95">
      {/* Logo */}
      <img src={logoMini} alt="logoMini" className="w-[150px]" />

      {/* Desktop menu */}
      <ul className="hidden md:flex gap-6">
        {menuItems.map(({ to, label }) => (
          <Link
            key={to}
            activeClass="active"
            className="cursor-pointer text-four text-xl transition-colors duration-300 hover:bg-four hover:text-one [&.active]:bg-four [&.active]:text-one px-2 py-1 rounded"
            to={to}
            spy={true}
            smooth={true}
            duration={500}
          >
            {label}
          </Link>
        ))}
      </ul>

      {/* Hamburger button */}
      <button
        className="md:hidden flex items-center justify-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile menu (overlay) */}
      {isOpen && (
        <div className="absolute top-[70px] left-0 w-full bg-background flex flex-col items-center gap-4 py-6 shadow-md md:hidden">
          {menuItems.map(({ to, label }) => (
            <Link
              key={to}
              activeClass="active"
              className="cursor-pointer text-six transition-colors duration-300 hover:text-one [&.active]:bg-one [&.active]:text-seven px-4 py-2 rounded"
              to={to}
              spy={true}
              smooth={true}
              duration={500}
              onClick={() => setIsOpen(false)}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
