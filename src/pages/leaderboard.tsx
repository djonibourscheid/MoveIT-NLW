import Head from 'next/head';

import { SideBar } from "../components/SideBar";

import styles from '../styles/pages/Leaderboard.module.css';

export default function Leaderboard() {
  return (
    <div>
      <SideBar page="leaderboard" />

      <div className={styles.container}>
        <Head>
          <title>Ranking | move.it</title>
        </Head>
      </div>
    </div>
  );
}