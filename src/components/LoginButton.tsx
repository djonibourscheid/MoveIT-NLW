import { signIn, signOut, useSession } from 'next-auth/client';

import styles from '../styles/components/LoginButton.module.css';
import Link from 'next/link';

export function LoginButton() {
  const [session, loading] = useSession();

  return (
    <div className={styles.loginContainer}>
      {!session &&
        <div className={styles.singIn}>
          <div><p>Não conectado</p></div>

          <button title="Conectar" onClick={(): Promise<void> => signIn("github", { callbackUrl: '/', })}>
            <img src="/icons/log-in.svg" alt="Conectar" />
          </button>
        </div>
      }

      {session &&
        <div className={styles.singOut}>
          <div><p>Conectado como {session.user.name}</p></div>

          <Link href="/">
            <button title="Voltar para página principal">
              <img src="/icons/arrow-right.svg" alt="Ir para página principal" />
            </button>
          </Link>

          <button title="Desconectar" onClick={(): Promise<void> => signOut()}>
            Desconectar
          </button>
        </div>
      }
    </div>
  )
}