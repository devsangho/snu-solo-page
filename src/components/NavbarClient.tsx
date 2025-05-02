'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, Menu, X, Search } from 'lucide-react';

export interface NavItem {
  title: string;
  href?: string;
  description?: string;
  children?: NavItem[];
}

export interface NavbarClientProps {
  items?: NavItem[];
}

export default function NavbarClient({ items }: NavbarClientProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (title: string) => {
    if (activeDropdown === title) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(title);
    }
  };

  const navItems: NavItem[] = items || [
    {
      title: "Gallery",
      href: "/gallery"
    },
    {
      title: "Partners",
      href: "/partners"
    },
    {
      title: "News",
      href: "/news"
    }
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-10">
        {navItems.map((item) => (
          <div key={item.title} className="relative group">
            {item.children ? (
              <button
                onClick={() => toggleDropdown(item.title)}
                className="flex items-center text-sm font-medium text-gray-200 hover:text-white transition duration-150 ease-in-out"
              >
                {item.title}
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            ) : (
              <Link
                href={item.href || "#"}
                className="text-sm font-medium text-gray-200 hover:text-white transition duration-150 ease-in-out"
              >
                {item.title}
              </Link>
            )}

            {item.children && (
              <div className={`absolute left-0 mt-2 w-56 bg-gray-800 border border-gray-700 rounded-md shadow-lg p-2 transition-all duration-100 ease-in-out transform origin-top-left ${
                activeDropdown === item.title ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'
              }`}>
                <div className="space-y-1">
                  {item.children.map((child) => (
                    <Link
                      key={child.title}
                      href={child.href || "#"}
                      className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-700 rounded-md"
                    >
                      {child.title}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}

        <button className="text-sm font-medium text-gray-200 hover:text-white transition duration-150 ease-in-out">
          <Search className="h-5 w-5" />
        </button>
      </div>

      {/* Mobile menu button */}
      <div className="md:hidden flex items-center">
        <button
          type="button"
          className="text-gray-200 hover:text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 inset-x-0 z-50 bg-gray-900 border-t border-gray-800 py-3">
          <div className="space-y-1 px-4">
            {navItems.map((item) => (
              <div key={item.title}>
                {item.children ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(item.title)}
                      className="flex items-center justify-between w-full py-2 text-base font-medium text-gray-200 hover:text-white"
                    >
                      {item.title}
                      <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === item.title ? 'rotate-180' : ''}`} />
                    </button>
                    {activeDropdown === item.title && (
                      <div className="ml-4 space-y-1 border-l-2 border-gray-700 pl-4">
                        {item.children.map((child) => (
                          <Link
                            key={child.title}
                            href={child.href || "#"}
                            className="block py-2 text-sm text-gray-300 hover:text-white"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {child.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href || "#"}
                    className="block py-2 text-base font-medium text-gray-200 hover:text-white"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
            <div className="py-2">
              <button className="text-gray-200 hover:text-white">
                <Search className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
} 