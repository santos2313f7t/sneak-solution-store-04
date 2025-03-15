
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="container">
        <div className="max-w-md mx-auto text-center">
          <h1 className="heading-xl mb-4">404</h1>
          <p className="text-xl mb-8 text-muted-foreground">Página não encontrada</p>
          <Link
            to="/"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-md font-medium transition-colors focus-ring inline-block"
          >
            Voltar ao Início
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
