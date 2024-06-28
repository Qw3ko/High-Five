import { FC } from 'react'
import styles from './Branches.module.css'
import BranchesList from './branches list/BranchesList'
import BranchesSearch from './branches nav/BranchesSearch'

const Branches: FC = () => {
	return (
		<div className={styles.mainContainer}>
			<BranchesSearch />
			<BranchesList />
		</div>
	)
}

export default Branches
