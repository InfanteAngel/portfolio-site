import React, { useEffect, useState } from "react";
import matImg from "../assets/arco_57.jpg";
import guitarImg from "../assets/resume_images/guitar_img.jpg";
import soccerImg from "../assets/resume_images/soccer_img.jpg";
import djImg from "../assets/resume_images/dj_img.jpg";
import { ContactSection } from "../App";
import NavBar from "../Components/NavBar";
import { ScrollRestoration } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

// Education Icons

import CHS from "../assets/icons_resume/codeHs_icon.png";
import CMU from "../assets/icons_resume/cmu_icon.png";
import CTHS from "../assets/icons_resume/cths_icon.jpg";
import FrontEndIMG from "../assets/icons_resume/fronteEnd_icon.jpg";
import CORG from "../assets/icons_resume/code_icon.jpg";

// Certification Images

import pythonBadge from "../assets/certification_images/mta_badge.png";
import apBadge from "../assets/certification_images/ap_icon.png";
import htmlCertification from "../assets/certification_images/infanteAngels-profile-_-Codecademy---html/infanteAngel's profile _ Codecademy - html_page-0001.jpg";
import cssCertification from "../assets/certification_images/infanteAngels-profile-_-Codecademy---css/infanteAngel's profile _ Codecademy - css_page-0001.jpg";
import ScrollToTop from "../Components/ScrollToTop";
import ScrollToAnchor from "../Components/ScrollToAnchor";

export const toggleOutButton = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
    <path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z" />
  </svg>
);

export default function AboutPage() {
  const [boxHover1, setBox1] = useState(false);
  const [boxHover2, setBox2] = useState(false);
  const [boxHover3, setBox3] = useState(false);

  const [box1Select, selectbox1] = useState(false);
  const [box2Select, selectbox2] = useState(false);
  const [box3Select, selectbox3] = useState(false);

  const [boxSelect, setSelectedBox] = useState(false);

  const aboutContentList = [
    {
      title: "Strings and Stories: My Journey With The Guitar",
      content:
        "I was always a Kid who loved music, from instruments like the recorder, drums, and piano. I never gained interest in the string family until I started playing Guitar Hero. I loved the way I could make sound happen, so I wanted to learn the real thing. Starting with an electric Epiphone Guitar at 14 years old, I started to slowly learn songs from bands like Metallica, Nirvana, and Guns N Roses. Eventually, I transitioned into an acoustic guitar and started to play Regional Mexican Music, from artists like Fuerza Regida, Junior H, and Natanael Cano. I fell in love with this genre, due to my family being Spanish speakers and this genre was and is still very appreciated. I have 4 years of playing, and I never grew tired of this wonderful instrument.",
      image: guitarImg,
      imageAlt: "Guitar Image",
      id: 1,
    },
    {
      title: "Passion On The Pitch: The Joy Of Soccer",
      content:
        "I learned how to kick a ball before I could even speak. At the ages of 1 and 2, my Dad introduced me to the beautiful game of Football. When I was 9 years old I joined my first ever soccer team, we were crowned champions that season I joined, making great friends and memories along the way. I have been in multiple championship-winning teams since, and to this day, play casual matches with others at local fields & parks. Football, is therapy for me, although I could have taken the pro route, I find it more as a relaxing hobby, one that I can put my time in and reflect the potential in me. Passing this sport down to my little brother was the best thing that could happen. I plan on carrying this sport till I die, it is and will be one of the best things I could have met in my life.",
      image: soccerImg,
      imageAlt: "Soccer Image",
      id: 2,
    },
    {
      title: "Rhythms In Rotation: The Joy Of Djing",
      content:
        "For the first time at 12 years old, I saw my Dad who has been a Dj most of his life display his work during a house party. I gained interest and it sparked curiosity in me, I wanted to know more about what a Dj really did and why they were so sought after, especially in parties. As he taught me his ways and showed me what a Dj does, I quickly wanted to be just like him. I started to go online and watch other DJs play in big festivals like Tomorrowland, UMF, and EDC. This is where my love for EDM music started and as I transitioned into family parties I knew how to mix up diverse music. To this day it's a side hustle for me and it's one I see myself doing for a long time.",
      image: djImg,
      imageAlt: "Dj Image",
      id: 3,
    },
  ];
  const guitarContent = aboutContentList.find(({ id }) => id === 1);
  const soccerContent = aboutContentList.find(({ id }) => id === 2);
  const djContent = aboutContentList.find(({ id }) => id === 3);

  const educationContentList = [
    {
      title: "Dr. Kirk Lewis Career & Technical High School",
      image: CTHS,
      imageAlt: "Cths Icon",
      year: "2020 - 2024",
      externalText: "GPA 3.8",
      content:
        "I am currently attending CTHS, where I am taking a Computer Science Course. I am in my senior year of High School and am set to graduate on May 22nd of this year. During my 4 years of High School, I have learned vital skills that will help me in my selected field. I've learned the base of Computer Science starting with its principles and diving into multiple languages along with projects throughout the years. Here I have been able to work hand in hand with peers to brainstorm, debug, and write clean readable code.",
      id: 1,
    },
    {
      title: "Code.org | Ap Computer Science Principles Course",
      image: CORG,
      imageAlt: "Code Org Icon",
      year: "2020-2021",
      externalText: "JavaScript",
      content:
        "During my freshman year, we utilized Code.Org to learn the basics of coding. We started off learning JavaScript and understanding the basics of the web. Along with the course, we created our projects and presented them in class virtually. Each project was followed by documentation and post-reflective sheets. Learned about the utilization of creative commons and copyright, along with the digital divide and impacts of computing.",
      id: 2,
    },
    {
      title: "Carnegie Mellon University CS Academy | Computer Science A",
      image: CMU,
      imageAlt: "CMU Icon",
      year: "2021 -2022",
      externalText: "Python",
      content:
        "Revisited the basics of coding in a python-oriented environment. Performed operations using data types and operators along with control flow with decisions and loops. Created programs that utilized input and output operations along with document and structure code. As a group performed troubleshooting and error handling with operations using modules and tools. ",
      id: 3,
    },
    {
      title: "CodeHs Academy | Ap Computer Science",
      image: CHS,
      imageAlt: "Code Hs Icon",
      year: "2022 - 2023",
      externalText: "Java",
      content:
        "Went over programming basics with Java, and began developing object-oriented programming. In preparation for the Advanced Placement Exam, AP Computer Science A Java. Involved in peer collaboration to write code along with pseudo code and error handling. Encouraged to develop our code along with pseudo-written programs.",
      id: 4,
    },
    {
      title: "CodeHs, CodeCademy, FreeCodeCamp | Web Developer Course",
      image: FrontEndIMG,
      imageAlt: "FrontEnd Icon",
      year: "2023 - Present",
      externalText: "HTML, CSS, Jsx, React, Git",
      content:
        "I am currently learning Front End Development through CodeHS, FronteEnd Mentor, and FreeCodeCamp. I started off learning HTML & CSS, and later on picked up JavaScript again. After getting comfortable with Vanilla Js and its basic front-end languages I decided to take it further. I started learning how to integrate APIs and got familiar with the React Framework. I worked on projects and started building up a portfolio that I could later present for a potential job opportunity. I am currently hoping to jump into other frameworks like Tailwind CSS, and Angular. My plan is to one day become a fullstack developer, using Front End as my initial stepping stone.",
      id: 5,
    },
  ];

  const certificationList = [
    {
      title: "MTA: Introduction to Programming Using Python",
      image: pythonBadge,
      imageAlt: "Mta Python Badge",
      year: "2022",
      externalText: "Python Programming",
      content:
        "Earners of the MTA: Introduction to Programming Using Python certification have demonstrated the skills and knowledge to recognize and write syntactically correct Python code, recognize data types supported by Python, and the ability to recognize and write Python code that will logically solve a given problem.",
      id: 1,
    },
    {
      title: "AP Computer Science Principles Exam - AP CollegeBoard",
      image: apBadge,
      imageAlt: "AP CollegeBoard Badge",
      year: "2023",
      externalText: "Score: 4/5",
      content:
        "The AP Computer Science Principles Exam has two parts: the Create performance task—which you’ll complete over the course of the year and submit online for scoring through the AP Digital Portfolio—and the end-of-course multiple-choice exam. Both measure your proficiency in and grasp of the course practices and content, and both contribute to your final AP score on a scale of 1–5. A score of 4 offers a recommendation of very well qualified to receive college credit and/or placement.",
      id: 2,
    },
    {
      title: "Learn CSS Course",
      image: cssCertification,
      imageAlt: "CSS CodeCademy Certification Of Completion",
      year: "2023",
      externalText: "CSS",
      content:
        "Cascading Style Sheets - Project Implementation - Responsive Web Design - Web Experience - Programming Languages - User Interface Design - English",
      id: 3,
    },
    {
      title: "Learn HTML Course",
      image: htmlCertification,
      imageAlt: "HTML CodeCademy Certification Of Completion",
      year: "2023",
      externalText: "HTML",
      content:
        "HTML5 - HTML - Project Implementation - Responsive Web Design - Web Experience - Programming Languages - User Interface Design - English",
      id: 4,
    },
  ];

  // Filtered Out List Of Content
  const cthsContent = educationContentList.find(({ id }) => id === 1);
  const freshManContent = educationContentList.find(({ id }) => id === 2);
  const sophmoreContent = educationContentList.find(({ id }) => id === 3);
  const juniorContent = educationContentList.find(({ id }) => id === 4);
  const seniorContent = educationContentList.find(({ id }) => id === 5);

  const pythonContent = certificationList.find(({ id }) => id === 1);
  const apContent = certificationList.find(({ id }) => id === 2);
  const cssContent = certificationList.find(({ id }) => id === 3);
  const htmlContent = certificationList.find(({ id }) => id === 4);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <ScrollToTop />
      <ScrollRestoration />
      <NavBar />

      {boxSelect ? (
        <div className="contentBox">
          <div
            className="content-child"
            data-aos="fade-in"
            data-aos-duration="1500"
          >
            <div
              className="top-toggle"
              onClick={() => {
                setSelectedBox(false);
              }}
            >
              {toggleOutButton}
            </div>
            <div className="text-box-content">
              {box1Select ? <ContentBox {...guitarContent} /> : null}
              {box2Select ? <ContentBox {...soccerContent} /> : null}
              {box3Select ? <ContentBox {...djContent} /> : null}
            </div>
          </div>
        </div>
      ) : null}

      <div className="about-content primary-ff ">
        <div className="about-header" id="root-section">
          <h1>Roots & Beginnings</h1>
          <i>A Glimpse Into My Birthplace</i>
        </div>
      </div>
      <div className="birth-place container">
        <div className="birth-header">
          <h1 data-aos="fade-up" data-aos-duration="700" className="primary-ff">
            Matehuala, San Luis Potosi, Mexico
          </h1>
        </div>

        <div className="birth-grid">
          <div className="mate-image">
            <img
              data-aos="fade-up"
              data-aos-delay="800"
              data-aos-duration="1000"
              src={matImg}
              alt="Matehuala Image"
            />
          </div>
          <div className="mate-box primary-ff">
            <p
              data-aos="fade-up"
              data-aos-delay="1000"
              data-aos-duration="1000"
            >
              With an elevation of about 1,500m, Matehuala San Luis
              Potosi is located in the northern part of the state, on the
              border with the southwestern corner of Nuevo Leon Mexico.
              Known for its Cathedral, and its delicious food, there is
              always the desire to go visit my birthplace every year.
              With its urban parties each year, and its infamous December
              fair, there is always a desire to spend time with my family
              once again. I enjoy the fresh food, the ranches with its
              animals and the vast majority of desert-like hills, peace
              lives and breathes all around. I enjoy taking care of the
              cattle, and waking up early in the morning with the vocals
              of the roosters and the chitter of the townspeople. From
              tacos to gorditas, burritos and hot chocolate all around
              December is just a small taste of what awaits every year. I
              will always be joyful to represent where I come from, and
              will never forget those who I left behind for a better
              opportunity.
            </p>
          </div>
        </div>
        <div className="hobby-section" id="personal-section">
          <div className="hobby-header">
            <h1 className="primary-ff" data-aos="fade-in">
              Personal Interest
            </h1>
          </div>
          <div className="personal-boxes">
            <div
              data-aos="fade-right"
              data-aos-delay="1000"
              data-aos-duration="1500"
            >
              <h1 className="primary-ff box-header">Strings and Stories</h1>
              <div
                className="box1 "
                onMouseEnter={() => {
                  setBox1(true);
                }}
                onMouseLeave={() => {
                  setBox1(false);
                }}
                onClick={() => {
                  setSelectedBox(true);
                  selectbox2(false);
                  selectbox3(false);
                  selectbox1(true);
                }}
              >
                {boxHover1 ? (
                  <h1 id="textBox">
                    My <br /> Journey With The Guitar
                  </h1>
                ) : null}
              </div>
            </div>

            <div
              data-aos="fade-right"
              data-aos-delay="1100"
              data-aos-duration="1500"
            >
              <h1 className="primary-ff box-header">Passion On The Pitch</h1>
              <div
                className="box2"
                onMouseEnter={() => {
                  setBox2(true);
                }}
                onMouseLeave={() => {
                  setBox2(false);
                }}
                onClick={() => {
                  setSelectedBox(true);
                  selectbox1(false);
                  selectbox3(false);
                  selectbox2(true);
                }}
              >
                {boxHover2 ? (
                  <h1 id="textBox">
                    The <br />
                    Joy <br />
                    Of Soccer
                  </h1>
                ) : null}
              </div>
            </div>

            <div
              data-aos="fade-right"
              data-aos-delay="1200"
              data-aos-duration="1500"
            >
              <h1 className="primary-ff box-header">Rhythms In Rotation</h1>
              <div
                className="box3"
                onMouseEnter={() => {
                  setBox3(true);
                }}
                onMouseLeave={() => {
                  setBox3(false);
                }}
                onClick={() => {
                  setSelectedBox(true);
                  selectbox1(false);
                  selectbox2(false);
                  selectbox3(true);
                }}
              >
                {boxHover3 ? (
                  <h1 id="textBox">
                    The <br />
                    Joy
                    <br /> Of Djing
                  </h1>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="education-section container" id="education-section">
        <div className="edu-header">
          <h1 className="primary-ff" data-aos="fade-in">
            Education
          </h1>
        </div>

        <div className="education-layout">
          <EducationBox {...cthsContent} />
          <EducationBox {...freshManContent} />
          <EducationBox {...sophmoreContent} />
          <EducationBox {...juniorContent} />
          <EducationBox {...seniorContent} />
        </div>
      </div>

      <div
        className="certification-section container"
        id="certification-section"
      >
        <div className="cert-header">
          <h1 className="primary-ff" data-aos="fade-in">
            Certifications
          </h1>
        </div>
        <div className="education-layout">
          <EducationBox {...pythonContent} />
          <EducationBox {...apContent} />
          <EducationBox {...cssContent} />
          <EducationBox {...htmlContent} />
        </div>
      </div>

      <ContactSection />
    </>
  );
}

const ContentBox = (props) => {
  const { title, content, image, imageAlt } = props;
  return (
    <>
      <div>
        <h1 data-aos="fade-in">{title}</h1>
        <p>{content}</p>
      </div>
      <div className="image-box">
        <img src={image} alt={imageAlt} />
      </div>
    </>
  );
};

const EducationBox = (props) => {
  const { title, image, imageAlt, year, externalText, content } = props;
  return (
    <>
      <div className="education-box" data-aos="fade-in">
        <div className="image-section">
          <img src={image} alt={imageAlt} />
        </div>

        <div className="edu-content-section">
          <div className="heading-content primary-ff">
            <h1>{title}</h1>
            <p>
              {year} | {externalText}
            </p>
          </div>
          <div className="edu-text-content">
            <p>{content}</p>
          </div>
        </div>
      </div>
    </>
  );
};
