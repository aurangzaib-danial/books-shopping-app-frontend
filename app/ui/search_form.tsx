'use client';
import { useSearchParams } from 'next/navigation';

export default function SearchForm() {
  const searchParams = useSearchParams();
  const q = searchParams.get('q') || '';

  return (
    <form action="/search" method="get">
    <input 
    name="q"
    type="search" 
    placeholder="Search titles..." 
    className="input mr-8 w-60"
    defaultValue={q}
    />
    </form>
  );
}
