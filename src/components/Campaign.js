import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation, Pagination } from "swiper";
import "../css/campaign.css";
import "swiper/css/navigation";
import Img from "../assets/image.png";

function Campaign() {
  return (
    <>
      <div className="p-2">
        <h1 className="my-4" id="campaigns">
          Live Campaigns
        </h1>
        <Swiper
          navigation={true}
          modules={[Navigation, Pagination]}
          pagination={{ clickable: true }}
          className="mySwiper"
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
          }}
        >
          {campaigns.map((campaign) => (
            <SwiperSlide key={campaign.id}>
              <CampaignCard campaign={campaign} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="my-3 d-flex justify-content-center">
          <a href="#" className="btn btn-primary">
            view more
          </a>
        </div>
      </div>
    </>
  );
}

export default Campaign;

function CampaignCard({ campaign }) {
  return (
    <div className="camp-card">
      <div className="camp-card-image">
        <img src={Img} alt={campaign.title} />
      </div>
      <div className="camp-card-content">
        <h3 className="h4">{campaign.title}</h3>
        <div className="card-details">
          <p className="h6 fw-1">{campaign.keyMessage}</p>
          <a href={campaign.link} className="btn btn-secondary">
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
}

const campaigns = [
  {
    id: 1,
    title: "New Clothing Line",
    image: "https://via.placeholder.com/300x200.png?text=Clothing+Line",
    keyMessage:
      "Be the first to rock our new collection! Shop now and get 20% off your first purchase.",
    link: "#",
  },
  {
    id: 2,
    title: "Software Company",
    image: "https://via.placeholder.com/300x200.png?text=Software+Company",
    keyMessage:
      "Introducing our latest software designed to help small businesses increase productivity and streamline operations.",
    link: "#",
  },
  {
    id: 3,
    title: "Health and Wellness Brand",
    image: "https://via.placeholder.com/300x200.png?text=Health+and+Wellness",
    keyMessage:
      "Take your fitness and wellness routine to the next level with our all-natural supplements.",
    link: "#",
  },
  {
    id: 4,
    title: "Travel Company",
    image: "https://via.placeholder.com/300x200.png?text=Travel+Company",
    keyMessage:
      "Ready for your next adventure? Explore the world with us and get $100 off your first booking.",
    link: "#",
  },
  {
    id: 5,
    title: "Online Course",
    image: "https://via.placeholder.com/300x200.png?text=Online+Course",
    keyMessage:
      "Unlock your potential and learn new skills with our online courses. Sign up today!",
    link: "#",
  },
  {
    id: 6,
    title: "Food Delivery Service",
    image: "https://via.placeholder.com/300x200.png?text=Food+Delivery",
    keyMessage:
      "Get delicious meals delivered straight to your door. Order now and enjoy 20% off your first order!",
    link: "#",
  },
];
