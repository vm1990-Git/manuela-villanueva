"use client";

import React, { useState } from "react";
import { MdRadioButtonChecked, MdRadioButtonUnchecked } from "react-icons/md";

const Location = () => {
  const locationSM =
    "https://maps.google.com/maps?width=100%25&height=600&hl=es&q=Sarmiento%20489,%20San%20Mart%C3%ADn%20de%20los%20Andes,%20Neuqu%C3%A9n+(Centro%20M%C3%A9dico%20del%20Sur)&t=&z=15&ie=UTF8&iwloc=B&output=embed";

  const locationJ =
    "https://maps.google.com/maps?width=100%25&height=600&hl=es&q=H%C3%A9ctor%20Mutio%20130,%20Jun%C3%ADn%20de%20los%20Andes+(Mi%20nombre%20de%20egocios)&t=&z=15&ie=UTF8&iwloc=B&output=embed";

  const [currentLocation, setCurrentLocation] = useState(locationSM);
  const [locationName, setLocationName] = useState("Centro Médico del Sur");
  const [locationaddress, setLocationaddress] = useState(
    "Sarmiento 489, San Martín de los Andes, Neuquén"
  );

  const setLocationSM = () => {
    setCurrentLocation(locationSM);
    setLocationName("Centro Médico del Sur");
    setLocationaddress("Sarmiento 489, San Martín de los Andes, Neuquén");
  };

  const setLocationJ = () => {
    setCurrentLocation(locationJ);
    setLocationName("INAS");
    setLocationaddress("Héctor Mutio 130, Junín de los Andes, Neuquén");
  };

  return (
    <>
      <div className="-translate-y-20" id="location-section"></div>
      <div className="bg-white mb-4">
        <span className="flex justify-center font-bold bg-white text-4xl pt-8">
          Ubicación
        </span>
        <div className="flex flex-wrap justify-center m-4 gap-2 sm:gap-4">
          <button
            onClick={setLocationSM}
            className="flex items-center bg-primary px-2 py-2 rounded-lg hover:opacity-80 font-semibold gap-1 justify-between w-[70vw] sm:w-auto max-w-60"
          >
            <span>San Martín de los Andes</span>
            {currentLocation === locationSM ? (
              <MdRadioButtonChecked size={20} />
            ) : (
              <MdRadioButtonUnchecked size={20} />
            )}
          </button>
          <button
            onClick={setLocationJ}
            className="flex items-center bg-primary px-2 py-2 rounded-lg hover:opacity-80 font-semibold gap-1 justify-between w-[70vw] sm:w-auto max-w-60"
          >
            <span>Junín de los Andes</span>
            {currentLocation === locationJ ? (
              <MdRadioButtonChecked size={20} />
            ) : (
              <MdRadioButtonUnchecked size={20} />
            )}
          </button>
        </div>
        <div className="text-center py-1">
          <span className="flex justify-center font-bold bg-white text-xl">
            {locationName}
          </span>
          <span className="flex justify-center font-semibold bg-white text-sm">
            {locationaddress}
          </span>
        </div>
        <div style={{ width: "100%", backgroundColor: "white" }}>
          <iframe
            width="100%"
            height="500"
            src={currentLocation}
            title="Google Maps"
            loading="lazy"
          ></iframe>
          <div className="w-full flex justify-center">
            <div className="flex flex-col justify-center items-center w-full pt-4 px-4 font-semibold">
              <p className="mb-2 sm:text-lg">
                Fácil acceso desde distintas ciudades de la Patagonia:
              </p>
              <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-1 gap-x-2 text-start ">
                <li>- Aluminé</li>
                <li>- Bariloche</li>
                <li>- Las Coloradas</li>
                <li>- Meliquina</li>
                <li>- Piedra del Águila</li>
                <li>- Villa La Angostura</li>
                <li>- Pilolil</li>
                <li>- Villa Traful</li>
                <li>- Zapala</li>
                <li>- Pucón (Chile)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Location;
