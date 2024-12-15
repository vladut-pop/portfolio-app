import styles from './Timeline.module.css'

export type CompanyProps = {
  company: string
  logo: string
  position: string
}
export type ProjectProps = {
  name: string
  startDate: string
  endDate: string
  summary: string
  keys: string[]
}
export type TimelineProps = {
  experience: (CompanyProps & { projects: ProjectProps[] })[]
}

const Timeline: React.FC<TimelineProps> = ({ experience }) => {
  return (
    <div className={styles.experience}>
      {experience.map((company, index) => (
        <div key={index} className={styles.company}>
          <div className={styles.companyHeader}>
            <img src={company.logo} alt={company.company} />
            <h2>{company.company}</h2>
            <h3>{company.position}</h3>
          </div>
          <div className={styles.projects}>
            {company.projects.map((project, index) => (
              <div key={index} className={styles.project}>
                <h3>{project.name}</h3>
                <h4>
                  {project.startDate} - {project.endDate}
                </h4>
                <p>{project.summary}</p>
                <div>{project.keys.join(', ')}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Timeline
