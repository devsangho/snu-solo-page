'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface TeamMember {
  name: string;
  role?: string;
  email?: string;
  team?: string;
}

interface TeamSection {
  title: string;
  members: TeamMember[];
}

export default function TeamMembers2025() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const teamSections: TeamSection[] = [
    {
      title: "Leadership",
      members: [
        {
          name: "Gayeong Seo",
          role: "Team Leader",
          email: "hellowolf13@snu.ac.kr"
        },
        {
          name: "Kyunghyun Kim",
          role: "Advisory Leader",
          email: "khkimamy@snu.ac.kr"
        },
        {
          name: "Jiyang Lee",
          role: "Advisory Leader",
          email: "jiyang.lee@snu.ac.kr"
        }
      ]
    },
    {
      title: "Mechanical & Aerodynamics Team",
      members: [
        {
          name: "Wonsang Chang",
          role: "Mechanic System Design",
          email: "UCB"
        },
        {
          name: "Huiyoen Choi",
          role: "Structure Engineer",
          email: "chy2975@naver.com"
        },
        {
          name: "Robert Gillespy",
          role: "Aerodynamicist",
          email: "Purdue Univ."
        },
        {
          name: "Jiyoon Gong",
          role: "Structure Engineer",
          email: "jygong@snu.ac.kr"
        },
        {
          name: "Yeongsoo Hwang",
          role: "Vehicle Engineer",
          email: "ghkddudtn8000@gmail.com"
        },
        {
          name: "Jinseop Kim",
          role: "Vehicle Engineer",
          email: "jinseop0330@naver.com"
        },
        {
          name: "Donghyeong Lee",
          role: "Vehicle Engineer",
          email: "qorcjsehd1@naver.com"
        },
        {
          name: "Dohyeon Rim",
          role: "Aerodynamicist",
          email: "2003rd31@snu.ac.kr"
        },
        {
          name: "Gayeong Seo",
          email: "hellowolf13@snu.ac.kr"
        }
      ]
    },
    {
      title: "Solar & Energy Team",
      members: [
        {
          name: "Dong-Yeop Shin",
          role: "Team Chief / Photovoltanic System Engineer",
          email: "dongyub39@gmail.com"
        },
        {
          name: "Hyunna Doh",
          role: "Photovoltanic System Engineer",
          email: "hyunna0792@sookmyung.ac.kr"
        }
      ]
    },
    {
      title: "Electrical Control Team",
      members: [
        {
          name: "Jinhee Kim",
          role: "Team Chief / Electrical Contol Manager",
          email: "jinhee@snu.ac.kr"
        },
        {
          name: "Soobin Hwang",
          role: "Electrical & Brake Engineer",
          email: "tnqls2361@sookmyung.ac.kr"
        },
        {
          name: "Young Se Kwon",
          role: "Pipe Car",
          email: "dudtp4620@naver.com"
        },
        {
          name: "Ji-Seon Lim",
          role: "Electrical Control Engineer",
          email: "ljs3054@naver.com"
        },
        {
          name: "Minjong Yoo",
          role: "Autonomous Vehicle",
          email: "20202275@kiu.kr"
        },
        {
          name: "Sangho Yun",
          role: "Control System Engineer",
          email: "hi.sangho.yun@gmail.com"
        }
      ]
    },
    {
      title: "Strategy & HMI Team",
      members: [
        {
          name: "Sanghoon Lee",
          role: "Team Chief / Simulation & AI Engineer",
          email: "sanghoon@snu.ac.kr"
        },
        {
          name: "Byeonggyu Park",
          email: "bg.park@snu.ac.kr"
        },
        {
          name: "Heung Min Park",
          email: "heungpark0517@snu.ac.kr"
        }
      ]
    },
    {
      title: "Operation and Management Team",
      members: [
        {
          name: "Huiyoen Choi",
          role: "Operation / Management",
          email: "chy2975@naver.com"
        },
        {
          name: "Hyunna Doh",
          role: "Operation / Management",
          email: "hyunna0792@sookmyung.ac.kr"
        },
        {
          name: "Jiyoon Gong",
          role: "Operation / Management",
          email: "jygong@snu.ac.kr"
        },
        {
          name: "Ji-Seon Lim",
          role: "Team Chief / Communication",
          email: "ljs3054@naver.com"
        },
        {
          name: "Sangho Yun",
          role: "Website",
          email: "hi.sangho.yun@gmail.com"
        }
      ]
    },
    {
      title: "Treasure",
      members: [
        {
          name: "Soomin Jung",
          role: "Admin Chief",
          email: "sumin4178@snu.ac.kr"
        }
      ]
    },
    {
      title: "Past Presidents",
      members: [
        {
          name: "Seoyeon Jeong",
          email: "seoyeonimnida@snu.ac.kr"
        },
        {
          name: "Seokwon Choi",
          email: "skc411@snu.ac.kr"
        }
      ]
    },
    {
      title: "Industrial Mentors",
      members: [
        {
          name: "Doyoung Kim",
          email: "doyoung42@snu.ac.kr"
        },
        {
          name: "Gyeongseop Lee",
          email: "pepsipower@snu.ac.kr"
        }
      ]
    },
    {
      title: "Advisors",
      members: [
        {
          name: "Prof. Woo-Jong Kang",
          email: "wjkang@kiu.ac.kr"
        },
        {
          name: "Prof. Soo-Young Kim",
          email: "syk@sookmyung.ac.kr"
        },
        {
          name: "Prof. Yong-Dae Kim",
          email: "ydkim@kiu.ac.kr"
        },
        {
          name: "Prof. Jonghyup Lee",
          email: "jhyuplee@sookmyung.ac.kr"
        },
        {
          name: "Prof. Hyung-Jin Yoon",
          email: "sk82nite@snu.ac.kr"
        }
      ]
    },
    {
      title: "Director",
      members: [
        {
          name: "Prof. Seong-Woo Kim",
          email: "snwoo@snu.ac.kr"
        }
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16" ref={ref}>
      <motion.h1 
        className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        2025 Team Members
      </motion.h1>

      <div className="space-y-16">
        {teamSections.map((section, sectionIndex) => (
          <motion.div 
            key={sectionIndex}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: sectionIndex * 0.1 }}
            className="bg-gradient-to-r from-blue-900/20 to-indigo-900/20 rounded-xl p-8 shadow-lg border border-blue-600/20"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-blue-300">{section.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {section.members.map((member, memberIndex) => (
                <motion.div 
                  key={memberIndex}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: (sectionIndex * 0.1) + (memberIndex * 0.05) }}
                  className="bg-black/30 rounded-lg p-6 hover:bg-blue-900/30 transition-all duration-300 border border-blue-600/10"
                >
                  <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                  {member.role && (
                    <p className="text-blue-300 text-sm mb-2">{member.role}</p>
                  )}
                  <p className="text-gray-400 text-sm break-all">{member.email}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
} 