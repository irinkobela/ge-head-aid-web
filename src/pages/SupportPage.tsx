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