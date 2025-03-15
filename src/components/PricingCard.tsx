
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

interface PricingCardProps {
  title: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  ctaText?: string;
  ctaLink?: string;
}

const PricingCard = ({
  title,
  price,
  period,
  description,
  features,
  highlighted = false,
  ctaText = "Começar Agora",
  ctaLink = "#",
}: PricingCardProps) => {
  return (
    <div 
      className={`rounded-xl p-8 transition-all duration-300 hover-card relative border ${
        highlighted 
          ? "border-primary/20 bg-primary/[0.03] shadow-md" 
          : "border-border bg-card"
      }`}
    >
      {highlighted && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground rounded-full text-xs font-medium">
          Mais Popular
        </div>
      )}

      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <div className="mt-4 mb-6">
        <span className="text-4xl font-bold">{price}</span>
        <span className="text-muted-foreground ml-1">{period}</span>
      </div>
      <p className="text-muted-foreground text-sm mb-6">{description}</p>
      
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="h-5 w-5 mr-2 flex-shrink-0 text-primary" />
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      
      <Link
        to={ctaLink}
        className={`w-full block text-center rounded-md py-2.5 font-medium transition-colors focus-ring ${
          highlighted
            ? "bg-primary text-primary-foreground hover:bg-primary/90"
            : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
        }`}
      >
        {ctaText}
      </Link>
    </div>
  );
};

export default PricingCard;
