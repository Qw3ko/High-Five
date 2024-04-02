import React from 'react'
import styles from './Layout.module.css'
import Navigation from '../navigation/Navigation'

const Layout = ({ children }) => {
	return (
		<div className={styles.layout}>
			<Navigation />
			<div className={styles.center}>{children}</div>
		</div>
	)
}

export default Layout
