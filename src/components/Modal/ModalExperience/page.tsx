"use client";

import { faClose } from "@fortawesome/free-solid-svg-icons/faClose";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence, motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";

export interface ListItem {
  id: number;
  text: string;
}

export interface ModalExperienceProps {
  isOpen: boolean;
  isClose: () => void;
  image: StaticImageData;
  title: string;
  subtitle: string;
  description: string;
  technology: string;
  list: ListItem[];
  details: string;
}
const ModalExperience: React.FC<ModalExperienceProps> = ({
  isOpen,
  isClose,
  image,
  title,
  subtitle,
  description,
  technology,
  list,
  details,
}) => {
  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={overlayVariants}
            onClick={isClose}
            className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center "
          >
            <motion.div className="max-w-screen h-[70%} lg:h-[90%] w-[90%]  bg-[#1D1B38] shadow-blue-200 rounded-xl overflow-hidden shadow-2xl">
              <div className="w-full h-[260px] md:h-[300px] overflow-hidden ">
                <Image src={image} alt="example.jpg" className="w-full " />
              </div>
              <div className="ml-2 full p-5 h-[260px] md:h-[200px] overflow-y-auto scrollbar-hide">
                <h4 className="font-semibold text-2xl">{title}</h4>
                <div className="text-sm">
                  <p className="my-2">{subtitle}</p>
                  <p className="my-2">{description}</p>
                  <h6>{technology} </h6>
                  <ul className="my-2">
                    {list.map((item) => (
                      <li key={item.id}>- {item.text}</li>
                    ))}
                  </ul>

                  <p>{details}</p>

                  <button
                    className="absolute top-[100px] right-9 md:top-10 md:right-20  cursor-pointer text-black"
                    onClick={isClose}
                  >
                    <FontAwesomeIcon icon={faClose} className="text-xl" />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const overlayVariants = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      duration: 0.3,
      delayChildren: 0.4,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
      duration: 0.3,
      delay: 0.4,
    },
  },
};

export default ModalExperience;
