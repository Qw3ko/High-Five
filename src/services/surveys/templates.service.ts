import axios from 'axios'
import { EXTERNAL_URL } from '../../config/api.config'
import { ITemplate } from '../surveys/../../components/screens/survey/types/ITemplate'

export const TemplateService = {
	async getById(id: string) {
		return axios.get<ITemplate>(EXTERNAL_URL + `/templates/` + id)
	},
}
