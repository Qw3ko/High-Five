import cn from 'classnames'
import { NavLink, useLocation } from 'react-router-dom'
import MaterialIcon from '../../../ui/MaterialIcon'
import styles from './Menu.module.css'

const MenuItem = ({ title, icon, style = '', link }) => {
	const location = useLocation()
	return (
		<li
			className={cn({
				[styles.active]: location === link,
			})}
		>
			<NavLink className={style} to={link}>
				<MaterialIcon icon={icon} />
				<span>{title}</span>
			</NavLink>
		</li>
	)
}

export default MenuItem
