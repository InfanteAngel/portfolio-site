import { useEffect, useState } from "react";
import "./App.css";
import { Link, useNavigate } from "react-router-dom";
import ReactDOM from "react-dom/client";
import React from "react";
import ScrollToTop from "./Components/ScrollToTop";
import AOS from 'aos';
import 'aos/dist/aos.css'


// Image Imports
import mainTitleImage from "../public/resume_images/horizon.jpg";
import soccerImg from "../public/resume_images/soccer_img.jpg";
import guitarImg from "../public/resume_images/guitar_img.jpg";
import djImg from "../public/resume_images/dj_img.jpg";
import angelIcon from "../public/favIcon-black.png"

import softiesFrame from "../public/frames/softies-mb-frame.png";
import palcoFrame from "../public/frames/palco-mb-frame.png";
import tlaxFrame from "../public/frames/tlax-mb-frame.png";
import spaceFrame from "../public/frames/space_mb_frame.png";

import softieslogo from "../public/detailsImg/Softies.png";
import palcologo from "../public/detailsImg/whitePalcoLogoShort.png";
import tlaxlogo from "../public/detailsImg/tlaxTech.png";
import spaceLogo from "../public/detailsImg/space_logo.png"

import softiesPlanner from "../public/detailsImg/softies_planner_img.jpg";
import softiesAccordion from "../public/detailsImg/faq_accordion.png";

import tlaxPages from "../public/detailsImg/tlax-achivements_tb.jpg";
import tlaxServices from "../public/detailsImg/tlax-constraint_mb.jpg";

import spaceCrew from "../public/detailsImg/space_crew.jpg";
import spaceLaunch from "../public/detailsImg/launch_img.jpg";

const projectContent = [
  {
    img: softiesFrame,
    imgAlt: "Softies Mobile Frame",
    title: "Softies Website",
    tagline: "Indulge in bliss and dive into an Ice Cream Wonderland",
    textContent:
      "Softies is an ice cream website that sprouted from a career day. I decided to take that business and make it a step closer to reality by creating its very own website. With subtle, but satisfying animations, and vivid images guaranteed to spark some hunger for dessert, the Softies website shows a small percentage of what I am capable of accomplishing.",
    buttonText: "Under the Scoop",
    link: "https://softies.netlify.app/",
    id: 1,
  },
  // {
  //   img: palcoFrame,
  //   imgAlt: "Palco Mobile Frame",
  //   title: "Palco Website",
  //   tagline: "Gear up with only the best of the best soccer brands of the year",
  //   textContent:
  //     "Sprouting from a deep passion for the world of soccer, I wanted my personality to show along this website, dedicating it to one of my favorite hobbies. An easy to navigate e-commerce website, with only the newest products from the best brands in the soccer realm. With recognized brands like Nike, Adidas, Puma and more, step up your game with the best of the best.",
  //   buttonText: "Inside the Locker Room",
  //   link: "#",
  //   id: 2,
  // },
  {
    img: tlaxFrame,
    imgAlt: "Tlax Mobile Frame",
    title: "TlaxTech Website",
    tagline: "Your Vision is our reality. Experts in landing pages & beyond",
    textContent:
      "With an eager desire to create a small business for small businesses, Tlax set itself in the internet realm with one goal: create eye-catching landing pages with a purpose. A landing page service, with hosting services and UX/UI design included. Set yourself apart, and accomplish your business goals with our landing pages.",
    buttonText: "A Deeper Look",
    link: "https://tlaxtech.vercel.app/",
    id: 2,
  },
  {
    img: spaceFrame,
    imgAlt: "Space Mobile Frame",
    title: "Space Exploration Page",
    tagline: "So you want to travel to SPACE",
    textContent:
      "Getting familiar with Figma, I decided to take my skills and see how well I was able to replicate templates taken from FrontEndMentor. Space being one of my favorite wonders of this world, I decided to bring a space exploration page to life. With eye-catching pictures and interactive pages, delve into orbit with this Space Exploration Page.",
    buttonText: "Interstellar Travel",
    link: "https://spacepage-ai.netlify.app/",
    id: 3,
  },
];

const pageContentList = [
  {
    sectionName: "softies-section",
    title: "Softies Ice Cream - Under The Scoop",
    logoImg: softieslogo,
    altLogo: "softies-logo",
    img: softiesPlanner,
    altImg: "Career Day At Pinnacle",
    img2: softiesAccordion,
    altImg2: "Softies Accordion Feature",
    boundariesContent:
      "Because of the amount of details that this web page would entitle, I had a lot of boundaries I had to tackle. How would I make sure that this website is responsive for all devices? What features would require complex programming and creative thinking? My biggest boundary was my responses, many of my images were overflowing and my content would get distorted in all sorts of places. Not only that but most of my background images were not complying with me either.",
    link: "https://www.canva.com/design/DAF21gTKe80/MMg4pLfDImgBUV2gZsjhaQ/edit?utm_content=DAF21gTKe80&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    buttonContent: "Project Sprint",
    id: 1,
  },
  // {
  //   sectionName: "palco-section",
  //   title: "Paloc SoccerShop - Inside The Locker Room",
  //   logoImg: palcologo,
  //   altLogo: "Palco Logo",
  //   img: "",
  //   altImg: "",
  //   img2: "",
  //   boundariesContent:
  //     "Because I had just started learning React, the barriers did not hesitate to start showing up. One of my biggest boundaries had to do with creating functions that would be called and states that would be changed based on the user input. I also wanted to make sure that I would avoid using repetitive code throughout my website. This is where I struggled the most because it involved using just one component but I had to make sure that I was able to reuse that component throughout the page with different information each time.",
  //   id: 2,
  // },
  {
    sectionName: "tlax-section",
    title: "Tlax Tech - A Deeper Look",
    logoImg: tlaxlogo,
    altLogo: "Tlax Logo",
    img: tlaxPages,
    altImg: "Tlax Pages Display",
    img2: tlaxServices,
    altImg2: "Tlax services display function",
    boundariesContent:
      "Tlax was a wonder to work with, but many of the problems that arose was having to do with the useState. During the creation of this site, I was fairly new to the use of useState and useEffect. One of my biggest challenges was my page's services section. At this time I had a great breakthrough learning how props can be passed into components and altered based on the user toggle. Many things had to be modified as the user toggled a certain section. Thanks to perseverance and dedication I was able to create what I had envisioned and more.",
    link: "https://www.canva.com/design/DAF559bbKL0/7G9XEwSsKaiCZDnxR5a9bg/edit?utm_content=DAF559bbKL0&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    buttonContent: "Project Design",
    id: 2,
  },
  {
    sectionName: "space-section",
    title: "Space Exploration - Interstellar Travel",
    logoImg: spaceLogo,
    altLogo: "Space Logo",
    img: spaceCrew,
    altImg: "Space Crew Page Display",
    img2: spaceLaunch,
    altImg2: "Space Launch Image Section",
    boundariesContent:
      "When it comes to responsiveness there are so many ways that one can approach it. Whether it's using grid, media queries, and flex. There are so many ways that you can make a website responsive. I was able to polish this skill during the creation of this site. My vision with this particular website was to have my elements size up based on the size of the user's screen. This was something different which element sizing did not go well with, so I resorted to using vertical width for my element sizes using a converter I created using Python!",
    link: "https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3",
    buttonContent: "Project Page",
    id: 3,
  },
];

const linkIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z" />
  </svg>
);

const resetBg = () => {
  document.documentElement.style.setProperty("background-color", "#fffffc");
};

function App() {
  useEffect(resetBg);

  useEffect(() => {
    AOS.init({duration:1500})
  }, [])
  return (
    <>
      <ScrollToTop />
      <div className="main_page container primary-ff" id="topSection">
        <div className="header-box">
          <h1 className="mainTitle uppercase ">Angel Infante</h1>
          <h4 className="main-subTitle">Frontend Developer</h4>
        </div>
        <div className="main-page-grid">
          <div className="main-textBox primary-ff">
            <p>Responsive Web Design</p>
            <p>Framework / API Integration</p>
            <p>Development Tools / Libraries</p>
            <p>UI/UX Web Designer</p>
          </div>
          <div className="main-image-box">
            <img src={mainTitleImage} alt="Ruta 57 Rancho" id="title-img" />
          </div>
        </div>
      </div>

      <div className="abt-me-main container">
        <div
          data-aos="fade-in"
          data-aos-duration="1000"
          className="sub-header-box primary-ff"
        >
          <h1>About Me</h1>
        </div>

        <div className="abt-page-grid-main">
          <div className="abt-image-section">
            <div className="images-container">
              <img
                data-aos-delay="1100"
                data-aos="fade-left"
                src={djImg}
                alt="Dj Image"
                id="dj-img"
              />
              <img
                data-aos="fade-right"
                data-aos-delay="1100"
                src={soccerImg}
                alt="soccer_img"
                id="soccer-image"
              />
              <img src={guitarImg} alt="Guitar Image" id="guitar-image" />
            </div>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="6000"
            className="abt-me-text-box accent-ff"
          >
            <p>
              Hello! My Name is Angel, I am a Social, energetic, and
              hard-working person who is always willing to learn new skills. I
              am very dedicated and willing to go the extra mile with a proven
              ability to work with a team. To this day, my passion for Web development keeps growing, and I am always on the lookout for new
              frameworks, languages, and concepts that will push me further for
              my dream position. As I learn and better myself in this field, I
              learn how to follow these rules and break them to create beautiful
              and functional sites that have a purpose...
            </p>
            <Link to="/AboutPage">
              <button className=" boxyButton abt-btn">
                Learn More About Me
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="work-page container">
        <div className="work-header primary-ff">
          <h1 data-aos="fade-in" data-aos-duration="1000">
            My Work
          </h1>
        </div>

        {projectContent.map((project, id) => {
          return <ProjectBox {...project} key={id} />;
        })}
      </div>
      <ContactSection />
      <div className="footer-img">
        <img data-aos="zoom-out" src={angelIcon} alt="Angel Icon" />
      </div>
    </>
  );
}

export default App;

const ProjectBox = (props) => {
  const { img, imgAlt, title, tagline, textContent, buttonText, link,  id } =
    props;
  const softiesInfo = pageContentList.find(({ id }) => id === 1);
  // const palcoInfo = pageContentList.find(({ id }) => id === 2);
  const tlaxInfo = pageContentList.find(({ id }) => id === 2);
  const spaceInfo = pageContentList.find(({ id }) => id === 3);

  const [data, setData] = useState({});

  const navigate = useNavigate();

  const toggledItem = (e) => {
    console.log(id);
    e.preventDefault(); // <-- prevent link navigation

    let data = {};

    switch (id) {
      case 1:
        data = softiesInfo;
        break;

      // case 2:
      //   data = palcoInfo;
      //   break;
      case 2:
        data = tlaxInfo;
        break;

      case 3:
      default:
        data = spaceInfo;
        break;
    }

    setData(data);
    navigate(
      // <-- imperative navigation
      "/DetailsPage",
      { state: { data } }
    );
  };

    useEffect(() => {
      AOS.init();
    }, []);

  return (
    <div className="project-item-box " key={id}>
      <div className="project-item-grid" data-aos="fade-up">
        <div className="frame-wrap">
          <img src={img} alt={imgAlt} id="mobile-frame" />
        </div>

        <div className="project-text-box primary-ff">
          <h1 className="primary-ff">{title}</h1>
          <i className="">{tagline}</i>

          <p>{textContent}</p>

          <div className="toggleButtons" key={id}>
            <Link
              to="/DetailsPage"
              onClick={toggledItem}
              className="primary-ff boxyButton"
            >
              {buttonText}
            </Link>

            <a href={link} className="icon-link" target="_blank">
              {linkIcon}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ContactSection = () => {
      useEffect(() => {
        AOS.init();
      }, []);
  return (
    <div className="contact-section container">
      <div className="contact-grid">
        <div className="grid-a">
          <h1 data-aos="fade-in" className="primary-ff">
            Get In Touch
          </h1>
          <h2 data-aos="fade-in">Email</h2>
          <a
            data-aos="fade-in"
            href="mailto: infanteangel.ag@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            infanteangel.ag@gmail.com
          </a>

          <h2 data-aos="fade-in">Instagram</h2>
          <a
            data-aos="fade-in"
            href="https://www.instagram.com/tlaxtech/?igsh=M3pvbXBka3Z0OG4y"
            target="_blank"
            rel="noreferrer"
          >
            @tlaxtech
          </a>

          <h2 data-aos="fade-in">UpWork</h2>
          <a
            data-aos="fade-in"
            href="https://www.upwork.com/freelancers/~01443fac0ba1de55eb?viewMode=1"
            target="_blank"
            rel="noreferrer"
          >
            Angel Infante
          </a>

          <h2 data-aos="fade-in">Fiverr</h2>
          <a
            data-aos="fade-in"
            href="https://www.fiverr.com/tlaxtech/create-landing-pages-blog-pages-and-portfolio-websites"
            target="_blank"
            rel="noreferrer"
          >
            Angel Jr
          </a>
        </div>

        <div className="grid-b">
          <h1 data-aos="fade-in" className="primary-ff">
            External Links
          </h1>
          <h2 data-aos="fade-in">GitHub</h2>
          <a
            data-aos="fade-in"
            href="https://github.com/InfanteAngel"
            target="_blank"
            rel="noreferrer"
          >
            InfanteAngel
          </a>

          <h2 data-aos="fade-in">FrontEndMentor</h2>
          <a
          data-aos = "fade-in"
            href="https://www.frontendmentor.io/profile/InfanteAngel"
            target="_blank"
            rel="noreferrer"
          >
            @InfanteAngel
          </a>

          <h2 data-aos="fade-in">LinkedIn</h2>
          <a
            data-aos="fade-in"
            href="https://www.linkedin.com/in/angel-infante-352a4b275/"
            target="_blank"
            rel="noreferrer"
          >
            Angel Infante
          </a>
        </div>
      </div>
    </div>
  );
};
