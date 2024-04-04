import React from 'react'
import styles from './Menu.module.css'
import MenuItem from './MenuItem'

const Menu = () => {
	return (
		<div className={styles.menu}>
			<ul className={styles.ul}>
				<MenuItem style={styles.inactive} title={'Профиль'} icon={'PiHouseBold'} />
				<MenuItem  title={'Опросы'} icon={'PiClipboardText'} />
				<MenuItem style={styles.inactive} title={'Рекомендации'} icon={'PiCheckCircle'} />
				<MenuItem style={styles.inactive} title={'Чат'} icon={'PiChatTeardropDotsThin'} />
				<MenuItem style={styles.inactive} title={'Настройки'} icon={'PiGearSix'} />
				<MenuItem style={styles.inactive} title={'Помощь'} icon={'PiQuestion'} />
			</ul>
		</div>
	)
}

export default Menu
