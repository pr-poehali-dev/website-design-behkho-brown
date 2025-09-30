import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { ArticleCard } from '@/components/ArticleCard';

const articles = [
  {
    id: 1,
    title: 'Искусство медленного чтения',
    excerpt: 'В эпоху информационного шума важно находить время для вдумчивого чтения. Как книги меняют наше восприятие мира и помогают замедлиться.',
    image: '/img/7a51e835-6feb-452d-92f8-6db8c842db02.jpg',
    date: '15 марта 2024',
    readTime: '5 мин',
    category: 'Культура'
  },
  {
    id: 2,
    title: 'Минимализм в дизайне',
    excerpt: 'Почему меньше — это больше? Исследуем принципы минималистичного дизайна и его влияние на современную эстетику.',
    image: '/img/11c93973-a801-4124-a212-25edf7afc774.jpg',
    date: '12 марта 2024',
    readTime: '7 мин',
    category: 'Дизайн'
  },
  {
    id: 3,
    title: 'Утренние ритуалы',
    excerpt: 'Как первые часы дня определяют продуктивность? Простые привычки, которые меняют жизнь к лучшему.',
    image: '/img/e1c2bf37-f340-454f-b904-6db0349c0c2e.jpg',
    date: '10 марта 2024',
    readTime: '4 мин',
    category: 'Лайфстайл'
  },
  {
    id: 4,
    title: 'Философия кофе',
    excerpt: 'Больше чем напиток: как культура кофе объединяет людей и создает особую атмосферу для творчества.',
    image: '/img/7a51e835-6feb-452d-92f8-6db8c842db02.jpg',
    date: '8 марта 2024',
    readTime: '6 мин',
    category: 'Культура'
  },
  {
    id: 5,
    title: 'Цифровой детокс',
    excerpt: 'Зачем нужны перерывы от технологий и как правильно организовать цифровой детокс для восстановления энергии.',
    image: '/img/11c93973-a801-4124-a212-25edf7afc774.jpg',
    date: '5 марта 2024',
    readTime: '5 мин',
    category: 'Лайфстайл'
  },
  {
    id: 6,
    title: 'Творческий процесс',
    excerpt: 'От идеи до воплощения: как находить вдохновение и превращать мысли в законченные произведения.',
    image: '/img/e1c2bf37-f340-454f-b904-6db0349c0c2e.jpg',
    date: '3 марта 2024',
    readTime: '8 мин',
    category: 'Творчество'
  }
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="font-display text-4xl font-bold text-foreground">Последние статьи</h2>
            <p className="text-muted-foreground font-body">Всего {articles.length} публикаций</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <div key={article.id} style={{ animationDelay: `${index * 100}ms` }}>
                <ArticleCard {...article} />
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer className="border-t border-border/50 mt-20 py-12 bg-secondary/20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground font-body">
            © 2024 BLOG. Создано с любовью к словам.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;