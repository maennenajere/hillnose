import React from "react";
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/tooltip";
import { FaLinux, FaDocker, FaPython, FaReact, FaGit } from "react-icons/fa";
import { BiLogoVisualStudio } from "react-icons/bi";
import { SiJavascript, SiGnubash, SiGithub, SiRaspberrypi, SiCaddy, SiVite, SiPostgresql, SiBun, SiTypescript, SiTailwindcss, SiHetzner, SiNodedotjs, SiCloudflare, SiSupabase, SiN8N, SiUmami, SiGooglecloud } from "react-icons/si";

const tech = [
    { Icon: BiLogoVisualStudio, label: "Visual Studio Code" },
    { Icon: SiGithub, label: "GitHub" },
    { Icon: FaGit, label: "Git" },
    { Icon: FaLinux, label: "Linux" },
    { Icon: FaDocker, label: "Docker" },
    { Icon: SiJavascript, label: "JavaScript" },
    { Icon: SiTypescript, label: "TypeScript" },
    { Icon: FaPython, label: "Python" },
    { Icon: SiGnubash, label: "Bash" },
    { Icon: FaReact, label: "React.js" },
    { Icon: SiVite, label: "Vite" },
    { Icon: SiTailwindcss, label: "Tailwind CSS" },
    { Icon: SiCloudflare, label: "Cloudflare" },
    { Icon: SiHetzner, label: "Hetzner" },
    { Icon: SiCaddy, label: "Caddy" },
    { Icon: SiNodedotjs, label: "Node.js" },
    { Icon: SiBun, label: "Bun" },
    { Icon: SiPostgresql, label: "PostgreSQL" },
    { Icon: SiSupabase, label: "Supabase" },
    { Icon: SiN8N, label: "n8n" },
    { Icon: SiUmami, label: "Umami Analytics" },
    { Icon: SiRaspberrypi, label: "Raspberry Pi" },
    { Icon: SiGooglecloud, label: "Google Cloud" },
];

export default function TechStack() {
    return (
        <section className="flex flex-col gap-3 text-left text-white w-full">
            <div className="flex flex-wrap justify-center w-full gap-8 border rounded-xl bg-zinc-900 border-zinc-700 p-3 mx-auto">
                <TooltipProvider>
                    {tech.map(({ Icon, label }) => (
                        <Tooltip key={label}>
                            <TooltipTrigger className="transition-all duration-200 hover:scale-125 hover:cursor-default hover:text-orange-400">
                                <Icon size={25} />
                            </TooltipTrigger>
                            <TooltipContent>{label}</TooltipContent>
                        </Tooltip>
                    ))}
                </TooltipProvider>
            </div>
        </section>
    );
}