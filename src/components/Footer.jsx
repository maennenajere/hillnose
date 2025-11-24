import React from 'react';
import { useTranslation } from "react-i18next";

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const { t } = useTranslation()

    return (
        <footer className="text-center text-gray-400 text-sm">
            <div className="flex items-center justify-center gap-x-2 mb-4">
                <span>© {currentYear}</span>
                <a
                    href="https://hillnose.xyz"
                    className="text-gray-300 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    hillnose.xyz
                </a>
                <span className="text-red-400">❤️</span>
                <span aria-hidden className="text-gray-500">•</span>
                <span className="ml-1">{t('footer.rights')}</span>
            </div>
        </footer>
    );
}