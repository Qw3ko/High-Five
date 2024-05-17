import { Radio, Space } from 'antd'
import { FC, useEffect, useState } from 'react'
import styles from './Survey.module.css'
import './radioStyle.css'
import { IRadio } from './types/IRadio'

const RadioGroup: FC<IRadio> = ({
	setSelectedButtons,
	questId,
	optionsArr,
	setAnswer,
	selectedButtons,
}) => {
	const [value, setValue] = useState(selectedButtons[questId] || null)
	let storedSelectedButtons = []

	useEffect(() => {
		storedSelectedButtons = localStorage.getItem('selectedButtons')
		if (storedSelectedButtons) {
			// setSelectedButtons(JSON.parse(storedSelectedButtons));
		}
	}, [])

	const onChange = (e) => {
		setValue(e.target.value)
		setSelectedButtons((prev) => {
			let newPrev = [...prev]
			newPrev[questId] = e.target.value
			return newPrev
		})
		setAnswer((prev) => {
			let newPrev = structuredClone(prev)
			newPrev.get(`${questId}`).points = e.target.value
			return newPrev
		})
	}

	return (
		<div className={styles.innerQuestion}>
			<Radio.Group
				onChange={onChange}
				value={value}
				// defaultValue={(storedSelectedButtons[questId] === 'n')? 0: parseInt(selectedButtons[questId])}
				value={
					storedSelectedButtons[questId] === 'n'
						? 0
						: parseInt(selectedButtons[questId])
				}
			>
				<Space direction="vertical">
					{optionsArr.map((item) => (
						<Radio
							key={item.points}
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
