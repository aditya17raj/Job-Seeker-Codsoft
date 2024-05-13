import React, { useContext } from "react";
import { Context } from "../../main";
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  const { isAuthorized } = useContext(Context);
  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
      <div>&copy; All Rights Reserved By JobZee.</div>
      <div>

        <Link to={"https://github.com/aditya17raj"} target="_blank">
          <FaGithub />
        </Link>
        <Link to={"https://www.linkedin.com/in/aditya-raj-34218022a/"} target="_blank">
          <FaLinkedin />
        </Link>

      </div>
    </footer>
  );
};

export default Footer;
