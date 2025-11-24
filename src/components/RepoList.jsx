import React, { useEffect, useState, useRef } from "react";
import { ExternalLink, Star, Calendar, Code2 } from "lucide-react";

export default function RepoList() {
    const [repos, setRepos] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const username = "maennenajere";

    const audioRef = useRef(null);
    useEffect(() => {
        audioRef.current = new Audio('/sound/pop.mp3');
    }, []);

    const click = () => {
        if (!audioRef.current) return;
        audioRef.current.currentTime = 0;
        audioRef.current.play();
    };

    const show = [
        "hillnose",
        "hillnoselinks",
        "ATM-Project-2024",
        "Web-Development-Project-2024",
        "MotionPath",
        "beaknet",
        "TastyOulu"
    ];

    useEffect(() => {
        async function fetchRepos() {
            setLoading(true);
            setError(null);

            try {
                const res = await fetch(`https://api.github.com/users/${username}/repos`);
                if (!res.ok) throw new Error(`GitHub API: ${res.status} ${res.statusText}`);
                const data = await res.json();

                const filtered = Array.isArray(data)
                    ? data.filter(repo => show.includes(repo.name))
                    : [];

                setRepos(filtered);
            } catch (err) {
                setError(err.message || "Failed to fetch repositories");
                setRepos([]);
            } finally {
                setLoading(false);
            }
        }

        fetchRepos();
    }, []);

    if (loading) {
        return (
            <div className="py-8 text-center text-neutral-400">
                Loading repositories...
            </div>
        );
    }

    if (error || repos.length === 0) {
        return (
            <div className="py-8 text-center text-neutral-400">
                Quite empty here...
                {error && (
                    <div className="text-sm mt-1 text-neutral-500">
                        GitHub API error - try again soon or check directly on <a
                            href="https://github.com/maennenajere"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-orange-400 hover:text-orange-300 transition"
                        >
                            GitHub
                        </a>.
                    </div>
                )}
            </div>
        );
    }

    return (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {repos.map(repo => (
                <a
                    key={repo.id}
                    href={repo.html_url}
                    target="_blank"
                    onClick={() => {
                        click();
                        umami.track('project click', {
                            name: repo.name,
                            id: repo.id,
                            url: repo.html_url
                        });
                    }}

                    rel="noopener noreferrer"
                    className="block p-6 rounded-xl bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 hover:border-orange-400 transition group"
                >
                    <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-bold">
                            {repo.name}
                        </h3>
                        <ExternalLink className="w-5 h-5 text-zinc-500 group-hover:text-orange-400" />
                    </div>

                    <p className="text-zinc-400 text-sm leading-relaxed mb-6 line-clamp-5">
                        {repo.description || "No description"}
                    </p>
                    <div className="flex items-center justify-between text-sm text-zinc-400 mt-4">
                        <div className="flex items-center gap-3">
                            <Code2 className="w-4 h-4 text-orange-400" />
                            <span className="text-zinc-300">{repo.language || "—"}</span>
                            <div className="flex items-center gap-1.5 text-zinc-300">
                                <Star className="w-4 h-4 fill-orange-500 text-orange-500" />
                                <span>{repo.stargazers_count}</span>
                            </div>
                        </div>

                        <time className="ml-auto flex items-center gap-1.5 text-zinc-500 text-xs">
                            <Calendar className="w-3.5 h-3.5" />
                            {repo.pushed_at ? new Date(repo.pushed_at).toLocaleDateString("en", { month: "short", day: "numeric", year: "numeric" }) : "Unknown"}
                        </time>
                    </div>
                </a>
            ))}
        </div>
    );
}