import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Icon name="BookOpen" size={24} className="text-primary" />
          <h1 className="font-display text-2xl font-bold text-foreground">BLOG</h1>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <a href="#" className="text-foreground hover:text-primary transition-colors font-body font-medium">
            Главная
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors font-body font-medium">
            Статьи
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors font-body font-medium">
            О блоге
          </a>
        </nav>

        <Button variant="outline" size="icon" className="md:hidden">
          <Icon name="Menu" size={20} />
        </Button>
      </div>
    </header>
  );
};