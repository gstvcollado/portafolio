export default function Navbar({ links }) {
  return (
    <nav className="flex justify-around mt-4">
      <h1 className="font-bold">
        Gstv <span>Collado</span>{" "}
      </h1>
      <ul className="flex gap-4  ">
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.href} className="hover:underline">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
