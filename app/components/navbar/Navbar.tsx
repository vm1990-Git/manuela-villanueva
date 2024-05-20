"use client";

import useScrollTo from "../../hooks/useScrollTo";
import Logo from "./Logo";
import MenuItem from "./MenuItem";
import React, { useCallback, useState, useEffect, useRef } from "react";
import { HiMenu } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = useScrollTo();

  const menuRef = useRef<HTMLDivElement>(null);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        !(event.target instanceof Node) ||
        !document.contains(event.target as Node)
      ) {
        closeMenu();
      }

      if (isOpen) {
        document.addEventListener("mousedown", handleClickOutside);
      } else {
        document.removeEventListener("mousedown", handleClickOutside);
      }

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    };
  }, [isOpen, closeMenu]);

  return (
    <div className="fixed w-full bg-primary shadow-sm z-50 text-black xl:px-20 top-0">
      <div className="flex justify-between items-center">
        <Logo />
        <div>
          <div>
            <div className="hidden lg:flex">
              <MenuItem
                label="Inicio"
                onClick={() => {
                  scrollTo("header-section");
                }}
              />
              <MenuItem
                label="Acerca de mí"
                onClick={() => {
                  scrollTo("profile-section");
                }}
              />
              <MenuItem
                label="Nuestros Servicios"
                onClick={() => {
                  scrollTo("service-section");
                }}
              />
              <MenuItem
                label="Preguntas Frecuentes"
                onClick={() => {
                  scrollTo("questionary-section");
                }}
              />
              <MenuItem
                label="Contáctanos"
                onClick={() => {
                  scrollTo("contact-section");
                }}
              />
              <MenuItem
                label="Ubicación"
                onClick={() => {
                  scrollTo("location-section");
                }}
              />
            </div>
          </div>
        </div>
        <div className="flex lg:hidden">
          <div className="flex gap-2 relative px-4" ref={menuRef}>
            <div onClick={toggleOpen} className="rounded-full p-1.5 transition">
              <HiMenu size={30} />
            </div>
            {isOpen && (
              <div className="absolute w-lvw bg-secondary right-0 translate-y-14 pl-4">
                <div>
                  <MenuItem
                    label="Inicio"
                    onClick={() => {
                      scrollTo("header-section");
                    }}
                  />
                  <MenuItem
                    label="Acerca de mí"
                    onClick={() => {
                      scrollTo("profile-section");
                      toggleOpen();
                    }}
                  />
                  <MenuItem
                    label="Nuestros Servicios"
                    onClick={() => {
                      scrollTo("service-section");
                      toggleOpen();
                    }}
                  />
                  <MenuItem
                    label="Preguntas Frecuentes"
                    onClick={() => {
                      scrollTo("questionary-section");
                      toggleOpen();
                    }}
                  />
                  <MenuItem
                    label="Contáctanos"
                    onClick={() => {
                      scrollTo("contact-section");
                      toggleOpen();
                    }}
                  />
                  <MenuItem
                    label="Ubicación"
                    onClick={() => {
                      scrollTo("location-section");
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
