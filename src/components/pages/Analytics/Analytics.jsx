import React, { useEffect } from "react";
import Footer from "../../footer/Footer";
import Header from "../../header/Header";
import AnalyticsCover from "../../../assets/img/internal pages/analytics3.svg";
import AnalyticsBodyImg from "../../../assets/img/internal pages/analytics2.svg";
import InternalPageLayout from "../layoutComponent/InternalPageLayout";

const Analytics = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Header />
      <InternalPageLayout
        title="Analytics Solution"
        coverImg={AnalyticsCover}
        bodyImg={AnalyticsBodyImg}
      >
        <p>
          As a Business Intelligence consulting leader, EKO continues to expand
          and combine innovative analytics with reporting tools for building
          relationships around, and achieving valuable insights from structured,
          semi-structured, and unstructured data.
        </p>
        &nbsp;
        <p>
          Through our EKO Analytics™ consulting and development service, our BI
          consultants help you select, optimize and deploy an array of custom as
          well as pre-built analytics and reporting tools to help you understand
          your customers, brand, competitors, operations, and market
          opportunities. During the roll-out phase, we ensure you realize the
          benefit of your solution by working with your team through the change
          management process.
        </p>
      </InternalPageLayout>
      <Footer />
    </div>
  );
};

export default Analytics;
