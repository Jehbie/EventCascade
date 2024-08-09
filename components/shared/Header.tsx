"use client";

import Link from "next/link";

import { SignOutButton, useSession } from "@clerk/nextjs";

import { Button } from "../ui/button";
import MobileNav from "./MobileNav";
import NavItems from "./NavItems";

const Header = () => {
  const { isSignedIn, session } = useSession();
  return (
    <header className="w-full fixed z-10 bg-cascade_light_cream">
      <div className="wrapper flex items-center justify-between">
        <Link href="/" className="w-36">
          {/* <Image
            src="/assets/images/logo.svg"
            width={128}
            height={38}
            alt="Evently logo"
          /> */}
          <h1 className=" text-[#624cf5] text-2xl font-bold">EventCascade</h1>
        </Link>

        <nav className="md:flex-between hidden w-full max-w-xs">
          <NavItems  isSignedIn= {isSignedIn}/>
        </nav>

        <div className="flex w-32  gap-3">
          <MobileNav />

          {isSignedIn ? (
            <Button asChild className="rounded-full" size="lg">
              <SignOutButton />
            </Button>
          ) : (
            <Button asChild className="rounded-full" size="lg">
              <Link href="/sign-in">Login</Link>
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

