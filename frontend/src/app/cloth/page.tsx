import Imagge001 from "@/components/image/m2.png";
import Imagge002 from "@/components/image/m3.png";
import Imagge003 from "@/components/image/m4.jpg";
import Imagge004 from "@/components/image/m5.png";
import Image from "next/image";
import TextRevealByWord from "@/components/magicui/ui/MagicTextRevel";

export default async function Cloth() {
  return (
    <>
      <div className="cloth max-w-[800px] mx-auto my-0 h-auto md:h-[100vh]">
        <div className="container flex justify-center items-center flex-col gap-5 mt-20">
          <div className="flex justify-center items-center flex-wrap gap-3">
            <div className="image-container">
              <Image
                width={400}
                height={300}
                src={Imagge001}
                alt="Cloth 1"
                className="img-responsive w-[300px] h-auto"
                quality={100}
              />
            </div>
            <div className="image-container">
              <Image
                width={450}
                height={338}
                src={Imagge002}
                alt="Cloth 2"
                className="img-responsive w-[300px] h-auto"
                quality={100}
              />
            </div>
            <div className="image-container">
              <Image
                width={400}
                height={300}
                src={Imagge003}
                alt="Cloth 3"
                className="img-responsive w-[300px] h-auto"
                quality={100}
              />
            </div>
            <div className="image-container">
              <Image
                width={400}
                height={300}
                src={Imagge004}
                alt="Cloth 4"
                className="img-responsive w-[300px] h-auto"
                quality={100}
              />
            </div>
          </div>
          <h1 className="text-2xl">Coming Soon...</h1>
        </div>
      </div>
    </>
  );
}
