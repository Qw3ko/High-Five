import React from 'react'
import styles from './Menu.module.css'
import MenuItem from './MenuItem'

const Menu = () => {
	return (
		<div className={styles.menu}>
			<ul className={styles.ul}>
				<MenuItem title={'Профиль'} icon={'PiHouseBold'} />
				<MenuItem title={'Опросы'} icon={'PiClipboardText'} />
				<MenuItem title={'Рекомендации'} icon={'PiCheckCircle'} />
				<MenuItem title={'Чат'} icon={'PiChatTeardropDotsThin'} />
				<MenuItem title={'Настройки'} icon={'PiGearSix'} />
				<MenuItem title={'Помощь'} icon={'PiQuestion'} />
			</ul>
		</div>
	)
}

export default Menu
