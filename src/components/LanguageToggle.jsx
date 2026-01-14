import React, { useRef } from 'react'
import { useTranslation } from 'react-i18next'

export default function LanguageToggle() {
    const { i18n } = useTranslation()

    const audioRef = useRef(new Audio('/sound/pop.mp3'));

    const click = () => {
        audioRef.current.currentTime = 0;
        audioRef.current.play();
    };

    return (
        <div className="flex gap-2">
            <button
                aria-label="English"
                type="button"
                onClick={() => { click(); i18n.changeLanguage('en'); }}
                className={`text-sm px-2 py-1 rounded transition  ${i18n.language === 'en' ? 'bg-white text-black' : 'bg-transparent border text-white hover:bg-zinc-700 '}`}
            >
                EN
            </button>
            <button
                aria-label="Suomi"
                type="button"
                onClick={() => { click(); i18n.changeLanguage('fi'); }}
                className={`text-sm px-2 py-1 rounded transition  ${i18n.language === 'fi' ? 'bg-white text-black' : 'bg-transparent border text-white hover:bg-zinc-700 '}`}
            >
                FI
            </button>
        </div>
    )
}