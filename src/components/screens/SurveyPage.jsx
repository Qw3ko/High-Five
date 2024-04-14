import React, { useContext } from 'react'
import KeysContext from '../../../context/ValuesKeys'

const Result = () => {
	const { firstKey, secondKey, thirdKey, forthKey, fifthKey, sixthKey } =
		useContext(KeysContext)

	return (
		<div>
			<div>
				<h1>Результаты</h1>
				Эмоциональный истощение: {firstKey}
			</div>
			<div>Деперсонализация: {secondKey}</div>
			<div>Редукция профессиональных достижений : {thirdKey}</div>
		</div>
	)
}

export default Result
