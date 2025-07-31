'use client';

import { Facebook, Github, Instagram, Linkedin, Twitter } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Button } from './ui/button';

export function Footer() {
  const { t } = useTranslation();

  const cyberCrimeStationLinks = [
    { name: 'X (Twitter)', icon: Twitter, href: 'https://x.com/CybercrimeJam' },
    { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/cybercrimejam/' },
    // Note: The WhatsApp link provided was a duplicate of the Instagram link. It can be added here if a correct link is available.
  ];

  const spJamnagarLinks = [
      { name: 'X (Twitter)', icon: Twitter, href: 'https://x.com/SP_Jamnagar' },
      { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/sp_jamnagar/' },
      { name: 'Facebook', icon: Facebook, href: 'https://www.facebook.com/spjamnagar' },
  ]

  return (
    <footer className="border-t bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-6 py-4 sm:flex-row">
        <p className="text-sm text-muted-foreground text-center sm:text-left">
          {t('footer.copyright', { year: new Date().getFullYear() })}
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="flex items-center gap-1">
                 <p className="text-xs font-semibold text-muted-foreground mr-2 whitespace-nowrap">Cyber Crime Station:</p>
                {cyberCrimeStationLinks.map((social) => (
                    <Button key={social.name} variant="ghost" size="icon" asChild>
                    <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
                        <social.icon className="h-5 w-5" />
                    </a>
                    </Button>
                ))}
            </div>
             <div className="flex items-center gap-1">
                <p className="text-xs font-semibold text-muted-foreground mr-2 whitespace-nowrap">SP Jamnagar:</p>
                {spJamnagarLinks.map((social) => (
                    <Button key={social.name} variant="ghost" size="icon" asChild>
                    <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
                        <social.icon className="h-5 w-5" />
                    </a>
                    </Button>
                ))}
            </div>
        </div>
      </div>
    </footer>
  );
}
