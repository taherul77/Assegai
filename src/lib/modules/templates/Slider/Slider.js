"use client"
import React from "react";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import image2 from "@/lib/assets/slider/baner.jpg"
import image3 from "@/lib/assets/slider/baner.jpg"
import image4 from "@/lib/assets/slider/baner.jpg"
import image1 from "@/lib/assets/slider/baner.jpg"


const Slider = () => {
  return (
    <div className="relative text-white text-[20px] w-full mx-auto">
    <Carousel
        emulateTouch={true}
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
      
    >
        <div>
            <Image height={1000} width={2800}
                alt=""
                src={image1}
                className="aspect-[16/10] md:aspect-auto object-cover"
            />
           
        </div>

       

        <div>
            <Image height={1000} width={2800}
                alt=""
                src={image2}
                className="aspect-[16/10] md:aspect-auto object-cover"
            />
            
        </div>
        <div>
            <Image height={1000} width={2800}
                alt=""
                src={image3}
                className="aspect-[16/10] md:aspect-auto object-cover"
            />
            
        </div>
        <div>
            <Image height={1000} width={2800}
                alt=""
                src={image4}
                className="aspect-[16/10] md:aspect-auto object-cover"
            />
            
        </div>
      
    </Carousel>
</div>
  );
};

export default Slider;
