import { FC, useEffect, useState } from 'react'
import Popup from './Popup/popup'
import quizData from './Questions/questions.json'
import styles from './Survey.module.css'
import SurveyHeading from './SurveyHeading'
import SurveyQuestion from './SurveyQuestion'
import Result from './result/result_2'

const data: object = quizData.questions

const SurveyContainer: FC = () => {
	const [isResult, setResult] = useState(false)
	const [finalAnswer, setFinalAnswer] = useState({})
	const [ModalNotAllAns, setModalNotAllAns] = useState(false)

	const keys = Object.keys(data)
	const numberOfFields = keys.length

	const [selectedButtons, setSelectedButtons] = useState(() => {
		// localStorage.setItem('selectedButton', 'nnnnnnnnnnnnnnnnnnnnnnn')          //  <------ сброс localStorage

		const storedButton = localStorage.getItem('selectedButton')
		if (storedButton) {
			// закомментить, чтобы работать без LocalStorage
			return Array.from(storedButton) // закомментить, чтобы работать без LocalStorage
		} else {
			// закомментить, чтобы работать без LocalStorage
			const numberOfFields = keys.length
			localStorage.setItem('selectedButton', 'nnnnnnnnnnnnnnnnnnnnnnn')
			return new Array(numberOfFields + 1).fill('n')
		} // закомментить, чтобы работать без LocalStorage
	})

	const [answer, setAnswer] = useState(() => {
		const storedAnswer = localStorage.getItem('answer')
		const parsedAnswer = storedAnswer !== null ? storedAnswer : 0
		if (!parsedAnswer) {
			const answerMap = new Map(Object.entries(data))
			answerMap.forEach((value, key) => {
				const type = parseInt(value.trend)
				const points = 0
				answerMap.set(key, { type, points })
			})

			let objAnsw = {}
			for (let item of answerMap.keys()) {
				objAnsw[item] = answerMap.get(item)
			}
			localStorage.setItem('answer', JSON.stringify(objAnsw))
			return answerMap
		} else {
			let parsedMap = new Map()
			let back = parsedAnswer
			for (let prop in back) {
				parsedMap.set(prop, back[prop])
			}
			return parsedMap
		}
	})

	const initialAnswer = new Map(Object.entries(data))
	initialAnswer.forEach((value, key) => {
		const type = parseInt(value.trend)
		const points = 0
		initialAnswer.set(key, { type, points })
	})

	let initialObjAnswer = {}
	for (let item of initialAnswer.keys()) {
		initialObjAnswer[item] = initialAnswer.get(item)
	}

	function sendToServer() {
		fetch(`${URL}/`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json;charset=utf-8',
			},
			body: { answer: '0' },
		})
			.then((resp) => resp)
			.catch((err) => {
				console.log(err?.code)
				console.log('Ошибка в отправке данных на сервер')
			})
	}

	useEffect(() => {
		if (selectedButtons !== Array.from('nnnnnnnnnnnnnnnnnnnnnnn')) {
			// console.log("selected button [selectedButton]")
			localStorage.setItem(
				'selectedButton',
				selectedButtons
					.map((item) => {
						if (item !== 'n') return `${item}`
						else return 'n'
					})
					.join('')
			)
		}
		// console.log(localStorage)
	}, [selectedButtons])

	useEffect(() => {
		let objAnsw = {}
		for (let item of answer.keys()) {
			objAnsw[item] = answer.get(item)
		}

		console.log('initialMap: ', initialObjAnswer)
		if (JSON.stringify(objAnsw) !== JSON.stringify(initialObjAnswer)) {
			localStorage.setItem('answer', JSON.stringify(objAnsw))
			// console.log("selected button [answer]")
			// console.log(localStorage)
		}
	}, [answer])

	function fetchAnswers() {
		let fetchBody = {
			pollid: '',
			templateId: '',
			userId: '',
			answers: {},
		}
		let objItems = Array.from(answer.entries()).map((item, id) => {
			return {
				questionId: id,
				text: '',
				answer: [
					{
						id: id,
						value: `${item[1].points}`,
						image: `${item[1].type}`,
					},
				],
			}
		})
		fetchBody.answers = objItems
		fetch('http://192.168.193.205:5000/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json;charset=utf-8',
			},
			body: fetchBody,
		})
	}

	function handleSend() {
		if (selectedButtons.join('').slice(1).includes('n')) setModalNotAllAns(true)
		else {
			const answer = calcAnswer()
			setFinalAnswer(answer)
			setResult((prev) => !prev)
			fetchAnswers()
		}
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
			<div className="containeer__survey">
				{ModalNotAllAns && (
					<Popup
						notification="Не все вопросы заполнены"
						notificationText="Ответьте на все вопросы"
						handleSub={setModalNotAllAns}
					/>
				)}
				<SurveyHeading />
				<div className={styles.surveyContainer}>
					{!isResult && (
						<>
							{temp}
							<button
								className="survey-btn"
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
							<button className="survey-btn" onClick={handleSend}>
								Отправить
							</button>
						</>
					)}
					{isResult && (
						<Result
							answer={finalAnswer}
							total={[43, 53, 20]}
							names={['один', 'Два', 'Три']}
						/>
					)}
				</div>
			</div>
		)
	}
}

export default SurveyContainer
