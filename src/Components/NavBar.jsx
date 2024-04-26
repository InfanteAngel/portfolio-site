import React from "react";
import { useState } from "react";
import logo from "../assets/icons_resume/favIcon-black.png";
import { Link } from "react-router-dom";
import ScrollToAnchor from "./ScrollToAnchor";
import { toggleOutButton } from "../pages/AboutPage";

const burgerBars = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
)




export default function NavBar() {
    window.addEventListener("scroll", function(){
        const primHeader = document.querySelector(".navBar");
        primHeader.classList.toggle("blurred-bg", window.scrollY > 0);
    })
    const [toggle, setToggle] = useState(false);
  return (
    <>
      <div className="navBar ">
        <div className="nav-wrap">
          <ul className="nav-ul primary-ff">
            <Link to="/">
              <li className="nav-item nav-icon">
                <img src={logo} alt="Angel Logo" />
              </li>
            </Link>
            <Link to="/AboutPage#certification-section">
              <li className="nav-item" id="nav-text">
                Certifications
              </li>
            </Link>
            <Link to="/AboutPage#education-section">
              <li className="nav-item" id="nav-text">
                Education
              </li>
            </Link>
            <Link to="/AboutPage#personal-section">
              <li className="nav-item" id="nav-text">
                Personal
              </li>
            </Link>
            <Link to="/AboutPage#root-section">
              <li className="nav-item" id="nav-text">
                Roots
              </li>
            </Link>
          </ul>
        </div>
      </div>

      <div className="mobileNav">
        {toggle ? (
          <div className="burger" id="activeBtn">
            <button type="button" onClick={() => {setToggle(false)}}>{toggleOutButton}</button>
          </div>
        ) : (
          <div className="burger" id="staticBtn">
            <button type="button" onClick={() => {setToggle(true)}}>{burgerBars}</button>
          </div>
        )}

        {toggle ? <MobileNav /> : null}
      </div>
    </>
  );
}

const MobileNav =  (props) => {
  const {} = props
  return (
    <div className="nav-wrap">
      <ul className="mobile-nav-list primary-ff">
        <Link to="/">
          <li className="nav-item nav-icon">
            <img src={logo} alt="Angel Logo" />
          </li>
        </Link>
        <Link to="/AboutPage#certification-section">
          <li className="nav-item" id="nav-text">
            Certifications
          </li>
        </Link>
        <Link to="/AboutPage#education-section">
          <li className="nav-item" id="nav-text">
            Education
          </li>
        </Link>
        <Link to="/AboutPage#personal-section">
          <li className="nav-item" id="nav-text">
            Personal
          </li>
        </Link>
        <Link to="/AboutPage#root-section">
          <li className="nav-item" id="nav-text">
            Roots
          </li>
        </Link>
      </ul>
    </div>
  );
}
