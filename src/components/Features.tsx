import { ArrowRight } from "lucide-react";
import PlusMarker from "./ui/plusMarker";
import { features } from "../utils/constants";

export default function Features() {
  return (
    <main className="bg-grayBG">
      <section className="pt-14 pb-36 max-w-[1216px] bg-grayBG mx-auto md:pt-32">
        <div className="flex flex-col items-center w-3/4 mx-auto overflow-hidden rounded-3xl md:flex-row bg-white-1">
          <div className="relative">
            <img src="/items.jpeg" className="relative w-full" />
            <PlusMarker className="top-[16%] left-[46%]" />
            <PlusMarker className="top-[22%] left-[17%]" />
            <PlusMarker className="top-[33%] left-[30%]" />
            <PlusMarker className="bottom-[25%] left-[15%]" />
            <PlusMarker className="bottom-[25%] left-[48%]" />
            <PlusMarker className="top-[50%] right-[18%]" />
          </div>
          <div className="flex flex-col gap-5 px-6 pt-8 pb-10">
            <h1 className="text-3xl font-bold">
              Easily add your design to wide range of products
            </h1>
            <p className="text-black-5">
              With our free design tools, you can easily add your custom designs
              to t-shirts, mugs, phone cases, and hundreds of other products.
            </p>
            <div className="flex items-center gap-2 font-semibold cursor-pointer text-primary-1 hover:text-primary-2">
              <span>All Products</span>
              <ArrowRight />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center w-3/4 gap-10 mx-auto pt-28 md:w-full md:flex-row md:gap-16">
          {features.map((feature, idx) => {
            return (
              <div
                className="flex flex-col items-center gap-1 md:items-start"
                key={idx}
              >
                <img
                  src={feature.img}
                  height={156}
                  width={156}
                  className="md:mb-10"
                />
                <h2 className="text-2xl font-bold text-primary-1">
                  {feature.primaryTitle}
                </h2>
                <h4 className="text-xl font-semibold text-center md:mb-2">
                  {feature.secondaryTitle}
                </h4>
                <p className="text-center text-black-5 md:text-left">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
