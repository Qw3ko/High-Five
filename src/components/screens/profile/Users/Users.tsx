import { CompanyService } from '@/services/company/company.service'
import { useQuery } from '@tanstack/react-query'
import Cookies from 'js-cookie'
import { FC } from 'react'
import { SlArrowRight } from 'react-icons/sl'
import loadingGif from '../../../../assets/images/loading.webp'
import { IEmployee } from '../../company/employees/employees list/EmployeesList.interface'
import styles from '../Profile.module.css'
import ModalUserMeeting from './ModalUserMeeting'

const Users: FC = () => {
	const userId = Cookies.get('user')
	const { isLoading, data } = useQuery({
		queryKey: ['employees'],
		queryFn: () =>
			CompanyService.getUsersByCompanyId(
				'bd743040-d003-4579-8a34-1da34db38db9'
			),
		select: (data) => {
			return data.data.filter((employee) => employee.user_id !== userId)
		},
	})
	return (
		<>
			<input placeholder="Поиск" className={styles.usersSearchBar}></input>
			<div className={styles.users}>
				{isLoading && (
					<div className={styles.loadingContainer}>
						<img width={250} height={200} src={loadingGif} />
						<div>Загрузка...</div>
					</div>
				)}
				{data?.map((employee: IEmployee) => (
					<div className={styles.userItem} key={employee.user_id}>
						<div className={styles.userImage}>
							<div className={styles.profileImage}></div>
						</div>
						<div className={styles.userInfo}>
							<div className={styles.userName}>
								{employee.additional_info.first_name +
									' ' +
									employee.additional_info.last_name}
							</div>
							<div className={styles.userOccupation}>
								{employee.additional_info.position}
							</div>
						</div>
						<div className={styles.userInteractions}>
							<div className={styles.userNewMeeting}>
								<div className={styles.icon}></div>
							</div>
							<ModalUserMeeting />
							<div className={styles.userArrow}>
								<SlArrowRight width={12.67} height={12.67} />
							</div>
						</div>
					</div>
				))}
			</div>
		</>
	)
}

export default Users
