import Link from 'next/link';

import SideBarHome from '../iconsComponent/SideBarHome';
import SideBarLeaderboard from '../iconsComponent/SideBarLeaderboard';

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
          <div className={`${styles.active} ${styles.buttonHome}`}>
            <Link href="/">
              <button title="Ir para a página inicial">
                <SideBarHome /> {/* SVG */}
              </button>
            </Link>
          </div>

          <div>
            <Link href="/leaderboard">
              <button title="Ir para a página de ranking">
                <SideBarLeaderboard /> {/* SVG */}
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <div className={`${styles.linkContainer}`}>
          <div>
            <Link href="/">
              <button title="Ir para a página inicial">
                <SideBarHome /> {/* SVG */}
              </button>
            </Link>
          </div>

          <div className={`${styles.active} ${styles.buttonLeaderboard}`}>
            <Link href="/leaderboard">
              <button title="Ir para a página de ranking">
                <SideBarLeaderboard /> {/* SVG */}
              </button>
            </Link>
          </div>
        </div>
      )}

      <Link href="/login">
        <button className={styles.backToLogin}>
          Voltar
        </button>
      </Link>
    </div>
  );
}