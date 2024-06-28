import { Radio, RadioChangeEvent, Space } from 'antd'
import { FC, useEffect, useState } from 'react'
import './radioStyle.css'

const RadioComponent: FC<{
	gender: (gender: string) => void
	employeeGender?: string | null
}> = ({ gender, employeeGender = null }) => {
	const [checked, setChecked] = useState<string | null>(employeeGender)

	useEffect(() => {
		setChecked(employeeGender)
	}, [employeeGender])

	const onChange = (e: RadioChangeEvent) => {
		setChecked(e.target.value)
		gender(e.target.value)
	}

	return (
		<div>
			<Radio.Group onChange={onChange} value={checked}>
				<Space direction="horizontal">
					<Radio
						required
						style={{ color: '#474168', fontSize: '16px' }}
						value={'male'}
					>
						Мужской
					</Radio>
					<Radio
						required
						style={{ color: '#474168', fontSize: '16px' }}
						value={'female'}
					>
						Женский
					</Radio>
				</Space>
			</Radio.Group>
		</div>
	)
}

export default RadioComponent
