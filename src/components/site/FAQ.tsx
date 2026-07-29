import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export type FAQItem = { question: string; answer: string };

export function FAQ({ title, items }: { title: string; items: FAQItem[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <div className="mx-auto max-w-3xl">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <h2 className="font-serif text-4xl sm:text-5xl leading-[1.05] text-primary">{title}</h2>
      <Accordion type="single" collapsible className="mt-10">
        {items.map((item, i) => (
          <AccordionItem key={i} value={`item-${i}`} className="border-primary/20">
            <AccordionTrigger className="font-serif text-lg sm:text-xl text-primary hover:no-underline">
              {item.question}
            </AccordionTrigger>
            <AccordionContent>
              <p
                className="text-[15px] leading-[1.75] text-muted-foreground"
                style={{ whiteSpace: "pre-line" }}
              >
                {item.answer}
              </p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
