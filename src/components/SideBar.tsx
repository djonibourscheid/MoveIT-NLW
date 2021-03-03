import Link from 'next/link';

import styles from '../styles/components/SideBar.module.css';

interface SideBarProps {
  page: string;
}

export function SideBar({ page }: SideBarProps) {
  let pageHomeActived = true;

  if (page == 'home') {
    pageHomeActived = true;
  } else {
    pageHomeActived = false;
  }

  return (
    <div className={styles.container}>
      <img src="/logo.svg" alt="Logomarca MoveIt" />

      { pageHomeActived ? (
        <div className={`${styles.linkContainer}`}>
          <div className={styles.active}>
            <Link href="/">
              <img src="/icons/sidebar-home.svg" alt="Página inicial" />
            </Link>
          </div>

          <div>
            <Link href="/leaderboard">
              <img src="/icons/sidebar-leaderboard.svg" alt="Página de Ranking" />
            </Link>
          </div>
        </div>
      ) : (
          <div className={`${styles.linkContainer}`}>
            <div>
              <Link href="/">
                <img src="/icons/sidebar-home.svg" alt="Página inicial" />
              </Link>
            </div>

            <div className={styles.active}>
              <Link href="/leaderboard">
                <img src="/icons/sidebar-leaderboard.svg" alt="Página de Ranking" />
              </Link>
            </div>
          </div>
        )}
    </div>
  );
}