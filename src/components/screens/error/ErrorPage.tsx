import { FC } from 'react'
import { useRouteError } from 'react-router-dom'

const ErrorPage: FC = () => {
	const error = useRouteError() as Error | Response
	console.error(error)
	return (
		<div id="error-page">
			<h1>Oops!</h1>
			<p>Sorry, an unexpected error has occurred.</p>
			<p>
				<i>
					{error instanceof Response
						? error.statusText || error.text.toString()
						: error.message}
				</i>
			</p>
		</div>
	)
}

export default ErrorPage
