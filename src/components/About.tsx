'use client';

import { useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { motion, useInView, useAnimation } from 'framer-motion';
import Link from 'next/link';

export default function About() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  return (
    <section ref={ref} id="about-team" className="py-10 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { 
              opacity: 1, 
              y: 0,
              transition: { duration: 0.6, ease: "easeOut" }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <span className="bg-blue-900/50 text-blue-300 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide mb-4 inline-block">Team History</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">About Team</h2>
            <h3 className="text-2xl md:text-3xl font-bold mb-2 text-blue-300">SNU SOLO</h3>
            <p className="text-xl md:text-2xl mb-6 text-gray-300 italic font-light">
              &ldquo;Show our originality, leap over the limits&rdquo;
            </p>
            <div className="text-gray-300 space-y-6 text-lg leading-relaxed">
              <p>
                <span className="font-bold text-blue-300">SNU SOLO: Seoul National University Solar Car Team</span> is the Korean team attending BWSC 2025. The team is composed of students who are dedicated to developing the optimal solar car.
              </p>
              <p>
                We are upgrading the technology of the vehicle based on our first car, dokkaebi, which was manufactured during the BWSC 2023. In addition, based on the local experience gained through the BWSC 2023, we plan to further develop in all fields to participate in the BWSC 2025.
              </p>
              <p>
                Established in June 2022, 30 students started the journey. We are a non-profit organization with the common goal of designing and building an efficient solar car. Our members are rewarded with the unique opportunity to gain real-world engineering, designing and project management experience.
              </p>
            </div>
            <Link href="/about/technology">
              <Button className="bg-blue-700 hover:bg-blue-600 text-white px-8 py-6 rounded-xl shadow-lg hover:shadow-blue-600/20 transform hover:-translate-y-1 transition-all duration-300 text-base mt-8">
                Explore Our Technology
              </Button>
            </Link>
          </div>
          <motion.div 
            variants={{
              hidden: { opacity: 0, scale: 0.9, rotateY: 10 },
              visible: { 
                opacity: 1, 
                scale: 1,
                rotateY: 0,
                transition: { duration: 0.7, ease: "easeOut", delay: 0.2 }
              }
            }}
            className="relative h-80 md:h-[450px] rounded-2xl overflow-hidden shadow-2xl group"
          >
            {/* 실제 이미지로 대체 예정 */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-700 via-indigo-800 to-purple-900 flex flex-col items-center justify-center p-8 transition-transform duration-700 group-hover:scale-105">
              <div className="w-32 h-32 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5"></circle>
                  <line x1="12" y1="1" x2="12" y2="3"></line>
                  <line x1="12" y1="21" x2="12" y2="23"></line>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                  <line x1="1" y1="12" x2="3" y2="12"></line>
                  <line x1="21" y1="12" x2="23" y2="12"></line>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                </svg>
              </div>
              <h3 className="text-white text-4xl font-bold mb-2 text-center">SNU SOLO</h3>
              <p className="text-white/80 text-center max-w-sm">서울대학교 태양광 자동차 팀</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Team Parts Section */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 py-16 mt-24 relative overflow-hidden">
        {/* 배경 효과 제거 */}
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <h3 className="text-3xl font-bold text-white text-center mb-10">Our Team Includes</h3>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, staggerChildren: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white"
          >
            {[
              { 
                title: 'Engineering', 
                description: 'Mechanical, electrical (solar panel & vehicle control), aerodynamics, and structure & composite material engineers' 
              },
              { 
                title: 'Business', 
                description: 'Marketing and financing managers focused on partnerships and resource acquisition' 
              },
              { 
                title: 'Design', 
                description: 'Visual identity, vehicle aesthetics, and user experience designers' 
              }
            ].map((part, index) => (
              <motion.div 
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="backdrop-blur-sm bg-black/30 rounded-xl p-8 shadow-lg transform hover:scale-105 transition-all duration-300 h-full flex flex-col border border-blue-600/20"
              >
                <h4 className="text-2xl font-bold mb-4 text-blue-300">{part.title}</h4>
                <p className="text-lg text-gray-300 flex-grow">{part.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Team History Timeline Section */}
      <div className="container mx-auto px-4 md:px-6 py-24">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent"
        >
          Our Journey
        </motion.h2>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-indigo-600 rounded-full"></div>
          
          {/* Timeline items */}
          <div className="space-y-24">
            {[
              {
                date: 'June 2022',
                title: 'Team Foundation',
                description: '30 students at Seoul National University formed SNU SOLO with the vision to compete in the Bridgestone World Solar Challenge.',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                  </svg>
                ),
                position: 'left'
              },
              {
                date: '2022-2023',
                title: 'First Solar Car: Dokkaebi',
                description: 'Design and development of our first solar car for BWSC 2023, combining Korean cultural elements with cutting-edge technology.',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                    <line x1="9" y1="9" x2="9.01" y2="9"></line>
                    <line x1="15" y1="9" x2="15.01" y2="9"></line>
                  </svg>
                ),
                position: 'right'
              },
              {
                date: 'October 2023',
                title: 'BWSC 2023 Participation',
                description: 'Participated in the Bridgestone World Solar Challenge, racing 3,000km across Australia and gaining valuable experience.',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                ),
                position: 'left'
              },
              {
                date: '2024-2025',
                title: 'Advanced Solar Car Development',
                description: 'Designing our second-generation solar car with enhanced technology based on lessons learned from our first competition.',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                  </svg>
                ),
                position: 'right'
              },
              {
                date: 'October 2025',
                title: 'BWSC 2025 Goal',
                description: 'Aiming to win the Bridgestone World Solar Challenge with our improved solar car and experienced team.',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="8" r="7"></circle>
                    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                  </svg>
                ),
                position: 'left'
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
                className={`flex items-center ${item.position === 'left' ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <div className={`w-5/12 ${item.position === 'left' ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <div className="inline-block mb-3 px-4 py-1 bg-blue-900/50 text-blue-300 rounded-full text-sm font-semibold">
                    {item.date}
                  </div>
                  <h4 className="text-2xl font-bold mb-2 text-white">{item.title}</h4>
                  <p className="text-gray-300">{item.description}</p>
                </div>
                
                <div className="w-2/12 flex justify-center relative">
                  <div className="bg-gradient-to-r from-blue-600 to-indigo-600 w-12 h-12 rounded-full flex items-center justify-center z-10 text-white">
                    {item.icon}
                  </div>
                </div>
                
                <div className="w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 md:px-6 py-16">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, staggerChildren: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {[
            { value: '2022', label: 'Founded' },
            { value: '30+', label: 'Team Members' },
            { value: '2', label: 'Solar Cars' },
            { value: 'BWSC', label: 'Competition' }
          ].map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900/60 rounded-xl p-6 shadow-lg transform hover:scale-105 transition-all duration-300 border border-blue-600/20"
            >
              <p className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">{stat.value}</p>
              <p className="text-lg text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Team Values Infographic */}
      <div className="container mx-auto px-4 md:px-6 py-20">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent"
        >
          Our Vision
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              title: "Awareness",
              description: "Raising awareness for sustainable energy solutions through solar-powered mobility technology",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 16v-4"></path>
                  <path d="M12 8h.01"></path>
                </svg>
              )
            },
            {
              title: "Innovation",
              description: "Creating breakthroughs in environmental sustainability through cutting-edge engineering",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 12h5l2 9 4-18 3 9h6"></path>
                </svg>
              )
            },
            {
              title: "Education",
              description: "Providing hands-on experience for the next generation of engineers, designers, and business leaders",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
              )
            }
          ].map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              className="bg-gradient-to-br from-blue-900/20 to-indigo-900/20 rounded-xl p-8 border border-blue-600/20 shadow-lg flex flex-col items-center text-center h-full"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white mb-6">
                {value.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-blue-300">{value.title}</h3>
              <p className="text-gray-300">{value.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.3 }}
          className="bg-gradient-to-r from-blue-900/30 to-indigo-900/30 p-10 rounded-2xl shadow-xl border border-blue-600/20 max-w-4xl mx-auto"
        >
          <div className="text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
            </div>
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Meaning of SNU SOLO</h3>
            <p className="text-xl text-white mb-4 italic">
              Vehicle to Sol (solar) + The road to the sun (路)
            </p>
            <div className="h-0.5 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto my-6"></div>
            <p className="text-lg text-gray-300 leading-relaxed">
              SNU SOLO represents sustainable energy through <span className="text-blue-300 font-semibold">optimal engineering</span>, <span className="text-blue-300 font-semibold">leading business</span>, and <span className="text-blue-300 font-semibold">original design</span>.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Goal Section */}
      <div className="container mx-auto px-4 md:px-6 py-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent"
        >
          Our Goal
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.3 }}
          className="relative bg-gradient-to-b from-blue-900/20 to-indigo-900/20 rounded-2xl shadow-xl border border-blue-600/20 overflow-hidden"
        >
          {/* Background graphic elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -right-24 -top-24 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
            <div className="absolute -left-24 -bottom-24 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl"></div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-blue-500/10 rounded-full blur-2xl"></div>
          </div>

          <div className="relative z-10 p-8 md:p-16">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
                <div className="md:col-span-3 space-y-6">
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                    <div className="w-20 h-20 flex-shrink-0 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="8" r="7"></circle>
                        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                      </svg>
                    </div>
                    
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-300 to-indigo-300 bg-clip-text text-transparent mb-4">
                        Bridgestone World Solar Challenge 2025
                      </h3>
                      <p className="text-lg text-gray-300">
                        Our team is dedicated to competing in the world&apos;s premier solar car race, traversing 3,000km across Australia from Darwin to Adelaide.
                      </p>
                    </div>
                  </div>

                  <div className="pl-0 md:pl-28 space-y-6">
                    {[
                      {
                        title: "Engineering Excellence",
                        description: "Developing cutting-edge solar technology and efficient vehicle designs that push the boundaries of what's possible",
                        icon: (
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                          </svg>
                        )
                      },
                      {
                        title: "Sustainable Innovation",
                        description: "Creating solutions that demonstrate the viability of solar energy as a practical transportation power source",
                        icon: (
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                            <polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline>
                            <polyline points="7.5 19.79 7.5 14.6 3 12"></polyline>
                            <polyline points="21 12 16.5 14.6 16.5 19.79"></polyline>
                            <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                            <line x1="12" y1="22.08" x2="12" y2="12"></line>
                          </svg>
                        )
                      },
                      {
                        title: "Teamwork",
                        description: "Combining the diverse skills of engineers, designers, and business specialists to achieve a common goal",
                        icon: (
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                            <circle cx="9" cy="7" r="4"></circle>
                            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                          </svg>
                        )
                      }
                    ].map((item, index) => (
                      <motion.div 
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.2 + (index * 0.1) }}
                        viewport={{ once: true }}
                        className="flex items-start gap-4"
                      >
                        <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center text-blue-300 flex-shrink-0">
                          {item.icon}
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold text-blue-300 mb-2">{item.title}</h4>
                          <p className="text-gray-300">{item.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <motion.div 
                  className="md:col-span-2 flex justify-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <div className="relative w-full max-w-sm aspect-square">
                    {/* Outer ring */}
                    <div className="absolute inset-0 rounded-full border-4 border-dashed border-blue-500/30 animate-spin-slow"></div>
                    
                    {/* Inner circle */}
                    <div className="absolute inset-5 rounded-full bg-gradient-to-br from-blue-600/30 to-indigo-600/30 backdrop-blur-sm flex items-center justify-center p-10 shadow-lg border border-blue-500/30">
                      <div className="text-center">
                        <h3 className="text-4xl font-bold text-white mb-2">BWSC 2025</h3>
                        <div className="h-1 w-16 bg-gradient-to-r from-blue-400 to-indigo-400 mx-auto my-3"></div>
                        <p className="text-2xl font-bold bg-gradient-to-r from-blue-300 to-indigo-300 bg-clip-text text-transparent">
                          VICTORY
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              <div className="flex justify-center mt-12">
                <Link href="/gallery">
                  <Button className="bg-blue-700 hover:bg-blue-600 text-white px-8 py-6 rounded-xl shadow-lg hover:shadow-blue-600/20 transform hover:-translate-y-1 transition-all duration-300 text-base">
                    View Car Gallery
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 