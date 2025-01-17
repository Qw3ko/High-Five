import Cookies from 'js-cookie'
import { FC, FormEvent, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import AuthImage from '../../../../assets/images/authImage.svg'
import styles from './AuthContent.module.css'

const AuthContent: FC = () => {
	const location = useLocation()
	if (location.pathname === '/login') {
		document.documentElement.style.setProperty(
			'background-image',
			`url('src/assets/images/background2.jpg')`
		)
		document.documentElement.style.backgroundSize = 'cover'
	}

	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const navigate = useNavigate()
	const onSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		if (username === 'admin' && password === '123456') {
			Cookies.set('user', 'admin')
			navigate('/')
		} else toast.error('Неправильный логин или пароль')
	}

	return (
		<div className={styles.mainContainer}>
			<div className={styles.formContainer}>
				<div className={styles.header}>Добро пожаловать!</div>
				<div className={styles.form}>
					<form className={styles.form} onSubmit={onSubmit}>
						<input
							className={styles.input}
							type="text"
							placeholder="Логин"
							required
							autoComplete="username"
							onChange={(e) => setUsername(e.target.value)}
						/>
						<input
							className={styles.input}
							type="password"
							placeholder="Пароль"
							required
							autoComplete="current-password"
							onChange={(e) => setPassword(e.target.value)}
						/>
						<button className={styles.btn} type="submit">
							Войти
						</button>
					</form>
					<div className={styles.footerText}>
						<span>
							Присоединяйтесь к нам. Войдите в систему, чтобы получить:
							инструменты для оценки уровня стресса и выгорания, отслеживание
							прогресса и аналитику, рекомендации по профилактике. Забота о
							сотрудниках — залог успеха компании!
						</span>
					</div>
				</div>
			</div>
			<div className={styles.logoContainer}>
				<img className={styles.authImg} src={AuthImage} alt="Auth Image" />
			</div>
		</div>
	)
}

export default AuthContent
