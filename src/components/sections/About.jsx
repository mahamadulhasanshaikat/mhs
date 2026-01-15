import React, { useState } from 'react';
import { Download, Code2, Sparkles, icons } from 'lucide-react';
import { SiReact, SiFlutter, SiDjango, SiPython, SiJavascript, SiTailwindcss, SiHtml5, SiFirebase, SiPostgresql } from 'react-icons/si';
import { PERSONAL_INFO, ABOUT_STATUS } from '../../utils/constants';
import FadeIn from '../animations/FadeIn';
import RedialGradientBackground from '../backgrounds/RedialGradientBackground';


const About = () => {

  // Skills
  const skills = [
    { name: 'Html', icon: SiHtml5, color: '#339933' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#47A248' },
    { name: 'JavaScript', icon: SiJavascript, color: '#06B6D4' },
    { name: 'React.js', icon: SiReact, color: '#61DAFB' },
    { name: 'Flutter', icon: SiFlutter, color: '#000000' },
    { name: 'Python', icon: SiPython, color: '#3178C6' },
  ];

  return <section id='about' className=' relative py-5 bg-black overflow-hidden'>
    <RedialGradientBackground variant='about' />

    <div className=" relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Main Graid */}
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
        {/* Left Column - content */}
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-8">
            <FadeIn delay={60}>
              <div className=" inline-flex items-center gap-2.5 px-5 py-2.5 border border-primary/30 bg-primary/10 rounded-full w-fit">
                <Code2 className='w-4 h-4 text-primary' />
                <span className='text-sm text-primary font-medium'>
                  Full Stack Developer
                </span>
                <Sparkles className='w-4 h-4 text-primary' />
              </div>

            </FadeIn>

            <FadeIn delay={100}>
              <h2 className="text-4xl lg:text-5xl font-normal text-white leading-tight">
                Crafting Digital Experiences That Matter
              </h2>
            </FadeIn>

            <FadeIn delay={200}>
              <div className=" flex flex-col gap-4">
                {PERSONAL_INFO.bio.map((paragraph, index) => (
                  <p key={index} className=' text-base text-white/70 leading-relaxed'>
                    {paragraph}
                  </p>
                ))}
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={300}>
            <div className=" grid grid-cols-3 gap-8">
              {ABOUT_STATUS.map((stat, index) => (
                <div key={index} className=' relative'>
                  <div className=" absolute -left-4 top-0 w-1 h-full bg-linear-to-b from-primary via-primary/50 to-primary/20 rounded-full"> </div>

                  <div className=" text-3xl font-normal text-white mb-2 font-mono">
                    {stat.value}
                  </div>
                  <p className="text-sm text-white/60 leading-snug">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={400}>
            <button
              onClick={() => window.open(PERSONAL_INFO.resume, '_blank')}
              className=' inline-flex items-center gap-3 bg-white hover:bg-white/90 text-black rounded-full px-8 py-3 text-base font-medium transition-all duration-300 w-fit group'
            >
              <Download className='w-5 h-5 group-hover:translate-y-0.5 transition-transform duration-300' />

              Download CV

            </button>
          </FadeIn>
        </div>

        {/* Right Column - Info Grid */}
        <FadeIn delay={200} >
          <div className=" grid grid-cols-2 gap-4">
            <div className=" col-span-2 relative group">
              <div className=" absolute inset-0 bg-linear-to-br from-primary/10 to-primary/5 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300 "></div>
              <div className=" relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300">
                <div className=" flex items-start gap-4 ">
                  <div className=" p-3 bg-primary/10 rounded-xl">
                    <Code2 className=' w-6 h-6 text-primary' />

                  </div>
                  <div className=" flex-1">
                    <h3 className="text-lg font-semibold text-white mb-2"> Expertise</h3>
                    <p className="text-sm text-white/70 leading-relaxed">
                      Specialized in building scalable web and mobile application with modern technologies and best practices.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className=" relative group">
              <div className=" absolute inset-0 bg-linear-to-br from-primary/10 to-primary/5 rounded-2xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              <div className=" relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300">

                <div className="p-3 bg-primary/10 rounded-xl w-fit mb-4">
                  <Sparkles className=' w-5 h-5 text-primary' />
                </div>
                <h3 className=" text-base font-semibold text-white mb-2">Clean Code</h3>
                <p className=" text-sm text-white/70 leading-relaxed">
                  Writing maintainable, well-docomented code that scales.
                </p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-primary/5 rounded-2xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              <div className="relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300">

                <div className="p-3 bg-primary/10 rounded-xl w-fit mb-4">
                  <Download className='w-5 h-5 text-primary' />

                </div>

                <h3 className="text-base font-semibold text-white mb-2">Performance</h3>
                <p className="text-sm text-white/70 leading-relaxed">
                  Optimizing for speed and efficiency in every project.
                </p>
              </div>
            </div>

            <div className=" col-span-2 relative group">
              <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-primary/5 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>

              <div className=" relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300">
                <div className=" grid grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary mb-1">100%</div>
                    <div className="text-xs text-white/60"> Client Satisfaction</div>
                  </div>

                  <div>
                    <div className="text-2xl font-bold text-primary mb-1">24/7</div>
                    <div className="text-xs text-white/60">Support Available</div>
                  </div>

                  <div>
                    <div className="text-2xl font-bold text-primary mb-1">Fast</div>
                    <div className="text-xs text-white/60">Delivery Time</div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Skills grid section */}
      <FadeIn delay={500}>
        <div className=" flex flex-col items-center gap-8">
          <div className="text-center">
            <h3 className="text-2xl font-normal text-white mb-2">
              Tech Stack & Expertise
            </h3>
            <p className="text-sm text-white/60">
              Techonologies I work with to build amazing products.
            </p>
          </div>

          <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 w-full max-w-4xl">
            {skills.map((skill, index) => (
              <div
                key={index} className=' group relative bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary/50 rounded-2xl p-6 flex flex-col items-center justify-center gap-3 transition-all duration-300 hover:scale-105'
              >
                <skill.icon className='text-3xl text-primary' />
                <div className="text-sm text-white/80 font-medium text-center">
                  {skill.name}
                </div>

                {/* Hover Glow Effect */}
                <div className=" absolute inset-0 bg-linear-to-br from-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:to-primary/10 rounded-2xl transition-all duration-300"></div>

              </div>
            ))}
          </div>
        </div>
      </FadeIn>

    </div>

  </section>
}

export default About