"use client";
import Image, { StaticImageData } from "next/image";
import ModalExperience from "../Modal/ModalExperience/page";
import { useState } from "react";

export interface ListItem {
  id: number;
  text: string;
}

interface CardExperienceProps {
  image: StaticImageData;
  title: string;
  subtitle: string;
  description: string;
  technology: string;
  list: ListItem[];
  details: string;
}

const CardExperience: React.FC<CardExperienceProps> = ({
  image,
  title,
  subtitle,
  description,
  technology,
  list,
  details,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsOpen(true);
  };

  return (
    <>
      <div
        onClick={(e) => handleClick(e)}
        className="hover:shadow-2xl block md:flex gap-4  my-8 hover:text-tertiary rounded-xl ease-in-out transition-all duration-200 cursor-pointer"
      >
        <div className="w-full">
          <Image src={image} alt="" className="w-96 rounded-xl" />
        </div>

        <div className="w-full md:mt-0 mt-4">
          <h6 className="text-lg font-semibold">{title}</h6>
          <div className="md:line-clamp-1 lg:line-clamp-2 line-clamp-1">
            <h5 className="my-5">{subtitle}</h5>
            <p>{description}</p>
            <h6> {technology} </h6>
            <ul>
              {list.map((item) => (
                <li key={item.id}>{item.text}</li>
              ))}
            </ul>
            <p>{details}</p>
          </div>
        </div>
      </div>

      <div>
        <ModalExperience
          image={image}
          title={title}
          subtitle={subtitle}
          description={description}
          technology={technology}
          list={list}
          details={details}
          isOpen={isOpen}
          isClose={() => setIsOpen(false)}
        />
      </div>
    </>
  );
};

export default CardExperience;
