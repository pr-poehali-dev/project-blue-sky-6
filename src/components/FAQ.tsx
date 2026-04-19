import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQ() {
  const faqs = [
    {
      question: "С чего начать, если я хочу развестись?",
      answer:
        "Запишитесь на первичную консультацию. Разберём вашу ситуацию: наличие детей, имущество, долги. После этого я предложу оптимальную стратегию и расскажу, какие документы понадобятся.",
    },
    {
      question: "Сколько длится бракоразводный процесс?",
      answer:
        "Без споров — от 1 до 3 месяцев. При разделе имущества или споре об опеке — от 3 до 12 месяцев. Конкретные сроки зависят от суда и сложности дела.",
    },
    {
      question: "Можно ли провести консультацию онлайн?",
      answer:
        "Да, консультирую по видеосвязи (Zoom, WhatsApp, Telegram). Документы принимаю в электронном виде. Всё абсолютно законно и удобно.",
    },
    {
      question: "Что если я не могу позволить себе дорогое сопровождение?",
      answer:
        "Для сложных дел предусмотрена рассрочка. Стоимость сопровождения обсуждается индивидуально — позвоните или запишитесь на консультацию.",
    },
    {
      question: "Берётесь ли вы за дела, которые уже в суде?",
      answer:
        "Да, вступаю в дело на любом этапе — даже если процесс уже идёт. Проанализирую материалы дела и предложу, как улучшить позицию.",
    },
    {
      question: "Гарантируете ли вы победу в суде?",
      answer:
        "Никакой юрист не может гарантировать результат — суд независим. Но я делаю всё возможное: готовлю сильную позицию, все документы и аргументы для вашей победы.",
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
