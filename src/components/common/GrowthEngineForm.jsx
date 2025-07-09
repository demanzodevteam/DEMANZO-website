import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { API_URL, FORM_URL } from "../../config/urls";
import axios from "axios";

// Progress Bar Component
const ProgressBar = ({ step }) => {
  const stepPercentages = {
    1: 0,
    2: 30,
    3: 60,
    4: 90,
    5: 100,
  };
  const progress = stepPercentages[step] || 0;
  return (
    <div className="w-full bg-gray-200 rounded-full h-4 mb-6">
      <div
        className="bg-green-600 h-4 rounded-full text-center text-white text-xs leading-none py-1"
        style={{ width: `${progress}%` }}
      >
        {progress}%
      </div>
    </div>
  );
};

// Reusable Button Component
const NavigationButtons = ({ step, setStep, totalSteps, handleSubmit }) => (
  <div
    className={`flex ${step === 1 ? "justify-end" : "justify-between"} mt-8`}
  >
    <button
      onClick={() => setStep(step - 1)}
      hidden={step === 1}
      className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700 disabled:bg-gray-400"
    >
      Previous
    </button>
    <button
      onClick={step === totalSteps ? handleSubmit : () => setStep(step + 1)}
      className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700 disabled:bg-gray-400"
    >
      {step === totalSteps ? "Submit My Growth Plan" : "Next"}
    </button>
  </div>
);

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
      className={`peer w-full border px-4 py-4 text-[#050607] text-[16px] font-[400] ${
        errors[name] ? "border-red-500" : "border-[#e7e7e7]"
      } focus:border-black focus:outline-none rounded-md`}
    />
    <label className="absolute text-[#050607] text-[14px] font-[400] left-4 top-4 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-[16px] peer-placeholder-shown:text-gray-500 peer-focus:top-1 peer-focus:text-[12px] peer-focus:text-black">
      {label}
    </label>
  </motion.div>
);

// Step Components
const Step1 = ({ form, handleChange }) => (
  <div>
    <h2 className="text-2xl font-bold text-center">Contact Information</h2>
    <ProgressBar step={1} />
    <div className="mt-8 space-y-6">
      <div>
        {/* {renderInput("your-name","text","Full Name")} */}
        <label
          htmlFor="your-name"
          className="block text-sm font-medium text-gray-700"
        >
          Full Name
        </label>
        <input
          type="text"
          id="your-name"
          name="your-name"
          value={form["your-name"]}
          onChange={handleChange}
          placeholder="What should we call you?"
          className="w-full p-2 mt-1 border border-gray-300 rounded"
          autoComplete="off"
        />
      </div>
      <div>
        <label
          htmlFor="your-email"
          className="block text-sm font-medium text-gray-700"
        >
          Work Email
        </label>
        <input
          type="email"
          id="your-email"
          name="your-email"
          value={form["your-email"]}
          onChange={handleChange}
          placeholder="Where can we reach you?"
          className="w-full p-2 mt-1 border border-gray-300 rounded"
          autoComplete="off"
        />
      </div>
      <div>
        <label
          htmlFor="company-name"
          className="block text-sm font-medium text-gray-700"
        >
          Company Name
        </label>
        <input
          type="text"
          id="company-name"
          name="company-name"
          value={form["company-name"]}
          onChange={handleChange}
          placeholder="Who are we building this for?"
          className="w-full p-2 mt-1 border border-gray-300 rounded"
          autoComplete="off"
        />
      </div>
      <div>
        <label
          htmlFor="your-url"
          className="block text-sm font-medium text-gray-700"
        >
          Website URL
        </label>
        <input
          type="url"
          id="your-url"
          name="your-url"
          value={form["your-url"]}
          onChange={handleChange}
          placeholder="Share your site link if you have one."
          className="w-full p-2 mt-1 border border-gray-300 rounded"
          autoComplete="off"
        />
      </div>
    </div>
  </div>
);

const Step2 = ({ form, errors, handleChange }) => (
  <div>
    <h2 className="text-2xl font-bold text-center">
      What's Your Company All About?
    </h2>
    <ProgressBar step={2} />
    <div className="mt-8 space-y-6">
      <div>
        <label
          htmlFor="industry"
          className="block text-sm font-medium text-gray-700"
        >
          Industry
        </label>
        <motion.select
          id="industry"
          name="industry"
          value={form.industry}
          onChange={handleChange}
          className={`w-full p-2 mt-1 border border-gray-300 rounded ${
            errors.industry ? "border-red-500" : ""
          }`}
          initial={false}
          animate={errors.industry ? { x: [-10, 10, -10, 10, 0] } : {}}
        >
          <option>Choose the closest match</option>
          <option>Sass / IT Services</option>
          <option>CyberSecurity</option>
          <option>Enterprise Software</option>
          <option>MSP / Other</option>
        </motion.select>
      </div>
      <div>
        <label
          htmlFor="companySize"
          className="block text-sm font-medium text-gray-700"
        >
          Company Size
        </label>
        <motion.select
          id="companySize"
          name="companySize"
          value={form.companySize}
          onChange={handleChange}
          className={`w-full p-2 mt-1 border border-gray-300 rounded ${
            errors.companySize ? "border-red-500" : ""
          }`}
          initial={false}
          animate={errors.companySize ? { x: [-10, 10, -10, 10, 0] } : {}}
        >
          <option>How big is your team?</option>
          <option>1-10</option>
          <option>11-50</option>
          <option>51-200</option>
          <option>201-500</option>
          <option>500+</option>
        </motion.select>
      </div>
      <div>
        <label
          htmlFor="primaryMarket"
          className="block text-sm font-medium text-gray-700"
        >
          Primary Market
        </label>
        <motion.select
          id="primaryMarket"
          name="primaryMarket"
          value={form.primaryMarket}
          onChange={handleChange}
          className={`w-full p-2 mt-1 border border-gray-300 rounded ${
            errors.primaryMarket ? "border-red-500" : ""
          }`}
          initial={false}
          animate={errors.primaryMarket ? { x: [-10, 10, -10, 10, 0] } : {}}
        >
          <option>Where are most of your clients based?</option>
          <option>India</option>
          <option>USA</option>
          <option>UK</option>
          <option>Europe</option>
          <option>Global</option>
        </motion.select>
      </div>
    </div>
  </div>
);

const Step3 = ({ form, errors, handleChange }) => (
  <div>
    <h2 className="text-xl font-bold text-center">
      What's Slowing Down Your Growth?
    </h2>
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
      </div>
    </div>
  </div>
);

const Step4 = ({ form, errors, handleChange }) => (
  <div>
    <h2 className="text-xl font-bold text-center">
      Where Do You Want To Be In The Next 6 Months?
    </h2>
    <ProgressBar step={4} />
    <div className="mt-8 space-y-6">
      <div>
        <label
          htmlFor="primaryGoal"
          className="block text-sm font-medium text-gray-700"
        >
          Primary Goal
        </label>
        <motion.textarea
          id="primaryGoal"
          name="primaryGoal"
          value={form.primaryGoal}
          onChange={handleChange}
          placeholder="Tell us in a sentence or two what success looks like for you?"
          className={`relative w-full p-2 mt-1 border border-gray-300 rounded ${
            errors.primaryGoal ? "border-red-500" : ""
          }`}
          initial={false}
          animate={errors.primaryGoal ? { x: [-10, 10, -10, 10, 0] } : {}}
        />
        <div>
            <p>(E.g., Increase SQLs by 50%, Rank top 3 for X keywords, Reduce CAC by 30%)</p>
        </div>
      </div>
       <div>
        <label
          htmlFor="marketingTeam"
          className="block text-sm font-medium text-gray-700"
        >
          Current Marketing Team
        </label>
        <motion.select
          id="marketingTeam"
          name="marketingTeam"
          value={form.marketingTeam}
          onChange={handleChange}
          className={`w-full p-2 mt-1 border border-gray-300 rounded ${
            errors.marketingTeam ? "border-red-500" : ""
          }`}
          initial={false}
          animate={errors.marketingTeam ? { x: [-10, 10, -10, 10, 0] } : {}}
        >
          <option>Who is handling your market today?</option>
          <option>No team yet</option>
          <option>1-2 marketers</option>
          <option>Full team, but no leadership</option>
          <option>Freelancers</option>
        </motion.select>
      </div>
    </div>
  </div>
);

const Step5 = ({ form, errors, handleChange }) => (
  <div>
    <h2 className="text-xl font-bold text-center">
      When Are You Looking To Kick Off Your Growth Journey?
    </h2>
    <ProgressBar step={5} />
    <div className="mt-8 space-y-6">
      <div>
        <label
          htmlFor="preferredStartTime"
          className="block text-sm font-medium text-gray-700"
        >
          Preferred Start Time
        </label>
        <motion.select
          id="preferredStartTime"
          name="preferredStartTime"
          value={form.preferredStartTime}
          onChange={handleChange}
          className={`w-full p-2 mt-1 border border-gray-300 rounded ${
            errors.preferredStartTime ? "border-red-500" : ""
          }`}
          initial={false}
          animate={
            errors.preferredStartTime ? { x: [-10, 10, -10, 10, 0] } : {}
          }
        >
          <option value="" disabled>
            How soon are you ready to go?
          </option>
          <option>Within 1 month</option>
          <option>1-3 months</option>
          <option>3-6 months</option>
          <option>More than 6 months</option>
        </motion.select>
      </div>
      <div>
        <label
          htmlFor="monthlyMarketBudget"
          className="block text-sm font-medium text-gray-700"
        >
           Estimated Monthly Marketing Budget
        </label>
        <motion.select
          id="monthlyMarketBudget"
          name="monthlyMarketBudget"
          value={form.monthlyMarketBudget}
          onChange={handleChange}
          className={`w-full p-2 mt-1 border border-gray-300 rounded ${
            errors.monthlyMarketBudget ? "border-red-500" : ""
          }`}
          initial={false}
          animate={
            errors.monthlyMarketBudget ? { x: [-10, 10, -10, 10, 0] } : {}
          }
        >
          <option value="" disabled>
           Rough idea of the investment range you're planning?
          </option>
          <option>$2000</option>
          <option>$2000-$5000</option>
          <option>$5000-$10000</option>
          <option>$10000+</option>
        </motion.select>
            <img src="" alt="captcha" />
         <input
          type="text"
          id="captcha"
          name="captcha"
          value={form["captcha"]}
          onChange={handleChange}
          className="w-full p-2 mt-1 border border-gray-300 rounded"
          autoComplete="off"
        />
      </div>
    </div>
  </div>
);

export default function GrowthEngineForm({ category }) {
  // console.log(category,'category');
  const [form, setForm] = useState({
    "your-name": "",
    "your-email": "",
    "company-name": "",
    "your-url": "",
    // "your-message": "",
    "industry":"",
    "companySize":"",
    "primaryMarket":"",
    "growth-challenges":[],
    "primaryGoal":"",
    "marketingTeam":"",
    "preferredStartTime": "",
    "monthlyMarketBudget":"",
    "captcha":"",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [step, setStep] = useState(1);
  const totalSteps = 5;

  const handleChange = (e) => {
 const { name, value, type, checked } = e.target;

     if (type === "checkbox") {
      // Handle checkbox changes
      setForm((prevForm) => {
        const updatedChallenges = checked
          ? [...prevForm["growth-challenges"], value]
          : prevForm["growth-challenges"].filter((challenge) => challenge !== value);

        return { ...prevForm, ["growth-challenges"]: updatedChallenges };
      });
    } else {
      // Handle other input changes
      setForm({ ...form, [name]: value });
    }
    if (value.trim() !== "") {
      setErrors((prev) => ({ ...prev, [name]: false }));
    }
  };

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
//     Object.keys(form).forEach((key) => {
//       formData.append(key, form[key]);
//     });

//     try {
//       const res = await fetch(FORM_URL + "799/feedback", {
//         method: "POST",
//         body: formData,
//       });
//       const data = await res.json();
//       if (data.status === "mail_sent") {
//         const audio = new Audio("/notification.mp3");
//         audio.play();
//         setSubmitted(true);
//         setForm({
//          "your-name": "",
//     "your-email": "",
//     "company-name": "",
//     "your-url": "",
//     // "your-message": "",
//     "industry":"",
//     "companySize":"",
//     "primaryMarket":"",
//     "growth-challenges":[],
//     "primaryGoal":"",
//     "marketingTeam":"",
//     "preferredStartTime": "",
//     "monthlyMarketBudget":"",
//         });
//         setTimeout(() => setSubmitted(false), 2000);
//       } else {
//         alert("Submission failed: " + data.message);
//       }
//     } catch (error) {
//       alert("Network error. Please try again.");
//       console.error(error);
//     }
//   };

const handleSubmit = async (e) => {
  e.preventDefault();

  // Validate form fields
  const newErrors = {};
  Object.keys(form).forEach((field) => {
    if (Array.isArray(form[field])) {
      // Check if array fields like "growth-challenges" are empty
      if (form[field].length === 0) {
        newErrors[field] = true;
      }
    } else if (!form[field] || form[field].trim() === "") {
      // Check if other fields are empty
      newErrors[field] = true;
    }
  });

  setErrors(newErrors);

  // If there are errors, stop the submission
  if (Object.keys(newErrors).length > 0) {
    return;
  }

  // Prepare form data
  const formData = new FormData();
  Object.keys(form).forEach((key) => {
    if (Array.isArray(form[key])) {
      // Append each item in the array to the FormData
      form[key].forEach((item) => {
        formData.append(key, item);
      });
    } else {
      // Append other fields normally
      formData.append(key, form[key]);
    }
  });

  try {
    const res = await fetch(FORM_URL + "799/feedback", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    if (data.status === "mail_sent") {
      const audio = new Audio("/notification.mp3");
      audio.play();
      setSubmitted(true);

      // Reset form fields
      setForm({
        "your-name": "",
        "your-email": "",
        "company-name": "",
        "your-url": "",
        "industry": "",
        "companySize": "",
        "primaryMarket": "",
        "growth-challenges": [],
        "primaryGoal": "",
        "marketingTeam": "",
        "preferredStartTime": "",
        "monthlyMarketBudget": "",
        "captcha": "",
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

  const steps = [
    <Step1 form={form} handleChange={handleChange} />,
    <Step2 form={form} errors={errors} handleChange={handleChange} />,
    <Step3 form={form} errors={errors} handleChange={handleChange} />,
    <Step4 form={form} errors={errors} handleChange={handleChange} />,
    <Step5 form={form} errors={errors} handleChange={handleChange} />,
  ];

  console.log(form, "formdata");
  console.log(errors, "errors");
  console.log(category, "category");


  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded shadow">
        {steps[step - 1]}
        <NavigationButtons
          step={step}
          setStep={setStep}
          totalSteps={totalSteps}
          handleSubmit={handleSubmit}
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

// import { motion, AnimatePresence } from "framer-motion";
// import { useState, useEffect } from "react";
// import { API_URL, FORM_URL } from "../../config/urls";
// import axios from "axios";

// export default function GrowthEngineForm({category}) {
//   const [form, setForm] = useState({
//     "your-name": "",
//     "your-email": "",
//     "your-number": "",
//     "your-url": "",
//     "your-message": "",
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
//     formData.append("your-name", form["your-name"]);
//     formData.append("your-email", form["your-email"]);
//     formData.append("your-number", form["your-number"]);
//     formData.append("your-url", form["your-url"]);
//     formData.append("your-message", form["your-message"]);

//     try {
//       const res = await fetch(
//         FORM_URL + '101/feedback',
//         {
//           method: "POST",
//           body: formData,
//         }
//       );

//       const data = await res.json();

//       if (data.status === "mail_sent") {
//         const audio = new Audio("/notification.mp3");
//         audio.play();

//         setSubmitted(true);
//         setForm({
//           "your-name": "",
//           "your-email": "",
//           "your-number": "",
//           "your-url": "",
//           "your-message": "",
//         });

//         setTimeout(() => setSubmitted(false), 2000);
//       } else {
//         alert("Submission failed: " + data.message);
//       }
//     } catch (error) {
//       alert(" Network error. Please try again.");
//       console.error(error);
//     }
//   };

//   const inputVariants = {
//     shake: {
//       x: [0, -10, 10, -10, 10, 0],
//       transition: { duration: 0.4 },
//     },
//   };

//   // const [category, setCategory] = useState({
//   //   name: '',
//   //   slug: '',
//   //   description: '',
//   //   button: '',
//   //   posts: [],
//   //   image: '',
//   // });

//   const formFields = [
//     { name: "your-name", label: "Your Name", type: "text" },
//     { name: "your-email", label: "Your Email", type: "email" },
//     { name: "your-number", label: "Your Number", type: "number" },
//     { name: "your-url", label: "Your Website", type: "text" },
//   ];

//   // useEffect(() => {
//   //   axios.get(API_URL + 'category/14')
//   //     .then((response) => {
//   //       setCategory(response.data);
//   //     })
//   //     .catch((error) => {
//   //       console.error('Failed to fetch category:', error);
//   //     });
//   // }, []);

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
//         placeholder=" "
//         className={`peer w-full border px-4 py-4 text-[#050607] text-[16px] font-[400] ${errors[name] ? "border-red-500" : "border-[#e7e7e7]"
//           } focus:border-black focus:outline-none rounded-md`}
//       />
//       <label className="absolute text-[#050607] text-[14px] font-[400] left-4 top-4 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-[16px] peer-placeholder-shown:text-gray-500 peer-focus:top-1 peer-focus:text-[12px] peer-focus:text-black">
//         {label}
//       </label>
//     </motion.div>
//   );

//   return (
//     <>
//       <motion.div
//         initial={typeof window === 'undefined' ? false :{ opacity: 0, x: -200 }}
//         whileInView={{ opacity: 1, x: 0 }}
//         transition={{ duration: 1 }}
//         className=""
//       >
//         <p className="text-[30px] md:text-[40px] font-[600] text-[#e05c24] pb-4">
//           {category.name}
//         </p>
//         {category.posts?.map((post) =>
//           post.list_items?.map((listGroup, groupIndex) => (
//             listGroup.map((item, itemIndex) => (
//               <div key={`${groupIndex}-${itemIndex}`} className="flex gap-2 items-start py-3">
//                 <div className="text-[#61ce70] text-xl pt-1">✔️</div>
//                 <p className="text-[18px] font-[700] md:text-[20px] md:font-[600] text-[#191d27]">
//                   {item}
//                 </p>
//               </div>
//             ))
//           ))
//         )}

//         <p className="text-[16px] lg:text-[18px] font-[400] text-[#616670] py-3 pl-6">
//           🎯 {category.description}
//         </p>
//       </motion.div>
//       <motion.div
//         initial={typeof window === 'undefined' ? false :{ opacity: 0, y: 300 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//         className="rounded-3xl bg-white shadow px-6 lg:px-12 py-8 relative"
//       >
//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//             {renderInput("your-name", "text", "Name")}
//             {renderInput("your-email", "email", "Email")}
//           </div>

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//             {renderInput("your-number", "number", "Number")}
//             {renderInput("your-url", "text", "Website")}
//           </div>

//           <motion.div
//             variants={inputVariants}
//             animate={errors["your-message"] ? "shake" : ""}
//             className="relative"
//           >
//             <textarea
//               name="your-message"
//               rows="4"
//               value={form["your-message"]}
//               onChange={handleChange}
//               placeholder=""
//               className={`peer w-full border px-4 py-4 text-[#050607] text-[16px] font-[400] resize-none ${errors["your-message"] ? "border-red-500" : "border-[#e7e7e7]"
//                 } focus:border-black focus:outline-none rounded-md`}
//             />
//             <label className="absolute text-[#050607] text-[14px] font-[400] left-4 top-4 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-[16px] peer-placeholder-shown:text-gray-500 peer-focus:top-1 peer-focus:text-[12px] peer-focus:text-black">
//               Message
//             </label>
//           </motion.div>

//           <motion.button
//             type="submit"
//             whileHover={{
//               scale: 1.05,
//               boxShadow: "0px 0px 16px rgba(0, 123, 255, 0.6)",
//             }}
//             whileTap={{ scale: 0.95 }}
//             transition={{ type: "spring", stiffness: 300 }}
//             className="w-full lg:w-[530px] bg-[#0e71b9] text-white rounded-full px-6 py-4 text-[15px] font-[500] shadow-md hover:bg-[#0e71b9] focus:outline-none"
//           >
//             Submit Request
//           </motion.button>

//           <AnimatePresence>
//             {submitted && (
//               <motion.div
//                 initial={typeof window === 'undefined' ? false :  { opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0 }}
//                 className="text-green-600 font-medium text-center"
//               >
//                 ✅ Submitted successfully!
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </form>
//       </motion.div>
//     </>

//   );
// }
