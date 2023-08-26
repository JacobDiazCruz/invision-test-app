import { sectionOne } from "@/config/contents";
import Image, { StaticImageData } from "next/image";

type ImageItem = {
  alt: string;
  src: StaticImageData;
};

export default function Banner() {
  const images: ImageItem[] = sectionOne.images;

  return (
    <div className="flex gap-7">
      <div className="flex gap-5 w-[850px]">
        <div>
          <Image 
            alt={images[0].alt}
            src={images[0].src}
          />
        </div>
        <div>
          <Image 
            alt={images[1].alt}
            src={images[1].src}
          />
          <Image
            alt={images[2].alt}
            src={images[2].src}
            className="mt-5"
          />
        </div>
      </div>
      <div className="text font-light w-[400px]">
        <h1 className="text-[22px] text-neutral-100">{sectionOne.title}</h1>
        <hr className="mb-7 mt-3"/>
        {sectionOne.body.map((body, index: number) => (
          <div className="mt-5" key={index}>
            <h4 className="text-rose-700 font-semibold mt-10">
              {body.subTitle}
            </h4>
            <p className="text-[18px] mt-5 font-light text-neutral-300 line-clamp-10 leading-8">
              {body.paragraph}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
