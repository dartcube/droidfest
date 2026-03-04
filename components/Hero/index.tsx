import Image from "next/image";
import Link from "next/link";

export default function Index() {
  return (
    <main
      id="hero"
      className="flex items-center justify-center h-screen w-full bg-gradient-to-br from-gray-900 via-purple-900 to-black px-8 md:px-16 mt-24">
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-10">

        <div className="flex flex-col gap-6 max-w-lg text-left">
          <h1 className="text-6xl md:text-6xl font-extrabold text-white leading-tight">
            DroidFest 2026
          </h1>
          <p className="text-body font-roboto text-lg md:text-xl">Venue : Sister Nivedita University, B Block Auditorium</p>
          <p className="text-heading-subtext text-white/75 text-sm md:text-base">
            Learn, network, and explore — where students and professionals unite
            to shape the future of Kotlin.
          </p>
          <div className="flex flex-wrap gap-4 mt-6">
            <Link
              href="https://konfhub.com/checkout/droidfest-kolkata-2026?ticketId=81486"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-purple-600 via-fuchsia-500 to-purple-800 hover:from-purple-700 hover:via-fuchsia-600 hover:to-purple-900 text-white font-semibold py-3 px-6 text-lg md:text-xl rounded-full shadow-lg transition-all duration-300"
            >
              See You There
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center gap-6 mt-8 md:mt-0">
          <Image
            src="/kug-mascot.webp"
            alt="DroidFest Mascots"
            width={500}
            height={300}
            priority
            className="w-auto h-auto"
          />
          <p className="text-base text-white/60 max-w-sm text-center">
            The premier flagship event of Kotlin User Group, Kolkata is back!
            Join us for a day of innovation, expertise, and collaboration.
          </p>
        </div>
      </div>
    </main>
  );
}
