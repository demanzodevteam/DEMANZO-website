// components/SalesForm.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CaptchaImg from "../../assets/Captcha.png";
import { FORM_URL } from "../../config/urls";

const fieldConfig = [
  {
    name: "name",
    type: "text",
    placeholder: "Your Name",
    label: "Name",
  },
  {
    name: "email",
    type: "email",
    placeholder: "Your Email",
    label: "Email",
  },
  {
    name: "captcha",
    type: "text",
    placeholder: "Enter Captcha",
    label: "Captcha",
    isCaptcha: true, // used to render the captcha image alongside
  },
];

const SalesForm = () => {
  const initialState = fieldConfig.reduce((acc, field) => {
    acc[field.name] = "";
    return acc;
  }, {});

  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (value.trim() !== "") {
      setErrors((prev) => ({ ...prev, [name]: false }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key].trim()) newErrors[key] = true;
    });

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    try {
      const res = await fetch(FORM_URL + "1080", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setSubmitted(true);
        setFormData(initialState);
        setTimeout(() => setSubmitted(false), 3000);
      } else {
        alert("Failed to send email: " + data.message);
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Try again later.");
    }
  };

  const renderField = ({ name, type, placeholder, label, isCaptcha }) => {
    return (
      <div key={name} className="flex flex-col gap-2">
        {isCaptcha ? (
          <>
            <label htmlFor={name} className="text-sm text-[#333]">
              {label}
            </label>
            <div className="flex items-center gap-4">
              <img
                src={CaptchaImg.src}
                alt="Captcha"
                className="w-32 h-10 object-contain"
              />
              <input
                name={name}
                type={type}
                value={formData[name]}
                onChange={handleChange}
                placeholder={placeholder}
                required
                className={`w-full border px-4 py-3 text-[16px] text-[#050607] rounded-md focus:outline-none ${
                  errors[name]
                    ? "border-red-500"
                    : "border-[#e7e7e7] hover:border-black focus:border-black"
                }`}
              />
            </div>
          </>
        ) : (
          <input
            key={name}
            name={name}
            type={type}
            value={formData[name]}
            onChange={handleChange}
            placeholder={placeholder}
            required
            className={`w-full border px-4 py-3 text-[16px] text-[#050607] rounded-md focus:outline-none ${
              errors[name]
                ? "border-red-500"
                : "border-[#e7e7e7] hover:border-black focus:border-black"
            }`}
          />
        )}
      </div>
    );
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">{fieldConfig.map(renderField)}</div>

      <div className="flex flex-col items-center gap-4">
        <motion.button
          type="submit"
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 0px 16px rgba(0, 123, 255, 0.6)",
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="w-full lg:w-auto text-white bg-[#0A6AAD] px-6 py-3 rounded-full hover:bg-[#f5a31c] transition"
        >
          Download Now
        </motion.button>

        <AnimatePresence>
          {submitted && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="text-green-600 font-medium text-center"
            >
              ✅ Email sent successfully!
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </form>
  );
};

export default SalesForm;
