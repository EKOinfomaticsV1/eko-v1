import React, { useEffect } from "react";
import Footer from "../../footer/Footer";
import Header from "../../header/Header";
import InternalPageLayout from "../layoutComponent/InternalPageLayout";
import BigDataCover from "../../../assets/img/internal pages/bigData1.svg";
import BigDataBodyImg from "../../../assets/img/internal pages/bigData2.svg";

const BigData = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Header />
      <InternalPageLayout
        title="Big data Analytics"
        coverImg={BigDataCover}
        bodyImg={BigDataBodyImg}
      >
        <h1 className="text-lg font-semibold mb-2">Overview</h1>
        <p>
          Big Data offers amazing potential, returning benefits on some of the
          wildest wishes your business users have always had. Let EKO
          Infomaticsand our team of award-winning Big Data Architects help your
          organization bring those wishes to life.(This is very superficial –
          and can be removed)
        </p>
        &nbsp;
        <p>
          The world has witnessed a data explosion triggered by proliferation of
          devices and emerging channels of data creation and consumption.
          Uncovering insights from this data requires effective data integration
          capability, analytical processes, methodologies and workflows aimed at
          generating the right insights that accelerate real-time business
          value. Our team of experts partner with you from a pilot, to build, to
          scale, to support stages leveraging on Big Data technologies.
        </p>
      </InternalPageLayout>
      <Footer />
    </div>
  );
};

export default BigData;
