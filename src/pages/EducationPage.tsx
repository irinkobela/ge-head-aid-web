import React from 'react';
import { Book, FileText, Lightbulb, Shield, Activity, HelpCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useLanguage } from '@/contexts/LanguageContext';

const EducationPage = () => {
  const { language, t } = useLanguage();

  const educationSections = [
    {
      id: 'overview',
      title: t('overview'),
      icon: Book,
      content: language === 'ka' 
        ? 'შაკიკი არის ნევროლოგიური დაავადება, რომელიც ხასიათდება განმეორებადი, ძლიერი თავის ტკივილით. ეს არის ერთ-ერთი ყველაზე გავრცელებული და შეზღუდვის შექმნელი მდგომარეობა მსოფლიოში.'
        : 'Migraine is a neurological disorder characterized by recurrent, severe headaches. It is one of the most common and disabling conditions worldwide.'
    },
    {
      id: 'symptoms',
      title: t('symptoms'),
      icon: Activity,
      content: language === 'ka'
        ? 'შაკიკის ძირითადი სიმპტომები მოიცავს: ძლიერ თავის ტკივილს, გულისრევას, ღებინებას, სინათლისა და ხმაურის მიმართ მგრძნობელობას, ვიზუალურ დარღვევებს.'
        : 'Main migraine symptoms include: severe headache, nausea, vomiting, sensitivity to light and sound, visual disturbances.'
    },
    {
      id: 'treatments',
      title: t('treatments'),
      icon: Shield,
      content: language === 'ka'
        ? 'შაკიკის მკურნალობა მოიცავს მედიკამენტებს, ცხოვრების წესის ცვლილებებს, სტრესის მართვას და ალტერნატიულ თერაპიებს. მნიშვნელოვანია ინდივიდუალური მიდგომა.'
        : 'Migraine treatment includes medications, lifestyle changes, stress management, and alternative therapies. Individual approach is crucial.'
    },
    {
      id: 'prevention',
      title: t('prevention'),
      icon: Shield,
      content: language === 'ka'
        ? 'პრევენციის მეთოდები მოიცავს: რეგულარულ ძილს, ჯანსაღ კვებას, სტრესის შემცირებას, ტრიგერების იდენტიფიცირებას და თავიდან აცილებას.'
        : 'Prevention methods include: regular sleep, healthy diet, stress reduction, identifying and avoiding triggers.'
    },
    {
      id: 'lifestyle',
      title: t('lifestyle'),
      icon: Lightbulb,
      content: language === 'ka'
        ? 'ცხოვრების წესის რჩევები: რეგულარული ვარჯიში, ჰიდრატაცია, დაბალანსებული კვება, ალკოჰოლისა და კოფეინის შეზღუდვა, რელაქსაციის ტექნიკები.'
        : 'Lifestyle tips: regular exercise, hydration, balanced diet, limiting alcohol and caffeine, relaxation techniques.'
    },
      {
        id: 'glossary',
        title: t('glossary'),
        icon: HelpCircle,
        content: language === 'ka'
          ? 'სამედიცინო ტერმინების განმარტება: აურა, ტრიგერი, ქრონიკული შაკიკი, კლასტერული თავის ტკივილი, ტენზიური თავის ტკივილი.'
          : 'Medical terms explained: Aura, Trigger, Chronic migraine, Cluster headache, Tension headache.'
      },
      {
        id: 'faq',
        title: language === 'ka' ? 'ხშირად დასმული კითხვები' : 'FAQ',
        icon: HelpCircle,
        content: language === 'ka'
          ? 'ეს სექცია პასუხობს თავის ტკივილთან და შაკიკთან დაკავშირებულ ხშირად დასმულ კითხვებს.'
          : 'This section provides answers to common questions about headaches and migraines.'
      }
  ];

  const resources = [
    {
      title: language === 'ka' ? 'შაკიკის სახელმძღვანელო' : 'Migraine Guide',
      description: language === 'ka' 
        ? 'სრული სახელმძღვანელო შაკიკის გაგებისა და მართვისთვის'
        : 'Complete guide for understanding and managing migraines',
      type: 'PDF',
      pages: 45
    },
    {
      title: language === 'ka' ? 'ტრიგერების იდენტიფიცირება' : 'Identifying Triggers',
      description: language === 'ka'
        ? 'როგორ ავიცნობთ და ავიცილოთ შაკიკის ტრიგერები'
        : 'How to identify and avoid migraine triggers',
      type: 'PDF',
      pages: 20
    },
    {
      title: language === 'ka' ? 'დაგეგმილი მკურნალობა' : 'Treatment Planning',
      description: language === 'ka'
        ? 'ინდივიდუალური მკურნალობის გეგმის შედგენა'
        : 'Creating an individualized treatment plan',
      type: 'PDF',
      pages: 30
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary font-georgian">
            {t('educationTitle')}
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-muted-foreground font-georgian">
            {language === 'ka'
              ? 'ყოვლისმომცველი განათლება შაკიკისა და თავის ტკივილის შესახებ'
              : 'Comprehensive education about migraines and headache disorders'
            }
          </p>
        </div>

        {/* Education Tabs */}
        <div className="mb-16">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-7 mb-8">
              {educationSections.map((section) => (
                <TabsTrigger 
                  key={section.id} 
                  value={section.id}
                  className="font-georgian text-sm"
                >
                  {section.title}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {educationSections.map((section) => (
              <TabsContent key={section.id} value={section.id} className="mt-8">
                <Card className="medical-card">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center">
                        <section.icon className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-2xl font-georgian">{section.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg leading-relaxed font-georgian">
                      {section.content}
                    </p>
                    
                    {section.id === 'symptoms' && (
                      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-4 bg-warning/10 rounded-lg border-l-4 border-warning">
                          <h4 className="font-semibold text-warning-foreground mb-2 font-georgian">
                            {language === 'ka' ? 'ძირითადი სიმპტომები' : 'Primary Symptoms'}
                          </h4>
                          <ul className="text-sm space-y-1 font-georgian">
                            <li>• {language === 'ka' ? 'ძლიერი თავის ტკივილი' : 'Severe headache'}</li>
                            <li>• {language === 'ka' ? 'გულისრევა/ღებინება' : 'Nausea/Vomiting'}</li>
                            <li>• {language === 'ka' ? 'სინათლის მგრძნობელობა' : 'Light sensitivity'}</li>
                          </ul>
                        </div>
                        <div className="p-4 bg-accent/10 rounded-lg border-l-4 border-accent">
                          <h4 className="font-semibold text-accent-foreground mb-2 font-georgian">
                            {language === 'ka' ? 'დამატებითი სიმპტომები' : 'Additional Symptoms'}
                          </h4>
                          <ul className="text-sm space-y-1 font-georgian">
                            <li>• {language === 'ka' ? 'ხმაურის მგრძნობელობა' : 'Sound sensitivity'}</li>
                            <li>• {language === 'ka' ? 'ვიზუალური აურა' : 'Visual aura'}</li>
                            <li>• {language === 'ka' ? 'სისუსტე' : 'Fatigue'}</li>
                          </ul>
                        </div>
                      </div>
                    )}

                    {section.id === 'faq' && (
                      <div className="mt-6">
                        <div className="mb-6 p-4 bg-muted/50 rounded-lg">
                          <p className="text-sm text-muted-foreground font-georgian">
                            {language === 'ka'
                              ? 'გთხოვთ, გაითვალისწინოთ, რომ ეს ინფორმაცია მხოლოდ საგანმანათლებლო მიზნებისთვისაა და ვერ ჩაანაცვლებს პროფესიონალურ სამედიცინო კონსულტაციას. დიაგნოსტიკისა და მკურნალობისთვის ყოველთვის მიმართეთ კვალიფიციურ ექიმს.'
                              : 'Please remember, this information is for educational purposes only and should not replace professional medical advice. Always consult with a qualified healthcare provider for diagnosis and treatment.'
                            }
                          </p>
                        </div>
                        
                        <Accordion type="single" collapsible className="space-y-4">
                          {faqItems.map((item, index) => (
                            <AccordionItem 
                              key={index} 
                              value={`item-${index}`}
                              className="border border-border rounded-lg px-6 py-2"
                            >
                              <AccordionTrigger className="text-left font-georgian font-medium hover:no-underline py-4">
                                {item.question}
                              </AccordionTrigger>
                              <AccordionContent className="font-georgian text-muted-foreground leading-relaxed pb-4">
                                {item.answer}
                              </AccordionContent>
                            </AccordionItem>
                          ))}
                        </Accordion>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* Educational Resources */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-primary font-georgian text-center">
            {language === 'ka' ? 'საგანმანათლებლო რესურსები' : 'Educational Resources'}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <Card key={index} className="medical-card">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-primary/10 text-primary px-2 py-1 rounded text-sm font-medium">
                      {resource.type}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {resource.pages} {language === 'ka' ? 'გვერდი' : 'pages'}
                    </span>
                  </div>
                  <CardTitle className="font-georgian">{resource.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="font-georgian mb-4">
                    {resource.description}
                  </CardDescription>
                  <Button className="w-full font-georgian">
                    <FileText className="mr-2 h-4 w-4" />
                    {t('downloadPdf')}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default EducationPage;