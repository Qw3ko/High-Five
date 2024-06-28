export interface IProfile {
	profile_id: string
	profile_type: string
	first_name: string
	last_name: string
	middle_name: string
	birth_date: string
	sex: string
	contact_phone: {
		title: string
		value: string
	}[]
	contact_email: {
		title: string
		value: string
	}[]
	photo_main: string
	photo_small: string
	project_info: {
		field1: string
		field2: string
		field3: string
	}
	account_id: string
	project_id: string
}
