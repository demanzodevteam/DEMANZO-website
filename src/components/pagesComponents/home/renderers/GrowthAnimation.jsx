import { motion, AnimatePresence } from "framer-motion";
// import { API_URL, BASE_URL } from "../../../../config/urls";
// import axios from "axios";
import { useEffect, useState } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

const GrowthAnimation = ({category}) => {
      useEffect(() => {
  AOS.init();
}, []);
const columns = 3;

  // const [category, setCategory] = useState({
  //   name: '',
  //   slug: '',
  //   description: '',
  //   button: '',
  //   posts: [],
  //   image: '',
  // });

  const getLastRowPosts = (posts, columns = 3) => {
  const remainder = posts.length % columns;
  if (remainder === 0) return [];
  return posts.slice(-remainder);
};

const getNonLastRowPosts = (posts, columns = 3) => {
  const remainder = posts.length % columns;
  if (remainder === 0) return posts;
  return posts.slice(0, posts.length - remainder);
};
const nonLastRowPosts = getNonLastRowPosts(category.posts, columns);
const lastRowPosts = getLastRowPosts(category.posts, columns);
  // useEffect(() => {
  //   axios.get(API_URL + 'category/3')
  //     .then((response) => {
  //       setCategory(response.data);
  //     })
  //     .catch((error) => {
  //       console.error('Failed to fetch category:', error);
  //     });
  // }, []);

  return (
    <>
      <p className="text-[30px] md:text-[35px] lg:text-[50px] font-[600] text-center text-[#191d27]"
     data-aos="fade-up" data-aos-duration="2000" >{category.name}</p>
      <svg width="100%" height="18" viewBox="0 0 246 18" fill="none" xmlns="http://www.w3.org/2000/svg" >
        <path  d="M3 15C61.0465 4.16687 163.744 -2.79729 243 9.58344" stroke="url(#paint0_linear_1_401)" strokeWidth="6" strokeLinecap="round" />
        <defs>
          <linearGradient id="paint0_linear_1_401" x1="3" y1="15" x2="257.174" y2="2.13431" gradientUnits="userSpaceOnUse">
            <stop offset="100%" stopColor="#7D80E6" />
            <stop offset="1" stopColor="#CE7474" />
          </linearGradient>
        </defs>
      </svg>
      <p className="text-[20px] font-[600] text-center text-[#ff5f55] py-8" 
     data-aos="fade-up" data-aos-duration="2000">{category.description}</p>

     <div className="px-4 md:px-16 space-y-8">
  {/* Full rows */}
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
    {nonLastRowPosts.map((post, index) => (
      <ParticleCard key={index} post={post} />
    ))}
  </div>

  {/* Centered last row */}
  {lastRowPosts.length > 0 && (
    <div className="flex justify-center gap-8 flex-wrap">
      {lastRowPosts.map((post, index) => (
        <div key={`last-${index}`} className="w-full max-w-[400px]">
          <ParticleCard post={post} />
        </div>
      ))}
    </div>
  )}
</div>

    </>
  );
};

// Reusable ParticleCard Component
const ParticleCard = ({ post }) => {
  const [hovered, setHovered] = useState(false);
  const [particles, setParticles] = useState([]);
  const [origin, setOrigin] = useState({ x: 0, y: 0 });

  const gradientColors = [
    "#7D80E6",
    "#9286EB",
    "#A98CF0",
    "#C192F5",
    "#D998FA",
    "#F19EFF",
    "#CE7474",
    "#E98585"
  ];

  const Particle = ({ x, y, color }) => (
    <motion.span
      initial={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      animate={{ x, y, opacity: 0, scale: 0.5 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="absolute w-2 h-2 rounded-full pointer-events-none"
      style={{
        top: origin.y,
        left: origin.x,
        backgroundColor: color,
      }}
    />
  );

//   const triggerParticles = (e) => {
//     const rect = e.currentTarget.getBoundingClientRect();
//     const relX = e.clientX - rect.left;
//     const relY = e.clientY - rect.top;
//     setOrigin({ x: relX, y: relY });

//     const burst = Array.from({ length: 12 }).map((_, i) => ({
//       x: Math.random() * 120 - 60,
//       y: Math.random() * 120 - 60,
//       color: gradientColors[i % gradientColors.length],
//     }));

//     setParticles(burst);
//     setHovered(true);
//     setTimeout(() => setHovered(false), 700);
//   };

  return (
    <motion.div
    //   onMouseEnter={triggerParticles}
    //   onMouseMove={triggerParticles}
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
    //   whileHover={{ scale: 1.03, y: -5 }}
    //   transition={{ duration: 0.5 }}
    whileHover={{scale: 1.03, y: -5, boxShadow: "0 0 30px rgba(125, 128, 230, 0.5)" }}
  transition={{ duration: 0.4 }}
      className="relative rounded-xl shadow-2xl p-6 bg-white overflow-hidden "
    >
      <AnimatePresence>
        {hovered &&
          particles.map((p, idx) => (
            <Particle key={idx} x={p.x} y={p.y} color={p.color} />
          ))}
      </AnimatePresence>

      <p className="text-[19px] font-[600] text-[#191d27]">{post.title}</p>
      <p className="text-[15px] font-[400] text-[#616670] pt-3 pb-8">{post.content}</p>
      <hr className="text-[#ebebeb] pb-4" />
      <a className="text-[16px] font-[400] text-[#2d89bf]" href={post.link}>
        Learn More
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" className="inline" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M13.47 5.47a.75.75 0 0 1 1.06 0l6 6a.75.75 0 0 1 0 1.06l-6 6a.75.75 0 1 1-1.06-1.06l4.72-4.72H4a.75.75 0 0 1 0-1.5h14.19l-4.72-4.72a.75.75 0 0 1 0-1.06"
            clipRule="evenodd"
          />
        </svg>
      </a>
    </motion.div>
  );
};


export default GrowthAnimation;
