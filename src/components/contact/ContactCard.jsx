import React, { useRef } from "react";
import { useState } from "react";
import ClipBoard from "../clipBoard/ClipBoard";

const ContactCard = ({ contactItem }) => {
  const [ifHover, setIfHover] = useState(false);
  const [ifCopy, setIfCopy] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(contactItem.contactAddr);
      setIfCopy(true);
      setTimeout(() => {
        setIfCopy(false);
      }, 3000);
    } catch (error) {
      console.log(error);
    }
  };

  

  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  return (
    <a href={contactItem.href}>
      <div   className="skills__content cursor-pointer border flex flex-col items-center  justify-center mt-10 rounded-xl bg-white  h-40 w-80  hover:bg-slate-100">
        {contactItem.iconSvg}
        <h2>{contactItem.contactMethod}</h2>
        <span className=" text-sm mt-2 mb-6">{contactItem.contactAddr}</span>
      </div>
    </a>
  );
};

export default ContactCard;
