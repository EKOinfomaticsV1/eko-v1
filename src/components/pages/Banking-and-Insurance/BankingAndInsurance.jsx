import React, { useEffect } from "react";
import Footer from "../../footer/Footer";
import Header from "../../header/Header";
import bankCover from "../../../assets/img/internal pages/bank2.svg";
import bankBodyImg from "../../../assets/img/internal pages/bank1.svg";
import InternalPageLayout from "../layoutComponent/InternalPageLayout";

const BankingAndInsurance = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Header />
      <InternalPageLayout
        title="Banking and Insurance"
        coverImg={bankCover}
        bodyImg={bankBodyImg}
      >
        <h1 className="text-lg font-semibold mb-2">Overview</h1>
        <p>
          The world of banking has encountered unprecedented change over the
          past few years. Today, banks have that rare opportunity to reinvent
          themselves with data and analytics. Analytics will be a differentiator
          using analytics to gain an edge in a cutthroat environment—by
          improving risk assessment and predicting customer behavior. Analytics
          should be a part of every major initiative, in areas ranging from
          customers and risk to finance, workforce, and supply chain.
        </p>
        &nbsp;
        <p>
          <h1 className="text-lg font-semibold mb-2">Analytics can help</h1>
          <ul className="list-disc marker:text-blue-500">
            <li>
              Increase the ability to address and monitor regulatory compliance
            </li>
            <li>
              Increase transparency and understanding of risk exposures to
              manage the business more effectively
            </li>
            <li>Develop a risk-adjusted view of performance </li>
            <li>Manage fraud effectively</li>
            <li>Measure customer and product profitability</li>
            <li>Identify “high-potential” prospects and customers</li>
            <li>
              Improve the ability to target products and services to prospects
              or customers
            </li>
            <li>
              Enhance specific elements of the offer—product, pricing, channel
            </li>
            <li>
              Allow senior management to make informed operational decisions
            </li>
          </ul>
        </p>
      </InternalPageLayout>
      <Footer />
    </div>
  );
};

export default BankingAndInsurance;
