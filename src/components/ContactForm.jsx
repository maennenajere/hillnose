import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from "react-i18next";

function ContactForm() {
    const [submitting, setSubmitting] = useState(false);
    const [succeeded, setSucceeded] = useState(false);
    const [turnstileToken, setTurnstileToken] = useState("");
    const widgetIdRef = useRef(null);
    const { t } = useTranslation();

    useEffect(() => {
        let cancelled = false;

        function renderWidget() {
            if (cancelled) return;
            widgetIdRef.current = window.turnstile.render("#turnstile-container", {
                sitekey: import.meta.env.VITE_TURNSTILE_SITEKEY,
                callback: (token) => setTurnstileToken(token),
                "expired-callback": () => setTurnstileToken(""),
                "error-callback": () => setTurnstileToken(""),
            });
        }

        if (window.turnstile) {
            renderWidget();
        } else {
            const existing = document.querySelector('script[src^="https://challenges.cloudflare.com/turnstile"]');
            if (existing) {
                existing.addEventListener("load", renderWidget);
            } else {
                const script = document.createElement("script");
                script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
                script.async = true;
                script.onload = renderWidget;
                document.head.appendChild(script);
            }
        }

        return () => {
            cancelled = true;
            if (widgetIdRef.current !== null) window.turnstile?.remove(widgetIdRef.current);
        };
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        let succeededNow = false;
        try {
            const response = await fetch(import.meta.env.VITE_FORMSPARK_ACTION_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                succeededNow = true;
                setSucceeded(true);
            } else {
                alert(t('contactForm.error'));
            }
        } catch (error) {
            console.error("Form submission error:", error);
            alert(t('contactForm.error'));
        } finally {
            // Turnstile tokens are single-use, so a retry needs a fresh one
            if (!succeededNow && widgetIdRef.current !== null) {
                setTurnstileToken("");
                window.turnstile?.reset(widgetIdRef.current);
            }
            setSubmitting(false);
        }
    };

    if (succeeded) {
        return (
            <p className="text-orange-400 font-light text-center">
                {t('contactForm.success')}
            </p>
        );
    }

    return (
        <form className="grid gap-y-6" onSubmit={handleSubmit}>
            <input type="hidden" name="cf-turnstile-response" value={turnstileToken} />
            <input type="hidden" name="source" value="portfolio" />

            <div className="flex flex-col gap-y-1.5 text-white tracking-widest">
                <label className="block text-sm font-medium" htmlFor="email">
                    {t('contactForm.email')}
                </label>
                <input
                    className="h-10 rounded-md border text-sm bg-zinc-800 px-3"
                    id="email"
                    name="email"
                    type="email"
                    placeholder={t('contactForm.emailPlaceholder')}
                    required
                />
            </div>

            {/* Message */}
            <div className="flex flex-col gap-y-1.5 text-white tracking-widest">
                <label className="block text-sm font-medium" htmlFor="message">
                    {t('contactForm.message')}
                </label>
                <textarea
                    className="rounded-md border text-sm px-3 bg-zinc-800 py-2"
                    id="message"
                    name="message"
                    placeholder={t('contactForm.messagePlaceholder')}
                    rows="5"
                    required
                />
            </div>

            <div id="turnstile-container" className="mt-2"></div>

            <div className="flex flex-row-reverse gap-x-6">
                <button
                    aria-label="Send message"
                    className="cursor-pointer rounded-md bg-white px-8 py-4 text-sm font-medium text-zinc-900 hover:bg-orange-400 hover:text-white"
                    type="submit"
                    disabled={!turnstileToken || submitting}
                >
                    {submitting ? "..." : t('contactForm.send')}
                </button>
            </div>
        </form>
    );
}

export default ContactForm;