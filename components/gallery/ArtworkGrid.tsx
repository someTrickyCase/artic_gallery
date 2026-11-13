import type { ArtType, LanguageSwitcherType } from '@/types/types';
import ArtworkTile from './ArtworkTile';
import styles from './ArtworkGrid.module.css';

export default function ArtworkGrid({ works, language }: { works: ArtType[]; language: LanguageSwitcherType }) {
  return <div className={styles.grid}>{works.map((art, index) => <ArtworkTile key={art.id} art={art} language={language} index={index} />)}</div>;
}
