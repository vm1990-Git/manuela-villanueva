"use client";

import TwoIconSection from "./components/twoIconSection/TwoIconSection";
import { IoLogoWhatsapp, IoMdMailOpen } from "react-icons/io";
import { IoHome } from "react-icons/io5";
import { RiComputerLine } from "react-icons/ri";
import Profile from "./components/profile/Profile";
import ServiceSection from "./components/serviceSection/ServiceSection";
import Questionary from "./components/questionary/Questionary";
import Location from "./components/Location";
import Header from "./components/Header";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import useScrollTo from "./hooks/useScrollTo";
import ContactUs from "./components/contactUs/ContactUs";
import { useRouter } from "next/navigation";

export default function Home() {
  const scrollTo = useScrollTo();
  const router = useRouter();

  const openWhatsapp = () => {
    window.open("https://api.whatsapp.com/send/?phone=5492972539774");
  };

  const HeaderDescription = (
    <>
      Soy neuróloga especialista en epilepsia, formada en la UBA y en el
      Hospital Ramos Mejía de Buenos Aires. Actualmente trabajo en{" "}
      <strong>San Martín de los Andes</strong> y{" "}
      <strong>Junín de los Andes</strong>, donde realizo estudios de{" "}
      <strong
        className="cursor-pointer hover:text-tertiary"
        onClick={() => router.push("/servicios/electroencefalograma")}
      >
        electroencefalograma
      </strong>{" "}
      y brindo atención médica integral y personalizada a cada uno de mis
      pacientes. <br />
    </>
  );

  return (
    <div className="flex flex-col">
      <Header
        title={"Dra. Manuela Villanueva"}
        description={HeaderDescription}
      />
      <TwoIconSection
        iconA={IoHome}
        iconsSize={90}
        titleA="Atención Presencial"
        descriptionA="San Martín de los Andes y Junín de los Andes"
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
        titleA="Escribinos a Whatsapp"
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
        avatar="/assets/WhatsAppProfile.webp"
        chatMessage="Hola, dejame tu consulta y en breve me contactaré."
        buttonStyle={{ bottom: 15, right: 15 }}
        chatboxStyle={{ bottom: 80, right: 5 }}
      />
      <Location />
    </div>
  );
}
