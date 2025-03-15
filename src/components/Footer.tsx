
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary mt-20">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="text-xl font-bold tracking-tight inline-block">
              <span className="mr-1">Snea</span>
              <span className="text-muted-foreground">K</span>
              <span>Solutions</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Fornecendo soluções premium de bypass indetectável com recursos de cheat externo.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Navegação</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/features" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Recursos
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Preços
                </Link>
              </li>
              <li>
                <Link to="/feedback" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Feedback
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Termos de Serviço
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link to="/refund" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Política de Reembolso
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contato</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">
                suporte@sneaksolutions.com
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Formulário de Contato
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-muted-foreground">
            &copy; {currentYear} SneaKSolutions. Todos os direitos reservados.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Discord
            </Link>
            <Link to="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Telegram
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
