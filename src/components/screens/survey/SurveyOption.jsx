import React, { useEffect, useState } from 'react'
import styles from './Survey.module.css'

const SurveyOption = ({
	type,
	id,
	name,
	value,
	point,
	response,
	setResponse,
}) => {
	const [answerId, setAnswerId] = useState('')
	const [answer, setAnswer] = useState({ questionId: id, answer: [] })

	useEffect(() => {
		if (answerId !== '') {
			setAnswer({ ...answer, answer: [{ point: point }] })
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [answerId])

	useEffect(() => {
		const matchIndex = response.findIndex(
			(el) => el.questionId === answer.questionId
		)
		if (answer.answer.length > 0) {
			if (response.length === 0 || matchIndex < 0) {
				setResponse([...response, answer])
				console.log(answer)
			} else {
				const newResponse = response.map((el) => {
					if (el.questionId === answer.questionId) {
						el = answer
					}
					return el
				})
				setResponse(newResponse)
				console.log(newResponse)
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [answer])

	return (
		<div className={styles.questionOption}>
			<input
				className={styles.customCheckbox}
				required={true}
				type={type}
				id={id}
				name={name}
				value={value}
				onChange={(e) => {
					setAnswerId(e.target.id)
				}}
			/>
			<label htmlFor={id} className={styles.value}>
				<span style={{ marginLeft: '10px' }}>{value}</span>
			</label>
		</div>
	)
}

export default SurveyOption
