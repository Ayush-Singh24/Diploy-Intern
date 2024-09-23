import { cn } from "../../lib/utils";
import React, { useEffect, useState } from "react";
import { Review } from "../Reviews";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: Review[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20  max-w-7xl overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          " flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item) => (
          <li
            className="w-[350px] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0  px-8 py-6 md:w-[450px]"
            style={{
              background:
                "linear-gradient(180deg, var(--slate-800), var(--slate-900)",
            }}
            key={item.name}
          >
            <blockquote>
              <div
                aria-hidden="true"
                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)] bg-white-1 text-black-1 rounded-xl"
              ></div>
              <div className="relative z-20 flex flex-col gap-5">
                <div className="flex flex-row items-center gap-4">
                  <div
                    className={`bg-[url('${item.profileImg}')] w-16 h-16 bg-[length:100%_100%] rounded-md`}
                  />
                  <div className="flex flex-col items-start justify-between gap-1">
                    <h4 className="text-xl font-bold md:text-2xl">
                      {item.name}
                    </h4>
                    <span className="cursor-pointer text-primary-1 hover:underline">
                      {item.storeLink}
                    </span>
                    <div className="flex gap-1">
                      {[...Array(item.rating)].map((x) => {
                        return (
                          <img
                            key={x}
                            src="/rating-star.svg"
                            height={18}
                            width={18}
                          />
                        );
                      })}
                    </div>
                  </div>
                </div>
                <p className="text-sm text-left md:text-base text-black-5">
                  {item.description}
                </p>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
