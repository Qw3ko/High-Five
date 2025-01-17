import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import Navigation from '../navigation/Navigation'
import styles from './Layout.module.css'

const Layout: FC = () => {
	const role = true
	return (
		<div className={styles.layout}>
			<Navigation role={role} />
			<div className={styles.center}>
				<Outlet />
			</div>
		</div>
	)
}

export default Layout
