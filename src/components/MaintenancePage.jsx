import React from 'react';
import { useTranslation } from "react-i18next";
import LanguageToggle from '../components/LanguageToggle.jsx';

export default function MaintenancePage() {
    const { t } = useTranslation()

    return (
        <>
            <header className="absolute top-3 right-3 z-20 flex items-center gap-2">
                <LanguageToggle />
            </header>
            <main className="min-h-screen flex items-center justify-center bg-black text-gray-300 p-6">
                <section className="text-center max-w-xl">
                    <h1 className="text-4xl font-semibold">hillnose.xyz</h1>
                    <p className="mt-4 text-lg" role="status" aria-live="polite">
                        {t("maintenance.message")}
                    </p>
                </section>
            </main>
        </>
    );
}