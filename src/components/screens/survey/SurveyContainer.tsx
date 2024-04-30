import { FC, useState, useEffect } from 'react'
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

	const [selectedButtons, setSelectedButtons] = useState(() => {
		// localStorage.setItem('selectedButton', 'nnnnnnnnnnnnnnnnnnnnnnn')          //  <------ сброс localStorage

		const storedButton = localStorage.getItem('selectedButton')
		if (storedButton) {                                                                         // закомментить, чтобы работать без LocalStorage
		return Array.from(storedButton)																// закомментить, чтобы работать без LocalStorage
		} else {																					// закомментить, чтобы работать без LocalStorage
		const numberOfFields = keys.length	
		localStorage.setItem('answer', 'nnnnnnnnnnnnnnnnnnnnnnn')													
		return new Array(numberOfFields + 1).fill('n')
		}																							// закомментить, чтобы работать без LocalStorage
	})


	const [answer, setAnswer] = useState(() => {
		const storedAnswer = localStorage.getItem('answer');
		const parsedAnswer = Object.keys((JSON.parse(storedAnswer)).length !== 0) ? JSON.parse(storedAnswer) : 0;
		// console.log(storedAnswer)
		if(!parsedAnswer){
			console.log("sheet, yes")
		const answerMap = new Map(Object.entries(data))
		answerMap.forEach((value, key) => {
			const type = parseInt(value.trend)
			const points = 0
			answerMap.set(key, { type, points })
		})

		let objAnsw = {}
		for(let item of answerMap.keys()){
			objAnsw[item] = answerMap.get(item)
		}

		console.log(objAnsw)
		console.log(JSON.stringify(objAnsw))
		localStorage.setItem('answer', JSON.stringify(objAnsw))
		console.log(localStorage)
		return answerMap
	} else {
		let parsedMap = new Map()
		let back = parsedAnswer
		for(let prop in back){
			parsedMap.set(prop, back[prop])
		}
		return parsedMap
	}
	})
	console.log("answer: ", answer)

	const initialAnswer = new Map(Object.entries(data))
	initialAnswer.forEach((value, key) => {
		const type = parseInt(value.trend)
		const points = 0
		initialAnswer.set(key, { type, points })})

	let initialObjAnswer = {}
		for(let item of initialAnswer.keys()){
			initialObjAnswer[item] = initialAnswer.get(item)
		}

 
	

	// useEffect(()=>{}, [answer])

	useEffect(() => {
		if(selectedButtons !== Array.from('nnnnnnnnnnnnnnnnnnnnnnn')){
			console.log("selected button [selectedButton]")
			localStorage.setItem('selectedButton', (selectedButtons.map(item => {if(item !== 'n') return`${item}`; else return "n"})).join(''))
		}
		console.log(localStorage)
	}, [selectedButtons]) 


	useEffect(() => {

		let objAnsw = {}
		for(let item of answer.keys()){
			objAnsw[item] = answer.get(item)
		}

		console.log("initialMap: ", initialObjAnswer)
		if(JSON.stringify(objAnsw) !== JSON.stringify(initialObjAnswer)){
			console.log("yes")
			localStorage.setItem('answer', JSON.stringify(objAnsw))
			console.log("selected button [answer]")
			console.log(localStorage)
		}

	}, [answer])


	useEffect(()=>{
		fetch('', {
			method: "GET",
			headers: {
				'Content-Type': 'application/json;charset=utf-8'
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
			<div className="containeer__survey">
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
