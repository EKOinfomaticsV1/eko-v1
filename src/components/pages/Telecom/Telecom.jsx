import React, { useEffect } from "react";
import Footer from "../../footer/Footer";
import Header from "../../header/Header";
import telecomCover from "../../../assets/img/internal pages/telecom1.svg";
import telecomBodyImg from "../../../assets/img/internal pages/telecom2.svg";
import InternalPageLayout from "../layoutComponent/InternalPageLayout";

const Telecom = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Header />
      <InternalPageLayout
        title="Telecom"
        coverImg={telecomCover}
        bodyImg={telecomBodyImg}
      >
        <h1 className="text-lg font-semibold mb-2">Overview</h1>
        <p>
          Telecommunication is the transmission of signs, signals, messages,
          words, writings, images and sounds or information of any nature by
          wire, radio, optical or electromagnetic systems. Telecommunication
          occurs when the exchange of information between communication
          participants includes the use of technology. It is transmitted either
          electrically over physical media, such as cables, or via
          electromagnetic radiation Such transmission paths are often divided
          into communication channels which afford the advantages of
          multiplexing.
        </p>
        &nbsp;
        <p>
          Since the Latin term communicatio is considered the social process of
          information exchange, the term telecommunications is often used in its
          plural form because it involves many different technologies.
        </p>
      </InternalPageLayout>
      <Footer />
    </div>
  );
};

export default Telecom;
