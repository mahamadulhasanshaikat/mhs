import React, { useState } from 'react';
import { BookOpen } from 'lucide-react';
import FadeIn from '../animations/FadeIn';
import { PUBLICATION_INFO } from '../../data/publication_research';

const Publications = () => {
  const [showAll, setShowAll] = useState(false);

  // Separate publications into first 3 (always visible) and rest (hidden initially)
  const visiblePublications = PUBLICATION_INFO.slice(0, 3);
  const hiddenPublications = PUBLICATION_INFO.slice(3);

  return (
    <section id='publications' className='relative py-16 bg-black overflow-hidden'>
      {/* Background overlays */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-400/10 opacity-20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-sky-400/10 opacity-20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-400/5 opacity-20 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, white 1px, transparent 1px),
            linear-gradient(to bottom, white 1px, transparent 1px)
          `,
          backgroundSize: '30px 30px'
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn delay={0}>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full mb-6">
              <BookOpen className='w-4 h-4 text-green-400' />
              <span className="text-sm text-green-400 font-medium tracking-wide uppercase">My Publications</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-normal text-white mb-4 max-w-4.5xl mx-auto">
              Publications & Research
            </h2>
            <p className="text-gray-300 text-lg max-w-xl mx-auto">
              Explore my contributions to knowledge and innovation in various fields.
            </p>
          </div>
        </FadeIn>

        {/* Publication cards */}
        <div className="space-y-6">
          {/* Always visible publications */}
          {visiblePublications.map((pub, index) => {
            const isEven = index % 2 === 0;
            return (
              <FadeIn key={pub.id} delay={100 + index * 100}>
                <div className="group relative bg-white/5 border border-white/10 rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 hover:scale-102">
                  <div className="flex items-start gap-3">
                    <div className="shrink-0">
                      <div className="w-10 h-10 rounded-lg bg-green-400/20 border border-green-400/30 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                        <BookOpen className="w-5 h-5 text-green-400" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-lg font-semibold mb-1 transition-colors duration-300 ${isEven ? 'text-white group-hover:text-green-400' : 'text-white group-hover:text-sky-400'}`}>
                        {pub.title}
                      </h3>
                      <p className="text-gray-300 text-sm mb-0.5"><strong>Authors:</strong> {pub.authors}</p>
                      <p className="text-gray-300 text-sm mb-0.5">
                        <strong>{pub.type}:</strong> {pub.venue}
                      </p>
                      <p className="text-gray-300 text-sm mb-2"><strong>Year:</strong> {pub.year}</p>
                      <a
                        href={pub.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-white text-black text-sm px-3 py-1.5 rounded hover:bg-green-500 transition-colors mt-3"
                      >
                        View Publication
                      </a>
                    </div>
                  </div>
                  <div className={`absolute inset-0 bg-linear-to-br from-green-400/0 to-green-400/0 group-hover:from-green-400/10 ${isEven ? 'group-hover:to-green-400/10' : 'group-hover:to-sky-400/10'} rounded-2xl transition-all duration-300 pointer-events-none`} />
                </div>
              </FadeIn>
            );
          })}

          {/* Hidden publications, shown when showAll=true */}
          {showAll && hiddenPublications.map((pub, index) => {
            const isEven = (index + visiblePublications.length) % 2 === 0;
            return (
              <FadeIn key={pub.id} delay={100 + (index + visiblePublications.length) * 100}>
                <div className="group relative bg-white/5 border border-white/10 rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 hover:scale-102">
                  <div className="flex items-start gap-3">
                    <div className="shrink-0">
                      <div className="w-10 h-10 rounded-lg bg-green-400/20 border border-green-400/30 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                        <BookOpen className="w-5 h-5 text-green-400" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-lg font-semibold mb-1 transition-colors duration-300 ${isEven ? 'text-white group-hover:text-green-400' : 'text-white group-hover:text-sky-400'}`}>
                        {pub.title}
                      </h3>
                      <p className="text-gray-300 text-sm mb-0.5"><strong>Authors:</strong> {pub.authors}</p>
                      <p className="text-gray-300 text-sm mb-0.5">
                        <strong>{pub.type}:</strong> {pub.venue}
                      </p>
                      <p className="text-gray-300 text-sm mb-2"><strong>Year:</strong> {pub.year}</p>
                      <a
                        href={pub.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-white text-black text-sm px-3 py-1.5 rounded hover:bg-green-500 transition-colors mt-3"
                      >
                        View Publication
                      </a>
                    </div>
                  </div>
                  <div className={`absolute inset-0 bg-linear-to-br from-green-400/0 to-green-400/0 group-hover:from-green-400/10 ${isEven ? 'group-hover:to-green-400/10' : 'group-hover:to-sky-400/10'} rounded-2xl transition-all duration-300 pointer-events-none`} />
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* Show More / Show Less button */}
        {hiddenPublications.length > 0 && (
          <div className="mt-6 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center justify-center group"
            >
              <div className="relative z-10 bg-white text-[#212121] rounded-[17px] px-[1.625rem] py-1 text-base font-medium border border-white hover:bg-white/90 transition-colors">
                {showAll ? 'Show Less' : 'Show More'}
              </div>
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

export default Publications;
