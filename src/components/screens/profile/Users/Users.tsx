import { FC } from 'react'
import styles from '../Profile.module.css'
import { SlArrowRight } from 'react-icons/sl'

const Users: FC = () => {
	return (
		<>
			<input placeholder='Поиск' className={styles.usersSearchBar}></input>
			<div className={styles.users}>
				<div className={styles.userItem}>
					<div className={styles.userImage}>
						<div className={styles.profileImage}></div>
					</div>
					<div className={styles.userInfo}>
						<div className={styles.userName}>Курятова Карина</div>
						<div className={styles.userOccupation}>Проектный менеджер</div>
					</div>
					<div className={styles.userInteractions}>
						<div className={styles.userNewMeeting}>
							<div className={styles.icon}></div>
						</div>
						<div className={styles.userChat}>Встреча</div>
						<div className={styles.userArrow}>
							<SlArrowRight width={12.67} height={12.67} />
						</div>
					</div>
				</div>
				<div className={styles.userItem}>
					<div className={styles.userImage}>
						<div className={styles.profileImage2}></div>
					</div>
					<div className={styles.userInfo}>
						<div className={styles.userName}>Реутова Ксения</div>
						<div className={styles.userOccupation}>Маркетолог</div>
					</div>
					<div className={styles.userInteractions}>
						<div className={styles.userNewMeeting}>
							<div className={styles.icon}></div>
						</div>
						<div className={styles.userChat}>Встреча</div>
						<div className={styles.userArrow}>
							<SlArrowRight width={12.67} height={12.67} />
						</div>
					</div>
				</div>
				<div className={styles.userItem}>
					<div className={styles.userImage}>
						<div className={styles.profileImage3}></div>
					</div>
					<div className={styles.userInfo}>
						<div className={styles.userName}>Лисовская Анастасия</div>
						<div className={styles.userOccupation}>Frontend разработчик</div>
					</div>
					<div className={styles.userInteractions}>
						<div className={styles.userNewMeeting}>
							<div className={styles.icon}></div>
						</div>
						<div className={styles.userChat}>Встреча</div>
						<div className={styles.userArrow}>
							<SlArrowRight width={12.67} height={12.67} />
						</div>
					</div>
				</div>
				<div className={styles.userItem}>
					<div className={styles.userImage}>
						<div className={styles.profileImage4}></div>
					</div>
					<div className={styles.userInfo}>
						<div className={styles.userName}>Банников Арсений</div>
						<div className={styles.userOccupation}>Frontend разработчик</div>
					</div>
					<div className={styles.userInteractions}>
						<div className={styles.userNewMeeting}>
							<div className={styles.icon}></div>
						</div>
						<div className={styles.userChat}>Встреча</div>
						<div className={styles.userArrow}>
							<SlArrowRight width={12.67} height={12.67} />
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Users
