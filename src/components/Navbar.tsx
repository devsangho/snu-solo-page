import Link from "next/link";
import Image from "next/image";
import NavbarClient from "./NavbarClient";

// SNU SOLO 메뉴 구조를 기반으로 한 네비게이션 아이템 타입
export interface NavItem {
  title: string;
  href: string;
  description?: string;
  children?: NavItem[];
}

// 메뉴 아이템 정의
const navItems: NavItem[] = [
  {
    title: "Team Members",
    href: "/members/2025",
  },
  {
    title: "Gallery",
    href: "/gallery",
  },
  {
    title: "Partners",
    href: "/partners",
  },
  {
    title: "News",
    href: "/news",
  },
];

export default function Navbar() {
  return (
    <nav className="bg-gray-900/80 backdrop-blur-md fixed w-full z-50 py-4 border-b border-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/snu_solo_logo.png"
              alt="SNU SOLO Logo"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </Link>

          {/* Navigation */}
          <NavbarClient items={navItems} />
        </div>
      </div>
    </nav>
  );
}
