import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { FORM_URL } from "../../../../config/urls";


// Hook to detect client-side mount
function useHasMounted() {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  return hasMounted;
}

export default function ContactForm({ category }) {
  const hasMounted = useHasMounted();

  const [form, setForm] = useState({
    "your-name": "",
    "your-email": "",
    "your-number": "",
    "your-url": "",
    "your-message": "",
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
    Object.entries(form).forEach(([key, val]) =>
      formData.append(key, val)
    );

    // ✅ Add CF7 hidden fields required for REST
    formData.append("_wpcf7", "101"); // <-- numeric form ID
    formData.append("_wpcf7_version", "5.9.4");
    formData.append("_wpcf7_locale", "en_US");
    formData.append("_wpcf7_unit_tag", "wpcf7-f101-p12-o1"); // <-- must match page
    formData.append("_wpcf7_container_post", "12"); // <-- ID of page with form

    Object.entries(form).forEach(([key, val]) =>
      formData.append(key, val)
    );


    try {
      const res = await fetch(FORM_URL + "101/feedback", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data.status === "mail_sent") {
        const audio = new Audio("/notification.mp3");
        audio.play();

        setSubmitted(true);
        setForm({
          "your-name": "",
          "your-email": "",
          "your-number": "",
          "your-url": "",
          "your-message": "",
        });

        setTimeout(() => setSubmitted(false), 2000);
      } else {
        alert("Submission failed: " + data.message);
      }
    } catch (error) {
      alert("Network error. Please try again.");
      console.error(error);
    }
  };

  const inputVariants = {
    shake: {
      x: [0, -10, 10, -10, 10, 0],
      transition: { duration: 0.4 },
    },
  };

  const formFields = [
    { name: "your-name", label: "Your Name", type: "text" },
    { name: "your-email", label: "Your Email", type: "email" },
    { name: "your-number", label: "Your Number", type: "number" },
    { name: "your-url", label: "Your Website", type: "text" },
  ];

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
        placeholder=" "
        className={`peer w-full border px-4 py-4 text-[#050607] text-[16px] font-[400] ${errors[name] ? "border-red-500" : "border-[#e7e7e7]"
          } focus:border-black focus:outline-none rounded-md`}
      />
      <label className="absolute text-[#050607] text-[14px] font-[400] left-4 top-4 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-[16px] peer-placeholder-shown:text-gray-500 peer-focus:top-1 peer-focus:text-[12px] peer-focus:text-black">
        {label}
      </label>
    </motion.div>
  );

  return (
    <>
      <motion.div
        {...(hasMounted
          ? {
            initial: { opacity: 0, x: -200 },
            whileInView: { opacity: 1, x: 0 },
            transition: { duration: 1 },
          }
          : {})}
      >
        <p className="text-[30px] md:text-[40px] font-[600] text-[#e05c24] pb-4">
          {category.name}
        </p>
        {category.posts?.map((post) =>
          post.list_items?.map((listGroup, groupIndex) =>
            listGroup.map((item, itemIndex) => (
              <div key={`${groupIndex}-${itemIndex}`} className="flex gap-2 items-start py-3">
                <div className="text-[#61ce70] text-xl pt-1">✔️</div>
                <p className="text-[18px] font-[700] md:text-[20px] md:font-[600] text-[#191d27]">
                  {item}
                </p>
              </div>
            ))
          )
        )}

        <p className="text-[16px] lg:text-[18px] font-[400] text-[#616670] py-3 pl-6">
          🎯 {category.description}
        </p>
      </motion.div>

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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {renderInput("your-name", "text", "Name")}
            {renderInput("your-email", "email", "Email")}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {renderInput("your-number", "number", "Number")}
            {renderInput("your-url", "text", "Website")}
          </div>

          <motion.div
            variants={inputVariants}
            animate={errors["your-message"] ? "shake" : ""}
            className="relative"
          >
            <textarea
              name="your-message"
              rows="4"
              value={form["your-message"]}
              onChange={handleChange}
              placeholder=""
              className={`peer w-full border px-4 py-4 text-[#050607] text-[16px] font-[400] resize-none ${errors["your-message"] ? "border-red-500" : "border-[#e7e7e7]"
                } focus:border-black focus:outline-none rounded-md`}
            />
            <label className="absolute text-[#050607] text-[14px] font-[400] left-4 top-4 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-[16px] peer-placeholder-shown:text-gray-500 peer-focus:top-1 peer-focus:text-[12px] peer-focus:text-black">
              Message
            </label>

          </motion.div>

          <motion.button
            type="submit"
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 16px rgba(0, 123, 255, 0.6)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="w-full lg:w-[530px] bg-[#0e71b9] text-white rounded-full px-6 py-4 text-[15px] font-[500] shadow-md hover:bg-[#0e71b9] focus:outline-none"
          >
            Submit Request
          </motion.button>

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
    </>
  );
}
