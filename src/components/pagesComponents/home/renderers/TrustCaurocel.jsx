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

  if (!mounted || !category) return null;

  return (
    <>
    <div>
      
    </div>
      {!category?.heading &&
        category?.description.split(/\r?\n/).map((line, index) => (
          <p
            key={index}
            data-aos="fade-up"
            className={`text-[30px] lg:text-[40px] font-[600] text-center leading-tight ${
              index === 0 ? "text-[#191d27]" : "text-[#f15a29]"
            }`}
          >
            {line}
          </p>
        ))}
               <TrustCaurocel client:visible />
    </>
  );
}
