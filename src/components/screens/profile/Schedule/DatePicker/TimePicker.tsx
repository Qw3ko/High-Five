import 'dayjs/locale/ru'
import { FC } from 'react'
import styles from '../PopupMenu.module.css'

const TimePickerContainer: FC = () => {
	return (
		<input
			className={styles.inputTime}
			type='time'
		/>
	)
}

export default TimePickerContainer
