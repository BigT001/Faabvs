"use client";

import React, { useEffect, useRef } from "react";
import KeenSlider from "keen-slider";
import "keen-slider/keen-slider.min.css";

const reviews = [
  {
    rating: 5,
    title: "Excellent",
    content: "Hannah has been an employee of mine for over 2 years. She has excellent customer service skills. She is empathetic, customer focused and creative. She works to improve the business model and is extremely flexible and adaptable to change. A person that is honest and trustworthy. Hannah is a customer service expert",
    author: "David Black",
    company: "TM, Firstsource Solutions."
  },
  {
    rating: 5,
    title: "Professional",
    content: "Hannah was my PA for 2yrs before she relocated to the UK. Her level of organisation to daily duties is just class. She is very proactive about anticipating needs. She takes care of scheduling, travel arrangements, and even some personal errands seamlessly. I have found her communication to be prompt, professional, and clear. This has allowed me to focus on more important matters, knowing all details are handled perfectly. I can't recommend her highly enough!",
    author: "Mr O. Abiodun",
    company: "CEO, Beniour Executive Salon."
  },
  {
    rating: 5,
    title: "Game-changer",
    content: "I've had the pleasure of working with Hannah as a partner, and I must say, it has been an incredible journey. Hannah brings a unique energy to the table that makes even the most challenging tasks feel effortless. Her spirit is infectious, and her ability to simplify complex processes has been a game-changer for our collaboration. I highly recommend partnering with Hannah - you won't regret it!",
    author: "Samuel Stanley",
    company: "Founder, NetCrest Technologies."
  }
];

export default function Reviews() {
  const sliderRef = useRef(null);
  const [prevButton, nextButton] = ["prev", "next"].map(() => useRef(null));
  const [prevButtonDesktop, nextButtonDesktop] = ["prevDesktop", "nextDesktop"].map(() => useRef(null));

  useEffect(() => {
    if (sliderRef.current) {
      const keenSlider = new KeenSlider(sliderRef.current, {
        loop: true,
        slides: {
          origin: "center",
          perView: 1.25,
          spacing: 16,
        },
        breakpoints: {
          "(min-width: 1024px)": {
            slides: {
              origin: "auto",
              perView: 1.5,
              spacing: 32,
            },
          },
        },
      });

      const handlePrevClick = () => keenSlider.prev();
      const handleNextClick = () => keenSlider.next();

      [prevButton, nextButton, prevButtonDesktop, nextButtonDesktop].forEach((btn, index) => {
        const handler = index % 2 === 0 ? handlePrevClick : handleNextClick;
        btn.current?.addEventListener("click", handler);
      });

      return () => {
        keenSlider.destroy();
        [prevButton, nextButton, prevButtonDesktop, nextButtonDesktop].forEach((btn, index) => {
          const handler = index % 2 === 0 ? handlePrevClick : handleNextClick;
          btn.current?.removeEventListener("click", handler);
        });
      };
    }
  }, []);

  const renderStars = (rating) => (
    <div className="flex gap-0.5 text-purple-500">
      {[...Array(rating)].map((_, index) => (
        <svg
          key={index}
          className="size-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );

  return (
    <div>
      <section className="">
        <div className="mx-auto max-w-[1340px] px-4 py-12 sm:px-6 lg:me-0 lg:py-16 lg:pe-0 lg:ps-8 xl:py-24">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-center lg:gap-16">
            <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Don't just take my word for it...
              </h2>

              <p className="mt-4 text-gray-700">
                I believe in letting my work speak for itself. hear from those
                who have experienced firsthand the impact I strive to deliver.
              </p>

              <div className="hidden lg:mt-8 lg:flex lg:gap-4">
                {[prevButtonDesktop, nextButtonDesktop].map((btnRef, index) => (
                  <button
                    key={index}
                    aria-label={index === 0 ? "Previous slide" : "Next slide"}
                    ref={btnRef}
                    className="rounded-full border border-secondary p-3 text-secondary transition hover:bg-secondary hover:text-white"
                  >
                    <svg
                      className={`size-5 ${index === 0 ? 'rtl:rotate-180' : 'rtl:rotate-180'}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d={index === 0 ? "M15.75 19.5L8.25 12l7.5-7.5" : "M9 5l7 7-7 7"}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                  </button>
                ))}
              </div>
            </div>

            <div className="-mx-6 lg:col-span-2 lg:mx-0">
              <div ref={sliderRef} className="keen-slider">
                {reviews.map((review, index) => (
                  <div key={index} className="keen-slider__slide bg-primary">
                    <blockquote className="flex h-full flex-col justify-between bg-purple-950 bg-opacity-50 p-6 shadow-sm sm:p-8 lg:p-12">
                      <div>
                        {renderStars(review.rating)}
                        <div className="mt-4">
                          <p className="text-2xl font-bold text-white sm:text-3xl">
                            {review.title}
                          </p>
                          <p className="mt-4 leading-relaxed text-gray-300">
                            {review.content}
                          </p>
                        </div>
                      </div>
                      <footer className="mt-4 text-sm font-medium text-purple-300 sm:mt-6">
                        <p>&mdash; {review.author}</p>
                        <p className="mt-1">{review.company}</p>
                      </footer>
                    </blockquote>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-center gap-4 lg:hidden">
            {[prevButton, nextButton].map((btnRef, index) => (
              <button
                key={index}
                aria-label={index === 0 ? "Previous slide" : "Next slide"}
                ref={btnRef}
                className="rounded-full border border-purple-900 p-4 text-purple-900 transition hover:bg-purple-900 hover:text-white"
              >
                <svg
                  className={`size-5 ${index === 0 ? '-rotate-180 transform' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 5l7 7-7 7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}