export function Testimonials() {
  const testimonials = [
    {
      name: "Ирина Соколова",
      role: "Клиент по делу об опеке",
      image: "/professional-woman-headshot.png",
      quote:
        "Благодаря грамотной защите суд оставил ребёнка со мной. Без этого юриста я бы не справилась — он вёл дело профессионально и всегда был на связи.",
    },
    {
      name: "Андрей Миронов",
      role: "Раздел имущества",
      image: "/professional-man-headshot.png",
      quote:
        "Помог отстоять квартиру при разводе. Бывшая жена претендовала на большую долю, но юрист грамотно выстроил позицию — суд встал на мою сторону.",
    },
    {
      name: "Татьяна Веселова",
      role: "Взыскание алиментов",
      image: "/professional-woman-smiling.png",
      quote:
        "Взыскали задолженность по алиментам за три года и добились индексации выплат. Всё чётко, без лишней нервотрёпки. Очень рекомендую.",
    },
  ]

  return (
    <section id="testimonials" className="bg-background py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-wide">Истории клиентов</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">Отзывы о работе</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card border border-border rounded-xl p-8">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-accent">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed italic">"{testimonial.quote}"</p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
