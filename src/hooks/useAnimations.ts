import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

/**
 * Hook to detect if user prefers reduced motion
 * @returns {boolean} True if user prefers reduced motion
 */
export function usePrefersReducedMotion(): boolean {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const listener = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, []);

  return prefersReducedMotion;
}

/**
 * Hook for intersection observer-based animations
 * Triggers animation when element enters viewport
 *
 * @param {IntersectionObserverInit} options - Intersection observer options
 * @returns {object} - Animation variants and ref
 *
 * @example
 * const { ref, controls, variants } = useInViewAnimation();
 * <motion.div ref={ref} initial="hidden" animate={controls} variants={variants}>
 */
export function useInViewAnimation(options = { once: true, amount: 0.3 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, options);
  const prefersReducedMotion = usePrefersReducedMotion();

  return {
    ref,
    isInView,
    variants: {
      hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 50 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: prefersReducedMotion ? 0.01 : 0.6,
          ease: [0.25, 0.4, 0.25, 1],
        },
      },
    },
  };
}

/**
 * Hook for stagger animation on lists/grids
 * @param {number} staggerDelay - Delay between each item (seconds)
 * @returns {object} - Container and item variants
 *
 * @example
 * const { container, item } = useStaggerAnimation(0.1);
 * <motion.div variants={container} initial="hidden" animate="visible">
 *   <motion.div variants={item} />
 * </motion.div>
 */
export function useStaggerAnimation(staggerDelay = 0.1) {
  const prefersReducedMotion = usePrefersReducedMotion();

  return {
    container: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: prefersReducedMotion ? 0 : staggerDelay,
          delayChildren: prefersReducedMotion ? 0 : 0.1,
        },
      },
    },
    item: {
      hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: prefersReducedMotion ? 0.01 : 0.5,
          ease: [0.25, 0.4, 0.25, 1],
        },
      },
    },
  };
}

/**
 * Hook for scroll progress tracking
 * @returns {number} - Scroll progress from 0 to 1
 */
export function useScrollProgress(): number {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop;
      const winHeightPx =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = scrollPx / winHeightPx;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', updateScrollProgress, { passive: true });
    updateScrollProgress();

    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return scrollProgress;
}

/**
 * Hook for mouse position tracking
 * @returns {{ x: number, y: number }} - Mouse position
 */
export function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return mousePosition;
}

/**
 * Hook for hover state with smooth transitions
 * @returns {[boolean, object]} - [isHovered, handlers]
 *
 * @example
 * const [isHovered, hoverHandlers] = useHover();
 * <div {...hoverHandlers}>Hover me</div>
 */
export function useHover(): [boolean, { onMouseEnter: () => void; onMouseLeave: () => void }] {
  const [isHovered, setIsHovered] = useState(false);

  return [
    isHovered,
    {
      onMouseEnter: () => setIsHovered(true),
      onMouseLeave: () => setIsHovered(false),
    },
  ];
}

/**
 * Fade in up animation variant
 * @param {number} delay - Animation delay in seconds
 * @returns {object} - Framer Motion variants
 */
export function fadeInUpVariants(delay = 0) {
  const prefersReducedMotion = usePrefersReducedMotion();

  return {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0.01 : 0.6,
        delay: prefersReducedMotion ? 0 : delay,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  };
}

/**
 * Scale in animation variant
 * @param {number} delay - Animation delay in seconds
 * @returns {object} - Framer Motion variants
 */
export function scaleInVariants(delay = 0) {
  const prefersReducedMotion = usePrefersReducedMotion();

  return {
    hidden: { opacity: 0, scale: prefersReducedMotion ? 1 : 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: prefersReducedMotion ? 0.01 : 0.5,
        delay: prefersReducedMotion ? 0 : delay,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  };
}

/**
 * Slide in from side animation variant
 * @param {'left' | 'right'} direction - Slide direction
 * @param {number} delay - Animation delay in seconds
 * @returns {object} - Framer Motion variants
 */
export function slideInVariants(direction: 'left' | 'right' = 'left', delay = 0) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const x = direction === 'left' ? -50 : 50;

  return {
    hidden: { opacity: 0, x: prefersReducedMotion ? 0 : x },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: prefersReducedMotion ? 0.01 : 0.6,
        delay: prefersReducedMotion ? 0 : delay,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  };
}

/**
 * Page transition variants
 * @returns {object} - Framer Motion page transition variants
 */
export function pageTransitionVariants() {
  const prefersReducedMotion = usePrefersReducedMotion();

  return {
    initial: {
      opacity: 0,
      y: prefersReducedMotion ? 0 : 20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0.01 : 0.4,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
    exit: {
      opacity: 0,
      y: prefersReducedMotion ? 0 : -20,
      transition: {
        duration: prefersReducedMotion ? 0.01 : 0.3,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  };
}
