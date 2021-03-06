import {ExperienceBar} from "../components/ExperienceBar";
import {Profile} from "../components/Profile";
import {CompletedChallenges} from "../components/CompletedChallanges";
import {Countdown} from "../components/Countdown";
import Head from 'next/Head'
import styles from '../styles/pages/Home.module.css'
export default function Home() {
  return (
      <div className={styles.container}>
          <Head>
              <title>Move it</title>
          </Head>
        <ExperienceBar/>

        <section>
            <div>
                <Profile/>
                <CompletedChallenges/>
                <Countdown/>
            </div>
        </section>
      </div>
  )
}
