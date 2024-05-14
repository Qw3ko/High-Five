import { FC, useEffect, useState } from 'react'
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

	const [selectedButtons, setSelectedButtons] = useState(() => {
		// localStorage.setItem('selectedButton', 'nnnnnnnnnnnnnnnnnnnnnnn')          //  <------ сброс localStorage

		const storedButton = localStorage.getItem('selectedButton')
		if (storedButton !== null) {
			// закомментить, чтобы работать без LocalStorage
			return Array.from(storedButton) // закомментить, чтобы работать без LocalStorage
		} else {
			// закомментить, чтобы работать без LocalStorage
			const numberOfFields = keys.length
			localStorage.setItem('answer', 'nnnnnnnnnnnnnnnnnnnnnnn')
			return new Array(numberOfFields + 1).fill('n')
		} // закомментить, чтобы работать без LocalStorage
	})

	const [answer, setAnswer] = useState(() => {
		const storedAnswer = localStorage.getItem('answer')
		const parsedAnswer: object = {}
		if (storedAnswer !== null) {
			const parsedAnswer = Object.keys(JSON.parse(storedAnswer).length !== 0)
				? JSON.parse(storedAnswer)
				: {}
		} else {
			const parsedAnswer = {}
		}
		// console.log(storedAnswer)
		if (!parsedAnswer) {
			console.log('sheet, yes')
			const answerMap = new Map(Object.entries(data))
			answerMap.forEach((value, key) => {
				const type = parseInt(value.trend)
				const points = 0
				answerMap.set(key, { type, points })
			})

			const objAnswer: { [key: string]: object } = {}
			for (const item of answerMap.keys()) {
				objAnswer[item] = answerMap.get(item)
			}

			console.log(objAnswer)
			console.log(JSON.stringify(objAnswer))
			localStorage.setItem('answer', JSON.stringify(objAnswer))
			console.log(localStorage)
			return answerMap
		} else {
			const parsedMap = new Map()
			const back = parsedAnswer as { [key: string]: string }
			for (const prop in back) {
				parsedMap.set(prop, back[prop])
			}
			return parsedMap
		}
	})
	console.log('answer: ', answer)

	const initialAnswer = new Map(Object.entries(data))
	initialAnswer.forEach((value, key) => {
		const type = parseInt(value.trend)
		const points = 0
		initialAnswer.set(key, { type, points })
	})

	const initialObjAnswer: { [key: string]: object } = {}
	for (const item of initialAnswer.keys()) {
		initialObjAnswer[item] = initialAnswer.get(item)
	}

	// useEffect(()=>{}, [answer])

	useEffect(() => {
		if (selectedButtons !== Array.from('nnnnnnnnnnnnnnnnnnnnnnn')) {
			console.log('selected button [selectedButton]')
			localStorage.setItem(
				'selectedButton',
				selectedButtons
					.map(item => {
						if (item !== 'n') return `${item}`
						else return 'n'
					})
					.join('')
			)
		}
		console.log(localStorage)
	}, [selectedButtons])

	useEffect(() => {
		const objAnswer: { [key: string]: { type: number; points: number } } = {}
		for (const item of answer.keys()) {
			objAnswer[item] = answer.get(item)
		}

		console.log('initialMap: ', initialObjAnswer)
		if (JSON.stringify(objAnswer) !== JSON.stringify(initialObjAnswer)) {
			console.log('yes')
			localStorage.setItem('answer', JSON.stringify(objAnswer))
			console.log('selected button [answer]')
			console.log(localStorage)
		}
	}, [answer])

	useEffect(() => {
		fetch('', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json;charset=utf-8',
			},
		})
	}, [])

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
			<div className='containeer__survey'>
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
			</div>
		)
	}
}

export default SurveyContainer
