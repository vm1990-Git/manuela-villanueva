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

  const HeaderDescription =
    "¡Hola! Te doy la bienvenida a mi sitio web para conocernos un poco. Mi nombre es Manuela Villanueva, neuróloga formada en la UBA y en el Hospital Ramos Mejía de Buenos Aires. Me mudé a la ciudad más hermosa, San Martín de los Andes, donde estoy trabajando. Mi enfoque se centra en la atención médica integral y personalizada a cada uno de mis pacientes.";

  return (
    <div className="flex flex-col">
      <Navbar />
      <Header
        title={"Dra. Manuela Villanueva"}
        description={HeaderDescription}
      />
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
