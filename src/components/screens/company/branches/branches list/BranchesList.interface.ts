export interface IBranches {
	team_id: string
	team_type: string
	title: {
		en: string
		ru: string
	}
	description: string
	additional_info: {
		address: string
		stuffAmount: string
	}
	organization_id: string
	project_id: string
}
