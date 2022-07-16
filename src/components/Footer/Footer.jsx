import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import { Link } from "react-scroll";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
// import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";

const Footer = () => {

  const instagram = () =>{
    window.open("https://www.instagram.com/umar_and_designs/")
  }
  const linkdn = () =>{
    window.open("https://www.linkedin.com/in/umardrazch/")
  }
  const github = () =>{
    window.open("https://github.com/umardraz33")
  }

  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>umar.draz2519@gmail.com</span>
        <div className="f-icons">
         <Link onClick={instagram} target="_blank" style={{cursor:"pointer"}}><Insta color="white" size={"3rem"} href ="" /></Link> 
         <Link onClick={linkdn} target="_blank" style={{cursor:"pointer"}}><Linkedin color="white" size={"3rem"} href ="" /></Link> 
         <Link onClick={github} target="_blank" style={{cursor:"pointer"}}><Gitub color="white" size={"3rem"} href ="" /></Link> 
         
        </div>
      </div>
    </div>
  );
};

export default Footer;
