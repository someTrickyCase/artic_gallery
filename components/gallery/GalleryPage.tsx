"use client";

import type { ReactNode } from 'react';
import { useStore } from '@/store/useStore';
import { useArts } from '@/hooks/useArts';
import { useSearchedArts } from '@/hooks/useSearchedArts';
import { styles as ds } from '@/design-system';
import type { ArtType } from '@/types/types';
import GalleryShell from './GalleryShell';
import ArtworkGrid from './ArtworkGrid';
import { galleryCopy } from './copy';
import styles from './GalleryPage.module.css';

function Results({ data, error, loading, loadNext, hasMore, empty }: { data?: ArtType[][]; error?: Error; loading: boolean; loadNext?: () => Promise<unknown>; hasMore?: boolean; empty: string }) {
  const language = useStore((state) => state.preferLanguage);
  const words = galleryCopy(language);
  const works = data?.flat() ?? [];
  return <>
    {works.length > 0 && <ArtworkGrid works={works} language={language} />}
    {error && <p className={styles.notice} role='alert'>{words.error}</p>}
    {loading && <p className={styles.notice} role='status'>— — —</p>}
    {!error && !loading && works.length === 0 && <p className={styles.notice}>{empty}</p>}
    {hasMore && loadNext && <div className={styles.more}><button type='button' className={ds.button} onClick={() => void loadNext()} disabled={loading}>{loading ? '…' : words.loadMore} <span>↘</span></button></div>}
  </>;
}

function CollectionResults() {
  const { data, error, isLoading, isValidating, size, setSize } = useArts();
  return <Results data={data} error={error} loading={isLoading || isValidating} hasMore={data?.at(-1)?.length === 25} loadNext={() => setSize(size + 1)} empty='' />;
}

function SearchResults({ query }: { query: string }) {
  const { data, error, isLoading, isValidating, size, setSize } = useSearchedArts(query);
  const language = useStore((state) => state.preferLanguage);
  return <Results data={data} error={error} loading={isLoading || isValidating} hasMore={data?.at(-1)?.length === 12} loadNext={() => setSize(size + 1)} empty={galleryCopy(language).emptySearch} />;
}

function PageFrame({ label, title, description, children }: { label: string; title: string; description: string; children: ReactNode }) {
  return <GalleryShell><main className={`${ds.container} ${styles.main}`}><div className={styles.intro}><p className={ds.eyebrow}>{label}</p><h1 className={ds.heading}>{title}</h1><p className={`${ds.body} ${ds.muted}`}>{description}</p></div>{children}</main></GalleryShell>;
}

export function CollectionPage() {
  const language = useStore((state) => state.preferLanguage);
  const words = galleryCopy(language);
  return <PageFrame label='THE COLLECTION / AN INDEX' title={words.collection} description={words.collectionBody}><form action='/arts/search' className={styles.search}><label htmlFor='gallery-search'>{words.search}</label><div><input id='gallery-search' name='query' placeholder={words.searchPlaceholder} required /><button type='submit' aria-label={words.search}>SEARCH ↗</button></div></form><div className={styles.rule}><span>ALL WORKS</span><span>CHICAGO / USA</span><span>↓ SCROLL TO EXPLORE</span></div><CollectionResults /></PageFrame>;
}

export function SearchPage({ query }: { query: string }) {
  const language = useStore((state) => state.preferLanguage);
  const words = galleryCopy(language);
  return <PageFrame label='COLLECTION / SEARCH' title={words.search} description={`${words.searchBody} “${query}”`}><form action='/arts/search' className={styles.search}><label htmlFor='gallery-search'>{words.search}</label><div><input id='gallery-search' name='query' defaultValue={query} required /><button type='submit' aria-label={words.search}>SEARCH ↗</button></div></form><div className={styles.rule}><span>RESULTS / {query.toUpperCase()}</span><span>↓ DISCOVER</span></div><SearchResults query={query} /></PageFrame>;
}

export function FavoritesPage() {
  const language = useStore((state) => state.preferLanguage);
  const favorites = useStore((state) => state.favorites);
  const words = galleryCopy(language);
  return <PageFrame label='YOUR COLLECTION / THIS SESSION' title={words.favorites} description={words.favoritesBody}><div className={styles.rule}><span>{String(favorites.length).padStart(2, '0')} WORKS</span><span>PERSONAL SELECTION</span></div>{favorites.length ? <ArtworkGrid works={favorites} language={language} /> : <p className={styles.notice}>{words.empty}</p>}</PageFrame>;
}
