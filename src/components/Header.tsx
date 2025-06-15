"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";

export default function Header() {
  const [open, setOpen] = useState(false);
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

        {/* PCナビゲーション */}
        <nav className="hidden md:flex space-x-4">
          {navItems.map((item) => (
            <Button key={item.href} variant="ghost" size="sm" className="rounded-full hover:bg-gray-100">
              <Link href={item.href} className="text-gray-700 hover:text-gray-900">
                {item.label}
              </Link>
            </Button>
          ))}
        </nav>

        {/* モバイルメニュー開閉ボタン */}
        <Button
          variant="ghost"
          size="sm"
          className="md:hidden p-2"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {open ? (
            <Icons.x className="w-6 h-6 text-gray-700" />
          ) : (
            <Icons.menu className="w-6 h-6 text-gray-700" />
          )}
        </Button>
      </div>

      {/* モバイルナビゲーション */}
      {open && (
        <nav className="md:hidden bg-white border-t">
          <ul className="flex flex-col space-y-2 px-6 py-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block text-gray-700 hover:text-gray-900 py-2"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
);
}
