export interface IDialog {
	chatName: string
	lastMessage: string
	lastMessageDate: string
	employeeLastCheck: string
	hrLastCheck: string
	isAnonymous: string
	dialogs: {
		id: number
		level: number
		comment_text: string
		date_created: string
		date_modified: string
		is_deleted: boolean
		scope: string
		user: {
			id: number
			external_id: string
			first_name: string
			last_name: string
			user_group: string
		}
	}[]
}
