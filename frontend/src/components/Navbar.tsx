"use client";

import Image from "next/image";
import Image0001 from "@/components/image/VolleyY.png";
import DarkButton from "./ui/darkButton";
import { useState } from "react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

const Navbar = () => {
  const [Isopen, setIsOpen] = useState<boolean>(false);

  const HandleOpenLink = () => {
    setIsOpen(!Isopen);
  };

  return (
    <>
      <nav>
        <div className="container flex max-w-[1550px] mx-auto my-0 mt-6 justify-evenly items-center relative z-[1010]">
          <div className="logo">
            <Link href="/">
              <Image
                src={Image0001}
                alt="logo"
                width={120}
                height={33}
                quality={100}
                className="w-[100px]"
              />
            </Link>
          </div>
          <div className="link-button">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" onClick={HandleOpenLink}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-equal"
                  >
                    <line x1="5" x2="19" y1="9" y2="9" />
                    <line x1="5" x2="19" y1="15" y2="15" />
                  </svg>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link href="/product" onClick={HandleOpenLink}>
                    Product
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/favotire" onClick={HandleOpenLink}>
                    Cart
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/cloth" onClick={HandleOpenLink}>
                    Cloth
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="link-button">
            <DarkButton />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
