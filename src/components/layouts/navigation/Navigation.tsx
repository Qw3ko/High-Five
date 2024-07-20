import { FC } from 'react'
import logo from '../../../assets/images/Logo_High Five.svg'
import MenuContainer from './MenuContainer/MenuContainer'
import styles from './Navigation.module.css'

const Navigation: FC<{ role: boolean }> = ({ role }) => {
	return (
		<div className={styles.navigation}>
			<img className={styles.logo} src={logo} />
			<MenuContainer role={role} />
		</div>
	)
}

export default Navigation
