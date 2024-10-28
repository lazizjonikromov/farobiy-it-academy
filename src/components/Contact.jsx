import React from "react";

const Contact = () => {
  return (
    <section>
      <div className="container mx-auto py-20 px-3">
        <div className="bg-bgCard py-10 px-6 md:p-14 flex flex-col md:flex-row justify-between items-center w-full rounded-2xl md:rounded-[44px]">
          <div className="w-full md:w-1/3 flex flex-col gap-5">
            <h2 className="text-2xl font-bold text-lightDark">
              Tanlovda yordam beramiz!
            </h2>
            <p className="text-lg font-medium text-lightDark">
              Kurs haqida savollaringiz bo'lsa yoki nimani tanlashni
              bilmasangiz, raqamingizni qoldiring - biz barcha savollaringizga
              javob beramiz.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <form className="mt-8 space-y-6"> 
              <input
                type="text"
                placeholder="Ismingiz"
                className="w-full rounded-[20px] py-5 px-6 border border-primary border-opacity-50 text-lightDark bg-light focus:bg-transparent text-md outline-primary"
                required
              />
              <div className="flex gap-5">
                <input
                  type="number"
                  placeholder="Telefon raqamingiz"
                  className="w-full rounded-[20px] py-5 px-6 border border-primary border-opacity-50 text-lightDark bg-light focus:bg-transparent text-md outline-primary"
                  required
                />
                <input
                  type="text"
                  placeholder="Pochtangiz"
                  className="w-full rounded-[20px] py-5 px-6 border border-primary border-opacity-50 text-lightDark bg-light focus:bg-transparent text-md outline-primary"
                  required
                />
              </div>
              <button
                type="submit"
                className="text-white bg-primary bg-opacity-50 tracking-wide rounded-[20px] text-base font-medium px-8 py-5 !mt-10 hover:scale-105 transition duration-300"
              >
                Yuborish
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
