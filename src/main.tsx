import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/layouts/layout/Layout'
import Profile from './components/screens/profile/Profile'
import Analytics from './components/screens/statistics/Analytics/Analytics'
import GeneralInfo from './components/screens/statistics/GeneralInfo/GeneralInfo'
import Profiles from './components/screens/statistics/Profiles/Profiles'
import Statistics from './components/screens/statistics/Statistics'
import SurveyContainer from './components/screens/survey/SurveyContainer'
import './index.css'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout role={true} />,
		children: [
			{ path: '/survey', element: <SurveyContainer /> },
			{
				path: '/profile',
				element: <Profile />,
			},
			{
				path: '/statistics',
				element: <Statistics />,
			},
			{
				path: '/statistics/general-info',
				element: <GeneralInfo />,
			},
			{
				path: '/statistics/profiles',
				element: <Profiles />,
			},
			{
				path: '/statistics/analytics',
				element: <Analytics />,
			},
		],
	},
])

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)
