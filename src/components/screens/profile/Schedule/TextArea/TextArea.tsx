import { FC } from 'react'
import styles from '../PopupMenu.module.css'

const TextArea: FC = () => {
	return <textarea className={styles.textArea} placeholder='Введите текст' />
}

export default TextArea
