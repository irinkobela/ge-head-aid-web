import React from 'react';
import { Calendar, Clock, ArrowRight, Image, Video, FileText } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useLanguage } from '@/contexts/LanguageContext';

const NewsPage = () => {
  const { language, t } = useLanguage();

  const articles = [
    {
      title: language === 'ka' 
        ? 'ახალი კვლევა აღმოაჩენს შაკიკის ხრონიციზაციის მიზეზებს'
        : 'New Study Reveals Causes of Migraine Chronification',
      excerpt: language === 'ka'
        ? 'თბილისის სამედიცინო უნივერსიტეტის მკვლევარებმა აღმოაჩინეს ახალი ფაქტორები, რომლებიც გავლენას ახდენს შაკიკის ქრონიკულ ფორმაში გადასვლაზე...'
        : 'Researchers at Tbilisi Medical University discovered new factors influencing the transition of migraine to chronic form...',
      date: '2024-01-20',
      category: language === 'ka' ? 'კვლევა' : 'Research',
      author: language === 'ka' ? 'ნანა გორგაძე' : 'Nana Gorgadze',
      readTime: '5 წუთი'
    },
    {
      title: language === 'ka'
        ? 'შაკიკის საერთაშორისო დღე: ღონისძიებები და ინიციატივები'
        : 'International Migraine Day: Events and Initiatives',
      excerpt: language === 'ka'
        ? 'წელს შაკიკის საერთაშორისო დღე აღინიშნება სპეციალური ღონისძიებებით ქუთაისში, თბილისსა და ბათუმში...'
        : 'This year International Migraine Day will be marked with special events in Kutaisi, Tbilisi, and Batumi...',
      date: '2024-01-18',
      category: language === 'ka' ? 'ღონისძიება' : 'Event',
      author: language === 'ka' ? 'მედია ჯგუფი' : 'Media Team',
      readTime: '3 წუთი'
    },
    {
      title: language === 'ka'
        ? 'უფასო კონსულტაციების პროგრამის გაფართოება'
        : 'Expansion of Free Consultation Program',
      excerpt: language === 'ka'
        ? 'ორგანიზაცია აფართოებს უფასო კონსულტაციების პროგრამას და მალე დაიწყება მომსახურება 5 ახალ რეგიონში...'
        : 'The organization is expanding its free consultation program and will soon start services in 5 new regions...',
      date: '2024-01-15',
      category: language === 'ka' ? 'მხარდაჭერა' : 'Support',
      author: language === 'ka' ? 'ადმინისტრაცია' : 'Administration',
      readTime: '4 წუთი'
    }
  ];

  const events = [
    {
      title: language === 'ka' ? 'შაკიკის ფორუმი 2024' : 'Migraine Forum 2024',
      date: '2024-03-15',
      time: '10:00',
      location: language === 'ka' ? 'თბილისი, ჰოტელ რადისონი' : 'Tbilisi, Radisson Hotel',
      description: language === 'ka'
        ? 'ყოველწლიური ფორუმი, რომელშიც მონაწილეობენ წამყვანი ექსპერტები'
        : 'Annual forum with participation of leading experts',
      type: 'conference'
    },
    {
      title: language === 'ka' ? 'პაციენტთა მხარდაჭერის ჯგუფი' : 'Patient Support Group',
      date: '2024-02-10',
      time: '15:00',
      location: language === 'ka' ? 'თბილისი, სამედიცინო ცენტრი' : 'Tbilisi, Medical Center',
      description: language === 'ka'
        ? 'ყოველთვიური შეხვედრა პაციენტებისა და მათი ოჯახებისთვის'
        : 'Monthly meeting for patients and their families',
      type: 'support'
    },
    {
      title: language === 'ka' ? 'საგანმანათლებლო ვებინარი' : 'Educational Webinar',
      date: '2024-02-05',
      time: '18:00',
      location: language === 'ka' ? 'ონლაინ' : 'Online',
      description: language === 'ka'
        ? 'შაკიკის თანამედროვე მკურნალობის მეთოდები'
        : 'Modern migraine treatment methods',
      type: 'webinar'
    }
  ];

  const mediaItems = [
    {
      title: language === 'ka' ? 'შაკიკის დღიური - როგორ წარმოვებ' : 'Migraine Diary - How to Keep',
      type: 'video',
      duration: '12:45',
      views: '2.3K',
      description: language === 'ka' 
        ? 'ვიდეო სახელმძღვანელო შაკიკის დღიურის სწორად წარმოებისთვის'
        : 'Video guide for properly keeping a migraine diary'
    },
    {
      title: language === 'ka' ? 'შაკიკის ფორუმი 2023 - ფოტოები' : 'Migraine Forum 2023 - Photos',
      type: 'gallery',
      count: 45,
      description: language === 'ka'
        ? 'ფოტო გალერეა გასული წლის შაკიკის ფორუმიდან'
        : 'Photo gallery from last year\'s migraine forum'
    },
    {
      title: language === 'ka' ? 'პაციენტის გამოცდილება - ინტერვიუ' : 'Patient Experience - Interview',
      type: 'video',
      duration: '8:30',
      views: '1.8K',
      description: language === 'ka'
        ? 'ინტერვიუ შაკიკით მოვლილ პაციენტთან'
        : 'Interview with a migraine patient'
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary font-georgian">
            {t('newsTitle')}
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-muted-foreground font-georgian">
            {language === 'ka'
              ? 'უახლესი სიახლეები, ღონისძიებები და მედია მასალები'
              : 'Latest news, events, and media materials'
            }
          </p>
        </div>

        {/* Content Tabs */}
        <Tabs defaultValue="articles" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="articles" className="font-georgian">
              {t('articles')}
            </TabsTrigger>
            <TabsTrigger value="events" className="font-georgian">
              {t('events')}
            </TabsTrigger>
            <TabsTrigger value="media" className="font-georgian">
              {t('mediaGallery')}
            </TabsTrigger>
          </TabsList>

          {/* Articles Tab */}
          <TabsContent value="articles">
            <div className="space-y-8">
              {articles.map((article, index) => (
                <Card key={index} className="medical-card">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                      <div className="flex items-center gap-3">
                        <Badge variant="outline">{article.category}</Badge>
                        <span className="text-sm text-muted-foreground flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {new Date(article.date).toLocaleDateString(language === 'ka' ? 'ka-GE' : 'en-US')}
                        </span>
                        <span className="text-sm text-muted-foreground flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {article.readTime}
                        </span>
                      </div>
                    </div>
                    <CardTitle className="text-xl font-georgian hover:text-primary transition-colors cursor-pointer">
                      {article.title}
                    </CardTitle>
                    <CardDescription className="font-georgian">
                      {language === 'ka' ? 'ავტორი:' : 'Author:'} {article.author}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 font-georgian">
                      {article.excerpt}
                    </p>
                    <Button variant="ghost" className="p-0 h-auto text-primary font-georgian">
                      {t('readMore')}
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Events Tab */}
          <TabsContent value="events">
            <div className="space-y-6">
              {events.map((event, index) => (
                <Card key={index} className="medical-card">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-xl font-georgian mb-2">{event.title}</CardTitle>
                        <div className="space-y-2 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            <span>
                              {new Date(event.date).toLocaleDateString(language === 'ka' ? 'ka-GE' : 'en-US')} 
                              {language === 'ka' ? ', ' : ' at '}{event.time}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="w-4 h-4 flex items-center justify-center">📍</span>
                            <span className="font-georgian">{event.location}</span>
                          </div>
                        </div>
                      </div>
                      <Badge variant={event.type === 'conference' ? 'default' : event.type === 'support' ? 'secondary' : 'outline'}>
                        {event.type === 'conference' 
                          ? (language === 'ka' ? 'კონფერენცია' : 'Conference')
                          : event.type === 'support' 
                          ? (language === 'ka' ? 'მხარდაჭერა' : 'Support')
                          : (language === 'ka' ? 'ვებინარი' : 'Webinar')
                        }
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 font-georgian">
                      {event.description}
                    </p>
                    <Button className="w-full md:w-auto font-georgian">
                      {language === 'ka' ? 'რეგისტრაცია' : 'Register'}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Media Tab */}
          <TabsContent value="media">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mediaItems.map((item, index) => (
                <Card key={index} className="medical-card">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        {item.type === 'video' ? (
                          <Video className="h-5 w-5 text-primary" />
                        ) : (
                          <Image className="h-5 w-5 text-accent" />
                        )}
                        <span className="text-sm font-medium">
                          {item.type === 'video' 
                            ? (language === 'ka' ? 'ვიდეო' : 'Video')
                            : (language === 'ka' ? 'გალერეა' : 'Gallery')
                          }
                        </span>
                      </div>
                      {item.type === 'video' && (
                        <span className="text-sm text-muted-foreground">
                          {item.duration}
                        </span>
                      )}
                    </div>
                    <CardTitle className="text-lg font-georgian">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="font-georgian mb-4">
                      {item.description}
                    </CardDescription>
                    {item.type === 'video' && (
                      <div className="text-sm text-muted-foreground mb-4">
                        {item.views} {language === 'ka' ? 'ნახვა' : 'views'}
                      </div>
                    )}
                    {item.type === 'gallery' && (
                      <div className="text-sm text-muted-foreground mb-4">
                        {item.count} {language === 'ka' ? 'ფოტო' : 'photos'}
                      </div>
                    )}
                    <Button variant="outline" className="w-full font-georgian">
                      {item.type === 'video' 
                        ? (language === 'ka' ? 'ნახვა' : 'Watch')
                        : (language === 'ka' ? 'გახსნა' : 'View')
                      }
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default NewsPage;