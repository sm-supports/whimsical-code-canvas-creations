import { useEffect } from 'react';

export const useSmoothScroll = () => {
  useEffect(() => {
    // Observer for fade animations
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    // Observe all elements with animation classes
    document.querySelectorAll('.fade-up, .scale-in').forEach(element => {
      observer.observe(element);
    });

    // Handle smooth scrolling for anchor links
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');
      
      if (!link) return;
      
      const href = link.getAttribute('href');
      if (!href?.startsWith('#')) return;
      
      e.preventDefault();
      const targetId = href.slice(1);
      const targetElement = document.getElementById(targetId);
      
      if (!targetElement) return;

      // Calculate scroll position
      const offset = 80; // Adjust based on your header height
      const targetPosition = targetElement.offsetTop - offset;
      
      // Smooth scroll with easing
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    };

    // Listen for click events on the document
    document.addEventListener('click', handleLinkClick);

    return () => {
      observer.disconnect();
      document.removeEventListener('click', handleLinkClick);
    };
  }, []);
};
