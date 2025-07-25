import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState, useEffect } from "react";
import { API_URL } from "../../../../config/urls";
import axios from "axios";


export default function FaqAccordion() {
  const [category, setCategory] = useState({
    name: '',
    slug: '',
    description: '',
    button: '',
    posts: [],
    image: '',
  });
  useEffect(() => {
    axios.get(API_URL + 'category/6')
      .then((response) => {
        setCategory(response.data);
      })
      .catch((error) => {
        console.error('Failed to fetch category:', error);
      });
  }, []);

  return (
    <>
      <div class="flex gap-2 px-4 py-4 rounded-full bg-white w-fit  shadow-[0_0_15px_rgba(25,98,242,0.3)] mb-5">
        <svg xmlns="http://www.w3.org/2000/svg" class="text-[#1962f2]" width="24" height="24" viewBox="0 0 24 24">
          <path fill="currentColor" d="m15.07 11.25l-.9.92C13.45 12.89 13 13.5 13 15h-2v-.5c0-1.11.45-2.11 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41a2 2 0 0 0-2-2a2 2 0 0 0-2 2H8a4 4 0 0 1 4-4a4 4 0 0 1 4 4a3.2 3.2 0 0 1-.93 2.25M13 19h-2v-2h2M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10c0-5.53-4.5-10-10-10" />
        </svg>
        <p class="text-[16px] font-[500] text-[#616670]">{category.name}</p>
      </div>


      {category.description.split(/\r?\n/).map((line, index) => (
        <p
          key={index}
          className={`mb-5 text-2xl lg:text-4xl font-semibold text-center leading-tight ${index === 0 ? "text-[#191d27]" : "text-[#f15a29]"}`}
        >
          {line}
        </p>

      ))}
      <Accordion
        type="single"
        collapsible
        className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 md:px-10 pt-6"
        defaultValue="item-0"
      >
        {category.posts?.map((faq, index) => (
          <AccordionItem value={`item-${index}`}>
            <AccordionTrigger className="text-[16px] font-[600] px-3 py-2">{faq.title}</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p className="text-[16px] font-[500] text-[#616670] px-6 py-4">
                {faq.content}
              </p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </>

  )
}
