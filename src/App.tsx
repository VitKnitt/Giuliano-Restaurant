import { AboutUs } from "./page/aboutUs/AboutUs";
import { Contact } from "./page/contact form/Contact";
import { DreamTeam } from "./page/dream team/DreamTeam";
import FadeIn from "./page/FadeIn";
import Footer from "./page/Footer";
import { GallerySection } from "./page/galery/GallerySection";
import Header from "./page/Header";
import { Introduction } from "./page/Introduction/Introduction";
import { Offer } from "./page/Offer/Offer";
import { OpeningHours } from "./page/contact form/OpeningHours";
import { Products } from "./page/products/Products";
import { WhereToFindUs } from "./page/WhereToFindUs/WhereToFindUs";


function App() {
  return (
   <div className="bg-two bg-repeat bg-[length:6%_auto]">
      <Header />
      <FadeIn children={<Introduction />} />
      <FadeIn children={<AboutUs />} />
      <FadeIn children={<Products />} />
      <FadeIn children={<Offer />} />
      <FadeIn children={<GallerySection />} />
      <FadeIn children={<DreamTeam />} />
      <FadeIn children={<WhereToFindUs />} />
      <FadeIn children={<Contact />} />

      <Footer />
    </div>
  );
}

export default App;
