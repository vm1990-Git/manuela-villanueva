"use client";

import Profile from "./components/profile/Profile";
import ServiceSection from "./components/serviceSection/ServiceSection";
import Questionary from "./components/questionary/Questionary";
import Location from "./components/Location";
import Header from "./components/Header";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import ContactUs from "./components/contactUs/ContactUs";
import BottomIconSection from "./components/twoIconSection/BottomIconSection";
import TopIconSection from "./components/twoIconSection/TopIconSection";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Header />
      <TopIconSection />
      <Profile />
      <ServiceSection />
      <Questionary />
      <BottomIconSection />
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
