import { data } from './data'
import styles from './CVPage.module.css'
import { At, GithubLogo } from '@phosphor-icons/react'

const CVPage: React.FC = () => {
  const { name, headline, location, picture, github, email } = data.basics
  return (
    <div className={styles.basics}>
      <img src={picture} className={styles.basics__picture} />
      <div>
        <h1>{name}</h1>
        <div>{headline}</div>
        <address>{location}</address>
        <div>
          <div className={styles.basics__contact}>
            <GithubLogo size={24} weight="thin" />
            <a href={github}>{github}</a>
          </div>
          <div className={styles.basics__contact}>
            <At size={24} weight="thin" />
            <a href={`mailto:${email}`}>{email}</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CVPage
