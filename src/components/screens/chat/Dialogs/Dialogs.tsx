import noAvatar from '@/assets/images/noAvatar.svg'
import { ChatService } from '@/services/chat/chat.service'
import { CompanyService } from '@/services/company/company.service'
import { useQuery } from '@tanstack/react-query'
import Cookies from 'js-cookie'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import loadingGif from '../../../../assets/images/loading.gif'
import { IDialog } from './Dialogs.interface'
import styles from './Dialogs.module.css'

const Dialogs: FC = () => {
	const userId = Cookies.get('user')
	let data: IDialog[] = []
	const { isLoading, data: dataForHr } = useQuery({
		queryKey: ['dialogs'],
		queryFn: () =>
			ChatService.getHrDialogs('bd743040-d003-4579-8a34-1da34db38db9'),
		select: (data) => data && data.data,
	})

	const currentUser = useQuery({
		queryKey: ['user'],
		queryFn: async () => {
			if (userId) {
				return await CompanyService.getUserById(userId)
			}
			return null
		},
		select: (data) => data && data.data,
		enabled: !!userId,
	})

	const roleCheck = currentUser.data?.additional_info.isAdmin

	const dataForUser = useQuery({
		queryKey: ['getHr'],
		queryFn: async () => {
			if (currentUser.data) {
				return await ChatService.getChat(
					'bd743040-d003-4579-8a34-1da34db38db9',
					currentUser.data.user_id
				)
			}
			return null
		},
		select: (data) => data && data.data,
		enabled: !!currentUser,
	})

	if (roleCheck === false) {
		if (dataForUser.data) {
			data = dataForUser.data
		}
	} else {
		if (dataForHr) {
			data = dataForHr
		}
	}

	return (
		<div className={styles.mainContainer}>
			<div className={styles.chatList}>
				<div className={styles.sortHeader}>Все сообщения</div>
				{isLoading ? (
					<div className={styles.loadingContainer}>
						<img width={301} height={262} src={loadingGif} />
						<div>Загрузка...</div>
					</div>
				) : data.length <= 0 ? (
					<Link to={String(userId)}>
						<div className={styles.chatItem}>
							<div className={styles.profileImage}>
								<img src={noAvatar} width={70} height={70} />
							</div>
							<div className={styles.chatInfo}>
								<span className={styles.chatName}>Свободный разговор</span>
								<span className={styles.lastMessage}></span>
							</div>
							<div className={styles.chatFooter}>
								<div className={styles.chatTime}></div>
								{/* <div className={styles.unreadMessage}></div> */}
							</div>
						</div>
					</Link>
				) : (
					data?.map((item: IDialog) => (
						<Link
							key={item.dialogs[0].user.external_id}
							to={String(item.dialogs[0].user.external_id)}
						>
							<div className={styles.chatItem}>
								<div className={styles.profileImage}>
									<img src={noAvatar} width={70} height={70} />
								</div>
								<div className={styles.chatInfo}>
									<span className={styles.chatName}>{item.chatName}</span>
									<span className={styles.lastMessage}>{item.lastMessage}</span>
								</div>
								<div className={styles.chatFooter}>
									<div className={styles.chatTime}>
										{new Date(item.lastMessageDate)
											.toLocaleString()
											.split(',')[1]
											.slice(0, 6)}
									</div>
									{/* <div className={styles.unreadMessage}></div> */}
								</div>
							</div>
						</Link>
					))
				)}
			</div>
		</div>
	)
}

export default Dialogs
