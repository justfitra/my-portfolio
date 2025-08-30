"use client";

import Image, { StaticImageData } from "next/image";
import ModalProject from "../Modal/ModalProject/page";
import { useState } from "react";

export interface ListItem {
  id: number;
  text: string;
}

export interface ListFeatures {
  id: number;
  text: string;
}

export interface CardProjectProps {
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

const CardProject: React.FC<CardProjectProps> = ({
  image,
  title,
  subtitle,
  description,
  technology,
  features,
  listFeatures,
  list,
  details,
  git,
  website,
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setModalOpen(true);
  };

  return (
    <>
      <div
        onClick={(e) => handleClick(e)}
        className="hover:shadow-2xl block md:flex gap-4 hover:text-tertiary my-8  rounded-xl ease-in-out transition-all duration-200 cursor-pointer"
      >
        <div className="w-full md:w-1/2 mr-2">
          <Image src={image} alt="example.jpg" className="w-96 rounded-xl" />
        </div>
        <div className="ml-2 mt-4 md:mt-0 w-full md:w-1/2">
          <h4 className="font-semibold text-2xl">{title}</h4>
          <div className="md:line-clamp-1  lg:line-clamp-2 line-clamp-1">
            <p>{subtitle}</p>
            <p>{description}</p>
            <h6>{technology} </h6>
            <ul>
              {list.map((item) => (
                <li key={item.id}>{item.text}</li>
              ))}
            </ul>
            <h6>{features} </h6>
            <ul>
              {listFeatures.map((item) => (
                <li key={item.id}>{item.text}</li>
              ))}
            </ul>
            <p>{details}</p>
          </div>
        </div>
      </div>
      <div>
        <ModalProject
          image={image}
          title={title}
          subtitle={subtitle}
          description={description}
          technology={technology}
          list={list}
          details={details}
          features={features}
          listFeatures={listFeatures}
          isOpen={modalOpen}
          isClose={() => setModalOpen(false)}
          git={git}
          website={website}
        />
      </div>
    </>
  );
};

export default CardProject;
