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

  const faqItems = [
    {
      question: language === 'ka' ? 'რა განსხვავებაა თავის ტკივილსა და შაკიკს შორის?' : 'What is the difference between a headache and a migraine?',
      answer: language === 'ka' 
        ? 'თავის ტკივილი ზოგადი ტერმინია და თავის არეში ნებისმიერ ტკივილს აღნიშნავს. შაკიკი კი თავის ტკივილის სპეციფიკური ტიპია, რომელიც ხშირად ხასიათდება ძლიერი, მფეთქავი ტკივილით, როგორც წესი, თავის ერთ მხარეს. შაკიკს ხშირად თან ახლავს სხვა სიმპტომებიც, როგორიცაა გულისრევა, ღებინება და სინათლისა და ხმაურის მიმართ მომატებული მგრძნობელობა.'
        : 'A headache is a general term for pain in the head. A migraine is a specific type of headache, often characterized by a severe, throbbing pain, usually on one side of the head. Migraines are often accompanied by other symptoms like nausea, vomiting, and extreme sensitivity to light and sound.'
    },
    {
      question: language === 'ka' ? 'რა არის შაკიკის გავრცელებული მაპროვოცირებელი ფაქტორები (ტრიგერები)?' : 'What are the common triggers for migraines?',
      answer: language === 'ka'
        ? 'ტრიგერები შესაძლოა ინდივიდუალური იყოს, თუმცა გავრცელებულ ფაქტორებს შორისაა: სტრესი და შფოთვა, ჰორმონული ცვლილებები (მაგ., მენსტრუალური ციკლის დროს), გარკვეული საკვები და სასმელი (მაგ., დავარგებული ყველი, ალკოჰოლი, კოფეინი), ძილის რეჟიმის ცვლილება, კაშკაშა სინათლე, მაღალი ხმაური ან მძაფრი სუნი, ამინდის ცვლილება.'
        : 'Triggers can vary greatly from person to person, but common ones include: stress and anxiety, hormonal changes (e.g., during the menstrual cycle), certain foods and drinks (e.g., aged cheese, alcohol, caffeine), changes in sleep patterns, bright lights, loud noises, or strong smells, and weather changes.'
    },
    {
      question: language === 'ka' ? 'როდის უნდა მივმართო ექიმს თავის ტკივილის გამო?' : 'When should I see a doctor for my headaches?',
      answer: language === 'ka'
        ? 'ექიმს უნდა მიმართოთ, თუ: თქვენი თავის ტკივილი არის ძლიერი, ხშირი ან დროთა განმავლობაში უარესდება. ის ხელს გიშლით ყოველდღიურ ცხოვრებაში (სამსახური, სწავლა, ოჯახი). ურეცეპტოდ გასაცემი ტკივილგამაყუჩებლები არ არის ეფექტური. განგივითარდათ „მეხისებრი" თავის ტკივილი – უეცარი, უკიდურესად ძლიერი ტკივილი. თავის ტკივილს თან ახლავს სიცხე, კისრის გაშეშება, ცნობიერების დაბინდვა, გულყრა, მხედველობის გაორება, სისუსტე ან დაბუჟება.'
        : 'You should consult a doctor if: your headaches are severe, frequent, or worsening over time; they interfere with your daily life (work, school, family); over-the-counter pain relievers are not effective; you experience a "thunderclap" headache – a sudden, extremely severe headache; your headache is accompanied by fever, stiff neck, confusion, seizure, double vision, weakness, or numbness.'
    },
    {
      question: language === 'ka' ? 'როგორ ხდება შაკიკის დიაგნოსტირება?' : 'How is migraine diagnosed?',
      answer: language === 'ka'
        ? 'შაკიკის დიაგნოზს სვამს ექიმი, როგორც წესი, ნევროლოგი, თქვენი სამედიცინო ისტორიის, სიმპტომების, ფიზიკური და ნევროლოგიური გასინჯვის საფუძველზე. შაკიკის დასადგენი ერთი კონკრეტული ანალიზი არ არსებობს, მაგრამ ექიმმა შესაძლოა დაგინიშნოთ კვლევები, როგორიცაა მაგნიტურ-რეზონანსული (MRI) ან კომპიუტერული ტომოგრაფია (CT), სხვა სამედიცინო პრობლემების გამოსარიცხად.'
        : 'A doctor, usually a neurologist, diagnoses migraines based on your medical history, symptoms, and a physical and neurological examination. There is no single test for migraine, but your doctor might order tests like an MRI or CT scan to rule out other medical conditions. Keeping a headache diary can be very helpful for diagnosis.'
    },
    {
      question: language === 'ka' ? 'რა სამკურნალო მეთოდები არსებობს შაკიკისთვის?' : 'What are the treatment options for migraine?',
      answer: language === 'ka'
        ? 'მკურნალობა, როგორც წესი, ორმხრივია: შეტევის კუპირება - მედიკამენტის მიღება შეტევის დასაწყისშივე მის შესაჩერებლად (მაგ., ტრიპტანები, არასტეროიდული ანთების საწინააღმდეგო საშუალებები). პრევენციული მკურნალობა - მედიკამენტების რეგულარული მიღება შეტევების სიხშირისა და სიმძიმის შესამცირებლად. ასევე, გადამწყვეტი მნიშვნელობა აქვს ცხოვრების წესის შეცვლას.'
        : 'Treatment is usually two-fold: Acute Treatment - taking medication at the start of a migraine attack to stop it (e.g., triptans, NSAIDs). Preventive Treatment - taking medication regularly to reduce the frequency and severity of attacks. Lifestyle changes, such as managing stress, regular exercise, and identifying and avoiding triggers, are also crucial.'
    },
    {
      question: language === 'ka' ? 'სად შემიძლია ვიპოვო თავის ტკივილის სპეციალისტი საქართველოში?' : 'Where can I find a specialist for headaches in Georgia?',
      answer: language === 'ka'
        ? 'გირჩევთ, პირველ რიგში მიმართოთ ოჯახის ექიმს, რომელიც საჭიროების შემთხვევაში ნევროლოგთან გადაგამისამართებთ. თბილისის, ქუთაისისა და ბათუმის დიდ კლინიკებსა და საუნივერსიტეტო ჰოსპიტლებს აქვთ ნევროლოგიური განყოფილებები, სადაც მუშაობენ თავის ტკივილის მკურნალობაში გამოცდილი სპეციალისტები.'
        : 'We recommend starting with your family doctor, who can refer you to a neurologist if needed. Major clinics and university hospitals in Tbilisi, Kutaisi, and Batumi have neurology departments with specialists experienced in treating headache disorders.'
    },
    {
      question: language === 'ka' ? 'შეიძლება თუ არა ბავშვებს ჰქონდეთ შაკიკი?' : 'Can children have migraines?',
      answer: language === 'ka'
        ? 'დიახ, შაკიკი შესაძლოა აღენიშნებოდეთ ბავშვებსა და მოზარდებს. სიმპტომები შეიძლება განსხვავდებოდეს ზრდასრულებისგან და ზოგჯერ ვლინდებოდეს მუცლის ტკივილით, თავბრუსხვევითა და ხანმოკლე თავის ტკივილით. თუ ეჭვი გაქვთ, რომ თქვენს შვილს შაკიკი აქვს, მნიშვნელოვანია პედიატრთან ან ბავშვთა ნევროლოგთან კონსულტაცია.'
        : 'Yes, migraines can affect children and adolescents. Symptoms might be different than in adults, sometimes presenting as abdominal pain, dizziness, and shorter headache duration. If you suspect your child has migraines, it is important to see a pediatrician or a pediatric neurologist.'
    },
    {
      question: language === 'ka' ? 'როგორ შემიძლია დავეხმარო მეგობარს ან ოჯახის წევრს, რომელსაც შაკიკი აწუხებს?' : 'How can I support a friend or family member with migraine?',
      answer: language === 'ka'
        ? 'გაგება და თანაგრძნობა მთავარია. შეტევის დროს დაეხმარეთ, რომ მოთავსდეს წყნარ, ბნელ ოთახში. შესთავაზეთ წყალი და ნებისმიერი მედიკამენტი, რომელიც სჭირდება. მოთმინებით მოეკიდეთ, თუ გეგმების შეცვლა მოუწევს. მათი მდგომარეობის შესახებ ინფორმაციის მიღება მხარდაჭერის საუკეთესო გამოხატულებაა.'
        : 'Understanding and empathy are key. During an attack, help them get to a quiet, dark room. Offer them water and any medication they need. Be patient if they have to cancel plans. Educating yourself about their condition shows great support.'
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