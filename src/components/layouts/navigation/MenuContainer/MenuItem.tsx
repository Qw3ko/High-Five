import cn from 'classnames'
import { FC } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import styles from './Menu.module.css'

interface IMenuLink {
	title: string
	icon: string
	style?: string
	link?: string
}

const MenuItem: FC<IMenuLink> = ({ title, icon, style = '', link }) => {
	const location = useLocation()
	return (
		<li
			className={cn({
				[styles.activeTab]: location.pathname === link,
				[styles.inactivePage]: style.length > 0,
			})}
		>
			<NavLink to={link ? link : ''}>
				<img src={icon} width={25} height={25} />
				<span>{title}</span>
			</NavLink>
		</li>
	)
}

export default MenuItem
