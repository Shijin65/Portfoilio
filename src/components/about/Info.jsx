import React from "react";

const Info = () => {
  const iconSize = 20;
  return (
    <div className="about__info grid">
      <div className="about__box">
        <h3 className="about__title">FRESHER</h3>
        {/* <span className="about__subtitle">8 Years Working</span> */}
      </div>
      <div className="about__box">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={iconSize}
          height={iconSize}
          fill="currentColor"
          class="about__icon bi bi-award"
          viewBox="0 0 16 16"
        >
          <path d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702z" />
          <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1z" />
        </svg>
        <h3 className="about__title">EDUCATION</h3>
        <span className="about__subtitle">BCA</span>
      </div>
      <div className="about__box">
        <h3 className="about__title">DOMAIN</h3>
        <span className="about__subtitle">MERN STACK</span>
      </div>
    </div>
  );
};

export default Info;
