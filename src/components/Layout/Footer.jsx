import React from "react";
import logo from "../../assets/icons/logo.svg";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <section className="bg-bgCard">
      <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
        <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-5">
          <div className="sm:col-span-2">
            <Link
              to="home"
              smooth={true}
              duration={500}
              aria-label="Go home"
              title="Company"
              className="inline-flex items-center cursor-pointer"
            >
              <img src={logo} alt="" className="w-44" />
            </Link>
            <div className="mt-6 lg:max-w-sm">
              <p className="text-sm text-lightDark font-medium w-72">
                Biz sizga mahsulot sotish uchun bu yerda emasmiz, biz tajribamiz
                orqali qiymat sotamiz.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-base font-bold tracking-wide text-lightDark opacity-40">
              Manzil
            </p>
            <p className="text-lightDark">Toshkent shahri, Yunusobod tumani, ko'ch. Amir Temur 129B</p>
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-base font-bold tracking-wide text-lightDark opacity-40">
              Yordam
            </p>
            <p className="text-lightDark">+998 94 6408356</p>
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-base font-bold tracking-wide text-lightDark opacity-40">
              Pochta
            </p>
            <p className="text-lightDark">Info@farobiy.com</p>
          </div>
        </div>
        <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
          <p className="text-sm text-lightDark">
            © 2024 by Laziz Web. Farobiy IT Academy
          </p>
          <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
            <li>
              <a
                href="/"
                className="text-sm text-lightDark transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-sm text-lightDark transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                Telegram
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-sm text-lightDark transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
