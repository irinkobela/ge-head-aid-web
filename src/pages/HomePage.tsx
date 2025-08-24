import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Users, BookOpen, Search, Calendar, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import heroImage from '@/assets/medical-hero.jpg';

const HomePage = () => {
  const { language, t } = useLanguage();

  const featuredCards = [
    {
      title: language === 'ka' ? 'განათლება' : 'Education',
      description: language === 'ka' 
        ? 'ისწავლე შაკიკისა და თავის ტკივილის შესახებ'
        : 'Learn about migraines and headache disorders',
      icon: BookOpen,
      link: '/education',
      color: 'gradient-primary'
    },
    {
      title: language === 'ka' ? 'კვლევა' : 'Research',
      description: language === 'ka'
        ? 'აღმოაჩინე უახლესი საკვლევი შედეგები'
        : 'Discover the latest research findings',
      icon: Search,
      link: '/research',
      color: 'gradient-accent'
    },
    {
      title: language === 'ka' ? 'მხარდაჭერა' : 'Support',
      description: language === 'ka'
        ? 'მიღე პროფესიონალი მხარდაჭერა'
        : 'Get professional support and guidance',
      icon: Heart,
      link: '/support',
      color: 'gradient-primary'
    }
  ];

  const newsItems = [
    {
      title: language === 'ka' 
        ? 'ახალი კვლევა შაკიკის მკურნალობის შესახებ'
        : 'New Research on Migraine Treatment',
      excerpt: language === 'ka'
        ? 'თბილისის სამედიცინო უნივერსიტეტმა წარმოადგინა ახალი მიდგომა შაკიკის მკურნალობისთვის...'
        : 'Tbilisi Medical University presents a new approach to migraine treatment...',
      date: '2024-01-15',
      category: language === 'ka' ? 'კვლევა' : 'Research'
    },
    {
      title: language === 'ka'
        ? 'შაკიკის საერთაშორისო დღე 2024'
        : 'International Migraine Day 2024',
      excerpt: language === 'ka'
        ? 'გვაქვს სიამოვნება გავუწყოთ შაკიკის საერთაშორისო დღის ღონისძიებები...'
        : 'We are pleased to announce International Migraine Day events...',
      date: '2024-01-10',
      category: language === 'ka' ? 'ღონისძიება' : 'Event'
    },
    {
      title: language === 'ka'
        ? 'პაციენტთა ახალი მხარდაჭერის პროგრამა'
        : 'New Patient Support Program',
      excerpt: language === 'ka'
        ? 'ახალი პროგრამა უზრუნველყოფს უფასო კონსულტაციებს შაკიკით მოვლილთათვის...'
        : 'New program provides free consultations for migraine sufferers...',
      date: '2024-01-05',
      category: language === 'ka' ? 'მხარდაჭერა' : 'Support'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-primary/60"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-georgian">
            {t('heroTitle')}
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-georgian opacity-90">
            {t('heroSubtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 font-georgian">
              <Link to="/education">
                {t('learnMore')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary font-georgian">
              <Link to="/support">
                {t('getSupport')}
                <Heart className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary font-georgian">
            {t('missionTitle')}
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-muted-foreground font-georgian">
            {t('missionText')}
          </p>
        </div>
      </section>

      {/* Featured Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredCards.map((card, index) => (
              <Link key={index} to={card.link} className="group">
                <Card className="medical-card h-full hover:shadow-[var(--shadow-strong)] transition-all duration-300">
                  <CardHeader className="text-center pb-4">
                    <div className={`w-16 h-16 ${card.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <card.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-georgian">{card.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription className="text-base font-georgian">
                      {card.description}
                    </CardDescription>
                    <div className="mt-4 text-primary group-hover:translate-x-2 transition-transform duration-300 inline-flex items-center font-georgian">
                      {t('learnMore')}
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary font-georgian">
              {t('featuredNews')}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {newsItems.map((item, index) => (
              <Card key={index} className="medical-card">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm bg-accent/10 text-accent px-2 py-1 rounded font-georgian">
                      {item.category}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {new Date(item.date).toLocaleDateString(language === 'ka' ? 'ka-GE' : 'en-US')}
                    </span>
                  </div>
                  <CardTitle className="text-lg font-georgian">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="font-georgian mb-4">
                    {item.excerpt}
                  </CardDescription>
                  <Button variant="ghost" className="p-0 h-auto text-primary font-georgian">
                    {t('readMore')}
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg" className="font-georgian">
              <Link to="/news">
                {t('news')}
                <Calendar className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;