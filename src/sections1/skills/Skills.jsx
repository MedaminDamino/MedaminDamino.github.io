import styles from './SkillsStyles.module.css';
import checkMarkIcon from '../../assets/checkmark-dark.svg'
import checkMarkIconL from '../../assets/checkmark-light.svg'
import SkillList from '../../common/SkillList';
function Skills() {
  const icons = [checkMarkIcon, checkMarkIconL];
  return (
    <section id="skills" className={styles.container}>
        <h1 className='sectionTitle'>Skills</h1>
        <div className={styles.skillList}>
          <SkillList src={icons} skill={"HTML"}/>
          <SkillList src={icons} skill={"CSS"}/>
          <SkillList src={icons} skill={"JavaScript"}/>
          <SkillList src={icons} skill={"Bootstrap"}/>
        </div>
        <hr />
        <div className={styles.skillList}>
          <SkillList src={icons} skill={"PHP"}/>
          <SkillList src={icons} skill={"Laravel"}/>
          <SkillList src={icons} skill={"Java"}/>
          <SkillList src={icons} skill={"C"}/>
          <SkillList src={icons} skill={"Python"}/>
        </div>
        <hr />
        <div className={styles.skillList}>
          <SkillList src={icons} skill={"Mysql"}/>
          <SkillList src={icons} skill={"Github"}/>
          <SkillList src={icons} skill={"Rest APIs"}/>
        </div>
       
    </section>
  )
}

export default Skills