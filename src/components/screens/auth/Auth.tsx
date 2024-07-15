import { FC } from 'react'
import styles from './Auth.module.css'
import AuthContent from './AuthContent/AuthContent'
import AuthHeader from './AuthHeader/AuthHeader'

const Auth: FC = () => {
	return (
		<div className={styles.mainContainer}>
			<AuthHeader />
			<AuthContent />
		</div>
	)
}

export default Auth
