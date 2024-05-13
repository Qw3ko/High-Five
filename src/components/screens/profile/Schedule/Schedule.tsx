import { FC } from 'react'
import { getCurrentDate } from '../../../../utils/getCurrentDate'
import styles from '../Profile.module.css'
import PopupMenu from './PopupMenu'

const Schedule: FC = () => {
	return (
		<div className={styles.schedule}>
			<div className={styles.scheduleDateContainer}>
				<div className={styles.scheduleDate}>{getCurrentDate()}</div>
				<button className={styles.addBtn}>
					<PopupMenu />
				</button>
			</div>
			<div className={styles.scheduleList}>
				<div className={styles.scheduleItem}>
					<div className={styles.scheduleItemName}>Бриф</div>
					<div className={styles.scheduleItemTime}>11:00 - 12:30</div>
				</div>
				<div className={styles.scheduleItem}>
					<div className={styles.scheduleItemName}>Собеседование</div>
					<div className={styles.scheduleItemTime}>12:30 - 13:30</div>
				</div>
				<div className={styles.scheduleItem}>
					<div className={styles.scheduleItemName}>Решение по ИП Ким</div>
					<div className={styles.scheduleItemTime}>13:30 - 14:00</div>
				</div>
				<div className={styles.scheduleItem}>
					<div className={styles.scheduleItemName}>Обед</div>
					<div className={styles.scheduleItemTime}>14:00 - 15:00</div>
				</div>
				<div className={styles.scheduleItem}>
					<div className={styles.scheduleItemName}>Консультация</div>
					<div className={styles.scheduleItemTime}>15:00 - 15:30</div>
				</div>
			</div>
		</div>
	)
}

export default Schedule
