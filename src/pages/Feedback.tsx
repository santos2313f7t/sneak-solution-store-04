
import { useState } from "react";
import FeedbackCard from "../components/FeedbackCard";

const Feedback = () => {
  const [filter, setFilter] = useState("all");
  
  const feedbacks = [
    {
      id: 1,
      name: "Ricardo M.",
      date: "15 de junho, 2023",
      rating: 5,
      comment: "Absolutamente incrível! Estou usando há 2 meses e continua completamente indetectável. O cheat externo é muito superior aos outros que já testei.",
      category: "bypass",
    },
    {
      id: 2,
      name: "Gabriel S.",
      date: "18 de junho, 2023",
      rating: 5,
      comment: "O melhor investimento que fiz. O bypass funciona perfeitamente e o cheat externo tem todas as funcionalidades que eu precisava. Suporte ao cliente excelente também.",
      category: "external",
    },
    {
      id: 3,
      name: "Lucas F.",
      date: "20 de junho, 2023",
      rating: 5,
      comment: "Comprei o plano lifetime e não me arrependo. A qualidade do produto é excepcional e as atualizações são regulares. 100% indetectável como prometido.",
      category: "bypass",
    },
    {
      id: 4,
      name: "Diego R.",
      date: "22 de junho, 2023",
      rating: 4,
      comment: "O cheat externo é muito bom, especialmente as funções de ESP. Uso diariamente sem problemas de detecção. Recomendo fortemente.",
      category: "external",
    },
    {
      id: 5,
      name: "Marcelo T.",
      date: "25 de junho, 2023",
      rating: 5,
      comment: "Finalmente um bypass que realmente funciona! Já tentei vários outros e sempre acabava banido. Com o SneaKSolutions, jogo tranquilo há semanas.",
      category: "bypass",
    },
    {
      id: 6,
      name: "Felipe A.",
      date: "27 de junho, 2023",
      rating: 5,
      comment: "A combinação do bypass com o cheat externo é imbatível. Interface muito fácil de usar e o desempenho é excelente, sem impacto no FPS.",
      category: "both",
    },
    {
      id: 7,
      name: "Bruno L.",
      date: "28 de junho, 2023",
      rating: 5,
      comment: "Serviço de primeira qualidade. O suporte técnico respondeu todas as minhas dúvidas rapidamente e o produto funciona exatamente como anunciado.",
      category: "support",
    },
    {
      id: 8,
      name: "Thiago M.",
      date: "30 de junho, 2023",
      rating: 4,
      comment: "As funcionalidades do cheat externo são muito completas e fáceis de configurar. O bypass continua funcionando perfeitamente mesmo após as atualizações do jogo.",
      category: "both",
    },
    {
      id: 9,
      name: "João V.",
      date: "10 de junho, 2023",
      rating: 5,
      comment: "Melhor investimento que fiz para jogos. O bypass é realmente indetectável e o cheat externo tem recursos que nem imaginava que existiam.",
      category: "both",
    },
  ];

  const filteredFeedbacks = filter === "all" 
    ? feedbacks 
    : feedbacks.filter(fb => fb.category === filter);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-40 pb-16">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="heading-xl mb-6 animate-fade-down">Feedback dos Clientes</h1>
            <p className="text-muted-foreground text-lg mb-8 animate-fade-down" style={{ animationDelay: "100ms" }}>
              Veja o que nossos clientes estão dizendo sobre o bypass e cheat externo do SneaKSolutions.
            </p>
          </div>
        </div>
      </section>

      {/* Feedback Filter */}
      <section className="py-8">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button 
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors focus-ring ${
                filter === "all" 
                  ? "bg-primary text-primary-foreground" 
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              Todos os Feedbacks
            </button>
            <button 
              onClick={() => setFilter("bypass")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors focus-ring ${
                filter === "bypass" 
                  ? "bg-primary text-primary-foreground" 
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              Bypass
            </button>
            <button 
              onClick={() => setFilter("external")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors focus-ring ${
                filter === "external" 
                  ? "bg-primary text-primary-foreground" 
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              Cheat Externo
            </button>
            <button 
              onClick={() => setFilter("both")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors focus-ring ${
                filter === "both" 
                  ? "bg-primary text-primary-foreground" 
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              Ambos
            </button>
            <button 
              onClick={() => setFilter("support")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors focus-ring ${
                filter === "support" 
                  ? "bg-primary text-primary-foreground" 
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              Suporte
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFeedbacks.map((feedback) => (
              <FeedbackCard
                key={feedback.id}
                name={feedback.name}
                date={feedback.date}
                rating={feedback.rating}
                comment={feedback.comment}
              />
            ))}
          </div>

          {filteredFeedbacks.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Nenhum feedback encontrado para esta categoria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="heading-lg mb-4">Satisfação do Cliente</h2>
            <p className="text-muted-foreground">
              Nossos clientes amam nossos produtos, e os números falam por si.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">98%</div>
              <p className="text-sm text-muted-foreground">Satisfação do Cliente</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">0%</div>
              <p className="text-sm text-muted-foreground">Taxa de Detecção</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">1000+</div>
              <p className="text-sm text-muted-foreground">Usuários Ativos</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">24/7</div>
              <p className="text-sm text-muted-foreground">Suporte ao Cliente</p>
            </div>
          </div>
        </div>
      </section>

      {/* Submit Feedback */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="heading-md mb-4">Compartilhe Sua Experiência</h2>
              <p className="text-muted-foreground">
                Valorizamos seu feedback. Conte-nos sobre sua experiência com nossos produtos.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-8">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:border-input bg-background"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:border-input bg-background"
                    placeholder="Seu email"
                  />
                </div>
                <div>
                  <label htmlFor="rating" className="block text-sm font-medium mb-2">
                    Avaliação
                  </label>
                  <select
                    id="rating"
                    className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:border-input bg-background"
                  >
                    <option value="5">5 Estrelas</option>
                    <option value="4">4 Estrelas</option>
                    <option value="3">3 Estrelas</option>
                    <option value="2">2 Estrelas</option>
                    <option value="1">1 Estrela</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Seu Feedback
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:border-input bg-background resize-none"
                    placeholder="Compartilhe sua experiência com nossos produtos..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-md font-medium transition-colors focus-ring"
                >
                  Enviar Feedback
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Feedback;
