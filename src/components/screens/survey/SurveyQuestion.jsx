import { useState } from 'react'
import questions from './Questions/questions1.json'
import styles from './Survey.module.css'
import SurveyOption from './SurveyOption'

const SurveyQuestion = ({ question, questionNumber }) => {
	const surveyQuestion = questions[questionNumber][0]
	const [response, setResponse] = useState([])
	return (
		<div className={styles.container}>
			<span className={styles.heading}>{question}</span>
			<div>
				<SurveyOption
					type={surveyQuestion.type}
					id={surveyQuestion['options'][0]['id']}
					name={surveyQuestion.name}
					setResponse={setResponse}
					response={response}
					value={surveyQuestion['options'][0]['value']}
					point={0}
				/>
				<SurveyOption
					type={surveyQuestion.type}
					id={surveyQuestion['options'][1]['id']}
					name={surveyQuestion.name}
					setResponse={setResponse}
					response={response}
					value={surveyQuestion['options'][1]['value']}
					point={1}
				/>
				<SurveyOption
					type={surveyQuestion.type}
					id={surveyQuestion['options'][2]['id']}
					name={surveyQuestion.name}
					setResponse={setResponse}
					response={response}
					value={surveyQuestion['options'][2]['value']}
					point={3}
				/>
				<SurveyOption
					type={surveyQuestion.type}
					id={surveyQuestion['options'][3]['id']}
					name={surveyQuestion.name}
					setResponse={setResponse}
					response={response}
					value={surveyQuestion['options'][3]['value']}
					point={4}
				/>
				<SurveyOption
					type={surveyQuestion.type}
					id={surveyQuestion['options'][4]['id']}
					name={surveyQuestion.name}
					setResponse={setResponse}
					response={response}
					value={surveyQuestion['options'][4]['value']}
					point={5}
				/>
				<SurveyOption
					type={surveyQuestion.type}
					id={surveyQuestion['options'][5]['id']}
					name={surveyQuestion.name}
					setResponse={setResponse}
					response={response}
					value={surveyQuestion['options'][5]['value']}
					point={6}
				/>
			</div>
			<span className={styles.footerText}>
				*Этот вопрос является обязательным
			</span>
		</div>
	)
}

export default SurveyQuestion
