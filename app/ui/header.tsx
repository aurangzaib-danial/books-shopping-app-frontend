import { auth, signOut} from '@/auth';
import { ShoppingCartIcon } from '@heroicons/react/24/solid'
import Link  from 'next/link';
import { cartCount as cartCountFun } from '../lib/actions';

export default async function Header() {
  const user = await auth();
  const cartCount = await cartCountFun();

  return (
    <header>
      <nav className="container-fixed">
        <div className="flex justify-between">
          <div>
            <h1 className="text-3xl"><Link href="/">eBooks Shopping</Link></h1>
          </div>
          <div>
            <ul className="text-lg flex underline">
              <li><Link href="/">Home</Link></li>
              <li><Link href="#">Books</Link></li>
              <li><Link href="/orders">Orders</Link></li>
              { user && <li>
                <form
                  action={async () => {
                    'use server';
                    await signOut();
                  }}
                >
                  <button className='underline'>Sign out</button>
                </form>
              </li> }
            </ul>
          </div>
        </div>

        <div className="mt-3 flex justify-end">
          <input 
            type="search" 
            placeholder="Search titles..." 
            className="input mr-8 w-60"
          />

          <Link href="/cart">
            <ShoppingCartIcon className="h-6 w-6 inline pr-1 align-text-top"/>
            Cart: {cartCount}
          </Link>
        </div>
      </nav>
    </header>
  );
};
