export function AboutTrainer() {
  return (
    <section id="about" className="bg-muted/30 py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative h-96 md:h-full min-h-96">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl"></div>
            <img
              src="https://cdn.poehali.dev/files/3cc8ed61-196c-4851-8257-1ecd66457a70.png"
              alt="Юрист по семейному праву"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-accent font-semibold text-sm uppercase tracking-wide">О юристе</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">
                Ваш надёжный защитник в семейных делах
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Более 12 лет специализируюсь исключительно на семейном праве: развод, алименты,
              раздел имущества, определение места жительства детей и лишение родительских прав.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Представлял интересы клиентов в районных, городских и апелляционных судах.
              Знаю, как работает система изнутри — и использую это в вашу пользу.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-accent text-sm">&#10003;</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Член адвокатской палаты</p>
                  <p className="text-sm text-muted-foreground">Официальный статус, лицензия</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-accent text-sm">&#10003;</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">300+ выигранных дел</p>
                  <p className="text-sm text-muted-foreground">В том числе резонансные случаи</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-accent text-sm">&#10003;</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Персональное ведение каждого дела</p>
                  <p className="text-sm text-muted-foreground">Без передачи помощникам</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
