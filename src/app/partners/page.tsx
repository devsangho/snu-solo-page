import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Partners | SNU SOLO',
  description: 'Our partners who support the Seoul National University Solar Car Team',
};

export default function PartnersPage() {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-black py-20">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            Our Partners
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            SNU SOLO is supported by the best companies and institutions.
          </p>
        </div>

        {/* Partner Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
          <div className="bg-gradient-to-r from-blue-900/20 to-indigo-900/20 p-8 rounded-2xl shadow-xl border border-blue-600/20 hover:border-blue-400/30 transition-all duration-300 transform hover:-translate-y-1">
            <h2 className="text-2xl font-bold mb-4 text-blue-300">2025 BWSC Partners</h2>
            <p className="text-gray-300 mb-6">
              Our partners for the upcoming Bridgestone World Solar Challenge 2025. These organizations help us push the boundaries of solar energy technology.
            </p>
            <a 
              href="/partners/2025"
              className="inline-block bg-blue-700 hover:bg-blue-600 text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-blue-600/20 transform hover:-translate-y-1 transition-all duration-300 text-sm"
            >
              View Partners
            </a>
          </div>

          <div className="bg-gradient-to-r from-blue-900/20 to-indigo-900/20 p-8 rounded-2xl shadow-xl border border-blue-600/20 hover:border-blue-400/30 transition-all duration-300 transform hover:-translate-y-1">
            <h2 className="text-2xl font-bold mb-4 text-blue-300">2023 BWSC Partners</h2>
            <p className="text-gray-300 mb-6">
              The organizations and individuals who supported our team during the 2023 Bridgestone World Solar Challenge.
            </p>
            <a 
              href="/news"
              className="inline-block bg-blue-700 hover:bg-blue-600 text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-blue-600/20 transform hover:-translate-y-1 transition-all duration-300 text-sm"
            >
              View Partners
            </a>
          </div>
        </div>

        {/* 2023 BWSC Partners Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="flex items-center justify-center mb-10">
            <div className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent w-full max-w-xs"></div>
            <h2 className="text-3xl font-bold px-6 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              2023 BWSC Partners
            </h2>
            <div className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent w-full max-w-xs"></div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-900/20 to-indigo-900/20 p-10 rounded-2xl shadow-xl border border-blue-600/20 mb-12">
            <p className="text-xl text-center text-gray-300 mb-8">
              SNU SOLO is supported by the best companies and institutions.
            </p>
            <p className="text-xl text-center text-gray-300">
              Thanks to many partners, SNU SOLO was able to complete the car.
            </p>
          </div>

          {/* Special Thanks Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-blue-300 text-center mb-10 italic">
              Special Thanks To
            </h3>
            <p className="text-lg text-center text-gray-400 mb-8">
              SNU SOLO에 도움을 주신 많은 분들께 감사의 인사를 드립니다. 더욱 성장하는 SNU SOLO가 되겠습니다.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-900/60 p-6 rounded-xl border border-blue-600/20">
                <p className="text-gray-300">
                  <span className="font-bold text-blue-300">박성근</span> / 현대자동차 / 패널 디자인 협업 및 배치 관련 피드백 관련 도움
                </p>
              </div>
              <div className="bg-gray-900/60 p-6 rounded-xl border border-blue-600/20">
                <p className="text-gray-300">
                  <span className="font-bold text-blue-300">최윤석</span> / 현대에너지솔루션 / 태양광 패널 배치 및 제작 관련 도움
                </p>
              </div>
              <div className="bg-gray-900/60 p-6 rounded-xl border border-blue-600/20">
                <p className="text-gray-300">
                  <span className="font-bold text-blue-300">안운상</span> / 煎 하이낸드 주식회사 / 대회 전반에 대한 조언 및 기계 설계 관련 도움
                </p>
              </div>
              <div className="bg-gray-900/60 p-6 rounded-xl border border-blue-600/20">
                <p className="text-gray-300">
                  <span className="font-bold text-blue-300">김종훈</span> / 충남대학교 / 배터리 SoC 추정 관련 도움
                </p>
              </div>
              <div className="bg-gray-900/60 p-6 rounded-xl border border-blue-600/20">
                <p className="text-gray-300">
                  <span className="font-bold text-blue-300">박명섭</span> / 국민대학교 KUST팀 / 대회 경험 공유 와 카본 복합소재, 전체 프로세스 관련 도움
                </p>
              </div>
              <div className="bg-gray-900/60 p-6 rounded-xl border border-blue-600/20">
                <p className="text-gray-300">
                  <span className="font-bold text-blue-300">차복희</span> / 팀 식사 계획 및 호주 생활 관련 도움
                </p>
              </div>
              <div className="bg-gray-900/60 p-6 rounded-xl border border-blue-600/20">
                <p className="text-gray-300">
                  <span className="font-bold text-blue-300">이보람</span> / wsc 대회와 관련된 정보, 호주 생활 관련 도움
                </p>
              </div>
              <div className="bg-gray-900/60 p-6 rounded-xl border border-blue-600/20">
                <p className="text-gray-300">
                  <span className="font-bold text-blue-300">호주 다윈 한인회</span> / 호주 현지 생활 관련 도움
                </p>
              </div>
              <div className="bg-gray-900/60 p-6 rounded-xl border border-blue-600/20">
                <p className="text-gray-300">
                  <span className="font-bold text-blue-300">Karen, Mike</span> / 호주 선발대 생활 및 숙소 제공
                </p>
              </div>
              <div className="bg-gray-900/60 p-6 rounded-xl border border-blue-600/20">
                <p className="text-gray-300">
                  <span className="font-bold text-blue-300">J and J korea food darwin</span> / 호주 현지 식료품 제공 및 생활 관련 도움
                </p>
              </div>
              <div className="bg-gray-900/60 p-6 rounded-xl border border-blue-600/20">
                <p className="text-gray-300">
                  <span className="font-bold text-blue-300">정*영</span> / 기술 평가 및 국내 활동 조언 및 도움
                </p>
              </div>
              <div className="bg-gray-900/60 p-6 rounded-xl border border-blue-600/20">
                <p className="text-gray-300">
                  <span className="font-bold text-blue-300">김진연</span> / 호주 생활에 필요한 의약품 지원 도움
                </p>
              </div>
              <div className="bg-gray-900/60 p-6 rounded-xl border border-blue-600/20">
                <p className="text-gray-300">
                  <span className="font-bold text-blue-300">신수현</span> / 서울대학교 / 브랜딩 및 디자인 도움
                </p>
              </div>
              <div className="bg-gray-900/60 p-6 rounded-xl border border-blue-600/20">
                <p className="text-gray-300">
                  <span className="font-bold text-blue-300">김경현</span> / 서울대학교 / 숙박 등 호주 현지 조사 도움
                </p>
              </div>
              <div className="bg-gray-900/60 p-6 rounded-xl border border-blue-600/20">
                <p className="text-gray-300">
                  <span className="font-bold text-blue-300">윤정인</span> / 서울대학교 / 전반적 팀 빌딩에 대한 조언
                </p>
              </div>
              <div className="bg-gray-900/60 p-6 rounded-xl border border-blue-600/20">
                <p className="text-gray-300">
                  <span className="font-bold text-blue-300">실전문제 연구단</span> / 예산 및 전반적인 동아리 운영 도움
                </p>
              </div>
            </div>
          </div>

          {/* 발대식 차량 제작 관련 도움 */}
          <div>
            <h3 className="text-2xl font-bold text-blue-300 text-center mb-6">
              발대식 차량 제작 관련 도움
            </h3>
            <div className="bg-gray-900/60 p-6 rounded-xl border border-blue-600/20">
              <p className="text-gray-300 text-center leading-relaxed">
                <span className="font-bold text-blue-300">이승찬</span> (연세대학교 시스템반도체공학과 22),{" "}
                <span className="font-bold text-blue-300">강응조</span> (KAIST 기계과 21),{" "}
                <span className="font-bold text-blue-300">김도근</span> (서울대학교 전기정보공학부 22),<br/>
                <span className="font-bold text-blue-300">김도현</span> (서울대학교 전기정보공학부 22),{" "}
                <span className="font-bold text-blue-300">송현석</span> (서울대학교 전기정보공학부 22),{" "}
                <span className="font-bold text-blue-300">문지환</span> (서울대학교 자유전공학부 22),<br/>
                <span className="font-bold text-blue-300">조세빈</span> (서울대학교 조소과 22)
              </p>
            </div>
          </div>
        </div>

        {/* Become a Partner Section */}
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-900/30 to-indigo-900/30 p-10 rounded-2xl shadow-xl border border-blue-600/20">
          <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            Become a Partner
          </h2>
          <p className="text-xl text-center text-gray-300 mb-8">
            Join us in our mission to advance solar energy technology and compete in the Bridgestone World Solar Challenge.
          </p>
          <div className="flex justify-center">
            <a 
              href="/about/contact"
              className="inline-block bg-blue-700 hover:bg-blue-600 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-blue-600/20 transform hover:-translate-y-1 transition-all duration-300 text-lg font-medium"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 