import Popup from 'reactjs-popup'
import CheckboxComponent from './CheckboxComponent/CheckboxComponent'
import DatePickerComponent from './DatePicker/DatePicker'
import TimePickerContainer from './DatePicker/TimePicker'
import './PopupMenu.module.css'
import styles from './PopupMenu.module.css'
import TextArea from './TextArea/TextArea'

const PopupMenu = () => {
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
						<div className={styles.modalInputDateContainer}>
							<div className={styles.timePicker}>
								<TimePickerContainer />
							</div>
							<div className={styles.datePicker}>
								<DatePickerComponent />
							</div>
						</div>
						<div className={styles.modalTextAreaContainer}>
							<TextArea />
						</div>
						<div className={styles.modalFooter}>
							<CheckboxComponent />
							<button
								className={styles.btnCreate}
								onClick={() => {
									close()
								}}
							>
								Создать
							</button>
						</div>
					</div>
				</div>
			)}
		</Popup>
	)
}

export default PopupMenu
