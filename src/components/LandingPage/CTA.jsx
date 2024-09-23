import React, { forwardRef } from "react";
import truck_parked from "../../assets/images/truck_parked.png";
import truck from "../../assets/images/truck.png";

const CTA = forwardRef(({ leftTextRef, rightImgRef }, ref) => {
  return (
    <div
      className="flex h-screen w-full flex-col justify-center overflow-hidden"
      ref={ref}
    >
      <div className="bg-gradient-to-l from-[#4AD0EDCC] to-[#005AADCC] py-10 relative">
        <img
          src={truck_parked}
          alt="truck background"
          className=" absolute h-full w-full z-[-1] object-cover top-0"
        />
        <div
          className="w-1/2 mx-24 flex flex-col justify-center text-white gap-5"
          ref={leftTextRef}
        >
          <div className=" text-[60px] font-bold leading-[1]">
            Book Your{" "}
            <span className="text-yellow-500 text-transparent">
              Truck Parking
            </span>{" "}
            Spot
          </div>
          <div>
            Conveniently reserve a secure parking spot for your truck on our
            website.
          </div>

          <button className="border-2 rounded-md bg-transparent text-white outline-none px-4 py-1 border-white w-fit">
            BOOK NOW!
          </button>
        </div>
        <img
          src={truck}
          alt="truck"
          className=" absolute h-[150%] w-1/2 object-contain top-[-50%] right-0"
          ref={rightImgRef}
        />
      </div>
    </div>
  );
});

export default CTA;
