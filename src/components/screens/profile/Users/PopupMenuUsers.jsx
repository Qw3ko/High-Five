import Popup from 'reactjs-popup'
import closeBtn from '../../../../assets/icons/cross.svg'
import btnStyles from '../Profile.module.css'
import styles from './PopupMenu.module.css'

const PopupMenuUsers = () => {
	return (
		<Popup
			trigger={<button className={btnStyles.userChat}>Встреча</button>}
			modal
			nested
		>
			{close => (
				<div className={styles.modalContainer}>
					<div className={styles.modalHeaderContainer}>
						<div className={styles.modalHeading}>Предложить встречу</div>
						<button className={styles.closeBtn} onClick={close}>
							<img width={20} height={20} src={closeBtn} />
						</button>
					</div>
					<div className={styles.modalContent}>
						<form>
							<div className={styles.modalInputDateContainer}>
								<div className={styles.timePicker}>
									<input className={styles.inputTime} type='time' />
								</div>
								<div className={styles.datePicker}>
									<input name='date' className={styles.inputDate} type='date' />
								</div>
							</div>
							<div className={styles.modalTextAreaContainer}>
								<textarea
									name='text'
									className={styles.textArea}
									placeholder='Введите текст'
								/>
							</div>
							<div className={styles.modalFooter}>
								<button
									className={styles.btnCreate}
									type='button'
									onClick={() => {
										close()
									}}
								>
									Отправить
								</button>
							</div>
						</form>
					</div>
				</div>
			)}
		</Popup>
	)
}

export default PopupMenuUsers
