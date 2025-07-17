import { motion } from "framer-motion";
import { MEDIA_URL } from "../../config/urls";

const GoogleRoiImage = ({SectionData}) => {
  return (
    <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }} 
          class="pt-[20px] md:pt-[50px] lg:px-[40px] relative w-fit">
        <div class="absolute w-[280px] h-[250px]  md:w-[600px] lg:w-[400px] md:h-[400px] lg:h-[450px] bg-[#f4f4f4] rounded-[30px] z-0 bottom-10 left-10 md:bottom-15 md:left-15 lg:bottom-20 lg:left-20"></div>

        <img
            src={MEDIA_URL + SectionData?.src}
            alt={SectionData?.alt}
            class="w-[280px] md:w-[600px] lg:w-[500px] h-[250px] md:h-[400px] lg:h-[450px] object-cover rounded-[30px] relative z-10"
        />
    </motion.div>
  )
}

export default GoogleRoiImage
