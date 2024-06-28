import { IEmployee } from '@/components/screens/company/employees/employees list/EmployeesList.interface'
import axios from 'axios'
import { ORGANIZATION_URL, USERS_URL } from 'config/api.config'

export const CompanyService = {
	async getUsersByCompanyId(companyId: string) {
		return axios.get<IEmployee[]>(
			USERS_URL + '/users?organization_id=' + companyId
		)
	},
	async getUserById(id: string) {
		return axios.get<IEmployee>(USERS_URL + '/user/' + id)
	},
	async getBranchesByCompanyId(companyId: string) {
		return axios.get(ORGANIZATION_URL + '/teams?organization_id=' + companyId)
	},
	async getPositionsByProjectId(projectId: string) {
		return axios.get(ORGANIZATION_URL + '/specialties?project_id=' + projectId)
	},
	async DeleteUserById(id: string) {
		return axios.delete(USERS_URL + '/user/' + id)
	},
}
