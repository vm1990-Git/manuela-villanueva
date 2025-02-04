"use client";

import Logo from "./Logo";
import MenuItem from "./MenuItem";
import React, { useCallback, useState, useEffect, useRef } from "react";
import { HiMenu } from "react-icons/hi";
import MenuItemAccordion from "./MenuItemAccordion";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const toggleOpen = useCallback(() => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }, []);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, closeMenu]);

  return (
    <div className="fixed w-full bg-primary shadow-sm z-50 text-black xl:px-20 top-0">
      <div className="flex justify-between items-center">
        <Logo />
        <div>
          <div>
            <div className="hidden xl:flex">
              <MenuItem
                label="Inicio"
                onClick={() => {
                  router.push("/#header-section");
                }}
              />
              <MenuItem
                label="Acerca de mí"
                onClick={() => {
                  router.push("/#profile-section");
                }}
              />
              <MenuItemAccordion
                label="Nuestros Servicios"
                options={[
                  {
                    label: "Electroencefalograma",
                    onClick: () =>
                      router.push("/servicios/electroencefalograma"),
                  },
                  {
                    label: "Consulta Neurológica",
                    onClick: () =>
                      router.push("/servicios/consulta_neurologica"),
                  },
                  {
                    label: "Escalas Neurológicas",
                    onClick: () =>
                      router.push("/servicios/escalas_neurologicas"),
                  },
                ]}
              />
              <MenuItem
                label="Preguntas Frecuentes"
                onClick={() => router.push("/#questionary-section")}
              />
              <MenuItem
                label="Contáctanos"
                onClick={() => router.push("/#contact-section")}
              />
              <MenuItem
                label="Ubicación"
                onClick={() => router.push("/#location-section")}
              />
            </div>
          </div>
        </div>
        <div className="flex xl:hidden">
          <div className="flex gap-2 relative px-4" ref={menuRef}>
            <div onClick={toggleOpen} className="rounded-full p-1.5 transition">
              <HiMenu size={30} />
            </div>
            {isOpen && (
              <div className="absolute w-lvw bg-secondary right-0 translate-y-14 pl-4 shadow-md">
                <div>
                  <MenuItem
                    label="Inicio"
                    onClick={() => {
                      router.push("/#header-section");
                      toggleOpen();
                    }}
                  />
                  <MenuItem
                    label="Acerca de mí"
                    onClick={() => {
                      router.push("/#profile-section");
                      toggleOpen();
                    }}
                  />
                  <MenuItemAccordion
                    label="Nuestros Servicios"
                    options={[
                      {
                        label: "Electroencefalograma",
                        onClick: () => {
                          router.push("/servicios/electroencefalograma");
                          toggleOpen();
                        },
                      },
                      {
                        label: "Consulta Neurológica",
                        onClick: () => {
                          router.push("/servicios/consulta_neurologica");
                          toggleOpen();
                        },
                      },
                      {
                        label: "Escalas Neurológicas",
                        onClick: () => {
                          router.push("/servicios/escalas_neurologicas");
                          toggleOpen();
                        },
                      },
                    ]}
                  />
                  <MenuItem
                    label="Preguntas Frecuentes"
                    onClick={() => {
                      router.push("/#questionary-section");
                      toggleOpen();
                    }}
                  />
                  <MenuItem
                    label="Contáctanos"
                    onClick={() => {
                      router.push("/#contact-section");
                      toggleOpen();
                    }}
                  />
                  <MenuItem
                    label="Ubicación"
                    onClick={() => {
                      router.push("/#location-section");
                      toggleOpen();
                    }}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
