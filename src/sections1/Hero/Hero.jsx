import styles from './HeroStyles.module.css';
import Meimg from '../../assets/Medamin.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import facebookLight from '../../assets/facebook-icon.png';
import facebookDark from '../../assets/facebook-dark.png';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/Mohamed Amin Abdelkafi CV.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
    const { theme , toggleTheme } = useTheme();

    const themeIcon = theme === 'light' ? sun : moon;
    const facebookIcon = theme === 'light' ? facebookLight : facebookDark;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
    
  return (
    <section id="hero" className={styles.container}>
        <div className={styles.colorModeContainer}>
            <img 
            className={styles.Me}
            src={Meimg} 
            alt="profile picture">
            </img>
            <img 
            className={styles.colorMode}
            src={themeIcon} 
            alt="Color mode icon"
            onClick={toggleTheme}
            >
            </img>
        </div>
        <div className={styles.info}>
            <h1>Mohamed Amin <br></br>Abdelkafi</h1>
            <h2>Web Developer</h2>
            <span>
                <a href='https://www.facebook.com/medamin.abdelkafi.39/'>
                    <img src={facebookIcon} alt="Facebook icon" />
                </a>
                <a href='https://github.com/MedaminDamino'>
                    <img src={githubIcon} alt="Github icon" />
                </a>
                <a href='https://www.linkedin.com/in/mohamed-amin-abdelkefi/'>
                    <img src={linkedinIcon} alt="Linkedin icon" />
                </a>
            </span>
            <p className={styles.description}>
                 Graduated in Software Engineering from the Faculty of Sciences of Sfax.
            </p>
            <br></br>
            <a href={CV} download>
                <button className="hover">
                    Download CV
                </button>
            </a>
        </div>
    </section>
  )
}

export default Hero