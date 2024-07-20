import { ChatService } from '@/services/chat/chat.service'
import { useQuery } from '@tanstack/react-query'
import { FC } from 'react'
import { useLocation } from 'react-router-dom'
import loadingGif from '../../../../assets/images/loading.gif'
import { IDialog } from '../Dialogs/Dialogs.interface'
import ChatBox from './ChatBox/ChatBox'
import styles from './ChatContainer.module.css'
import ChatHeader from './ChatHeader/ChatHeader'
import ChatInfo from './ChatInfo/ChatInfo'

const ChatContainer: FC = () => {
	const location = useLocation()

	const chatId = location.pathname.split('/')[2]

	let data: IDialog[] = []

	const { isLoading, data: queryData } = useQuery({
		queryKey: ['dialogs'],
		queryFn: () =>
			ChatService.getChat('bd743040-d003-4579-8a34-1da34db38db9', chatId),
		select: (data) => data.data,
		refetchInterval: 1000,
	})

	if (queryData !== undefined) {
		data = queryData
	}

	return (
		<div className={styles.mainContainer}>
			{isLoading ? (
				<div className={styles.loadingContainer}>
					<img width={301} height={262} src={loadingGif} />
					<div>Загрузка...</div>
				</div>
			) : (
				<div>
					{data ? (
						<>
							<ChatHeader data={data} />
							<div className={styles.chatContainer}>
								<ChatBox data={data} />
								<ChatInfo data={data} />
							</div>
						</>
					) : null}
				</div>
			)}
		</div>
	)
}

export default ChatContainer
