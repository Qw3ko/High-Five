import React from 'react'
import styles from './Survey.module.css'
import SurveyItem from './SurveyItem'
import surveys from './questions.json'

const SurveyQuestion = ({ question }) => {
	const surveyQuestion1 = surveys['questions'][0]
	return (
		<div className={styles.container}>
			<span className={styles.heading}>{question}</span>
			<div>
				<SurveyItem
					type={surveyQuestion1.type}
					id={surveyQuestion1['options'][0]['id']}
					name={surveyQuestion1.name}
					value={surveyQuestion1['options'][0]['value']}
				/>
				<SurveyItem
					type={surveyQuestion1.type}
					id={surveyQuestion1['options'][1]['id']}
					name={surveyQuestion1.name}
					value={surveyQuestion1['options'][1]['value']}
				/>
				<SurveyItem
					type={surveyQuestion1.type}
					id={surveyQuestion1['options'][2]['id']}
					name={surveyQuestion1.name}
					value={surveyQuestion1['options'][2]['value']}
				/>
				<SurveyItem
					type={surveyQuestion1.type}
					id={surveyQuestion1['options'][3]['id']}
					name={surveyQuestion1.name}
					value={surveyQuestion1['options'][3]['value']}
				/>
				<SurveyItem
					type={surveyQuestion1.type}
					id={surveyQuestion1['options'][4]['id']}
					name={surveyQuestion1.name}
					value={surveyQuestion1['options'][4]['value']}
				/>
				<SurveyItem
					type={surveyQuestion1.type}
					id={surveyQuestion1['options'][5]['id']}
					name={surveyQuestion1.name}
					value={surveyQuestion1['options'][5]['value']}
				/>
			</div>
		</div>
	)
}

export default SurveyQuestion
