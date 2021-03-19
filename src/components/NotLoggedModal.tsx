import Link from 'next/link';

import styles from '../styles/components/NotLoggedModal.module.css';

export function NotLoggedModal() {
  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <header>Não conectado</header>

        <main>
          <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0)"><path d="M20 .833c11.05 0 20 8.8 20 19.654 0 8.685-5.73 16.05-13.675 18.646-1 .185-1.367-.423-1.367-.945 0-.466.017-1.703.025-3.341 5.564 1.185 6.737-2.637 6.737-2.637.91-2.268 2.225-2.875 2.225-2.875 1.812-1.218-.14-1.193-.14-1.193-2.008.136-3.063 2.025-3.063 2.025-1.784 3.005-4.682 2.136-5.825 1.635-.18-1.272-.695-2.137-1.267-2.629 4.442-.491 9.11-2.181 9.11-9.711 0-2.145-.775-3.899-2.058-5.274.225-.496.9-2.495-.175-5.201 0 0-1.675-.527-5.5 2.015-1.6-.437-3.3-.654-5-.664-1.7.01-3.4.227-5 .664-3.8-2.542-5.475-2.015-5.475-2.015-1.075 2.706-.4 4.705-.2 5.201-1.275 1.375-2.05 3.129-2.05 5.274 0 7.55 4.675 9.211 9.125 9.695-.7.59-1.35 1.795-1.35 3.636 0 2.63.025 4.744.025 5.382 0 .515-.35 1.13-1.375.933C5.725 36.528 0 29.158 0 20.487 0 9.633 8.955.833 20 .833z" fill="currentColor" /></g><defs><clipPath id="clip0"><path fill="#fff" transform="matrix(-1 0 0 1 40 0)" d="M0 0h40v40H0z" /></clipPath></defs>
          </svg>
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
              <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.17939e-07 13.5L18.255 13.5L9.87 21.885L12 24L24 12L12 -1.04907e-06L9.885 2.115L18.255 10.5L1.18021e-06 10.5L9.17939e-07 13.5Z" fill="currentColor" />
              </svg>
            </button>
          </Link>
        </footer>
      </div>
    </div>
  );
}