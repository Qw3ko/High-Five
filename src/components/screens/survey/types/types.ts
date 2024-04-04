export type Answer = {
	id: string
	value: string | number | null
}

export type Answers = {
	questionId: string | number | undefined
	text: string
	answer: Answer[]
}
