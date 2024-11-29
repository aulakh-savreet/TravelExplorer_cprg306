import Link from 'next/link';

function Header() {
  return (
    <header className="bg-blue-600 text-white p-4">
      <nav className="container mx-auto flex justify-between">
        <Link href="/">
          <a className="text-2xl font-bold">TravelExplorer</a>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
