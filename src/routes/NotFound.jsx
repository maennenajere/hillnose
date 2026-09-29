import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Seo from '../components/Seo.jsx';

const NotFound = () => {
    const { t } = useTranslation();

    return (
        <>
            <Seo page="notFound" path="/404" noindex />
            <section className="flex flex-col items-center justify-center text-center text-white min-h-[50vh] gap-4">
                <h1 className="font-bold text-7xl">404</h1>
                <p className="text-xl text-white/70">{t('notFound.message')}</p>
                <Link
                    to="/"
                    className="mt-2 px-5 py-2 rounded-full bg-white text-black font-semibold hover:bg-gray-100 transition-colors"
                >
                    {t('notFound.back')}
                </Link>
            </section>
        </>
    );
};

export default NotFound;
