import { FC } from 'react'
import loadingGif from '../../assets/images/loading.webp'
import styles from './Loading.module.css'

const Loading: FC = () => {
	return (
		<div className={styles.loadingContainer}>
			<img width={301} height={262} src={loadingGif} />
			<div>Загрузка...</div>
		</div>
	)
}

export default Loading
