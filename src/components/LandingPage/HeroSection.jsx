import React, { forwardRef } from "react";
import logo from "../../assets/images/logo.png";
import truck_parked from "../../assets/images/truck_parked.png";

const Headerbar = forwardRef((props, ref) => {
  return (
    <div
      className="flex flex-row absolute w-full top-0 left-0 h-20 border-b-[1px] border-[#FFFFFF66]"
      ref={ref}
    >
      <div className="w-[30%] flex justify-center align-middle py-3">
        <img src={logo} alt="logo" />
      </div>
      <div className="w-[40%] flex align-middle py-7">
        <nav className="w-full flex gap-4 align-middle">
          <a href="/" className="text-white no-underline h-min">
            <div>Home</div>
          </a>
          <a href="/" className="text-white no-underline h-min">
            <div>Services</div>
          </a>
          <a href="/" className="text-white no-underline h-min">
            <div>Contact us</div>
          </a>
          <a href="/" className="text-white no-underline h-min">
            <div>About us</div>
          </a>
        </nav>
      </div>
      <div className="w-[30%] flex gap-6 justify-center align-middle  py-5">
        <button className="border-2 rounded-md bg-transparent text-white outline-none px-4 py-1 border-white">
          Sign up
        </button>
        <button className="border-2 rounded-md bg-[#005AAD] text-white outline-none px-4 py-1 border-transparent">
          Log in
        </button>
      </div>
    </div>
  );
});

const HeroSection = forwardRef(({ headerRef, heroBgRef }, ref) => {
  return (
    <div
      className="flex h-screen w-full flex-col relative overflow-hidden"
      ref={ref}
    >
      <Headerbar ref={headerRef} />
      <img
        src={truck_parked}
        alt="truck background"
        className=" absolute h-5/6 w-full z-[-1] object-cover"
        ref={heroBgRef}
      />
      <div className="flex h-5/6 w-full bg-gradient-to-r from-[#00000088] to-transparent">
        <div className="w-1/2 mx-24 flex flex-col justify-center text-white gap-5">
          <div className=" text-[60px] font-bold leading-[1]">
            Book Your{" "}
            <span className="bg-gradient-to-r from-[#ff5252] to-pink-500 bg-clip-text text-transparent">
              Truck Parking Spot
            </span>{" "}
            Online Today!
          </div>
          <div>
            With Bajwa Truck, you can easily book a truck parking spot online.
            Say goodbye to the hassle of searching for parking.
          </div>

          <button className="rounded-md bg-gradient-to-r from-[#4AD0ED] to-[#005AAD] text-white outline-none px-6 py-2 border-none w-fit">
            Learn More
          </button>
        </div>
      </div>
      <BottomBox />
    </div>
  );
});

function BottomBox() {
  return (
    <div className="w-2/3 flex flex-row p-4 gap-6 border-2 rounded-lg absolute bottom-0 left-1/2 translate-x-[-50%] translate-y-[-50%] bg-white">
      <div className="bg-[#005AAD] rounded-t-xl absolute top-0 left-1/2 translate-x-[-50%] translate-y-[calc(-100%-2px)] text-white px-10 pt-2 pb-1 box-border">
        Check Spot
      </div>
      <div className="flex flex-col grow">
        <div className="text-lg font-bold">Time</div>
        <div className="flex gap-6">
          <div className="flex flex-col gap-2 grow">
            <div className="">From</div>
            <div className="">
              <input
                type="date"
                className="border border-gray-600 rounded p-2 h-8 outline-none w-full"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 grow">
            <div className="">To</div>
            <div className="">
              <input
                type="date"
                className="border border-gray-600 rounded p-2 h-8 outline-none w-full"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col grow">
        <div className="text-lg font-bold">Location</div>
        <div className="flex gap-6">
          <div className="flex flex-col gap-2 grow">
            <div className="">Select Location</div>
            <div className="border border-gray-600 rounded p-1 h-8">
              <select className="bg-white border-none outline-none w-full">
                <option value="aa">Kolkata</option>
                <option value="ab">Mumbai</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col grow">
        <div className="text-lg font-bold">Type of Truck</div>
        <div className="flex gap-6">
          <div className="flex flex-col gap-2 grow">
            <div className="">Select Type</div>
            <div className="border border-gray-600 rounded p-1 h-8">
              <select className="bg-white border-none outline-none w-full">
                <option value="aa">Lorem Ipsum</option>
                <option value="ab">Ipsum Lorem</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-end">
        <button className="rounded-md bg-[#005AAD] text-white outline-none px-4 py-1 border-transparent">
          Check
        </button>
      </div>
    </div>
  );
}

export default HeroSection;
