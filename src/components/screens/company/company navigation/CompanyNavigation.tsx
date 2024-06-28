import { FC, useState } from 'react'
import TabContent from '../../statistics/Tabs/TabContent'
import TabNavItem from '../../statistics/Tabs/TabNavItem'
import Branches from '../branches/Branches'
import Employees from '../employees/Employees'
import styles from './Navigation.module.css'

const CompanyNavigation: FC = () => {
	const [activeTab, setActiveTab] = useState('tab1')
	return (
		<div className={styles.wrapper__tabs__reports}>
			<div className={styles.wrapper__report__nav}>
				<ul className="nav">
					<TabNavItem
						title="Сотрудники"
						id="tab1"
						activeTab={activeTab}
						setActiveTab={setActiveTab}
					/>
					<TabNavItem
						title="Филиалы и города"
						id="tab2"
						activeTab={activeTab}
						setActiveTab={setActiveTab}
					/>
				</ul>
			</div>
			<div className="main__tabs">
				<div className="outlet">
					<TabContent id="tab1" activeTab={activeTab}>
						<Employees />
					</TabContent>
					<TabContent id="tab2" activeTab={activeTab}>
						<Branches />
					</TabContent>
				</div>
			</div>
		</div>
	)
}

export default CompanyNavigation
