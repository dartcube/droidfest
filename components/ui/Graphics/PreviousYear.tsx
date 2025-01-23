import { PreviousYearImageUrls } from "@/consts/PreviousYearImages";
import Image from "next/image";

const imageStyles = [
  "border text-center h-48 w-48 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
  "border text-center h-20 w-20 absolute left-1/2 top-1/2 -translate-x-24 -translate-y-52",
  "border text-center h-48 w-48 absolute left-1/2 top-1/2 -translate-x-80 -translate-y-56",
  "border text-center h-24 w-24 absolute left-1/2 top-1/2 -translate-x-56 translate-y-2",
  "border text-center h-32 w-32 absolute left-1/2 top-1/2 -translate-x-24 translate-y-32",
  "border text-center h-32 w-32 absolute left-1/2 top-1/2 translate-x-32 translate-y-2",
  "border text-center h-32 w-32 absolute left-1/2 top-1/2 translate-x-16 -translate-y-56",
  "border text-center h-32 w-32 absolute left-1/2 top-1/2 -translate-x-80 translate-y-32",
];

const roundedStyles = [
  "rounded-tr-[6rem]",
  "rounded-xl",
  "rounded-tl-[6rem]",
  "rounded-bl-[3rem]",
  "rounded-br-[4rem]",
  "rounded-br-[4rem]",
  "rounded-tr-[4rem]",
  "rounded-bl-[4rem]",
];

function PreviousYear() {
  return (
    <div className="relative portrait:scale-[0.6] left-6 " title="Previous Year Glimpse">
      {PreviousYearImageUrls.map((url, index) => (
        <div key={index} className={`${imageStyles[index]} ${roundedStyles[index]}`}>
          <Image
            src={url}
           alt="Previous Year Glimpse"
            width={300}
            height={300}
            priority
            className={`overflow-hidden h-full w-full ${roundedStyles[index]} object-cover object-center`}
          />
        </div>
      ))}
    </div>
  );
}

export default PreviousYear;
