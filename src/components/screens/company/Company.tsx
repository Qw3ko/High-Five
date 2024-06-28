import { FC } from 'react'
import styles from './Company.module.css'
import CompanyNavigation from './company navigation/CompanyNavigation'

const Company: FC = () => {
	return (
		<div className={styles.mainContainer}>
			<CompanyNavigation />
		</div>
	)
}

export default Company
