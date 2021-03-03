import Head from 'next/head';

import styles from '../styles/pages/Leaderboard.module.css';

export default function Leaderboard() {
  return (
      <div className={styles.container}>
        <Head>
          <title>Ranking | move.it</title>
        </Head>
      </div>
  );
}