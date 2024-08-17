import { CompanyService } from '@/services/company/company.service'
import { useQuery } from '@tanstack/react-query'
import Cookies from 'js-cookie'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import exitIcon from '../../../../assets/icons/exit.svg'
import photo from '../../../../assets/images/noAvatar.svg'
import Menu from './Menu'
import styles from './Menu.module.css'

const MenuContainer: FC<{ role: boolean }> = ({ role }) => {
	const navigate = useNavigate()
	const userId = Cookies.get('user')
	const user = useQuery({
		queryKey: ['currentUser'],
		queryFn: () => {
			if (userId) {
				return CompanyService.getUserById(userId)
			}
			navigate('/login')
		},
	})
	const logout = () => {
		Cookies.remove('user')
		navigate('/login')
	}
	return (
		<>
			<Menu role={role} />
			<div className={styles.profileContainer}>
				<div className={styles.profileInfo}>
					<img width={50} height={50} src={photo} alt="Profile" />
					<div className={styles.textContainer}>
						<div className={styles.profileName}>
							{user.data?.data.additional_info.first_name +
								' ' +
								user.data?.data.additional_info.last_name}
						</div>
						<div className={styles.profileWork}>
							{user.data?.data.additional_info.position}
						</div>
					</div>
				</div>
				<button className={styles.exitButton} onClick={logout}>
					<img src={exitIcon} width={25} height={25} />
					Выйти
				</button>
			</div>
		</>
	)
}

export default MenuContainer
