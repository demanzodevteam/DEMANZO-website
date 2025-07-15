// src/components/AnimatedCounterSection.jsx
import React, { useEffect, useRef } from "react";
import { API_URL } from "../../config/urls";

const AnimatedCounterSection = ({ pageData }) => {
  const list = pageData?.list_items?.[0] || [];
  const counterRefs = useRef([]);

  useEffect(() => {
    const animateCount = (el, target) => {
      const speed = 200;
      const increment = Math.ceil(target / speed);
      let count = 0;

      const update = () => {
        if (count < target) {
          count += increment;
          el.innerText = count > target ? target : count;
          requestAnimationFrame(update);
        } else {
          el.innerText = target;
        }
      };

      update();
    };

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const target = +el.getAttribute("data-target");
            animateCount(el, target);
            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.5 }
    );

    counterRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      counterRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section className="bg-gradient-to-r from-[#0A0F3C] to-[#0D1B4A] py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {list.map((item, index) => (
            <div
              key={index}
              className="w-full bg-[#1f2f4b] p-5 hover:bg-transparent border border-blue-400 rounded-md text-center text-white"
            >
              <div className="text-center">
                <div
                  ref={(el) => (counterRefs.current[index] = el)}
                  className="text-[65px] font-bold text-[#ff5f55]"
                  data-target={item?.heading}
                >
                  0
                </div>
                <h5 className="demanzo-h2 text-white tracking-wide">
                  {item?.para}
                </h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnimatedCounterSection;
