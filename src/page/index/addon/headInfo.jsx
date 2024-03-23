import React, { useEffect, useRef } from "react";
import Splide from "@splidejs/splide";
import "@splidejs/splide/css";

export default function headInfo() {
  // const start = useRef(false);

  // useEffect(() => {
  //   if (!start.current) {
  //     start.current = true;
  //     new Splide(".splide", {
  //       type: "loop",
  //       // autoplay: 'true',
  //       // interval: '2500',
  //       perPage: 3,
  //       perMove: 1,
  //       focus: "center",
  //       pagination: false,
  //       drag: false,

  //       classes: {
  //         prev: "splide__arrow--prev prev-arrow-prev",
  //         next: "splide__arrow--next prev-arrow-next",
  //       },
  //     }).mount();
  //   }
  // }, []);

  const start = useRef(false);

useEffect(() => {
  if (!start.current) {
    start.current = true;
    const splideOptions = {
      type: "loop",
      // autoplay: 'true',
      // interval: '2500',
      perMove: 1,
      focus: "center",
      pagination: false,
      drag: false,
      classes: {
        prev: "splide__arrow--prev prev-arrow-prev",
        next: "splide__arrow--next prev-arrow-next",
      },
    };

    // Define a function to update Splide options based on the screen size
    const updateSplideOptions = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth >= 1024) {
        splideOptions.perPage = 3; // Show 3 slides per page for large screens
      } else if (windowWidth >= 768) {
        splideOptions.perPage = 1; // Show 2 slides per page for medium screens
      } else {
        splideOptions.perPage = 1; // Show 1 slide per page for small screens (e.g., mobile)
      }
      return splideOptions;
    };

    const splide = new Splide(".splide", updateSplideOptions()).mount();

    // Update Splide options when the window size changes
    window.addEventListener("resize", () => {
      splide.options = updateSplideOptions();
      splide.refresh();
    });
  }
}, []);


  return (
    <>
      <div className="splide">
        <div className="splide__track">
          <div className="splide__list">
            <div className="splide__slide">
              <div className="img">
                <img src="01.webp" width="920" alt="" />
              </div>
            </div>

            <div className="splide__slide">
              <div className="img">
                <img src="02.webp" width="920" alt="" />
              </div>
            </div>

            <div className="splide__slide">
              <div className="img">
                <img src="03.webp" width="920" alt="" />
              </div>
            </div>

            <div className="splide__slide">
              <div className="img">
                <img src="06.webp" width="920" alt="" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
