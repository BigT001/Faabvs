"use client";

import React, { useEffect, useRef } from "react";
import KeenSlider from "keen-slider";
import "keen-slider/keen-slider.min.css";

export default function Reviews() {
  const sliderRef = useRef(null);
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);
  const prevButtonDesktopRef = useRef(null);
  const nextButtonDesktopRef = useRef(null);

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

      prevButtonRef.current?.addEventListener("click", handlePrevClick);
      nextButtonRef.current?.addEventListener("click", handleNextClick);
      prevButtonDesktopRef.current?.addEventListener("click", handlePrevClick);
      nextButtonDesktopRef.current?.addEventListener("click", handleNextClick);

      return () => {
        keenSlider.destroy();
        prevButtonRef.current?.removeEventListener("click", handlePrevClick);
        nextButtonRef.current?.removeEventListener("click", handleNextClick);
        prevButtonDesktopRef.current?.removeEventListener(
          "click",
          handlePrevClick
        );
        nextButtonDesktopRef.current?.removeEventListener(
          "click",
          handleNextClick
        );
      };
    }
  }, []);

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
              I believe in letting my work speak for itself. 
              hear from those who have experienced firsthand 
              the impact I strive to deliver.
              </p>

              <div className="hidden lg:mt-8 lg:flex lg:gap-4">
                <button
                  aria-label="Previous slide"
                  ref={prevButtonDesktopRef}
                  className="rounded-full border border-secondary p-3 text-secondary transition hover:bg-secondary hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 rtl:rotate-180"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 19.5L8.25 12l7.5-7.5"
                    />
                  </svg>
                </button>

                <button
                  aria-label="Next slide"
                  ref={nextButtonDesktopRef}
                  className="rounded-full border border-secondary p-3 text-secondary transition hover:bg-secondary hover:text-white"
                >
                  <svg
                    className="size-5 rtl:rotate-180"
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
              </div>
            </div>

            <div className="-mx-6 lg:col-span-2 lg:mx-0">
              <div ref={sliderRef} className="keen-slider ">
                <div className="keen-slider__slide bg-primary">
                  <blockquote className="flex h-full flex-col justify-between bg-purple-950 bg-opacity-50 p-6 shadow-sm sm:p-8 lg:p-12">
                    {" "}
                    <div>
                      <div className="flex gap-0.5 text-purple-500">
                        {[...Array(5)].map((_, index) => (
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
                      <div className="mt-4">
                        <p className="text-2xl font-bold text-white sm:text-3xl">
                          Professional 
                        </p>
                        <p className="mt-4 leading-relaxed text-gray-300">
                          No, Rose, they are not breathing. And they have no
                          arms or legs … Where are they? You know what? If we
                          come across somebody with no arms or legs, do we
                          bother resuscitating them? I mean, what quality of
                          life do we have there?
                        </p>
                      </div>
                    </div>
                    <footer className="mt-4 text-sm font-medium text-purple-300 sm:mt-6">
                      &mdash; Michael Scott 1
                    </footer>
                  </blockquote>
                </div>


                <div className="keen-slider__slide bg-primary">
                  <blockquote className="flex h-full flex-col justify-between bg-purple-950 bg-opacity-50 p-6 shadow-sm sm:p-8 lg:p-12">
                    {" "}
                    <div>
                      <div className="flex gap-0.5 text-purple-500">
                        {[...Array(5)].map((_, index) => (
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
                      <div className="mt-4">
                        <p className="text-2xl font-bold text-white sm:text-3xl">
                          Timely delivery
                        </p>
                        <p className="mt-4 leading-relaxed text-gray-300">
                          No, Rose, they are not breathing. And they have no
                          arms or legs … Where are they? You know what? If we
                          come across somebody with no arms or legs, do we
                          bother resuscitating them? I mean, what quality of
                          life do we have there?
                        </p>
                      </div>
                    </div>
                    <footer className="mt-4 text-sm font-medium text-purple-300 sm:mt-6">
                      &mdash; Michael Scott
                    </footer>
                  </blockquote>
                </div>



                <div className="keen-slider__slide bg-primary">
                  <blockquote className="flex h-full flex-col justify-between bg-purple-950 bg-opacity-50 p-6 shadow-sm sm:p-8 lg:p-12">
                    {" "}
                    <div>
                      <div className="flex gap-0.5 text-purple-500">
                        {[...Array(5)].map((_, index) => (
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
                      <div className="mt-4">
                        <p className="text-2xl font-bold text-white sm:text-3xl">
                          Stayin' Alive
                        </p>
                        <p className="mt-4 leading-relaxed text-gray-300">
                          No, Rose, they are not breathing. And they have no
                          arms or legs … Where are they? You know what? If we
                          come across somebody with no arms or legs, do we
                          bother resuscitating them? I mean, what quality of
                          life do we have there?
                        </p>
                      </div>
                    </div>
                    <footer className="mt-4 text-sm font-medium text-purple-300 sm:mt-6">
                      &mdash; Michael Scott
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-center gap-4 lg:hidden">
            <button
              aria-label="Previous slide"
              ref={prevButtonRef}
              className="rounded-full border border-purple-900 p-4 text-purple-900 transition hover:bg-purple-900  hover:text-white"
            >
              <svg
                className="size-5 -rotate-180 transform"
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

            <button
              aria-label="Next slide"
              ref={nextButtonRef}
              className="rounded-full border border-purple-900 p-4 text-purple-900  transition hover:bg-purple-900  hover:text-white"
            >
              <svg
                className="size-5"
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
          </div>
        </div>
      </section>
    </div>
  );
}
