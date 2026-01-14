import React from 'react';
import beakyDemo from '../assets/photo/BeakyDemo.png';

const BeakyDemo = () => {
    return (
        <section className="flex flex-col gap-4 items-center text-center text-white bg-transparent w-full">
            <h1 className="text-white font-bold text-3xl md:text-5xl">Beaky Demo</h1>

            <div className="w-full rounded-xl overflow-hidden shadow-2xl border border-gray-800">
                <img
                    src={beakyDemo}
                    alt="Beaky Demo"
                    className="w-full h-auto object-cover"
                />
            </div>
        </section>
    );
};

export default BeakyDemo;
