import sendIcon from '@/assets/icons/arrow_right.svg'
import noAvatar from '@/assets/images/noAvatar.svg'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { LOCAL_URL } from 'config/api.config'
import Cookies from 'js-cookie'
import { FC, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { toast } from 'react-toastify'
import { IDialog } from '../../Dialogs/Dialogs.interface'
import styles from '../ChatContainer.module.css'

const ChatBox: FC<{ data: IDialog[] }> = ({ data }) => {
	const location = useLocation()
	const userId = Cookies.get('user')
	const [message, setMessage] = useState('')
	const sendMessage = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		if (message.trim() === '') {
			toast.error('Введите сообщение')
			return
		}
		sendMsg.mutate()
	}

	const sendMsg = useMutation({
		mutationFn: async () => {
			await axios.post(
				LOCAL_URL +
					'/chat/' +
					'bd743040-d003-4579-8a34-1da34db38db9' +
					'/' +
					location.pathname.split('/')[2],
				{
					comment_text: message,
					user: {
						id: 0,
						external_id: userId,
						first_name: 'string',
						last_name: 'string',
						user_group: 'string',
					},
					parent_id: 0,
					anonymous: true,
				}
			)
			setMessage('')
		},
		onError: (error) => {
			toast.error('Ошибка при отправке сообщения:' + error.message)
		},
	})

	return (
		<div className={styles.dialogWindow}>
			<div className={styles.messagesContainer}>
				{data[0].dialogs.map((item) => (
					<div key={item.id}>
						<div className={styles.dateContainer}>
							<div className={styles.date}>
								{new Date(item.date_created).toLocaleString().split(',')[0]}
							</div>
						</div>
						<div className={styles.messageContainer}>
							<div
								className={
									item.user.external_id !== Cookies.get('user')
										? styles.messageWrapperLeft
										: styles.messageWrapperRight
								}
							>
								{item.user.external_id !== Cookies.get('user') ? (
									<>
										<div className={styles.profileImage}>
											<img width={54} height={54} src={noAvatar} />
										</div>
										<div className={styles.message}>
											<div className={styles.messageText}>
												<span>{item.comment_text}</span>
												<span className={styles.time}>
													{
														new Date(item.date_created)
															.toLocaleString()
															.split(',')[1]
													}
												</span>
											</div>
										</div>
									</>
								) : (
									<>
										<div className={styles.myMessage}>
											<div className={styles.messageText}>
												<span className={styles.time}>
													{
														new Date(item.date_created)
															.toLocaleString()
															.split(',')[1]
													}
												</span>
												<span>{item.comment_text}</span>
											</div>
										</div>
										<div className={styles.profileImage}>
											<img width={54} height={54} src={noAvatar} />
										</div>
									</>
								)}
							</div>
						</div>
					</div>
				))}
			</div>
			<div className={styles.inputContainer}>
				<form
					className={styles.formContainer}
					onSubmit={(event) => sendMessage(event)}
				>
					<input
						className={styles.inputMessage}
						type="text"
						value={message}
						placeholder="Сообщение..."
						onChange={(e) => setMessage(e.target.value)}
					/>
					<button className={styles.sendBtn} type="submit">
						<img
							src={sendIcon}
							style={{ marginLeft: '-1px', marginTop: '3px' }}
							width={20}
							height={20}
						/>
					</button>
				</form>
			</div>
		</div>
	)
}

export default ChatBox
