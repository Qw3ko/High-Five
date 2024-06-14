import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import Navigation from '../navigation/Navigation'
import styles from './Layout.module.css'
interface Props {
	children: React.ReactNode
}

const Layout: FC<Props> = ({ children = true }) => {
	return (
		<div className={styles.layout}>
			<Navigation role={children} />
			<div className={styles.center}>
				<Outlet />
			</div>
		</div>
	)
}

export default Layout
