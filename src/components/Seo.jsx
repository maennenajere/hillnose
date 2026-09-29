import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const SITE = 'https://hillnose.xyz';

function setMeta(selector, attr, key, content) {
    let el = document.head.querySelector(selector);
    if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
    }
    el.setAttribute('content', content);
}

function setCanonical(href) {
    let el = document.head.querySelector('link[rel="canonical"]');
    if (!el) {
        el = document.createElement('link');
        el.rel = 'canonical';
        document.head.appendChild(el);
    }
    el.href = href;
}

export default function Seo({ page, path, noindex = false }) {
    const { t, i18n } = useTranslation();
    const title = t(`seo.${page}.title`);
    const description = t(`seo.${page}.description`);
    const url = `${SITE}${path}`;

    useEffect(() => {
        document.title = title;
        document.documentElement.lang = i18n.language;
        setCanonical(url);
        setMeta('meta[name="description"]', 'name', 'description', description);
        setMeta('meta[name="robots"]', 'name', 'robots', noindex ? 'noindex, follow' : 'index, follow');
        for (const [key, value] of [['og:title', title], ['og:description', description], ['og:url', url]]) {
            setMeta(`meta[property="${key}"]`, 'property', key, value);
        }
        for (const [key, value] of [['twitter:title', title], ['twitter:description', description], ['twitter:url', url]]) {
            setMeta(`meta[name="${key}"]`, 'name', key, value);
        }
    }, [title, description, url, noindex, i18n.language]);

    return null;
}
