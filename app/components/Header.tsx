//Old Header
// import Image from "next/image";
// import React from "react";

// interface HeaderProps {
//   title: string;
//   description: React.ReactNode;
// }

// const Header: React.FC<HeaderProps> = ({ title, description }) => {
//   return (
//     <div
//       className="w-full h-screen flex flex-col md:flex-row justify-center items-center bg-white"
//       id="header-section"
//     >
//       <div className="flex flex-col md:flex-row justify-center items-center md:bg-secondary rounded-3xl md:mt-20">
//         <div className="">
//           <Image
//             className="w-64 sm:w-72 md:w-96 sm:max-w-sm p-4 sm:p-12 pt-20"
//             src="/assets/image40t.png"
//             alt="Picture of brain"
//             width={500}
//             height={500}
//           />
//         </div>

//         <div className="flex flex-col md:max-w-sm p-4 sm:p-12 ">
//           <span className="font-bold text-xl">{title}</span>
//           <span className="font-semi">{description}</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;

//New Header
import Image from "next/image";
import React from "react";

interface HeaderProps {
  title: string;
  description: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ title, description }) => {
  return (
    <div id="header-section">
      <div className="w-full flex justify-center items-center bg-white mt-20">
        <div className="flex flex-col md:flex-row">
          <div className="flex justify-center items-center w-full flex-wrap">
            <Image
              className=""
              src="/assets/imagen3.jpeg"
              alt="Imagen Header"
              height={850}
              width={850}
            />
            <div className="flex flex-col p-4 sm:px-12 max-w-[850px] xl:max-w-sm min-w-60 bg-secondary justify-center xl:h-full">
              <span className="font-bold text-xl">{title}</span>
              <span className="font-semi xl:text-lg">{description}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
