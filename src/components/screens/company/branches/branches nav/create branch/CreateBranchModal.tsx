import { generatePassword } from '@/utils/generatePassword'
import { Modal } from '@mui/material'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { ORGANIZATION_URL } from 'config/api.config'
import { FC, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import closeBtn from '../../../../../../assets/icons/cross.svg'
import addIcon from '../../../../../../assets/icons/plus.svg'
import styles from './CreateBranchModal.module.css'

const CreateBranchModal: FC = () => {
	const [open, setOpen] = useState(false)
	const [name, setName] = useState('')
	const [amount, setAmount] = useState('')
	const [address, setAddress] = useState('')
	const [branchActivity, setBranchActivity] = useState('')
	const [additionalInfo, setAdditionalInfo] = useState('')
	const team_id = uuidv4()
	const handleOpen = () => setOpen(true)
	const handleClose = () => setOpen(false)

	const sendBranch = () => {
		branchMutation.mutate()
	}

	const branchMutation = useMutation({
		mutationFn: () => {
			return axios.post(ORGANIZATION_URL + `/team`, {
				team_id: team_id,
				team_type: 'department',
				title: {
					en: name + generatePassword(),
					ru: name,
				},
				description: additionalInfo,
				additional_info: {
					address: address,
					stuffAmount: amount,
					branchActivity: branchActivity,
				},
				organization_id: 'bd743040-d003-4579-8a34-1da34db38db9',
				project_id: '53a196e9-b121-4c69-bf45-8cfec561d244',
			})
		},
		onSuccess: () => {
			handleClose()
			setName('')
			setAmount('')
			setAddress('')
			setAdditionalInfo('')
			setBranchActivity('')
		},
	})
	return (
		<>
			<button onClick={handleOpen} className={styles.btn}>
				<img width={19} height={19} src={addIcon} />
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
						<div className={styles.modalHeading}>Филиал</div>
						<button className={styles.btn} onClick={handleClose}>
							<img width={13} height={13} src={closeBtn} />
						</button>
					</div>
					<div className={styles.mainContainer}>
						<div className={styles.modalContent}>
							<div className={styles.infoContainer}>
								<input
									className={styles.inputBig}
									type="text"
									placeholder="Название"
									onChange={(e) => setName(e.target.value)}
									required
								/>
								<input
									className={styles.inputBig}
									type="text"
									placeholder="Количество сотрудников"
									onChange={(e) => setAmount(e.target.value)}
									required
								/>
								<select
									onChange={(e) => setBranchActivity(e.target.value)}
									className={styles.selectBranch}
								>
									<option value={'Активный'}>Активный</option>
									<option value={'Неактивный'}>Неактивный</option>
								</select>
							</div>
							<div className={styles.addressContainer}>
								<input
									className={styles.inputBigger}
									type="text"
									placeholder="Адрес"
									onChange={(e) => setAddress(e.target.value)}
									required
								/>
							</div>
						</div>
						<div className={styles.additional_info}>
							<input
								className={styles.inputVeryBig}
								type="text"
								placeholder="Дополнительная информация"
								onChange={(e) => setAdditionalInfo(e.target.value)}
								required
							/>
						</div>
						<div className={styles.btnContainer}>
							<div className={styles.btnWrapper}>
								<button className={styles.btnCancel} onClick={handleClose}>
									Отмена
								</button>
								<button className={styles.btnCreate} onClick={sendBranch}>
									Создать
								</button>
							</div>
						</div>
					</div>
				</div>
			</Modal>
		</>
	)
}

export default CreateBranchModal
