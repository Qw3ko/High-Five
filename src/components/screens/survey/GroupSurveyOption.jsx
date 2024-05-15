import RadioGroup from './RadioGroup'

const GroupSurveyOption = ({
	options,
	questId,
	// keyGroup,
	answer,
	setAnswer,
	selectedButtons,
	setSelectedButtons,
}) => {
	const optionsMap = new Map(Object.entries(options))

	let optionsArr = []
	for (let item of optionsMap.keys()) {
		optionsArr.push(optionsMap.get(`${item}`))
	}

	return (
		<div>
			<RadioGroup
				optionsArr={optionsArr}
				questId={questId}
				selectedButtons={selectedButtons}
				setSelectedButtons={setSelectedButtons}
				answer={answer}
				setAnswer={setAnswer}
			/>
		</div>
	)
}
export default GroupSurveyOption
