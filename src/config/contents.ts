import HoldingHands from "../../public/assets/component-01/Image-01@2x.jpg";
import Veggies from "../../public/assets/component-01/Image-02@2x.jpg";
import Veggie from "../../public/assets/component-01/Image-03@2x.jpg";

import FoodOne from "../../public/assets/component-02/Image-01@2x.jpg";
import FoodTwo from "../../public/assets/component-02/Image-02@2x.jpg";
import FoodThree from "../../public/assets/component-02/Image-03@2x.jpg";

export const sectionOne = {
  title: "ANSWER YOUR BODY'S NEEDS",
  images: [
    {
      src: HoldingHands,
      alt: "Holding hands"
    },
    {
      src: Veggies,
      alt: "Veggies"
    },
    {
      src: Veggie,
      alt: "Veggie"
    }
  ],
  body: [
    {
      subTitle: "",
      paragraph: "The way ingredients are sourced affects the way we nourish our bodies. Author Mark Schatzer believes our body naturally develops an appetite for the foods and nutrients it needs to be healthy, but that artificial flavourings are getting in the way. This can be reversed by focusing on high-quality ingredients and being mindful as your appetite guides you to consume according to your body's needs.",
    },
    {
      subTitle: "BE MINDFUL",
      paragraph: "Sourcing local or organic food is a good way to start being more mindful about what you're cooking and eating.",
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