import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full p-4 flex justify-between items-center shadow">
      <h1 className="text-2xl font-bold text-orange-500">Brandomedia</h1>
      <ul className="flex gap-6">
        <li>
          <Link href="/" className="hover:text-orange-500 transition-colors">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-orange-500 transition-colors">
            About
          </Link>
        </li>
        <li>
          <Link href="/services" className="hover:text-orange-500 transition-colors">
            Services
          </Link>
        </li>
        <li>
          <Link href="/portfolio" className="hover:text-orange-500 transition-colors">
            Portfolio
          </Link>
        </li>
        <li>
          <Link href="/contact" className="hover:text-orange-500 transition-colors">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

