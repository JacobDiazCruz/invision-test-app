"use client";

import { sectionTwo } from "@/config/contents";
import Image, { StaticImageData } from "next/image";

type ListItem = {
  image: StaticImageData;
  title: string;
  description: string;
  button: {
    link: string;
    value: string;
  }
};

/**
 * @note This component is configurable because it populates data from
 * the "contents" file, emulating a CMS format.
 */
export default function LatestList() {
  const listItems: ListItem[] = sectionTwo.listItems;

  const handleAnchorClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const clickedElement = event.currentTarget;
    console.log(clickedElement);
  };

  return (
    <section className="mt-[200px]">
      <h1 className="md:text-center font-extralight text-[24px] md:text-[42px] mb-12 text-neutral-50">
        {sectionTwo.title}
      </h1>
      <div className="flex flex-col md:flex-row gap-5">
        {listItems.map((item: ListItem, index: number) => (
          <a 
            key={index} 
            onClick={handleAnchorClick} 
            className="cursor-pointer"
          >
            <div className="item w-full md:w-[400px]">
              <div className="w-full h-[300px] relative border-b-[3px] border-rose-700">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                />
              </div>
              <div className="content">
                <h4 className="text-[18px] text-white mt-7 truncate">
                  {item.title}
                </h4>
                <p className="text-neutral-400 leading-7 line-clamp-3 font-light mt-3">
                  {item.description}
                </p>
                <button className="mt-5 text-white border-b border-rose-700 pb-1">
                  {item.button.value}
                </button>
              </div>
            </div>
          </a>
        ))}
        <div></div>
      </div>
    </section>
  );
};