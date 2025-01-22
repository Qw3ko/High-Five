import { FC } from 'react'
import chatLogo from '../../../../assets/icons/group.svg'
import homeLogo from '../../../../assets/icons/home.svg'
import companyLogo from '../../../../assets/icons/people.svg'
import statisticsLogo from '../../../../assets/icons/pie-chart.svg'
import surveyLogo from '../../../../assets/icons/report.svg'
import styles from './Menu.module.css'
import MenuItem from './MenuItem'

const Menu: FC<{ role: boolean }> = ({ role }) => {
	return (
		<div className={styles.menu}>
			<ul className={styles.ul}>
				<MenuItem title={'Профиль'} icon={homeLogo} link={'/profile'} />
				{role === true && (
					<MenuItem title={'Компания'} icon={companyLogo} link={'/company'} />
				)}
				<MenuItem title={'Опросы'} icon={surveyLogo} link={'/survey'} />
				<MenuItem title={'Чат'} icon={chatLogo} link={'/chat'} />
				{role === true && (
					<MenuItem
						title={'Отчеты'}
						icon={statisticsLogo}
						link={'/statistics'}
					/>
				)}
			</ul>
		</div>
	)
}

export default Menu
