import { FC, useState } from 'react'
import { getCurrentDate } from '../../../../utils/getCurrentDate'
import styles from '../Profile.module.css'
import PopupMenu from './PopupMenu'

interface ITask {
	id: number
	text: string
	time: string
}

const Schedule: FC = () => {
	const [data, setData] = useState<ITask[]>([])
	const addTask = (data: ITask) => {
		setData(prevData => [...prevData, data])
	}

	return (
		<div className={styles.schedule}>
			<div className={styles.scheduleDateContainer}>
				<div className={styles.scheduleDate}>{getCurrentDate()}</div>
				<PopupMenu onChange={addTask} />
			</div>
			<div className={styles.scheduleList}>
				{data.length > 0 ? (
					data.map(item => (
						<div key={item.id} className={styles.scheduleItem}>
							<div className={styles.scheduleItemName}>{item.text}</div>
							<div className={styles.scheduleItemTime}>{item.time}</div>
						</div>
					))
				) : (
					<div className={styles.noTaskMessage}>На сегодня задач нет</div>
				)}
			</div>
		</div>
	)
}

export default Schedule
