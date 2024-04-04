import React from 'react'
import styles from './Survey.module.css'
import SurveyQuestion from './SurveyQuestion'

const SurveyContainer = () => {
	return (
		<div className={styles.surveyContainer}>
			<SurveyQuestion
				question={'Я чувствую себя эмоционально опустошенным'}
				questionNumber={'question1'}
			/>
			<SurveyQuestion
				question={'После работы я чувствую себя как «выжатый лимон»'}
				questionNumber={'question2'}
			/>
			<SurveyQuestion
				question={'Утром я чувствую усталость и нежелание идти на работу'}
				questionNumber={'question3'}
			/>
			<SurveyQuestion
				question={
					'Я хорошо понимаю, что чувствуют мои подчиненные и коллеги, и стараюсь учитывать это в интересах дела'
				}
				questionNumber={'question4'}
			/>
			<SurveyQuestion
				question={
					'Я чувствую, что общаюсь с некоторыми подчиненными и коллегами как с предметами (без теплоты и расположения к ним)'
				}
				questionNumber={'question5'}
			/>
			<SurveyQuestion
				question={
					'После работы на некоторое время хочется уединиться от всех и всего'
				}
				questionNumber={'question6'}
			/>
			<SurveyQuestion
				question={
					'Я умею находить правильное решение в конфликтных ситуациях, возникающих при общении с коллегами'
				}
				questionNumber={'question7'}
			/>
			<SurveyQuestion
				question={'Я чувствую угнетенность и апатию'}
				questionNumber={'question8'}
			/>
			<SurveyQuestion
				question={'Я уверен, что моя работа нужна людям'}
				questionNumber={'question9'}
			/>
			<SurveyQuestion
				question={
					'В последнее время я стал более «черствым» по отношению к тем, с кем работаю'
				}
				questionNumber={'question10'}
			/>
			<SurveyQuestion
				question={'Я замечаю, что моя работа ожесточает меня'}
				questionNumber={'question11'}
			/>
			<SurveyQuestion
				question={'У меня много планов на будущее, и я верю в их осуществление'}
				questionNumber={'question12'}
			/>
			<SurveyQuestion
				question={'Моя работа все больше меня разочаровывает'}
				questionNumber={'question13'}
			/>
			<SurveyQuestion
				question={'Мне кажется, что я слишком много работаю'}
				questionNumber={'question14'}
			/>
			<SurveyQuestion
				question={
					'Бывает, что мне действительно безразлично то, что происходит c некоторыми моими подчиненными и коллегами'
				}
				questionNumber={'question15'}
			/>
			<SurveyQuestion
				question={'Мне хочется уединиться и отдохнуть от всего и всех'}
				questionNumber={'question16'}
			/>
			<SurveyQuestion
				question={
					'Я легко могу создать атмосферу доброжелательности и сотрудничества в коллективе'
				}
				questionNumber={'question17'}
			/>
			<SurveyQuestion
				question={'Во время работы я чувствую приятное оживление'}
				questionNumber={'question18'}
			/>
			<SurveyQuestion
				question={
					'Благодаря своей работе я уже сделал в жизни много действительно ценного'
				}
				questionNumber={'question19'}
			/>
			<SurveyQuestion
				question={
					'Я чувствую равнодушие и потерю интереса ко многому, что радовало меня в моей работе'
				}
				questionNumber={'question20'}
			/>
			<SurveyQuestion
				question={'На работе я спокойно справляюсь с эмоциональными проблемами'}
				questionNumber={'question21'}
			/>
			<SurveyQuestion
				question={
					'В последнее время мне кажется, что коллеги и подчиненные все чаще перекладывают на меня груз своих проблем и обязанностей'
				}
				questionNumber={'question22'}
			/>
		</div>
	)
}

export default SurveyContainer
