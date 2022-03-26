import React, { useEffect } from "react";
import Footer from "../../footer/Footer";
import Header from "../../header/Header";
import InternalPageLayout from "../layoutComponent/InternalPageLayout";
import AI1 from "../../../assets/img/internal pages/AI1.svg";
import AI2 from "../../../assets/img/internal pages/AI2.svg";

const AI = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Header />
      <InternalPageLayout
        title="Artificial Intelligence"
        coverImg={AI2}
        bodyImg={AI1}
      >
        <p>
          The current AI wave is poised to finally break through enterprises and
          is making the landfall at an opportune time. Leveraging highly skilled
          data scientists and professionals, is on the cusp of transforming into
          an AI company. We are weaving AI to our customer's business processes
          to help them achieve cost optimization, efficiencies, agility, and
          most importantly, deliver continuous value.
        </p>
        &nbsp;
        <p>
          Today data is currency. Enhance your business analysts skillset and
          train them to become citizen data scientists who use AI / ML tools to
          build customer acquisition, retention and lifetime-value models
        </p>
      </InternalPageLayout>
      <Footer />
    </div>
  );
};

export default AI;
