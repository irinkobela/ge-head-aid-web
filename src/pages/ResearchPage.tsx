import React from 'react';
import { FileText, Users, BarChart3, Download, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';

const ResearchPage = () => {
  const { language, t } = useLanguage();

  const studies = [
    {
      title: language === 'ka' 
        ? 'მიგრენის გავრცელება საქართველოში'
        : 'Migraine Prevalence in Georgia',
      authors: language === 'ka' 
        ? 'ნ. გორგაძე, მ. ხაჩიძე, ს. ლომიძე'
        : 'N. Gorgadze, M. Khachidze, S. Lomidze',
      journal: language === 'ka' 
        ? 'საქართველოს სამედიცინო ჟურნალი'
        : 'Georgian Medical Journal',
      year: '2024',
      summary: language === 'ka'
        ? 'ამ კვლევამ გამოავლინა მიგრენის 12.5% გავრცელება საქართველოს მოსახლეობაში...'
        : 'This study revealed a 12.5% prevalence of migraine in the Georgian population...',
      status: 'published',
      category: 'epidemiology'
    },
    {
      title: language === 'ka'
        ? 'ტრადიციული ქართული მედიცინა მიგრენის მკურნალობაში'
        : 'Traditional Georgian Medicine in Migraine Treatment',
      authors: language === 'ka'
        ? 'თ. კვარაცხელია, ლ. ნაცვლიშვილი'
        : 'T. Kvaratskhelia, L. Natsvlishvili',
      journal: language === 'ka'
        ? 'ინტეგრირებული მედიცინის ჟურნალი'
        : 'Journal of Integrative Medicine',
      year: '2023',
      summary: language === 'ka'
        ? 'კვლევა აფასებს ქართული ყალიბისეული მედიცინის ეფექტურობას მიგრენის მკურნალობაში...'
        : 'Study evaluates the effectiveness of Georgian traditional medicine in migraine treatment...',
      status: 'published',
      category: 'treatment'
    },
    {
      title: language === 'ka'
        ? 'კლიმატის გავლენა მიგრენის ჩანაცვლზე'
        : 'Climate Impact on Migraine Episodes',
      authors: language === 'ka'
        ? 'რ. ჯავახიშვილი, ი. წერეთელი'
        : 'R. Javakhishvili, I. Tsereteli',
      journal: language === 'ka'
        ? 'ნევროლოგიის კვლევა'
        : 'Neurology Research',
      year: '2024',
      summary: language === 'ka'
        ? 'მიმდინარე კვლევა იკვლევს ამინდის ცვალებადობის გავლენას მიგრენის ჩანაცვლზე...'
        : 'Ongoing research investigates weather variability impact on migraine episodes...',
      status: 'ongoing',
      category: 'environmental'
    }
  ];

  const teamMembers = [
    {
      name: language === 'ka' ? 'ნანა გორგაძე' : 'Nana Gorgadze',
      title: language === 'ka' ? 'მთავარი მკვლევარი' : 'Principal Investigator',
      specialization: language === 'ka' ? 'ნევროლოგია' : 'Neurology',
      experience: language === 'ka' ? '15 წელი' : '15 years',
      publications: 45
    },
    {
      name: language === 'ka' ? 'მიხეილ ხაჩიძე' : 'Mikheil Khachidze',
      title: language === 'ka' ? 'უფროსი მკვლევარი' : 'Senior Researcher',
      specialization: language === 'ka' ? 'ეპიდემიოლოგია' : 'Epidemiology',
      experience: language === 'ka' ? '12 წელი' : '12 years',
      publications: 32
    },
    {
      name: language === 'ka' ? 'სალომე ლომიძე' : 'Salome Lomidze',
      title: language === 'ka' ? 'მკვლევარი' : 'Researcher',
      specialization: language === 'ka' ? 'კლინიკური ფსიქოლოგია' : 'Clinical Psychology',
      experience: language === 'ka' ? '8 წელი' : '8 years',
      publications: 18
    }
  ];

  const localData = [
    {
      metric: language === 'ka' ? 'გავრცელება' : 'Prevalence',
      value: '12.5%',
      description: language === 'ka' ? 'მოსახლეობაში' : 'in population'
    },
    {
      metric: language === 'ka' ? 'ქალების შორის' : 'Among women',
      value: '18.2%',
      description: language === 'ka' ? '18-65 წლის' : 'ages 18-65'
    },
    {
      metric: language === 'ka' ? 'ქრონიკული მიგრენა' : 'Chronic migraine',
      value: '2.1%',
      description: language === 'ka' ? 'მოსახლეობაში' : 'in population'
    },
    {
      metric: language === 'ka' ? 'ეკონომიკური ტვირთი' : 'Economic burden',
      value: '₾45M',
      description: language === 'ka' ? 'წლიური' : 'annually'
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary font-georgian">
            {t('researchTitle')}
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-muted-foreground font-georgian">
            {language === 'ka'
              ? 'წამყვანი კვლევები მიგრენისა და თავის ტკივილის სფეროში'
              : 'Leading research in migraine and headache disorders'
            }
          </p>
        </div>

        {/* Local Data Statistics */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-primary font-georgian text-center">
            {t('localData')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {localData.map((item, index) => (
              <Card key={index} className="medical-card text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-primary mb-2">
                    {item.value}
                  </div>
                  <div className="text-lg font-semibold font-georgian mb-1">
                    {item.metric}
                  </div>
                  <div className="text-sm text-muted-foreground font-georgian">
                    {item.description}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Study Summaries */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-primary font-georgian text-center">
            {t('studySummaries')}
          </h2>
          <div className="space-y-8">
            {studies.map((study, index) => (
              <Card key={index} className="medical-card">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <Badge variant={study.status === 'published' ? 'default' : 'secondary'}>
                        {study.status === 'published' 
                          ? (language === 'ka' ? 'გამოქვეყნებული' : 'Published')
                          : (language === 'ka' ? 'მიმდინარე' : 'Ongoing')
                        }
                      </Badge>
                      <Badge variant="outline">
                        {study.category}
                      </Badge>
                      <span className="text-sm text-muted-foreground">{study.year}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl font-georgian mb-2">{study.title}</CardTitle>
                  <CardDescription className="font-georgian">
                    <strong>{language === 'ka' ? 'ავტორები:' : 'Authors:'}</strong> {study.authors}<br />
                    <strong>{language === 'ka' ? 'ჟურნალი:' : 'Journal:'}</strong> {study.journal}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 font-georgian">
                    {study.summary}
                  </p>
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" className="font-georgian">
                      <FileText className="mr-2 h-4 w-4" />
                      {t('downloadPdf')}
                    </Button>
                    <Button variant="ghost" size="sm" className="font-georgian">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      {language === 'ka' ? 'სრული ტექსტი' : 'Full Text'}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Research Team */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-primary font-georgian text-center">
            {t('researchTeam')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="medical-card text-center">
                <CardHeader>
                  <div className="w-20 h-20 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="font-georgian">{member.name}</CardTitle>
                  <CardDescription className="font-georgian">{member.title}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="font-georgian">
                      <span className="font-medium">
                        {language === 'ka' ? 'სპეციალიზაცია:' : 'Specialization:'}
                      </span> {member.specialization}
                    </div>
                    <div className="font-georgian">
                      <span className="font-medium">
                        {language === 'ka' ? 'გამოცდილება:' : 'Experience:'}
                      </span> {member.experience}
                    </div>
                    <div className="font-georgian">
                      <span className="font-medium">
                        {language === 'ka' ? 'პუბლიკაციები:' : 'Publications:'}
                      </span> {member.publications}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ResearchPage;