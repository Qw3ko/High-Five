import { FC } from 'react'
import Navigation from '../navigation/Navigation'
import styles from './Layout.module.css'

interface Props {
	children: React.ReactNode
}

const Layout: FC<Props> = ({ children }) => {
	return (
		<div className={styles.layout}>
			<Navigation />
			<div className={styles.center}>{children}</div>
		</div>
	)
}

export default Layout
