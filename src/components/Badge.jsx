import React from 'react';
import { useTranslation } from 'react-i18next';

const Badge = () => {
    const { t } = useTranslation();

    return (
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/5 px-3 py-1 text-sm text-emerald-200/80 w-fit">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/70" />
            <span>
                <span className="font-medium text-emerald-200 ">
                    {t('badge.label')}
                </span>{' '}
                {t('badge.text')}
            </span>
        </div>
    );
};

export default Badge;
