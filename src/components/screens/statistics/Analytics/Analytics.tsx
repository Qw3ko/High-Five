// import <CChart> from '@cu'

import ReportDiv from './ReportDiv'

const Analytics = () => {
	return (
		<div className='FirstTab'>
			<div
				className='report__section'
				style={{ height: '140px', marginBottom: '40px' }}
			>
				<ReportDiv label='Средний балл выгорания' width='146px' height='139px'>
					<p>Hi</p>
				</ReportDiv>
				<ReportDiv label='Аналитика по филиалам' width='442px' height='139px'>
					<p>Hi</p>
				</ReportDiv>
				<ReportDiv
					label='Аналитика по должностной категории'
					width='442px'
					height='139px'
				>
					<p>Hi</p>
				</ReportDiv>
			</div>

			<div className='report__section' style={{ height: '279px' }}>
				<ReportDiv label='Сравнительный анализ' width='628px' height='279px'>
					<p>Hi</p>
				</ReportDiv>
				<ReportDiv
					label='Аналитика по стажу работы'
					width='201px'
					height='279px'
				>
					<p>Hi</p>
				</ReportDiv>
				<ReportDiv label='Аналитика по фазам' width='201px' height='279px'>
					<>
						<div className='inner__repoprt__div'>
							<p>Истощение</p>
							<p style={{ marginLeft: 'auto' }}>54</p>
							<p>Деперсонализация</p>
							<p style={{ marginLeft: 'auto' }}>12</p>
							<p>Редукция</p>
							<p style={{ marginLeft: 'auto' }}></p>
						</div>
					</>
				</ReportDiv>
			</div>
		</div>
	)
}

export default Analytics
