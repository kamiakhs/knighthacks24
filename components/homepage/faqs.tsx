import { Section, Container } from "@/components/craft";

import { ArrowUpRight } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type FAQItem = {
  question: string;
  answer: string;
  link?: string;
};

const content: FAQItem[] = [
  {
    question: "Can I attend if I am not a Kamiak student?",
    answer:
      "Yup! All middle- or high-school students (ages 12-18) are welcome.",
  },
  {
    question: "Do I need prior coding experience?",
    answer:
      "Prior coding experience is not necessary but might help. You can compete in two divisions - code and "+
      "no code. For no code, we recommend you gain some familiarity with Figma beforehand.",
  },
  {
    question: "Will I need to find my own food and drinks?",
    answer:
      "We will provide lunch (with vegetarian options), snacks, and water for free!",
  },
  {
    question: "What should I bring the day of?",
    answer:
      "We recommend you bring at least laptops and other necessary project equipment.",
  },
  {
    question: "I have another question. Who can I ask?",
    answer:
      "Please contact CS Club on Instagram at kamiakcsclub for further information.",
    link: "https://google.com",
  },
];

const FAQ = () => {
  return (
    <Section>
      <Container>
        <h3 className="!mt-0">Frequently Asked Questions</h3>
        <h4 className="text-muted-foreground">
          Can&apos;t find the answer you&apos;re looking for? Please contact KHS CS Club
          on <a href='https://www.instagram.com/kamiakcsclub/'>Instagram</a>
        </h4>
        <div className="not-prose mt-4 flex flex-col gap-4 md:mt-8">
          {content.map((item, index) => (
            <Accordion key={index} type="single" collapsible>
              <AccordionItem value={item.question}>
                <AccordionTrigger className="text-left">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-base md:w-3/4">
                  {item.answer}
                  {item.link && (
                    <a
                      href={item.link}
                      className="mt-2 flex w-full items-center opacity-60 transition-all hover:opacity-100"
                    >
                      Learn more <ArrowUpRight className="ml-1" size="16" />
                    </a>
                  )}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default FAQ;
