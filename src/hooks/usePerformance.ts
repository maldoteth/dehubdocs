
import { useEffect } from 'react';

// Simple performance monitoring
export const usePerformance = () => {
  useEffect(() => {
    // Track page load performance
    if (typeof window !== 'undefined' && 'performance' in window) {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.entryType === 'navigation') {
            console.log('Navigation timing:', {
              domContentLoaded: entry.domContentLoadedEventEnd - entry.domContentLoadedEventStart,
              loadComplete: entry.loadEventEnd - entry.loadEventStart,
              totalTime: entry.loadEventEnd - entry.fetchStart,
            });
          }
        });
      });

      observer.observe({ entryTypes: ['navigation'] });

      // Track Core Web Vitals if supported
      if ('web-vitals' in window) {
        // This would require the web-vitals library, but for now we'll use basic timing
        console.log('Performance monitoring active');
      }

      return () => {
        observer.disconnect();
      };
    }
  }, []);
};
