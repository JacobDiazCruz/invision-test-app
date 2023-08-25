import Image from "next/image";
import HoldingHands from "../../../public/assets/component-01/Image-01@2x.jpg";
import Veggies from "../../../public/assets/component-01/Image-02@2x.jpg";
import Veggie from "../../../public/assets/component-01/Image-03@2x.jpg";

export default function Banner() {
  return (
    <div className="flex gap-7">
      <div className="flex gap-5 w-[850px]">
        <div>
          <Image 
            alt="Man holding hands"
            src={HoldingHands}
          />
        </div>
        <div>
          <Image 
            alt="Man holding hands"
            src={Veggies}
          />
          <Image 
            alt="Man holding hands"
            src={Veggie}
            className="mt-5"
          />
        </div>
      </div>
      <div className="text font-light w-[400px]">
        <h1 className="text-[22px] text-neutral-100">ANSWER YOUR BODY&apos;S NEEDS</h1>
        <hr className="mb-7 mt-3"/>
        <p className="text-[18px] font-light text-neutral-300 leading-8">The way ingredients are sourced affects the way we nourish our bodies. Author Mark Schatzer believes our body naturally develops an appetite
          for the foods and nutrients it needs to be healthy, but that artificial flavourings are getting in the way. This can be reversed by focusing on
          high-quality ingredients and being mindful as your appetite guides you to consume according to your body&apos;s needs.
        </p>
        <div className="mt-10">
          <h4 className="text-rose-700 font-semibold">BE MINDFUL</h4>
          <p className="text-[18px] mt-5 font-medium text-neutral-50">
            Sourcing local or organic food is a good way to start being more mindful about what you&apos;re cooking and eating.
          </p>
        </div>
      </div>
    </div>
  );
};
