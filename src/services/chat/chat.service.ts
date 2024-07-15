import { IMessage } from '@/components/screens/chat/ChatContainer/ChatBox/Message.interface'
import { IDialog } from '@/components/screens/chat/Dialogs/Dialogs.interface'
import axios from 'axios'
import { LOCAL_URL } from 'config/api.config'

export const ChatService = {
	async getHrDialogs(companyId: string) {
		return axios.get<IDialog[]>(
			LOCAL_URL + '/chat/' + companyId + '?presentation=--&scope=--'
		)
	},
	async getChat(companyId: string, userId: string) {
		return axios.get<IDialog[]>(
			LOCAL_URL +
				'/chat/' +
				companyId +
				'/' +
				userId +
				'/?presentation=--&scope=--'
		)
	},
	async postChat(companyId: string, userId: string) {
		return axios.post<IMessage>(LOCAL_URL + '/chat/' + companyId + '/' + userId)
	},
}
