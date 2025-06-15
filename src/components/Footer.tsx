import { Icons } from "@/components/icons";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t mt-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between py-6 px-6">
        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-600">Tokyo, Japan</span>
        </div>

        <div className="flex space-x-4">
          <Link href="https://twitter.com/iynajapan" aria-label="Twitter">
            <Icons.twitter className="w-5 h-5 text-gray-500 hover:text-gray-700" />
          </Link>
          <Link href="https://instagram.com/iynajapan" aria-label="Instagram">
            <Icons.instagram className="w-5 h-5 text-gray-500 hover:text-gray-700" />
          </Link>
          <Link href="mailto:iynajapan2024@gmail.com" aria-label="Email IYNA Japan">
            <Icons.mail className="w-5 h-5 text-gray-500 hover:text-gray-700" />
          </Link>
          <Link href="https://note.com/iynajapan" aria-label="Note">
            <Icons.note className="w-5 h-5 text-gray-500 hover:text-gray-700" />
          </Link>
        </div>

        <div className="text-sm text-gray-400 mt-4 md:mt-0">© 2025 IYNA Japan</div>
      </div>
    </footer>
  );
}
