import React from "react";
import { Button } from "@headlessui/react";
import Services from "../Components/Services";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

const Home = () => {
  const slides = [
    "/assets/hero-image.png",
    "/vite.svg",
    "/assets/hero-image.png",
    "/vite.svg",
  ];
  const [current,setCurrent]= useState(0);
  const prev = ()=>{
    let Index = 0 ;
    current === 0 ? Index = slides.length -1 : Index = current -1;
    setCurrent(Index) ;
  }
  const next = ()=>{
    let Index = 0 ;
    current === slides.length-1 ? Index = 0 : Index = current +1;
    setCurrent(Index) ;
  }
  

  return (
    <div className="flex flex-col gap-15 items-center ">
      <div
        style={{ backgroundImage: `url(${slides[current]})` }}
        className={`flex group overflow-hidden gap-4 w-full bg-cover bg-center bg-no-repeat duration-500 h-[70vh] md:h-[100vh] relative justify-center `}
      >
        <div className="absolute z-10 inset-0 bg-black opacity-35"></div>
        
          <div onClick={prev} className=" z-50 absolute top-[50%] left-5 md:left-10 cursor-pointer ">
            
            <ChevronLeft  size={30} className="bg-white/50 hover:bg-white rounded-full -translate-x-0 -translate-y-[-50%] "></ChevronLeft>
          </div>
          <div onClick={next} className=" z-50 absolute top-[51%] md:top-[50%] right-5 md:right-10 cursor-pointer">
            
            <ChevronRight  size={30} className="bg-white/50 hover:bg-white rounded-full "></ChevronRight>
          </div>
        
        <div className="absolute top-[20%] md:top-[35%] flex flex-col gap-7 z-20 text-white  ">
          <h1 className="text-5xl md:text-7xl text-center font-bold font-main ">
            Creating Unforgettable <br /> Memories
          </h1>
          <Button className="inline-flex font-main place-self-center items-center gap-2 rounded-md bg-[#404040] opacity-70 px-7 py-3 text-xl/6 font-semibold text-white shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-[#404040] data-hover:opacity-100 data-open:bg-gray-700">
            Get in touch
          </Button>
        </div>
      </div>
      <div className="flex flex-col px-8 lg:px-30 ">
        <div className="md:flex justify-between items-center">
          <img
            className="rounded-md w-full md:w-[40%]  lg:h-[43vh] "
            src="/assets/hero-image.png"
            alt=""
          />
          <div className="w-full mt-10 md:mt-0 md:w-[50%]">
            <p className="text-3xl mb-5 md:mt-0 font-main text-center md:text-left font-normal">About Us</p>
            <p className="text-lg font-secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
              placeat, possimus nulla recusandae excepturi ab cumque iure
              quisquam non qui. Ut, labore! Voluptatem laborum cupiditate veniam
              reiciendis obcaecati deleniti praesentium.
            </p>
          </div>
        </div>
      </div>
      <div className="flex gap-10 px-8 lg:px-30  flex-col">
        <p className="text-5xl font-main text-center font-semibold">
          Our Services
        </p>
        <div className=" grid gap-6 grid-cols-2 lg:grid-cols-3">
          <Services></Services>
          <Services></Services>
          <Services></Services>
          <Services></Services>
          <Services></Services>
          <Services></Services>
        </div>
      </div>
      <div className="flex gap-10 px-8 lg:px-30  flex-col">
        <p className="text-5xl font-main text-center font-semibold">Gallery</p>
        <div className=" md:flex gap-10">
          <div className="w-full lg:w-[50%] mb-20 lg:mb-0 gap-5">
            <div className="flex gap-5">
              <Services></Services>
              <Services></Services>
            </div>
            <div className="flex gap-5">
              <Services></Services>
              <Services></Services>
            </div>
          </div>
          <div className="flex-1 bg-[#404040] p-3">
            <form className="flex flex-col gap-2" action="">
              <label htmlFor="">Name</label>

              <input className="bg-gray-200  " type="text" />
              <label htmlFor="">Name</label>

              <input className="bg-gray-200  " type="text" />
              <label htmlFor="">Name</label>

              <input className="bg-gray-200  " type="text" />
              <label htmlFor="">Name</label>

              <input className="bg-gray-200  " type="text" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
