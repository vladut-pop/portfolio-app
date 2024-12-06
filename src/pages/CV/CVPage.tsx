import { data } from './data'
import styles from './CVPage.module.css'
import { At, GithubLogo, Hammer } from '@phosphor-icons/react'
import Chips from '../components/Chips/Chips'
import Section from '../components/Section/Section'

const CVPage: React.FC = () => {
  const { name, headline, location, picture, github, email } = data.basics
  return (
    <div>
      {/* <----------- basics ------------>  */}
      <div className={styles.basics}>
        <img src={picture} alt="" className={styles.basics__picture} />
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
      {/* <----------- basics ------------>  */}
      {/* <----------- skills ------------>  */}
      {/* https://d3-graph-gallery.com/graph/dendrogram_radial_basic.html */}
      <Section title="Skills" icon={<Hammer size={24} weight="thin" />}>
        <Chips chips={data.skills} />
      </Section>

      {/* <----------- skills ------------>  */}
    </div>
  )
}

export default CVPage
