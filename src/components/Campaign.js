import React, { useEffect, useRef } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img from "../assets/image.png";
import { useState } from "react";
import "../css/campaign.css";
import { Link } from "react-router-dom";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
  const {
    carouselState: { currentSlide },
  } = rest;
  return (
    <div className="carousel-button-group">
      <button
        className={currentSlide === 0 ? "btn-disable" : ""}
        onClick={() => previous()}
        disabled={currentSlide === 0}
      >
        <BiChevronLeft />
      </button>
      <button onClick={() => next()}>
        <BiChevronRight />
      </button>
    </div>
  );
};

function Campaign() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    small: {
      breakpoint: { max: 768, min: 576 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 576, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1
    },
  };
  return (
    <>
      <div className="campaigns-section shadow-lg" id="campaigns">
        <div className="carousel-container">
          <h2 className="campaign-heading h1 fw-bold mb-3">Live Campaigns</h2>
          <Carousel
            swipeable={true}
            responsive={responsive}
            removeArrowOnDeviceType={["mobile"]}
            arrows={false}
            renderButtonGroupOutside={true}
            customButtonGroup={<ButtonGroup />}
          >
            {caseStudies.map((caseStudy) => (
              <CampaignCard
                key={caseStudy.id}
                title={caseStudy.title}
                summary={caseStudy.summary}
                imageLink={caseStudy.imageLink}
              />
            ))}
          </Carousel>
        </div>
        <div className="d-flex mx-2 my-2 justify-content-start">
          <Link to="/campaigns" className="btn btn-primary btn-sm">
            View all <span className="fw-bold">Campaigns</span>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Campaign;

function CampaignCard({ title, summary, imageLink }) {
  let cardRef = useRef({});
  let [cardHeight, setCardHeight] = useState(0);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setCardHeight(cardRef.current?.clientHeight);
    });
    return () => {
      window.removeEventListener("resize", () => {});
    };
  }, []);

  return (
    <>
      <div className="card-wrapper" ref={cardRef}>
        <img src={imageLink} alt="campaign card poster" className="card-img" />
        <div className="card-details ">
          <h3 className="fw-bold h5 text-light">{title}</h3>
          <div className="card-hidden">
            <p className="text-light  p-0">
              {cardHeight > 220 ? summary : summary.slice(0, 60) + "..."}
            </p>
            <Link to="/case-studies" className="btn btn-sm btn-primary">
              Participate
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

const caseStudies = [
  {
    id: 1,
    title: "E-commerce Platform Redesign",
    summary:
      "Revamping the user experience and design of an e-commerce platform to increase conversion rates and customer satisfaction.",
    imageLink: img,
  },
  {
    id: 2,
    title: "Mobile App Localization",
    summary:
      "Adapting a mobile application for multiple international markets by translating content, adjusting UI elements, and optimizing performance.",
    imageLink: img,
  },
  {
    id: 3,
    title: "Data Analytics Solution",
    summary:
      "Developing a robust data analytics platform to process and visualize large datasets, enabling data-driven decision making.",
    imageLink: img,
  },
  {
    id: 4,
    title: "Cybersecurity Enhancement",
    summary:
      "Strengthening the security infrastructure of a company by implementing advanced encryption algorithms and proactive threat monitoring.",
    imageLink: img,
  },
  {
    id: 5,
    title: "AI-Powered Chatbot",
    summary:
      "Building an AI-driven chatbot solution that automates customer support inquiries, resulting in improved response times and reduced workload.",
    imageLink: img,
  },
  {
    id: 6,
    title: "Social Media Campaign",
    summary:
      "Creating a successful social media campaign to increase brand awareness, engagement, and drive traffic to the company's website.",
    imageLink: img,
  },
  {
    id: 7,
    title: "Cloud Migration Strategy",
    summary:
      "Developing a comprehensive plan to migrate an organization's infrastructure and applications to the cloud for improved scalability and cost efficiency.",
    imageLink: img,
  },
  {
    id: 8,
    title: "UI/UX Optimization",
    summary:
      "Optimizing the user interface and user experience of a web application to enhance usability, navigation, and overall customer satisfaction.",
    imageLink: img,
  },
  {
    id: 9,
    title: "Mobile Payment Integration",
    summary:
      "Integrating a secure mobile payment solution into an existing app, enabling users to make seamless and convenient transactions.",
    imageLink: img,
  },
  {
    id: 10,
    title: "Supply Chain Optimization",
    summary:
      "Implementing advanced logistics and supply chain management techniques to streamline operations, reduce costs, and improve delivery times.",
    imageLink: img,
  },
];
