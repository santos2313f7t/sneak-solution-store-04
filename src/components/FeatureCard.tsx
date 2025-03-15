
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

const FeatureCard = ({ 
  title, 
  description, 
  icon: Icon 
}: FeatureCardProps) => {
  return (
    <div className="p-6 border border-border rounded-xl transition-all duration-300 hover-card">
      <div className="p-3 bg-secondary inline-flex rounded-lg mb-4">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
};

export default FeatureCard;
