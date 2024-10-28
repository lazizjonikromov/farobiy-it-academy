import React from "react";
import { Link } from "react-scroll";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import star from "../assets/icons/Star.svg";
import { slidesData } from "../utils/data";

const Home = () => {
  return (
    <section className="w-full h-min" id="home">
      <div className="container mx-auto pt-40">
        <div className="sliders">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper h-[430px] w-full rounded-3xl"
          >
            {slidesData.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="flex items-center rounded-3xl h-[395px] bg-bgCard">
                  {/* Left Home Section */}
                  <div className="w-full md:w-[70%] space-y-6 pl-14">
                    <p className="flex items-center gap-1 text-lg font-medium text-gray-600">
                      {slide.subtitle}{" "}
                      <span>
                        <img src={star} alt="Star Icon" className="w-5 h-5" />
                      </span>
                    </p>
                    <h1 className="text-xl md:text-3xl text-lightDark font-bold leading-snug">
                      {slide.title.split(" zamonaviy kasbni ")[0]} {" "}
                      <span className="text-primary underline decoration-2 underline-offset-8">
                        zamonaviy kasbni
                      </span>{" "}
                      {slide.title.split(" zamonaviy kasbni ")[1]}
                    </h1>
                    <Link
                      to="our-course"
                      smooth={true}
                      duration={500}
                      className="inline-block px-7 py-4 cursor-pointer text-white bg-blue-500 rounded-2xl hover:scale-105 transition-all duration-300 ease-in-out"
                    >
                      <span className="text-base font-normal">Kurslarni tanlash</span>
                    </Link>
                  </div>

                  {/* Right Home Section */}
                  <div className="w-full h-[398px] relative overflow-hidden rounded-3xl hidden md:block">
                    <div className="w-[600px] h-[600px] rounded-full overflow-hidden absolute right-[-120px] top-[-60px]">
                      <img
                        src={slide.image}
                        alt='Home slide'
                        className="w-full h-full object-fill"
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Home;
