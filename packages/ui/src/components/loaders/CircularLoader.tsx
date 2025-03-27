import React from 'react';
import { cn } from '@workspace/ui/lib/utils';

export interface CircularLoaderProps {
  /**
   * Size of the loader in pixels
   * @default 24
   */
  size?: number;
  /**
   * Color of the loader
   * @default 'currentColor'
   */
  color?: string;
  /**
   * Width of the loader stroke
   * @default 2
   */
  strokeWidth?: number;
  /**
   * Additional CSS classes to apply
   */
  className?: string;
}

function CircularLoader({
  size = 24,
  color = 'currentColor',
  strokeWidth = 2,
  className,
}: CircularLoaderProps) {
  return (
    <div
      className={cn('inline-flex items-center justify-center', className)}
      role="status"
      aria-label="Loading"
    >
      <svg
        className="animate-spin"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          width: size,
          height: size,
        }}
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke={color}
          strokeWidth={strokeWidth}
        />
        <path
          className="opacity-75"
          fill={color}
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
    </div>
  );
}

CircularLoader.displayName = 'CircularLoader';

export { CircularLoader };
