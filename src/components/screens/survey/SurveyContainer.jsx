import { useState } from 'react'
import quizData from './Questions/questions.json'
import styles from './Survey.module.css'
import SurveyQuestion from './SurveyQuestion'
import Result from './result/result_2'

const SurveyContainer = () => {
	const [quizD, setQuizD] = useState('')
	const [quiz, setQuiz] = useState('')
	const [isResult, setResult] = useState(false)
	const [answ, setAnsw] = useState('')
	const [score, setScore] = useState('')

	const keys = Object.keys(quizData.questions)
	const numberOfFields = keys.length
	const [selectedButtons, setSelectedButtons] = useState(
		new Array(numberOfFields + 1).fill('none')
	)

	const [answer, setAnswer] = useState(() => {
		const answerMap = new Map(Object.entries(quizData.questions))

		answerMap.forEach((value, key) => {
			const type = parseInt(value.trend)
			const points = 0
			answerMap.set(key, { type, points })
		})

		return answerMap
	})

	function handleSend() {
		let ans = calcAns()
		setAnsw(ans)
		setResult(prev => !prev)
	}

	const calcAns = () => {
		let ans = new Map()
		for (let i of answer.keys()) {
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

	const findMax = item => {
		// let maxVlue = -Infinity
		let max = item.reduce((maxValue, currentOption) => {
			return Math.max(maxValue, currentOption.Points)
		}, Number.NEGATIVE_INFINITY)
	}

	const findScore = () => {
		for (let i of quizData.questions.keys()) {
			let mxArr = findMax(quizData.questions.get(i))
			let max = Math.max(answer.get(i).options)
		}
	}

	const answerMap = new Map(Object.entries(quizData.questions))
	let quizArr = []
	for (let item of answerMap.keys()) {
		quizArr.push(answerMap.get(item))
	}
	const temp = quizArr.map((value, key) => {
		return (
			<SurveyQuestion
				name={value['name']}
				questId={key + 1}
				options={value['options']}
				trend={value['trend']}
				answer={answer}
				setAnswer={setAnswer}
				key={key}
				selectedButtons={selectedButtons}
				setSelectedButtons={setSelectedButtons}
			/>
		)
	})

	if (!quizData || quizData.questions.length === 0) {
		return <div>Loading...</div>
	} else {
		return (
			<div className={styles.surveyContainer}>
				{!isResult && (
					<>
						{temp}
						<button
							className='survey-btn'
							styles={{
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
				{isResult && <Result answer={answ} />}
			</div>
		)
	}
}

export default SurveyContainer
