import { FC } from 'react'
import styles from './BranchesSearch.module.css'
import CreateBranchModal from './create branch/CreateBranchModal'

const BranchesSearch: FC = () => {
	return (
		<div className={styles.mainContainer}>
			<div className={styles.searchContainer}>
				<div className={styles.branchContainer}>
					<select className={styles.selectBranch}>
						<option>Все</option>
						<option>Активные</option>
						<option>Архивные</option>
					</select>
				</div>
			</div>
			<div className={styles.interactionContainer}>
				<CreateBranchModal />
			</div>
		</div>
	)
}

export default BranchesSearch
