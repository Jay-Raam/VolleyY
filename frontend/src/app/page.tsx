import Image from "next/image";
import Imagee00001 from "@/components/image/hero-product.png";
import "./styles.css";
import BlurFade from "@/components/magicui/blur";
import BlurIn from "@/components/magicui/blurin";
import Meteors from "@/components/magicui/HavorBackend";
import Imagee00002 from "@/components/image/brand-1.png";
import Imagee00003 from "@/components/image/brand-2.png";
import Imagee00004 from "@/components/image/brand-3.png";
import Imagee00005 from "@/components/image/brand-4.png";
import Imagee00006 from "@/components/image/Discount Image-1.png";
import Imagee00007 from "@/components/image/Discount Image-2.png";
import Imagee00008 from "@/components/image/offer-1.png";
import Imagee00009 from "@/components/image/offer-2.png";
import Imagee00010 from "@/components/image/offer-3.jpg";
import Imagee00011 from "@/components/image/image 2.png";
import Imagee00012 from "@/components/image/catagaries-4.png";
import { MarqueeDemo } from "@/components/magicui/Marquee";
import HeroVideoDialog from "@/components/magicui/ui/Video";
import { VelocityScroll } from "@/components/magicui/ui/ImageSlider";
import SparklesText from "@/components/magicui/ui/MagicSpark";
import ShinyButton from "@/components/magicui/ui/MagicButton";
import Link from "next/link";
import ContactForm from "@/components/Contact";
import { Instagram, Linkedin, Rss, Twitter, LucideGithub } from "lucide-react";

export default async function Home() {
  return (
    <>
      <header className="mt-8">
        <div className="main-23 h-[320px] md:h-[630px] lg:h-[700px] xl:h-[500px]">
          <div className="relative max-w-[1550px] mx-auto mt-2">
            <BlurFade delay={0.25} inView>
              <h1 className="text-xl text-center w-full dark:text-white">
                THE NEW 2024
              </h1>
            </BlurFade>
            <BlurFade delay={0.26} inView>
              <h1 className="-z-10 text-[70px] md:text-[175px] dark:text-white text-center w-full Change-font font-bold">
                AIR JORDAN
              </h1>
            </BlurFade>
            <BlurFade delay={0.3} inView>
              <Image
                src={Imagee00001}
                quality={100}
                alt="Air Jordan 1 Mid Red"
                className="absolute w-full lg:w-[615px] h-auto -bottom-36 md:-bottom-[15rem] lg:-bottom-28 xl:-bottom-52 lg:left-[21%] xl:left-[30%]"
                width={1519}
                height={1519}
              />
            </BlurFade>
          </div>
        </div>
      </header>
      <main className="relative overflow-hidden rounded-lg bg-background">
        <div className="explore pb-4">
          <div className="text flex flex-col w-full justify-center items-center gap-3 dark:text-white">
            <BlurFade delay={0.26} inView>
              <h1 className="text-[50px] font-bold">Just do it</h1>
            </BlurFade>
            <BlurFade delay={0.26} inView>
              <p className="text-sm text-gray-500 text-center">
                Capture message that stands for more then just sport.
              </p>
            </BlurFade>
          </div>
          <div className="catagaries flex justify-center items-center gap-4 flex-wrap">
            <Link href="/cloth">
              <div className="image mt-10">
                <BlurFade delay={0.26} inView>
                  <h1 className="image-h1 w-[280px] h-[300px] flex justify-center items-center text-white font-extrabold text-[20px]">
                    Men
                  </h1>
                </BlurFade>
              </div>
            </Link>

            <Link href="/cloth"></Link>
            <div className="image mt-10">
              <BlurFade delay={0.26} inView>
                <h1 className="image-h2 w-[280px] h-[300px] flex justify-center items-center text-white font-extrabold text-[20px]">
                  Women
                </h1>
              </BlurFade>
            </div>
            <Link href="/cloth">
              <div className="image mt-10">
                <BlurFade delay={0.26} inView>
                  <h1 className="image-h3 w-[280px] h-[300px] flex justify-center items-center text-white font-extrabold text-[20px]">
                    Kids
                  </h1>
                </BlurFade>
              </div>
            </Link>
            <Link href="/cloth">
              <div className="image mt-10">
                <BlurFade delay={0.26} inView>
                  <h1 className="image-h4 w-[280px] h-[300px] flex justify-center items-center text-white font-extrabold text-[20px]">
                    Combo
                  </h1>
                </BlurFade>
              </div>
            </Link>
          </div>
        </div>

        <div className="client flex justify-center items-center mt-5 p-4 dark:bg-yellow-300 h-[100px]">
          <div className="image flex gap-8 mx-auto my-0 justify-center items-center flex-wrap max-w-[1200px]">
            <Image
              src={Imagee00002}
              alt="clients"
              width={400}
              quality={100}
              height={101}
              className="w-[100px] h-auto grayscale hover:grayscale-0 cursor-pointer"
            />
            <Image
              src={Imagee00003}
              alt="clients"
              width={400}
              height={101}
              quality={100}
              className="w-[100px] h-auto grayscale hover:grayscale-0 cursor-pointer"
            />
            <Image
              src={Imagee00004}
              alt="clients"
              width={400}
              quality={100}
              height={101}
              className="w-[100px] h-auto grayscale hover:grayscale-0 cursor-pointer"
            />
            <Image
              src={Imagee00005}
              alt="clients"
              width={400}
              height={101}
              quality={100}
              className="w-[100px] h-auto grayscale hover:grayscale-0 cursor-pointer"
            />
          </div>
        </div>
        <div className="reviews flex mt-10 h-auto lg:h-[100vh] justify-center flex-col items-center gap-3">
          <div className="container flex justify-center max-w-[1200px] mx-auto my-0 gap-3 items-center flex-col lg:flex-row">
            <div className="relative mt-5 w-full lg:w-1/2">
              <HeroVideoDialog
                className="dark:hidden block"
                animationStyle="top-in-bottom-out"
                videoSrc="https://www-ccv.adobe.io/v1/player/ccv/HxZPyHedIBm/embed?api_key=behance1&bgcolor=%23191919"
                thumbnailSrc="https://cdn-prod-ccv.adobe.com/HxZPyHedIBm/image/HxZPyHedIBm_poster.jpg?hdnts=st%3D1725633165%7Eexp%3D1725892365%7Eacl%3D%2Fshared_assets%2Fimage%2F*%21%2Fz%2FHxZPyHedIBm%2Frend%2F*%21%2Fi%2FHxZPyHedIBm%2Frend%2F*%21%2FHxZPyHedIBm%2Frend%2F*%21%2FHxZPyHedIBm%2Fimage%2F*%21%2FHxZPyHedIBm%2Fcaptions%2F*%7Ehmac%3Dab1f4980b755b2c3dca2288e00b223cf7c5cf11f56a742a54125ffe2ec450704"
                thumbnailAlt="Hero Video"
              />
              <HeroVideoDialog
                className="hidden dark:block"
                animationStyle="top-in-bottom-out"
                videoSrc="https://www-ccv.adobe.io/v1/player/ccv/HxZPyHedIBm/embed?api_key=behance1&bgcolor=%23191919"
                thumbnailSrc="https://cdn-prod-ccv.adobe.com/HxZPyHedIBm/image/HxZPyHedIBm_poster.jpg?hdnts=st%3D1725633165%7Eexp%3D1725892365%7Eacl%3D%2Fshared_assets%2Fimage%2F*%21%2Fz%2FHxZPyHedIBm%2Frend%2F*%21%2Fi%2FHxZPyHedIBm%2Frend%2F*%21%2FHxZPyHedIBm%2Frend%2F*%21%2FHxZPyHedIBm%2Fimage%2F*%21%2FHxZPyHedIBm%2Fcaptions%2F*%7Ehmac%3Dab1f4980b755b2c3dca2288e00b223cf7c5cf11f56a742a54125ffe2ec450704"
                thumbnailAlt="Hero Video"
              />
            </div>
            <div className="client-review w-full lg:w-1/2 flex justify-start items-start gap-5 flex-col">
              <BlurFade delay={0.25} inView>
                <h1 className="text-[30px] font-bold">
                  Ready to Elevate Your Game?
                </h1>
              </BlurFade>
              <BlurFade delay={0.25} inView>
                <p className="text-[15px] text-gray-400">
                  Step up your game with the Nike. This isn’t just a shoe; it’s
                  your new teammate, engineered to amplify every aspect of your
                  performance. If you’re ready to break through your limits and
                  experience the next level of athletic excellence, you’ve come
                  to the right place.
                </p>
              </BlurFade>
            </div>
          </div>
          <MarqueeDemo />
        </div>

        <div className="discount flex justify-center items-center max-w-[1550px] mx-auto my-0 mt-8 flex-wrap lg:flex-nowrap">
          <Image
            src={Imagee00006}
            alt="clients"
            width={880}
            height={480}
            quality={100}
            className="w-full md:w-[500px] lg:w-[765px] h-auto"
          />
          <Image
            src={Imagee00007}
            alt="clients"
            width={878}
            height={480}
            quality={100}
            className="w-full md:w-[500px] lg:w-[765px] h-auto"
          />
        </div>

        <div className="our-product mt-10">
          <h1 className="text-center text-[30px] font-bold mb-4">
            Our Product
          </h1>
          <div className=" mx-auto my-0 relative pb-5 flex w-full flex-col items-center max-w-[1550px] justify-center overflow-hidden rounded-lg bg-background h-auto md:h-[100vh]">
            <Meteors number={120} />
            <div className="image-produect flex z-50 flex-wrap justify-center items-center gap-10 flex-col">
              <div className="flex z-50 flex-wrap justify-center items-center gap-3 mt-4">
                <BlurFade delay={0.26} inView>
                  <Image
                    src={Imagee00008}
                    quality={100}
                    alt="Air Jordan 1 Mid Red"
                    className="w-[300px] h-auto hover:scale-105"
                    width={1075}
                    height={567}
                  />
                </BlurFade>
                <BlurFade delay={0.26} inView>
                  <Image
                    src={Imagee00009}
                    quality={100}
                    alt="Air Jordan 1 Mid Red"
                    className="w-[300px] h-auto hover:scale-105"
                    width={1075}
                    height={567}
                  />
                </BlurFade>
                <BlurFade delay={0.26} inView>
                  <Image
                    src={Imagee00010}
                    quality={100}
                    alt="Air Jordan 1 Mid Red"
                    className="w-[300px] h-auto hover:scale-105"
                    width={1075}
                    height={567}
                  />
                </BlurFade>
              </div>
              <BlurFade delay={0.26} inView>
                <Link href="/product">
                  <ShinyButton text="Our Product" />
                </Link>
              </BlurFade>
            </div>
          </div>
        </div>

        <div className="brands mt-7">
          <BlurFade delay={0.26} inView>
            <VelocityScroll
              text="Nike Zara Esport"
              default_velocity={4}
              className="font-display text-center text-4xl font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]"
            />
          </BlurFade>
        </div>

        <div className="about flex justify-center items-center gap-5 flex-col max-w-[1200px] mx-auto my-0 h-auto lg:h-[100vh] mt-5">
          <div className="flex justify-center items-center gap-5 flex-col lg:flex-row">
            <div className="image w-full lg:w-1/2 flex justify-center items-center">
              <Image
                src={Imagee00011}
                alt="Nike Zara Esport"
                width={1500}
                height={800}
                quality={100}
                className="w-[300px] md:w-[500px] h-auto flex justify-center items-center"
              />
            </div>
            <div className="text-left text-[18px] w-full lg:w-1/2 text-gray-400 z-10 flex flex-col items-start justify-start gap-5">
              <BlurIn
                word="Discover Unbeatable Shoe Deals!"
                className="text-4xl font-bold text-black dark:text-white"
              />
              <p>
                Experience a day of exceptional rewards with our exclusive shoe
                collection!
              </p>
              <p>
                Our mission is to create an unparalleled athletic experience for
                our customers by providing high-quality, premium footwear that
                is both stylish and functional.
              </p>
              <p>
                Don’t let these limited-time offers slip away—shop now and enjoy
                a day filled with fantastic finds and stylish savings!
              </p>
            </div>
          </div>
        </div>

        <section
          className="contact flex justify-center items-center gap-6 flex-col max-w-[1200px] mx-auto my-0 mt-20 mb-3"
          id="contact"
        >
          <h2 className="text-center text-3xl">Contact Us</h2>
          <p className="text-center">
            If you have any questions, suggestions, or feedback, we&apos;d love
            to hear from you. Reach out to us using the contact form below.
          </p>
          <div className="flex justify-center items-center flex-col-reverse lg:flex-row max-w-[1200px] mx-auto my-0 gap-5">
            <ContactForm />
            <BlurFade delay={0.26} inView>
              <Image
                src={Imagee00012}
                alt="the men"
                quality={100}
                width={523}
                height={654}
                className="w-[300px] md:w-[500px]"
              />
            </BlurFade>
          </div>
        </section>
      </main>

      <footer className="max-w-[1550px] mx-auto my-0 flex justify-center items-center flex-col lg:flex-row bg-[#fde047] text-black h-auto lg:h-[250px] p-10 gap-20 mt-9">
        <div className="flex justify-center items-center gap-4 w-full lg:w-1/3">
          <SparklesText text="VolleyY" />
        </div>
        <div className="flex justify-center items-center gap-4 flex-col w-full lg:w-1/3">
          <Link href="/product">Product</Link>
          <Link href="/favotire">Cart</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className="flex justify-center items-center gap-4 flex-col w-full lg:w-1/3">
          <div className="flex justify-center items-center gap-4">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/jayasriraam"
            >
              <span className="text-sm">
                <Linkedin />
              </span>
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/_ivanjay_/"
            >
              <span className="text-sm">
                <Instagram />
              </span>
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://jayasriraam.blogspot.com/"
            >
              <span className="text-sm">
                <Rss />
              </span>
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://x.com/ivan_jayram"
            >
              <span className="text-sm">
                <Twitter />
              </span>
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/Jay-Raam/"
            >
              <span className="text-sm">
                <LucideGithub />
              </span>
            </Link>
          </div>
        </div>
      </footer>
      <div className="copyright p-4 text-white bg-black text-center text-[13px]">
        <p>
          © 2024
          <Link
            className="ml-1"
            href="https://jayasriraam.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            VolleyY and Jayasriraam
          </Link>
          . All rights reserved.
        </p>
      </div>
    </>
  );
}
