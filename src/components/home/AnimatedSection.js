// components/Section.js

import { useEffect, useRef } from 'react';

const Section = ({ children }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          section.classList.add('animate-fadeInRight');
        }
      });
    });

    observer.observe(section);

    return () => {
      observer.unobserve(section);
    };
  }, []);

  return <section ref={sectionRef}>{children}</section>;
};

export default Section;
