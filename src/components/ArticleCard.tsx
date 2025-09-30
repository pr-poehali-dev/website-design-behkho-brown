import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface ArticleCardProps {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  category: string;
}

export const ArticleCard = ({ title, excerpt, image, date, readTime, category }: ArticleCardProps) => {
  return (
    <Card className="overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-lg border-border/50 animate-fade-in">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground font-body font-semibold">
          {category}
        </Badge>
      </div>
      <CardContent className="p-6">
        <h3 className="font-display text-2xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground mb-4 font-body line-clamp-3">
          {excerpt}
        </p>
        <div className="flex items-center gap-4 text-sm text-muted-foreground font-body">
          <div className="flex items-center gap-1">
            <Icon name="Calendar" size={16} />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-1">
            <Icon name="Clock" size={16} />
            <span>{readTime}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};