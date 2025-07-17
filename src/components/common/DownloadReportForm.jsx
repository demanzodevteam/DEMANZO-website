// import { motion, AnimatePresence } from "framer-motion";
// import { useState, useEffect } from "react";
// import { FORM_URL } from "../../config/urls"; // Make sure this is your correct CF7 API endpoint

// function useHasMounted() {
//   const [hasMounted, setHasMounted] = useState(false);
//   useEffect(() => {
//     setHasMounted(true);
//   }, []);
//   return hasMounted;
// }

// export default function DownloadReportForm() {
//   const hasMounted = useHasMounted();

//   const [form, setForm] = useState({
//     "text-517": "", // "Your Name"
//     "email-875": "", // "Email"
//   });

//   const [errors, setErrors] = useState({});
//   const [submitted, setSubmitted] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm({ ...form, [name]: value });
//     if (value.trim() !== "") {
//       setErrors((prev) => ({ ...prev, [name]: false }));
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const newErrors = {};
//     Object.keys(form).forEach((field) => {
//       if (!form[field] || form[field].trim() === "") {
//         newErrors[field] = true;
//       }
//     });

//     setErrors(newErrors);
//     if (Object.keys(newErrors).length > 0) return;

//     const formData = new FormData();
//     Object.entries(form).forEach(([key, val]) => {
//       formData.append(key, val);
//     });

//     // ✅ Update these values based on your real form rendered HTML
//     formData.append("_wpcf7", "1110"); // Your CF7 Form ID
//     formData.append("_wpcf7_version", "5.9.4");
//     formData.append("_wpcf7_locale", "en_US");
//     formData.append("_wpcf7_unit_tag", "wpcf7-f1083-p12-o1"); // ⚠️ Must match frontend
//     formData.append("_wpcf7_container_post", "12"); // ⚠️ Must match post/page ID where form is rendered

//     try {
//       const res = await fetch(`${FORM_URL}1110/feedback`, {
//         method: "POST",
//         body: formData,
//       });

//       const data = await res.json();

//       if (data.status === "mail_sent") {
//         const audio = new Audio("/notification.mp3");
//         audio.play();

//         setSubmitted(true);
//         setForm({ "text-517": "", "email-875": "" });
//         setTimeout(() => setSubmitted(false), 3000);
//       } else {
//         alert("Submission failed: " + data.message);
//       }
//     } catch (err) {
//       alert("Network error. Please try again.");
//       console.error(err);
//     }
//   };

//   const inputVariants = {
//     shake: {
//       x: [0, -10, 10, -10, 10, 0],
//       transition: { duration: 0.4 },
//     },
//   };

//   const renderInput = (name, type, label) => (
//     <motion.div
//       variants={inputVariants}
//       animate={errors[name] ? "shake" : ""}
//       className="relative"
//     >
//       <input
//         name={name}
//         type={type}
//         value={form[name]}
//         onChange={handleChange}
//         required
//         placeholder=" "
//         className={`peer w-full border px-4 pt-6 pb-2 text-[#050607] text-[16px] font-[400] ${
//           errors[name] ? "border-red-500" : "border-[#e7e7e7]"
//         } focus:border-black focus:outline-none rounded-md`}
//       />
//       <label
//         className="absolute left-4 top-4 text-[#050607] text-[14px] font-[400] transition-all duration-200 ease-in-out
//         peer-placeholder-shown:top-4 peer-placeholder-shown:text-[16px] peer-placeholder-shown:text-gray-500
//         peer-focus:top-1 peer-focus:text-[12px] peer-focus:text-black
//         peer-valid:top-1 peer-valid:text-[12px] peer-valid:text-black"
//       >
//         {label}
//       </label>
//     </motion.div>
//   );

//   return (
//     <motion.div
//       {...(hasMounted
//         ? {
//             initial: { opacity: 0, y: 300 },
//             whileInView: { opacity: 1, y: 0 },
//             transition: { duration: 1 },
//           }
//         : {})}
//       className="rounded-3xl bg-white shadow px-6 lg:px-12 py-8 relative"
//     >
//       <form onSubmit={handleSubmit} className="space-y-6">
//         <div className="grid grid-cols-1 gap-6">
//           {renderInput("text-517", "text", "Your Name")}
//           {renderInput("email-875", "email", "Email")}
//         </div>

//         <div className="text-center">
//           <motion.button
//             type="submit"
//             whileHover={{
//               scale: 1.05,
//               boxShadow: "0px 0px 16px rgba(0, 123, 255, 0.6)",
//             }}
//             whileTap={{ scale: 0.95 }}
//             transition={{ type: "spring", stiffness: 300 }}
//             className="w-full lg:w-[200px] bg-[#0e71b9] text-white rounded-full px-6 py-4 text-[15px] font-[500] shadow-md hover:bg-[#0e71b9] focus:outline-none"
//           >
//             Download Now
//           </motion.button>
//         </div>

//         <AnimatePresence>
//           {submitted && hasMounted && (
//             <motion.div
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0 }}
//               className="text-green-600 font-medium text-center"
//             >
//               ✅ Submitted successfully!
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </form>
//     </motion.div>
//   );
// }


import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { FORM_URL } from "../../config/urls"; // Make sure this is your correct CF7 API endpoint

function useHasMounted() {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  return hasMounted;
}

export default function DownloadReportForm() {
  const hasMounted = useHasMounted();

  const [form, setForm] = useState({
    "text-517": "", // "Your Name"
    "email-875": "", // "Email"
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    if (value.trim() !== "") {
      setErrors((prev) => ({ ...prev, [name]: false }));
    }
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  const newErrors = {};
  Object.keys(form).forEach((field) => {
    if (!form[field] || form[field].trim() === "") {
      newErrors[field] = true;
    }
  });

  setErrors(newErrors);
  if (Object.keys(newErrors).length > 0) return;

  const formData = new FormData();
  Object.entries(form).forEach(([key, val]) => {
    formData.append(key, val);
  });

  formData.append("_wpcf7", "1110");
  formData.append("_wpcf7_version", "5.9.4");
  formData.append("_wpcf7_locale", "en_US");
  formData.append("_wpcf7_unit_tag", "wpcf7-f1083-p12-o1");
  formData.append("_wpcf7_container_post", "12");

  try {
    const res = await fetch(`${FORM_URL}1110/feedback`, {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    if (data.status === "mail_sent") {
      const audio = new Audio("/notification.mp3");
      audio.play();
      setSubmitted(true);
      setForm({ "text-517": "", "email-875": "" });
      setTimeout(() => setSubmitted(false), 3000);
    } else {
      alert("Submission failed: " + data.message);
    }
  } catch (err) {
    alert("Network error. Please try again.");
    console.error(err);
  }
};

  const inputVariants = {
    shake: {
      x: [0, -10, 10, -10, 10, 0],
      transition: { duration: 0.4 },
    },
  };

  const renderInput = (name, type, label) => (
    <motion.div
      variants={inputVariants}
      animate={errors[name] ? "shake" : ""}
      className="relative"
    >
      <input
        name={name}
        type={type}
        value={form[name]}
        onChange={handleChange}
        required
        placeholder=" "
        className={`peer w-full border px-4 pt-6 pb-2 text-[#050607] text-[16px] font-[400] ${
          errors[name] ? "border-red-500" : "border-[#e7e7e7]"
        } focus:border-black focus:outline-none rounded-md`}
      />
      <label
        className="absolute left-4 top-4 text-[#050607] text-[14px] font-[400] transition-all duration-200 ease-in-out
        peer-placeholder-shown:top-4 peer-placeholder-shown:text-[16px] peer-placeholder-shown:text-gray-500
        peer-focus:top-1 peer-focus:text-[12px] peer-focus:text-black
        peer-valid:top-1 peer-valid:text-[12px] peer-valid:text-black"
      >
        {label}
      </label>
    </motion.div>
  );

  return (
    <motion.div
      {...(hasMounted
        ? {
            initial: { opacity: 0, y: 300 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 1 },
          }
        : {})}
      className="rounded-3xl bg-white shadow px-6 lg:px-12 py-8 relative"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 gap-6">
          {renderInput("text-517", "text", "Your Name")}
          {renderInput("email-875", "email", "Email")}
        </div>

        <div className="text-center">
          <motion.button
            type="submit"
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 16px rgba(0, 123, 255, 0.6)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="w-full lg:w-[200px] bg-[#0e71b9] text-white rounded-full px-6 py-4 text-[15px] font-[500] shadow-md hover:bg-[#0e71b9] focus:outline-none"
          >
            Download Now
          </motion.button>
        </div>

        <AnimatePresence>
          {submitted && hasMounted && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="text-green-600 font-medium text-center"
            >
              ✅ Submitted successfully!
            </motion.div>
          )}
        </AnimatePresence>
      </form>
    </motion.div>
  );
}
