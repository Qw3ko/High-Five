import 'dayjs/locale/ru'
import { FC } from 'react'
import styles from '../PopupMenu.module.css'

const DatePickerComponent: FC = () => {
	return <input className={styles.inputDate} type='date' />
}

export default DatePickerComponent
