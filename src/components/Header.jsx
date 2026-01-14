import React, { useRef } from 'react';
import LanguageToggle from '@/components/LanguageToggle.jsx';
import { Link } from 'react-router-dom';
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from '@/components/ui/tooltip';
import { Link as LinkIcon, QrCode } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t } = useTranslation();
  const audioRef = useRef(null);

  if (!audioRef.current) {
    audioRef.current = new Audio('/sound/pop.mp3');
  }

  const click = () => {
    audioRef.current.currentTime = 0;
    audioRef.current.play();
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/30 border-b border-white/10">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between text-white">

        <div className="flex items-center justify-center gap-4 md:gap-6 font-semibold tracking-wider">
          <Link
            to="/"
            onClick={() => {
              click();
              umami.track('Home clicked', { link: 'home', source: 'Header' });
            }}
            className="text-base md:text-lg lg:text-xl hover:text-orange-400 transition"
          >
            {t('nav.home')}
          </Link>

          <Link
            to="/contact"
            onClick={() => {
              click();
              umami.track('Contact me clicked', { link: 'contact', source: 'Header' });
            }}
            className="text-base md:text-lg lg:text-xl hover:text-orange-400 transition"
          >
            {t('nav.contact')}
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <TooltipProvider>
            <Tooltip>

              <TooltipTrigger asChild>
                <Link
                  aria-label="QR"
                  to="/qr"
                  onClick={() => {
                    click();
                    umami.track('QR clicked', { link: 'qr', source: 'Header' });
                  }}
                  className="hover:text-orange-400 transition"
                >
                  <QrCode size={22} />
                </Link>
              </TooltipTrigger>

              <TooltipContent side="bottom">
                {t('nav.qr', 'QR')}
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  aria-label="Links"
                  href="https://links.hillnose.xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    click();
                    umami.track('Links icon clicked', {
                      link: 'links.hillnose.xyz',
                      source: 'Header'
                    });
                  }}
                  className="hover:text-orange-400 transition border-r pr-5 border-white"
                >
                  <LinkIcon size={22} />
                </a>
              </TooltipTrigger>

              <TooltipContent side="bottom">
                {t('nav.links', 'Links')}
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <LanguageToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
