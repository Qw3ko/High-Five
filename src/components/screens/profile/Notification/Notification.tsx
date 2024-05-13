import { FC } from 'react'
import styles from '../Profile.module.css'

const Notification: FC = () => {
	return (
		<>
			<div className={styles.header}>Напоминание</div>
			<div className={styles.text}>
				Опрос сотрудников заканчивается через неделю, 1.05.2024
				<br />
				На данный момент 9 человек еще не прошли опрос
			</div>
		</>
	)
}

export default Notification
