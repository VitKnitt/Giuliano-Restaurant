import { IntroText } from "./IntorText";


export function Introduction() {
 //bg-fixed
 //bg-[url('/backGround/cccoil.svg')]
  return <section className="bg-[url('/backGround/intro.svg')] md:bg-fixed h-[100vh] bg-cover bg-center flex justify-center flex-wrap gap-10 md:p-16 p-1 pt-20">
    <IntroText />
      </section>;
}
