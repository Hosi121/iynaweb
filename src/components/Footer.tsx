import { Icons } from "@/components/icons";
import Link from "next/link";

const socialLinks = [
  { href: "https://twitter.com/iynajapan", icon: Icons.twitter, label: "Twitter" },
  { href: "https://www.instagram.com/iyna_japan/", icon: Icons.instagram, label: "Instagram" },
  { href: "mailto:iynajapan2024@gmail.com", icon: Icons.mail, label: "Email" },
  { href: "https://note.com/iynajapan", icon: Icons.note, label: "Note" },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-100">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          {/* Left */}
          <div className="space-y-4">
            <p className="text-xl font-extrabold tracking-tight text-gray-900">
              IYNA&nbsp;Japan
            </p>
            <p className="text-xs font-mono tracking-[0.2em] uppercase text-gray-400">
              Tokyo, Japan
            </p>
          </div>

          {/* Center - Social */}
          <div className="flex gap-4">
            {socialLinks.map((s) => (
              <Link
                key={s.label}
                href={s.href}
                target={s.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={s.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                aria-label={s.label}
                className="text-gray-400 hover:text-gray-600 focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 rounded outline-none transition-colors duration-300"
              >
                <s.icon className="w-4 h-4" />
              </Link>
            ))}
          </div>

          {/* Right */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-xs text-gray-400">
            <Link
              href="/privacy-policy"
              className="hover:text-gray-600 focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 rounded outline-none transition-colors"
            >
              プライバシーポリシー
            </Link>
            <span className="hidden sm:inline text-gray-200">|</span>
            <span>&copy; 2025 IYNA Japan</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
