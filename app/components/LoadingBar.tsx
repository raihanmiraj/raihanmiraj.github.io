"use client";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState, useRef } from "react";

export default function LoadingBar() {
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const pathname = usePathname();
  const router = useRouter();
  const loadingRef = useRef(false);
  const timersRef = useRef<NodeJS.Timeout[]>([]);

  // Clear all timers
  const clearAllTimers = () => {
    timersRef.current.forEach(timer => clearTimeout(timer));
    timersRef.current = [];
  };

  // Start loading progress
  const startLoading = () => {
    if (loadingRef.current) return; // Prevent multiple starts
    
    loadingRef.current = true;
    setLoading(true);
    setProgress(0);
    clearAllTimers();

    // Progressive loading animation
    const timer1 = setTimeout(() => setProgress(25), 100);
    const timer2 = setTimeout(() => setProgress(50), 250);
    const timer3 = setTimeout(() => setProgress(75), 500);
    
    timersRef.current = [timer1, timer2, timer3];
  };

  // Complete loading
  const completeLoading = () => {
    if (!loadingRef.current) return; // Not loading
    
    clearAllTimers();
    setProgress(100);
    
    const finalTimer = setTimeout(() => {
      setLoading(false);
      setProgress(0);
      loadingRef.current = false;
    }, 300);
    
    timersRef.current = [finalTimer];
  };

  useEffect(() => {
    // Listen for navigation events by intercepting link clicks
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');
      
      if (link && !link.hasAttribute('target')) {
        const href = link.getAttribute('href');
        
        // Check if it's an internal navigation
        if (href && 
            (href.startsWith('/') || href.includes(window.location.origin)) &&
            !href.startsWith('#') &&
            href !== pathname
        ) {
          startLoading();
        }
      }
    };

    // Listen for back/forward navigation
    const handlePopState = () => {
      startLoading();
    };

    document.addEventListener('click', handleClick);
    window.addEventListener('popstate', handlePopState);

    return () => {
      document.removeEventListener('click', handleClick);
      window.removeEventListener('popstate', handlePopState);
      clearAllTimers();
    };
  }, [pathname]);

  // Complete loading when pathname changes (page loaded)
  useEffect(() => {
    if (loadingRef.current) {
      completeLoading();
    }
  }, [pathname]);

  // Handle page load completion
  useEffect(() => {
    const handleLoad = () => {
      if (loadingRef.current) {
        completeLoading();
      }
    };

    // If document is already loaded
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  if (!loading && progress === 0) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[99999999999]">
      {/* Loading Bar Container */}
      <div className="h-1 bg-gray-900/20 backdrop-blur-sm">
        <div 
          className="h-full bg-gradient-to-r from-[#64ffda] via-[#64ffda]/80 to-[#64ffda] transition-all duration-300 ease-out relative overflow-hidden"
          style={{ 
            width: `${progress}%`,
            boxShadow: '0 0 10px rgba(100, 255, 218, 0.5)'
          }}
        >
          {/* Animated Shimmer Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
          
          {/* Moving Glow Effect */}
          <div 
            className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-[#64ffda]/60 to-transparent animate-pulse"
            style={{
              animation: loading ? 'shimmer 1.5s infinite' : 'none'
            }}
          ></div>
        </div>
      </div>

      {/* Professional Loading Indicator */}
      {loading && (
        <div className="absolute top-2 right-4">
          <div className="flex items-center gap-2 bg-[#111A28]/90 backdrop-blur-sm border border-[#64ffda]/30 rounded-full px-3 py-1">
            <div className="w-2 h-2 bg-[#64ffda] rounded-full animate-pulse"></div>
            <span className="text-[#64ffda] font-mono text-xs">Loading...</span>
          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
}