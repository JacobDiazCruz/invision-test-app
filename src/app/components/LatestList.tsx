import Image, { StaticImageData } from "next/image";
import HoldingHands from "../../../public/assets/component-01/Image-01@2x.jpg";

type ListItem = {
  image: StaticImageData;
  imageAlt: string;
  title: string;
  description: string;
};

export default function LatestList() {
  const listItems: ListItem[] = [
    {
      image: HoldingHands,
      imageAlt: "asd",
      title: "Summer Lunch Menu By Mark Best",
      description: "AEG ambassador Mark Best's summer eats are guaranteed to help you make the most of the warmer weather and entertaining at home."
    },
    {
      image: HoldingHands,
      imageAlt: "asd",
      title: "Summer Lunch Menu By Mark Best",
      description: "AEG ambassador Mark Best's summer eats are guaranteed to help you make the most of the warmer weather and entertaining at home."
    },
    {
      image: HoldingHands,
      imageAlt: "asd",
      title: "Summer Lunch Menu By Mark Best",
      description: "AEG ambassador Mark Best's summer eats are guaranteed to help you make the most of the warmer weather and entertaining at home."
    }
  ];

  return (
    <div className="flex gap-5">
      {listItems.map((item: ListItem, index: number) => (
        <div className="item" key={index}>
          <Image
            src={item.image}
            alt={item.imageAlt}
          />
          <div className="content">
            <h4 className="text-[18px]">{item.title}</h4>
            <p className="text-[14px] text-neutral-300">{item.description}</p>
            <button>READ MORE</button>
          </div>
        </div>
      ))}
      <div></div>
    </div>
  );
};