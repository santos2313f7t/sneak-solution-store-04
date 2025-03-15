
import { Star } from "lucide-react";

interface FeedbackCardProps {
  name: string;
  date: string;
  rating: number;
  comment: string;
}

const FeedbackCard = ({ name, date, rating, comment }: FeedbackCardProps) => {
  return (
    <div className="bg-card border border-border p-6 rounded-xl transition-all duration-300 hover-card">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="font-semibold">{name}</h3>
          <p className="text-xs text-muted-foreground">{date}</p>
        </div>
        <div className="flex">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < rating ? "fill-primary text-primary" : "text-muted"
              }`}
            />
          ))}
        </div>
      </div>
      <p className="text-sm text-foreground/90">{comment}</p>
    </div>
  );
};

export default FeedbackCard;
