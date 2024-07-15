export interface IEmployee {
	user_id: string
	user_type: string
	user_code: string
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
		access: string
		branch: string
		gender: string
		salary: string
		isAdmin: boolean
		position: string
		education: string
		interests: string
		last_name: string
		work_from: string
		birth_date: string
		first_name: string
		additionalInfo: string
		contractNumber: string
		formCompleteness: string
	}
	email_verified: boolean
	phone_verified: boolean
	project_id: string
	organization_id: string
}
