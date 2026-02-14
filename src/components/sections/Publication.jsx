import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import FadeIn from '../animations/FadeIn';
import { PUBLICATION_INFO } from '../../data/publication_research';

const Publications = () => {
  const [showAll, setShowAll] = useState(false);

  const visiblePublications = PUBLICATION_INFO.slice(0, 3);
  const hiddenPublications = PUBLICATION_INFO.slice(3);

  const data = showAll ? PUBLICATION_INFO : visiblePublications;

  return (
    <section id='publications' className='relative py-20 bg-black overflow-hidden'>
      {/* Background grid */}
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

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeIn delay={0}>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full mb-6">
              <Icons.BookOpen className='w-4 h-4 text-green-400' />
              <span className="text-sm text-green-400 font-medium tracking-wide uppercase">Publications</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-normal text-white mb-4">
              Publications & Research
            </h2>
            <p className="text-lg text-white/60 max-w-xl mx-auto">
              Explore my contributions to knowledge and innovation.
            </p>
          </div>
        </FadeIn>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 w-0.5 h-full bg-white/10" />

          <div className="space-y-16">
            {data.map((pub, index) => {
              const isEven = index % 2 === 0;

              return (
                <FadeIn key={pub.id} delay={100 + index * 150}>
                  <div className="relative pl-20">
                    {/* Circle Node */}
                    <div className={`absolute left-0 top-2 w-12 h-12 rounded-full flex items-center justify-center border-4 ${isEven ? 'bg-green-500 border-black' : 'bg-sky-500 border-black'} shadow-lg`}>
                      <Icons.BookOpen className="w-5 h-5 text-black" />
                    </div>

                    {/* Card */}
                    <div className={`bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-primary/40 transition-all duration-300`}>
                      <h3 className="text-xl font-semibold text-white mb-2">{pub.title}</h3>

                      {/* Authors + Type + Year inline like badges */}
                      <div className="flex flex-wrap gap-3 mb-3 text-sm text-white/60">
                        <span><strong>Authors:</strong> {pub.authors}</span>
                        <span><strong>{pub.type}:</strong> {pub.venue}</span>
                        <span><strong>Year:</strong> {pub.year}</span>
                      </div>

                      {/* Link button */}
                      <a
                        href={pub.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-4 py-1.5 text-sm font-medium rounded-full bg-primary/20 border border-primary/40 text-primary hover:bg-primary/40 transition-colors"
                      >
                        View Publication
                      </a>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>

          {/* Show More / Less */}
          {hiddenPublications.length > 0 && !showAll && (
            <div className="mt-8 text-center">
              <button
                onClick={() => setShowAll(true)}
                className="inline-block px-6 py-2 rounded-full text-white border border-white hover:bg-white/10 transition-colors font-medium"
              >
                Show More
              </button>
            </div>
          )}
          {showAll && (
            <div className="mt-8 text-center">
              <button
                onClick={() => setShowAll(false)}
                className="inline-block px-6 py-2 rounded-full text-white border border-white hover:bg-white/10 transition-colors font-medium"
              >
                Show Less
              </button>
            </div>
          )}

        </div>
      </div>
    </section>
  );
};

export default Publications;