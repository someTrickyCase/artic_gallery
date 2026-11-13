import Link from "next/link";
import { previewVariants } from "./artworks";
import styles from "./Preview.module.css";

export default function PreviewIndex() {
    return (
        <main className={styles.index}>
            <header className={styles.indexHeader}><span>ARTIC / DESIGN STUDY</span><Link href='/arts'>BACK TO GALLERY ↗</Link></header>
            <div className={styles.indexIntro}><p>THREE MONOCHROME DIRECTIONS · 2026</p><h1>Ways of<br /><em>seeing.</em></h1><p>Three visual systems for the gallery. Open each route and switch between light and dark to compare their rhythm, contrast, and treatment of the artwork.</p></div>
            <div className={styles.indexGrid}>{previewVariants.map((variant) => <Link href={`/preview/${variant.slug}`} className={styles.indexCard} key={variant.slug}><span>{variant.number} / 03</span><h2>{variant.title}</h2><p>{variant.description}</p><span className={styles.indexArrow}>VIEW DIRECTION ↗</span></Link>)}</div>
        </main>
    );
}
