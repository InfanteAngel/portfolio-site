import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import ScrollToTop from "../Components/ScrollToTop";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const contentList = [
  {
    header: "Spark Of Brilliance",
    subHeader: "The Origin Story Behind The Website Idea",
    content1:
      "During a school field trip to Pinnacle, we met with the marketing department to discuss a small team-building activity. This activity involved creating a small local ice cream business. We had to come up with a name, a theme, and an amount of money that would be provided for us. Taking this into account our team created 'Softies', an ice cream shop that would serve a variety of flavors, a shop that would be backed by a community of ice cream aficionados. Our team was delighted with the idea and we started to pitch our business idea to the marketing team and discuss the constraints along with the goals we had in mind.",
    content2:
      "I saw this opportunity to create a website for our small business idea, although the business is not a reality, I saw an opportunity to let my skills in web development show through this business idea. So I took a picture of the basic understanding of what the website had to include, Flavors, Logo, Prices, and Ice Cream! I decided to start the process of building my first-ever 5 Page Full Website. I scoured for ideas and came across many great Ice Cream shop sites, which I took inspiration from to create 'Softies Ice Cream'",
    id: 1,
  },
  {
    header: "Triumphs Unveiled",
    subHeader: "Celebrating Our Websites Achievements",
    content1:
      "During this project just like there were boundaries, there were learnings as well. During my timeline of the project, I was able to learn new techniques and get familiar with how CSS and HTML work hand in hand. Not only was I able to learn more about these languages, but I also got to learn more about me, and how I was as a programmer. I started to get a lot more comfortable with JavaScript which at the time scared me.",
    content2:
      "My biggest achievement here was the FAQ Accordion feature, it was a feature that I had seen from a different Ice Cream site, and I was fascinated as to how it worked. So I came up with a plan and decided to hard code it myself. Through bugs and a lot of patience, I was finally able to get the accordion feature to work as envisioned. It took time but I was able to leap over the borders that came my way.",
    id: 2,
  },
  // {
  //   header: "Spark Of Brilliance",
  //   subHeader: "The Origin Story Behind The Website Idea",
  //   content1: "Palco BRILL",
  //   content2: "asdf",
  //   id: 3,
  // },
  // {
  //   header: "Triumphs Unveiled",
  //   subHeader: "Celebrating Our Websites Achievements",
  //   content1: "Palco Sasd",
  //   content2: "fsdf",
  //   id: 4,
  // },
  {
    header: "Spark Of Brilliance",
    subHeader: "The Origin Story Behind The Website Idea",
    content1:
      "I had some time creating personal projects for imaginary companies and businesses. So, I decided why not create websites for real companies and people. So I decided to create a small business/freelance site to put myself out there and have people see what I am capable of. This is where Tlax originated from, the name itself came from my stay in Mexico at the time. My street was named 'Tlaxcala', so I decided to just take the first 'Tlax' and integrate it into my business. I started creating a template through Canva and used their tools to create a draft to show how the complete product would turn out.",
    content2:
      "Once I created my draft I started to create the components that would be used throughout the website. Unlike my previous big project 'Softies', I would now be integrating React with my project, so this was a pretty big leap for me, but I was not discouraged whatsoever, instead very excited that I would be practicing in a real setting. Once I created my components I started to write out the layout, and information that would go into it and make sure that my project would display who I am as a person and what I stand for.",
    id: 3,
  },
  {
    header: "Triumphs Unveiled",
    subHeader: "Celebrating Our Websites Achievements",
    content1:
      "Through the help of my teacher and online forums like StackOverflow, WebMD, and W3, I was able to tackle my boundaries. Along with tackling these boundaries, I was able to learn new skills that I can implement and still do to this day. These skills have to do with useState, find, and filter. I was able to understand what props are and how I can manipulate them to display all sorts of information in one single layout.",
    content2:
      "This can be seen in my Services page, I integrated a state to take the user toggle, based on the user input and whatever button they pressed, certain information was displayed, but the layout was the same throughout. It was a tough one that took a lot of thinking, but I was able to come up with a solution that involved breaking up my data and feeding it to its corresponding list. I would then take this list and feed it into my company props which would now display its information.",
    id: 4,
  },
  {
    header: "Spark Of Brilliance",
    subHeader: "The Origin Story Behind The Website Idea",
    content1:
      "Having a great admiration for space, and wanting to level up my skills with creating websites with a pre-made design was one of my goals through my projects. I hoped this would replicate something that would be seen in the real world of a front-end environment. I was able to find a Figma file that was provided through FrontEndMentor. I wanted to put my skills to the test to create a 1:1 website with the design provided.",
    content2:
      "This project in particular was very helpful in polishing my attention to detail skills, including the use of a React framework in a realistic work environment. I was able to practice working with a design and getting familiar with how Figma can be used to create sites that are a mirror of the Designer's provided design.",
    id: 5,
  },
  {
    header: "Triumphs Unveiled",
    subHeader: "Celebrating Our Websites Achievements",
    content1:
      "During the creation of the Space Exploration Page, keeping in mind that I was working with a design, there were certain problems that I was running into having to do with the design and interactive functions. One of these functions include the Launch Page. Keeping in mind that I was only using one layout for all of these interactive sections, the use of useState was a must. I learned how to use the useState function in a way that made it simpler.",
    content2:
      "The useState function, although possible to have its state passed as props to a children component from a parent, is tedious and can be a hassle to keep track of what is being altered. I simply decided to break up my code into components with only its props, no buttons that toggle the setState. By doing this, I no longer had to worry about passing down any sort of state as a prop, simply created an arrow function inside an onClick to update its state.",
    id: 6,
  },
];

const jsIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    width="96px"
    height="96px"
  >
    <path fill="#ffd600" d="M6,42V6h36v36H6z" />
    <path
      fill="#000001"
      d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"
    />
  </svg>
);
const htmlIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    width="96px"
    height="96px"
  >
    <path fill="#E65100" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z" />
    <path fill="#FF6D00" d="M24 8L24 39.9 35.2 36.7 37.7 8z" />
    <path
      fill="#FFF"
      d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"
    />
    <path
      fill="#EEE"
      d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"
    />
  </svg>
);
const cssIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    width="96px"
    height="96px"
  >
    <path fill="#0277BD" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z" />
    <path fill="#039BE5" d="M24 8L24 39.9 35.2 36.7 37.7 8z" />
    <path
      fill="#FFF"
      d="M33.1 13L24 13 24 17 28.9 17 28.6 21 24 21 24 25 28.4 25 28.1 29.5 24 30.9 24 35.1 31.9 32.5 32.6 21 32.6 21z"
    />
    <path
      fill="#EEE"
      d="M24,13v4h-8.9l-0.3-4H24z M19.4,21l0.2,4H24v-4H19.4z M19.8,27h-4l0.3,5.5l7.9,2.6v-4.2l-4.1-1.4L19.8,27z"
    />
  </svg>
);
const reactIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    width="96px"
    height="96px"
  >
    <path
      fill="#80deea"
      d="M24,34C11.1,34,1,29.6,1,24c0-5.6,10.1-10,23-10c12.9,0,23,4.4,23,10C47,29.6,36.9,34,24,34z M24,16	c-12.6,0-21,4.1-21,8c0,3.9,8.4,8,21,8s21-4.1,21-8C45,20.1,36.6,16,24,16z"
    />
    <path
      fill="#80deea"
      d="M15.1,44.6c-1,0-1.8-0.2-2.6-0.7C7.6,41.1,8.9,30.2,15.3,19l0,0c3-5.2,6.7-9.6,10.3-12.4c3.9-3,7.4-3.9,9.8-2.5	c2.5,1.4,3.4,4.9,2.8,9.8c-0.6,4.6-2.6,10-5.6,15.2c-3,5.2-6.7,9.6-10.3,12.4C19.7,43.5,17.2,44.6,15.1,44.6z M32.9,5.4	c-1.6,0-3.7,0.9-6,2.7c-3.4,2.7-6.9,6.9-9.8,11.9l0,0c-6.3,10.9-6.9,20.3-3.6,22.2c1.7,1,4.5,0.1,7.6-2.3c3.4-2.7,6.9-6.9,9.8-11.9	c2.9-5,4.8-10.1,5.4-14.4c0.5-4-0.1-6.8-1.8-7.8C34,5.6,33.5,5.4,32.9,5.4z"
    />
    <path
      fill="#80deea"
      d="M33,44.6c-5,0-12.2-6.1-17.6-15.6C8.9,17.8,7.6,6.9,12.5,4.1l0,0C17.4,1.3,26.2,7.8,32.7,19	c3,5.2,5,10.6,5.6,15.2c0.7,4.9-0.3,8.3-2.8,9.8C34.7,44.4,33.9,44.6,33,44.6z M13.5,5.8c-3.3,1.9-2.7,11.3,3.6,22.2	c6.3,10.9,14.1,16.1,17.4,14.2c1.7-1,2.3-3.8,1.8-7.8c-0.6-4.3-2.5-9.4-5.4-14.4C24.6,9.1,16.8,3.9,13.5,5.8L13.5,5.8z"
    />
    <circle cx="24" cy="24" r="4" fill="#80deea" />
  </svg>
);
const stripeIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    width="96px"
    height="96px"
    clip-rule="evenodd"
  >
    <linearGradient
      id="A~2rN2Nv6JudGDrDrq04Ma"
      x1="32"
      x2="32"
      y1="11.25"
      y2="53.251"
      gradientUnits="userSpaceOnUse"
      spreadMethod="reflect"
    >
      <stop offset="0" stop-color="#1a6dff" />
      <stop offset="1" stop-color="#c822ff" />
    </linearGradient>
    <path
      fill="url(#A~2rN2Nv6JudGDrDrq04Ma)"
      d="M58,52H6c-1.654,0-3-1.346-3-3V19c0-1.654,1.346-3,3-3h52c1.654,0,3,1.346,3,3v30 C61,50.654,59.654,52,58,52z M6,18c-0.552,0-1,0.448-1,1v30c0,0.552,0.448,1,1,1h52c0.552,0,1-0.448,1-1V19c0-0.552-0.448-1-1-1H6z"
    />
    <linearGradient
      id="A~2rN2Nv6JudGDrDrq04Mb"
      x1="32"
      x2="32"
      y1="11.25"
      y2="53.25"
      gradientUnits="userSpaceOnUse"
      spreadMethod="reflect"
    >
      <stop offset="0" stop-color="#1a6dff" />
      <stop offset="1" stop-color="#c822ff" />
    </linearGradient>
    <path fill="url(#A~2rN2Nv6JudGDrDrq04Mb)" d="M5 12H59V14H5z" />
    <linearGradient
      id="A~2rN2Nv6JudGDrDrq04Mc"
      x1="49.174"
      x2="49.174"
      y1="25.25"
      y2="43.757"
      gradientUnits="userSpaceOnUse"
      spreadMethod="reflect"
    >
      <stop offset="0" stop-color="#6dc7ff" />
      <stop offset="1" stop-color="#e6abff" />
    </linearGradient>
    <path
      fill="url(#A~2rN2Nv6JudGDrDrq04Mc)"
      fill-rule="evenodd"
      d="M53.597,34.115c0-3.045-1.474-5.355-4.298-5.355 c-2.828,0-4.549,2.451-4.549,5.479c0,3.585,2.044,5.422,4.94,5.422c1.421,0,2.31-0.3,3.31-0.747v-2.395 c-1,0.409-1.755,0.472-2.935,0.472c-1.159,0-2.194,0.01-2.327-1.99h5.82C53.571,35,53.597,34.402,53.597,34.115z M47.711,33 c0-1,0.826-1.901,1.569-1.901c0.73,0,1.504,0.901,1.504,1.901H47.711z"
      clip-rule="evenodd"
    />
    <linearGradient
      id="A~2rN2Nv6JudGDrDrq04Md"
      x1="39.63"
      x2="39.63"
      y1="25.25"
      y2="43.757"
      gradientUnits="userSpaceOnUse"
      spreadMethod="reflect"
    >
      <stop offset="0" stop-color="#6dc7ff" />
      <stop offset="1" stop-color="#e6abff" />
    </linearGradient>
    <path
      fill="url(#A~2rN2Nv6JudGDrDrq04Md)"
      fill-rule="evenodd"
      d="M40.154,28.853c-1.165,0-1.918,0.523-2.329,0.907 L37.671,29h-2.618l0.001,13.902l2.973-0.619l0.006-3.358c0.427,0.313,1.063,0.755,2.103,0.755c2.127,0,4.072-1.71,4.072-5.488 C44.208,30.732,42.242,28.853,40.154,28.853z M39.443,37.057c-0.697,0-1.114-0.251-1.402-0.564l-0.018-4.418 c0.31-0.339,0.737-0.589,1.42-0.589c1.088,0,1.836,1.218,1.836,2.774C41.28,35.86,40.543,37.057,39.443,37.057z"
      clip-rule="evenodd"
    />
    <linearGradient
      id="A~2rN2Nv6JudGDrDrq04Me"
      x1="32.5"
      x2="32.5"
      y1="25.25"
      y2="43.757"
      gradientUnits="userSpaceOnUse"
      spreadMethod="reflect"
    >
      <stop offset="0" stop-color="#6dc7ff" />
      <stop offset="1" stop-color="#e6abff" />
    </linearGradient>
    <path
      fill="url(#A~2rN2Nv6JudGDrDrq04Me)"
      fill-rule="evenodd"
      d="M31 28.145L34 27.51 34 25.089 31 25.724z"
      clip-rule="evenodd"
    />
    <linearGradient
      id="A~2rN2Nv6JudGDrDrq04Mf"
      x1="32.5"
      x2="32.5"
      y1="25.25"
      y2="43.757"
      gradientUnits="userSpaceOnUse"
      spreadMethod="reflect"
    >
      <stop offset="0" stop-color="#6dc7ff" />
      <stop offset="1" stop-color="#e6abff" />
    </linearGradient>
    <path
      fill="url(#A~2rN2Nv6JudGDrDrq04Mf)"
      fill-rule="evenodd"
      d="M31 29H34V39H31z"
      clip-rule="evenodd"
    />
    <linearGradient
      id="A~2rN2Nv6JudGDrDrq04Mg"
      x1="27.5"
      x2="27.5"
      y1="25.25"
      y2="43.757"
      gradientUnits="userSpaceOnUse"
      spreadMethod="reflect"
    >
      <stop offset="0" stop-color="#6dc7ff" />
      <stop offset="1" stop-color="#e6abff" />
    </linearGradient>
    <path
      fill="url(#A~2rN2Nv6JudGDrDrq04Mg)"
      fill-rule="evenodd"
      d="M27.638,29.904L27.57,29H25v10h3v-6.593 c0-0.923,1-0.745,2-0.623v-2.733C29,28.909,28.333,28.625,27.638,29.904z"
      clip-rule="evenodd"
    />
    <linearGradient
      id="A~2rN2Nv6JudGDrDrq04Mh"
      x1="21.44"
      x2="21.44"
      y1="25.25"
      y2="43.757"
      gradientUnits="userSpaceOnUse"
      spreadMethod="reflect"
    >
      <stop offset="0" stop-color="#6dc7ff" />
      <stop offset="1" stop-color="#e6abff" />
    </linearGradient>
    <path
      fill="url(#A~2rN2Nv6JudGDrDrq04Mh)"
      fill-rule="evenodd"
      d="M21.795,26.444l-2.902,0.63l-0.013,9.544 c0,1.76,1.296,3.063,3.061,3.063c0.972,0,1.059-0.173,2.059-0.391v-2.42c-1,0.152-3,0.698-3-1.054V32h3v-3h-2.203L21.795,26.444z"
      clip-rule="evenodd"
    />
    <linearGradient
      id="A~2rN2Nv6JudGDrDrq04Mi"
      x1="14.037"
      x2="14.037"
      y1="25.25"
      y2="43.757"
      gradientUnits="userSpaceOnUse"
      spreadMethod="reflect"
    >
      <stop offset="0" stop-color="#6dc7ff" />
      <stop offset="1" stop-color="#e6abff" />
    </linearGradient>
    <path
      fill="url(#A~2rN2Nv6JudGDrDrq04Mi)"
      fill-rule="evenodd"
      d="M13.746,32.076c0-0.464,0.031-0.644,0.654-0.644 c0.904,0,1.601,0.277,2.601,0.765v-2.8c-1-0.393-1.613-0.544-2.598-0.544c-2.411,0-3.841,1.259-3.841,3.364 c0,3.291,4.609,2.757,4.609,4.176c0,0.549-0.865,0.727-1.528,0.727C12.656,37.12,11,36.713,10,36.17v2.838 c2,0.476,2.658,0.675,3.683,0.675c2.472,0,4.391-1.221,4.391-3.361C18.074,32.778,13.746,33.413,13.746,32.076z"
      clip-rule="evenodd"
    />
  </svg>
);
const softiesIcons = [
  {
    icon1: jsIcon,
    icon2: htmlIcon,
    icon3: cssIcon,
  },
];
const palcoIcons = [
  {
    icon1: jsIcon,
    icon2: htmlIcon,
    icon3: cssIcon,
    icon4: reactIcon,
    icon5: stripeIcon,
  },
];
const tlaxIcons = [
  {
    icon1: jsIcon,
    icon2: htmlIcon,
    icon3: cssIcon,
    icon4: reactIcon,
  },
];

export default function DetailsPage() {
  const location = useLocation();
  const data = location.state.data;

  var myList = [];
  var brillianceList = [];
  var achivementsList = [];

  const softiesBrilliance = contentList.find(({ id }) => id == 1);
  const softiesAchivements = contentList.find(({ id }) => id == 2);
  // const palcoBrilliance = contentList.find(({ id }) => id == 3);
  // const palcoAchivements = contentList.find(({ id }) => id == 4);
  const tlaxBrilliance = contentList.find(({ id }) => id == 3);
  const tlaxAchivements = contentList.find(({ id }) => id == 4);
  const spaceBrilliance = contentList.find(({ id }) => id == 5);
  const spaceAchivements = contentList.find(({ id }) => id == 6);

  if (data.id === 1) {
    document.documentElement.style.setProperty("background-color", "#FEEFE5");
    myList = softiesIcons;
    brillianceList = softiesBrilliance;
    achivementsList = softiesAchivements;
  } else if (data.id === 2) {
    document.documentElement.style.setProperty("background-color", "black");
    myList = tlaxIcons;
    brillianceList = tlaxBrilliance;
    achivementsList = tlaxAchivements;
  } else {
    document.documentElement.style.setProperty("background-color", "#0B0D17");
    myList = tlaxIcons;
    brillianceList = spaceBrilliance;
    achivementsList = spaceAchivements;
  }

  // if (data.id === 3){
  // document.documentElement.style.setProperty("background-color", "#001a25");
  // myList = palcoIcons;
  // brillianceList = palcoBrilliance;
  // achivementsList = palcoAchivements;
  // }

  useEffect(() => {
    AOS.init({duration: 1000})
  }, [])

  return (
    <>
      <ScrollToTop />
      <div className={data.sectionName}>
        <div className="container testColor">
          <div className="header-wrap">
            <h1 className="primary-ff">{data.title}</h1>
            <img src={data.logoImg} alt={data.altLogo} />
          </div>
          <div className="icon-list">
            {myList.map((myItems) => {
              return <IconBox {...myItems} key={data.id} />;
            })}
          </div>

          <div className="detail-grid">
            <div className="first-image-wrap" data-aos="fade-in">
              <img src={data.img} alt={data.altImg} />
            </div>
            <div className="text-box">
              <DetailBox {...brillianceList} />
            </div>
          </div>

          <div className="boundaries-section">
            <h1 data-aos="fade-in" className="uppercase">
              Navigating Boundaries
            </h1>
            <br />
            <p data-aos="fade-in">{data.boundariesContent}</p>
            <a href={data.link} target="_blank">
              <button
                data-aos="fade-in"
                type="button"
                className="sprint-button"
              >
                {data.buttonContent}
              </button>
            </a>
          </div>

          <div className="detail-grid-2">
            <div className="text-box">
              <DetailBox {...achivementsList} />
            </div>
            <div className="second-image-wrap">
              <img data-aos="fade-in" src={data.img2} alt={data.altImg2} />
            </div>
          </div>

          <Link to={"/"} className="returnButton accent-ff">
            Back Home
          </Link>
        </div>
      </div>
    </>
  );
}


const DetailBox = (props) => {
  const { header, subHeader, content1, content2 } = props;
  return (
    <div className="contentBox-details" data-aos="fade-in">
      <div className="subHeader-content">
        <h1>{header}</h1>
        <h2>{subHeader}</h2>
      </div>
      <div className="content-text">
        <p>{content1}</p>
        <br />
        <p>{content2}</p>
      </div>
    </div>
  );
};

const IconBox = (props) => {
  const {icon1, icon2, icon3, icon4, icon5, } = props;
    useEffect(() => {
      AOS.init({ duration: 1000 });
    });
  return (
    <ul className="my-list">
      <li className="list-item" data-aos="fade-right">
        {icon1}
      </li>
      <li className="list-item" data-aos="fade-right" data-aos-delay="300">
        {icon2}
      </li>
      <li className="list-item" data-aos="fade-right" data-aos-delay="900">
        {icon3}
      </li>
      <li className="list-item " data-aos="fade-right" data-aos-delay="1200">
        {icon4}
      </li>
      <li className="list-item" data-aos="fade-right" data-aos-delay="1500">
        {icon5}
      </li>
    </ul>
  );
};
