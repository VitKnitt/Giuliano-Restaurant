import ContactForm from "./ContactForm";
import { OpeningHours } from "./OpeningHours";

export function Contact() {
  //bg-fixed
  //bg-[url('/backGround/cccoil.svg')]
  return (
    <section
  className="flex justify-center items-start flex-wrap gap-10 p-5 pb-20 pt-[150px]
  bg-[url('/backGround/bg1.svg')] bg-no-repeat bg-cover lg:bg-center"
>
  <div className="max-w-[30rem] flex-1">
    <OpeningHours />
  </div>
  <div className="max-w-[30rem] flex-1">
    <ContactForm />
  </div>
</section>

  );
}
