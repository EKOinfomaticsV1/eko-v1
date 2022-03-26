import React from "react";

const InternalPageLayout = (props) => {
  return (
    <div className="min-h-[100vh]">
      <div className="py-[10px] bg-[#f3f9fd] mb-14">
        <section className="slide-left-animation  flex justify-between items-center w-[95%] md:w-[80%] mx-auto ">
          <div>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold">
              {props.title}
            </h1>
          </div>
          <div className="w-[50%] max-w-[350px]">
            <img src={props.coverImg} alt={props.title} />
          </div>
        </section>
      </div>
      <section className="slide-right-animation md:flex justify-between items-start w-[95%] md:w-[80%] mx-auto py-5 ">
        <div className=" max-w-[450px] flex-[0.4] mx-auto">
          <img src={props.bodyImg} alt={props.title} className="w-full" />
        </div>
        <div className="flex-[0.6] font-sans md:ml-10 p-5">
          {props.children}
        </div>
      </section>
    </div>
  );
};

export default InternalPageLayout;
