import React from 'react'
import styles from './Survey.module.css'
import SurveyQuestion from './SurveyQuestion'

const SurveyContainer = () => {
	return (
		<div className={styles.surveyContainer}>
			<SurveyQuestion question={'Я чувствую себя эмоционально опустошенным.'} />
			<SurveyQuestion
				question={'После работы я чувствую себя как «выжатый лимон».'}
			/>
			<SurveyQuestion
				question={'Утром я чувствую усталость и нежелание идти на работу.'}
			/>
			<SurveyQuestion
				question={
					'Я хорошо понимаю, что чувствуют мои подчиненные и коллеги, и стараюсь учитывать это в интересах дела.'
				}
			/>
			<SurveyQuestion
				question={
					'Я чувствую, что общаюсь с некоторыми подчиненными и коллегами как с предметами (без теплоты и расположения к ним).'
				}
			/>
			<SurveyQuestion
				question={
					'После работы на некоторое время хочется уединиться от всех и всего.'
				}
			/>
			<SurveyQuestion
				question={
					'Я умею находить правильное решение в конфликтных ситуациях, возникающих при общении с коллегами.'
				}
			/>
			<SurveyQuestion question={'Я чувствую угнетенность и апатию.'} />
			<SurveyQuestion question={'Я уверен, что моя работа нужна людям.'} />
			<SurveyQuestion
				question={
					'В последнее время я стал более «черствым» по отношению к тем, с кем работаю.'
				}
			/>
			<SurveyQuestion question={'Я замечаю, что моя работа ожесточает меня.'} />
			<SurveyQuestion
				question={
					'У меня много планов на будущее, и я верю в их осуществление.'
				}
			/>
			<SurveyQuestion question={'Моя работа все больше меня разочаровывает.'} />
			<SurveyQuestion question={'Мне кажется, что я слишком много работаю.'} />
			<SurveyQuestion
				question={
					'Бывает, что мне действительно безразлично то, что происходит c некоторыми моими подчиненными и коллегами.'
				}
			/>
			<SurveyQuestion
				question={'Мне хочется уединиться и отдохнуть от всего и всех.'}
			/>
			<SurveyQuestion
				question={
					'Я легко могу создать атмосферу доброжелательности и сотрудничества в коллективе.'
				}
			/>
			<SurveyQuestion
				question={'Во время работы я чувствую приятное оживление.'}
			/>
			<SurveyQuestion
				question={
					'Благодаря своей работе я уже сделал в жизни много действительно ценного.'
				}
			/>
			<SurveyQuestion
				question={
					'Я чувствую равнодушие и потерю интереса ко многому, что радовало меня в моей работе.'
				}
			/>
			<SurveyQuestion
				question={
					'На работе я спокойно справляюсь с эмоциональными проблемами.'
				}
			/>
			<SurveyQuestion
				question={
					'В последнее время мне кажется, что коллеги и подчиненные все чаще перекладывают на меня груз своих проблем и обязанностей.'
				}
			/>
		</div>
	)
}

export default SurveyContainer
