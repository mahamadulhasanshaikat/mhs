import React, { useState } from "react";
import FadeIn from "../animations/FadeIn";
import { publishedApps } from "../../data/publishedApps";
import { Rocket, Download, Star, ExternalLink, Smartphone, } from "lucide-react";

const PublishedApps = () => {
    const [showAll, setShowAll] = useState(false);
    const [openDialog, setOpenDialog] = useState(false);
    const visibleApps = publishedApps.slice(
        0,
        showAll ? publishedApps.length : 6
    );


    return (
        <section
            id="published-apps"
            className="relative py-24 bg-black overflow-hidden"
        >
            {/* Background */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-10 w-80 h-80 bg-primary/20 blur-3xl rounded-full" />
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary/10 blur-3xl rounded-full" />
            </div>

            {/* Dialog for unpublished apps */}
            {openDialog && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
                    <div className="w-[90%] max-w-md rounded-2xl bg-neutral-900 border border-white/10 p-6 text-center">
                        <h3 className="text-2xl font-semibold text-white mb-3">
                            Coming Soon 🚀
                        </h3>

                        <p className="text-white/60 mb-6">
                            This application has not been published on the Google Play Store yet.
                        </p>

                        <button
                            onClick={() => setOpenDialog(false)}
                            className="px-6 py-2 rounded-full bg-primary text-black font-semibold hover:opacity-90"
                        >
                            OK
                        </button>
                    </div>
                </div>
            )}


            <div className="relative z-10 max-w-6xl mx-auto px-4">
               
                {/* Header */}
                <FadeIn delay={0}>
                    <div className="text-center mb-20">

                        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">

                            <Rocket className="w-4 h-4 text-primary" />

                            <span className="uppercase tracking-widest text-sm text-primary font-medium">
                                Published Apps
                            </span>

                        </div>

                        <h2 className="text-5xl text-white font-medium mb-5">
                            Available on Play Store
                        </h2>

                        <p className="text-white/60 max-w-2xl mx-auto">
                            Mobile applications crafted with performance, scalability and modern user experience.
                        </p>

                    </div>
                </FadeIn>

                {/* Stats */}
                <div
                    className={`grid gap-4 ${visibleApps.length === 1
                        ? "grid-cols-1 place-items-center"
                        : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                        }`}
                >
                    {visibleApps.map((app, index) => (
                        <FadeIn
                            key={app.id}
                            delay={200 + index * 100}
                        >
                            <div className="group w-full max-w-sm bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-primary/30 transition-all duration-300">

                                {/* Content */}
                                <div className="p-5">
                                    <div className="flex justify-between items-center mb-2">

                                        <h3 className="text-2xl font-semibold text-white group-hover:text-primary transition">
                                            {app.name}
                                        </h3>

                                        <Smartphone
                                            className="text-primary"
                                            size={20}
                                        />

                                    </div>

                                    <span className="text-sm text-primary">
                                        {app.category}
                                    </span>

                                    <p className="text-white/60 mt-4 leading-7 h-14 overflow-hidden">
                                        {app.description}
                                    </p>

                                    {/* Tech */}
                                    <div className="flex flex-wrap gap-2 mt-6">

                                        {app.tech.map((item) => (
                                            <span
                                                key={item}
                                                className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs"
                                            >
                                                {item}
                                            </span>
                                        ))}

                                    </div>

                                    {/* Footer */}
                                    <div className="flex justify-between items-center mt-8">

                                        <div className="flex items-center gap-2 text-white/60">

                                            <Download size={18} />
                                            {app.downloads}

                                        </div>

                                        <button
                                            onClick={() => {
                                                if (app.playstore) {
                                                    window.open(app.playstore, "_blank");
                                                } else {
                                                    setOpenDialog(true);
                                                }
                                            }}
                                            className="flex items-center gap-2 px-5 py-2 rounded-full bg-primary/80 text-black font-medium hover:scale-105 transition"
                                        >
                                            View App
                                            <ExternalLink size={17} />
                                        </button>

                                    </div>

                                </div>

                            </div>
                        </FadeIn>
                    ))}

                </div>

                {publishedApps.length > 6 && (
                    <div className="flex justify-center mt-12">
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="group inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-6 py-3 text-primary font-medium transition-all duration-300 hover:bg-primary/80 hover:text-black"
                        >
                            {showAll ? "See Less" : "See More"}

                            <span
                                className={`transition-transform duration-300 ${showAll ? "rotate-180" : ""
                                    }`}
                            >
                                ↓
                            </span>
                        </button>
                    </div>
                )}

            </div>

        </section>
    );
};

export default PublishedApps;