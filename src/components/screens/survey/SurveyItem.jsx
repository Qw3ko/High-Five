import React from 'react'
import styles from './Survey.module.css'

const SurveyItem = ({ type, id, name, value }) => {
	return (
		<div className={styles.questionOption}>
			<input type={type} id={id} name={name} value={value} />
			<label htmlFor={id} className={styles.value}>
				{value}
			</label>
		</div>
	)
}

export default SurveyItem
