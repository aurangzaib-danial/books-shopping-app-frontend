'use client';
import { Session } from "next-auth";
import Link from "next/link";
import HamburgerButton from "./hamburger_button";
import { useState } from "react";
import { signOutAction } from "../lib/actions";

export default function Menu({ user } : { user : Session | null }) {
  const [menuState, setMenuState] = useState('hidden');

  function showMenu() {
    let state = menuState === 'hidden' ? '' : 'hidden' ;
    setMenuState(state);
  }

  return (
    <div className="sm:flex sm:justify-between">
      <div className='flex justify-between'>
        <h1 className="text-3xl"><Link href="/">eBooks Shopping</Link></h1>
        <HamburgerButton onClick={showMenu} />
      </div>
      <div>
        <ul 
          className={`text-lg ${menuState} sm:flex underline text-center md:text-left mt-2 sm:mt-0`}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/books">Books</Link></li>
          <li><Link href="/orders">Orders</Link></li>
          { user && <li>
            <form action={signOutAction}>
              <button className='underline'>Sign out</button>
            </form>
          </li> }
        </ul>
      </div>
    </div>
  );
}
