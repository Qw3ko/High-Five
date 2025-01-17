import Cookies from 'js-cookie'
import { FC, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Navigation from '../navigation/Navigation'
import styles from './Layout.module.css'

const Layout: FC = () => {
	const navigate = useNavigate()
	const role = true

	useEffect(() => {
		const userId = Cookies.get('user')
		if (userId === undefined) {
			navigate('/login')
		}
	})

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
