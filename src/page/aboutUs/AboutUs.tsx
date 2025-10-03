import { AboutUsText } from "./AboutUsText";

export function AboutUs() {
  return (
    <section
      id="AboutUs"
      className="scroll-mt-[0px] bg-[url('/backGround/AboutUsBG.svg')]
                flex justify-center
                gap-10 px-5 sm:pb-[7rem] md:pb-[10rem] pt-[80px]"
    >
      <AboutUsText />
    </section>
  );
}
