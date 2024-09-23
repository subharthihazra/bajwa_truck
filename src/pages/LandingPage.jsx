import React, { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeroSection from "../components/LandingPage/HeroSection";
import HowTo from "../components/LandingPage/HowTo";
import OurServices from "../components/LandingPage/OurServices";
import CTA from "../components/LandingPage/CTA";

gsap.registerPlugin(ScrollTrigger);

function LandingPage() {
  const HeroSectionRef = useRef(null);
  const HowToRef = useRef(null);
  const OurServicesRef = useRef(null);
  const CTARef = useRef(null);

  const HowToRefs = useRef([]);
  const boxRefs = useRef([]);
  const headerRef = useRef(null);
  const heroBgRef = useRef(null);
  const leftTextRef = useRef(null);
  const rightImgRef = useRef(null);

  const howToAnimArr = [
    {
      x: 1,
    },
    {
      x: 0,
    },
    {
      x: -1,
    },
  ];
  const boxAnimArr = [
    {
      x: 0,
      y: -1,
    },
    {
      x: 1,
      y: 0,
    },
    {
      x: 0,
      y: 1,
    },
    {
      x: -1,
      y: 0,
    },
    {
      x: -1,
      y: 0,
    },
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current, {
        opacity: 0,
        y: -200,
        duration: 1,
        ease: "back.out(2)",
        scrollTrigger: {
          trigger: HeroSectionRef.current,
          start: "center 70%",
          end: "center 20%",
          scroller: "body",
        },
      });
      gsap.from(heroBgRef.current, {
        opacity: 0,
        y: 300,
        duration: 1,
        ease: "back.out(2)",
        scrollTrigger: {
          trigger: HeroSectionRef.current,
          start: "center 70%",
          end: "center 20%",
          scroller: "body",
        },
      });

      HowToRefs.current.forEach((item, index) => {
        gsap.from(item, {
          opacity: 0,
          duration: 1,
          ease: "back.out(2)",
          x: howToAnimArr[index].x * 300,
          scrollTrigger: {
            trigger: HowToRef.current,
            start: "40% 70%",
            end: "40% 20%",
            scroller: "body",
          },
        });
      });

      boxRefs.current.forEach((box, index) => {
        gsap.from(box, {
          opacity: 0,
          duration: 1,
          ease: "back.out(2)",
          x: boxAnimArr[index].x * 300,
          y: boxAnimArr[index].y * 300,
          scrollTrigger: {
            trigger: OurServicesRef.current,
            start: "20% 70%",
            end: "20% 20%",
            scroller: "body",
          },
        });
      });

      gsap.from(leftTextRef.current, {
        opacity: 0,
        x: -200,
        duration: 1,
        scrollTrigger: {
          trigger: CTARef.current,
          start: "center 70%",
          end: "center 20%",
          scroller: "body",
        },
      });
      gsap.from(rightImgRef.current, {
        opacity: 0,
        x: 200,
        duration: 1,
        scrollTrigger: {
          trigger: CTARef.current,
          start: "center 70%",
          end: "center 20%",
          scroller: "body",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="flex flex-col gap-12">
      <HeroSection
        ref={HeroSectionRef}
        heroBgRef={heroBgRef}
        headerRef={headerRef}
      />
      <HowTo ref={HowToRef} HowToRefs={HowToRefs} />
      <OurServices ref={OurServicesRef} boxRefs={boxRefs} />
      <CTA ref={CTARef} leftTextRef={leftTextRef} rightImgRef={rightImgRef} />
    </div>
  );
}

export default LandingPage;
