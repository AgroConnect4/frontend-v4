import React, { useState, useEffect } from 'react';
import styles from './BotaoTopo.module.css';

const BotaoTopo = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    setIsVisible(scrollTop > windowHeight);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    isVisible && (
      <button onClick={scrollToTop} className={styles.BotaoTopo}>
        ↑
      </button>
    )
  );
};

export default BotaoTopo;
