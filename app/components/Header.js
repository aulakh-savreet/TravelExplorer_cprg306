import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-primary text-white shadow">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link href="/" className="text-2xl font-bold">
          TravelExplorer
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="hover:text-secondary transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-secondary transition">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-secondary transition">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
