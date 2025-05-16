'use client';

import { useRef } from 'react';

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  let scrollInterval: NodeJS.Timeout | null = null;

  const startScroll = () => {
    const container = containerRef.current;
    if (!container) return;

    // Reset scroll to top
    container.scrollTop = 0;

    // Clear any existing scroll interval
    if (scrollInterval) clearInterval(scrollInterval);

    // Start auto-scrolling down
    scrollInterval = setInterval(() => {
      if (container.scrollTop + container.clientHeight >= container.scrollHeight) {
        clearInterval(scrollInterval!);
        return;
      }
      container.scrollTop += 500; // adjust speed
    }, 1); // ~60fps
  };

  const stopScroll = () => {
    if (scrollInterval) {
      clearInterval(scrollInterval);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-10 border border-red-600">
      <div
        ref={containerRef}
        onMouseEnter={startScroll}
        onMouseLeave={stopScroll}
        className="h-[400px] w-[300px] overflow-y-hidden p-2  border rounded shadow-lg scroll-smooth bg-blue-600"
      >
        {[1, 2, 3, 4].map((num) => (
          <div
            key={num}
            className="h-[300px] flex items-center justify-center text-2xl border-b bg-cyan-600 last:border-b-0"
          >
            Child {num}
          </div>
        ))}
      </div>
    </div>
  );
}
