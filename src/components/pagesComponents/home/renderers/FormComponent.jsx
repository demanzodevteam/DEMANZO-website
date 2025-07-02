import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { API_URL } from "../../../../config/urls";
import axios from "axios";

const FormComponent = () => {

  const [category, setCategory] = useState({
    name: '',
    slug: '',
    description: '',
    button: '',
    posts: [],
    image: '',
  });

  useEffect(() => {
    axios.get(API_URL + 'category/14')
      .then((response) => {
        setCategory(response.data);
      })
      .catch((error) => {
        console.error('Failed to fetch category:', error);
      });
  }, []);

  const data = [
    {
      symbol: '<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3m11.414 6.581a1 1 0 1 0-1.628-1.162l-4.314 6.04l-2.165-2.166a1 1 0 0 0-1.414 1.414l3 3a1 1 0 0 0 1.52-.126z" clip-rule="evenodd"/></svg>',
      content: 'Leads come in, but sales doesn’t trust them'
    }
  ]
  return (
    <>
      <div>
        <p className="text-[30px] md:text-[40px] font-[600] text-[#e05c24] pb-4">
          {category.name}
        </p>
        {category.posts?.map((post) =>
          post.list_items?.map((listGroup, groupIndex) => (
            listGroup.map((item, itemIndex) => (
              <div key={`${groupIndex}-${itemIndex}`} className="flex gap-2 items-start py-3">
                <div className="text-[#61ce70] text-xl pt-1">✔️</div>
                <p className="text-[18px] font-[700] md:text-[20px] md:font-[600] text-[#191d27]">
                  {item}
                </p>
              </div>
            ))
          ))
        )}

        <p className="text-[16px] lg:text-[18px] font-[400] text-[#616670] py-3 pl-6">
          🎯 {category.description}
        </p>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="rounded-3xl bg-white shadow px-6 lg:px-12 py-8 relative"
      >
        <form>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 py-3">
            <input type="text" placeholder="Your Name" className="border border-[#e7e7e7] hover:border-black focus:border-black  focus:outline-none active:border-black px-2 py-4 placeholder-[#050607] text-[16px] font-[400] text-[#050607]" required />
            <input type="email" placeholder="Your Email" className="border border-[#e7e7e7] hover:border-black focus:border-black  focus:outline-none active:border-black px-2 py-4 placeholder-[#050607] text-[16px] font-[400] text-[#050607]" required />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 py-3">
            <input type="number" placeholder="Your Number" className="border border-[#e7e7e7] hover:border-black focus:border-black  focus:outline-none active:border-black px-2 py-4 placeholder-[#050607] text-[16px] font-[400] text-[#050607]" required />
            <input type="url" placeholder="Your Website" className="border border-[#e7e7e7] hover:border-black focus:border-black  focus:outline-none active:border-black px-2 py-4 placeholder-[#050607] text-[16px] font-[400] text-[#050607]" required />
          </div>
          <div className="py-3">
            <textarea rows="4" placeholder="Your Message" className="w-full border border-[#e7e7e7] focus:border-black hover:border-black focus:outline-none px-2 py-4 placeholder-[#050607] text-[16px] font-[400] text-[#050607] resize-none"></textarea>
          </div>
          <div className="py-3">
            <input type="text" className="w-full border border-[#e7e7e7] hover:border-black focus:border-black  focus:outline-none active:border-black px-2 py-4 text-[16px] font-[400] text-[#050607]" required />
          </div>
          <button type="submit" className="w-[290px] lg:w-[530px] bg-[#2d89bf] hover:bg-[#f5a31c] text-white rounded-full px-6 py-3 cursor-pointer text-[15px] font-[500] absolute -bottom-6">Submit Request</button>
        </form>
      </motion.div>
    </>

  )
}

export default FormComponent;
