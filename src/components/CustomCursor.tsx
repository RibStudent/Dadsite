import { useEffect, useState, useRef } from 'react';
import { motion, useSpring, AnimatePresence } from 'framer-motion';
import { usePrefersReducedMotion } from '@/hooks/useAnimations';

/**
 * CustomCursor - Premium custom cursor with smooth following
 *
 * Features:
 * - Smooth spring-based cursor following
 * - Expands on clickable elements
 * - Different states for different interactions
 * - Blend mode for visual interest
 * - 60fps performance
 * - Respects prefers-reduced-motion
 *
 * @example
 * <CustomCursor />
 */
export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHoveringClickable, setIsHoveringClickable] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  // Spring configuration for buttery smooth motion
  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);

  useEffect(() => {
    // Don't show custom cursor on mobile or if user prefers reduced motion
    if (prefersReducedMotion || 'ontouchstart' in window) {
      return;
    }

    const updateCursorPosition = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setIsVisible(true);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    // Check if hovering over clickable elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable =
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[role="button"]') ||
        window.getComputedStyle(target).cursor === 'pointer';

      setIsHoveringClickable(!!isClickable);
    };

    window.addEventListener('mousemove', updateCursorPosition);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseleave', () => setIsVisible(false));
    window.addEventListener('mouseenter', () => setIsVisible(true));

    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseleave', () => setIsVisible(false));
      window.removeEventListener('mouseenter', () => setIsVisible(true));
    };
  }, [cursorX, cursorY, prefersReducedMotion]);

  // Don't render on mobile or if reduced motion is preferred
  if (prefersReducedMotion || 'ontouchstart' in window) {
    return null;
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Main cursor dot */}
          <motion.div
            className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
            style={{
              x: cursorX,
              y: cursorY,
            }}
          >
            <motion.div
              className="relative -translate-x-1/2 -translate-y-1/2"
              animate={{
                scale: isClicking ? 0.8 : isHoveringClickable ? 1.5 : 1,
              }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-3 h-3 bg-white rounded-full" />
            </motion.div>
          </motion.div>

          {/* Cursor ring */}
          <motion.div
            className="fixed top-0 left-0 pointer-events-none z-[9998]"
            style={{
              x: cursorX,
              y: cursorY,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative -translate-x-1/2 -translate-y-1/2"
              animate={{
                scale: isClicking ? 0.8 : isHoveringClickable ? 2 : 1,
              }}
              transition={{
                type: 'spring',
                damping: 20,
                stiffness: 300,
                mass: 0.3,
              }}
            >
              <div className="w-8 h-8 border-2 border-primary/50 rounded-full" />
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

/**
 * ScrollProgressIndicator - Shows page scroll progress
 *
 * Features:
 * - Smooth animated progress bar
 * - Gradient effect
 * - Minimal and unobtrusive
 * - Respects reduced motion
 */
export function ScrollProgressIndicator() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop;
      const winHeightPx =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (scrollPx / winHeightPx) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', updateScrollProgress, { passive: true });
    updateScrollProgress();

    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary z-50 origin-left"
      style={{
        scaleX: scrollProgress / 100,
      }}
      initial={{ scaleX: 0 }}
      transition={{
        duration: prefersReducedMotion ? 0 : 0.1,
        ease: 'linear',
      }}
    />
  );
}

/**
 * SmoothScrollWrapper - Enables smooth scrolling behavior
 *
 * @example
 * <SmoothScrollWrapper>
 *   <YourApp />
 * </SmoothScrollWrapper>
 */
export function SmoothScrollWrapper({ children }: { children: React.ReactNode }) {
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (!prefersReducedMotion) {
      document.documentElement.style.scrollBehavior = 'smooth';
    }

    return () => {
      document.documentElement.style.scrollBehavior = '';
    };
  }, [prefersReducedMotion]);

  return <>{children}</>;
}
