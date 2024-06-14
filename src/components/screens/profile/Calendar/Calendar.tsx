import { endOfWeek, isWithinInterval, startOfWeek } from 'date-fns'
import { ru } from 'date-fns/locale'
import { FC } from 'react'
import { DayPicker, Row, RowProps } from 'react-day-picker'

import 'react-day-picker/dist/style.css'

function CurrentWeekRow(props: RowProps) {
	const isDateInCurrentWeek = (dateToCheck: Date) => {
		const today = new Date()
		const start = startOfWeek(today)
		const end = endOfWeek(today)
		return isWithinInterval(dateToCheck, { start, end })
	}
	const isNotCurrentWeek = props.dates.every(
		(date) => !isDateInCurrentWeek(date)
	)
	if (isNotCurrentWeek) return <></>
	return <Row {...props} />
}

const customFont = {
	fontFamily: 'Raleway',
	fontSize: '25px',
	fontWeight: '400',
	lineHeight: '23.48px',
	color: '#474168',
}

const headCell = {
	fontFamily: 'Raleway',
	fontSize: '16px',
	fontWeight: '400',
	lineHeight: '18.78px',
	color: '#474168',
}

const weekNumber = {
	fontFamily: 'Raleway',
	fontSize: '15px',
	fontWeight: '400',
	lineHeight: '14.09px',
	color: '#474168',
}

const Calendar: FC = () => {
	return (
		<DayPicker
			components={{ Row: CurrentWeekRow }}
			styles={{
				caption_label: customFont,
				head_cell: headCell,
				cell: weekNumber,
			}}
			showOutsideDays
			locale={ru}
			mode="single"
			disableNavigation={true}
		/>
	)
}

export default Calendar
