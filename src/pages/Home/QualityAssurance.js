import React from "react";

// className="card lg:card-side bg-base-200 shadow-xl mt-10 mb-10 max-w-7xl mx-auto ml-4 mr-4"

const QualityAssurance = () => {
  return (
    <div className="card lg:card-side container max-w-7xl mx-auto bg-base-200 mt-10 mb-10">
      
      <div className="carousel w-full">
        <div id="slid1" className="carousel-item flex flex-col relative w-full">
          <img
            src="https://i.ibb.co/CJVW3Dn/s04-img1.jpg"
            alt="pic"
            className="w-full"
          />
          <p className="font-bold text-center">Design & Development</p>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slid4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slid2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slid2" className="carousel-item flex flex-col relative w-full">
          <img
            src="https://i.ibb.co/sjbQMVN/s04-img2.jpg"
            alt="pic"
            className="w-full"
          />
          <p className="font-bold text-center">
            Sample checking before mass production
          </p>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slid1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slid3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slid3" className="carousel-item flex flex-col relative w-full">
          <img
            src="https://i.ibb.co/C9FWVXz/s04-img4.jpg"
            alt="pic"
            className="w-full"
          />
          <p className="font-bold text-center">
            Analisys & Wuality Improvement
          </p>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slid2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slid4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slid4" className="carousel-item flex flex-col relative w-full">
          <img
            src="https://i.ibb.co/gdnpKs6/s04-img3.jpg"
            alt="pic"
            className="w-full"
          />
          <p className="font-bold text-center">Strict QC before delivery</p>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slid2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slid1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>

      <div className="card-body">
        <h2 className="card-title">Intensive Quality Assurance Process</h2>
        <p>
          Onyx Moto utilizes an established quality assurance process that
          guarantees the quality and consistency of our custom motorcycle parts.
          The QA process covers product design, sample checking, parts
          inspection, and product analysis, pushing the bar for quality parts.
          By taking this initiative, we take advantage of our high-quality
          assurance capabilities while minimizing variance. The process also
          boosts the satisfaction rate of our clients, developing better
          branding and reliability.
        </p>
        <div className="card-actions ">
          <button className="btn btn-primary">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default QualityAssurance;
