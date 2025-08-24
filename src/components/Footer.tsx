import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { language, t } = useLanguage();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-4 font-georgian">
              {language === 'ka' 
                ? 'საქართველოს თავის ტკივილისა და შაკიკის ორგანიზაცია'
                : 'Georgian Headache and Migraine Organization'
              }
            </h3>
            <p className="text-primary-foreground/80 mb-4 font-georgian">
              {language === 'ka'
                ? 'ვეძღვნებით თავის ტკივილითა და შაკიკით დაზარალებულთა ცხოვრების გაუმჯობესებას კვლევის, განათლებისა და მხარდაჭერის მეშვეობით.'
                : 'Dedicated to improving the lives of those affected by headaches and migraines through research, education, and support.'
              }
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-georgian">
              {language === 'ka' ? 'სწრაფი ბმულები' : 'Quick Links'}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/education" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors font-georgian">
                  {t('education')}
                </Link>
              </li>
              <li>
                <Link to="/research" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors font-georgian">
                  {t('research')}
                </Link>
              </li>
              <li>
                <Link to="/support" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors font-georgian">
                  {t('support')}
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors font-georgian">
                  {t('news')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-georgian">
              {language === 'ka' ? 'კონტაქტი' : 'Contact'}
            </h4>
            <div className="space-y-2">
              <div className="flex items-center text-primary-foreground/80">
                <Mail className="h-4 w-4 mr-2" />
                <span>info@ghmo.ge</span>
              </div>
              <div className="flex items-center text-primary-foreground/80">
                <Phone className="h-4 w-4 mr-2" />
                <span>+995 32 xxx xxx</span>
              </div>
              <div className="flex items-center text-primary-foreground/80">
                <MapPin className="h-4 w-4 mr-2" />
                <span className="font-georgian">
                  {language === 'ka' ? 'თბილისი, საქართველო' : 'Tbilisi, Georgia'}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60 font-georgian">
            © 2024 {language === 'ka' 
              ? 'საქართველოს თავის ტკივილისა და შაკიკის ორგანიზაცია. ყველა უფლება დაცულია.'
              : 'Georgian Headache and Migraine Organization. All rights reserved.'
            }
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;