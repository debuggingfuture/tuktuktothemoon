import Image from "next/image";
import { Card } from "@repo/ui/card";
import { CampaignCard } from "@/components/CampaignCard";
import { POOLS } from "@/fixutres";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function Gradient({
  conic,
  className,
  small,
}: {
  small?: boolean;
  conic?: boolean;
  className?: string;
}): JSX.Element {
  return (
    <span
      className={`absolute mix-blend-normal will-change-[filter] rounded-[100%] ${small ? "blur-[32px]" : "blur-[75px]"
        } ${conic ? "bg-glow-conic" : ""} ${className}`}
    />
  );
}


export default function Page(): JSX.Element {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      <div className="z-10 items-center justify-between w-full max-w-5xl font-mono text-sm lg:flex">
        <h1 className="text-xl fixed top-0 left-0 flex justify-center w-full px-4 pt-8 pb-6 border-b bg-gradient-to-b backdrop-blur-2xl
         border-neutral-800 bg-blue-800 from-inherit lg:static lg:w-auto lg:rounded-xl lg:border text-white">
          🛺 Tuk Tuk To the Moon
        </h1>
      </div>

      <div className="z-50">
        <Link href="/editor">
          <Button className="bg-yellow-300">create</Button>
        </Link>

      </div>

      <div className="relative flex place-items-center ">
        <div className="font-sans w-auto pb-16 pt-[48px] md:pb-24 lg:pb-32 md:pt-16 lg:pt-20 flex justify-between gap-8 items-center flex-col relative z-0">
          <div className="z-50 flex items-center justify-center w-full">
            {/* <div className="absolute min-w-[614px] min-h-[614px]">
              <Image
                alt="Turborepo"
                height={614}
                src="circles.svg"
                width={614}
              />
            </div> */}
            <div className="flex flex-col">
              {
                POOLS.map(
                  ({ title, description, category }) => (
                    <CampaignCard className="p-1 mb-4" key={title} title={title} description={description} category={category} />
                  ))
              }
            </div>
          </div>

        </div>
      </div>
      <div className="stars"></div>
      <div className="shooting-star"></div>
      <div className="moon"></div>

      {/* <Gradient
        className="top-[-500px] opacity-[0.25] w-[1000px] h-[1000px]"
        conic
      /> */}
    </main>
  );
}
