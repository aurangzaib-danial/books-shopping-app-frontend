import { auth, signOut} from '@/auth';
import { ShoppingCartIcon } from '@heroicons/react/24/solid'

export default async function Header() {
  const user = await auth();

  return (
    <header>
      <nav className="container-fixed">
        <div className="flex justify-between">
          <div>
            <h1 className="text-3xl"><a href="/">Books Shopping</a></h1>
          </div>
          <div>
            <ul className="text-lg flex">
              <li><a href="/">Home</a></li>
              <li><a href="#">Books</a></li>
              <li><a href="/orders">My Orders</a></li>
              { user && <li>
                <form
                  action={async () => {
                    'use server';
                    await signOut();
                  }}
                >
                  <button>Sign out</button>
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

          <a href="#" className="text-lg">
            <ShoppingCartIcon className="h-6 w-6 inline pr-1 align-text-top"/>
            Cart: 0
          </a>
        </div>
      </nav>
    </header>
  );
};
