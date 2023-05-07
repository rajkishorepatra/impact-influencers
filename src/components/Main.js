import { useEffect, useRef, useState, forwardRef } from "react";
import "../css/main.css";
import StockVideo from "../assets/Tropical.mp4";

// swiper carousel
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";



export default function Main() {
  const videoRef = useRef(null);
  const carouselRef = useRef(null);
  useEffect(() => {
    carouselRef.current.swiper.on("slideChange", () => {
      if (window.innerWidth > 576  && videoRef.current && carouselRef.current) {
        document.querySelectorAll(".influencer-card").forEach((card, i) => {
          card.style.height = videoRef.current.offsetHeight + "px";
        });
        carouselRef.current.style.height = videoRef.current.offsetHeight + "px";
      }
    });
  }, []);

  return (
    <>
      <div className="header">
        <div className="header-wrapper">
          <div className=" row m-0 p-0">
            <div className="col-12 col-lg-8 m-0 p-0">
              <div className="vid-container">
                <video autoPlay loop muted className="ratio" ref={videoRef}>
                  <source
                    src={StockVideo}
                    type="video/mp4"
                    className="header-video"
                  />
                </video>
              </div>
            </div>

            <div className="col-12 col-lg-4 m-0 p-0">
              <Swiper
                id="header-carousel"
                ref={carouselRef}
                height={500}
                slidesPerView={1}
                spaceBetween={50}
                centeredSlides={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                direction="vertical"
                loop={true}
                modules={[Autoplay, Pagination, Navigation]}
              >
                {Influencers.map((i, index) => (
                  <SwiperSlide key={index}>
                    <InfluencerCard name={i.name} bio={i.bio} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const InfluencerCard = ({ name, bio, Pimg }) => {
  return (
    <>
      <div className="influencer-card ">
        <img
          src={
            "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
          }
          alt="influencer profile"
        />
        <div className="influencer-details bg-info text-start p-3 ">
          <h3 className=" h3 fw-semibold ">{name}</h3>
          <p className=" text-muted p-0 text-wrap">
            {bio.lenght < 50 ? bio : bio.substr(0, 50) + "..."}
          </p>
        </div>
      </div>
    </>
  );
};

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
