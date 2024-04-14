export type Answer = {
	id: string
	value: string | number | null
}

export type Answers = {
	questionId: string | number | undefined
	text: string
	answer: Answer[]
}

export type Question = {
	id: string | number
	text: string
	description: string | null
	type: string
	required: boolean
	defaultValue?: string | null
	toggle?: boolean
	role?: string | null
	options:
		| null
		| {
				value: string
				id: string
		  }[]
}
