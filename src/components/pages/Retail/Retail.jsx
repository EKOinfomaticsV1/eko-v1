import React, { useEffect } from "react";
import Footer from "../../footer/Footer";
import Header from "../../header/Header";
import retailCover from "../../../assets/img/internal pages/retail1.svg";
import retailBodyImg from "../../../assets/img/internal pages/retail2.svg";
import InternalPageLayout from "../layoutComponent/InternalPageLayout";

const Retail = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Header />
      <InternalPageLayout
        title="Retail"
        coverImg={retailCover}
        bodyImg={retailBodyImg}
      >
        <h1 className="text-lg font-semibold mb-2">Overview</h1>
        <p>
          Retail is the process of selling consumer goods or services to
          customers through multiple channels of distribution to earn a profit.
          Retailers satisfy demand identified through a supply chain. The term
          "retailer" is typically applied where a service provider fills the
          small orders of a large number of individuals, who are end-users,
          rather than large orders of a small number of wholesale, corporate or
          government clientele.
        </p>
        &nbsp;
        <p>
          Shopping generally refers to the act of buying products. Sometimes
          this is done to obtain final goods, including necessities such as food
          and clothing; sometimes it takes place as a recreational activity.
          Recreational shopping often involves window shopping and browsing: it
          does not always result in a purchase.
        </p>
        <ul className="list-disc marker:text-blue-500 mt-2">
          <li>Supply Chain Analytics</li>
          <li>Operational analytics</li>
          <li>Customer Analytics </li>
        </ul>
      </InternalPageLayout>
      <Footer />
    </div>
  );
};

export default Retail;
