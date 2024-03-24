import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Art.css";

// ===============
//    IMAGES
// ===============

import galleryImage1 from "./assets/GalleryPhotos/GalleryImage1.jpg";
import galleryImage2 from "./assets/GalleryPhotos/GalleryImage2.jpg";
import galleryImage3 from "./assets/GalleryPhotos/GalleryImage3.jpg";
import galleryImage4 from "./assets/GalleryPhotos/GalleryImage4.jpg";
import galleryImage5 from "./assets/GalleryPhotos/GalleryImage5.jpg";
import galleryImage6 from "./assets/GalleryPhotos/GalleryImage6.jpg";
import galleryImage7 from "./assets/GalleryPhotos/GalleryImage7.jpg";
import galleryImage8 from "./assets/GalleryPhotos/GalleryImage8.jpg";
import galleryImage9 from "./assets/GalleryPhotos/GalleryImage9.jpg";
import galleryImage10 from "./assets/GalleryPhotos/GalleryImage10.jpg";
import galleryImage11 from "./assets/GalleryPhotos/GalleryImage11.jpg";
import galleryImage12 from "./assets/GalleryPhotos/GalleryImage12.jpg";
import galleryImage13 from "./assets/GalleryPhotos/GalleryImage13.jpg";
import galleryImage14 from "./assets/GalleryPhotos/GalleryImage14.jpg";
import galleryImage15 from "./assets/GalleryPhotos/GalleryImage15.jpg";
import galleryImage16 from "./assets/GalleryPhotos/GalleryImage16.jpg";

function Art() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    smallerDesktop: {
      breakpoint: { max: 2000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    smallTablet: {
      breakpoint: { max: 800, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 500, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <div className="artSection" id="Art">
        <h2 className="artSection">My Work</h2>
        <div className="carCont">
          <Carousel
            additionalTransfrom={0}
            arrows
            autoPlay
            autoPlaySpeed={2500}
            centerMode={false}
            className=""
            containerClass="carouselContainer"
            dotListClass=""
            focusOnSelect={false}
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={responsive}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots
            sliderClass=""
            slidesToSlide={1}
          >
            <img src={galleryImage1} className="image" />
            <img src={galleryImage2} className="image" />
            <img src={galleryImage3} className="image" />
            <img src={galleryImage4} className="image" />
            <img src={galleryImage5} className="image" />
            <img src={galleryImage6} className="image" />
            <img src={galleryImage7} className="image" />
            <img src={galleryImage8} className="image" />
            <img src={galleryImage9} className="image" />
            <img src={galleryImage10} className="image" />
            <img src={galleryImage11} className="image" />
            <img src={galleryImage12} className="image" />
            <img src={galleryImage13} className="image" />
            <img src={galleryImage14} className="image" />
            <img src={galleryImage15} className="image" />
            <img src={galleryImage16} className="image" />
          </Carousel>
        </div>
      </div>
    </>
  );
}
export default Art;
