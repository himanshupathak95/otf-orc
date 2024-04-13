import { Carousel } from "@material-tailwind/react";
import { car1, car2, car3, car4, car5, car6, car7 } from "../assets";

export default function OutfitCarousel() {
  return (
    <Carousel
      transition={{ duration: 2 }}
      className="rounded-2xl"
      autoplay={true}
      autoplayDelay={6000}
      loop={true}
      nextArrow={() => null}
      prevArrow={() => null}
    >
      <img src={car1} alt="image 1" className="h-full w-full object-cover" />
      <img src={car2} alt="image 2" className="h-full w-full object-cover" />
      <img src={car3} alt="image 3" className="h-full w-full object-cover" />
      <img src={car4} alt="image 4" className="h-full w-full object-cover" />
      <img src={car5} alt="image 5" className="h-full w-full object-cover" />
      <img src={car6} alt="image 6" className="h-full w-full object-cover" />
      <img src={car7} alt="image 7" className="h-full w-full object-cover" />
    </Carousel>
  );
}
