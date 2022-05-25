import styles from './Menu.module.scss'
// import LogoSvg from '../../assets/logo.svg';
import { ReactComponent as Logo } from 'assets/logo.svg'

export default function Menu() {
  return (
    <main>
      <nav className={styles.menu}>
        {/* <img src={Logo} alt="aluroni logo" /> */}
        <Logo />
      </nav>
    </main>
  )
}