import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-cyan-900/50 to-purple-900/100 text-white">
      <section className="flex flex-col items-center justify-center text-center py-24 px-6">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">
          Light Up the Night
        </h1>
        <p className="text-xl md:text-2xl max-w-2xl mb-10 text-white/80">
          Custom neon signs. Bold, electric, unforgettable. Give your space a
          glow they’ll never forget.
        </p>
        <button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold py-3 px-6 rounded shadow-lg transition-all">
          Shop Now
        </button>
      </section>

      <section className="grid md:grid-cols-3 gap-8 px-6 pb-24 max-w-6xl mx-auto">
        {["Dream", "Create", "Glow"].map((title, idx) => (
          <div
            key={idx}
            className="bg-white/5 p-6 rounded-lg backdrop-blur-sm shadow-md hover:shadow-lg transition-shadow"
          >
            <h2 className="text-2xl font-semibold mb-2">{title}</h2>
            <p className="text-white/70">
              {title === "Dream" &&
                "Start with a vision. Any color, any shape."}
              {title === "Create" &&
                "We bring it to life with precision and power."}
              {title === "Glow" && "Flip the switch. Bask in the neon haze."}
            </p>
          </div>
        ))}
      </section>
    </main>
  );
}
