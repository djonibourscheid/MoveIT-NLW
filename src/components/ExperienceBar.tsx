import { useContext } from 'react';
import { useSession } from 'next-auth/client';

import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/ExperienceBar.module.css';

export function ExperienceBar() {
  const [session] = useSession();
  const firstLevelXPToNextLevel = 64;

  const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext);

  const percentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel;

  return (
    <>
      { session ? (
        <>
          <header className={styles.experienceBar}>
            <span>0 xp</span>
            <div>
              <div style={{ width: `${percentToNextLevel}%` }} />

              <span className={styles.currentExperience} style={{ left: `${percentToNextLevel}%` }}>
                {`${currentExperience} px`}
              </span>
            </div>
            <span>{experienceToNextLevel} xp</span>
          </header>
        </>
      ) : (
        <>
          <header className={styles.experienceBar}>
            <span>0 xp</span>
            <div>
              <span className={styles.currentExperience}>
                0 px
              </span>
            </div>
            <span>{firstLevelXPToNextLevel} xp</span>
          </header>
        </>
      )
      }
    </>
  )
}