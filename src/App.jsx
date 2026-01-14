import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './routes/Home.jsx'
import Contact from './routes/Contact.jsx'
import QRSite from './routes/QRSite.jsx'
import NotFound from './routes/NotFound.jsx'
import BeaknetDemo from './routes/BeaknetDemo.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import { useTranslation } from 'react-i18next'
import Snowfall from 'react-snowfall'

const SHOW_SNOWFLAKES = true
export default function App() {
    return (
        <div className="relative min-h-dvh bg-app-background">
            <Header />
            <main className="relative z-10 grid place-items-center px-4 text-white pb-10 pt-20">
                <div className="w-full max-w-xl md:max-w-3xl lg:max-w-4xl text-center flex flex-col gap-12">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/qr" element={<QRSite />} />
                        <Route path="/beaknet-demo" element={<BeaknetDemo />} />
                    </Routes>
                    <Footer />
                </div>
            </main>
            {SHOW_SNOWFLAKES && (
                <Snowfall
                    speed={[0.5, 1.5]}
                    wind={[-0.5, 1.0]}
                    snowflakeCount={30}
                />
            )}
        </div>
    )
}
