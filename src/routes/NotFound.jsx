import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <section className="flex flex-col items-center justify-center text-center text-white h-[50vh] gap-4">
            <h1 className="font-bold text-6xl">404</h1>
            <p className="text-xl text-white/70"> Quite empty here - Page not found</p>
            <Link
                to="/"
                className="mt-4 px-4 py-2 bg-orange-500 hover:bg-orange-600 rounded-lg text-white transition-colors"
            >
                Return Home
            </Link>
        </section>
    );
};

export default NotFound;
