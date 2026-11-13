"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { ArtType, LanguageSwitcherType } from '@/types/types';
import { useStore } from '@/store/useStore';
import { galleryCopy } from './copy';
import styles from './ArtworkTile.module.css';

export default function ArtworkTile({ art, index, language }: { art: ArtType; index: number; language: LanguageSwitcherType }) {
  const [failedImage, setFailedImage] = useState(false);
  const favorites = useStore((state) => state.favorites);
  const setSelectedArt = useStore((state) => state.setSelectedArt);
  const saved = favorites.some((item) => item.id === art.id);
  const words = galleryCopy(language);
  const pattern = ['large', 'square', 'tall', 'square', 'wide', 'square', 'tall', 'square', 'wide', 'square', 'large', 'square'];
  const shape = pattern[index % pattern.length];
  const image = art.image_id ? `/api/image/${art.image_id}?size=${shape === 'large' || shape === 'wide' ? 843 : 400}` : null;

  return <Link href={`/arts/${art.id}`} className={`${styles.tile} ${styles[shape]}`} onClick={() => setSelectedArt(art)}>
    <div className={styles.imageWrap}>{image && !failedImage ? <Image unoptimized src={image} alt={art.title} width={843} height={843} className={styles.image} onError={() => setFailedImage(true)} /> : <span className={styles.noImage}>{words.imageError}</span>}</div>
    <span className={styles.number}>NO. {String(index + 1).padStart(2, '0')}</span>
    {saved && <span className={styles.saved}>★ {words.saved}</span>}
    <div className={styles.caption}><span>{art.artist_display || words.credit}</span><h2>{art.title}</h2><span>{art.date_display || '—'} <b>↗</b></span></div>
  </Link>;
}
