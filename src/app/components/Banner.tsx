"use client";

import { useState } from "react";
import { sectionOne } from "@/config/contents";
import Image, { StaticImageData } from "next/image";
import Modal from "./Modal";
import Fade from "./Fade";

type ImageItem = {
  alt: string;
  src: {
    sm: StaticImageData,
    lg: StaticImageData
  };
};

/**
 * @note This component is configurable because it populates data from 
 * the "contents" file, emulating a CMS format.
 */
export default function Banner() {
  const images: ImageItem[] = sectionOne.images;

  const [showFullImage, setShowFullImage] = useState<boolean>(false);
  const [currentSelectedImage, setCurrentSelectedImage] = useState<StaticImageData>();

  const handleFullImage = (src: StaticImageData) => {
    setShowFullImage(true)
    setCurrentSelectedImage(src)
  }

  return (
    <Fade>
      <div className="flex flex-col md:flex-row gap-5">
        <div className="flex flex-col md:flex-row gap-5 w-full md:w-[800px]">
          <div>
            <Image
              alt={images[0].alt}
              src={images[0].src.sm}
              onClick={() => handleFullImage(images[0].src.lg)}
              className="cursor-pointer"
            />
          </div>
          <div>
            <Image
              alt={images[1].alt}
              src={images[1].src.sm}
              onClick={() => handleFullImage(images[1].src.lg)}
              className="cursor-pointer"
            />
            <Image
              alt={images[2].alt}
              src={images[2].src.sm}
              onClick={() => handleFullImage(images[2].src.lg)}
              className="cursor-pointer mt-5"
            />
          </div>
        </div>

        <div className="text w-full md:w-[400px]">
          <h1 className="text-[26px] text-neutral-100 font-extralight">
            {sectionOne.title}
          </h1>
          <hr className="mt-3"/>
          {sectionOne.body.map((body, index: number) => (
            <div key={index}>
              <h4 className="text-rose-700 font-semibold mt-7">
                {body.subTitle}
              </h4>
              <p className={`text-[18px] mt-3 ${body.paragraph.fontWeightClass} ${body.paragraph.fontColorClass || "text-neutral-300"} line-clamp-10 leading-8`}>
                {body.paragraph.value}
              </p>
            </div>
          ))}
        </div>
        
        {/* Full image modal */}
        <Modal 
          open={showFullImage}
          onClose={() => setShowFullImage(false)}
        >
          <Image
            alt=""
            src={currentSelectedImage || ""}
          />
        </Modal>
      </div>
    </Fade>
  );
};
