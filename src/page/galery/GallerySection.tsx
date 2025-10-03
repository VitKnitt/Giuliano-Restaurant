import { GPhoto } from "./GPhoto";

import pizza5 from '../../img/restaurant/pizza5.png';
import pizza2 from '../../img/restaurant/pizza2.png';
import pizza4 from '../../img/restaurant/pizza4.png';
import owen from '../../img/restaurant/owen.jpg';
import restaurant1 from '../../img/restaurant/restaurant1.jpg';
import restaurant2 from '../../img/restaurant/restaurant2.png';

export function GallerySection() {
  return (
    <section className="bg-[url('/backGround/menuUp.svg')] bg-cover pt-[100px]" id="Galerie">
      <div className="grid gap-4 max-w-5xl mx-auto 
                      grid-cols-1 
                      sm:grid-cols-2 
                      md:grid-cols-3 
                      auto-rows-min">
        {/* 1. řádek */}
        <img src={pizza5} alt="pizza" className="rounded-xl object-cover w-full" />
        <img src={restaurant2} alt="pizza" className="rounded-xl object-cover w-full" />
        <img src={owen} alt="pizza" className="row-span-2 rounded-xl object-cover w-full" />

        {/* 2. řádek */}
        <GPhoto />
        <img src={pizza4} alt="pizza" className="rounded-xl object-cover w-full" />

        {/* 3. řádek */}
        <img src={restaurant1} alt="pizza" className="col-span-2 rounded-xl object-cover w-full invisible sm:visible sm:v" />
        <img src={pizza2} alt="pizza" className="rounded-xl object-cover w-full" />
      </div>
    </section>
  );
}
