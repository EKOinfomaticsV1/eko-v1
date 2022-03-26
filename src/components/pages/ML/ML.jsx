import React, { useEffect } from "react";
import Footer from "../../footer/Footer";
import Header from "../../header/Header";
import InternalPageLayout from "../layoutComponent/InternalPageLayout";
import MLCover from "../../../assets/img/internal pages/ML1.svg";
import MLBodyImg from "../../../assets/img/internal pages/ML3.svg";

const ML = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {" "}
      <Header />
      <InternalPageLayout
        title="Machine Learning"
        coverImg={MLCover}
        bodyImg={MLBodyImg}
      >
        <h1 className="text-lg font-semibold mb-2">Overview</h1>
        <p>
          We offer end-to-end Machine Learning and Deep Learning, Data Science,
          AI & software development. Innovative solutions created with Machine
          learning are one of the best ways to achieve efficiency, increase ROI
          and boost your profits Our years of experience in the industry and
          having helped numerous clients in the past make us one of the best
          machine learning companies.
        </p>
        &nbsp;
        <p>
          <h1 className="text-lg font-semibold mb-2">
            Our Machine Learning solutions and services
          </h1>
          <ul className="list-disc marker:text-blue-500">
            <li>Customer Marketing / Targeting</li>
            <li>IoT Solutions</li>
            <li>Cyber Security </li>
            <li>Risk and Fraud Management</li>
            <li>Log Analytics</li>
            <li>Pattern Recognition</li>
            <li>Text Mining and Analytics</li>
            <li>Trading</li>
          </ul>
        </p>
      </InternalPageLayout>
      <Footer />
    </div>
  );
};

export default ML;
