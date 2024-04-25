import styles from './Survey.module.css'
import GroupSurveyOption from './GroupSurveyOption'

const SurveyQuestion = ({
	answer,
	setAnswer,
	name,
	options,
	questId,
	keyQuest,
	selectedButtons,
	setSelectedButtons,
}) => {
	const optionsMap = new Map(Object.entries(options))
	let optionsArr = []

	for (let item of optionsMap.keys()) {
		optionsArr.push(optionsMap.get(item))
	}
	return (
		<div className={styles.container}>
			<span className={styles.heading}>{name}</span>
			<div>
				{
					<GroupSurveyOption
						options={options}
						questId={questId}
						setAnswer={setAnswer}
						answer={answer}
						keyGroup={keyQuest}
						selectedButtons={selectedButtons}
						setSelectedButtons={setSelectedButtons}
					/>
				}
			</div>
			<span className={styles.footerText}>
				*Этот вопрос является обязательным
			</span>
		</div>
	)
}

export default SurveyQuestion
