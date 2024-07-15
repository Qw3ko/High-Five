export interface IMessage {
	comment_text: string
	user: {
		id: number
		external_id: string
		first_name: string
		last_name: string
		user_group: string
	}
	parent_id: number
	anonymous: boolean
}
