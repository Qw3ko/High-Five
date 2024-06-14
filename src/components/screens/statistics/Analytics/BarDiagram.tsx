import { BarChart } from '@mui/x-charts/BarChart'

export default function BarsDiagram(props: any) {
	return (
		<BarChart
			series={[
				{ data: [3, 4, 1], stack: 'A', label: 'Москва', color: '#dae8e3' },
				{
					data: [4, 3, 1],
					stack: 'B',
					label: 'Санкт-Петербург',
					color: '#f2f1e1',
				},
				{ data: [4, 2, 5], stack: 'C', label: 'Москва', color: '#dbd8e8' },
			]}
			xAxis={[{ scaleType: 'band', data: ['A', 'B', 'C'] }]}
			width={props.width}
			height={props.height}
			grid={{ vertical: true, horizontal: true }}
			slotProps={{
				legend: {
					direction: 'row',
					position: { vertical: 'bottom', horizontal: 'middle' },
					padding: 0,
				},
			}}
		/>
	)
}
