import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      {/* Empty spacer div for left side */}
      <div className={styles.left}>
        <Link href="/MainMenu">
          New Arrivals
        </Link>
      </div>

      {/* Center logo */}
      <div className={styles.logo}>
        <Image
          src="/ZeroSevenLogoWhiteFont.png"
          alt="Band logo"
          width={150}
          height={80}
          style={{ width: 'auto' }}
        />
      </div>

      {/* Right menu icons */}
      <div className={styles.rightmenuicons}>
        <Link href="/MainMenu">
          <Image src="/Login-70x70.png" alt="Login" height={40} width={40} />
        </Link>
        <Link href="/MainMenu">
          <Image src="/ZeroSevenNewShop.png" alt="Shop" height={40} width={40} />
        </Link>
        <Link href="/MainMenu">
          <Image src="/ZeroSevenMenu70x70.png" alt="Menu" height={40} width={40} />
        </Link>
      </div>
    </header>
  );
}
