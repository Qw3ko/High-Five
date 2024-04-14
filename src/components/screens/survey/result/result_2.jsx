// import KeysContext from '../../../context/ValuesKeys'
import './result.css'

const Result = ({ answer }) => {
	console.log('answ: ', answer)
	const result = Array.from(answer.keys())
	console.log(result)
	console.log(answer.get(result[0]))

	return (
		<div className='main__result'>
			<h1>Рекомендации опроса</h1>
			<hr />
			<div className='wrapper__data'>
				<div className='wrapper__inner__data'>
					<div className='result__data'>
						<div>
							<h2>Дата: 23.09.2024</h2>
							<h3>Результат: 40%</h3>
						</div>
						<div>
							<h2>
								Результат: {} из {}
							</h2>
							<h3>Конфиденциальность: анонимно</h3>
						</div>
					</div>
					<div className='result__solution'>
						<ul className='results__ul'>
							<li>
								<h3>Эмоциональное истощение {answer.get(result[0])} из 54</h3>
								<p>
									Показывает на сколько человек становится менее эмоционально
									отзывчивым, чувствует усталость и равнодушие, теряет интерес к
									окружающим и работе
								</p>
							</li>
							<li>
								<h3>Деперсонализация {answer.get(result[1])} из 30</h3>
								<p>
									Проявляется в отчуждении своих эмоций и безразличном отношении
									к профессиональным обязанностям, а также в раздражительности и
									цинизме к окружающим
								</p>
							</li>
							<li>
								<h3>
									Редукция профессиональных достижений {answer.get(result[2])}{' '}
									из 48
								</h3>
								<p>
									Характеризуется негативной оценкой собственных способностей,
									человек обесценивает себя и свою работу, теряет мотивацию,
									старается переложить обязанности на других
								</p>
							</li>
						</ul>
					</div>
				</div>
				<div className='result__interpretation'>
					<ul>
						<li className='inner__li'>Интерпретация</li>
						<li className='inner__li'>0-30%</li>
						<li className='inner__li'>31-60%</li>
						<li className='inner__li'>61-100%</li>
					</ul>
				</div>
			</div>

			<div className='result__recomendations'>
				<h2>Рекомендации</h2>
				<ul className='recomend__ul'>
					<li>Снизить количество рабочих часов</li>
					<li>Делегировать задачи</li>
					<li>Взять отпуск</li>
					<li>Заниматься спортом</li>
					<li>Соблюдать режим сна</li>
					<li>Питаться правильно</li>
					<li>Общаться с близкими людьми</li>
					<li>Обратиться к психологу</li>
				</ul>
			</div>

			{/* <div>
                <h1>Результаты</h1>
                Эмоциональный иcтощение: {1}
            </div>
            <div>
            Деперсонализация: {0}
            </div>
            <div>
            Редукция профессиональных достижений : {0}
            </div> */}
		</div>
	)
}

export default Result
