import { ProductsCard } from "./ProductsCard";

export function Products() {
  //bg-fixed
  //bg-[url('/backGround/cccoil.svg')]
  return (
    <section
  id="Products"
  className="
    scroll-mt-[0px] 
    
    flex flex-col items-center justify-evenly flex-wrap gap-10 p-5 pt-[100px] pb-30
    
    bg-contain bg-right
  "
>
  <article className="max-w-prose p-4 bg-two rounded-[20%]">
    <h2 className="text-2xl font-bold mb-3 md:text-7xl border-b-4 border-four">
      Domácí pizza z pece
    </h2>
    <p className="text-base text-six text-xl leading-relaxed">
      Objevte chuť Itálie v Blatné
    </p>
  </article>
  <ProductsCard />
</section>

  );
}
