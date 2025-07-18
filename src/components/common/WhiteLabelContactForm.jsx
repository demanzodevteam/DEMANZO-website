import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { FORM_URL } from "../../config/urls";

// Hook to detect client-side mount
function useHasMounted() {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  return hasMounted;
}

export default function WhiteLabelContactForm({ category }) {
  const hasMounted = useHasMounted();

  const [form, setForm] = useState({
    "your-name": "",
    "your-email": "",
    "your-number": "",
    "your-country": "",
    "select-626": "Company Type",
    "select-808": "Team Size",
    "select-239": "Total Clients",
    "select-8": "Where you need help?",
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

    // CF7 hidden fields (for ID 1175)
    formData.append("_wpcf7", "1175");
    formData.append("_wpcf7_version", "5.9.4");
    formData.append("_wpcf7_locale", "en_US");
    formData.append("_wpcf7_unit_tag", "wpcf7-f1031-p12-o1");
    formData.append("_wpcf7_container_post", "12");

    try {
      const res = await fetch(FORM_URL + "1175/feedback", {
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
            "your-country": "",
            "select-626": "Company Type",
            "select-808": "Team Size",
            "select-239": "Total Clients",
            "select-8": "Where you need help?",
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
    { name: "your-name", label: "Name", type: "text" },
    { name: "your-email", label: "Email", type: "email" },
    { name: "your-number", label: "Number", type: "number" },
    { name: "your-country", label: "Country", type: "text" },
    {
      name: "select-626",
      type: "select",
      options: [
        "Company Type",
        "Freelancer",
        "Agency"
      ],
    },
    {
      name: "select-808",
      type: "select",
      options: [
        "Team Size",
        "1",
        "2-5",
        "6-10",
        ">10"
      ],
    },
    {
      name: "select-239",
      type: "select",
      options: [
        "Total Clients",
        "Just Starting",
        "1-5",
        "6-10",
        ">10"
      ],
    },
    {
      name: "select-8",
      type: "select",
      options: [
        "Where you need help?",
        "SEO",
        "PPC"
      ],
    },
  ];

  const renderInput = (name, type, label, options = []) => {
    if (type === "select") {
      return (
        <>
            <motion.div
                variants={inputVariants}
                animate={errors[name] ? "shake" : ""}
                className="mb-4"
                >
                <select
                    name={name}
                    value={form[name]}
                    onChange={handleChange}
                    className={`w-full border px-4 py-3 text-[#747a80] text-[16px] font-[400] rounded-md appearance-none
                    ${errors[name] ? "border-red-500" : "border-[#e7e7e7]"} 
                    focus:border-black focus:outline-none`}
                >
                    <option value="" disabled hidden>
                        {options[0]}
                    </option>
                    {options.map((opt, idx) => (
                    <option key={idx} value={opt}>
                        {opt}
                    </option>
                    ))}
                </select>
            </motion.div>
        </>
      );
    }

    return (
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
          className={`peer w-full border px-4 pt-6 pb-2 text-[#050607] text-[16px] font-[400] ${errors[name] ? "border-red-500" : "border-[#e7e7e7]"
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
  };

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
            {renderInput("your-name", "text", "Full Name")}
            {renderInput("your-email", "email", "Email Address")}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {renderInput("your-number", "number", "Phone Number")}
            {renderInput("your-country", "text", "Country")}{" "}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {renderInput(
            "select-626",
            "select",
            formFields.find((f) => f.name === "select-626").options
          )}
          {renderInput(
            "select-808",
            "select",
            formFields.find((f) => f.name === "select-808").options
          )}
          {" "}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {renderInput(
            "select-239",
            "select",
            formFields.find((f) => f.name === "select-239").options
          )}
          {renderInput(
            "select-8",
            "select",
            formFields.find((f) => f.name === "select-8").options
          )}
          {" "}
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
              placeholder=" " // optional
              className={`peer w-full border px-4 pt-7 pb-4 text-[#050607] text-[16px] font-[400] resize-none ${
                errors["your-message"] ? "border-red-500" : "border-[#e7e7e7]"
              } focus:border-black focus:outline-none rounded-md`}
            />
            <label
              className={`absolute left-4  transition-all duration-200 ease-in-out text-[14px] font-[400] ${
                form["your-message"]
                  ? "top-1 text-[12px] text-black"
                  : "top-4 text-[16px] text-gray-500"
              }`}
            >
              Message
            </label>
          </motion.div>

          <div className="text-center">
            <motion.button
              type="submit"
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 16px rgba(0, 123, 255, 0.6)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="w-full lg:w-[300px] bg-[#0e71b9] text-white rounded-full px-6 py-4 text-[15px] font-[500] shadow-md hover:bg-[#0e71b9] focus:outline-none"
            >
              Request Demo
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
    </>
  );
}
