import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);
  const [formCompleted, setFormCompleted] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formCompleted) {
      const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_TEMPLATE_PUBLIC_KEY;

      if (serviceId && templateId && publicKey && form.current) {
        emailjs
          .sendForm(serviceId, templateId, form.current, publicKey)
          .then(() => {
            toast.success("Correo enviado");
            form.current?.reset();
            setFormCompleted(false);
          })
          .catch((error) => {
            toast.error("Algo salió mal");
          });
      } else {
        toast.error(
          "Las variables de entorno no están definidas correctamente o el formulario no está disponible"
        );
      }
    } else {
      toast.error("Por favor completar todos los datos");
    }
  };

  const handleInputChange = () => {
    if (form.current) {
      const formData = new FormData(form.current);
      const requiredFields = [
        "user_name",
        "user_phone",
        "user_mail",
        "user_message",
      ];
      const isFormCompleted = requiredFields.every((field) => {
        const value = formData.get(field);
        if (typeof value === "string") {
          return value.trim() !== "";
        }
        return false;
      });
      setFormCompleted(isFormCompleted);
    }
  };

  return (
    <form
      className="flex justify-center items-center flex-col gap-4 xl:self-center md:w-96"
      ref={form}
      onSubmit={sendEmail}
      onChange={handleInputChange}
    >
      <input
        className={`flex w-80 items-center p-2 px-4 justify-between bg-white py-1 shadow-sm rounded-lg`}
        type="text"
        placeholder="Nombre"
        name="user_name"
      />
      <input
        className={`flex w-80 items-center p-2 px-4 justify-between bg-white py-1 shadow-sm rounded-lg`}
        type="tel"
        placeholder="Celular"
        name="user_phone"
      />
      <input
        className={`flex w-80 items-center p-2 px-4 justify-between bg-white py-1 shadow-sm rounded-lg`}
        type="email"
        placeholder="Email"
        name="user_mail"
      />
      <textarea
        style={{ resize: "none" }}
        className="flex w-80 h-20 items-center p-2 px-4 justify-between bg-white py-1 shadow-sm rounded-lg"
        placeholder="Mensaje"
        name="user_message"
      />
      <button
        className="rounded-xl px-3 py- bg-white hover:bg-slate-500 hover:text-white font-semibold"
        type="submit"
      >
        Enviar
      </button>
      <Toaster
        position="bottom-center"
        reverseOrder={false}
        toastOptions={{
          style: {
            padding: "10px",
            fontSize: "18px",
            fontWeight: 500,
          },
          duration: 5000,
        }}
      />
    </form>
  );
};

export default ContactForm;
