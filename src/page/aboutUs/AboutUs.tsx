import { AboutUsText } from "./AboutUsText";

export function AboutUs() {
  return (
    <section
      id="AboutUs"
      className="scroll-mt-[0px] bg-[url('/backGround/AboutUsBG.svg')]
                flex justify-center
                gap-10 px-5 pb-[12rem] pt-[30px]"
    >
      <AboutUsText />
    </section>
  );
}
