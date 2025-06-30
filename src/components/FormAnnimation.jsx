import { motion } from "framer-motion";

const FormAnnimation = () => {
  return (
    <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="rounded-3xl bg-white shadow px-6 lg:px-12 py-8 relative"
      >
        <form>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 py-3">
                <input type="text" placeholder="Your Name" class="border border-[#e7e7e7] hover:border-black focus:border-black  focus:outline-none active:border-black px-2 py-4 placeholder-[#050607] text-[16px] font-[400] text-[#050607]" required />
                <input type="email" placeholder="Your Email" class="border border-[#e7e7e7] hover:border-black focus:border-black  focus:outline-none active:border-black px-2 py-4 placeholder-[#050607] text-[16px] font-[400] text-[#050607]" required />
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 py-3">
                <input type="number" placeholder="Your Number" class="border border-[#e7e7e7] hover:border-black focus:border-black  focus:outline-none active:border-black px-2 py-4 placeholder-[#050607] text-[16px] font-[400] text-[#050607]" required />
                <input type="url" placeholder="Your Website" class="border border-[#e7e7e7] hover:border-black focus:border-black  focus:outline-none active:border-black px-2 py-4 placeholder-[#050607] text-[16px] font-[400] text-[#050607]" required />
            </div>
            <div class="py-3">
                <textarea rows="4" placeholder="Your Message" class="w-full border border-[#e7e7e7] focus:border-black hover:border-black focus:outline-none px-2 py-4 placeholder-[#050607] text-[16px] font-[400] text-[#050607] resize-none"></textarea>
            </div>
            <div class="py-3">
                <input type="text" class="w-full border border-[#e7e7e7] hover:border-black focus:border-black  focus:outline-none active:border-black px-2 py-4 text-[16px] font-[400] text-[#050607]" required />
            </div>
            <button type="submit" class="w-[290px] lg:w-[530px] bg-[#2d89bf] hover:bg-[#f5a31c] text-white rounded-full px-6 py-3 cursor-pointer text-[15px] font-[500] absolute -bottom-6">Submit Request</button>
        </form>
    </motion.div>
  )
}

export default FormAnnimation
