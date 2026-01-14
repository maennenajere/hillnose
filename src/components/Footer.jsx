import React from 'react';
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const { t } = useTranslation();

    return (
        <footer className="pt-12 pb-2 border-t border-white/5 flex flex-col items-center gap-8">
            <div className="flex flex-col items-center gap-3 text-center px-4">
                <p className="text-gray-400 text-sm">{t('cta.web')}</p>
                <Link
                    to="/contact"
                    className="group inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white text-black font-semibold hover:bg-gray-100 transition-all active:scale-95 shadow-sm"
                    onClick={() => {
                        window.scrollTo(0, 0);
                        umami.track('Contact form opened', { source: 'Footer' });
                    }}
                >
                    {t('contactForm.open')}
                    <ArrowRight size={16} />
                </Link>
            </div>

            <div className="flex flex-col items-center gap-2 mt-4">
                <div className="flex flex-wrap items-center justify-center gap-x-2 text-sm tracking-widest">
                    <span>© {currentYear} hillnose.xyz</span>
                    <span>❤️</span>
                    <span>{t('footer.rights')}</span>
                </div>

                <p className="text-[11px] text-gray-500">
                    {t('footer.analytics')}{' '}
                    <a
                        href="https://umami.is"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-white underline underline-offset-4 decoration-white/10"
                    >
                        Umami Analytics
                    </a>
                </p>
            </div>
        </footer>
    );
}
