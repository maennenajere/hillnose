import Header from './components/header.jsx'

export default function App() {
  return (
    <div className="min-h-screen w-full relative bg-black">
      {/* Golden Horizon Background with Top Glow */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(251, 191, 36, 0.25), transparent 70%), #000000",
        }}
      />

      {/* Your Content/Components */}
      <div className="relative z-10">
        <Header />
          <div className="relative z-10 flex flex-col items-center justify-center text-center text-gray-300 px-6 mt-24">
              <h1>hillnose.xyz</h1>
            </div>
        </div>
    </div>
  );
}
