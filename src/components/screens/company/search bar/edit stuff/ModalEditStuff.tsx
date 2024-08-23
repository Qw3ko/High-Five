import { CompanyService } from '@/services/company/company.service'
import { Modal } from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import { FC, useState } from 'react'
import 'react-toastify/dist/ReactToastify.css'
import changeIcon from '../../../../../assets/icons/pen.svg'
import loadingGif from '../../../../../assets/images/loading.webp'
import btnStyle from '../../employees/employees list/EmployeesList.module.css'
import styles from '../create stuff/ModalCreateEmployee.module.css'
import EditContent from './EditContent'

interface IUser {
	id: string
}

const ModalEditEmployee: FC<IUser> = ({ id }) => {
	const [open, setOpen] = useState(false)
	const [currentId, setCurrentId] = useState('')
	const handleOpen = () => {
		setCurrentId(id)
		setOpen(true)
	}
	const handleClose = () => {
		setCurrentId('')
		setOpen(false)
	}

	const { data: userData, isLoading } = useQuery({
		queryKey: ['user'],
		queryFn: () => CompanyService.getUserById(currentId),
		enabled: !!currentId,
		select: (data) => data && data.data,
	})

	return (
		<>
			<button onClick={handleOpen} className={btnStyle.btn}>
				<img width={19} height={19} src={changeIcon} />
			</button>
			<Modal
				sx={{
					'& div.MuiModal-backdrop': {
						backgroundColor: 'rgba(255, 255, 255, 0.5)',
					},
				}}
				open={open}
				onClose={handleClose}
			>
				<div className={styles.modalContainer}>
					{isLoading ? (
						<div className={styles.loadingContainer}>
							<img width={301} height={262} src={loadingGif} />
							<div>Загрузка...</div>
						</div>
					) : (
						<EditContent
							id={id}
							handleClose={handleClose}
							userData={userData}
							setCurrentId={setCurrentId}
						/>
					)}
				</div>
			</Modal>
		</>
	)
}
export default ModalEditEmployee
