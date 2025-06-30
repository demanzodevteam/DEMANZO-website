import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function AccordionDemo() {
  return (
    <Accordion
      type="single"
      collapsible
      className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 md:px-10 pt-6"
      defaultValue="item-1"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-[16px] font-[600] px-3 py-2">Product Information</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p className="text-[16px] font-[500] text-[#616670] px-6 py-4">
            Our flagship product combines cutting-edge technology with sleek
            design. Built with premium materials, it offers unparalleled
            performance and reliability.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-[16px] font-[600] px-3 py-2">Product Information</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p className="text-[16px] font-[500] text-[#616670] px-6 py-4">
            Our flagship product combines cutting-edge technology with sleek
            design. Built with premium materials, it offers unparalleled
            performance and reliability.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="text-[16px] font-[600] px-3 py-2">Product Information</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p className="text-[16px] font-[500] text-[#616670] px-6 py-4">
            Our flagship product combines cutting-edge technology with sleek
            design. Built with premium materials, it offers unparalleled
            performance and reliability.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="text-[16px] font-[600] px-3 py-2">Product Information</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p className="text-[16px] font-[500] text-[#616670] px-6 py-4">
            Our flagship product combines cutting-edge technology with sleek
            design. Built with premium materials, it offers unparalleled
            performance and reliability.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="text-[16px] font-[600] px-3 py-2">Product Information</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p className="text-[16px] font-[500] text-[#616670] px-6 py-4">
            Our flagship product combines cutting-edge technology with sleek
            design. Built with premium materials, it offers unparalleled
            performance and reliability.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="text-[16px] font-[600] px-3 py-2">Product Information</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p className="text-[16px] font-[500] text-[#616670] px-6 py-4">
            Our flagship product combines cutting-edge technology with sleek
            design. Built with premium materials, it offers unparalleled
            performance and reliability.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger className="text-[16px] font-[600] px-3 py-2">Product Information</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p className="text-[16px] font-[500] text-[#616670] px-6 py-4">
            Our flagship product combines cutting-edge technology with sleek
            design. Built with premium materials, it offers unparalleled
            performance and reliability.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
