import React, { forwardRef } from "react";
import { IoIosArrowRoundDown } from "react-icons/io";
import { IoSearch, IoLocation } from "react-icons/io5";
import { SiTicktick } from "react-icons/si";
import points_bg from "../../assets/images/points_bg.png";

const HowTo = forwardRef(({ HowToRefs }, ref) => {
  return (
    <div
      className="flex min-h-screen w-full flex-col relative text-center overflow-hidden"
      ref={ref}
    >
      <img
        src={points_bg}
        alt="grid background"
        className="absolute h-full w-full object-contain z-[-1] top-0"
      />
      <div className="w-1/3 mx-auto flex flex-col align-middle gap-4">
        <div className="w-fit mx-auto">
          <div className="bg-gradient-to-r from-[#4AD0ED] to-[#005AAD] bg-clip-text text-transparent font-bold w-fit">
            HOW TO
          </div>
          <div className="bg-gradient-to-r from-[#4AD0ED] to-transparent h-[3px]"></div>
        </div>
        <div className="text-3xl">
          Discover How Easy It Is to Book a Parking Spot for Your Truck
        </div>
      </div>
      <BannerOfPoints HowToRefs={HowToRefs} />
      <div className="mx-auto w-fit">
        <button className="rounded-md bg-gradient-to-r from-[#4AD0ED] to-[#005AAD] text-white outline-none px-6 py-2 border-none w-fit">
          Learn More
        </button>
      </div>
    </div>
  );
});

function BannerOfPoints({ HowToRefs }) {
  return (
    <div className="flex flex-col mt-6 mb-56 justify-center relative mx-5">
      <div className="flex flex-row justify-around ">
        <div
          className="flex flex-col"
          ref={(el) => (HowToRefs.current[0] = el)}
        >
          <div className="w-[300px] text-center outlined-text anton-regular text-[200px] font-bold top-0 text-white">
            01
          </div>
          <div className="absolute top-[180px] w-[300px] h-[300px] rounded-lg border-2 border-gray-300 bg-gradient-to-br from-[#C1DFFF] to-white flex flex-col gap-4 p-5 justify-center">
            <div className="mx-auto text-5xl">
              <IoSearch />
            </div>
            <div className="font-bold text-xl">
              Step 1: Find Available Parking Spots
            </div>
            <div className="text-sm leading-[1]">
              Browse through our website to find a list of available parking
              spots for your truck.
            </div>
            <div className="mx-auto text-xl">
              <IoIosArrowRoundDown />
            </div>
            <div className="font-bold text-lg text-[#0054AE]">Book</div>
          </div>
        </div>
        <div
          className="flex flex-col"
          ref={(el) => (HowToRefs.current[1] = el)}
        >
          <div className="w-[300px] text-center outlined-text anton-regular text-[200px] font-bold top-0 text-white">
            02
          </div>
          <div className="absolute top-[180px] w-[300px] h-[300px] rounded-lg border-2 border-gray-300 bg-gradient-to-br from-[#C1FFE1] to-white flex flex-col gap-4 p-5 justify-center">
            <div className="mx-auto text-5xl">
              <SiTicktick />
            </div>
            <div className="font-bold text-xl">
              Step 2: Reserve Your Preferred Spot
            </div>
            <div className="text-sm leading-[1]">
              Select your preferred parking spot and make a reservation through
              our easy-to-use booking system.
            </div>
            <div className="mx-auto text-xl">
              <IoIosArrowRoundDown />
            </div>
            <div className="font-bold text-lg text-[#008F4B]">Reserve</div>
          </div>
        </div>
        <div
          className="flex flex-col"
          ref={(el) => (HowToRefs.current[2] = el)}
        >
          <div className="w-[300px] text-center outlined-text anton-regular text-[200px] font-bold top-0 text-white">
            03
          </div>
          <div className="absolute top-[180px] w-[300px] h-[300px] rounded-lg border-2 border-gray-300 bg-gradient-to-br from-[#FFEEC1] to-white flex flex-col gap-4 p-5 justify-center">
            <div className="mx-auto text-5xl">
              <IoLocation />
            </div>
            <div className="font-bold text-xl">
              Step 3: Arrive at the Parking Location
            </div>
            <div className="text-sm leading-[1]">
              Drive your truck to the designated parking location and park in
              your reserved spot.
            </div>
            <div className="mx-auto text-xl">
              <IoIosArrowRoundDown />
            </div>
            <div className="font-bold text-lg text-[#976C00]">Park</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowTo;
