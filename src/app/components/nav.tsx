import Link from "next/link";

const links = [
  { href: "/", label: "home" },
  { href: "/about", label: "about" },
  { href: "/projects", label: "projects" },
  { href: "/contact", label: "contact" },
];

export default function Nav() {
  return (
    <nav className="flex items-center justify-between border-b border-border pb-4">
      <Link href="/" className="text-accent font-bold text-sm tracking-tight">
        rs.
      </Link>
      <div className="flex gap-6">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-xs text-muted hover:text-accent transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
