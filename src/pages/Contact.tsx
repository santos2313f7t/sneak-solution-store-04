
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

const Contact = () => {
  return (
    <section className="pt-40 pb-16">
      <div className="container">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-12">
            <h1 className="heading-lg mb-4">Entre em Contato</h1>
            <p className="text-muted-foreground">
              Entre no nosso Discord para obter suporte, conversar com outros usuários ou fazer perguntas sobre nossos produtos.
            </p>
          </div>

          <div className="bg-secondary/40 rounded-xl p-8 border border-border">
            <div className="text-center mb-8">
              <MessageSquare className="mx-auto h-16 w-16 mb-4 text-[#5865F2]" />
              <h2 className="text-xl font-semibold mb-2">Comunidade Discord</h2>
              <p className="text-muted-foreground text-sm">
                Junte-se à nossa comunidade no Discord para atualizações em tempo real, suporte dedicado e bate-papo com outros usuários.
              </p>
            </div>

            <div className="space-y-4">
              <a 
                href="https://discord.gg/THqM2gAe" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full bg-[#5865F2] hover:bg-[#4752C4] text-white py-3 rounded-md font-medium flex items-center justify-center gap-2 transition-colors focus-ring"
              >
                <MessageSquare className="h-5 w-5" />
                Entrar com Discord
              </a>
              
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-border" />
                </div>
                <div className="relative flex justify-center text-xs">
                  <span className="bg-background px-2 text-muted-foreground">
                    Ou envie um email
                  </span>
                </div>
              </div>
              
              <a 
                href="mailto:contato@sneaksolutions.com" 
                className="w-full bg-secondary hover:bg-secondary/80 text-secondary-foreground py-3 rounded-md font-medium flex items-center justify-center transition-colors focus-ring"
              >
                contato@sneaksolutions.com
              </a>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              Horário de atendimento: Segunda a Sexta, 9h às 18h
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
