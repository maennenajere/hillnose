import React from 'react';
import TechStack from '@/components/TechStack.jsx';
import RepoList from '@/components/RepoList.jsx';
import { useTranslation, Trans } from "react-i18next";

const Home = () => {
    const { t } = useTranslation();

    return (
        <>
            <section className="flex flex-col gap-3 text-left text-white bg-transparent w-full mt-10">
                <h1 className="text-white font-bold text-5xl md:text-5xl lg:text-5xl mb-4">{t('home.greet')}</h1>
                <p className="text-white tracking-wider whitespace-pre-line">
                    {t('home.whoami')}
                </p>
            </section>

            <section className="flex flex-col gap-3 text-left text-white bg-transparent w-full">
                <h2 className="font-medium text-3xl mb-4">
                    {t('home.whatidoTitle')}
                </h2>
                <p className="text-white tracking-wider whitespace-pre-line">
                    {t('home.whatido')}
                </p>
            </section>

            <section className="flex flex-col gap-3 text-left text-white bg-transparent w-full">
                <h2 className="font-medium text-3xl mb-4">
                    {t('home.techstackTitle')}
                </h2>
                <TechStack />
            </section>

            <section className="flex flex-col gap-3 text-left text-white bg-transparent w-full">
                <h2 className="font-medium text-3xl mb-4">
                    {t('home.projectsTitle')}
                </h2>

                <p className="text-white tracking-wider mb-2 whitespace-pre-line">
                    <Trans
                        i18nKey="home.projects"
                        components={{
                            1: (
                                <a
                                    href="https://github.com/maennenajere"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-orange-400 hover:text-orange-300 transition"
                                />
                            )
                        }}
                    />
                </p>

                <p className="text-white tracking-wider mb-4 whitespace-pre-line">
                    {t('home.projects_showcase')}
                </p>
                <RepoList />
            </section >
            <p className="text-gray-400 text-sm">
                {t('cta.web')}
            </p>
        </>
    );
};

export default Home;
