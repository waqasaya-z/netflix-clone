'use client'
import Image from "next/image";
import Link from "next/link";
import React from "react";
import NetflixLogo from "@/assets/netflix.svg";
import { useSession } from "next-auth/react";

const Navbar = () => {

 const {status, data: session} = useSession();

  return (
    <div className="navbar bg-gray-950">
      <div className="flex-1 text-white">
        <Link href="/" className="w-28 ml-8">
          {" "}
          <Image src={NetflixLogo} alt="Netflix" />{" "}
        </Link>
        <Link href="/" className="btn btn-ghost normal-case text-lg ml-8">
          Home
        </Link>
       {status === "authenticated" && 
        <Link href="/mylist" className="btn btn-ghost normal-case text-lg">
          My List
        </Link>
        }
      </div>
      <div className="flex-none">
      { status === "unauthenticated" &&  <Link className="text-white mr-10" href="/api/auth/signin"> Log in </Link>}
      { status === "authenticated" &&
       <ul className="menu menu-horizontal px-1 text-white">
          <li>
            <details>
              <summary>{session?.user?.email}</summary>
              <ul className="p-2 bg-base-100">
                <li>
                  <Link  className="text-black" href="/api/auth/signout"> Sign Out </Link>
                </li>
                <li>
         <Link className="text-black" href='/pricing'> Plans </Link>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      }
      </div>
    </div>
  );
};

export default Navbar;
