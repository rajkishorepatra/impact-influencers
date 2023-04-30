import React from "react";
import "../css/main.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Profile from "../assets/profile.png";

function Main() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  return (
    <>
      <div className="header">
        <div className="header-wrapper">
          <div className="container ">
            <div className="d-flex flex-column flex-md-row align-items-center position-relative">
              <div className="header-carousel">
                <Carousel
                  swipeable={true}
                  responsive={responsive}
                  removeArrowOnDeviceType={["mobile"]}
                  autoPlay
                  infinite
                  autoPlaySpeed={2000}
                  arrows={false}
                >
                    hello world
                  {Influencers.map((i, index) => (
                    <InfluencerCard key={index} name={i.name} bio={i.bio} />
                  ))}
                </Carousel>
              </div>

              <div className="vid-container shadow">
                <video autoPlay loop muted className="ratio ratio-1x1">
                  <source
                    src="https://mdbcdn.b-cdn.net/img/video/Tropical.mp4"
                    type="video/mp4"
                    className="header-video"
                  />
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;

function InfluencerCard({ name, bio, Pimg }) {
  return (
    <>
      <div className="influencer-card">
        <div className="my-2">
          <img src={Profile} alt="influencer profile" />
        </div>
        <div class="influencer-details ">
          <h3 className="fw-bold h5 text-light text-center">{name}</h3>
          <p className="text-light text-center p-0">{bio}</p>
        </div>
      </div>
    </>
  );
}

const Influencers = [
  {
    name: "Prakruti Mishra",
    bio: "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
  },
  {
    name: "Debarchan Mishra",
    bio: "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
  },
  {
    name: "Avishek Jagdev",
    bio: "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
  },
  {
    name: "Debarchan Mishra",
    bio: "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
  },
  {
    name: "Prakruti Mishra",
    bio: "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
  },
];
