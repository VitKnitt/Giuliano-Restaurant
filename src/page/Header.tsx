import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, Outlet } from "react-router-dom"; // ⬅️ přidej Outlet

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { href: "/article", label: "vytvoř článek" },
    { href: "/allArticles", label: "všechny články" },
    { href: "/shop", label: "shop" },
  ];

  return (
    <>
      <header className="fixed top-0 z-20 flex h-[70px] w-full items-center justify-between bg-one px-6 md:px-12 shadow opacity-95">
        <ul className="hidden md:flex gap-6 list-none pt-6">
          {menuItems.map(({ href, label }) => (
            <li key={href}>
              <Link
                to={href}
                className="text-four text-xl transition-colors duration-300 hover:bg-four hover:text-one px-2 py-1 rounded"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden flex items-center justify-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {isOpen && (
          <div className="absolute top-[70px] left-0 w-full bg-one flex flex-col items-center gap-4 py-6 shadow-md md:hidden">
            {menuItems.map(({ href, label }) => (
              <Link
                key={href}
                to={href}
                className="text-six transition-colors duration-300 hover:text-one px-4 py-2 rounded"
                onClick={() => setIsOpen(false)}
              >
                {label}
              </Link>
            ))}
          </div>
        )}
      </header>

      {/* Tady se vykreslí obsah jednotlivých stránek */}
      <main className="pt-[80px]">
        <Outlet />
      </main>
    </>
  );
};

export default Header;
