import { FC } from 'react'
import searchIcon from '../../../../../assets/icons/search.svg'
import { IDialog } from '../../Dialogs/Dialogs.interface'
import styles from '../ChatContainer.module.css'
import DialogModal from './DialogModal'

const ChatHeader: FC<{ data: IDialog[] }> = ({ data }) => {
	return (
		<div className={styles.headerContainer}>
			<span className={styles.headerText}>{data[0].chatName}</span>
			<div className={styles.interactionContainer}>
				<DialogModal />
				<button className={styles.searchBtn}>
					<img src={searchIcon} width={19} height={19} />
				</button>
			</div>
		</div>
	)
}

export default ChatHeader
