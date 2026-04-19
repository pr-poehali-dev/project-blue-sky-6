export function Benefits() {
  const benefits = [
    {
      icon: "🏠",
      title: "Имущественные споры",
      description: "Споры о праве собственности, купля-продажа недвижимости, признание сделок недействительными",
    },
    {
      icon: "🛒",
      title: "Защита прав потребителей",
      description: "Возврат денег за некачественный товар или услугу, взыскание неустойки с продавца",
    },
    {
      icon: "💼",
      title: "Трудовые споры",
      description: "Незаконное увольнение, невыплата зарплаты, восстановление на работе",
    },
    {
      icon: "📜",
      title: "Наследственные дела",
      description: "Оформление наследства, оспаривание завещания, признание права собственности",
    },
    {
      icon: "💰",
      title: "Долговые обязательства",
      description: "Взыскание долгов, споры по договорам займа, защита от незаконного взыскания",
    },
    {
      icon: "⚖️",
      title: "Представительство в суде",
      description: "Подготовка документов и представление ваших интересов в судах Стерлитамака и РБ",
    },
  ]

  return (
    <section id="benefits" className="bg-background py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-wide">Чем помогу</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">
            Все вопросы гражданского права
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

        {/* Photo row */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          <div className="rounded-2xl overflow-hidden h-64">
            <img
              src="https://cdn.poehali.dev/files/dfccb0de-077e-4f2c-8439-c93b1fdff6ef.jpg"
              alt="Юрист Хакимов — взыскание долгов"
              className="w-full h-full object-cover hover:scale-105 transition duration-500"
            />
          </div>
          <div className="rounded-2xl overflow-hidden h-64">
            <img
              src="https://cdn.poehali.dev/files/85825d82-5179-4485-a459-595363f5316a.png"
              alt="Юрист Хакимов — имущественные споры"
              className="w-full h-full object-cover hover:scale-105 transition duration-500"
            />
          </div>
          <div className="rounded-2xl overflow-hidden h-64">
            <img
              src="https://cdn.poehali.dev/files/3cc8ed61-196c-4851-8257-1ecd66457a70.png"
              alt="Юрист Хакимов — работа с документами"
              className="w-full h-full object-cover hover:scale-105 transition duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  )
}