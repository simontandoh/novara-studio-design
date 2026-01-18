import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface AccordionItemData {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItemData[];
}

const AccordionList = ({ items }: AccordionProps) => {
  return (
    <Accordion type="single" collapsible className="w-full">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          value={`item-${index}`}
          className="border-b border-border"
        >
          <AccordionTrigger className="text-left text-base md:text-lg font-light py-6 hover:no-underline hover:text-accent transition-colors [&[data-state=open]]:text-accent">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground font-light pb-6 text-sm md:text-base leading-relaxed">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default AccordionList;
