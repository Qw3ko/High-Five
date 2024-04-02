import React from 'react'
import Layout from './components/layouts/layout/Layout'
import SurveyHeading from './components/screens/survey/SurveyHeading'
import SurveyContainer from './components/screens/survey/SurveyContainer'

const App = () => {
	return (
		<Layout>
			<SurveyHeading />
			<SurveyContainer />
		</Layout>
	)
}

export default App
