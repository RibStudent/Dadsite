import { useRef, useState } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';
import { usePrefersReducedMotion } from '@/hooks/useAnimations';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  strength?: number;
  onClick?: () => void;
  disabled?: boolean;
}

/**
 * MagneticButton - A button that follows the cursor with magnetic effect
 *
 * Features:
 * - Smooth spring-based animations
 * - Magnetic attraction to cursor
 * - Scale effect on hover
 * - Respects prefers-reduced-motion
 * - 60fps performance optimized
 *
 * @example
 * <MagneticButton strength={0.3}>
 *   Click Me
 * </MagneticButton>
 */
export function MagneticButton({
  children,
  className = '',
  strength = 0.2,
  onClick,
  disabled = false,
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  // Spring configs for smooth, buttery animations
  const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };

  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);
  const scale = useSpring(1, springConfig);

  // Transform values for child elements
  const rotateX = useTransform(y, [-50, 50], [5, -5]);
  const rotateY = useTransform(x, [-50, 50], [-5, 5]);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (prefersReducedMotion || disabled) return;

    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    // Apply magnetic effect with strength multiplier
    x.set(distanceX * strength);
    y.set(distanceY * strength);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (!prefersReducedMotion && !disabled) {
      scale.set(1.05);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
    scale.set(1);
  };

  return (
    <motion.button
      ref={ref}
      className={`relative ${className}`}
      style={{ x, y, scale }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      disabled={disabled}
      whileTap={prefersReducedMotion || disabled ? {} : { scale: 0.95 }}
    >
      <motion.div
        style={
          prefersReducedMotion
            ? {}
            : {
                rotateX,
                rotateY,
                transformStyle: 'preserve-3d',
              }
        }
      >
        {children}
      </motion.div>

      {/* Animated border glow on hover */}
      {isHovered && !disabled && !prefersReducedMotion && (
        <motion.div
          className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 blur-md -z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </motion.button>
  );
}

/**
 * MagneticCard - A card component with magnetic hover effect
 */
export function MagneticCard({
  children,
  className = '',
  strength = 0.15,
}: {
  children: React.ReactNode;
  className?: string;
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  const springConfig = { damping: 20, stiffness: 300 };
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);

  const rotateX = useTransform(y, [-100, 100], [5, -5]);
  const rotateY = useTransform(x, [-100, 100], [-5, 5]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion) return;

    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    x.set(distanceX * strength);
    y.set(distanceY * strength);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      style={
        prefersReducedMotion
          ? {}
          : {
              rotateX,
              rotateY,
              transformStyle: 'preserve-3d',
            }
      }
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}
