import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { useSession } from 'next-auth/client';

import styles from '../styles/components/Profile.module.css';

export function Profile() {
  const [session] = useSession();

  const { level } = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer} >
      {session ? (
        <>
          <img src={session.user.image} alt={`Foto de ${session.user.name}`} />
          <div className={styles.userInfos}>
            <strong>{session.user.name}</strong>
            <p>
              <img src="icons/level.svg" alt="Level" />
              Level {level}
            </p>
          </div>
        </>
      ) : (
        <>
        </>
      )}
    </div>
  )
}