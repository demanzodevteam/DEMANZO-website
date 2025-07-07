import { useEffect, useState } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

const WhyChooseDemanzo = ({data}) => {
 
 
       useEffect(() => {
   AOS.init();
 }, []);

  return (
    <>

      <div className="flex flex-col justify-center gap-4 py-8 lg:py-20">
        <p className="text-[40px] font-[700] text-[#191d27]" data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom" data-aos-duration="2000">
          {data?.title}
        </p>
        <p
          className="text-[16px] font-[500] text-[#616670] leading-relaxed" data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom" data-aos-duration="2000"
        >{data.content}</p>
      </div>
      {/* <HeroTwoAnnimation image={data.image} /> */}

    </>

  );
};

export default WhyChooseDemanzo;
