import { useState } from 'react'
import Popup from 'reactjs-popup'
import './PopupMenu.module.css'
import styles from './PopupMenu.module.css'

const PopupMenu = ({ onChange }) => {
	const [time, setTime] = useState('')
	const [date, setDate] = useState('')
	const [text, setText] = useState('')
	const [id, setId] = useState(0)

	const handleSubmit = () => {
		onChange({
			id: id,
			time: time,
			date: date,
			text: text,
		})
		setTime('')
		setDate('')
		setText('')
		setId(id + 1)
	}

	return (
		<Popup trigger={<div className={styles.addBtnIcon}></div>} modal nested>
			{close => (
				<div className={styles.modalContainer}>
					<div className={styles.modalHeaderContainer}>
						<div className={styles.modalHeading}>Добавить задачу</div>
						<button className={styles.closeBtn} onClick={close}>
							<div className={styles.addBtnIcon}></div>
						</button>
					</div>
					<div className={styles.modalContent}>
						<form>
							<div className={styles.modalInputDateContainer}>
								<div className={styles.timePicker}>
									<input
										className={styles.inputTime}
										type='time'
										onChange={e => setTime(e.target.value)}
									/>
								</div>
								<div className={styles.datePicker}>
									<input
										name='date'
										className={styles.inputDate}
										type='date'
										onChange={e => setDate(e.target.value)}
									/>
								</div>
							</div>
							<div className={styles.modalTextAreaContainer}>
								<textarea
									name='text'
									className={styles.textArea}
									placeholder='Введите текст'
									onChange={e => setText(e.target.value)}
								/>
							</div>
							<div className={styles.modalFooter}>
								<label className={styles.checkboxLabel}>
									<input type='checkbox' className={styles.checkbox} />
									Важная
								</label>
								<button
									className={styles.btnCreate}
									type='button'
									onClick={() => {
										handleSubmit()
										close()
									}}
								>
									Создать
								</button>
							</div>
						</form>
					</div>
				</div>
			)}
		</Popup>
	)
}

export default PopupMenu
