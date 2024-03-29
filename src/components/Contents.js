import React from "react";
import { Container } from "react-bootstrap";
import CountUp from "react-countup";
import { Link } from "react-router-dom";
import Testimonials from "./Testimonials";
import JoinUs from "./JoinUs";
import Campaign from "./Campaign";
import Cs1 from "../assets/cs1.png";
import Cs2 from "../assets/cs2.png";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../css/contents.css";

function Contents() {
  return (
    <div className="content container-lg pb-3">
      <Campaign />
      <Container fluid="lg">

        <div className="count my-4 mb-5">
          <div className="countSec p-3" style={{ borderLeft: "none" }}>
            <h1>
              <CountUp end={20} duration={3} />+
            </h1>
            <h5>Projects Completed</h5>
            <p>
              From buttons, to inputs, navbars, alerts or cards, you are covered
            </p>
          </div>
          <div className="countSec p-3">
            <h1>
              $<CountUp end={20000} duration={3} />+
            </h1>
            <h5>Fund raised</h5>
            <p>
              From buttons, to inputs, navbars, alerts or cards, you are covered
            </p>
          </div>
          <div className="countSec p-3">
            <h1>
              <CountUp end={30} duration={3} />+
            </h1>
            <h5>Influencers Engaged</h5>
            <p>
              From buttons, to inputs, navbars, alerts or cards, you are covered
            </p>
          </div>
          <div className="countSec p-3">
            <h1>
              <CountUp end={50000} duration={3} />+
            </h1>
            <h5>Reach</h5>
            <p>
              From buttons, to inputs, navbars, alerts or cards, you are covered
            </p>
          </div>
        </div>

        <CaseStudiesSection />

      </Container>
    </div>
  );
}

export default Contents;

function CaseStudy({ heading, data, img }) {
  return (
    <div className="cs-container d-flex justify-content-center ">
      <div className="circle">
        <div className="mx-2 py-4 ">
          <h2 className="">{heading}</h2>
          {data.map((p, index) => (
            <p key={index}>{p}</p>
          ))}
        </div>
        <img src={img} alt="case study" />
      </div>
    </div>
  );
}

const demoCaseStudies = [
  {
    id: 1,
    heading: "Healthcare",
    data: [
      "A is a non-profit organization that works to provide healthcare services to underprivileged communities. The organization was facing a shortage of medical equipment and supplies, making it difficult to provide adequate care.",
      "They approached a corporate sponsor for help. The corporate sponsor provided a significant donation of medical equipment and supplies, allowing the organization to expand their services and reach more people in needis a non-profit organization that works to provide healthcare services to underprivileged communities.",
    ],
    img: Cs1,
  },
  {
    id: 2,
    heading: "Education",
    data: [
      "We are a non-profit organization that works to promote education for girls in developing countries. The organization was facing a challenge in reaching remote communities that lacked access to schools. They partnered with a telecommunications company to create a mobile education platform that could be accessed by students in these communities.",
      " The platform provided educational content and resources, and also allowed students to communicate with teachers and other students online. As a result, the organization was able to reach more students and provide education to those who previously had limited access.",
    ],
    img: Cs2,
  },
  {
    id: 3,
    heading: "Education",
    data: [
      "We are a non-profit organization that works to promote education for girls in developing countries. The organization was facing a challenge in reaching remote communities that lacked access to schools. They partnered with a telecommunications company to create a mobile education platform that could be accessed by students in these communities.",
      " The platform provided educational content and resources, and also allowed students to communicate with teachers and other students online. As a result, the organization was able to reach more students and provide education to those who previously had limited access.",
    ],
    img: Cs2,
  },
];

function CaseStudiesSection() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div className="case-studies-section mt-4">
      <h1 className="mb-4 display-5 fw-bold text-center" id="caseStudy">
        Case Studies
      </h1>

      <Carousel
        swipeable={true}
        responsive={responsive}
        removeArrowOnDeviceType={["mobile"]}
        autoPlay
        autoPlaySpeed={3000}
        infinite
        pauseOnHover
      >
        {demoCaseStudies.map((item) => (
          <CaseStudy key={item.id} {...item} />
        ))}
      </Carousel>
      <div className="d-flex justify-content-center">
        <Link to="/case-studies">
          <button className="btn btn-primary mt-4">View all <span className="fw-bold">Case Studies</span></button>
        </Link>
      </div>
    </div>
  );
}
