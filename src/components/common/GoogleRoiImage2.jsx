import { MEDIA_URL } from "../../config/urls";
import { motion } from "framer-motion";

const GoogleRoiImage2 = ({SectionData}) => {
  return (
    <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}  
          className="lg:mr-[20px] md:mx-auto ">
        <img
            src={MEDIA_URL + SectionData?.src}
            alt={SectionData?.alt}
            class="w-[500px] object-cover"
        />
    </motion.div>
  )
}

export default GoogleRoiImage2
