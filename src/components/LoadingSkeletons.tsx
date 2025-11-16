import { motion } from 'framer-motion';
import { usePrefersReducedMotion } from '@/hooks/useAnimations';

/**
 * Base Skeleton component with shimmer effect
 */
function Skeleton({
  className = '',
  variant = 'rectangular',
}: {
  className?: string;
  variant?: 'rectangular' | 'circular' | 'text';
}) {
  const prefersReducedMotion = usePrefersReducedMotion();

  const baseClass = variant === 'circular' ? 'rounded-full' : variant === 'text' ? 'rounded' : 'rounded-lg';

  return (
    <div className={`relative overflow-hidden bg-muted ${baseClass} ${className}`}>
      {!prefersReducedMotion && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-muted-foreground/10 to-transparent"
          animate={{
            x: ['-100%', '100%'],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: 'linear',
          }}
        />
      )}
    </div>
  );
}

/**
 * Enhanced Loading Fallback with skeleton screens
 * Replaces the basic spinner with a premium loading experience
 */
export function LoadingFallbackEnhanced() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="w-full max-w-6xl px-4">
        {/* Hero Skeleton */}
        <div className="space-y-4 mb-12">
          <Skeleton className="h-16 w-3/4" />
          <Skeleton className="h-8 w-full max-w-2xl" />
          <div className="flex gap-4 mt-6">
            <Skeleton className="h-12 w-40" />
            <Skeleton className="h-12 w-40" />
          </div>
        </div>

        {/* Stats Bar Skeleton */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="text-center space-y-2">
              <Skeleton className="h-10 w-24 mx-auto" />
              <Skeleton className="h-4 w-32 mx-auto" />
            </div>
          ))}
        </div>

        {/* Content Grid Skeleton */}
        <div className="grid md:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="space-y-4">
              <Skeleton className="h-48 w-full" />
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/**
 * Card Loading Skeleton
 */
export function CardSkeleton() {
  return (
    <div className="border border-border rounded-lg p-6 space-y-4">
      <Skeleton className="h-6 w-2/3" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-5/6" />
      <Skeleton className="h-4 w-4/5" />
      <div className="pt-4">
        <Skeleton className="h-10 w-32" />
      </div>
    </div>
  );
}

/**
 * List Item Skeleton
 */
export function ListItemSkeleton() {
  return (
    <div className="flex items-center gap-4 p-4 border-b border-border">
      <Skeleton variant="circular" className="h-12 w-12" />
      <div className="flex-1 space-y-2">
        <Skeleton className="h-5 w-1/2" />
        <Skeleton className="h-4 w-3/4" />
      </div>
    </div>
  );
}

/**
 * Image Skeleton
 */
export function ImageSkeleton({ className = '' }: { className?: string }) {
  return <Skeleton className={className} />;
}

/**
 * Form Skeleton
 */
export function FormSkeleton() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-10 w-full" />
      </div>
      <div className="space-y-2">
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-10 w-full" />
      </div>
      <div className="space-y-2">
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-32 w-full" />
      </div>
      <Skeleton className="h-10 w-32" />
    </div>
  );
}

/**
 * Profile Skeleton
 */
export function ProfileSkeleton() {
  return (
    <div className="flex items-center gap-4">
      <Skeleton variant="circular" className="h-16 w-16" />
      <div className="flex-1 space-y-2">
        <Skeleton className="h-6 w-48" />
        <Skeleton className="h-4 w-32" />
      </div>
    </div>
  );
}

/**
 * Table Skeleton
 */
export function TableSkeleton({ rows = 5 }: { rows?: number }) {
  return (
    <div className="space-y-2">
      <Skeleton className="h-12 w-full" /> {/* Header */}
      {[...Array(rows)].map((_, i) => (
        <Skeleton key={i} className="h-16 w-full" />
      ))}
    </div>
  );
}

/**
 * Text Skeleton - For loading text content
 */
export function TextSkeleton({ lines = 3 }: { lines?: number }) {
  return (
    <div className="space-y-2">
      {[...Array(lines)].map((_, i) => (
        <Skeleton
          key={i}
          variant="text"
          className={`h-4 ${i === lines - 1 ? 'w-3/4' : 'w-full'}`}
        />
      ))}
    </div>
  );
}
