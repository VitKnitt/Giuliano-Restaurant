import boxerImg from "../../img/boxer.webp";

export function GridElementSection() {
  return (
    //bg-[url('/backGround/cccoil.svg')]
 <section className="bg-one bg-cover bg-center grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-10 p-5 justify-items-center">
  <img src={boxerImg} className="w-[300px]" alt="boxer" />
  <img src={boxerImg} className="w-[300px]" alt="boxer" />
  <img src={boxerImg} className="w-[300px]" alt="boxer" />
  <img src={boxerImg} className="w-[300px]" alt="boxer" />
</section>

  );
}
