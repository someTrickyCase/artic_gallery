"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useStore } from '@/store/useStore';
import { styles as ds } from '@/design-system';
import GalleryShell from './GalleryShell';
import { galleryCopy } from './copy';
import styles from './HomePage.module.css';

const images = { hero: '831a05de-d3f6-f4fa-a460-23008dd58dda', first: '2d484387-2509-5e8e-2c43-22f9981972eb', second: '6644829f-f292-c5c4-a73c-0356a6fdbf0d' };

export default function HomePage() {
  const language = useStore((state) => state.preferLanguage);
  const words = galleryCopy(language);
  return <GalleryShell><main>
    <section className={styles.hero}><Image unoptimized priority src={`/api/image/${images.hero}?size=843`} alt='Nighthawks by Edward Hopper' fill className={styles.heroImage} /><div className={styles.heroScrim} /><div className={`${ds.container} ${styles.heroInner}`}><div className={styles.heroCopy}><p className={ds.eyebrow}>A DIGITAL COLLECTION / CHICAGO</p><h1 className={ds.display}>{language === 'eng' ? <>After<br /><em>hours.</em></> : <>После<br /><em>заката.</em></>}</h1><p className={ds.body}>{words.introBody}</p><Link className={styles.heroLink} href='/arts'>{words.discover} <span>↗</span></Link></div><span className={styles.heroNote}>EDWARD HOPPER · NIGHTHAWKS, 1942</span></div></section>
    <section className={`${ds.container} ${styles.next}`}><div><p className={ds.eyebrow}>01 / AN INVITATION</p><h2 className={ds.heading}>{words.intro}</h2></div><div className={styles.nextAside}><p className={ds.body}>{words.collectionBody}</p><Link className={ds.textLink} href='/arts'>{words.explore} <span>↗</span></Link></div></section>
    <section className={`${ds.container} ${styles.featured}`}><div className={styles.featuredTop}><span>SELECTED WORKS</span><span>FROM THE COLLECTION / 02</span></div><Link href='/arts/27992' className={styles.featureCard}><Image unoptimized src={`/api/image/${images.first}?size=843`} alt='A Sunday on La Grande Jatte by Georges Seurat' width={843} height={600} /><span>GEORGES SEURAT / 1884–86 ↗</span></Link><Link href='/arts/28560' className={styles.featureCard}><Image unoptimized src={`/api/image/${images.second}?size=843`} alt='The Bedroom by Vincent van Gogh' width={843} height={600} /><span>VINCENT VAN GOGH / 1889 ↗</span></Link></section>
  </main></GalleryShell>;
}
