import React from 'react'
import MenuContainer from './MenuContainer/MenuContainer'
import styles from './Navigation.module.css'

const Navigation = () => {
	return (
		<div className={styles.navigation}>
			<div className={styles.logo}>High five</div>
			<MenuContainer />
		</div>
	)
}

export default Navigation
