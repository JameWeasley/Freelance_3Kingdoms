import React, { useEffect, useRef } from 'react'
import Splide from '@splidejs/splide';
import '@splidejs/splide/css';

export default function headInfo() {

  const start = useRef(false)

  useEffect(() => {
    if (!start.current) {
      start.current = true
      new Splide('.splide', {
        type: 'loop',
        perPage: 3,
        perMove: 1,
        focus: 'center',
        pagination: false,
        drag: false,

        classes: {
          prev: 'splide__arrow--prev prev-arrow-prev',
          next: 'splide__arrow--next prev-arrow-next'
        }
      }).mount();
    }
  }, [])


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
  )
}
