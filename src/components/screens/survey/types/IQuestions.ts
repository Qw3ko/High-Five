export type IQuestions = {
	question: {
		name: string
		trend: number
		options: {
			name: string
			points: number
		}[]
	}
}
