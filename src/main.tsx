import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Layout from './components/layouts/layout/Layout'
import Auth from './components/screens/auth/Auth'
import ChatContainer from './components/screens/chat/ChatContainer/ChatContainer'
import ChatPage from './components/screens/chat/ChatPage'
import Company from './components/screens/company/Company'
import ErrorPage from './components/screens/error/ErrorPage'
import Profile from './components/screens/profile/Profile'
import Analytics from './components/screens/statistics/Analytics/Analytics'
import GeneralInfo from './components/screens/statistics/GeneralInfo/GeneralInfo'
import Profiles from './components/screens/statistics/Profiles/Profiles'
import Statistics from './components/screens/statistics/Statistics'
import SurveyContainer from './components/screens/survey/SurveyContainer'
import './index.css'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
})

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		errorElement: <ErrorPage />,
		children: [
			{ path: '/survey', element: <SurveyContainer /> },
			{
				path: '/profile',
				element: <Profile />,
			},
			{
				path: '/company',
				element: <Company />,
			},
			{
				path: '/statistics',
				element: <Statistics />,
			},
			{
				path: '/chat',
				element: <ChatPage />,
			},
			{
				path: '/chat/:id',
				element: <ChatContainer />,
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
	{
		path: '/login',
		element: <Auth />,
	},
])

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<ToastContainer />
			<RouterProvider router={router} />
		</QueryClientProvider>
	</React.StrictMode>
)
