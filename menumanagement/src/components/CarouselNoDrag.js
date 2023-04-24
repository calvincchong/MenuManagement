import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from '../styles/CarouselNoDrag.module.css';

const CarouselNoDrag = ({ children }) => {
  const [imgIdx, setImgIdx] = useState(0);
  const [tuple, setTuple] = useState([null, count]);

  return (
    <div className={styles['container']}>
      <div className={styles['button-container']}></div>
      <div className={styles['carousel']}></div>
    </div>
  );
};

export default CarouselNoDrag;
