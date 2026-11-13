"use client";

import { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import useSWR from 'swr';
import type { ArtType } from '@/types/types';
import { useStore } from '@/store/useStore';
import { styles as ds } from '@/design-system';
import GalleryShell from './GalleryShell';
import { galleryCopy } from './copy';
import styles from './ArtworkDetail.module.css';

async function fetchArtwork(id: string): Promise<ArtType> {
  const response = await fetch(`/api/artic/artworks/${id}`);
  if (!response.ok) throw new Error('Artwork unavailable');
  return (await response.json()).data as ArtType;
}

export default function ArtworkDetail({ id }: { id: string }) {
  const [failedImageId, setFailedImageId] = useState<string | null>(null);
  const [zoom, setZoom] = useState(1);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const language = useStore((state) => state.preferLanguage);
  const selectedArt = useStore((state) => state.selectedArt);
  const favorites = useStore((state) => state.favorites);
  const addFavorite = useStore((state) => state.addFavorites);
  const removeFavorite = useStore((state) => state.removeFromFavorites);
  const words = galleryCopy(language);
  const valid = /^\d+$/.test(id);
  const { data, error, isLoading } = useSWR(valid ? id : null, fetchArtwork);
  const art = data ?? (selectedArt?.id === Number(id) ? selectedArt : undefined);
  const saved = art ? favorites.some((item) => item.id === art.id) : false;
  const image = art?.image_id ? `/api/image/${art.image_id}?size=843` : null;

  return <GalleryShell back><main className={`${ds.container} ${styles.main}`}>
    <Link href='/arts' className={ds.textLink}>← {words.back}</Link>
    {(!valid || error) && <p role='alert' className={styles.state}>{words.detailError}</p>}
    {valid && isLoading && !art && <p role='status' className={styles.state}>— — —</p>}
    {art && <><div className={styles.heading}><p className={ds.eyebrow}>COLLECTION / NO. {art.id}</p><h1 className={ds.heading}>{art.title}</h1><div className={styles.headingFoot}><span>{art.artist_display || words.credit}</span><span>{art.date_display}</span></div></div>
      <div className={styles.layout}><div className={styles.artwork}>{image && failedImageId !== art.image_id ? <button type='button' className={styles.zoomTrigger} onClick={() => dialogRef.current?.showModal()} aria-label={words.viewZoom}><Image unoptimized priority src={image} alt={art.title} width={843} height={843} onError={() => setFailedImageId(art.image_id)} /><span>{words.viewZoom} ↗</span></button> : <p>{words.imageError}</p>}<span>ART INSTITUTE OF CHICAGO / IIIF</span></div><aside className={styles.aside}><p className={ds.eyebrow}>ABOUT THE WORK</p><h2>{art.artist_display || words.credit}</h2><dl><div><dt>DATE</dt><dd>{art.date_display || '—'}</dd></div><div><dt>MEDIUM</dt><dd>{art.artwork_type_title || '—'}</dd></div><div><dt>ORIGIN</dt><dd>{art.place_of_origin || '—'}</dd></div><div><dt>CREDIT</dt><dd>{art.credit_line || '—'}</dd></div></dl><button type='button' className={`${ds.button} ${saved ? ds.buttonSolid : ''}`} onClick={() => saved ? removeFavorite(art) : addFavorite(art)} aria-pressed={saved}>{saved ? `★ ${words.saved}` : `☆ ${words.save}`}</button></aside></div>
      {image && failedImageId !== art.image_id && <dialog ref={dialogRef} className={styles.lightbox} aria-label={`${words.viewZoom}: ${art.title}`} onClose={() => setZoom(1)} onClick={(event) => { if (event.target === event.currentTarget) dialogRef.current?.close(); }}><div className={styles.lightboxBar}><span>{art.title}</span><div><button type='button' onClick={() => setZoom((value) => Math.max(1, value - .5))} disabled={zoom <= 1} aria-label={words.zoomOut}>−</button><span>{Math.round(zoom * 100)}%</span><button type='button' onClick={() => setZoom((value) => Math.min(3, value + .5))} disabled={zoom >= 3} aria-label={words.zoomIn}>+</button><button type='button' onClick={() => dialogRef.current?.close()} aria-label={words.closeZoom}>✕</button></div></div><div className={styles.lightboxViewport}><Image unoptimized src={image} alt={art.title} width={843} height={843} className={styles.lightboxImage} style={{ width: `${zoom * 100}%` }} onClick={() => setZoom((value) => value >= 3 ? 1 : value + .5)} /></div></dialog>}
      {(art.description || art.exhibition_history) && <section className={styles.notes}>{art.description && <div><p className={ds.eyebrow}>THE STORY</p><p>{art.description.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim()}</p></div>}{art.exhibition_history && <div><p className={ds.eyebrow}>{words.exhibition}</p><p>{art.exhibition_history}</p></div>}</section>}
    </>}
  </main></GalleryShell>;
}
