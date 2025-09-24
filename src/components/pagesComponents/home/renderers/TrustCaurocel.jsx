'use client';

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "swiper/css";
import "../../../styles.css";
import TrustCaurocel from "../../../common/WebDevTrustCaurocel";

export default function TrustCaurocelHome({ category }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 2000 });
    setMounted(true);
  }, []);

  if (!mounted) return null; // delay only until mounted

  return (
    <>
      {/* <div className="pb-5">
        {category?.heading ? (
          <h2
            data-aos="fade-up"
            className="text-[30px] lg:text-[40px] font-[600] text-center leading-tight text-[#191d27]"
          >
            {category.heading}
          </h2>
        ) : (
          category?.description
            ?.split(/\r?\n/)
            .map((line, index) => (
              <h2
                key={index}
                data-aos="fade-up"
                className={`text-[30px] lg:text-[40px] font-[600] text-center leading-tight ${
                  index === 0 ? "text-[#191d27]" : "text-[#f15a29]"
                }`}
              >Trusted by IT teams and
SaaS leaders across industries
                {line}
              </h2>
            ))
        )}
      </div> */}
      
<div className="pb-5 text-center">
  <h2
    data-aos="fade-up"
    className="text-[30px] lg:text-[40px] font-[600] leading-tight text-[#191d27]"
  >
    Trusted By IT Teams And
  </h2>
  <h2
    data-aos="fade-up"
    className="text-[30px] lg:text-[40px] font-[600] leading-tight text-[#f15a29]"
  >
    SaaS Leaders Across Industries
  </h2>
</div>


      {/* Normal React usage here */}
      <TrustCaurocel />
    </>
  );
}
