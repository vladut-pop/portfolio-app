import { data } from './data'
import styles from './CVPage.module.css'
import { At, GithubLogo, Hammer } from '@phosphor-icons/react'
import Chips from '../components/Chips/Chips'
import Section from '../components/Section/Section'
import { Timeline } from '../components/Timeline'

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
      {/* https://d3-graph-gallery.com/graph/dendrogram_radial_basic.html */}
      <Section title="About me" icon={<Hammer size={24} weight="thin" />}>
        Hello there, nice to meet you :) If you've landed here, please give me a moment to share a
        few things about myself. First of all, my name is Vlad. I'm a frontend developer and I live
        in the beautiful area of Transylvania, Romania. If you're wondering, so far, I haven't seen
        any vampires in the area, maybe because we Romanians love our garlic. As for other things
        about me, I have been working with small to big teams, from small projects to bigger
        projects that involved multiple teams. I have developed features for various industries over
        time, which includes : Manufacturing, Health and Insurance, Transportation, Online sales and
        Fashion. Usually my responsibilities are / were : to connect with the designer and implement
        new reusable components, with accessibility in mind, writing test, resolved various bugs,
        developed new CLI scripts that streamlined the team's workflow and so on. When it comes to
        technologies, I'm not a master of all neither an expert of one. To enumarate some
        tehnologies and concepts that I'm familiar are : of corse HTML / CSS / JavaScript,
        TypeScript, Vue 3, Storybook, React, SAP UI5 Fiori, SASS, Cypress, Jira, Git, Figma, CI&CD -
        but let's stop here. I don't want this to be longer that it needs to be, so for any
        question, my PM is open.
      </Section>
      <Section title="Skills" icon={<Hammer size={24} weight="thin" />}>
        <Chips chips={data.skills} />
      </Section>
      <Section title="Experience" icon={<Hammer size={24} weight="thin" />}>
        <Timeline experience={data.experience} />
      </Section>
      <Section title="Education" icon={<Hammer size={24} weight="thin" />}>
        Education
      </Section>
    </div>
  )
}

export default CVPage
