import React from "react";
import { MdMailOutline } from "react-icons/md";
import { FaDiscord, FaTelegram } from "react-icons/fa6";
import ContactForm from "../components/ContactForm";
import { useTranslation } from "react-i18next";

const Contact = () => {
    const { t } = useTranslation();
    const now = new Date();
    const Time = now.toLocaleString('en-US', {
        timeZone: 'Europe/Helsinki',
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
    });

    const helsinkiTime = new Date(now.toLocaleString('en-US', { timeZone: 'Europe/Helsinki' }));
    const hour = helsinkiTime.getHours();
    const statusKey = (hour >= 7 && hour <= 22)
        ? 'contactForm.awake'
        : 'contactForm.sleeping';
    const status = t(statusKey);
    const Message = t('contactForm.timeMessage', { time: Time, status });

    return (
        <>
            <section className="flex flex-col text-left text-white text-lg mt-10 w-full">
                <h1 className="text-white font-bold text-5xl md:text-5xl lg:text-5xl mb-2">{t('contact.title')}</h1>
                <p className="text-white/70 mt-2">
                    {t('contact.description')}
                </p>
            </section>
            <p className="text-white/50 dark:text-white/60 text-sm">{Message}</p>

            <section className="flex flex-col gap-3 text-left text-white w-full border border-white rounded-lg p-4">
                <ContactForm />
            </section>

            <div className="flex flex-col sm:flex-row gap-3 mx-auto w-full max-w-xl">
                <a
                    href="https://discord.com/users/807637744356032553"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                        umami.track("Contact link clicked Discord", {
                            type: "discord",
                            value: "@hillnose",
                            source: "Contact"
                        })
                    }
                    className="flex-1 flex items-center justify-center gap-2 bg-transparent text-white text-l border border-white rounded-lg px-2 py-2 hover:border-orange-400 transition-colors"
                >
                    <FaDiscord size={30} color="white" />
                    <p className="font-bold">@hillnose</p>
                </a>
                <a
                    href="https://t.me/maeennenae"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                        umami.track("Contact link clicked Telegram", {
                            type: "telegram",
                            value: "@maeennenae",
                            source: "Contact"
                        })
                    }
                    className="flex-1 flex items-center justify-center gap-2 bg-transparent text-white text-l border border-white rounded-lg px-2 py-2 hover:border-orange-400 transition-colors"
                >
                    <FaTelegram size={30} color="white" />
                    <p className="font-bold">@maeennenae</p>
                </a>
                <a
                    href="mailto:contact@hillnose.xyz"
                    onClick={() =>
                        umami.track("Contact link clicked Email", {
                            type: "email",
                            value: "contact@hillnose.xyz",
                            source: "Contact"
                        })
                    }
                    className="flex-1 flex items-center justify-center gap-2 bg-transparent text-white text-l border border-white rounded-lg px-2 py-2 hover:border-orange-400 transition-colors"
                >
                    <MdMailOutline size={30} color="white" />
                    <p className="font-bold">contact@hillnose.xyz</p>
                </a>
            </div>
        </>
    );
}

export default Contact;