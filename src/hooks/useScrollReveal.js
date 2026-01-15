import { useEffect, useState, useRef } from "react";

export const useScrollReveal = (options = {}) => {
    const {
        threshold = 0.1,
        rootMargin = 'Opx'
    } = options;

    const [isVisible, SetIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    SetIsVisible(true);
                    observer.unobserve(element);
                }
            },
            {
                threshold,
                rootMargin
            }
        );

        observer.observe(element);

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, [threshold, rootMargin]);

    return { ref, isVisible };
};
