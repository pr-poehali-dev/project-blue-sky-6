export function Benefits() {
  const benefits = [
    {
      icon: "⚖️",
      title: "Развод и раздел имущества",
      description: "Защита ваших интересов при разделе квартиры, бизнеса, автомобилей и других активов",
    },
    {
      icon: "👶",
      title: "Опека и место жительства детей",
      description: "Добьёмся, чтобы ребёнок остался с вами — законно и без конфликта",
    },
    {
      icon: "💰",
      title: "Алименты",
      description: "Взыскание или оспаривание алиментов, индексация, задолженность",
    },
    {
      icon: "📄",
      title: "Брачный договор",
      description: "Составление и оспаривание брачных договоров, защита от мошенничества",
    },
    {
      icon: "🏠",
      title: "Выселение и жильё",
      description: "Защита права на проживание, выселение бывших супругов, доля в квартире",
    },
    {
      icon: "🛡️",
      title: "Лишение родительских прав",
      description: "Представительство в делах об ограничении и лишении родительских прав",
    },
  ]

  return (
    <section id="benefits" className="bg-background py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-wide">Чем помогу</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">
            Все вопросы семейного права
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Комплексная юридическая помощь — от консультации до победы в суде
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition">
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
