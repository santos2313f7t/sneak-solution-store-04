
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="container">
        <div className="max-w-md mx-auto text-center">
          <h1 className="heading-xl mb-4">404</h1>
          <p className="text-xl mb-8 text-muted-foreground">Página não encontrada</p>
          <Button asChild size="lg">
            <Link to="/">Voltar ao Início</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
