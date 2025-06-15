import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Header() {
  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Education", href: "/education" },
    { label: "BrainBee", href: "/brainbee" },
    { label: "Competition", href: "/competition" },
    { label: "News & Events", href: "/news-and-events" },
    { label: "Join", href: "/join" },
  ];

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <Link href="/" className="text-2xl font-extrabold tracking-tight text-gray-900">
          IYNA Japan
        </Link>

        <nav>
          <ul className="flex space-x-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <Button variant="ghost" size="sm" className="rounded-full hover:bg-gray-100 transition">
                  <Link href={item.href} className="text-gray-700 hover:text-gray-900">
                    {item.label}
                  </Link>
                </Button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
