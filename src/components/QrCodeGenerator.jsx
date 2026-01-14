import React, { useState } from "react";
import * as htmlToImage from "html-to-image";
import QRCode from "react-qr-code";
import { useTranslation } from "react-i18next";

function QrCodeGenerator() {
    const [input, setInput] = useState("");
    const [qrValue, setQrValue] = useState("");
    const [error, setError] = useState("");
    const [mode, setMode] = useState("url");

    const qrRef = React.useRef(null);
    const { t } = useTranslation();

    const handleGenerate = () => {
        if (!input.trim()) {
            setError(t("qr.error"));
            return;
        }
        setError("");

        let valueToUse = input;
        if (mode === "url" && !/^https?:\/\//i.test(input)) {
            valueToUse = `https://${input}`;
        }

        setQrValue(valueToUse);
        setInput("");
        umami.track('QR generated', { mode: mode });
    };

    const handleDownloadPng = async () => {
        const node = qrRef.current;
        if (!node) return;

        const dataUrl = await htmlToImage.toPng(node, { pixelRatio: 3, backgroundColor: "#ffffff" });

        const link = document.createElement("a");
        link.download = "qr-code.png";
        link.href = dataUrl;
        link.click();
        umami.track('QR downloaded', { format: 'png' });
    };

    const handleDownloadSvg = () => {
        const svg = qrRef.current?.querySelector("svg");
        if (!svg) return;

        const svgData = new XMLSerializer().serializeToString(svg);
        const blob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });
        const url = URL.createObjectURL(blob);

        const link = document.createElement("a");
        link.href = url;
        link.download = "qr-code.svg";
        link.click();
        umami.track('QR downloaded', { format: 'svg' });
    };

    setTimeout(() => setError(""), 6000);

    return (
        <div className="w-full max-w-xl mx-auto px-4 py-6">
            <h1 className="text-white font-bold text-3xl sm:text-5xl mb-10">
                {t("qr.title")}
            </h1>

            <div className="flex gap-2 mb-4">
                {["url", "text"].map((m) => (
                    <label
                        key={m}
                        className={`px-3 py-1 rounded-full cursor-pointer border text-sm font-medium transition-colors ${mode === m
                            ? "bg-orange-500 text-black border-orange-500"
                            : "bg-white text-gray-700 border-gray-300"
                            }`}
                    >
                        <input
                            type="radio"
                            name="mode"
                            value={m}
                            className="hidden"
                            checked={mode === m}
                            onChange={() => setMode(m)}
                        />
                        {m === "url" ? t("qr.modeUrl") : t("qr.modeText")}
                    </label>
                ))}
            </div>

            <div className="flex items-center bg-white rounded-lg w-full overflow-hidden focus-within:ring-2 focus-within:ring-orange-400 transition-shadow mb-4">
                {mode === "url" && (
                    <span className="text-gray-500 pl-4 py-3 bg-gray-50 border-r border-gray-200 pr-3 font-medium select-none">
                        https://
                    </span>
                )}
                <input
                    className="text-black p-3 w-full outline-none placeholder-gray-400"
                    type="text"
                    placeholder={mode === "url" ? t("qr.placeholderUrl") : t("qr.placeholderText")}
                    value={input}
                    onChange={(e) => {
                        setInput(e.target.value);
                        setError("");
                    }}
                    onKeyDown={(e) => e.key === "Enter" && handleGenerate()}
                />
            </div>

            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

            <button
                onClick={handleGenerate}
                className="bg-orange-500 hover:bg-orange-600 text-black font-semibold p-3 rounded-lg w-full transition-colors duration-200 mb-6"
            >
                {t("qr.generate")}
            </button>

            {qrValue && (
                <div className="flex flex-col items-center gap-4">
                    <div ref={qrRef} className="bg-white p-6 rounded-xl shadow-lg">
                        <QRCode value={qrValue} size={250} />
                    </div>

                    <div className="flex gap-4">
                        <button
                            onClick={handleDownloadPng}
                            className="text-orange-400 border border-orange-400 hover:bg-orange-400 hover:text-black font-medium px-4 py-2 rounded-lg transition-all duration-300"
                        >
                            {t("qr.downloadPng")}
                        </button>
                        <button
                            onClick={handleDownloadSvg}
                            className="text-orange-400 border border-orange-400 hover:bg-orange-400 hover:text-black font-medium px-4 py-2 rounded-lg transition-all duration-300"
                        >
                            {t("qr.downloadSvg")}
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default QrCodeGenerator;