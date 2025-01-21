import Image from "next/image";
import Link from "next/link";

function index() {
  return (
    <main className="flex flex-col h-[100dvh] w-full py-12 px-4 md:py-24 md:px-20 items-start justify-center md:justify-end">

      <div className="content max-w-screen-lg w-full sm:pr-20 flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <div className="hero flex flex-col gap portrait:text-center w-full portrait:items-center">
            <Image
              width={300}
              alt="DroidFest 2025"
              height={300}
              src="/kug-mascot.webp"
            />
            <h1 className="text-display">DroidFest 2025</h1>
            <div className="text-body font-roboto">
              Kolkata, India - Venue and Date TBD
            </div>
          </div>
          <div className="text-heading-subtext text-white/75 portrait:text-center portrait:text-sm">
            Learn, network, and explore— where students and professionals unite
            to shape the future of Kotlin and Android development.
          </div>
        </div>
        <div className="ctas flex flex-wrap gap-4 portrait:justify-center portrait:items-center">
          <Link href="#" className="btn-primary py-2 px-4">
            Get Tickets
          </Link>
          <Link href="#" className="btn-secondary py-2 px-4">
            Apply to Speak
          </Link>
        </div>
      </div>
    </main>
  );
}

export default index;
