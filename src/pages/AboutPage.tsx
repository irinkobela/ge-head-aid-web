import React from 'react';
import { Users, Award, Heart, Globe, Mail, Phone, MapPin, Calendar } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const AboutPage = () => {
  const { language, t } = useLanguage();

  const leadership = [
    {
      name: language === 'ka' ? 'ირინე ბახუტაშვილი' : 'Irine Bakhutashvili',
      title: language === 'ka' ? 'თანადამფუძნებელი' : 'Co-Founder',
      specialization: language === 'ka' ? 'სამედიცინო მეცნიერებები' : 'Medical Sciences',
      experience: language === 'ka' ? '10+ წელი' : '10+ years',
      education: language === 'ka' 
        ? 'თბილისის სახელმწიფო სამედიცინო უნივერსიტეტი'
        : 'Tbilisi State Medical University',
      description: language === 'ka'
        ? 'ორგანიზაციის თანადამფუძნებელი და წამყვანი სპეციალისტი შაკიკისა და თავის ტკივილის სფეროში. პასუხისმგებელია კვლევითი პროექტების კოორდინაციაზე და პაციენტთა მხარდაჭერის პროგრამებზე.'
        : 'Co-founder of the organization and leading specialist in migraine and headache disorders. Responsible for coordinating research projects and patient support programs.'
    },
    {
      name: language === 'ka' ? 'ქეთევან პაპოშვილი' : 'Ketevan Paposhvili',
      title: language === 'ka' ? 'თანადამფუძნებელი და ნევროლოგი' : 'Co-Founder & Neurologist',
      specialization: language === 'ka' ? 'ნევროლოგია' : 'Neurology',
      experience: language === 'ka' ? '12+ წელი' : '12+ years',
      education: language === 'ka'
        ? 'თბილისის სახელმწიფო სამედიცინო უნივერსიტეტი'
        : 'Tbilisi State Medical University',
      description: language === 'ka'
        ? 'ორგანიზაციის თანადამფუძნებელი და პრაქტიკოსი ნევროლოგი, რომელსაც აქვს ღრმა გამოცდილება შაკიკისა და სხვა ნევროლოგიური რასტროვებების მკურნალობაში. ხელმძღვანელობს კლინიკურ კვლევებსა და პაციენტთა მოვლის სტანდარტების შემუშავებას.'
        : 'Co-founder of the organization and practicing neurologist with extensive experience in treating migraine and other neurological disorders. Leads clinical research and development of patient care standards.'
    }
  ];

  const partners = [
    {
      name: language === 'ka' ? 'თბილისის სამედიცინო უნივერსიტეტი' : 'Tbilisi Medical University',
      type: language === 'ka' ? 'აკადემიური პარტნიორი' : 'Academic Partner',
      description: language === 'ka'
        ? 'სამეცნიერო კვლევებისა და განათლების სფეროში თანამშრომლობა'
        : 'Collaboration in scientific research and education'
    },
    {
      name: language === 'ka' ? 'საერთაშორისო შაკიკის ორგანიზაცია' : 'International Migraine Foundation',
      type: language === 'ka' ? 'საერთაშორისო პარტნიორი' : 'International Partner',
      description: language === 'ka'
        ? 'გლობალური ინიციატივებისა და სტანდარტების დანერგვა'
        : 'Implementation of global initiatives and standards'
    },
    {
      name: language === 'ka' ? 'საქართველოს ჯანდაცვის სამინისტრო' : 'Ministry of Health of Georgia',
      type: language === 'ka' ? 'სახელმწიფო პარტნიორი' : 'Government Partner',
      description: language === 'ka'
        ? 'ჯანდაცვის პოლიტიკისა და რეგულაციების განვითარება'
        : 'Development of healthcare policies and regulations'
    },
    {
      name: language === 'ka' ? 'ევროპული ნევროლოგიური ასოციაცია' : 'European Neurological Association',
      type: language === 'ka' ? 'პროფესიული ასოციაცია' : 'Professional Association',
      description: language === 'ka'
        ? 'პროფესიული განვითარება და ცოდნის გაზიარება'
        : 'Professional development and knowledge sharing'
    }
  ];

  const milestones = [
    {
      year: '2010',
      title: language === 'ka' ? 'ორგანიზაციის დაფუძნება' : 'Organization Founded',
      description: language === 'ka'
        ? 'საქართველოს შაკიკისა და თავის ტკივილის ორგანიზაციის დაფუძნება'
        : 'Georgian Headache and Migraine Organization established'
    },
    {
      year: '2012',
      title: language === 'ka' ? 'პირველი კლინიკური კვლევა' : 'First Clinical Study',
      description: language === 'ka'
        ? 'შაკიკის გავრცელების შესახებ პირველი ეროვნული კვლევის დაწყება'
        : 'Launch of first national study on migraine prevalence'
    },
    {
      year: '2015',
      title: language === 'ka' ? 'საერთაშორისო ღიაობა' : 'International Recognition',
      description: language === 'ka'
        ? 'საერთაშორისო შაკიკის ორგანიზაციაში გაწევრიანება'
        : 'Membership in International Migraine Foundation'
    },
    {
      year: '2018',
      title: language === 'ka' ? 'მხარდაჭერის ცენტრის გახსნა' : 'Support Center Opening',
      description: language === 'ka'
        ? 'პირველი პაციენტთა მხარდაჭერის ცენტრის გახსნა თბილისში'
        : 'Opening of first patient support center in Tbilisi'
    },
    {
      year: '2020',
      title: language === 'ka' ? 'ციფრული პლატფორმა' : 'Digital Platform',
      description: language === 'ka'
        ? 'ონლაინ კონსულტაციებისა და მხარდაჭერის პლატფორმის ჩამოყალიბება'
        : 'Launch of online consultation and support platform'
    },
    {
      year: '2024',
      title: language === 'ka' ? 'ახალი ვებსაიტი' : 'New Website',
      description: language === 'ka'
        ? 'თანამედროვე, ორენოვანი ვებსაიტის გაშვება'
        : 'Launch of modern, bilingual website'
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary font-georgian">
            {t('aboutTitle')}
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-muted-foreground font-georgian">
            {language === 'ka'
              ? 'გაიცანით ჩვენი ორგანიზაცია, მისია და გუნდი'
              : 'Learn about our organization, mission, and team'
            }
          </p>
        </div>

        {/* Mission Statement */}
        <section className="mb-16">
          <Card className="medical-card bg-gradient-subtle border-primary/20">
            <CardContent className="py-12">
              <div className="text-center max-w-4xl mx-auto">
                <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold mb-6 text-primary font-georgian">
                  {t('mission')}
                </h2>
                <p className="text-lg leading-relaxed text-muted-foreground font-georgian">
                  {language === 'ka'
                    ? 'ჩვენი მისია არის თავის ტკივილისა და შაკიკის დაავადებების გაგება-გააზრების, მკურნალობისა და პრევენციის განვითარება, პაციენტებისა და მათი ოჯახების ყოვლისმომცველი მხარდაჭერის უზრუნველყოფასთან ერთად. ჩვენ ვიბრძვით იმისთვის, რომ ყველა ადამიანს, ვისაც აქვს შაკიკი, ჰქონდეს წვდომა ხარისხიან სამედიცინო მომსახურებასა და საჭირო ინფორმაციაზე.'
                    : 'Our mission is to advance understanding, treatment, and prevention of headache disorders while providing comprehensive support to patients and their families. We strive to ensure that every person with migraine has access to quality medical care and necessary information.'
                  }
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* History Timeline */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-primary font-georgian text-center">
            {t('history')}
          </h2>
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 gradient-accent rounded-full flex items-center justify-center">
                    <Calendar className="h-8 w-8 text-white" />
                  </div>
                </div>
                <Card className="flex-1 medical-card">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-2">
                      <span className="text-2xl font-bold text-primary">{milestone.year}</span>
                    </div>
                    <CardTitle className="font-georgian">{milestone.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base font-georgian">
                      {milestone.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </section>

        {/* Leadership */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-primary font-georgian text-center">
            {t('leadership')}
          </h2>
          <div className="space-y-8">
            {leadership.map((leader, index) => (
              <Card key={index} className="medical-card">
                <CardContent className="py-8">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="flex-shrink-0">
                      <div className="w-24 h-24 gradient-primary rounded-full flex items-center justify-center">
                        <Users className="h-12 w-12 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2 font-georgian">{leader.name}</h3>
                      <p className="text-primary font-semibold mb-2 font-georgian">{leader.title}</p>
                      <div className="space-y-2 text-sm text-muted-foreground mb-4">
                        <p className="font-georgian">
                          <span className="font-medium">{language === 'ka' ? 'სპეციალიზაცია:' : 'Specialization:'}</span> {leader.specialization}
                        </p>
                        <p className="font-georgian">
                          <span className="font-medium">{language === 'ka' ? 'გამოცდილება:' : 'Experience:'}</span> {leader.experience}
                        </p>
                        <p className="font-georgian">
                          <span className="font-medium">{language === 'ka' ? 'განათლება:' : 'Education:'}</span> {leader.education}
                        </p>
                      </div>
                      <p className="text-muted-foreground font-georgian">{leader.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Partners */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-primary font-georgian text-center">
            {t('partners')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {partners.map((partner, index) => (
              <Card key={index} className="medical-card">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 gradient-accent rounded-full flex items-center justify-center">
                      <Globe className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="font-georgian">{partner.name}</CardTitle>
                      <CardDescription className="font-georgian">{partner.type}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground font-georgian">{partner.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact Information */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-primary font-georgian text-center">
            {t('contact')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="medical-card">
              <CardHeader>
                <CardTitle className="font-georgian">
                  {language === 'ka' ? 'საკონტაქტო ინფორმაცია' : 'Contact Information'}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">info@ghmo.ge</p>
                    <p className="text-sm text-muted-foreground font-georgian">
                      {language === 'ka' ? 'ზოგადი ინფორმაცია' : 'General information'}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">+995 32 xxx xxx</p>
                    <p className="text-sm text-muted-foreground font-georgian">
                      {language === 'ka' ? 'სამუშაო საათები: 9:00-18:00' : 'Working hours: 9:00-18:00'}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium font-georgian">
                      {language === 'ka' 
                        ? 'ვაჟა-ფშაველას გამზ. 25, თბილისი 0177'
                        : 'Vazha-Pshavela Ave. 25, Tbilisi 0177'
                      }
                    </p>
                    <p className="text-sm text-muted-foreground font-georgian">
                      {language === 'ka' ? 'მთავარი ოფისი' : 'Main office'}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="medical-card">
              <CardHeader>
                <CardTitle className="font-georgian">
                  {language === 'ka' ? 'მხარდაჭერის სერვისები' : 'Support Services'}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <Button className="w-full justify-start font-georgian" variant="outline">
                    <Phone className="mr-2 h-4 w-4" />
                    {language === 'ka' ? 'საგანგებო ხაზი 24/7' : 'Emergency Line 24/7'}
                  </Button>
                  <Button className="w-full justify-start font-georgian" variant="outline">
                    <Mail className="mr-2 h-4 w-4" />
                    {language === 'ka' ? 'ონლაინ კონსულტაცია' : 'Online Consultation'}
                  </Button>
                  <Button className="w-full justify-start font-georgian" variant="outline">
                    <Users className="mr-2 h-4 w-4" />
                    {language === 'ka' ? 'მხარდაჭერის ჯგუფი' : 'Support Group'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;