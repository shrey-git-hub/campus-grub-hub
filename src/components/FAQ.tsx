import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Can I pause my subscription?",
    answer: "Yes, anytime. No penalties. Just skip that week in the app or website.",
  },
  {
    question: "What if I have food allergies?",
    answer: "Every meal has clear allergen labels and full ingredient lists. If you're unsure, contact us before ordering.",
  },
  {
    question: "Do I need cooking skills?",
    answer: "No! Just heat and eat in 5 minutes max. Every meal comes with simple heating instructions.",
  },
  {
    question: "Is there a minimum commitment?",
    answer: "No. Cancel anytime, skip any week, or pause during breaks with no penalties.",
  },
  {
    question: "What if I forget to pick up my meals?",
    answer: "Meals stay fresh in temperature-controlled lockers for 48 hours. We'll send you reminders.",
  },
  {
    question: "Can I try before subscribing?",
    answer: "Yes! You can buy single meals first to see if you like them before committing to a plan.",
  },
  {
    question: "How do lockers work?",
    answer: "Order by Sunday, we deliver Tuesday morning. You get a notification, scan your QR code at the locker, and it opens automatically.",
  },
  {
    question: "What's included in each meal?",
    answer: "Every meal includes vegetables, protein, and grains. Plus nutritional info, recipe cards, and cultural background.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-muted-foreground">
            Got questions? We've got answers.
          </p>
        </div>
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card rounded-xl px-6 shadow-soft border-0"
            >
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <span className="font-semibold text-lg">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
