export const Hero = () => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 to-background z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <h1 className="font-display text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Истории, идеи и вдохновение
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-body font-light mb-8">
            Место, где рождаются мысли и делятся опытом
          </p>
          <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground font-body">
            <span>☕ Кофе</span>
            <span className="w-1 h-1 rounded-full bg-muted-foreground"></span>
            <span>✍️ Статьи</span>
            <span className="w-1 h-1 rounded-full bg-muted-foreground"></span>
            <span>📚 Идеи</span>
          </div>
        </div>
      </div>
    </section>
  );
};