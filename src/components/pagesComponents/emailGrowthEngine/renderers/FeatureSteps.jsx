// import React from "react";

// export default function FeatureSteps({
//   steps = [],
//   background = "from-[#FBFEFF] to-[#FEF2F2]",
// }) {
//   return (
//     <section
//       className={`bg-gradient-to-b ${background} px-4 md:px-10 lg:px-20 py-16 space-y-4 text-center`}
//     >
//       <div className="grid md:grid-cols-2 gap-4">
//         {steps.map((step, index) => (
//           <div key={index} className="lg:p-4">
//             <div className="flex md:gap-3">
//               <div className="p-4">
//                 {step.icon || typeof step.icon === "object" ? step.icon : null}
//               </div>
//               <div className="p-3 text-start space-y-6">
//                 <h1 className="text-[20px] font-bold">{step.title}</h1>
//                 {step.points.map((pt, i) => (
//                   <p
//                     key={i}
//                     className="text-[16px] font-semibold text-[#616670]"
//                   >
//                     {pt}
//                   </p>
//                 ))}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

import React from "react";

export default function FeatureSteps({
  steps = [],
  background = "from-[#FBFEFF] to-[#FEF2F2]",
}) {
  return (
    <section
      className={`bg-gradient-to-b ${background} px-4 md:px-10 lg:px-20 py-16 space-y-4 text-center`}
    >
      <div className="grid md:grid-cols-2 gap-4">
        {steps.map((step, index) => (
          <div key={index} className="lg:p-4">
            <div className="flex md:gap-3">
              <div
                className="p-4"
                dangerouslySetInnerHTML={{ __html: step.icon }}
              />
              <div className="p-3 text-start space-y-6">
                <h1 className="text-[20px] font-bold">{step.title}</h1>
                {step.points.map((pt, i) => (
                  <p
                    key={i}
                    className="text-[16px] font-semibold text-[#616670]"
                  >
                    {pt}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
