import React from "react";
import { IoIosPricetags } from "react-icons/io";
import { IoLocation } from "react-icons/io5";
import grid_bg from "../../assets/images/grid_bg.png";
import grid_img1 from "../../assets/images/grid_img1.jpeg";
import grid_img2 from "../../assets/images/grid_img2.jpeg";
import grid_img3 from "../../assets/images/grid_img3.jpeg";


function OurServies() {
  return (
    <div className="flex min-h-screen w-full flex-col text-center gap-8 relative">
       <img
          src={grid_bg}
          alt="grid background"
          className=" absolute h-full w-full z-[-1] object-fill top-0"
        />
      <div className="w-1/3 mx-auto flex flex-col align-middle gap-4">
        <div className="w-fit mx-auto">
          <div className="bg-gradient-to-r from-[#4AD0ED] to-[#005AAD] bg-clip-text text-transparent font-bold w-fit">
            OUR SERVICES
          </div>
          <div className="bg-gradient-to-r from-[#4AD0ED] to-transparent h-[3px]"></div>
        </div>
        <div className="text-3xl">Secure Parking and Amenities</div>
        <div className="text-sm">
          Book a parking spot for your truck with ease
        </div>
      </div>

      <div>
        <GridOfBoxes />
      </div>
    </div>
  );
}

function GridOfBoxes() {
  return (
    <div>
      <div className="grid grid-cols-4 grid-rows-3 gap-4 mx-[20%] text-left">
        {/* Element 1: Top Left (2x2) */}
        <div className="col-span-2 row-span-2 bg-white border-2 border-gray-300 rounded-lg flex flex-col shadow overflow-hidden">
          <div className="flex flex-col gap-6 p-6 h-1/2">
            <div className="rounded-full py-[2px] px-3 bg-[#FF3030] text-sm text-white w-fit">
              MOST POPULAR
            </div>
            <div className="font-bold text-2xl">
              24/7 Service for Truck Owners
            </div>
            <div className="text-sm leading-[1]">
              We provide secure parking facilities with various amenities for
              truck owners.
            </div>
            <button className="border-2 rounded-md bg-transparent text-[#0052A9] outline-none px-4 py-1 border-[#0052A9] w-fit">
              BOOK NOW!
            </button>
          </div>
          <img src={grid_img1} className="h-1/2 bg-slate-100 object-cover" alt="grid img1" />
        </div>

        {/* Element 2: Top Right (2x1) */}
        <div className="col-start-3 col-span-2 row-span-1 bg-white border-2 border-gray-300 rounded-lg flex shadow overflow-hidden">
          <div className="flex flex-col gap-6 p-6 w-1/2">
            <div className="rounded-full py-[2px] px-3 bg-[#FF8730] text-sm text-white w-fit">
              FEXIBLE
            </div>
            <div className="font-bold text-xl">
              Customizable Parking Solutions for Truck Owners
            </div>
            <div className="text-sm leading-[1]">
              Tailor-made parking options to suit your needs.
            </div>
            <button className="border-2 rounded-md bg-transparent text-[#0052A9] outline-none px-4 py-1 border-[#0052A9] w-fit">
              BOOK NOW!
            </button>
          </div>
          <img src={grid_img2} className="w-1/2 h-full bg-slate-100 object-cover" alt="grid img2" />
        </div>

        {/* Element 3: Second Row Right (2x2) */}
        <div className="col-start-3 row-start-2 col-span-2 row-span-2 bg-white border-2 border-gray-300 rounded-lg flex flex-col shadow overflow-hidden">
          <div className="flex flex-col gap-6 p-6 h-1/2">
            <div className="rounded-full py-[2px] px-3 bg-[#004699] text-sm text-white w-fit">
              HOT
            </div>
            <div className="font-bold text-2xl">
              Secure Parking and Amenities
            </div>
            <div className="text-sm leading-[1]">
              We provide secure parking facilities with various amenities for
              truck owners.
            </div>
            <button className="border-2 rounded-md bg-transparent text-[#0052A9] outline-none px-4 py-1 border-[#0052A9] w-fit">
              BOOK NOW!
            </button>
          </div>
          <img src={grid_img3} className="h-1/2 bg-slate-100 object-cover" alt="grid img3" />
        </div>

        {/* Element 4: Bottom Left (1x1) */}
        <div className="col-span-1 row-start-3 bg-white border-2 border-gray-300 rounded-lg flex flex-col gap-6 shadow overflow-hidden">
          <div className="flex flex-col gap-6 p-6">
            <div className="text-5xl">
              <IoLocation />
            </div>
            <div className="font-bold text-xl">
              Convenient Parking Solutions for Truck Owners
            </div>
            <div className="text-sm leading-[1]">
              Book a parking spot for your truck hassle-free.
            </div>
            <button className="border-2 rounded-md bg-transparent text-[#0052A9] outline-none px-4 py-1 border-[#0052A9] w-fit">
              BOOK NOW!
            </button>
          </div>
        </div>

        {/* Element 5: Bottom Right (1x1) */}
        <div className="col-start-2 col-span-1 row-start-3 bg-white border-2 border-gray-300 rounded-lg flex flex-col gap-6 shadow overflow-hidden">
          <div className="flex flex-col gap-6 p-6">
            <div className="text-5xl">
              <IoIosPricetags />
            </div>
            <div className="font-bold text-xl">
              Affordable Parking Options for Truck Owners
            </div>
            <div className="text-sm leading-[1]">
              Secure parking facilities at competitive prices.
            </div>
            <button className="border-2 rounded-md bg-transparent text-[#0052A9] outline-none px-4 py-1 border-[#0052A9] w-fit">
              BOOK NOW!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurServies;
