import { motion } from "framer-motion";

const GoogleRoiCard1 = ({SectionData}) => {
  return (
    <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }} className="mt-[30px] grid grid-cols-1 md:grid-cols-3 gap-10">
        {
            SectionData?.map((item, index) =>  {
            const isEven = (index + 1) % 2 === 0;

            return (
                <div key={index} class={`p-[30px] group rounded-md text-center ${
                isEven
                    ? 'bg-[#060a33]'
                    : 'bg-white hover:bg-[#060a33] transition duration-500'
                }`}>
                    <div class="flex items-center justify-center pb-[15px]" dangerouslySetInnerHTML={{ __html: item.svg }}></div>
                    <p class={`mb-[10px] text-[17px] font-[500] group-hover:text-white transition duration-500 ${isEven ? 'text-white' : 'text-black'}`}>{item.heading}</p>
                </div>
            );
        })}
    </motion.div>
  )
}

export default GoogleRoiCard1
