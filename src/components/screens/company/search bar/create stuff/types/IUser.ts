export interface IUser {
	user_id: string
	user_type: string
	login: string
	contact_phone: {
		title: string
		value: string
	}[]
	contact_email: {
		title: string
		value: string
	}[]
	additional_info: {
		position: string
		contractNumber: string
		interests: string
		salary: string
		education: string
		additionalInfo: string
	}
	project_id: string
	organization_id: string
	phone_verified: boolean
	email_verified: boolean
	password: string
}
