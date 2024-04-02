import React from 'react'
import DisabledButton from '../../ui/Button/Disabled button/DisabledButton'
import styles from './SurveyHeading.module.css'

const SurveyHeading = () => {
	return (
		<>
			<div className={styles.container}>
				<div className={styles.headingContainer}>
					<div className={styles.heading}>
						Диагностика уровня эмоционального выгорания Н.Е.Водопьяновой
					</div>
					<DisabledButton />
				</div>
			</div>
		</>
	)
}

export default SurveyHeading
