import React, { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Quote from './components/Quote.jsx'
import Footer from './components/Footer.jsx'

const Home = lazy(() => import('./routes/Home.jsx'))
const Contact = lazy(() => import('./routes/Contact.jsx'))

export default function App() {
    return (
        <div className="relative bg-black min-h-dvh">
            <div
                className="absolute inset-0 z-0"
                style={{
                    background:
                        "radial-gradient(ellipse 80% 90% at 50% 0%, rgba(251, 191, 36, 0.25), transparent 70%), #000000",
                }}
            />

            <Header />
            <main className="relative z-10 grid place-items-center px-4 text-white pb-10 pt-24">
                <div className="w-full max-w-xl md:max-w-3xl lg:max-w-4xl text-center flex flex-col gap-10">
                    <Suspense fallback={<div className="text-white text-center py-8">Loading...</div>}>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/contact" element={<Contact />} />
                        </Routes>
                    </Suspense>
                    <Quote />
                    <Footer />
                </div>
            </main>
        </div>
    )
}
