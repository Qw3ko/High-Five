import { CompanyService } from '@/services/company/company.service'
import { useQuery } from '@tanstack/react-query'
import { FC } from 'react'
import EmployeesItem from './EmployeeItem'

const EmployeesList: FC = () => {
	const { isLoading, data } = useQuery({
		queryKey: ['employees'],
		queryFn: () =>
			CompanyService.getUsersByCompanyId(
				'bd743040-d003-4579-8a34-1da34db38db9'
			),
	})

	const employeesData = data?.data

	return (
		<div>
			<EmployeesItem isLoading={isLoading} employeesData={employeesData} />
		</div>
	)
}

export default EmployeesList
