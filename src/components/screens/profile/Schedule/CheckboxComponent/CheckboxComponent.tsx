import { FC } from 'react'
import styles from './CheckboxComponent.module.css'

const CheckboxComponent: FC = () => {
	return (
		<label className={styles.checkboxLabel}>
			<input type='checkbox' className={styles.checkbox} />
			Важная
		</label>
	)
}

export default CheckboxComponent
