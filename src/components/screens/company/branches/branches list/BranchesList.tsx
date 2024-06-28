import { CompanyService } from '@/services/company/company.service'
import { useQuery } from '@tanstack/react-query'
import { FC } from 'react'
import deleteBtnIcon from '../../../../../assets/icons/delete.svg'
import changeBtnIcon from '../../../../../assets/icons/pen.svg'
import { IBranches } from './BranchesList.interface'
import styles from './BranchesList.module.css'

const BranchesList: FC = () => {
	const { isLoading, data } = useQuery({
		queryKey: ['branches'],
		queryFn: () =>
			CompanyService.getBranchesByCompanyId(
				'bd743040-d003-4579-8a34-1da34db38db9'
			),
	})

	const branchesData = data?.data

	return (
		<div className={styles.mainContainer}>
			{isLoading ? (
				<div>Loading...</div>
			) : (
				branchesData?.map((branch: IBranches) => (
					<div key={branch.team_id} className={styles.branchItem}>
						<div className={styles.branchInfo}>
							<span className={styles.header}>{branch.title.ru}</span>
							<span className={styles.subHeader}>
								{branch.additional_info.address}
							</span>
							<span className={styles.subHeader}>
								{branch.additional_info.stuffAmount} человек
							</span>
						</div>
						<div className={styles.branchInteraction}>
							<button style={{ marginRight: '10px' }} className={styles.btn}>
								<img src={changeBtnIcon} className={styles.img} />
							</button>
							<button className={styles.btn}>
								<img src={deleteBtnIcon} className={styles.img} />
							</button>
						</div>
					</div>
				))
			)}
			{branchesData?.length === 0 && <div>Филиалов нет</div>}
		</div>
	)
}

export default BranchesList
