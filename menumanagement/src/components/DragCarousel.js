import { useState, useEffect, useRef } from 'react';
import { imageFixtures } from '../lib/fixtures/imageFixtures';
import { motion, AnimatedPresence } from 'framer-motion';
import styles from '../styles/Carousel.module.css';
import Image from 'next/image';

const DragCarousel = ({ imagesList }) => {
  const [imageIdx, setImageIdx] = useState(0);
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, {});

  return (
    <div className={styles['container']}>
      <motion.h1 animate={{ x: 250 }}>Hello</motion.h1>
      <motion.div
        ref={carousel}
        className={styles['carousel']}
        whileTap={{ cursor: 'grabbing' }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className={styles['inner-carousel']}
        >
          {imageFixtures['sampleImageObjects'].map((imageObject, i) => {
            return (
              <motion.div className={styles['item']}>
                <img src={imageObject.url} alt="" />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
      Carousel
    </div>
  );
};

export default DragCarousel;
