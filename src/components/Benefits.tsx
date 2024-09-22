type Benefit = {
  heading: string;
  img: string;
  description: string;
};

const benefits: Benefit[] = [
  {
    heading: "Higher Profits",
    img: "/public/higher-profits.svg",
    description:
      " We offer some of the lowest prices in the industry because print providers continuously compete to win your business.",
  },
  {
    heading: "Robust Scaling",
    img: "/public/robust-scaling.svg",
    description:
      "Easily handle peak holiday seasons, with our wide network of partners and automatic routing functionality.",
  },
  {
    heading: "Best Selection",
    img: "/public/best-selection.svg",
    description:
      "With 900+ products and top quality brands, you can choose the best products for your business.",
  },
];

export default function Benefits() {
  return (
    <section className="max-w-[1216px] mx-auto py-36 px-20 flex flex-col gap-8 sm:flex-row">
      {benefits.map((benefit, idx) => {
        return (
          <div
            className="flex flex-col items-center gap-6 sm:items-start"
            key={idx}
          >
            <img
              src={benefit.img}
              className="align-baseline"
              height={120}
              width={120}
            />
            <h4 className="text-2xl font-bold text-center sm:text-left">
              {benefit.heading}
            </h4>
            <p className="text-center sm:text-left">{benefit.description}</p>
          </div>
        );
      })}
    </section>
  );
}
