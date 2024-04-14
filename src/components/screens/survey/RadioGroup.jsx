import { Radio, Space } from 'antd'
import { useState } from 'react'
import styles from './Survey.module.css'
import './radioStyle.css'

const RadioGroup = ({
	setSelectedButtons,
	selectedButtons,
	questId,
	optionsArr,
	answer,
	setAnswer,
}) => {
	const [value, setValue] = useState(null)
	const onChange = e => {
		setValue(e.target.value)
		setSelectedButtons(prev => {
			let newPrev = [...prev]
			newPrev[questId] = e.target.value
			return newPrev
		})
		setAnswer(prev => {
			let newPrev = structuredClone(prev)
			newPrev.get(`${questId}`).points = e.target.value
			return newPrev
		})
	}

	return (
		<div className={styles.innerQuestion}>
			<Radio.Group onChange={onChange} value={value}>
				<Space direction='vertical'>
					{optionsArr.map(item => (
						<Radio
							value={item.points}
							style={{ color: '#474168', fontSize: '20px' }}
						>
							{item.name}
						</Radio>
					))}
				</Space>
			</Radio.Group>
		</div>
	)
}
export default RadioGroup
