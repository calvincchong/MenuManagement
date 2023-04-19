'use client';
import { useState, useRef, useEffect } from 'react';
import { CategoryItems } from './CategoryItems';
import { ItemCard } from './ItemCard';
import ItemDetails from './ItemDetails';
import styles from '../styles/OrderingApp.module.css';
import tcss from '../styles/globaltailwind';
import MenuFilter from './MenuFilter';
import Slideout from './Slideout';
import CartDetails from './CartDetails';
import { useSelector, useDispatch } from 'react-redux';
import { selectCategory } from '../store/reducers/menuCategorySlice';
import { toggleCart } from '../store/reducers/cartSlice';
import { selectItem } from '../store/reducers/selectItemSlice';
import {
  useTransition,
  useSpring,
  animated,
  config,
  useSpringRef,
} from '@react-spring/web';
import Accordion from './Accordion';
// import Message from './AddToCartNotification';

const headerTCSS =
  'flex relative justify-center place-content-center min-h-xxxvh bg-center bg-fixed bg-cover bg-[url(https://res.cloudinary.com/dq6rqplja/image/upload/v1678385134/Koo%20Koo%20Chicken/kkc-top-down-menu-item_seijj1.jpg)] min-h-fit min-h-20';

// maps across the categories and returns a section for each set of items
const OrderingApp = ({ items, categories }) => {
  const selectedCategory = useSelector(state => state.menuCategory);
  const isShowCart = useSelector(state => state.cart);
  const isShowItemDetails = useSelector(state => state.item);
  const dispatch = useDispatch();
  const transRef = useSpringRef();
  const trans = useTransition([isShowCart], {
    ref: transRef,
    keys: null,
    from: {
      opacity: 0.5,
      transform: `scale(${0.9})`,
      // transformOrigin: 'top right'
    },
    enter: {
      opacity: 1,
      transform: `scale(${1})`,
    },
    // DEVNOTE: temporarily removed 'leave' to prevent React Dev Mode to create flashing
    // leave: {
    //   opacity: .5,
    //   transform: `scale(${0.9})`,
    // },
    config: config.wobble,
  });

  useEffect(() => {
    transRef.start();
  }, [isShowCart]);

  const filterCategories = category => {
    if (selectedCategory.value === 'All Items') {
      return true;
    }
    return category === selectedCategory.value;
  };

  return (
    <>
      {isShowItemDetails.value !== false ? (
        <div>
          <ItemDetails />
        </div>
      ) : null}
      {/* <div className={headerTCSS}>
      <div className="absolute top-1/4 text-center">
        <div>
          <h1 className={tcss.h1white}>
          Our Menu
          </h1>
        </div>
        <div className="text-slate-50">
          Homemade Malaysian Food - no passport needed
        </div>
        <div className="text-slate-50 py-2" >
          Call 718-827-1698 to place your order.
        </div>
      </div>
    </div> */}
      {/* <div></div> */}
      <div
        className={
          isShowCart
            ? styles.menuContainerWithCart
            : styles.menuContainerWithoutCart
        }
      >
        <MenuFilter categories={categories} />
        <div className="w-12/12 sm:w-9/12 md:w-9/12">
          {categories.filter(filterCategories).map((category, i) => {
            const itemsByCategory = items.filter(item => {
              return item.category === category;
            });

            return (
              <div
                id={category}
                className={styles.categorySections}
                key={`header-${i}`}
              >
                <div className="py-2">
                  <h2 className={tcss.h4}>{category}</h2>
                  <Accordion categoryName={category} />
                </div>
                <CategoryItems items={itemsByCategory} />
              </div>
            );
          })}
        </div>

        {isShowCart.value ? (
          <>
            {trans((style, item) => (
              <animated.div className={styles.slideout} style={{ ...style }}>
                {<Slideout>{<CartDetails />}</Slideout>}
              </animated.div>
            ))}
            <div className="w-[20vw]"></div>
          </>
        ) : null}
      </div>
    </>
  );
};

export default OrderingApp;
