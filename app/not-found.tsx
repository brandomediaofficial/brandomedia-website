import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-black text-center px-4">
      <h1 className="text-6xl md:text-9xl font-bold mb-4">404</h1>
      <h2 className="text-2xl md:text-4xl font-bold mb-8">Page Not Found</h2>
      <p className="text-lg mb-8 max-w-md">
        Oops! The page you are looking for does not exist. It might have been
        moved or deleted.
      </p>
      <Link href="/">
        <button className="bg-black text-white px-8 py-3 rounded-full font-bold hover:bg-gray-800 transition-colors uppercase">
          Return Home
        </button>
      </Link>
    </div>
  );
}
