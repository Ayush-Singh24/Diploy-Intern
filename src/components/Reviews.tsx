import { InfiniteMovingCards } from "./ui/infinite-moving-card";

export type Review = {
  name: string;
  storeLink: string;
  profileImg: string;
  description: string;
  rating: 1 | 2 | 3 | 4 | 5;
};

const reviews: Review[] = [
  {
    name: "Robert A. Voltaire",
    storeLink: "Store Link",
    rating: 5,
    profileImg: "/images/robert.png",
    description:
      "Printify has been an incredible service for us musicians unable to keep large amount of inventory - now we can create designs previously too expensive to print without having to have 1,000 shirts in our jam space. Thanks Printify! ",
  },
  {
    name: "Quinten Barney",
    storeLink: "Etsy Merchant",
    rating: 5,
    profileImg: "/images/quinten.png",
    description:
      "We chose Printify because of their offerings as well as their incredibly low prices. After several years, we've come to find that their customer service is also top notch, and their platform just keeps getting better and better. ",
  },
  {
    name: "Nikki",
    storeLink: "Store Link",
    rating: 5,
    profileImg: "/images/nikki.png",
    description:
      "Printify has been a amazing partner to work with as we grow our business, from the range of merch we can make for our customers to working with our Customer Service team (Hi Martin!) it's truly made the whole process a breeze. ",
  },
  {
    name: "Spencer, Bret",
    storeLink: "Store Link",
    rating: 3,
    profileImg: "/images/spencer.png",
    description:
      "Using Printify has been a great experience. Customer service is always very quick to respond and handle any issues that our customers may have. The premium account has more than paid for itself and has increased our margins significantly. ",
  },
  {
    name: "April Showers",
    storeLink: "Store Link",
    rating: 4,
    profileImg: "/images/april-showers.jpeg",
    description:
      "I really appreciate working with Printify on my brand. Afro Unicorn was only supposed to be my design on a white shirt. It is so much more. Printify allows me the time to run the business and not work in the business. ",
  },
];

export default function Reviews() {
  return (
    <main className="bg-grayBG">
      <section className="mx-auto px-6 py-14 max-w-[1216px] lg:pt-36 lg:pb-0 text-left md:text-center flex flex-col gap-10">
        <div className="flex flex-col">
          <h2 className="px-4 text-3xl font-bold text-black-2">
            Trusted by over 8M sellers around the world
          </h2>
          <p className="px-6 py-12 sm:w-full text-black-5">
            Whether you are just getting started or run an enterprise-level
            e-commerce business, we do everything we can to ensure a positive
            merchant experience.
          </p>
        </div>
        <div>
          <InfiniteMovingCards
            items={reviews}
            speed="normal"
            direction="right"
          />
        </div>
      </section>
    </main>
  );
}
