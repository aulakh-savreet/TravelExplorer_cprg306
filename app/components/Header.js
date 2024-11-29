import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-4">
      <nav className="container mx-auto flex justify-between">
        <Link href="/" className="text-2xl font-bold cursor-pointer">
          TravelExplorer
        </Link>
      </nav>
    </header>
  );
}
