import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white pt-12 pb-6 border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* 로고 및 간단한 설명 */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center mb-4">
              <Image 
                src="/snu_solo_logo.png" 
                alt="SNU SOLO Logo" 
                width={120} 
                height={40} 
                className="text-white" 
              />
            </Link>
            <div className="flex space-x-4 mt-4">
              <Button variant="ghost" size="icon" className="rounded-full text-blue-400 hover:text-blue-300 hover:bg-blue-900/20">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                </svg>
                <span className="sr-only">Youtube</span>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full text-blue-400 hover:text-blue-300 hover:bg-blue-900/20">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
                <span className="sr-only">Instagram</span>
              </Button>
            </div>
          </div>

          {/* 메뉴 링크 - SNU SOLO 메뉴 구조 */}
          <div>
            <h3 className="font-medium text-lg mb-4 text-blue-300">About Team</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about/history" className="text-gray-400 hover:text-blue-300 transition-colors">
                  Team History
                </Link>
              </li>
              <li>
                <Link href="/about/technology" className="text-gray-400 hover:text-blue-300 transition-colors">
                  Technology
                </Link>
              </li>
              <li>
                <Link href="/about/media" className="text-gray-400 hover:text-blue-300 transition-colors">
                  Media
                </Link>
              </li>
              <li>
                <Link href="/about/contact" className="text-gray-400 hover:text-blue-300 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4 text-blue-300">Team Members</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/team/2025" className="text-gray-400 hover:text-blue-300 transition-colors">
                  2025 Team
                </Link>
              </li>
              <li>
                <Link href="/team/2024" className="text-gray-400 hover:text-blue-300 transition-colors">
                  2024 Team
                </Link>
              </li>
              <li>
                <Link href="/team/2023" className="text-gray-400 hover:text-blue-300 transition-colors">
                  2023 Team
                </Link>
              </li>
              <li>
                <Link href="/team/2022" className="text-gray-400 hover:text-blue-300 transition-colors">
                  2022 Team
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4 text-blue-300">Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="https://snu.ac.kr" className="text-gray-400 hover:text-blue-300 transition-colors" target="_blank">
                  서울대학교
                </Link>
              </li>
              <li>
                <Link href="https://map.snu.ac.kr" className="text-gray-400 hover:text-blue-300 transition-colors" target="_blank">
                  캠퍼스맵
                </Link>
              </li>
              <li>
                <Link href="https://calendar.snu.ac.kr" className="text-gray-400 hover:text-blue-300 transition-colors" target="_blank">
                  SNU 캘린더
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-blue-300 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/directions" className="text-gray-400 hover:text-blue-300 transition-colors">
                  Directions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* 하단 정보 */}
        <div className="border-t border-gray-800 pt-6 mt-6">
          <div className="flex flex-col md:flex-row md:justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              Building 37 Room 215, 1, Gwanak-ro, Gwanak-gu, Seoul, Republic of Korea (08826)
            </p>
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              solo.snu@gmail.com
            </p>
            <p className="text-gray-500 text-sm">
              COPYRIGHT (C)2024 SEOUL NATIONAL UNIVERSITY. ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
} 