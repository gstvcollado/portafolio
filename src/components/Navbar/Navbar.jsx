export default function Navbar({ links }) {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
      {/* Logo / Nombre */}
      <h1 className="text-xl font-bold tracking-wide">
        Gstv <span className="text-blue-600">Collado</span>
      </h1>

      {/* Links */}
      <ul className="flex gap-6 flex-wrap">
        {links.map((link, index) => (
          <li key={index}>
            <a
              href={link.href}
              className="px-2 py-1 text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
