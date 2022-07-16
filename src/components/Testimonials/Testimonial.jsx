import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "Amir Mansha is great to work, very knowledgeable and always willing to find and or create solutions.",
    },
    {
      img: profilePic2,
      review:
        "Amir Mansha was great! Very easy to communicate, super fast delivery and changes! Will look forward to do more projects with him!",
    },
    {
      img: profilePic3,
      review:
        "Amazing job and brilliant work in a very short amount of time. Really i enjoyed my experience and would like to work again with him.",
    },
    {
      img: profilePic4,
      review:
        "Amir Mansha is a very skilled software website designer . He goes out of his way to make sure everything is up to the mark and your satisfaction . Value for money. Great choice",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div style={{textAlign:"center"}}>
        <span style={{fontWeight:"bold",fontSize:"2rem"}}>Client</span>  <span style={{color:"#FCA61F",fontWeight:"bold",fontSize:"2rem", paddingLeft:"3px"}}>Testimonials</span>
      </div>
      <Swiper
        // install Swiper modules
        
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index} >
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
