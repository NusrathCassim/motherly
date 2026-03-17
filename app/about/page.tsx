// app/about/page.tsx
import Image from "next/image";
import Link from "next/link";
import styles from "./about.module.css";

export default function About() {
  return (
    <main className={styles.container}>
      {/* Floating Background Elements */}
      <div className={styles.floatingCircle1}></div>
      <div className={styles.floatingCircle2}></div>
      <div className={styles.floatingHeart}>❤️</div>
      <div className={styles.floatingHeart2}>🌸</div>

      {/* Hero Section */}
      <div className={styles.heroSection}>
        <div className={styles.Pannel1}>
          <div className={styles.imageWrapper}>
            <Image
              src="/image/motherly_ph.png"
              alt="Motherly Logo"
              width={400}
              height={400}
              className={styles.logoImage}
              priority
            />
          </div>
        </div>

        <div className={styles.Pannel2}>
          <h1 className={styles.title}>
            Motherly
            <span className={styles.titleAccent}>.</span>
          </h1>
          <p className={styles.paragraph}>
            Motherly is an <span className={styles.highlight}>AI-powered app</span> made for mothers, 
            helping you stay organized, get tips, and take care of your little ones easily.
          </p>
          
          {/* Feature Pills */}
          <div className={styles.featurePills}>
            <span className={styles.pill}>🤱 AI Baby Scan</span>
            <span className={styles.pill}>💉 Vaccine Reminders</span>
            <span className={styles.pill}>📊 Weight Tracker</span>
            <span className={styles.pill}>🏥 Emergency Help</span>
            <span className={styles.pill}>🗣️ Sinhala & English</span>
          </div>

          {/* CTA Buttons */}
          {/* <div className={styles.ctaButtons}>
            <Link href="/download" className={styles.primaryButton}>
              Download App
              <span className={styles.buttonIcon}>→</span>
            </Link>
            <Link href="/features" className={styles.secondaryButton}>
              See Features
            </Link>
          </div> */}


        </div>
      </div>
    </main>
  );
}