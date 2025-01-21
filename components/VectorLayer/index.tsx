import Image from "next/image";
import GraphicImage from "../ui/Graphics/CircularBlob";
function index() {
  return (
    <div className="relative ">
      <Image
        src="/bgmesh.webp"
        width={1024}
        height={500}
        className="absolute top-0 left-0 right-0 min-w-full  -z-50  portrait:scale-y-[2] portrait:scale-x-150 portrait:top-24 portrait:"
        quality={100}
        priority
        alt={"Graphics"}
      />
      <GraphicImage
        top="top-[50vh]"
        right=""
        width="w-[50rem]"
        opacity={0.5}
        left={"-left-24"}
        src={"/graphics/blob.svg"}
      />

      <GraphicImage
        top="top-[120vh]"
        right="-right-[15rem]"
        width="w-[100rem]"
        opacity={0.8}
        left={""}
        src={"/graphics/blob2.svg"}
      />
      <GraphicImage
        top="top-[164vh]"
        right=""
        width="w-[80rem]"
        opacity={0.5}
        left={"-left-24"}
        src={"/graphics/blob.svg"}
      />
      <GraphicImage
        top="top-[168vh]"
        right="-right-[20rem]"
        width="w-[50rem]"
        opacity={0.8}
        left={""}
        src={"/graphics/blob2.svg"}
      />

      <GraphicImage
        top="top-[180vh]"
        right=""
        width="w-[50rem]"
        opacity={0.5}
        left={"-left-24"}
        src={"/graphics/blob.svg"}
      />
      <GraphicImage
        top="top-[250vh]"
        right=""
        width="w-[50rem]"
        opacity={0.5}
        left={"-left-24"}
        src={"/graphics/blob.svg"}
      />

      <GraphicImage
        top="top-[320vh]"
        right="-right-[15rem]"
        width="w-[100rem]"
        opacity={0.8}
        left={""}
        src={"/graphics/blob2.svg"}
      />
      <GraphicImage
        top="top-[364vh]"
        right=""
        width="w-[80rem]"
        opacity={0.5}
        left={"-left-24"}
        src={"/graphics/blob.svg"}
      />
      <GraphicImage
        top="top-[368vh]"
        right="-right-[20rem]"
        width="w-[50rem]"
        opacity={0.8}
        left={""}
        src={"/graphics/blob2.svg"}
      />

      <GraphicImage
        top="top-[380vh]"
        right=""
        width="w-[50rem]"
        opacity={0.5}
        left={"-left-24"}
        src={"/graphics/blob.svg"}
      />
      <GraphicImage
        top="top-[450vh]"
        right=""
        width="w-[50rem]"
        opacity={0.5}
        left={"-left-24"}
        src={"/graphics/blob.svg"}
      />

      <GraphicImage
        top="top-[420vh]"
        right="-right-[15rem]"
        width="w-[100rem]"
        opacity={0.8}
        left={""}
        src={"/graphics/blob2.svg"}
      />
      <GraphicImage
        top="top-[564vh]"
        right=""
        width="w-[80rem]"
        opacity={0.5}
        left={"-left-24"}
        src={"/graphics/blob.svg"}
      />
      <GraphicImage
        top="top-[568vh]"
        right="-right-[20rem]"
        width="w-[50rem]"
        opacity={0.8}
        left={""}
        src={"/graphics/blob2.svg"}
      />

      {/* line vectors */}
      <GraphicImage
        landscapeOnly
        top="top-[60vh]"
        right="-right-0"
        width="w-[30rem]"
        opacity={1}
        left={""}
        src={"/graphics/line2.svg"}
      />
      <GraphicImage
        top="top-[80vh] portrait:top-[90vh]"
        left="left-0 portrait:-left-[20vw]"
        width="w-[50rem]"
        opacity={1}
        right={""}
        src={"/graphics/line3.svg"}
      />
      <GraphicImage
        top="top-[120vh] portrait:top-[150vh]"
        right="right-0  portrait:-right-[20vw]"
        width="w-[50rem]"
        opacity={1}
        left={""}
        src={"/graphics/line4.svg"}
      />
      <GraphicImage
        top="top-[180vh] portrait:top-[150vh]"
        right="right-0  portrait:-right-[20vw]"
        width="w-[30rem]"
        opacity={1}
        left={""}
        src={"/graphics/line6.svg"}
      />
    </div>
  );
}

export default index;
