import React, { useState } from "react";
import * as Icons from "lucide-react";
import FadeIn from "../animations/FadeIn";
import { EXPERIENCE_DATA, EDUCATION_DATA } from "../../data/journey";

const Journey = () => {
  const [activeTab, setActiveTab] = useState("experience");
  const data = activeTab === "experience" ? EXPERIENCE_DATA : EDUCATION_DATA;

  return (
    <section id="journey" className="relative py-20 bg-black overflow-hidden">
      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, white 1px, transparent 1px),
            linear-gradient(to bottom, white 1px, transparent 1px)
          `,
          backgroundSize: "30px 30px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeIn delay={0}>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full mb-6">
              <Icons.BookOpen className="w-4 h-4 text-green-400" />
              <span className="text-sm text-green-400 font-medium tracking-wide uppercase">
                Professional Journey
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-normal text-white mb-4">
              My Professional Journey
            </h2>
            <p className="text-lg text-white/60 max-w-xl mx-auto">
              A timeline of my academic background and real world work experience.
            </p>
          </div>
        </FadeIn>

        {/* Toggle Buttons */}
        <div className="flex justify-center mb-16">
          <div className="bg-white/5 border border-white/10 p-2 rounded-full flex gap-2">
            <button
              onClick={() => setActiveTab("experience")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                activeTab === "experience"
                  ? "bg-primary text-black"
                  : "text-white/60 hover:text-white"
              }`}
            >
              <Icons.Briefcase className="w-4 h-4" />
              Experience
            </button>

            <button
              onClick={() => setActiveTab("education")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                activeTab === "education"
                  ? "bg-primary text-black"
                  : "text-white/60 hover:text-white"
              }`}
            >
              <Icons.GraduationCap className="w-4 h-4" />
              Education
            </button>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-6 top-0 w-0.5 h-full bg-white/10" />

          <div className="space-y-16">
            {data.map((item, index) => {
              const IconComponent = Icons[item.icon] || Icons.BookOpen;

              return (
                <FadeIn key={item.id} delay={100 + index * 150}>
                  <div className="relative pl-20">
                    {/* Circle Node */}
                    <div className="absolute left-0 top-2 w-12 h-12 rounded-full bg-primary flex items-center justify-center border-4 border-black shadow-lg">
                      <IconComponent className="w-5 h-5 text-black" />
                    </div>

                    {/* Card */}
                    <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-primary/40 transition-all duration-300">
                      <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>

                      {/* Organization + Duration inline */}
                      <div className="flex justify-between items-center mb-3">
                        <p className="inline-block px-3 py-1 text-xs bg-primary/10 border border-primary/30 text-primary rounded-full">
                          {item.organization}
                        </p>
                        <span className="inline-block px-3 py-1 text-xs bg-primary/10 border border-primary/30 text-primary rounded-full">
                          {item.duration}
                        </span>
                      </div>

                      <p className="text-white/60 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;