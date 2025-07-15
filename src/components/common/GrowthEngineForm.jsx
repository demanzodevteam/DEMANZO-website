import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { API_URL, FORM_URL } from "../../config/urls";

// Progress Bar Component
const ProgressBar = ({ step }) => {
  const stepPercentages = {
    1: 0,
    2: 35,
    3: 60,
    4: 90,
    5: 100,
  };
  const progress = stepPercentages[step] || 0;
  return (
    <div className="w-full bg-gray-200 rounded-lg h-7.5 my-6">
      <div
        className="bg-[#3ad409] h-7.5 rounded-lg text-center text-white text-xs font-medium leading-none py-2"
        style={{ width: `${progress}%` }}
      >
        {progress}%
      </div>
    </div>
  );
};

// Navigation Buttons Component
const NavigationButtons = ({ step, setStep, totalSteps, handleSubmit, handleNext }) => (
  <div className={`flex ${step === 1 ? "justify-end" : "justify-between"} mt-8`}>
    {step !== 1 && (
      <motion.button
        onClick={() => setStep(step - 1)}
        whileHover={{
          scale: 1.05,
          boxShadow: "0px 0px 16px rgba(0, 123, 255, 0.6)",
        }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="text-white bg-[#2d89bf] rounded-[50px] disabled:bg-gray-400 px-11 py-3"
      >
        Previous
      </motion.button>
    )}
    <motion.button
      onClick={step === totalSteps ? handleSubmit : () => handleNext(step, setStep)}
      whileHover={{
        scale: 1.05,
        boxShadow: "0px 0px 16px rgba(0, 123, 255, 0.6)",
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300 }}
      className={`${
        step === totalSteps ? "px-3 py-3" : "px-11 py-3"
      } text-white bg-[#2d89bf] rounded-[50px] disabled:bg-gray-400`}
    >
      {step === totalSteps ? "🚀 Submit My Growth Plan" : "Next"}
    </motion.button>
  </div>
);

// Input Rendering Function
const renderInput = (name, type, label, form, errors, handleChange) => (
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
      className={`peer w-full border px-4 py-4 text-[#050607] text-[16px] font-[400] ${
        errors[name] ? "border-red-500" : "border-[#e7e7e7]"
      } focus:border-black focus:outline-none rounded-md`}
      autoComplete="off"
    />
    <label className="absolute text-[#050607] text-[14px] font-[400] left-4 top-4 transition-all
      peer-placeholder-shown:top-4 peer-placeholder-shown:text-[16px] peer-placeholder-shown:text-gray-500
      peer-focus:-top-2 peer-focus:text-[12px] peer-focus:text-black peer-focus:bg-white peer-focus:px-2
      peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:text-[12px] peer-not-placeholder-shown:text-black peer-not-placeholder-shown:bg-white peer-not-placeholder-shown:px-2">
      {label}
    </label>
  </motion.div>
);

// Select Rendering Function
const renderSelect = (name, label, form, errors, handleChange, options, placeholder) => (
  <motion.div variants={inputVariants} animate={errors[name] ? "shake" : ""} className="relative">
    <select
      id={name}
      name={name}
      value={form[name]}
      onChange={handleChange}
      className={`peer w-full border px-4 py-4 text-[#050607] text-[16px] font-[400] ${
        errors[name] ? "border-red-500" : "border-[#e7e7e7]"
      } focus:border-black focus:outline-none rounded-md`}
    >
      <option value="" disabled>{placeholder}</option>
      {options.map((option, index) => (
        <option key={index}>{option}</option>
      ))}
    </select>
    <label className="absolute text-[#050607] text-[14px] font-[400] left-4 top-4 transition-all
      peer-placeholder-shown:top-4 peer-placeholder-shown:text-[16px] peer-placeholder-shown:text-gray-500
      peer-focus:-top-2 peer-focus:text-[12px] peer-focus:text-black peer-focus:bg-white peer-focus:px-2
      peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:text-[12px] peer-not-placeholder-shown:text-black peer-not-placeholder-shown:bg-white peer-not-placeholder-shown:px-2">
      {label}
    </label>
  </motion.div>
);

// Textarea Rendering Function
const renderTextarea = (name, label, form, errors, handleChange, placeholder, helperText) => (
  <motion.div
    variants={inputVariants}
    animate={errors[name] ? "shake" : ""}
    className="relative"
  >
    <textarea
      id={name}
      name={name}
      value={form[name]}
      onChange={handleChange}
      placeholder=" "
      className={`peer w-full p-2 h-24 mt-1 border px-4 py-4 text-[#050607] text-[16px] font-[400] hover:border-black focus:border-black focus:outline-none ${
        errors[name] ? "border-red-500" : "border-[#e7e7e7]"
      } rounded-md`}
    />
    <label className="absolute text-[#050607] text-[14px] font-[400] left-4 top-4 transition-all
      peer-placeholder-shown:top-4 peer-placeholder-shown:text-[16px] peer-placeholder-shown:text-gray-500
      peer-focus:-top-2 peer-focus:text-[12px] peer-focus:text-black peer-focus:bg-white peer-focus:px-2
      peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:text-[12px] peer-not-placeholder-shown:text-black peer-not-placeholder-shown:bg-white peer-not-placeholder-shown:px-2">
      {label}
    </label>
    {helperText && <p className="text-[#777777] text-[13px]">{helperText}</p>}
  </motion.div>
);

// Animation Variants
const inputVariants = {
  shake: {
    x: [0, -10, 10, -10, 10, 0],
    transition: { duration: 0.4 },
  },
};

// Step Components
const Step1 = ({ form, category, errors, handleChange }) => (
  <div>
    <div className="flex flex-row items-center gap-2">
      <div
        className="w-6 h-6"
        dangerouslySetInnerHTML={{ __html: category?.list_items[0]?.[0]?.svg }}
      />
      <h2 className="demanzo-h2 leading-9">
        {category?.headings[0]}
      </h2>
    </div>
    <div className="mt-8 space-y-6">
      {renderInput("your-name", "text", "Full Name", form, errors, handleChange)}
      {renderInput("your-email", "email", "Work Email", form, errors, handleChange)}
      {renderInput("company-name", "text", "Company Name", form, errors, handleChange)}
      {renderInput("your-url", "url", "Website URL", form, errors, handleChange)}
    </div>
  </div>
);

const Step2 = ({ form, category, errors, handleChange }) => (
  <div>
    <div className="flex flex-row items-center gap-2">
      <div
        className="w-6 h-6"
        dangerouslySetInnerHTML={{ __html: category?.list_items[0]?.[1]?.svg }}
      />
      <h2 className="demanzo-h2 text-center">{category?.headings[1]}</h2>
    </div>
    <ProgressBar step={2} />
    <div className="mt-8 space-y-6">
      {renderSelect(
        "industry",
        "Industry",
        form,
        errors,
        handleChange,
        [
          "Sass / IT Services",
          "CyberSecurity",
          "Enterprise Software",
          "MSP / Other",
        ],
        "Choose the closest match"
      )}
      {renderSelect(
        "companySize",
        "Company Size",
        form,
        errors,
        handleChange,
        ["1-10", "11-50", "51-200", "201-500", "500+"],
        "How big is your team?"
      )}
      {renderSelect(
        "primaryMarket",
        "Primary Market",
        form,
        errors,
        handleChange,
        ["India", "USA", "UK", "Europe", "Global"],
        "Where are most of your clients based?"
      )}
    </div>
  </div>
);

const Step3 = ({ form, category, errors, handleChange }) => (
  <div>
    <div className="flex flex-row items-center gap-2">
      <div
        className="w-6 h-6"
        dangerouslySetInnerHTML={{ __html: category?.list_items[0]?.[2]?.svg }}
      />
      <h2 className="demanzo-h2 text-center">{category?.headings[2]}</h2>
    </div>
    <ProgressBar step={3} />
    <div className="mt-8 space-y-6">
      <div className="space-y-2">
        {[
          {
            id: "not-enough-conversions",
            label: "Generating leads but not enough conversions",
          },
          { id: "seo-content", label: "SEO or content isn't driving pipeline" },
          {
            id: "sql-conversions",
            label: "We need to accelerate MQL to SQL conversions",
          },
          {
            id: "marketing-direction",
            label: "Our marketing lacks leadership and direction",
          },
          {
            id: "email-list-building",
            label: "We need better email list building and nurturing",
          },
          { id: "full-audit", label: "Not sure - need a full audit" },
          { id: "other", label: "Other" },
        ].map((challenge) => (
          <div key={challenge.id} className="flex items-center">
            <input
              id={challenge.id}
              name="growth-challenges"
              type="checkbox"
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              onChange={handleChange}
              checked={form["growth-challenges"].includes(challenge.id)}
              value={challenge.id}
            />
            <label
              htmlFor={challenge.id}
              className="ml-2 block text-sm text-gray-900"
            >
              {challenge.label}
            </label>
          </div>
        ))}
        {errors["growth-challenges"] && (
          <p className="text-red-500 text-sm mt-2">
            {errors["growth-challenges"]}
          </p>
        )}
      </div>
    </div>
  </div>
);


const Step4 = ({ form, category, errors, handleChange }) => (
  <div>
    <div className="flex flex-row items-center gap-2">
      <div
        className="w-6 h-6"
        dangerouslySetInnerHTML={{ __html: category?.list_items[0]?.[3]?.svg }}
      />
      <h2 className="demanzo-h2 text-center">{category?.headings[3]}</h2>
    </div>
    <ProgressBar step={4} />
    <div className="mt-8 space-y-6">
      {renderTextarea(
        "primaryGoal",
        "Primary Goal",
        form,
        errors,
        handleChange,
        "Tell us in a sentence or two what success looks like for you?",
        "(E.g., Increase SQLs by 50%, Rank top 3 for X keywords, Reduce CAC by 30%)"
      )}
      {renderSelect(
        "marketingTeam",
        "Current Marketing Team",
        form,
        errors,
        handleChange,
        [
          "No team yet",
          "1-2 marketers",
          "Full team, but no leadership",
          "Freelancers",
        ],
        "Who is handling your market today?"
      )}
    </div>
  </div>
);

const Step5 = ({ form, category, errors, handleChange }) => {
  const preferredStartTimeOptions = [
    "Within 1 month",
    "1-3 months",
    "3-6 months",
    "More than 6 months"
  ];

  const monthlyMarketBudgetOptions = [
    "$2000",
    "$2000-$5000",
    "$5000-$10000",
    "$10000+"
  ];

  return (
    <div>
      <div className="flex flex-row items-center gap-2">
        <div
          className="w-6 h-6"
          dangerouslySetInnerHTML={{
            __html: category?.list_items[0]?.[4]?.svg,
          }}
        />
        <h2 className="demanzo-h2 text-center">{category?.headings[4]}</h2>
      </div>
      <ProgressBar step={5} />
      <div className="mt-8 space-y-6">
        {renderSelect(
          "preferredStartTime",
          "Preferred Start Time",
          form,
          errors,
          handleChange,
          preferredStartTimeOptions,
          "How soon are you ready to go?"
        )}
        {renderSelect(
          "monthlyMarketBudget",
          "Estimated Monthly Marketing Budget",
          form,
          errors,
          handleChange,
          monthlyMarketBudgetOptions,
          "Rough idea of the investment range you're planning?"
        )}
        <div>
          <label className="block font-medium text-[#000000] mb-2">
            Captcha
          </label>
          <input
            type="text"
            id="captcha"
            name="captcha"
            value={form.captcha}
            onChange={handleChange}
            className="w-full p-2 h-12.5 mt-1 border hover:border-black focus:border-black focus:outline-none rounded-md"
            placeholder="Enter Captcha"
          />
        </div>
      </div>
    </div>
  );
};

export default function GrowthEngineForm({ category }) {
  const [form, setForm] = useState({
    "your-name": "",
    "your-email": "",
    "company-name": "",
    "your-url": "",
    industry: "",
    companySize: "",
    primaryMarket: "",
    "growth-challenges": [],
    primaryGoal: "",
    marketingTeam: "",
    preferredStartTime: "",
    monthlyMarketBudget: "",
    captcha: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [step, setStep] = useState(1);
  const totalSteps = 5;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setForm((prevForm) => {
        const updatedChallenges = checked
          ? [...prevForm["growth-challenges"], value]
          : prevForm["growth-challenges"].filter((challenge) => challenge !== value);
        return { ...prevForm, ["growth-challenges"]: updatedChallenges };
      });
    } else {
      setForm({ ...form, [name]: value });
    }
    if (value.trim() !== "") {
      setErrors((prev) => ({ ...prev, [name]: false }));
    }
  };

const validateStep = (currentStep) => {
  const newErrors = {};
  let isValid = true;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const urlRegex = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;

  switch (currentStep) {
    case 1:
      ["your-name", "company-name"].forEach((field) => {
        if (!form[field] || form[field].trim() === "") {
          newErrors[field] = true;
          isValid = false;
        }
      });

      if (!form["your-email"] || !emailRegex.test(form["your-email"])) {
        newErrors["your-email"] = true;
        isValid = false;
      }

      if (!form["your-url"] || !urlRegex.test(form["your-url"])) {
        newErrors["your-url"] = true;
        isValid = false;
      }

      break;
    case 2:
      ["industry", "companySize", "primaryMarket"].forEach((field) => {
        if (!form[field] || form[field].trim() === "") {
          newErrors[field] = true;
          isValid = false;
        }
      });
      break;
    case 3:
      if (form["growth-challenges"].length === 0) {
        newErrors["growth-challenges"] = "Please fill out this field";
        isValid = false;
      }
      break;
    case 4:
      ["primaryGoal", "marketingTeam"].forEach((field) => {
        if (!form[field] || form[field].trim() === "") {
          newErrors[field] = true;
          isValid = false;
        }
      });
      break;
    case 5:
      ["preferredStartTime", "monthlyMarketBudget"].forEach((field) => {
        if (!form[field] || form[field].trim() === "") {
          newErrors[field] = true;
          isValid = false;
        }
      });
      break;
    default:
      break;
  }

  setErrors(newErrors);
  return isValid;
};


const handleNext = (currentStep, setStep) => {
    if (validateStep(currentStep)) {
      setStep(currentStep + 1);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateStep(step)) {
      const formData = new FormData();
      Object.keys(form).forEach((key) => {
        if (Array.isArray(form[key])) {
          form[key].forEach((item) => {
            formData.append(key, item);
          });
        } else {
          formData.append(key, form[key]);
        }
      });

      try {
        const res = await fetch(FORM_URL + "799/feedback", {
          method: "POST",
          body: formData,
        });
        
// https://demanzo.com/wp-json/contact-form-7/v1/contact-forms/52239/feedback
        const data = await res.json();
        if (data.status === "mail_sent") {
          const audio = new Audio("/notification.mp3");
          audio.play();
          setSubmitted(true);
          setForm({
            "your-name": "",
            "your-email": "",
            "company-name": "",
            "your-url": "",
            industry: "",
            companySize: "",
            primaryMarket: "",
            "growth-challenges": [],
            primaryGoal: "",
            marketingTeam: "",
            preferredStartTime: "",
            monthlyMarketBudget: "",
            captcha: "",
          });
          setTimeout(() => setSubmitted(false), 2000);
        } else {
          alert("Submission failed: " + data.message);
        }
      } catch (error) {
        alert("Network error. Please try again.");
        console.error(error);
      }
    }
  };

  const steps = [
    <Step1 form={form} category={category} errors={errors} handleChange={handleChange} />,
    <Step2 form={form} category={category} errors={errors} handleChange={handleChange} />,
    <Step3 form={form} category={category} errors={errors} handleChange={handleChange} />,
    <Step4 form={form} category={category} errors={errors} handleChange={handleChange} />,
    <Step5 form={form} category={category} errors={errors} handleChange={handleChange} />,
  ];

  return (
    <div className="w-full flex flex-col items-center justify-center pt-8 pb-12 lg:pt-0 lg:pb-0">
      <div className="w-full p-8 space-y-8 bg-white rounded-[16px] shadow">
        {steps[step - 1]}
        <NavigationButtons
          step={step}
          setStep={setStep}
          totalSteps={totalSteps}
          handleSubmit={handleSubmit}
          handleNext={handleNext}
        />
        <AnimatePresence>
          {submitted && (
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
      </div>
    </div>
  );
}
