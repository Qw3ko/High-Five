import MaterialIcon from '../../../ui/MaterialIcon'

const MenuItem = ({ title, icon, style = '', link }) => {
	return (
		<li>
			<a className={style} href={link}>
				<MaterialIcon icon={icon} />
				<span>{title}</span>
			</a>
		</li>
	)
}

export default MenuItem
