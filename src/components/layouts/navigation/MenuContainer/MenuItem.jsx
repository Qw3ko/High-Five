import React from 'react'
import MaterialIcon from '../../../ui/MaterialIcon'

const MenuItem = ({ title, icon }) => {
	return (
		<li>
			<a href='/#'>
				<MaterialIcon icon={icon} />
				<span>{title}</span>
			</a>
		</li>
	)
}

export default MenuItem
