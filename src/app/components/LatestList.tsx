import Image, { StaticImageData } from "next/image";
import FoodOne from "../../../public/assets/component-02/Image-01@2x.jpg";
import FoodTwo from "../../../public/assets/component-02/Image-02@2x.jpg";
import FoodThree from "../../../public/assets/component-02/Image-03@2x.jpg";

type ListItem = {
  image: StaticImageData;
  imageAlt: string;
  title: string;
  description: string;
};

export default function LatestList() {
  const listItems: ListItem[] = [
    {
      image: FoodOne,
      imageAlt: "asd",
      title: "Summer Lunch Menu By Mark Best",
      description: "AEG ambassador Mark Best's summer eats are guaranteed to help you make the most of the warmer weather and entertaining at home."
    },
    {
      image: FoodTwo,
      imageAlt: "asd",
      title: "Summer Lunch Menu By Mark Best",
      description: "AEG ambassador Mark Best's summer eats are guaranteed to help you make the most of the warmer weather and entertaining at home."
    },
    {
      image: FoodThree,
      imageAlt: "asd",
      title: "Summer Lunch Menu By Mark Best",
      description: "AEG ambassador Mark Best's summer eats are guaranteed to help you make the most of the warmer weather and entertaining at home."
    }
  ];

  return (
    <section className="mt-[200px]">
      <h1 className="text-center font-light text-[32px] mb-12 text-white">
        ALL THE LATEST FROM AEG
      </h1>
      <div className="flex gap-5">
        {listItems.map((item: ListItem, index: number) => (
          <a href="/" key={index}>
            <div className="item">
              <Image
                src={item.image}
                alt={item.imageAlt}
              />
              <div className="content">
                <h4 className="text-[18px] text-white mt-5">{item.title}</h4>
                <p className="text-[14px] text-neutral-400 font-light mt-3">{item.description}</p>
                <button className="mt-5 text-white border-b border-rose-500 pb-1">
                  READ MORE
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