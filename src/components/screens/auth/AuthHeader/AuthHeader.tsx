import { FC } from 'react'
import logo from '../../../../assets/images/Logo_High Five.svg'
import styles from './AuthHeader.module.css'

const AuthHeader: FC = () => {
	return (
		<div className={styles.mainContainer}>
			<img className={styles.logo} src={logo} />
			<div className={styles.navContainer}>
				<ul className={styles.nav}>
					<li className={styles.link}>О нас</li>
					<li className={styles.link}>Попробовать</li>
					<li className={styles.link}>Тарифы</li>
					<li className={styles.link}>Контакты</li>
				</ul>
			</div>
		</div>
	)
}

export default AuthHeader
