import { FC } from 'react'
import loadingGif from '../../../../../assets/images/loading.gif'
import noAvatar from '../../../../../assets/images/noAvatar.svg'
import ModalDeleteStuff from '../../search bar/delete stuff/ModalDeleteStuff'
import ModalEditEmployee from '../../search bar/edit stuff/ModalEditStuff'
import { IEmployee } from './EmployeesList.interface'
import styles from './EmployeesList.module.css'

interface EmployeesListProps {
	isLoading: boolean
	employeesData: IEmployee[] | undefined
}

const EmployeesItem: FC<EmployeesListProps> = ({
	isLoading,
	employeesData,
}) => {
	return (
		<div className={styles.mainContainer}>
			{isLoading ? (
				<div className={styles.loadingContainer}>
					<img width={301} height={262} src={loadingGif} />
					<div>Загрузка...</div>
				</div>
			) : (
				employeesData?.map((employee: IEmployee) => (
					<div key={employee.user_id} className={styles.employeeContainer}>
						<div className={styles.personalWrapper}>
							<div className={styles.imgContainer}>
								<img src={noAvatar} className={styles.img} />
							</div>
							<div className={styles.wrapperInfo}>
								<span className={styles.header}>
									{employee.additional_info.last_name +
										' ' +
										employee.additional_info.first_name}
								</span>
								<span className={styles.subHeader}>
									{employee.contact_phone[0].value}
								</span>
								<span className={styles.subHeader}>
									{employee.contact_email[0].value}
								</span>
							</div>
						</div>
						<div className={styles.wrapperInfo}>
							<span className={styles.header}>
								{employee.additional_info.position}
							</span>
							<span className={styles.subHeader}>
								День рождения {employee.additional_info.birth_date}
							</span>
							<span className={styles.subHeader}>
								Работает с {employee.additional_info.work_from}
							</span>
						</div>
						<div className={styles.wrapperInfo}>
							<span className={styles.header}>
								{employee.additional_info.access}
							</span>
							<span className={styles.subHeader}>
								{employee.additional_info.formCompleteness}
							</span>
							<span className={styles.subHeader}>
								{employee.additional_info.branch}
							</span>
						</div>
						<div className={styles.interactionContainer}>
							<ModalEditEmployee id={employee.user_id} />
							<ModalDeleteStuff id={employee.user_id} />
						</div>
					</div>
				))
			)}
			{employeesData?.length === 0 && (
				<div>
					Ваша команда - это ваш главный ресурс! Добавьте своих сотрудников,
					чтобы начать совместную работу
				</div>
			)}
		</div>
	)
}

export default EmployeesItem
