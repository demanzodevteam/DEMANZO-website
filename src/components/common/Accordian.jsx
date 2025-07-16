import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useEffect } from "react";


export default function FaqAccordion({ category }) {
  return (
    <>
      <section className={`bg-${category.background} py-10 mx-4 md:px-10`}>
        <p className="demanzo-h1 mb-5 text-center">{category.headings}</p>
        {/* {category.headings.split(/\r?\n/).map((line, index) => (
        <p
          key={index}
          className={`mb-5 text-2xl lg:text-4xl font-semibold text-center leading-tight ${
            index === 0 ? "text-[#191d27]" : "text-[#f15a29]"
          }`}
        >
          {line}
        </p>
      ))} */}
        <Accordion
          type="single"
          collapsible
          className={`grid grid-cols-1 md:grid-cols-1 lg:grid-cols-${category.colVal[0]?.value} gap-4 px- md:px-10 pt-6 lg:max-w-7xl mx-auto mt-10 mb-20`}
          defaultValue="item-0"
        >
          {category.card_details?.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="demanzo-accordian-heading">
                {faq.heading}
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p className="demanzo-accordian-content">{faq.para}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </>
  );
}
