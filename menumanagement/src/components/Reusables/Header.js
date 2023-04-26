import styles from '../../styles/Header.module.css';

const Header = async ({ links }) => {

  return (
    <header>
      <nav>
        <ul role="list" className={styles['nav-list']}>
          {links.map((link, index) => (
            <li
              key={`${link.name}-${index}`}
              className={style['nav-list-item']}
              >
                {link.name}
            </l>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;