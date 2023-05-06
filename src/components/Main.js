import {useEffect, useRef,useState} from "react";
import "../css/main.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import Profile from "../assets/profile.png";
import StockVideo from "../assets/Tropical.mp4";

// swiper carousel
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

function Main() {
  const videoRef = useRef(null);
  const [carouselHeight, setCarouselHeight] = useState(540);
  useEffect(() => {
    console.log("videoheight:",videoRef.current.clientHeight);
    setCarouselHeight(videoRef.current.clientHeight);
    console.log("ch",carouselHeight)
  }, []);
  return (
    <>
      <div className="header">
        <div className="header-wrapper">
          <div className=" header-contents d-flex flex-column flex-md-row">

            <div className="vid-container"  >
              <video autoPlay loop muted className="ratio ratio-4x3" ref={videoRef}>
                <source
                  src={StockVideo}
                  type="video/mp4"
                  className="header-video"
                />
              </video>
            </div>

            
            <Swiper
                height={carouselHeight}
                slidesPerView={1}
                centeredSlides={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                direction="vertical"
                navigation={false}
                loop={true}
                modules={[Autoplay, Pagination, Navigation]}
                // style={{maxHeight:carouselHeight}}
              >
                {Influencers.map((i, index) => (
                  <SwiperSlide key={index}>
                    <InfluencerCard  name={i.name} bio={i.bio} />
                  </SwiperSlide>
                ))}
              </Swiper>


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
      <div className="influencer-card d-flex">
        <div className=" influencer-img bg-warning d-flex justify-content-end">
          <img
            src={
              "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
            }
            alt="influencer profile"
          />
        </div>
        <div className="influencer-details bg-info text-start p-3 d-none">
          <h3 className=" h3 fw-semibold ">{name}</h3>
          <p className=" text-muted p-0 text-wrap">
            {bio.lenght < 50 ? bio : bio.substr(0, 50) + "..."}
          </p>
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
