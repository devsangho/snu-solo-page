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
    title: "About Team",
    href: "/about",
    children: [
      {
        title: "Team History",
        href: "/about/history",
        description: "Learn about our team's journey"
      },
      {
        title: "Technology",
        href: "/about/technology",
        description: "Our solar car technology"
      },
      {
        title: "Media",
        href: "/about/media",
        description: "Media coverage of SNU SOLO"
      },
      {
        title: "Contact",
        href: "/about/contact",
        description: "Get in touch with our team"
      }
    ]
  },
  {
    title: "Team Members",
    href: "/members",
    children: [
      {
        title: "2025 Team",
        href: "/members/2025",
        description: "Current team members"
      },
      {
        title: "2024 Team",
        href: "/members/2024",
        description: "Team members from 2024"
      },
      {
        title: "2023 Team",
        href: "/members/2023",
        description: "Team members from 2023"
      },
      {
        title: "2022 Team",
        href: "/members/2022",
        description: "Team members from 2022"
      }
    ]
  },
  {
    title: "Gallery",
    href: "/gallery",
  },
  {
    title: "Partners",
    href: "/partners",
    children: [
      {
        title: "All Partners",
        href: "/partners",
        description: "View all our partners"
      },
      {
        title: "2025 BWSC Partners",
        href: "/partners/2025",
        description: "Our partners for BWSC 2025"
      }
    ]
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
