export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-white py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold text-orange-500">Brandomedia</h2>
            <p className="text-gray-400 mt-2">Digital Marketing Agency</p>
          </div>
          <div className="text-center md:text-right">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Brandomedia. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

