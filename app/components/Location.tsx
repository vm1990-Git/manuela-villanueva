import React from "react";

const Location = () => {
  return (
    <div id="location-section" className="bg-white">
      <span className="flex justify-center font-bold bg-white text-4xl pt-8">
        Ubicación
      </span>
      <span className="flex justify-center font-semibold bg-white text-sm py-2">
        Gral. Roca 1374, San Martín de los Andes, Neuquén
      </span>
      <div style={{ width: "100%", backgroundColor: "white" }}>
        <iframe
          width="100%"
          height="500"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=es&amp;q=gral.roca%201374,%20san%20martin%20de%20los%20andes,%20neuquen+(Consultorio%20Lic.%20Pena)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </div>
    </div>
  );
};

export default Location;
