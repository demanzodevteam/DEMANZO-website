import { motion } from "framer-motion";
import BackGroundImg from "../../assets/Background-SEO-Traffic.jpg";
import rocketImg from "../../assets/rocket.png";
import skyImg from "../../assets/sky2.png";
import PerformanceChecklistForm from "./PerformanceCheckListForm";

const SalesContactTwo = ({ SectionData }) => {
  return (
    <div
      className="flex items-center justify-center px-4 py-16 bg-cover bg-center"
      style={{ backgroundImage: `url(${BackGroundImg.src})` }}
    >
      <div className="grid grid-cols-1 md:grid-cols-[1fr_0.6fr] gap-10 max-w-7xl w-full overflow-hidden p-8 lg:p-14">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center justify-center text-center gap-6 px-4"
        >
          <img
            src={rocketImg.src}
            alt="Rocket"
            className="hover:-translate-y-4 transition-all duration-500"
          />
          <h2 className="demanzo-form-heading">{SectionData.headings}</h2>

          {SectionData.list_items[0].map((item, index) => (
            <p key={index} className="demanzo-form-para-text">
              {item.para}
            </p>
          ))}

          <img
            src={skyImg.src}
            alt="Sky"
            className="hover:-translate-y-4 transition-all duration-500 mt-6"
          />
        </motion.div>

        {/* Right Side - Form */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="bg-white rounded-2xl shadow-lg p-6 lg:p-10"
        >
          <PerformanceChecklistForm />
        </motion.div>
      </div>
    </div>
  );
};

export default SalesContactTwo;

// import { motion, AnimatePresence } from "framer-motion";
// import { useState, useEffect } from "react";
// import CaptchaImg from "../../assets/Captcha.png";
// import BackGroundImg from "../../assets/Background-SEO-Traffic.jpg";
// import rocketImg from "../../assets/rocket.png";
// import skyImg from "../../assets/sky2.png";

// const SalesContactTwo = ({ SectionData }) => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     captcha: "",
//   });

//   const [errors, setErrors] = useState({});
//   const [submitted, setSubmitted] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//     if (value.trim() !== "") {
//       setErrors((prev) => ({ ...prev, [name]: false }));
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const newErrors = {};
//     Object.keys(formData).forEach((key) => {
//       if (!formData[key].trim()) newErrors[key] = true;
//     });

//     setErrors(newErrors);
//     if (Object.keys(newErrors).length > 0) return;

//     try {
//       const res = await fetch("/api/send-download-link", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ name: formData.name, email: formData.email }),
//       });

//       const data = await res.json();

//       if (data.success) {
//         setSubmitted(true);
//         setFormData({ name: "", email: "", captcha: "" });
//         setTimeout(() => setSubmitted(false), 3000);
//       } else {
//         alert("Failed to send email: " + data.message);
//       }
//     } catch (err) {
//       console.error(err);
//       alert("Something went wrong. Try again later.");
//     }
//   };

//   return (
//     <div
//       className="flex items-center justify-center px-4 py-16 bg-cover bg-center"
//       style={{ backgroundImage: `url(${BackGroundImg.src})` }}
//     >
//       <div className="grid grid-cols-1 md:grid-cols-[1fr_0.6fr] gap-10 max-w-7xl w-full overflow-hidden p-8 lg:p-14">
//         {/* Left Side */}
//         <motion.div
//           initial={{ opacity: 0, x: -100 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1 }}
//           className="flex flex-col items-center justify-center text-center gap-6 px-4"
//         >
//           <img
//             src={rocketImg.src}
//             alt="Rocket"
//             className="hover:-translate-y-4 transition-all duration-500"
//           />
//           <h2 className="text-3xl lg:text-4xl font-bold text-[#ffffff]">
//             {SectionData.headings}
//           </h2>

//           {SectionData.list_items[0].map((item, index) => (
//             <p key={index} className="text-[#979ba3] leading-8">
//               {item.para}
//             </p>
//           ))}

//           <img
//             src={skyImg.src}
//             alt="Sky"
//             className="hover:-translate-y-4 transition-all duration-500 mt-6"
//           />
//         </motion.div>

//         {/* Right Side - Form */}
//         <motion.div
//           initial={{ opacity: 0, y: 100 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="bg-white rounded-2xl shadow-lg p-6 lg:p-10"
//         >
//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div className="space-y-4">
//               <input
//                 name="name"
//                 type="text"
//                 value={formData.name}
//                 onChange={handleChange}
//                 placeholder="Your Name"
//                 required
//                 className={`w-full border px-4 py-3 text-[16px] text-[#050607] rounded-md focus:outline-none ${errors.name ? "border-red-500" : "border-[#e7e7e7] hover:border-black focus:border-black"
//                   }`}
//               />

//               <input
//                 name="email"
//                 type="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 placeholder="Your Email"
//                 required
//                 className={`w-full border px-4 py-3 text-[16px] text-[#050607] rounded-md focus:outline-none ${errors.email ? "border-red-500" : "border-[#e7e7e7] hover:border-black focus:border-black"
//                   }`}
//               />

//               <div className="flex flex-col gap-2">
//                 <label htmlFor="captcha" className="text-sm text-[#333]">
//                   Captcha
//                 </label>
//                 <div className="flex items-center gap-4">
//                   <img
//                     src={CaptchaImg.src}
//                     alt="Captcha"
//                     className="w-32 h-10 object-contain"
//                   />
//                   <input
//                     name="captcha"
//                     type="text"
//                     value={formData.captcha}
//                     onChange={handleChange}
//                     placeholder="Enter Captcha"
//                     required
//                     className={`w-full border px-4 py-3 text-[16px] text-[#050607] rounded-md focus:outline-none ${errors.captcha ? "border-red-500" : "border-[#e7e7e7] hover:border-black focus:border-black"
//                       }`}
//                   />
//                 </div>
//               </div>
//             </div>

//             <div className="flex flex-col items-center gap-4">
//               <motion.button
//                 type="submit"
//                 whileHover={{
//                   scale: 1.05,
//                   boxShadow: "0px 0px 16px rgba(0, 123, 255, 0.6)",
//                 }}
//                 whileTap={{ scale: 0.95 }}
//                 transition={{ type: "spring", stiffness: 300 }}
//                 className="w-full lg:w-auto text-white bg-[#0A6AAD] px-6 py-3 rounded-full hover:bg-[#f5a31c] transition"
//               >
//                 Download Now
//               </motion.button>

//               <AnimatePresence>
//                 {submitted && (
//                   <motion.div
//                     initial={{ opacity: 0, y: 10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0 }}
//                     className="text-green-600 font-medium text-center"
//                   >
//                     ✅ Email Send successfully!
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>
//           </form>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default SalesContactTwo;
