import React from "react";
import ImageGallery from "react-image-gallery";

// import stylesheet if you're not already using CSS @import
import "react-image-gallery/styles/css/image-gallery.css";
import "./CarouselSlider.css";

const renderVideo = (item) => {
  return (
    <div className="video-wrapper">
      <iframe src={item.embedUrl} allowFullScreen title="LDCE" width="100%" className="h-[200px] md:h-[450px]"/>
    </div>
  );
};

const images = [
  {
    original: "./Images/LDCE-WEBSITE-CAROUSEL (1).png",
    originalTitle: "SAFEGUARD YOUR FUTURE",
    description:
      "L.D.C.E HAS BEEN PROVIDING THE WORLD WITH PROFICIENT ENGINEERS SINCE 1952",
  },
  {
    original: "./Images/LDCE-WEBSITE-CAROUSEL (6).png",
    description:
      "3RD RANK IN ATAL RANKING OF INSTITUTIONS ON INNOVATION ACHIEVEMENTS ",
  },
  {
    original: "./Images/LDCE-WEBSITE-CAROUSEL (7).png",
    description:
      "LDCE WON THE NATIONAL AWARD FOR AN OUTSTANDING ENGINEERING INSTITUTE",
  },
  {
    original: "./Images/LDCE-WEBSITE-CAROUSEL (2).png",
    description:
      "SAHYOG : AN INDUSTRY-ACADEMIA MEET AS A PART OF ENGINEER'S DAY CELEBRATION",
  },
  {
    original: "./Images/LDCE-WEBSITE-CAROUSEL (3).png",
    description:
      "LDITE SHRI SANDEEP ENGINEER STANDS ON FORBES INDIA'S RICHEST LIST 2022",
  },
  {
    original: "./Images/LDCE-WEBSITE-CAROUSEL (4).png",
    description: "SAHITYA SARITA - A LITERATURE FEST",
  },
  {
    original: "./Images/LDCE-WEBSITE-CAROUSEL (5).png",
    description: "GLOBAL ALUMNI CONVENTION INAUGURATION DAY 6TH JANUARY 2023",
  },
  {
    original: "./Images/LDCE-WEBSITE-CAROUSEL (8).png",
    description:
      "L.D. COLLEGE OF ENGINEERING RANKED 1ST WITH 5 STAR RATING IN THE STATE OF GUJARAT",
  },
  
];


const CarouselSlider = () => {
  return (
    <>
      <div className="mt-[50px]">
        <ImageGallery items={images} showThumbnails={false} autoPlay />
      </div>
    </>
  );
};

const videos = [
  {
    embedUrl: "https://www.youtube.com/embed/zYE1-fi5fdo?si=lTo1W8A92PoQl7nC",
    // description: "Render custom slides within the gallery",
    renderItem: renderVideo.bind(this),
  },
  {
    embedUrl: "https://www.youtube.com/embed/ROsjhTigYT4?si=JBOD0UXIG8kmm-cj",
    // description: "Render custom slides within the gallery",
    renderItem: renderVideo.bind(this),
  },
  {
    embedUrl: "https://www.youtube.com/embed/tpaIFZXRhdA?si=lsTFjYNsYIDMDKty",
    // description: "Render custom slides within the gallery",
    renderItem: renderVideo.bind(this),
  },
  {
    embedUrl: "https://www.youtube.com/embed/XXg-K5wSB9w?si=8UmJgLwEOqoY6OJa",
    // description: "Render custom slides within the gallery",
    renderItem: renderVideo.bind(this),
  },
];

const CarouselSlider2 = () => {
  return (
    <>
      <div>
        <ImageGallery items={videos} showThumbnails={true} autoPlay={false} showNav={true} showPlayButton={false} showFullscreenButton={false} />
      </div>
    </>
  );
};

export {CarouselSlider2}

export default CarouselSlider;
