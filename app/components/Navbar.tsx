import Image from "next/image";
import Link from "next/link";
import React from "react";
import NetflixLogo from '@/assets/netflix.svg'

interface Props {
    username: string
}

const Navbar = ({username}: Props) => {
  return (
    <div className="navbar bg-gray-950">
  <div className="flex-1 text-white">
    <Link href='/' className="w-28 ml-8"> <Image src={NetflixLogo} alt="Netflix" /> </Link>
    <Link href='/' className="btn btn-ghost normal-case text-lg ml-8">Home</Link>
    <Link href='/mylist' className="btn btn-ghost normal-case text-lg">My List</Link>
  </div>
  <div className="flex-none">
  <ul className="menu menu-horizontal px-1 text-white">
      <li>
        <details>
          <summary>
            {username}
          </summary>
          <ul className="p-2 bg-base-100">
            <li><Link href='/login'> Sign Out </Link></li>
          </ul>
        </details>
      </li>
    </ul>
  </div>
</div>
  );
};

export default Navbar;
