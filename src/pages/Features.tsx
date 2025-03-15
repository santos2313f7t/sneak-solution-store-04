
import { Shield, Zap, Eye, Lock, Code, Headphones, RefreshCw, LayoutDashboard } from "lucide-react";
import FeatureCard from "../components/FeatureCard";

const Features = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-40 pb-16">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="heading-xl mb-6 animate-fade-down">Recursos Avançados</h1>
            <p className="text-muted-foreground text-lg mb-8 animate-fade-down" style={{ animationDelay: "100ms" }}>
              Nossa solução combina tecnologia de bypass de ponta com poderosos recursos de cheat externo para uma experiência de jogo sem igual.
            </p>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-16">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="heading-lg mb-4">Tecnologia Principal</h2>
            <p className="text-muted-foreground">
              A base da nossa solução é construída sobre estes recursos poderosos que garantem indetectabilidade e desempenho.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard 
              icon={Shield}
              title="Bypass Indetectável"
              description="Nossa tecnologia proprietária de bypass permanece completamente invisível para todos os sistemas anti-cheat, com múltiplas camadas de proteção."
            />
            <FeatureCard 
              icon={Zap}
              title="Desempenho Otimizado"
              description="Projetado para impacto mínimo no sistema, mantendo o desempenho do seu jogo enquanto ativo, com uso negligenciável de recursos."
            />
            <FeatureCard 
              icon={Eye}
              title="Suite de Cheat Externo"
              description="Recursos abrangentes de cheat externo incluídos em todos os planos para gameplay aprimorado e vantagem competitiva."
            />
            <FeatureCard 
              icon={Lock}
              title="Arquitetura Segura"
              description="Construído com design de segurança prioritária para proteger sua conta e sistema enquanto fornece recursos poderosos."
            />
          </div>
        </div>
      </section>

      {/* Advanced Features */}
      <section className="py-16 bg-secondary">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="heading-lg mb-4">Recursos Adicionais</h2>
            <p className="text-muted-foreground">
              Além da nossa tecnologia principal, fornecemos estes benefícios adicionais para melhorar sua experiência.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard 
              icon={Code}
              title="Atualizações Regulares"
              description="Atualizações contínuas garantem compatibilidade com mudanças no jogo e introduzem novos recursos e melhorias."
            />
            <FeatureCard 
              icon={Headphones}
              title="Suporte Premium"
              description="Acesso à nossa equipe dedicada de suporte para resolução rápida de quaisquer problemas ou dúvidas que você possa ter."
            />
            <FeatureCard 
              icon={RefreshCw}
              title="Integração Perfeita"
              description="Processo de configuração fácil sem necessidade de configuração complicada - basta instalar e jogar."
            />
            <FeatureCard 
              icon={LayoutDashboard}
              title="Painel do Usuário"
              description="Acesse seus detalhes de assinatura, baixe atualizações e gerencie sua conta através do nosso painel intuitivo."
            />
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-16">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="heading-lg mb-4">Especificações Técnicas</h2>
            <p className="text-muted-foreground">
              Nossa solução é construída com a tecnologia mais recente para garantir compatibilidade e desempenho.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-border rounded-xl p-8">
              <h3 className="font-semibold mb-4">Requisitos do Sistema</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2"></div>
                  <div>
                    <span className="font-medium text-sm">Sistema Operacional:</span>
                    <p className="text-sm text-muted-foreground">Windows 10/11 (64-bit)</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2"></div>
                  <div>
                    <span className="font-medium text-sm">Processador:</span>
                    <p className="text-sm text-muted-foreground">Intel Core i3/AMD Ryzen 3 ou superior</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2"></div>
                  <div>
                    <span className="font-medium text-sm">Memória:</span>
                    <p className="text-sm text-muted-foreground">4 GB RAM mínimo (8 GB recomendado)</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2"></div>
                  <div>
                    <span className="font-medium text-sm">Placa de Vídeo:</span>
                    <p className="text-sm text-muted-foreground">Compatível com DirectX 11</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2"></div>
                  <div>
                    <span className="font-medium text-sm">Armazenamento:</span>
                    <p className="text-sm text-muted-foreground">100 MB de espaço livre</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="border border-border rounded-xl p-8">
              <h3 className="font-semibold mb-4">Recursos do Cheat Externo</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2"></div>
                  <div>
                    <span className="font-medium text-sm">Funcionalidade ESP:</span>
                    <p className="text-sm text-muted-foreground">ESP de jogadores, ESP de itens, indicadores de distância</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2"></div>
                  <div>
                    <span className="font-medium text-sm">Assistência de Mira:</span>
                    <p className="text-sm text-muted-foreground">Configurações de mira personalizáveis e suavização</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2"></div>
                  <div>
                    <span className="font-medium text-sm">Melhorias Visuais:</span>
                    <p className="text-sm text-muted-foreground">Configurações visuais ajustáveis para visibilidade ideal</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2"></div>
                  <div>
                    <span className="font-medium text-sm">Personalização:</span>
                    <p className="text-sm text-muted-foreground">Personalização completa de todos os recursos via menu intuitivo</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2"></div>
                  <div>
                    <span className="font-medium text-sm">Atualizações:</span>
                    <p className="text-sm text-muted-foreground">Atualizações regulares de recursos e patches de compatibilidade</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
