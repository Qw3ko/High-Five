import Layout from './components/layouts/layout/Layout'
import SurveyContainer from './components/screens/survey/SurveyContainer'
import SurveyHeading from './components/screens/survey/SurveyHeading'

const App = () => {
	return (
		<Layout>
			<SurveyHeading />
			<SurveyContainer />
		</Layout>
	)
}

export default App
