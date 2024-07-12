import styles from './ProjectsStyles.module.css';
import electronic from '../../assets/viberr.png';
import secondProj from '../../assets/fresh-burger.png';
import ProjectCard from '../../common/ProjectCard';
import electronicShop from '../../assets/electronic shop.jpeg';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
          <h1 className='sectionTitle'>Projects</h1>
          <div className={styles.projectsContainer}>
              <ProjectCard src={electronicShop} 
              link = "https://github.com/MedaminDamino/StagePfe" 
              h3 = 'Electronic Shop'/>

            {/* 
              <ProjectCard src={secondProj} 
              link = "https://github.com/MedaminDamino/StagePfe" 
              h3 = 'Second Project'/>
            */}
          </div>
        </section>
  )
}

export default Projects