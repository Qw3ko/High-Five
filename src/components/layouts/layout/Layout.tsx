import { FC } from 'react'
import Navigation from '../navigation/Navigation'
import styles from './Layout.module.css'

interface Props {
	children: React.ReactNode
	role: boolean
}

const Layout: FC<Props> = ({ children, role = true }) => {
	return (
		<div className={styles.layout}>
			<Navigation role={role} />
			<div className={styles.center}>{children}</div>
		</div>
	)
}

export default Layout
