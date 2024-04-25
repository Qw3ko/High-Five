import styles from './Menu.module.css'
import MenuItem from './MenuItem'

const Menu = ({ role }) => {
	return (
		<div className={styles.menu}>
			<ul className={styles.ul}>
				<MenuItem title={'Профиль'} icon={'PiHouseBold'} link={'/profile'} />
				{role === true && (
					<MenuItem
						style={styles.inactive}
						title={'Компания'}
						icon={'PiUserBold'}
						link={'/*'}
					/>
				)}
				<MenuItem title={'Опросы'} icon={'PiClipboardText'} link={'/survey'} />
				{role === true && (
					<MenuItem
						style={styles.inactive}
						title={'Шаблоны'}
						icon={'PiListBulletsBold'}
						link={'/*'}
					/>
				)}
				<MenuItem
					style={styles.inactive}
					title={'Рекомендации'}
					icon={'PiCheckCircle'}
					link={'/*'}
				/>
				<MenuItem
					style={styles.inactive}
					title={'Чат'}
					icon={'PiChatTeardropDotsThin'}
					link={'/*'}
				/>
				{role === true && (
					<MenuItem
						title={'Отчеты'}
						icon={'PiChartPieSlice'}
						link={'/statistics'}
					/>
				)}
				{role === true && (
					<MenuItem
						style={styles.inactive}
						title={'История'}
						icon={'PiSkipBackLight'}
						link={'/*'}
					/>
				)}
				<MenuItem
					style={styles.inactive}
					title={'Настройки'}
					icon={'PiGearSix'}
					link={'/*'}
				/>
				<MenuItem
					style={styles.inactive}
					title={'Помощь'}
					icon={'PiQuestion'}
					link={'/*'}
				/>
			</ul>
		</div>
	)
}

export default Menu
