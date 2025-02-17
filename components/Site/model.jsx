'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Portfolio from '../cards/Portfolio';
import { Home, User, Folder, Mail, ArrowUpCircle ,Phone,Linkedin } from 'lucide-react';
import Link from 'next/link';


export default function Model() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  // Define sections with icons for cleaner code
  const sections = [
    { id: 'welcome', label: 'Welcome', icon: <Home className="h-5 w-5" /> },
    { id: 'about', label: 'About', icon: <User className="h-5 w-5" /> },
    { id: 'projects', label: 'Projects', icon: <Folder className="h-5 w-5" /> },
    { id: 'contact', label: 'Contact', icon: <Mail className="h-5 w-5" /> }
  ];

  // Scroll to top button visibility
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setShowScrollTop(scrollPosition > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle tab change
  const handleTabChange = (value) => {
    const index = sections.findIndex(section => section.id === value);
    setActiveIndex(index);
    
    // Programmatically change slide when tab is clicked
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(index);
    }
  };

  // Handle Swiper slide change
  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };

  // Animation classes based on active slide
  const getAnimationClass = (index) => {
    return activeIndex === index ? 'animate-fade-in opacity-100' : 'opacity-0 transition-opacity duration-500';
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="h-screen w-full flex flex-col overflow-hidden relative">
      {/* Main Content */}
      <div className="flex-1 overflow-hidden">
        <Swiper
          ref={swiperRef}
          modules={[EffectFade]}
          effect="fade"
          slidesPerView={1}
          speed={700}
          onSlideChange={handleSlideChange}
          className="h-full w-full"
        >
          <SwiperSlide className="flex items-center justify-center bg-black overflow-y-auto">
            <div className={`w-full h-full flex items-center justify-center ${getAnimationClass(0)}`}>
              <Portfolio />
            </div>
          </SwiperSlide>
          
          <SwiperSlide className="flex items-center justify-center bg-black overflow-y-auto">
            <div className={`container mx-auto px-4 py-16 ${getAnimationClass(1)}`}>
              <div className="max-w-3xl mx-auto backdrop-blur-sm bg-black/30 p-8 rounded-lg shadow-xl border border-gray-800">
                <h1 className="text-4xl font-bold text-white mb-8 flex items-center gap-3">
                  <User className="h-8 w-8 text-indigo-400 animate-pulse" />
                  About Me
                </h1>
                <p className="text-lg text-gray-300 leading-relaxed mb-6 animate-fade-in">
                  I am a passionate MERN stack developer with expertise in building modern web applications.
                  My journey in web development started with a curiosity for creating interactive user interfaces
                  and has evolved into a deep understanding of full-stack development.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  With a background in computer science and several years of practical experience,
                  I've honed my skills in React, Node.js, Express, and MongoDB. I'm constantly learning
                  new technologies and best practices to create efficient, scalable, and maintainable applications.
                </p>
              </div>
            </div>
          </SwiperSlide>
          
          <SwiperSlide className="flex items-center justify-center bg-black overflow-y-auto">
            <div className={`container mx-auto px-4 py-16 ${getAnimationClass(2)}`}>
              <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-white mb-8 flex items-center gap-3">
                  <Folder className="h-8 w-8 text-indigo-400 animate-pulse" />
                  My Projects
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-black/60 backdrop-blur-sm border border-gray-800 p-6 rounded-lg shadow-lg hover:shadow-indigo-500/20 hover:border-indigo-500/30 transition-all duration-300 transform hover:-translate-y-1">
                    <h3 className="text-xl font-bold text-white mb-4">Grocery Shop Application</h3>
                    <p className="text-gray-300 mb-4">A full-stack e-commerce platform built with the MERN stack.</p>
                <Link href='https://668d30400dd7fa5593ada64a--candid-kataifi-5abc33.netlify.app/' target='blank'>  <button className="px-4 py-2 bg-indigo-600/80 text-white rounded-md hover:bg-indigo-700 transition duration-300">
                      View Project
                    </button></Link>    
                  </div>
                  <div className="bg-black/60 backdrop-blur-sm border border-gray-800 p-6 rounded-lg shadow-lg hover:shadow-indigo-500/20 hover:border-indigo-500/30 transition-all duration-300 transform hover:-translate-y-1">
                    <h3 className="text-xl font-bold text-white mb-4">Google Gemini Clone</h3>
                    <p className="text-gray-300 mb-4">A ReactJS front-end implementation of Google's Gemini interface.</p>
                 <Link href='https://unrivaled-unicorn-80e1df.netlify.app/' target='blank'>   <button className="px-4 py-2 bg-indigo-600/80 text-white rounded-md hover:bg-indigo-700 transition duration-300" >
                      View Project
                    </button></Link>
                  </div>
                  <div className="bg-black/60 backdrop-blur-sm border border-gray-800 p-6 rounded-lg shadow-lg hover:shadow-indigo-500/20 hover:border-indigo-500/30 transition-all duration-300 transform hover:-translate-y-1">
                    <h3 className="text-xl font-bold text-white mb-4">Memory Cards Game</h3>
                    <p className="text-gray-300 mb-4">A Simple Card game built with React.</p>
                 <Link href='https://66a0fa2d1f4d2823f56959aa--melodious-bienenstitch-50ec9e.netlify.app/' target='blank'>   <button className="px-4 py-2 bg-indigo-600/80 text-white rounded-md hover:bg-indigo-700 transition duration-300" >
                      View Project
                    </button></Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          
          <SwiperSlide className="flex items-center justify-center bg-black overflow-y-auto">
            <div className={`container mx-auto px-4 py-16 ${getAnimationClass(3)}`}>
            <div className="max-w-md mx-auto backdrop-blur-sm bg-black/40 p-8 rounded-lg shadow-xl border border-gray-800">
      <h1 className="text-4xl font-bold text-white mb-8 flex items-center gap-3">
        <Mail className="h-8 w-8 text-indigo-400 animate-pulse" />
        Contact Me
      </h1>
      <div className="space-y-6">
        {/* Email Link */}
        <div className="flex items-center gap-4">
          <Mail className="h-6 w-6 text-indigo-400" />
          <a
            href="mailto:manoj16935@gmail.com"
            className="text-white hover:text-indigo-400 transition duration-300"
          >
           E-mail
          </a>
        </div>

        {/* Phone Link */}
        <div className="flex items-center gap-4">
          <Phone className="h-6 w-6 text-indigo-400" />
          <a
            href="tel:+91 9080536574"
            className="text-white hover:text-indigo-400 transition duration-300"
          >
            +91 9080536574
          </a>
        </div>

        {/* Instagram Link */}
        <div className="flex items-center gap-4">
          <Linkedin className="h-6 w-6 text-indigo-400" />
          <a
            href="https://www.linkedin.com/in/mano-bharathi-b-157982223/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-indigo-400 transition duration-300"
          >
            Mano Bharathi
          </a>
        </div>
      </div>
    </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 z-50">
        <Tabs
          value={sections[activeIndex].id}
          onValueChange={handleTabChange}
          className="w-full"
        >
          <TabsList className="flex w-full justify-around bg-black/80 backdrop-blur-md shadow-lg shadow-black/50 border-t border-gray-800">
            {sections.map((section, idx) => (
              <TabsTrigger 
                key={section.id} 
                value={section.id} 
                className={`text-white py-4 px-2 transition-all duration-300 flex flex-col items-center justify-center gap-1
                  ${activeIndex === idx ? 
                    'text-indigo-300 scale-110' : 
                    'hover:text-indigo-300'}`}
              >
                <span className="hidden md:block">{section.label}</span>
                <span className={`md:hidden ${activeIndex === idx ? 'animate-pulse' : ''}`}>
                  {section.icon}
                </span>
                <span className="md:hidden text-xs">{section.label}</span>
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>

      {/* Scroll To Top Button */}
      {showScrollTop && (
        <button 
          onClick={scrollToTop}
          className="fixed bottom-20 right-4 bg-indigo-600/80 p-2 rounded-full text-white shadow-lg hover:bg-indigo-700 transition-all duration-300 z-50 hover:scale-110"
        >
          <ArrowUpCircle className="h-6 w-6" />
        </button>
      )}
    </div>
  );
}