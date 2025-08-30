"use client";

import { faClose } from "@fortawesome/free-solid-svg-icons/faClose";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence, motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

export interface ListItem {
  id: number;
  text: string;
}

export interface ListFeatures {
  id: number;
  text: string;
}

export interface ModalProjectProps {
  isOpen: boolean;
  isClose: () => void;
  image: StaticImageData;
  title: string;
  subtitle: string;
  description: string;
  technology: string;
  list: ListItem[];
  features: string;
  listFeatures: ListFeatures[];
  details: string;
  git: string;
  website: string;
}
const ModalProject: React.FC<ModalProjectProps> = ({
  isOpen,
  isClose,
  image,
  title,
  subtitle,
  description,
  technology,
  list,
  features,
  listFeatures,
  details,
  git,
  website,
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
            <motion.div className="max-w-screen lg:h-[90%] h-[75%] w-[90%]  bg-primary shadow-blue-200 overflow-hidden rounded-xl shadow-2xl">
              <div className="relative w-full h-[30%] md:h-[300px] overflow-hidden ">
                <Image
                  src={image}
                  alt="example.jpg"
                  className="w-full rounded-none md:rounded-xl"
                />
                <button
                  className="absolute top-[20px] right-5 md:top-6 md:right-8  cursor-pointer text-black"
                  onClick={isClose}
                >
                  <FontAwesomeIcon icon={faClose} className="text-xl" />
                </button>
              </div>
              <div className="full flex flex-col p-5 h-[70%] md:h-[200px] overflow-y-auto scrollbar-hide">
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
                  <h6>{features} </h6>
                  <ul className="my-2">
                    {listFeatures.map((item) => (
                      <li key={item.id}>{item.text}</li>
                    ))}
                  </ul>

                  <p>{details}</p>

                  <div className="mt-3 mb-2">
                    <Link href={git} target="_blank">
                      Github :{" "}
                      <span className="text-blue-600 hover:underline transition-all ease-in-out">
                        {git}
                      </span>
                    </Link>
                  </div>
                  <div>
                    {website != "" ? (
                      <Link href={website} target="_blank">
                        Website :{" "}
                        <span className="text-blue-600 hover:underline transition-all ease-in-out">
                          {website}
                        </span>
                      </Link>
                    ) : null}
                  </div>
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

export default ModalProject;
