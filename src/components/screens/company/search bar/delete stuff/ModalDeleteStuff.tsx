import { CompanyService } from '@/services/company/company.service'
import { Modal } from '@mui/material'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { FC, useState } from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import closeBtn from '../../../../../assets/icons/cross.svg'
import deleteIcon from '../../../../../assets/icons/delete.svg'
import styles from './ModalDeleteStuff.module.css'

interface IUser {
	id: string
}

const ModalDeleteStuff: FC<IUser> = ({ id }) => {
	const [open, setOpen] = useState(false)
	const handleOpen = () => setOpen(true)
	const handleClose = () => setOpen(false)
	const queryClient = useQueryClient()

	const deleteUser = () => {
		userMutation.mutate()
	}

	const userMutation = useMutation({
		mutationFn: async () => {
			await CompanyService.DeleteUserById(id)
			return true
		},
		onError: (error) => {
			toast.error('Ошибка при удалении пользователя:' + error.message)
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['employees'] })
			toast.success('Пользователь удален успешно')
		},
		onSettled: () => {
			handleClose()
		},
	})

	return (
		<>
			<button onClick={handleOpen} className={styles.btn}>
				<img width={19} height={19} src={deleteIcon} />
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
					<div className={styles.modalHeaderContainer}>
						<div className={styles.modalHeading}>Внимание!</div>
						<button className={styles.btn} onClick={handleClose}>
							<img width={13} height={13} src={closeBtn} />
						</button>
					</div>
					<div className={styles.modalContent}>
						<span>
							Вы собираетесь удалить сотрудника. Это действие невозможно
							отменить.
						</span>
						<span>Уверены, что хотите продолжить?</span>
						<div className={styles.btnContainer}>
							<div className={styles.btnWrapper}>
								<button className={styles.btnCancel} onClick={handleClose}>
									Отмена
								</button>
								<button className={styles.btnDelete} onClick={deleteUser}>
									Удалить
								</button>
							</div>
						</div>
					</div>
				</div>
			</Modal>
		</>
	)
}

export default ModalDeleteStuff
