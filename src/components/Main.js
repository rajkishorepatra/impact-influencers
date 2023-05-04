import React from "react";
import "../css/main.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Profile from "../assets/profile.png";
import StockVideo from "../assets/Tropical.mp4";
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
          <div className=" row">
            <div className="col-12 col-lg-5 ">
              <div className="header-carousel">
                <Carousel
                  swipeable={true}
                  responsive={responsive}
                  removeArrowOnDeviceType={["mobile"]}
                  autoPlay
                  infinite
                  customTransition="none"
                  autoPlaySpeed={3000}
                  arrows={false}
                >
                  {Influencers.map((i, index) => (
                    <InfluencerCard key={index} name={i.name} bio={i.bio} />
                  ))}
                </Carousel>
              </div>
            </div>
            <div className="col-12 col-lg-7">
              <div className="vid-container">
                <video autoPlay loop muted className="ratio ratio-4x3">
                  <source                   
                    src={StockVideo}
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
        <div className=" influencer-img d-flex  ">
          <img src={Profile} alt="influencer profile" />
        </div>
        <div className="influencer-details">
          <h3 className=" display-6 mb-3 ">{name}</h3>
          <p className=" text-muted p-0">{bio}</p>
        </div>
      </div>
    </>
  );
}

const Influencers = [
  {
    name: "Prakruti Mishra",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem similique provident hic amet quasi sit nisi pariatur quis commodi reandae?t consectetur adipisicing elit. V",
  },
  {
    name: "Debarchan Mishra",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem similique provident hic amet quasi sit nisi pariatur quis commodi recusandaemmodi recusandae?",
  },
  {
    name: "Avishek Jagdev",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem similique provident hic amet quasi sit nisi pariatur quis commodi recusandae?t ",
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
