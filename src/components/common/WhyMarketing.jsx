import { MEDIA_URL } from "../../config/urls";
import { motion } from "framer-motion";

export default function WhyMarketing({ pageData }) {
  return (
    <div className="demanzo-container-auto demanzo-section">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.8fr] gap-2 bg-no-repeat bg-bottom bg-cover ">
        <div className="flex flex-col justify-center gap-4 py-8 px-4 lg:px-15 lg:py-10">
          <p className="demanzo-title">{pageData.title}</p>

          <div className="inline-block relative mx-auto lg:mx-0">
            <h2 className="demanzo-h1">{pageData.headings[0]}</h2>
          </div>

          {pageData?.paragraphs?.map((para, index) => (
            <p key={index} className="demanzo-bold-p">
              {para}
            </p>
          ))}
        </div>

        <motion.div
          className="relative flex items-center justify-center pt-8 pb-12 lg:pt-0 lg:pb-0"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0 }}
        >
          {/* Back gray card */}
          <div className="absolute w-[350px] md:w-[90%] lg:w-[500px] h-[300px] bg-gray-100 rounded-3xl top-6 left-6 z-0"></div>

          {/* Foreground image */}
          <motion.img
            src={MEDIA_URL + pageData.images?.[0]?.src}
            alt={pageData.images?.[0]?.alt}
            className="relative w-[350px] md:w-[90%] lg:w-[500px] h-[330px] object-cover rounded-3xl z-10 shadow-lg"
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: false, amount: 0 }}
          />
        </motion.div>
      </div>
    </div>
  );
}
