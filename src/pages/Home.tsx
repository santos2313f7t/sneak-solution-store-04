
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Zap, Eye, Lock } from "lucide-react";
import FeatureCard from "../components/FeatureCard";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="container mx-auto">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            {/* Logo */}
            <img 
              src="/lovable-uploads/ce8bcb67-33f1-41de-b9a9-3a36f914316b.png" 
              alt="SneaKSolutions Logo" 
              className="h-24 w-auto mb-8 animate-fade-in" 
            />
            <div className="px-4 py-1 bg-secondary rounded-full mb-6 animate-fade-down">
              <span className="text-xs font-medium text-foreground">Solução 100% Indetectável</span>
            </div>
            <h1 className="heading-xl mb-6 animate-fade-down" style={{ animationDelay: "100ms" }}>
              Tecnologia de Bypass Incomparável com Cheat Externo
            </h1>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl animate-fade-down" style={{ animationDelay: "200ms" }}>
              Experimente a liberdade nos jogos com nossa solução premium de bypass indetectável, combinada com recursos robustos de cheat externo para desempenho imbatível.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "300ms" }}>
              <Link 
                to="/pricing" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-md font-medium transition-colors focus-ring"
              >
                Ver Preços
              </Link>
              <Link 
                to="/features" 
                className="bg-secondary hover:bg-secondary/80 text-secondary-foreground px-6 py-3 rounded-md font-medium transition-colors flex items-center justify-center focus-ring"
              >
                Saiba Mais 
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Background design elements */}
        <div className="absolute top-1/2 left-1/2 w-full h-full max-w-6xl -translate-x-1/2 -translate-y-1/2 -z-10">
          <div className="absolute top-0 right-1/4 w-64 h-64 bg-gradient-radial from-primary/5 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-gradient-radial from-primary/5 to-transparent rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="heading-lg mb-4">Tecnologia de Ponta</h2>
            <p className="text-muted-foreground">
              Nossa solução combina técnicas avançadas de bypass com cheats externos poderosos para proporcionar uma experiência de jogo excepcional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard 
              icon={Shield}
              title="Bypass Indetectável"
              description="Nossa tecnologia proprietária de bypass permanece completamente invisível para todos os sistemas anti-cheat."
            />
            <FeatureCard 
              icon={Zap}
              title="Desempenho Otimizado"
              description="Projetado para impacto mínimo no sistema, mantendo o desempenho do seu jogo enquanto ativo."
            />
            <FeatureCard 
              icon={Eye}
              title="Integração de Cheat Externo"
              description="Recursos poderosos de cheat externo incluídos em todos os planos para gameplay aprimorado."
            />
            <FeatureCard 
              icon={Lock}
              title="Atualizações Seguras"
              description="Atualizações regulares entregues com segurança para manter a indetectabilidade e adicionar novos recursos."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <h2 className="heading-lg mb-4">Pronto para Transformar Sua Experiência de Jogo?</h2>
              <p className="text-muted-foreground mb-8">
                Junte-se a milhares de usuários satisfeitos que já estão experimentando nossa solução premium de bypass com recursos de cheat externo.
              </p>
              <Link 
                to="/pricing" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-md font-medium inline-flex items-center transition-colors focus-ring"
              >
                Começar Agora
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="p-8 bg-card rounded-xl border border-border max-w-sm w-full">
              <h3 className="font-semibold mb-4">Principais Benefícios</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  <span className="text-sm">100% indetectável para todos os sistemas anti-cheat</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  <span className="text-sm">Recursos poderosos de cheat externo incluídos</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  <span className="text-sm">Atualizações regulares e novos recursos</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  <span className="text-sm">Suporte premium ao cliente 24/7</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
