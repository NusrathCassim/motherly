// page.tsx
import Link from "next/link";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <main className={styles.container}>
      <div className={`${styles.circle} ${styles.circle1}`}></div>
      <div className={`${styles.circle} ${styles.circle2}`}></div>

      <h1 className={styles.subtitle}>Welcome to</h1>
      <h1 className={styles.title}>Motherly</h1>
      <p className={styles.subtitle}>AI powered Mobile App</p>
      {/* <div className={styles.navcontainer}>
        <ul className={styles.ulstyles}>
           <li><Link href="/about">About</Link></li>
          <li><Link href="/features">Features</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </div> */}
    </main>
  );
}