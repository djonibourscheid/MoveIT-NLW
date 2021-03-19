import Head from 'next/head';

import { LoginButton } from '../components/LoginButton';

import styles from '../styles/pages/Login.module.css';

export default function Login() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Login | move.it</title>
      </Head>

      <img src="/icons/loginPage/logo.svg" />

      <section className={styles.sectionContainer}>
        <img src="/icons/loginPage/logo-full.svg" alt="Move.it" />

        <h1>Bem-vindo</h1>

        <div className={styles.descriptionGithub}>
          <img src="/icons/github.svg" alt="Logo do Github" />
          <p>Faça login com seu Github para começar</p>
        </div>

        <LoginButton />
      </section>
    </div>
  );
}