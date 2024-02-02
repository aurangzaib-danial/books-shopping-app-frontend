import { auth } from '@/auth';
import { ShoppingCartIcon } from '@heroicons/react/24/solid'
import Link  from 'next/link';
import { cartCount as cartCountFun } from '../lib/actions';
import SearchForm from './search_form';
import Menu from './menu';

export default async function Header() {
  const user = await auth();
  const cartCount = await cartCountFun();

  return (
    <header>
      <nav className="container-fixed">
        <Menu user={user} />

        <div className="mt-6 sm:mt-3 flex justify-end">
          <SearchForm />
          <Link href="/cart">
            <ShoppingCartIcon className="h-6 w-6 inline pr-1 align-text-top"/>
            Cart: {cartCount}
          </Link>
        </div>
      </nav>
    </header>
  );
};
