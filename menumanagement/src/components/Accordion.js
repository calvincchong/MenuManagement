'use client';
import { useState } from 'react';
import styles from '../styles/Accordion.module.css';
import { GrTrigger } from 'react-icons/gr';
import { HiOutlineArrowsExpand } from 'react-icons/hi';

// fixtures
import { imageFixtures } from '../lib/fixtures/imageFixtures';

const Accordion = ({ categoryName, num, images }) => {
  const [isExpandedIndex, setIsExpandedIndex] = useState(0);
  const [description, setDescription] = useState(false);

  // const sampleImageObjects = imageFixtures.sampleImageObjects || [];
  const sampleImageObjects = imageFixtures[categoryName] || [];

  // temp warning in dev mode to warn of issues in fixture data.
  if (imageFixtures[categoryName] === undefined) {
    console.log(`${categoryName} is not a valid category name`);
  }

  return (
    <div>
      <div
        key={`accordion-wrapper-${categoryName}`}
        className={styles['wrapper']}
      >
        <div
          key={`accordion-img-${categoryName}`}
          className={styles['accordion']}
        >
          {sampleImageObjects.map((image, index) => {
            return (
              <div
                key={`panel${categoryName}${index}`}
                className={styles['accordion-panel']}
                aria-expanded={index === isExpandedIndex ? 'true' : 'false'}
              >
                <h3
                  key={`panel${categoryName}${index}-header`}
                  id={`panel${index}-header`}
                  className={styles['accordion-header']}
                >
                  <button
                    key={`open-button-${categoryName}-${index}`}
                    className={styles['accordion-trigger']}
                    aria-controls={`panel${index}-content`}
                    aria-expanded={index === isExpandedIndex ? 'true' : 'false'}
                    onClick={() => setIsExpandedIndex(index)}
                  >
                    <span
                      key={`acc-img-name-${categoryName}-${index}`}
                      className={styles['a-panel-title']}
                    >
                      {image.name}
                    </span>
                    {image.chineseName && (
                      <span
                        key={`acc-img-catChinese-${categoryName}-${index}`}
                        className={styles['a-panel-title-vert']}
                      >
                        {' '}
                        {image.chineseName}
                      </span>
                    )}

                    <HiOutlineArrowsExpand
                      key={`acc-img-svg-${categoryName}-${index}`}
                      aria-hidden="true"
                      className={styles['accordion-icon']}
                    />
                    {/* <svg
                      key={`acc-img-svg-${categoryName}-${index}`}
                      aria-hidden="true"
                      className={styles['accordion-icon']}                    > */}
                    {/* <use xlinkHref="#sampleSVG"></use> */}
                    {/* <GrTrigger /> */}
                    {/* {image.catItemNum} */}
                    {/* </svg> */}
                  </button>
                </h3>
                <div
                  key={`panel${categoryName}${index}-content`}
                  className={styles['accordion-content']}
                  id="panel1-content"
                  area-labelledby="panel1-header"
                  // aria-hidden="true"
                  // aria-hidden={index === isExpandedIndex ? 'false' : 'true'}
                  role="region"
                >
                  {description && (
                    <p key={`acc-descr-${categoryName}-${index}`}>
                      description about menu item
                    </p>
                  )}
                  <img
                    key={`acc-background-img-${categoryName}-${index}`}
                    className={`${styles['accordion-image']} ${styles['img']}']}}`}
                    src={image.url}
                    alt="menu item"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
