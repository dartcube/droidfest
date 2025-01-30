import Image from "next/image";
import Link from "next/link";

export default function Index() {
  return (
    <main
    id ="hero" 
    className="flex items-center justify-center h-screen w-full bg-gradient-to-br from-gray-900 via-purple-900 to-black px-8 md:px-16 mt-24">
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-10">

        <div className="flex flex-col gap-6 max-w-lg text-left">
          <h1 className="text-6xl md:text-6xl font-extrabold text-white leading-tight">
            DroidFest 2025
          </h1>
          <p className="text-body font-roboto text-lg md:text-xl">Kolkata, India- TBD</p>
          <p className="text-heading-subtext text-white/75 text-sm md:text-base">
            Learn, network, and explore — where students and professionals unite
            to shape the future of Kotlin.
          </p>
          <div className="flex flex-wrap gap-4 mt-6">
            {/* <Link href="#" className="btn-primary py-3 px-6 text-lg md:text-xl">
              Releasing Ticket Soon
            </Link> */}
            <Link href="https://forms.gle/Hn3DPX3eCgPhbYRy5" className="btn-secondary py-3 px-6 text-lg md:text-xl">
              Apply to be a Speaker
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
