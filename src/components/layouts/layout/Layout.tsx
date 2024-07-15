import { CompanyService } from '@/services/company/company.service'
import { useQuery } from '@tanstack/react-query'
import Cookies from 'js-cookie'
import { FC } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Navigation from '../navigation/Navigation'
import styles from './Layout.module.css'

const Layout: FC = () => {
	const navigate = useNavigate()
	const userId = Cookies.get('user')
	const userRole = useQuery({
		queryKey: ['userRole'],
		queryFn: () => {
			if (userId) {
				return CompanyService.getUserById(userId)
			}
			navigate('/login')
		},
	})

	let role = userRole.data?.data.additional_info.isAdmin

	if (!role) {
		role = false
	}

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
