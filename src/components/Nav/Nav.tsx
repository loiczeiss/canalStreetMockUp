'use client'; // This is a client-side component

import { useState, useEffect, useRef } from 'react';
import styles from './styles.module.css';
import Link from 'next/link';
import Home from '@/app/page';

export default function NavBar() {
  const [activePanel, setActivePanel] = useState(0);
  const [onPageLoad, setOnPageLoad] = useState(false);

  // Use a ref to track whether the component has already mounted
  const hasMounted = useRef(false);
useEffect(()=>{console.log('mounts')},[])
  useEffect(() => {
    // Check if the component has mounted before
    if (!hasMounted.current) {
      setOnPageLoad(true); // Set onPageLoad to true only on the initial mount
      hasMounted.current = true; // Mark that the component has mounted
    }
  }, []); // Empty dependency array ensures this only runs once on initial load

  const handlePanelClick = (index) => {
    setActivePanel(index); // Set the clicked panel as active
  };

  return (
    <nav className={styles.outer}>
      <Link
        href="/"
        className={`${styles.panel} ${activePanel === 0 ? styles.active : ''}`}
        onClick={() => handlePanelClick(0)}
      >
      
      </Link>

      <Link
        href="/food"
        className={`${styles.one} ${styles.panel} ${activePanel === 1 ? styles.active : ''} ${onPageLoad ? styles.animateHeightOne : ''}`}
        onClick={() => handlePanelClick(1)}
      >
        <p>Food</p>
     
      </Link>

      <Link
        href="/community"
        className={`${styles.two} ${styles.panel} ${activePanel === 2 ? styles.active : ''} ${onPageLoad ? styles.animateHeightTwo : ''}`}
        onClick={() => handlePanelClick(2)}
      >
        <p>Retail</p>
      </Link>

      <Link
        href="/retail"
        className={`${styles.three} ${styles.panel} ${activePanel === 3 ? styles.active : ''} ${onPageLoad ? styles.animateHeightThree : ''}`}
        onClick={() => handlePanelClick(3)}
      >
        <p>Community</p>
      </Link>
    </nav>
  );
}
