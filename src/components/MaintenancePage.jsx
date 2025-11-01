export default function MaintenancePage() {
    return (
        <main className="min-h-screen flex items-center justify-center bg-black text-gray-300 p-6">
            <section className="text-center max-w-xl">
                <h1 className="text-4xl font-semibold">hillnose.xyz</h1>
                <p className="mt-4 text-lg" role="status" aria-live="polite">
                    Site is currently undergoing scheduled maintenance.
                </p>
            </section>
        </main>
    );
}