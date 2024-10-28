import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const Faq = () => {
  return (
    <section>
      <div className="container mx-auto">
        <h2 className="title px-3">Ko'p so'raladigan savollar</h2>

        <div className="max-w-full px-3 mx-auto mt-10 flex flex-col gap-5">
          <Accordion
            title="Farobiy IT Academy bu nima?"
            content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque iste explicabo obcaecati libero? Odio, fugiat. Aspernatur, facere? Quasi atque debitis quisquam praesentium tempore deleniti, aliquam sapiente asperiores, eum cum id!"
          />
          <Accordion
            title="Farobiy IT Academy a'zoligimga nimalar kiradi?"
            content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque iste explicabo obcaecati libero? Odio, fugiat. Aspernatur, facere? Quasi atque debitis quisquam praesentium tempore deleniti, aliquam sapiente asperiores, eum cum id!"
          />
          <Accordion
            title="Farobiy IT Academy dan nimani o'rganishim mumkin?"
            content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque iste explicabo obcaecati libero? Odio, fugiat. Aspernatur, facere? Quasi atque debitis quisquam praesentium tempore deleniti, aliquam sapiente asperiores, eum cum id!"
          />
          <Accordion
            title="Sinovim tugagandan keyin nima bo'ladi?"
            content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque iste explicabo obcaecati libero? Odio, fugiat. Aspernatur, facere? Quasi atque debitis quisquam praesentium tempore deleniti, aliquam sapiente asperiores, eum cum id!"
          />
          <Accordion
            title="Farobiy IT Academy da dars bera olamanmi?"
            content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque iste explicabo obcaecati libero? Odio, fugiat. Aspernatur, facere? Quasi atque debitis quisquam praesentium tempore deleniti, aliquam sapiente asperiores, eum cum id!"
          />
        </div>
      </div>
    </section>
  );
};

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="">
      <button
        onClick={toggleAccordion}
        className="w-full flex justify-between items-center p-5 md:p-10 text-left bg-gray-100 hover:bg-gray-200 focus:outline-none rounded-3xl md:rounded-[44px]"
      >
        <span className="text-lg md:text-2xl text-lightDark font-medium">{title}</span>
        <span className="text-gray-500">
          {isOpen ? <FaMinus /> : <FaPlus />}
        </span>
      </button>
      {isOpen && <div className="p-10 text-lg text-lightDark">{content}</div>}
    </div>
  );
};

export default Faq;
