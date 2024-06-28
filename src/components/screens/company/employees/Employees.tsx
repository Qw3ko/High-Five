import { FC } from 'react'
import CompanySearch from '../search bar/CompanySearch'
import styles from './Employees.module.css'
import EmployeesList from './employees list/EmployeesList'

const Employees: FC = () => {
	return (
		<div className={styles.mainContainer}>
			<CompanySearch />
			<EmployeesList />
		</div>
	)
}

export default Employees
