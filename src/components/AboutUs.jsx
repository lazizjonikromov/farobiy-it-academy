import React from "react";
import { AiFillLike } from "react-icons/ai";
import { RiMedalFill } from "react-icons/ri";

import aboutUs1 from "../assets/images/about-us-01.png";
import aboutUs2 from "../assets/images/about-us-02.png";

const AboutUs = () => {
  return (
    <section id="about-us">
      <div className="container mx-auto py-20 px-4">
        <h2 className="title">Biz haqimizda</h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-3">
          {/* Text Block 1 */}
          <div className="flex flex-col py-10 px-6 md:p-7 justify-center gap-8 bg-[#F1E2C1] md:row-span-1 text-lightDark rounded-3xl md:rounded-[44px] col-span-3 lg:col-span-1">
            <AiFillLike size={40} color="#a09782"/>
            <p className="text-lg md:text-[22px] font-medium leading-6 md:leading-[33px] text-start">
              Farobiy IT Academy - da biz oddiy ko'rinadigan yaratish harakati
              odamlar hayotida o'sish.
            </p>
          </div>

          {/* Main Image Block */}
          <div className="col-span-3 lg:col-span-2 lg:row-span-2">
            <img
              src={aboutUs1}
              alt="People collaborating"
              className="rounded-3xl md:rounded-[44px] object-cover w-full h-full lg:max-h-[600px]"
            />
          </div>

          {/* Secondary Image */}
          <div className="col-span-3 lg:col-span-1 lg:row-span-2">
            <img
              src={aboutUs2}
              alt="Code on screen"
              className="rounded-3xl md:rounded-[44px] object-cover w-full h-full lg:max-h-[600px]"
            />
          </div>

          {/* Text Block 2 */}
          <div className="flex flex-col justify-center gap-8 py-10 px-6 md:p-8 bg-[#D8DBFB] text-lightDark rounded-[44px] col-span-3 lg:col-span-2">
            <RiMedalFill size={40} />
            <p className="text-lg md:text-[22px] font-medium leading-6 md:leading-[33px] text-start">
              Farobiy IT Academy - bu illyustratsiya, dizayn, fotografiya,
              video, freelancing va boshqa mavzularda ijodiy va qiziqvchan.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
