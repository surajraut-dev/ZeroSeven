import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      
        <div className="logo">
          <Image
            src="/ZeroSevenLogoWhiteFont.png"
            alt="Band logo"
            width={150}
            height={80}
            style={{ width: 'auto' }}
          />
        </div>
        <div className={styles.rightmenuicons}>
         <Link href="/MainMenu">
            <Image
              src="/Login-70x70.png"
              alt="Main Menu"
              height={50}
              width={50}
            />
          </Link>
          <Link href="/MainMenu">
            <Image
              src="/ZeroSevenNewShop.png"
              alt="Main Menu"
              height={50}
              width={50}
            />
          </Link>
          <Link href="/MainMenu">
            <Image
              src="/ZeroSevenMenu70x70.png"
              alt="Main Menu"
              height={50}
              width={50}
            />
          </Link>
          
        </div>
      
    </header>
  );
}
