import React, { useEffect } from "react";
import Footer from "../../footer/Footer";
import Header from "../../header/Header";
import educationCover from "../../../assets/img/internal pages/education2.svg";
import educationBodyImg from "../../../assets/img/internal pages/education3.svg";
import InternalPageLayout from "../layoutComponent/InternalPageLayout";

const Education = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Header />
      <InternalPageLayout
        title="Education"
        coverImg={educationCover}
        bodyImg={educationBodyImg}
      >
        <h1 className="text-lg font-semibold mb-2">Overview</h1>
        <p>
          Digital Educational Platform which supports online Transactions,
          Education and go digital with minimal loss in time and resources
        </p>
        &nbsp;
        <p>
          <ul className="list-disc marker:text-blue-500">
            <li>Integrate core business functions</li>
            <li>Easy-to-configure</li>
            <li>Centrally Managed Solution (Managed by EKO) </li>
            <li>Streamline processes</li>
            <li>Plug and Play and Custom Enhancement / Development</li>
          </ul>
        </p>
      </InternalPageLayout>
      <Footer />
    </div>
  );
};

export default Education;
