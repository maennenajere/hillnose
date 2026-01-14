import React from 'react'
import QrCodeGenerator from "../components/QrCodeGenerator.jsx"

function QRSite() {
    return (
        <section className="flex flex-col gap-3 items-center text-center text-white bg-transparent w-full mt-10">
            <QrCodeGenerator />
        </section>
    )
}

export default QRSite