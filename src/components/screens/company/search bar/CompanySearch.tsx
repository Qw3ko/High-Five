import { CompanyService } from '@/services/company/company.service'
import { useQuery } from '@tanstack/react-query'
import { FC } from 'react'
import linkIcon from '../../../../assets/icons/link.svg'
import { IBranches } from '../branches/branches list/BranchesList.interface'
import styles from './CompanySearch.module.css'
import { IPosition } from './IPosition.interface'
import ModalCreateEmployee from './create stuff/ModalCreateEmployee'

const CompanySearch: FC = () => {
	const { data: branchesData } = useQuery({
		queryKey: ['branches'],
		queryFn: () =>
			CompanyService.getBranchesByCompanyId(
				'bd743040-d003-4579-8a34-1da34db38db9'
			),
	})

	const { data: positionsData } = useQuery({
		queryKey: ['positions'],
		queryFn: () =>
			CompanyService.getPositionsByProjectId(
				'53a196e9-b121-4c69-bf45-8cfec561d244'
			),
	})

	return (
		<div className={styles.mainContainer}>
			<div className={styles.searchContainer}>
				<div className={styles.branchContainer}>
					<select className={styles.selectBranch}>
						<option value="Все филиалы">Все филиалы</option>
						{branchesData?.data.map((branch: IBranches) => (
							<option key={branch.team_id} value={branch.title.ru}>
								{branch.title.ru}
							</option>
						))}
					</select>
				</div>
				<div className={styles.positionContainer}>
					<select className={styles.selectBranch}>
						<option value="Должность">Все должности</option>
						{positionsData?.data.map((position: IPosition) => (
							<option key={position.specialty_id} value={position.description}>
								{position.description}
							</option>
						))}
					</select>
				</div>
			</div>
			<div className={styles.interactionContainer}>
				<button className={styles.btn}>
					<img src={linkIcon} />
				</button>
				<ModalCreateEmployee />
			</div>
		</div>
	)
}

export default CompanySearch
