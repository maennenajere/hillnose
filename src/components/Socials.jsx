import React from 'react'
import { Instagram, Linkedin, Github, Send, Mail } from 'lucide-react'

const links = [
    { href: 'https://www.instagram.com/jeremaennena/', label: 'Instagram', eventName: 'instagram', Icon: Instagram },
    { href: 'https://www.linkedin.com/in/jeremaennena/', label: 'LinkedIn', eventName: 'linkedin', Icon: Linkedin },
    { href: 'https://github.com/maennenajere', label: 'GitHub', eventName: 'github', Icon: Github },
    { href: 'https://t.me/maeennenae', label: 'Telegram', eventName: 'telegram', Icon: Send },
    { href: 'mailto:contact@hillnose.xyz', label: 'Email', eventName: 'email', Icon: Mail },
]

const Socials = () => {
    return (
        <div className="flex gap-5 justify-center">
            {links.map(({ href, label, eventName, Icon }) => (
                <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    title={label}
                    className="text-gray-400 hover:text-white transition-colors"
                    data-umami-event={`badge_${eventName}`}
                >
                    <Icon size={25} className="stroke-current" aria-hidden="true" />
                </a>
            ))}
        </div>
    )
}

export default Socials