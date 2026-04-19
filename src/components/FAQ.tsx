import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQ() {
  const faqs = [
    {
      question: "Как записаться на консультацию?",
      answer:
        "Позвоните по номеру +7 964 964-60-35 или нажмите кнопку «Записаться на консультацию» на этой странице. Азат Равилевич свяжется с вами и согласует удобное время.",
    },
    {
      question: "В каких делах вы специализируетесь?",
      answer:
        "Гражданские дела: имущественные споры, защита прав потребителей, наследство, долговые обязательства, трудовые споры. Веду дела в судах г. Стерлитамака и Республики Башкортостан.",
    },
    {
      question: "Можно ли провести консультацию онлайн?",
      answer:
        "Да, консультирую по телефону и видеосвязи. Документы принимаю в электронном виде. Это удобно, если вы находитесь за пределами Стерлитамака.",
    },
    {
      question: "Сколько стоит ведение дела?",
      answer:
        "Стоимость зависит от сложности дела и объёма работы. Обсуждается индивидуально на первичной консультации — без скрытых платежей.",
    },
    {
      question: "Берётесь ли вы за дела, которые уже в суде?",
      answer:
        "Да, вступаю в дело на любом этапе — даже если процесс уже идёт. Проанализирую материалы и предложу, как усилить вашу позицию.",
    },
    {
      question: "Гарантируете ли вы победу в суде?",
      answer:
        "Ни один юрист не вправе давать 100% гарантий — суд независим. Но я честно оцениваю шансы и делаю всё возможное, чтобы выиграть ваше дело.",
    },
  ]

  return (
    <section id="faq" className="bg-muted/30 py-20 md:py-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-wide">Вопросы?</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">
            Частые вопросы
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-foreground font-semibold hover:text-accent">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}