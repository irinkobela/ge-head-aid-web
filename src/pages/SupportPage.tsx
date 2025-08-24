import React from 'react';
import { HelpCircle, FileText, Calendar, Lightbulb, Phone, MessageCircle, Users, Download } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useLanguage } from '@/contexts/LanguageContext';

const SupportPage = () => {
  const { language, t } = useLanguage();

  const faqs = [
    {
      question: language === 'ka' 
        ? 'რა არის შაკიკი და როგორ განვასხვავოთ ჩვეულებრივი თავის ტკივილისგან?'
        : 'What is migraine and how is it different from regular headaches?',
      answer: language === 'ka'
        ? 'შაკიკი არის ნევროლოგიური დაავადება, რომელიც ხასიათდება ძლიერი, ძვრელი თავის ტკივილით, რომელსაც ხშირად თან ახლავს გულისრევა, ღებინება და სინათლისა თუ ხმაურის მიმართ მგრძნობელობა. ჩვეულებრივი თავის ტკივილისგან განსხვავებით, შაკიკი შეიძლება გაგრძელდეს 4-დან 72 საათამდე.'
        : 'Migraine is a neurological disorder characterized by severe, throbbing headache often accompanied by nausea, vomiting, and sensitivity to light and sound. Unlike regular headaches, migraines can last from 4 to 72 hours.'
    },
    {
      question: language === 'ka'
        ? 'რა ტრიგერები იწვევს შაკიკს?'
        : 'What triggers cause migraines?',
      answer: language === 'ka'
        ? 'შაკიკის ყველაზე გავრცელებული ტრიგერებია: სტრესი, ჰორმონალური ცვლილებები, გარკვეული საკვები პროდუქტები, ალკოჰოლი, ძილის დარღვევა, ამინდის ცვლილება, ძლიერი სუნები და სინათლე.'
        : 'Common migraine triggers include: stress, hormonal changes, certain foods, alcohol, sleep disruption, weather changes, strong odors, and bright lights.'
    },
    {
      question: language === 'ka'
        ? 'როდის უნდა მივმართო ექიმს?'
        : 'When should I see a doctor?',
      answer: language === 'ka'
        ? 'ექიმთან კონსულტაცია აუცილებელია, თუ: თავის ტკივილი ხშირად მეორდება, ძალიან ძლიერია, თან ახლავს ცხელება, გონების დაბნეულობა, მხედველობის დარღვევა ან მოძრაობის სირთულეები.'
        : 'Consult a doctor if: headaches are frequent, very severe, accompanied by fever, confusion, vision problems, or movement difficulties.'
    },
    {
      question: language === 'ka'
        ? 'შეიძლება თუ არა შაკიკის თავიდან აცილება?'
        : 'Can migraines be prevented?',
      answer: language === 'ka'
        ? 'კი, შაკიკის პრევენცია შესაძლებელია რეგულარული ძილის რეჟიმით, სტრესის მართვით, ტრიგერების თავიდან აცილებით, ჯანსაღი კვებით და რეგულარული ვარჯიშით.'
        : 'Yes, migraine prevention is possible through regular sleep schedule, stress management, avoiding triggers, healthy diet, and regular exercise.'
    }
  ];

  const guides = [
    {
      title: language === 'ka' ? 'პაციენტის სახელმძღვანელო' : 'Patient Guide',
      description: language === 'ka' 
        ? 'ყოვლისმომცველი სახელმძღვანელო შაკიკის მქონე პაციენტებისთვის'
        : 'Comprehensive guide for patients with migraine',
      pages: 32,
      category: language === 'ka' ? 'ზოგადი' : 'General'
    },
    {
      title: language === 'ka' ? 'მომვლელის სახელმძღვანელო' : 'Caregiver Guide',
      description: language === 'ka'
        ? 'რჩევები შაკიკის მქონე ოჯახის წევრის მოვლისთვის'
        : 'Tips for caring for a family member with migraine',
      pages: 24,
      category: language === 'ka' ? 'მომვლელი' : 'Caregiver'
    },
    {
      title: language === 'ka' ? 'სამუშაო ადგილზე შაკიკი' : 'Migraine at Work',
      description: language === 'ka'
        ? 'როგორ მოვუმკლავდეთ შაკიკს სამუშაო გარემოში'
        : 'How to manage migraine in the workplace',
      pages: 16,
      category: language === 'ka' ? 'სამუშაო' : 'Workplace'
    }
  ];

  const practicalTips = [
    {
      category: language === 'ka' ? 'ღია ეპიზოდის დროს' : 'During an Episode',
      tips: language === 'ka' ? [
        'მიდით ბნელ, წყნარ ოთახში',
        'დაიწვინეთ ცივი კომპრესი შუბლზე',
        'შეეცადეთ დაისვენოთ ან დაიძინოთ',
        'მიიღეთ პრესკრიფციული მედიკამენტები',
        'გამოიყენეთ რელაქსაციის ტექნიკები'
      ] : [
        'Go to a dark, quiet room',
        'Apply cold compress to forehead',
        'Try to rest or sleep',
        'Take prescribed medications',
        'Use relaxation techniques'
      ]
    },
    {
      category: language === 'ka' ? 'პრევენცია' : 'Prevention',
      tips: language === 'ka' ? [
        'დაიცავით რეგულარული ძილის რეჟიმი',
        'ჭამეთ რეგულარულად',
        'მსოფლიოს ტრიგერების თავიდან აცილება',
        'ისწავლეთ სტრესის მართვის ტექნიკები',
        'რეგულარულად ვარჯიშობდეთ'
      ] : [
        'Maintain regular sleep schedule',
        'Eat regularly',
        'Avoid known triggers',
        'Learn stress management techniques',
        'Exercise regularly'
      ]
    },
    {
      category: language === 'ka' ? 'ცხოვრების წესი' : 'Lifestyle',
      tips: language === 'ka' ? [
        'დალიეთ საკმარისი რაოდენობით წყალი',
        'შეზღუდეთ ალკოჰოლი და კოფეინი',
        'იყენეთ მედიტაცია',
        'შექმენით მშვიდი გარემო სახლში',
        'წარმატებული ჩაწერეთ შაკიკის დღიური'
      ] : [
        'Drink plenty of water',
        'Limit alcohol and caffeine',
        'Practice meditation',
        'Create a calm home environment',
        'Keep a migraine diary'
      ]
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary font-georgian">
            {t('supportTitle')}
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-muted-foreground font-georgian">
            {language === 'ka'
              ? 'ყოვლისმომცველი მხარდაჭერა პაციენტებისა და მათი ოჯახებისთვის'
              : 'Comprehensive support for patients and their families'
            }
          </p>
        </div>

        {/* Emergency Contact */}
        <div className="mb-12">
          <Card className="medical-card bg-accent/5 border-accent">
            <CardContent className="py-6">
              <div className="flex items-center justify-center gap-4 text-center">
                <Phone className="h-6 w-6 text-accent" />
                <div>
                  <p className="font-semibold text-accent-foreground font-georgian">
                    {language === 'ka' ? 'საგანგებო დახმარება' : 'Emergency Support'}
                  </p>
                  <p className="text-sm text-muted-foreground font-georgian">
                    {language === 'ka' ? 'ზარი 24/7:' : 'Call 24/7:'} +995 32 xxx-xxx
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* FAQs */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-primary font-georgian text-center">
            {t('faqs')}
          </h2>
          <Card className="medical-card">
            <CardContent className="py-6">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left font-georgian hover:text-primary">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground font-georgian leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </section>

        {/* Patient Guides */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-primary font-georgian text-center">
            {t('guides')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {guides.map((guide, index) => (
              <Card key={index} className="medical-card">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-primary/10 text-primary px-2 py-1 rounded text-sm font-medium">
                      {guide.category}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {guide.pages} {language === 'ka' ? 'გვერდი' : 'pages'}
                    </span>
                  </div>
                  <CardTitle className="font-georgian">{guide.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="font-georgian mb-4">
                    {guide.description}
                  </CardDescription>
                  <Button className="w-full font-georgian">
                    <Download className="mr-2 h-4 w-4" />
                    {t('downloadPdf')}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Migraine Diary */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-primary font-georgian text-center">
            {t('migraineDiary')}
          </h2>
          <Card className="medical-card">
            <CardHeader className="text-center">
              <div className="w-16 h-16 gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="font-georgian">
                {language === 'ka' ? 'შაკიკის დღიური' : 'Migraine Diary'}
              </CardTitle>
              <CardDescription className="font-georgian">
                {language === 'ka'
                  ? 'ყოველდღიური აღრიცხვა თქვენი შაკიკის ეპიზოდების, ტრიგერებისა და მკურნალობის ეფექტურობის შესახებ'
                  : 'Daily tracking of your migraine episodes, triggers, and treatment effectiveness'
                }
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <Button variant="outline" className="font-georgian">
                  <Download className="mr-2 h-4 w-4" />
                  {language === 'ka' ? 'PDF ფორმატი' : 'PDF Format'}
                </Button>
                <Button variant="outline" className="font-georgian">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  {language === 'ka' ? 'ციფრული ვერსია' : 'Digital Version'}
                </Button>
              </div>
              <p className="text-sm text-muted-foreground font-georgian">
                {language === 'ka'
                  ? 'დღიურის წარმატებული წარმოება დაგეხმარებათ ექიმთან ერთად უკეთ წავიდეთ თქვენი შაკიკის მართვის გეგმა'
                  : 'Successful diary keeping will help you and your doctor develop a better migraine management plan'
                }
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Practical Tips */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-primary font-georgian text-center">
            {t('practicalTips')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {practicalTips.map((section, index) => (
              <Card key={index} className="medical-card">
                <CardHeader>
                  <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center mb-4">
                    <Lightbulb className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="font-georgian">{section.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {section.tips.map((tip, tipIndex) => (
                      <li key={tipIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm font-georgian">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default SupportPage;