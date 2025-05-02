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

      {/* Mission Statement Section */}
      <div className="container mx-auto px-4 md:px-6 py-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.3 }}
          className="bg-gradient-to-r from-blue-900/20 to-indigo-900/20 p-10 rounded-2xl shadow-xl border border-blue-600/20"
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent text-center">
              Meaning of SNU SOLO
            </h3>
            
            <p className="text-xl text-gray-300 mb-8 text-center italic">
              Vehicle to Sol (solar) + The road to the sun (路)
            </p>
            
            <p className="text-xl text-gray-300 mb-8">
              SNU SOLO&apos;s ultimate goal is to win the &ldquo;Bridgestone World Solar Challenge&rdquo; and contribute to carbon-neutral mobility research.
            </p>
            
            <div className="space-y-4 text-lg text-gray-300 mb-10">
              <p>
                We seek for awareness-raising, breakthroughs in environmental sustainability, and education for the next generation.
              </p>
              <p>
                We represent sustainable energy through optimal engineering, leading business, and original design.
              </p>
            </div>
            
            <div className="space-y-4 text-lg text-gray-300">
              <p>
                <span className="font-bold text-blue-300">SNU SOLO: Seoul National University Solar Car Team</span> is the Korean team attending BWSC 2025. The team is composed of students who are dedicated to developing the optimal solar car. We are upgrading the technology of the vehicle based on our first car, dokkaebi, which was manufactured during the BWSC 2023. In addition, based on the local experience gained through the BWSC 2023, we plan to further develop in all fields to participate in the BWSC 2025.
              </p>
              <p>
                Established in June 2022, 30 students started the journey. We are a non-profit organization with the common goal of designing and building an efficient solar car. Our members are rewarded with the unique opportunity to gain real-world engineering, designing and project management experience. The team includes 3 parts: Engineering, Business, and Design. Members are engaging as mechanical, electrical (solar panel & vehicle control), aerodynamics, and structure & composite material engineers, business marketing, and financing manager, and designer. All members are cooperating with each other to achieve our final goal: winning the BSWC 2025!
              </p>
            </div>
          </div>
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
          className="bg-gradient-to-r from-blue-900/20 to-indigo-900/20 p-10 rounded-2xl shadow-xl border border-blue-600/20"
        >
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-2xl text-gray-300 mb-6 leading-relaxed font-light">
              All members are cooperating with each other to achieve our final goal:
            </p>
            <p className="text-3xl font-bold text-blue-400 mb-8">
              Winning the Bridgestone World Solar Challenge 2025!
            </p>
            <Link href="/gallery">
              <Button className="bg-blue-700 hover:bg-blue-600 text-white px-8 py-6 rounded-xl shadow-lg hover:shadow-blue-600/20 transform hover:-translate-y-1 transition-all duration-300 text-base">
                View Car Gallery
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 