import React, { useState, useEffect, useRef } from 'react';
import { projects, categories } from '../../data/projects';
import { Briefcase, Target, Globe, Palette, Zap, } from 'lucide-react';
import ProjectCard from '../ui/ProjectCard';
import FadeIn from '../animations/FadeIn';
import { motion, AnimatePresence } from "framer-motion";

const PROJECTS_PER_LOAD = 6;

const Projects = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const [visibleProjects, setVisibleProjects] = useState(PROJECTS_PER_LOAD);

    const sectionRef = useRef(null);

    const filteredProjects =
        activeCategory === 'All'
            ? projects
            : projects.filter(
                (project) => project.category === activeCategory
            );

    // Reset when category changes
    useEffect(() => {
        setVisibleProjects(PROJECTS_PER_LOAD);
    }, [activeCategory]);

    const handleCategoryChange = (category) => {
        setActiveCategory(category);
    };

    const handleLoadMore = () => {
        setVisibleProjects((prev) => prev + PROJECTS_PER_LOAD);
    };

    const handleShowLess = () => {
        sectionRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });

        setTimeout(() => {
            setVisibleProjects(PROJECTS_PER_LOAD);
        }, 500); // scroll শেষ হলে collapse হবে
    };

    const displayedProjects = filteredProjects.slice(0, visibleProjects);

    const categoryIcons = {
        All: Target,
        'Mobile Apps': Zap,
        'Web Apps': Globe,
        'UI Componnents': Palette,
    };

    return (
        <section
            ref={sectionRef}
            id="projects"
            className="relative py-15 bg-black overflow-hidden"
        >
            {/* Background */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/20 opacity-20 rounded-full blur-3xl" />
                <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-primary/20 opacity-20 rounded-full blur-3xl" />
                <div className="absolute top-1/2 right-1/3 w-96 h-96 bg-primary/10 opacity-20 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Heading */}
                <FadeIn delay={0}>
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
                            <Briefcase className="w-4 h-4 text-primary" />
                            <span className="text-sm text-primary font-medium tracking-wide uppercase">
                                My Work
                            </span>
                        </div>

                        <h2 className="text-4xl lg:text-5xl font-normal text-white mb-4">
                            Featured Projects
                        </h2>

                        <p className="text-lg text-white/60 max-w-2xl mx-auto">
                            Showcasing my best work and achievements.
                        </p>
                    </div>
                </FadeIn>

                {/* Category */}
                <FadeIn delay={100}>
                    <div className="flex flex-wrap justify-center gap-3 mb-16">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => handleCategoryChange(category)}
                                className={`group relative px-6 py-3 rounded-full font-medium transition-all duration-300 ${activeCategory === category
                                    ? 'text-white'
                                    : 'text-white/60 hover:text-white'
                                    }`}
                            >
                                <div
                                    className={`absolute inset-0 rounded-full transition-all duration-300 ${activeCategory === category
                                        ? 'bg-primary/10'
                                        : 'bg-white/5 border border-white/10 group-hover:bg-white/10'
                                        }`}
                                />

                                <div className="relative flex items-center gap-2">
                                    {React.createElement(categoryIcons[category], {
                                        className: 'w-4 h-4',
                                    })}
                                    <span className="text-sm">{category}</span>
                                </div>

                                {activeCategory === category && (
                                    <div className="absolute inset-0 rounded-full bg-primary blur-xl opacity-50 -z-10" />
                                )}
                            </button>
                        ))}
                    </div>
                </FadeIn>

                {/* Projects */}
                <FadeIn delay={200}>
                    <>
                        <AnimatePresence mode="popLayout">
                            <motion.div
                                layout
                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                            >
                                {displayedProjects.map((project) => (
                                    <motion.div
                                        key={project.id}
                                        layout
                                        initial={{
                                            opacity: 0,
                                            y: 40,
                                            scale: 0.95,
                                        }}
                                        animate={{
                                            opacity: 1,
                                            y: 0,
                                            scale: 1,
                                        }}
                                        exit={{
                                            opacity: 0,
                                            y: -20,
                                            scale: 0.95,
                                        }}
                                        transition={{
                                            duration: 0.45,
                                            ease: "easeInOut",
                                        }}
                                    >
                                        <ProjectCard project={project} />
                                    </motion.div>
                                ))}
                            </motion.div>
                        </AnimatePresence>

                        {/* Load More Button */}
                        <motion.div
                            layout
                            className="flex justify-center mt-14"
                        >
                            {visibleProjects < filteredProjects.length ? (
                                <motion.button
                                    whileHover={{
                                        scale: 1.06,
                                    }}
                                    whileTap={{
                                        scale: 0.95,
                                    }}
                                    onClick={handleLoadMore}
                                    className="px-8 py-3 rounded-full border border-primary text-primary font-medium hover:bg-primary/40 hover:text-white transition-colors"
                                >
                                    Load More
                                </motion.button>
                            ) : (
                                filteredProjects.length > PROJECTS_PER_LOAD && (
                                    <motion.button
                                        whileHover={{
                                            scale: 1.06,
                                        }}
                                        whileTap={{
                                            scale: 0.95,
                                        }}
                                        onClick={handleShowLess}
                                        className="px-8 py-3 rounded-full border border-primary text-primary font-medium hover:bg-primary/40 hover:text-white transition-colors"
                                    >
                                        Show Less
                                    </motion.button>
                                )
                            )}
                        </motion.div>
                    </>
                </FadeIn>
            </div>
        </section>
    );
};

export default Projects;

