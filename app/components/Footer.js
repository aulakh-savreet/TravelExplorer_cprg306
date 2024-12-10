import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-neutral text-gray-700">
      <div className="container mx-auto py-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} TravelExplorer. All rights reserved.</p>
        <ul className="flex space-x-4 mt-4 md:mt-0">
          <li>
            <Link href="/privacy" className="hover:text-primary transition text-sm">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link href="/terms" className="hover:text-primary transition text-sm">
              Terms of Service
            </Link>
          </li>
          <li>
            <Link href="/sitemap" className="hover:text-primary transition text-sm">
              Sitemap
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
