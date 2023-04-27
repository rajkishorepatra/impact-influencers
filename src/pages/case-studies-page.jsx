import React from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../css/main.css";

const caseStudies = [
  {
    title: "Conservation Farming Practices for Soil Health",
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc posuere enim eu velit faucibus, vel ullamcorper nibh dignissim.",
    img: "https://dummyimage.com/300x200/cccccc/000000",
    details: [
      "Implementing conservation farming practices such as cover cropping and crop rotation can improve soil health and fertility while reducing erosion and chemical runoff.",
      "This case study explores the benefits of conservation farming methods and their impact on agricultural sustainability and long-term productivity.",
    ],
    url: "#",
    date: "2022-05-01",
  },

  {
    title: "Agroforestry Systems for Biodiversity Conservation",
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc posuere enim eu velit faucibus, vel ullamcorper nibh dignissim.",
    img: "https://dummyimage.com/300x200/cccccc/000000",
    details: [
      "Agroforestry systems, which integrate trees with crops and livestock, can promote biodiversity conservation while providing sustainable livelihoods for farmers.",
      "This case study examines successful agroforestry models and their contributions to ecosystem resilience, carbon sequestration, and diversified income sources.",
    ],
    url: "#",
    date: "2022-07-10",
  },

  {
    title: "Precision Agriculture for Resource Efficiency",
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc posuere enim eu velit faucibus, vel ullamcorper nibh dignissim.",
    img: "https://dummyimage.com/300x200/cccccc/000000",
    details: [
      "Precision agriculture technologies, such as remote sensing and data analytics, enable farmers to optimize resource use and minimize environmental impacts.",
      "This case study explores the adoption and impact of precision agriculture techniques on sustainable farming practices, including improved yield and reduced input costs.",
    ],
    url: "#",
    date: "2022-09-25",
  },

  {
    title: "Organic Farming for Soil and Human Health",
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc posuere enim eu velit faucibus, vel ullamcorper nibh dignissim.",
    img: "https://dummyimage.com/300x200/cccccc/000000",
    details: [
      "Organic farming practices eliminate the use of synthetic chemicals, promoting soil health, biodiversity, and producing healthier food for consumers.",
      "This case study examines successful organic farming models and their positive impacts on environmental sustainability and human well-being.",
    ],
    url: "#",
    date: "2022-11-15",
  },

  {
    title: "Water-efficient Irrigation Techniques for Sustainable Agriculture",
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc posuere enim eu velit faucibus, vel ullamcorper nibh dignissim.",
    img: "https://dummyimage.com/300x200/cccccc/000000",
    details: [
      "Adopting water-efficient irrigation techniques, such as drip irrigation and precision sprinklers, can minimize water waste and ensure sustainable water use in agriculture.",
      "This case study highlights successful implementation of water-saving technologies and their contribution to agricultural productivity and water resource conservation.",
    ],
    url: "#",
    date: "2023-01-05",
  },
  // Add more case studies here
];

function CaseStudy({ study }) {
  return (
    <div className="case-study-card ">
      <Link to={study.url} className="case-study-card-link">
        <img
          src={study.img}
          alt={study.heading}
          className="case-study-card-image"
        />
        <h2 className="case-study-card-heading h6">
          {study.title.length > 50
            ? study.title.substr(0, 50) + "..."
            : study.title}
        </h2>
        <p className="case-study-card-date text-secondary ">{study.date}</p>
      </Link>
    </div>
  );
}

function CaseStudies() {
  return (
    <div className=" case-study-page container my-4">
      <div className="case-study-wrapper">
        <h1 className="text-center display-5 fw-normal">Case Studies</h1>
        <div className=" gap-3 d-flex flex-wrap justify-content-center">
          {caseStudies.map((study, index) => (
            <CaseStudy key={index} study={study} />
          ))}
        </div>
      </div>
      <hr />
      <div id="case-study-view"></div>
    </div>
  );
}

export default CaseStudies;

function CaseStudyView({ study }) {
  return <></>;
}
