import React from "react";
import { Container } from "react-bootstrap";
import CountUp from "react-countup";
import Testimonials from "./Testimonials";
import JoinUs from "./JoinUs";
import Campaign from "./Campaign";
import Cs1 from "../assets/cs1.png";
import Cs2 from "../assets/cs2.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../css/contents.css";
import "react-multi-carousel/lib/styles.css";
import "swiper/swiper-bundle.min.css";

function Contents() {
  return (
    <div className="content pb-3">
      <Campaign />
      <Container fluid>
        {/* Numbers section */}
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

        {/* Case Studies carousel section */}
        <div className="caseStudy mt-4">
          <h1 className="mb-4" id="caseStudy">
            Case Studies
          </h1>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="cs-swiper my-2"
          >
            {demoCaseStudies.map((item) => (
              <SwiperSlide key={item.id} className="swiper-slide">
                <CaseStudy {...item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* <div className="organization" id="organizations">
          <div className="flipCard">
            <div className="front">
              <p>Our Partners</p>
              <Button>View More</Button>
            </div>
          </div>

          <div className="orgLists">
            <div className="org">
              <img src={logo} alt="org logo" />
              <b>
                <h1>Youth For Sustainability</h1>
              </b>
              <div className="users">
                <p>
                  From buttons, to inputs, navbars, alerts or cards, you are
                  covered
                </p>
                <p>
                  Influencers associated:
                  <img src={profile} alt="profile" />
                  <img src={profile} alt="profile" />
                  <img src={profile} alt="profile" />+
                </p>
              </div>
            </div>
            <div className="org">
              <img src={logo} alt="org logo" />
              <h1>Youth For Sustainability</h1>
              <div className="users">
                <p>
                  From buttons, to inputs, navbars, alerts or cards, you are
                  covered
                </p>
                <p>
                  Influencers associated:
                  <img src={profile} alt="profile" />
                  <img src={profile} alt="profile" />
                  <img src={profile} alt="profile" />+
                </p>
              </div>
            </div>
            <div className="org">
              <img src={logo} alt="org logo" />
              <h1>Youth For Sustainability</h1>
              <div className="users">
                <p>
                  From buttons, to inputs, navbars, alerts or cards, you are
                  covered
                </p>
                <p>
                  Influencers associated:
                  <img src={profile} alt="profile" />
                  <img src={profile} alt="profile" />
                  <img src={profile} alt="profile" />+
                </p>
              </div>
            </div>
            <div className="org">
              <img src={logo} alt="org logo" />
              <h1>Youth For Sustainability</h1>
              <div className="users">
                <p>
                  From buttons, to inputs, navbars, alerts or cards, you are
                  covered
                </p>
                <p>
                  Influencers associated:
                  <img src={profile} alt="profile" />
                  <img src={profile} alt="profile" />
                  <img src={profile} alt="profile" />+
                </p>
              </div>
            </div>
            <div className="org">
              <img src={logo} alt="org logo" />
              <h1>Youth For Sustainability</h1>
              <div className="users">
                <p>
                  From buttons, to inputs, navbars, alerts or cards, you are
                  covered
                </p>
                <p>
                  Influencers associated:
                  <img src={profile} alt="profile" />
                  <img src={profile} alt="profile" />
                  <img src={profile} alt="profile" />+
                </p>
              </div>
            </div>
          </div>
        </div> */}

        <hr />

        <JoinUs />
        <hr />
        <Testimonials />
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
