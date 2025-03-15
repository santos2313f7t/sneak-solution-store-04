
import PricingCard from "../components/PricingCard";

const Pricing = () => {
  const pricingPlans = [
    {
      title: "Mensal",
      price: "R$120",
      period: "/mês",
      description: "Perfeito para uso de curto prazo com todos os recursos premium incluídos.",
      features: [
        "Tecnologia de bypass indetectável",
        "Cheat externo incluído",
        "Suporte ao cliente 24/7",
        "Atualizações regulares",
        "Acesso ao painel do usuário",
      ],
      highlighted: false,
    },
    {
      title: "Trimestral",
      price: "R$220",
      period: "/3 meses",
      description: "Nosso plano mais popular com o melhor equilíbrio entre valor e flexibilidade.",
      features: [
        "Tecnologia de bypass indetectável",
        "Cheat externo incluído",
        "Suporte prioritário ao cliente 24/7",
        "Atualizações regulares",
        "Acesso ao painel do usuário",
        "Economize R$140 em comparação ao mensal",
      ],
      highlighted: true,
    },
    {
      title: "Vitalício",
      price: "R$330",
      period: "pagamento único",
      description: "Valor máximo com um pagamento único para acesso permanente.",
      features: [
        "Tecnologia de bypass indetectável",
        "Cheat externo incluído",
        "Suporte VIP ao cliente 24/7",
        "Atualizações vitalícias",
        "Acesso ao painel do usuário",
        "Acesso antecipado a novos recursos",
        "Benefícios exclusivos para membros vitalícios",
      ],
      highlighted: false,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-40 pb-16">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="heading-xl mb-6 animate-fade-down">Preços Simples e Transparentes</h1>
            <p className="text-muted-foreground text-lg mb-8 animate-fade-down" style={{ animationDelay: "100ms" }}>
              Escolha o plano que funciona melhor para você. Todos os planos incluem nossa tecnologia premium de bypass e recursos de cheat externo.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <PricingCard
                key={index}
                title={plan.title}
                price={plan.price}
                period={plan.period}
                description={plan.description}
                features={plan.features}
                highlighted={plan.highlighted}
              />
            ))}
          </div>

          <div className="mt-16 p-8 border border-border rounded-xl bg-secondary/50">
            <h3 className="font-semibold mb-4">Todos os Planos Incluem:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
              <div className="flex items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                <span className="text-sm">Tecnologia de bypass indetectável</span>
              </div>
              <div className="flex items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                <span className="text-sm">Suite completa de cheat externo</span>
              </div>
              <div className="flex items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                <span className="text-sm">Atualizações regulares de software</span>
              </div>
              <div className="flex items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                <span className="text-sm">Suporte dedicado ao cliente</span>
              </div>
              <div className="flex items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                <span className="text-sm">Acesso ao painel do usuário</span>
              </div>
              <div className="flex items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                <span className="text-sm">Compatibilidade com as versões mais recentes do jogo</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-secondary">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="heading-lg mb-4">Perguntas Frequentes</h2>
            <p className="text-muted-foreground">
              Encontre respostas para perguntas comuns sobre nossos planos e serviços.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-card border border-border p-6 rounded-xl">
              <h3 className="font-semibold mb-2">Como funciona o faturamento?</h3>
              <p className="text-sm text-muted-foreground">
                Todos os planos são cobrados antecipadamente pelo período selecionado. Os planos mensais e trimestrais serão renovados automaticamente, a menos que sejam cancelados.
              </p>
            </div>
            <div className="bg-card border border-border p-6 rounded-xl">
              <h3 className="font-semibold mb-2">Posso atualizar meu plano posteriormente?</h3>
              <p className="text-sm text-muted-foreground">
                Sim, você pode atualizar de mensal para trimestral ou vitalício a qualquer momento. Aplicaremos um crédito proporcional para o tempo restante.
              </p>
            </div>
            <div className="bg-card border border-border p-6 rounded-xl">
              <h3 className="font-semibold mb-2">Quais métodos de pagamento vocês aceitam?</h3>
              <p className="text-sm text-muted-foreground">
                Aceitamos principais cartões de crédito/débito, criptomoedas (Bitcoin, Ethereum) e métodos de pagamento alternativos selecionados.
              </p>
            </div>
            <div className="bg-card border border-border p-6 rounded-xl">
              <h3 className="font-semibold mb-2">Vocês oferecem reembolsos?</h3>
              <p className="text-sm text-muted-foreground">
                Oferecemos garantia de devolução do dinheiro em 24 horas se você tiver problemas técnicos que nossa equipe de suporte não consiga resolver.
              </p>
            </div>
            <div className="bg-card border border-border p-6 rounded-xl">
              <h3 className="font-semibold mb-2">O que acontece quando minha assinatura termina?</h3>
              <p className="text-sm text-muted-foreground">
                Quando sua assinatura termina, o acesso ao bypass e ao cheat externo será desativado até a renovação.
              </p>
            </div>
            <div className="bg-card border border-border p-6 rounded-xl">
              <h3 className="font-semibold mb-2">Quão rápido posso acessar o software após a compra?</h3>
              <p className="text-sm text-muted-foreground">
                O acesso é fornecido imediatamente após o pagamento bem-sucedido. Você receberá instruções de download por e-mail.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
