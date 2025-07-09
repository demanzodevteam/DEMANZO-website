import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState, useEffect } from "react";
import { API_URL } from "../../config/urls";
import axios from "axios";

export default function FaqAccordion({ category }) {
  return (
    <>
      <section className={`bg-${category.background} py-10 px-20`}>
        <p className="`mb-5 text-2xl lg:text-4xl font-semibold text-center leading-tight text-[#191d27]">
          {category.headings}
        </p>
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
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${category.colVal[1]} gap-4 px-4 md:px-10 pt-6 lg:max-w-7xl mx-auto mt-10 mb-20`}
          defaultValue="item-0"
        >
          {category.card_details?.map((faq, index) => (
            <AccordionItem value={`item-${index}`}>
              <AccordionTrigger className="text-[16px] font-[600] px-3 py-3 rounded-sm">
                {faq.heading}
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p className="text-[16px] font-[500] text-[#616670] px-6 py-4">
                  {faq.para}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </>
  );
}
