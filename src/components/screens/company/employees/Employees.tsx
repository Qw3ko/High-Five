import Loading from '@/components/layouts/Loading'
import { FC, Suspense } from 'react'
import CompanySearch from '../search bar/CompanySearch'
import styles from './Employees.module.css'
import EmployeesList from './employees list/EmployeesList'

const Employees: FC = () => {
	return (
		<div className={styles.mainContainer}>
			<Suspense fallback={<Loading />}>
				<CompanySearch />
				<EmployeesList />
			</Suspense>
		</div>
	)
}

export default Employees
