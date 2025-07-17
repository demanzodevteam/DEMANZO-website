import { motion } from "framer-motion";

const GoogleRoiCard3 = ({SectionData}) => {
  return (
    <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}   
          className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-[30px] lg:px-[70px] pb-[60px]">
        {
            SectionData?.map((item, index) => (
                <div key={index} className="lg:mr-[20px] pt-[35px] pr-[30px] pb-[30px] pl-[40px] rounded bg-white flex flex-col lg:flex-row gap-3 lg:gap-10 shadow text-center lg:text-left">
                    <div className="flex items-center justify-center pb-[15px]" dangerouslySetInnerHTML={{ __html: item.svg }}></div>
                    <p className="text-[16px] font-[500] text-[#616670]">{item.heading}</p>
                </div>
            ))
        }
    </motion.div>
  )
}

export default GoogleRoiCard3
