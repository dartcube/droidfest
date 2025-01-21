import Image from "next/image";

interface GraphicImageProps {
  top: string;
  right: string;
  left: string;
  width?: string;
  opacity?: number;
  src: string;
  landscapeOnly?: boolean;
}

const GraphicImage: React.FC<GraphicImageProps> = ({
  top,
  right,
  left,
  width = "w-[40rem]",
  opacity = 1,
  src,
  landscapeOnly = false,
}) => {
  return (
    <Image
      src={src}
      width={1024}
      height={1024}
      className={`absolute ${top} ${right} ${left} h-[100rem] ${width} -z-50 ${landscapeOnly ? "hidden md:block" : ""}`}
      quality={100}
      priority
      alt="Graphics"
      style={{ opacity }}
    />
  );
};

export default GraphicImage;
