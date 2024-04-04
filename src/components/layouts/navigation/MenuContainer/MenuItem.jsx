import React from 'react'
import MaterialIcon from '../../../ui/MaterialIcon'

const MenuItem = ({ title, icon, style = '' }) => {
	return (
		<li>
			<a className={style} href='/#'>
				<MaterialIcon icon={icon} />
				<span>{title}</span>
			</a>
		</li>
	)
}

export default MenuItem
