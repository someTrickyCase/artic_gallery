"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { previewArtworks, previewVariants, type PreviewVariant } from "./artworks";
import styles from "./Preview.module.css";

function ArtworkImage({ image, title, className = "" }: { image: string; title: string; className?: string }) {
    return <Image unoptimized src={`/api/image/${image}?size=843`} alt={title} width={843} height={620} className={`${styles.artImage} ${className}`} />;
}

export default function PreviewGallery({ variant }: { variant: PreviewVariant }) {
    const [theme, setTheme] = useState<"light" | "dark">("light");
    const current = previewVariants.find((item) => item.slug === variant)!;
    const [lead, ...rest] = previewArtworks;

    return <main className={`${styles.preview} ${styles[variant]}`} data-theme={theme}>
        <header className={styles.header}>
            <Link className={styles.brand} href='/preview'>ARTIC<span> / </span>GALLERY</Link>
            <nav aria-label='Design variants'>{previewVariants.map((item) => <Link key={item.slug} aria-current={variant === item.slug ? "page" : undefined} href={`/preview/${item.slug}`}>{item.number} {item.title}</Link>)}</nav>
            <button className={styles.themeToggle} type='button' onClick={() => setTheme(theme === "light" ? "dark" : "light")} aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}>{theme === "light" ? "◐ DARK" : "◑ LIGHT"}</button>
        </header>

        {variant === "editorial" && <>
            <section className={styles.editorialHero}><div className={styles.editorialCopy}><p className={styles.eyebrow}>DIGITAL EXHIBITION · 01 / 03</p><h1>The art of<br /><em>looking closer.</em></h1><p>Consider the details. Stay a little longer. Discover a collection that rewards attention.</p><a className={styles.textLink} href='#collection'>EXPLORE THE COLLECTION <span>↗</span></a></div><div className={styles.editorialVisual}><ArtworkImage image={lead.image} title={lead.title} /><p><span>FIG. 01</span> {lead.artist} · {lead.year}</p></div></section>
            <section id='collection' className={styles.editorialCollection}><div className={styles.sectionHeader}><span>SELECTED WORKS</span><span>ART INSTITUTE OF CHICAGO — 2026</span></div><div className={styles.editorialGrid}>{rest.slice(0, 3).map((art, index) => <Link href={`/arts/${art.id}`} key={art.id} className={styles.editorialItem}><ArtworkImage image={art.image} title={art.title} /><div><span>0{index + 2}</span><h2>{art.title}</h2><p>{art.artist} · {art.year}</p></div></Link>)}</div></section>
        </>}

        {variant === "archive" && <>
            <section className={styles.archiveIntro}><div><p className={styles.eyebrow}>THE COLLECTION / AN INDEX</p><h1>Art, arranged<br />for discovery.</h1></div><div className={styles.archiveIntroAside}><span>001 — 005</span><p>Objects, artists, and moments. A visual archive of five works from the Art Institute of Chicago.</p></div></section>
            <div className={styles.archiveToolbar}><span>ALL WORKS <b>05</b></span><span>PAINTING / PRINT / STUDY</span><span>INDEX VIEW ↓</span></div>
            <section className={styles.archiveGrid}>{previewArtworks.map((art, index) => <Link href={`/arts/${art.id}`} key={art.id} className={styles.archiveItem}><div className={styles.archiveImage}><ArtworkImage image={art.image} title={art.title} /></div><div className={styles.archiveMeta}><span>NO. 0{index + 1}</span><span>{art.category.toUpperCase()}</span></div><h2>{art.title}</h2><p>{art.artist} <span>{art.year}</span></p></Link>)}</section>
        </>}

        {variant === "nocturne" && <>
            <section className={styles.nocturneHero}><div className={styles.nocturneImage}><ArtworkImage image={previewArtworks[4].image} title={previewArtworks[4].title} /></div><div className={styles.nocturneOverlay}><p className={styles.eyebrow}>A CLOSER LOOK · 1942</p><h1>After<br />hours.</h1><p>There is a quiet world inside every painting. Enter the frame and see what stays with you.</p><Link href={`/arts/${previewArtworks[4].id}`} className={styles.nocturneLink}>DISCOVER NIGHTHAWKS <span>↗</span></Link></div><span className={styles.nocturneSide}>ART INSTITUTE OF CHICAGO / COLLECTION STUDY</span></section>
            <section className={styles.nocturneBottom}><div><span>01 / A STUDY IN SILENCE</span><h2>Art gives the<br /><em>moment room.</em></h2></div><div className={styles.nocturneTiles}>{previewArtworks.slice(1, 3).map((art) => <Link href={`/arts/${art.id}`} key={art.id}><ArtworkImage image={art.image} title={art.title} /><span>{art.title} ↗</span></Link>)}</div></section>
        </>}

        <footer className={styles.footer}><span>{current.number} / 03 — {current.title.toUpperCase()}</span><Link href='/preview'>ALL DIRECTIONS ↗</Link><span>ARTIC GALLERY / DESIGN STUDY</span></footer>
    </main>;
}
