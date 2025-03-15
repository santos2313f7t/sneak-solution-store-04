
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
            <div className="px-4 py-1 bg-secondary rounded-full mb-6 animate-fade-down">
              <span className="text-xs font-medium text-foreground">100% Undetectable Solution</span>
            </div>
            <h1 className="heading-xl mb-6 animate-fade-down" style={{ animationDelay: "100ms" }}>
              Unparalleled Bypass Technology with External Cheat
            </h1>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl animate-fade-down" style={{ animationDelay: "200ms" }}>
              Experience gaming freedom with our premium undetectable bypass solution, paired with robust external cheat features for unmatched performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "300ms" }}>
              <Link 
                to="/pricing" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-md font-medium transition-colors focus-ring"
              >
                View Pricing
              </Link>
              <Link 
                to="/features" 
                className="bg-secondary hover:bg-secondary/80 text-secondary-foreground px-6 py-3 rounded-md font-medium transition-colors flex items-center justify-center focus-ring"
              >
                Learn More 
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
            <h2 className="heading-lg mb-4">State-of-the-Art Technology</h2>
            <p className="text-muted-foreground">
              Our solution combines advanced bypass techniques with powerful external cheats to deliver an exceptional gaming experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard 
              icon={Shield}
              title="Undetectable Bypass"
              description="Our proprietary bypass technology remains completely invisible to all anti-cheat systems."
            />
            <FeatureCard 
              icon={Zap}
              title="Performance Optimized"
              description="Engineered for minimal system impact, maintaining your game's performance while active."
            />
            <FeatureCard 
              icon={Eye}
              title="External Cheat Integration"
              description="Powerful external cheat features included with all plans for enhanced gameplay."
            />
            <FeatureCard 
              icon={Lock}
              title="Secure Updates"
              description="Regular updates delivered securely to maintain undetectability and add new features."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <h2 className="heading-lg mb-4">Ready to Transform Your Gaming Experience?</h2>
              <p className="text-muted-foreground mb-8">
                Join thousands of satisfied users already experiencing our premium bypass solution with external cheat features.
              </p>
              <Link 
                to="/pricing" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-md font-medium inline-flex items-center transition-colors focus-ring"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="p-8 bg-card rounded-xl border border-border max-w-sm w-full">
              <h3 className="font-semibold mb-4">Key Benefits</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  <span className="text-sm">100% undetectable to all anti-cheat systems</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  <span className="text-sm">Powerful external cheat features included</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  <span className="text-sm">Regular updates and new features</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  <span className="text-sm">Premium 24/7 customer support</span>
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
