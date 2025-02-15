import { Icons } from "@/components/Icons";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import Phone from "../components/Phone";
import { ArrowRight, Check, Star } from "lucide-react";
import Image from "next/image";
import { Reviews } from "@/components/Reviews";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-slate-50">
      <section>
        <MaxWidthWrapper className="pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gp-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52">
          <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
            <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className="absolute w-28 left-0 -top-20 hidden">
                <img src="/snake-1 png" className="w-full" />
              </div>
              <h1 className="relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl">
                Chose Your{" "}
                <span className="bg-green-600 px-2 text-white"> Service </span>
              </h1>
              <u className="mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start">
                <div className="space-y-2">
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-green-600" />{" "}
                    Emergency Service
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-green-600" />
                    Ambulance Service 24/7
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-green-600" />
                    Regular Health Checkup
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-green-600" />
                    Online Doctor Appoinment
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-green-600" />
                    Home Health Service
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-green-600" />
                    Latest Treatments
                  </li>
                </div>
              </u>
              <div className="mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5">
                <div className="flex -space-x-4">
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                    src="720.webp"
                    alt="profile picture"
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                    src="720.webp"
                    alt="profile picture"
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                    src="720.webp"
                    alt="profile picture"
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                    src="720.webp"
                    alt="profile picture"
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                    src="720.webp"
                    alt="profile picture"
                  />
                  <img
                    className="inline-block object-cover h-10 w-10 rounded-full ring-2 ring-slate-100"
                    src="720.webp"
                    alt="profile picture"
                  />
                </div>
                <div className="flex flex-col justify-between items-center sm:items-start">
                  <div className="flex gap-0.5">
                    <Star className="h-4 w-4 text-green-600 fill-green-600" />
                    <Star className="h-4 w-4 text-green-600 fill-green-600" />
                    <Star className="h-4 w-4 text-green-600 fill-green-600" />
                    <Star className="h-4 w-4 text-green-600 fill-green-600" />
                    <Star className="h-4 w-4 text-green-600 fill-green-600" />
                    <Star className="h-4 w-4 text-green-600 fill-green-600" />
                  </div>
                  <p>
                    <span className="font-semibold">1.125</span> happy journey
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-0 mt-32 lg:mx-0 lg:mt-20 h-fit">
            <div className="relative md:max-w-xl">
              <img className="flex" width="1500" src="/image/elderly.png" />
            </div>

            <div className="w-64 ml-16">sdfasfaf</div>
          </div>
        </MaxWidthWrapper>
      </section>
      <section>
        <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-32">
          <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6">
            <h2 className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900">
              What our{" "}
              <span className="relative px-2">
                users
                <Icons.underline className="hidden sm:block pointer-events-none absolute inset-x-0 -bottom-6 poin text-green-500" />
              </span>{" "}
              say
            </h2>
            <Image
              src="/information-technology.webp"
              className="w-24 order-0 lg:order-2"
              width="100"
              height="100"
              alt="image"
            />
          </div>
          {/* first user review */}
          <div className="mx-auto grid max-w-2xl grid-cols-1 px-4 lg:max-0 lg:max-w-none lg:grid-cols-2 gap-y-16">
            <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
              <div className="flex gap-0.5 mb-2">
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
              </div>
              <p className="text-lg leading-8">
                "The case feels durable and I evet got a compliment onf the
                desing.
                <span className="p-0.5 bg-slate-800 text-white">
                  {" "}
                  Had thei case for{" "}
                </span>
                two and a half months now and "
              </p>

              <div className="flex gap-4 mt-2">
                <Image
                  src="/1.jpeg"
                  alt="user"
                  width="100"
                  height="100"
                  className="rounded-full h-12 w-12 object-cover"
                />
                <div className="flex flex-col">
                  <p className="font-semibold">Aminul</p>
                  <div className="flex gap-1.5 items-center text-zinc-600">
                    <Check className="h-4 w-4 stroke-[3px] text-green-600" />
                    <p className="text-sm">Verified Purchase</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* second user review*/}
          <div className="mx-auto grid max-w-2xl grid-cols-1 px-4 lg:max-0 lg:max-w-none lg:grid-cols-2 gap-y-16">
            <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
              <div className="flex gap-0.5 mb-2">
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
              </div>
              <p className="text-lg leading-8">
                "The case feels durable and I evet got a compliment onf the
                desing.
                <span className="p-0.5 bg-slate-800 text-white">
                  {" "}
                  Had thei case for{" "}
                </span>
                two and a half months now and "
              </p>

              <div className="flex gap-4 mt-2">
                <Image
                  src="/1.jpeg"
                  alt="user"
                  width="100"
                  height="100"
                  className="rounded-full h-12 w-12 object-cover"
                />
                <div className="flex flex-col">
                  <p className="font-semibold">Aminul</p>
                  <div className="flex gap-1.5 items-center text-zinc-600">
                    <Check className="h-4 w-4 stroke-[3px] text-green-600" />
                    <p className="text-sm">Verified Purchase</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
        <div className="pt-16">
          <Reviews />
        </div>
      </section>
      <section>
        <MaxWidthWrapper className="py-24">
          <div className="mb-12 px-6 lg:px-8">
            <div className="mx-auto max-w-2xl sm:text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900">
              Upload your own{" "}
              <span className="relative px-2 bg-green-600 text-white">
                {" "}
                Service
              </span>
            </div>
          </div>
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="relative flex flex-col items-center md:grid grid-cols-2 gap-40">
              <Image
                src="/arrow.png"
                className="absolute top-[25rem] md:top-1/2 -translate-y-1/2 z-10 left-1/2 -translate-x-1/2 rotate-90 md:rotate-0"
                width="100"
                height="100"
                alt=""
              />
              <div className="relative h-80 md:h-full w-full md:justify-self-end max-w-sm rounded-xl border-gray-900/5 ring-inset ring-gray-900/10 lg:rounded-2xl">
                <Image
                  src="/tech1.jpeg"
                  className="absolute top-[25rem] md:top-1/2 -translate-y-1/2 z-10 left-1/2 -translate-x-1/2 rotate-90 md:rotate-0"
                  width="100"
                  height="100"
                  alt=""
                />
              </div>
              <Phone className="w-60" imgSrc="/tech1.jpeg" />
            </div>
          </div>
          <ul className="mx-auto mt-12 max-w-prose sm:text-lg space-y-2 w-fit">
            <li className="w-fit">
              <Check className="h-5 w-5 text-green-600 inline mr-1.5 " />
              High quality Service
            </li>

            <li className="w-fit">
              <Check className="h-5 w-5 text-green-600 inline mr-1.5 " />
              High quality Service
            </li>

            <li className="w-fit">
              <Check className="h-5 w-5 text-green-600 inline mr-1.5 " />
              High quality Service
            </li>

            <li className="w-fit">
              <Check className="h-5 w-5 text-green-600 inline mr-1.5 " />
              High quality Service
            </li>

            <li className="w-fit">
              <Check className="h-5 w-5 text-green-600 inline mr-1.5 " />
              High quality Service
            </li>
            <div className="flex justify-center">
              <Link
                className={buttonVariants({
                  size: "lg",
                  className: "mx-auto mt-8",
                })}
                href="/upload"
              >
                Create your case now <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
          </ul>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}
