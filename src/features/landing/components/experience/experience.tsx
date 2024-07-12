import { FC } from "react";
import styles from "./experience.module.scss";
import { IconScrollMouse } from "~/components/icons";
import SectionTitle from "../section-title";
import { Calendar, MapPin } from "react-feather";

interface ExperienceProps {
  lng: string;
}
 
const Experience: FC<ExperienceProps> = ({
  lng,
}) => {

  const experiences = [
    {
      role: 'Full stack Developer',
      company: 'Rappi',
      date: 'Nov 2023 - Present',
      location: 'Bogota, Colombia',
      description: 'I am a highly motivated individual and eternal optimist dedicated to writing clear, concise, robust code that works. Striving to never stop learning and improving.'
    },
    {
      role: 'Full stack Developer',
      company: 'Rappi',
      date: 'Nov 2023 - Present',
      location: 'Bogota, Colombia',
      description: 'I am a highly motivated individual and eternal optimist dedicated to writing clear, concise, robust code that works. Striving to never stop learning and improving.'
    },
    {
      role: 'Full stack Developer',
      company: 'Rappi',
      date: 'Nov 2023 - Present',
      location: 'Bogota, Colombia',
      description: 'I am a highly motivated individual and eternal optimist dedicated to writing clear, concise, robust code that works. Striving to never stop learning and improving.'
    }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <IconScrollMouse className={styles.scrollIcon} />
        <SectionTitle text="Experience" className={styles.title} />
        <p className={styles.description}>
          I have worked with a variety of companies and projects.{'\n'}I have a wide range of skills and experiences that I have honed over the years.{'\n'}I am a highly motivated individual and eternal optimist dedicated to writing clear, concise, robust code that works.
        </p>
        <div className={styles.experiences}>
          {experiences.map((_, index) => (
            <div
              key={index}
              className={styles.experience}>
              <div className={styles.info}>
                <div className={styles.companyRole}>
                  <h4 className={styles.role}>Full stack Developer</h4>
                  <p className={styles.company}>Rappi - Full time</p>
                </div>
                <div className={styles.dates}>
                  <Calendar className={styles.icon} />
                  <span className={styles.date}>Nov 2023 - Present</span>
                </div>
              </div>
              <div className={styles.location}>
                <MapPin className={styles.icon} />
                <p className={styles.locationName}>
                  Bogota, Colombia
                </p>
              </div>
              <div className={styles.jobDescription}>
                I am a highly motivated individual and eternal optimist dedicated to writing clear, concise, robust code that works. Striving to never stop learning and improving.
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
 
export default Experience;