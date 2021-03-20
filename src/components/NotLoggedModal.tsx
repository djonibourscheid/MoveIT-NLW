import Link from 'next/link';
import ArrowRight from '../iconsComponent/ArrowRight';
import Github from '../iconsComponent/Github';

import styles from '../styles/components/NotLoggedModal.module.css';

export function NotLoggedModal() {
  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <header>Não conectado</header>

        <main>
          <Github />
          <strong>Faça login com seu Github para continuar</strong>
          <p>
            Precisamos que você se conecte com sua conta do Github.
            Assim conseguiremos salvar seu nível, desafios completos e
            lhe posicionar no ranking.
          </p>
        </main>

        <footer>
          <Link href="/login">
            <button>
              Ir para página de login
              <ArrowRight />
            </button>
          </Link>
        </footer>
      </div>
    </div>
  );
}