"use client";

import TwoIconSection from "./components/twoIconSection/TwoIconSection";
import { IoLogoWhatsapp, IoMdMailOpen } from "react-icons/io";
import { IoHome } from "react-icons/io5";
import { RiComputerLine } from "react-icons/ri";
import Profile from "./components/profile/Profile";
import ServiceSection from "./components/serviceSection/ServiceSection";
import Questionary from "./components/questionary/Questionary";
import Location from "./components/Location";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/Header";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import useScrollTo from "./hooks/useScrollTo";
import ContactUs from "./components/contactUs/ContactUs";
import Footer from "./components/Footer";

export default function Home() {
  const scrollTo = useScrollTo();

  const openWhatsapp = () => {
    window.open("https://api.whatsapp.com/send/?phone=5492972539774");
  };

  const lorem =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea saepe, maxime architecto repellat, impedit laudantium, neque non exercitationem corrupti minus quaerat eligendi aut nostrum nesciunt ex voluptate consequuntur ipsam distinctio? ";

  return (
    <div className="flex flex-col justify-center bg-dark-blue">
      <Navbar />
      <Header title={"titulo"} description={lorem} />
      <TwoIconSection
        iconA={IoHome}
        iconsSize={90}
        titleA="Atención Presencial"
        descriptionA="Gral. Roca 1374, San Martín de los Andes"
        actionA={() => {
          scrollTo("location-section");
        }}
        iconB={RiComputerLine}
        titleB="Atención Virtual"
        descriptionB="Videollamadas, Zoom & Meet"
        actionB={() => null}
      />

      <Profile />
      <ServiceSection />
      <Questionary />
      <TwoIconSection
        iconsSize={90}
        iconA={IoLogoWhatsapp}
        titleA="Llamanos o Escribinos"
        descriptionA="+54 9 2972 53-9774"
        actionA={openWhatsapp}
        iconB={IoMdMailOpen}
        titleB="Envíanos un Mail"
        descriptionB="manuelamaria.villanueva@gmail.com"
        actionB={() => {
          scrollTo("contact-section");
        }}
      />
      <ContactUs />
      <FloatingWhatsApp
        phoneNumber="+54 9 2972 53-9774"
        accountName="Dra. Manuela Villanueva"
        avatar="/assets/WhatsAppProfile.png"
        chatMessage="Hola, dejame tu consulta y en breve me contactaré."
        buttonStyle={{ bottom: 15, right: 15 }}
        chatboxStyle={{ bottom: 80, right: 5 }}
      />
      <Location />
      <Footer />
    </div>
  );
}
