import { useState } from "react";
import "../css/cspage.css";

const caseStudies = [
  {
    title: "Conservation Farming Practices for Soil Health",
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc posuere enim eu velit faucibus, vel ullamcorper nibh dignissim.",
    img: "https://dummyimage.com/300x200/cccccc/000000",
    details: [
      "Implementing conservation farming practices such as cover cropping and crop rotation can improve soil health and fertility while reducing erosion and chemical runoff.",
      "This case study explores the benefits of conservation farming methods and their impact on agricultural sustainability and long-term productivity.",
      "Implementing conservation farming practices such as cover cropping and crop rotation can improve soil health and fertility while reducing erosion and chemical runoff.",
      "This case study explores the benefits of conservation farming methods and their impact on agricultural sustainability and long-term productivity.",
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
    img: "https://www.conservationindia.org/wp-content/files_mf/Ganesh-Raghunathan_Elephants-in-tea-plantation_Valparai_CI.jpg",
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
];

export default function CaseStudies() {
  const [study, setStudy] = useState({
    visible: false,
    study: null,
  });
  return (
    <div className=" case-study-page container my-4 d-flex place-content-center  d-sm-block">
      <div className="case-study-wrapper">
        <h1 className="text-center display-4 fw-bolder">Case Studies</h1>
        <div className="row my-2 py-2 gap-4">

          {study.visible && (
            <div className="col-12 col-lg-9">
              <CaseStudyView study={study.study} />
            </div>
          )}

          <div className="col">
            {study.visible && (
              <>
                <h5 className="text-center fs-6 text-secondary">More such Case studies </h5>
                <hr className="mb-4 mt-0" />
              </>
            )}

            <div className=" gap-3 d-flex flex-wrap case-studies justify-content-center">
              {caseStudies.map((study, index) => (
                <CaseStudy key={index} study={study} setStudy={setStudy} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

function CaseStudy({ study, setStudy }) {
  return (
    <div className="case-study-card shadow rounded">
      <button
        className="case-study-card-link"
        onClick={() => {
          console.log("clicked", study);
          setStudy({ ...study, study: study, visible: true });
        }}
      >
        <img
          src={study.img}
          alt={study.heading}
          className="case-study-card-image"
        />
        <h2 className="case-study-card-heading h6 text-start">
          {study.title.length > 50
            ? study.title.substr(0, 50) + "..."
            : study.title}
        </h2>
        <p className="case-study-card-date text-secondary m-0 text-start">
          {study.date}
        </p>
      </button>
    </div>
  );
}

function CaseStudyView({ study, ...props }) {
  let title = study.title;
  let date = study.date;
  let data = study.details;
  let image = study.img;
  return (
    <>
      <div className="case-study-view d-flex place-content-center align-items-baseline ">
        <div className="case-study-wrapper w-100 mb-4">
          <div className="mx-2 d-flex flex-column flex-sm-row justify-content-sm-between align-items-start align-items-sm-end">
            <h3 className="h5 fw-bold mb-0">{title}</h3>
            <p className=" mb-0 h6 text-secondary">{date}</p>
          </div>
          <hr className="my-0 mb-3"></hr>
          <div className="mx-2">
            <div className="overflow-hidden card-view-img mx-auto">
              <img src={image} alt="case study placeholder" />
            </div>
            {data.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
