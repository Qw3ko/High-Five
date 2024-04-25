import { FC, useState } from 'react'
import quizData from './Questions/questions.json'
import styles from './Survey.module.css'
import SurveyHeading from './SurveyHeading'
import SurveyQuestion from './SurveyQuestion'
import Result from './result/result_2'

const data: object = quizData.questions

const SurveyContainer: FC = () => {
	const [isResult, setResult] = useState(false)
	const [finalAnswer, setFinalAnswer] = useState({})

	const keys = Object.keys(data)
	const numberOfFields = keys.length
	const [selectedButtons, setSelectedButtons] = useState(
		new Array(numberOfFields + 1).fill('none')
	)

	const [answer, setAnswer] = useState(() => {
		const answerMap = new Map(Object.entries(data))

		answerMap.forEach((value, key) => {
			const type = parseInt(value.trend)
			const points = 0
			answerMap.set(key, { type, points })
		})

		return answerMap
	})

	function handleSend() {
		const answer = calcAnswer()
		setFinalAnswer(answer)
		setResult(prev => !prev)
	}

	const calcAnswer = () => {
		const ans = new Map()
		for (const i of answer.keys()) {
			if (ans.has(answer.get(i).type)) {
				ans.set(
					answer.get(i).type,
					ans.get(answer.get(i).type) + answer.get(i).points
				)
			} else {
				ans.set(answer.get(i).type, answer.get(i).points)
			}
		}
		return ans
	}

	const answerMap = new Map(Object.entries(data))
	const quizArr = []
	for (const item of answerMap.keys()) {
		quizArr.push(answerMap.get(item))
	}
	const temp = quizArr.map((value, key) => {
		return (
			<>
				<SurveyQuestion
					name={value?.['name']}
					questId={key + 1}
					options={value?.['options']}
					answer={answer}
					setAnswer={setAnswer}
					keyQuest={key}
					selectedButtons={selectedButtons}
					setSelectedButtons={setSelectedButtons}
				/>
			</>
		)
	})

	if (!data || Object.keys(data).length === 0) {
		return <div>Loading...</div>
	} else {
		return (
			<>
				<SurveyHeading />
				<div className={styles.surveyContainer}>
					{!isResult && (
						<>
							{temp}
							<button
								className='survey-btn'
								style={{
									padding: '8px, 14px, 8px, 14px',
									gap: '10px',
									border: 'none',
									backgroundColor: '#e2dfed',
								}}
								onClick={handleSend}
							>
								Сохранить
							</button>
							<button className='survey-btn' onClick={handleSend}>
								Отправить
							</button>
						</>
					)}
					{isResult && <Result answer={finalAnswer} />}
				</div>
			</>
		)
	}
}

export default SurveyContainer
