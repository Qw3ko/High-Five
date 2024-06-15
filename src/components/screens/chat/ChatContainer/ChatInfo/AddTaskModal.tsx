import closeBtn from '@/assets/icons/cross.svg'
import addBtnIcon from '@/assets/icons/plus.svg'
import { Modal } from '@mui/material'
import { FC, useState } from 'react'
import styles from '../../../profile/Schedule/ModalScheduleMenu.module.css'
import btnStyles from '../ChatContainer.module.css'

export interface AddTaskModalProps {
	onChange: (id: number, date: Date, text: string, checkbox: boolean) => void
}

const AddTaskModal: FC<AddTaskModalProps> = ({ onChange }) => {
	const [open, setOpen] = useState(false)
	const handleOpen = () => setOpen(true)
	const handleClose = () => setOpen(false)
	const [date, setDate] = useState(new Date())
	const [text, setText] = useState('')
	const [id, setId] = useState(0)

	const handleSubmit = () => {
		const checkbox = document.getElementById(
			'checkbox'
		) as HTMLInputElement | null
		if (checkbox) {
			onChange(id, date, text, checkbox.checked)
			setDate(new Date())
			setText('')
			setId(id + 1)
		}
	}
	return (
		<>
			<button onClick={handleOpen} className={btnStyles.meetingBtn}>
				<img width={10} height={10} src={addBtnIcon} />
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
						<div className={styles.modalHeading}>Добавить задачу</div>
						<button className={styles.closeBtn} onClick={handleClose}>
							<img width={20} height={20} src={closeBtn} />
						</button>
					</div>
					<div className={styles.modalContent}>
						<form>
							<div className={styles.modalInputDateContainer}>
								<div className={styles.datePicker}>
									<input
										name="date"
										className={styles.inputDateTask}
										type="date"
										onChange={(e) => setDate(new Date(e.target.value))}
									/>
								</div>
							</div>
							<div className={styles.modalTextAreaContainer}>
								<textarea
									name="text"
									className={styles.textArea}
									placeholder="Введите текст"
									onChange={(e) => setText(e.target.value)}
								/>
							</div>
							<div className={styles.modalFooterTask}>
								<label className={styles.checkboxLabel}>
									<input
										id="checkbox"
										type="checkbox"
										className={styles.checkbox}
									/>
									Важная
								</label>
								<button
									className={styles.btnCreateTask}
									type="button"
									onClick={() => {
										handleSubmit()
										handleClose()
									}}
								>
									Создать
								</button>
							</div>
						</form>
					</div>
				</div>
			</Modal>
		</>
	)
}

export default AddTaskModal
