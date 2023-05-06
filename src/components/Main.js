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
          <div className=" row overflow-hidden">
            <div className="col-12 col-lg-4 order-2 px-0 mx-0">
              <div className="header-carousel">
                <Carousel
                  swipeable={true}
                  responsive={responsive}
                  // removeArrowOnDeviceType={["mobile"]}                  
                  autoPlay
                  infinite
                  containerClass="header-carousel"
                  itemClass="influencer-card"
                  customTransition="translateY(100%) .5"
                  autoPlaySpeed={3000}
                  arrows = {false}             >
                  {Influencers.map((i, index) => (
                    <InfluencerCard key={index} name={i.name} bio={i.bio} />
                  ))}
                </Carousel>
              </div>
            </div>
            <div className="col-12 col-lg-8 order-1 px-0 mx-0">
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
        <div className=" d-flex flex-column flex-md-row flex-lg-column ">
          <div className=" influencer-img bg-warning d-flex justify-content-end">
            <img src={"https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"} alt="influencer profile" />
          </div>
          <div className="influencer-details bg-info text-end p-3">
            <h3 className=" h3 fw-semibold ">{name}</h3>
            <p className=" text-muted p-0 text-wrap">{bio.lenght< 50? bio: bio.substr(0,50)+'...'}</p>
          </div>
        </div>
      </div>
    </>
  );
}

const Influencers = [
  {
    name: "Prakruti Mishra",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem similique provident hic amet quasi sit nisi pariatur quis commodi reandae?t consectetur adipisicing elit. V",
    img: "",
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


// vertical transition
const verticalTransition = (startIndex, endIndex, current, target, progress) => {
  console.log(startIndex, endIndex, current, target, progress);
  // const height = target - current;
  // const translateY = height * progress;

  // return {
  //   transform: `translateY(${translateY}px)`,
  // };
};