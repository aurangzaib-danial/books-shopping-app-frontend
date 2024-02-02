import { Bars3Icon } from '@heroicons/react/24/solid';

export default function HamburgerButton({onClick} : { onClick: () => void}) {
  return (
    <button className="focus:outline-none border border-gray-300 rounded p-2 sm:hidden" onClick={onClick}>
      <Bars3Icon className="w-8 h-8 text-gray-700" />
    </button>
  );
};
