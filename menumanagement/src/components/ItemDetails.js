'use client';
import { useSelector, useDispatch } from 'react-redux';
import { selectItem } from '../store/reducers/selectItemSlice';
import styles from '../styles/ItemDetails.module.css';
import Image from 'next/image';
import { HiArrowsPointingIn } from 'react-icons/hi2';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { addItemToCartAndSetStorage } from '../lib/controllers/calculateCart';
// const myLoader = ({ src, width, quality }) => {
//   return `https://example.com/${src}?w=${width}&q=${quality || 75}`
// }

const myLoader = ({ src, width, quality }) => {
  return src;
};

const ItemDetails = () => {
  const item = useSelector(state => state.item);
  const dispatch = useDispatch(); // need to set category items to state.
  // console.log('hello in item details', item.value.menuName);

  // const addItemToLocalStorage = () => {
  //   console.log('this is the item value', item.value);
  //   if (typeof window !== 'undefined') {
  //     let cart =
  //       localStorage.getItem('cart') !== undefined
  //         ? JSON.parse(localStorage.getItem('cart'))
  //         : [];
  //     cart = [...cart, item];
  //     localStorage.setItem('cart', JSON.stringify(cart));
  //     window.dispatchEvent(new Event('addItemToCart')); // Mechanism to update cart displaying number of items
  //   }
  // };

  return (
    <div className={styles.modalContainer}>
      <div className={styles.detailsContainer}>
        {/* <div className={styles.closeButton}>
            <HiArrowsPointingIn />
        </div> */}
        <AiOutlineCloseCircle
          className={styles.closeButton}
          onClick={() => {
            dispatch(selectItem(false));
          }}
        />
        {/* <div className={styles.imageContainer}>
          <Image
            src="https://rasamalaysia.com/wp-content/uploads/2019/04/chicken-satay3.jpg"
            alt={
              item !== null ? item.value.menuName : "Koo Koo Chicken Menu Item"
            }
            fill
            style={{ objectFit: "cover" }}
          />
        </div> */}
        <div className={styles.itemHeader}>
          {item !== null ? item.value.menuName : 'Salt & Pepper Squid 椒鹽鮮魷'}
        </div>
        <div className={styles['item-description']}>
          {item !== null ? item.value.description : ''}
        </div>
        {/* <div className=''>{item['options'] !== undefined ? item.options : '' }</div> */}

        <button
          onClick={() => {
            addItemToCartAndSetStorage(item.value);
          }}
          className={styles.addToCartButton}
        >
          {' '}
          Add {item.quantity} to Cart{' '}
        </button>
      </div>
    </div>
  );
};

export default ItemDetails;
