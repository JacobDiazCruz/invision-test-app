import SmHoldingHands from "../../public/assets/component-01/Image-01.jpg";
import SmVeggies from "../../public/assets/component-01/Image-02.jpg";
import SmVeggie from "../../public/assets/component-01/Image-03.jpg";

import LgHoldingHands from "../../public/assets/component-01/Image-01@2x.jpg";
import LgVeggies from "../../public/assets/component-01/Image-02@2x.jpg";
import LgVeggie from "../../public/assets/component-01/Image-03@2x.jpg";

import FoodOne from "../../public/assets/component-02/Image-01.jpg";
import FoodTwo from "../../public/assets/component-02/Image-02.jpg";
import FoodThree from "../../public/assets/component-02/Image-03.jpg";

export const sectionOne = {
  title: "ANSWER YOUR BODY'S NEEDS",
  images: [
    {
      src: {
        sm: SmHoldingHands,
        lg: LgHoldingHands
      },
      alt: "Holding hands"
    },
    {
      src: {
        sm: SmVeggies,
        lg: LgVeggies
      },
      alt: "Veggies"
    },
    {
      src: {
        sm: SmVeggie,
        lg: LgVeggie
      },
      alt: "Veggie"
    }
  ],
  body: [
    {
      subTitle: "",
      paragraph: {
        value: "The way ingredients are sourced affects the way we nourish our bodies. Author Mark Schatzer believes our body naturally develops an appetite for the foods and nutrients it needs to be healthy, but that artificial flavourings are getting in the way. This can be reversed by focusing on high-quality ingredients and being mindful as your appetite guides you to consume according to your body's needs.",
        fontWeightClass: "font-extralight",
        fontColorClass: "text-neutral-300"
      }
    },
    {
      subTitle: "BE MINDFUL",
      paragraph: {
        value: "Sourcing local or organic food is a good way to start being more mindful about what you're cooking and eating.",
        fontWeightClass: "font-medium",
        fontColorClass: "text-neutral-50"
      }
    }
  ]
};

export const sectionTwo = {
  title: "ALL THE LATEST FROM AEG",
  listItems: [
    {
      image: FoodOne,
      title: "Summer Lunch Menu By Mark Best",
      description: "AEG ambassador Mark Best's summer eats are guaranteed to help you make the most of the warmer weather and entertaining at home.",
      button: {
        link: "/",
        value: "READ MORE"
      }
    },
    {
      image: FoodTwo,
      title: "A Traditional Christmas Eve, Mark Best Style",
      description: "One of Australia's best chefs and AEG ambassador, Mark Best, shares his favourite Christmas Eve menu which is sure to impress your guests.",
      button: {
        link: "/",
        value: "READ MORE"
      }
    },
    {
      image: FoodThree,
      title: "Taking Taste Further",
      description: "This exclusive cookbook gives you all the know-how you need. We've designed it to make sure you get the most out of your products - and the best out of your food.",
      button: {
        link: "/",
        value: "READ MORE"
      }  
    }
  ]
};