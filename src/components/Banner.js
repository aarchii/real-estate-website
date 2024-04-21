import React from "react";

//import image
import Image from "../assets/img/house-banner.png";

//import components
import Search from "../components/Search";

const Banner = () => {
  return (
    <section className="h-full max-h-[640px] mb-8 xl:mb-24">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1px-4 lg:px-0 h-auto">
          <h1 className="text-4xl lg:text-[72px] lg:ml-4 font-semibold leading-none mb-6">
            <span className='text-violet-700'>Rent</span> Your Dream<br/>House With Us.
          </h1>
          <p className="max-w-[480px] mb-8 lg:ml-4 text-xl lg:text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt!
          </p>
        </div>
        {/* image*/}
        <div className=' flex-1 lg:flex justify-end items-end'>
          <img src={Image} alt="" className="max-w-full h-auto" style={{ maxWidth: '600px' }} />
        </div>
      </div>
      <Search />
    </section>
  );
};

export default Banner;
