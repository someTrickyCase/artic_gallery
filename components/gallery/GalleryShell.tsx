"use client";

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import type { ReactNode } from 'react';
import { useStore } from '@/store/useStore';
import { styles as ds } from '@/design-system';
import { galleryCopy } from './copy';
import styles from './GalleryShell.module.css';

export default function GalleryShell({ children, back = false }: { children: ReactNode; back?: boolean }) {
  const theme = useStore((state) => state.preferTheme);
  const language = useStore((state) => state.preferLanguage);
  const setTheme = useStore((state) => state.setPreferTheme);
  const setLanguage = useStore((state) => state.setPreferLanguage);
  const router = useRouter();
  const words = galleryCopy(language);

  return <div className={ds.page} data-theme={theme}>
    <header className={styles.header}>
      <div className={`${ds.container} ${styles.headerInner}`}>
        <Link href='/' className={styles.brand}>ARTIC <span>/ GALLERY</span></Link>
        <nav className={styles.nav} aria-label='Main navigation'>
          <Link href='/arts'>{words.collection}</Link>
          <Link href='/arts/favorites'>{words.favorites}</Link>
        </nav>
        <div className={styles.actions}>
          {back && <button className={styles.back} type='button' onClick={() => router.back()} aria-label={words.back}>←</button>}
          <button className={styles.switch} type='button' onClick={() => setLanguage(language === 'eng' ? 'ru' : 'eng')} aria-label={words.language}>{language === 'eng' ? 'RU' : 'EN'}</button>
          <button className={styles.switch} type='button' onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label={words.theme}>{theme === 'dark' ? '◑ LIGHT' : '◐ DARK'}</button>
        </div>
      </div>
    </header>
    {children}
    <footer className={`${ds.container} ${styles.footer}`}><span>ARTIC / GALLERY</span><span>{words.credit}</span><Link href='/arts'>{words.collection} ↗</Link></footer>
  </div>;
}
