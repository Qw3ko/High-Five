import { CompanyService } from '@/services/company/company.service'
import { generatePassword } from '@/utils/generatePassword'
import { Modal } from '@mui/material'
import { useMutation, useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { USERS_URL } from 'config/api.config'
import { ru } from 'date-fns/locale'
import { FC, useState } from 'react'
import DatePicker from 'react-datepicker'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { v4 as uuidv4 } from 'uuid'
import addPhotoIcon from '../../../../../assets/icons/add_a_photo.svg'
import closeBtn from '../../../../../assets/icons/cross.svg'
import addIcon from '../../../../../assets/icons/plus.svg'
import { IBranches } from '../../branches/branches list/BranchesList.interface'
import styles from './ModalCreateEmployee.module.css'
import RadioComponent from './Radio'

const ModalCreateEmployee: FC = () => {
	const [open, setOpen] = useState(false)
	const handleOpen = () => setOpen(true)
	const handleClose = () => setOpen(false)
	const [dateBirth, setDateBirth] = useState<Date | null>(null)
	const [arrangedDate, setArrangedDate] = useState<Date | null>(null)
	const [firedDate, setFiredDate] = useState<Date | null>(null)
	const [fullName, setFullName] = useState('')
	const [gender, setGender] = useState('')
	const [branch, setBranch] = useState('')
	const [phone, setPhone] = useState('')
	const [position, setPosition] = useState('')
	const [email, setEmail] = useState('')
	const [contractNumber, setContractNumber] = useState('')
	const [interests, setInterests] = useState('')
	const [salary, setSalary] = useState('')
	const [education, setEducation] = useState('')
	const [additionalInfo, setAdditionalInfo] = useState('')
	const profile_id = uuidv4()
	const user_id = uuidv4()
	const last_name = fullName.split(' ')[0]
	const first_name = fullName.split(' ')[1]
	const middle_name = fullName.split(' ')[2]

	const sendUser = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		userMutation.mutate()
		profileMutation.mutate()
	}

	const { data } = useQuery({
		queryKey: ['branches'],
		queryFn: () =>
			CompanyService.getBranchesByCompanyId(
				'bd743040-d003-4579-8a34-1da34db38db9'
			),
	})

	const branchesData = data?.data

	const userMutation = useMutation({
		mutationFn: () => {
			return axios.post(USERS_URL + `/user`, {
				user_id: user_id,
				user_type: 'login',
				login: first_name + generatePassword(),
				contact_phone: [
					{
						title: 'phone',
						value: phone,
					},
				],
				contact_email: [
					{
						title: 'email',
						value: email,
					},
				],
				additional_info: {
					first_name: first_name,
					last_name: last_name,
					gender: gender,
					birth_date: dateBirth ? dateBirth.toLocaleDateString() : '',
					work_from: arrangedDate ? arrangedDate.toLocaleDateString() : '',
					access: 'Доступ открыт',
					formCompleteness: 'Анкета заполнена',
					branch: branch,
					position: position,
					contractNumber: contractNumber,
					interests: interests,
					salary: salary,
					education: education,
					additionalInfo: additionalInfo,
				},
				project_id: '53a196e9-b121-4c69-bf45-8cfec561d244',
				organization_id: 'bd743040-d003-4579-8a34-1da34db38db9',
				phone_verified: false,
				email_verified: false,
				password: generatePassword(),
			})
		},
		onError: (error) => {
			toast.error('Произошла ошибка при создании пользователя:' + error)
		},
	})
	const profileMutation = useMutation({
		mutationFn: () => {
			return axios.post(USERS_URL + `/profile`, {
				profile_id: profile_id,
				profile_type: 'person',
				first_name: first_name,
				last_name: last_name,
				middle_name: middle_name,
				birth_date: dateBirth ? dateBirth.toLocaleDateString() : '',
				sex: gender,
				contact_phone: [
					{
						title: 'phone',
						value: phone,
					},
				],
				contact_email: [
					{
						title: 'email',
						value: email,
					},
				],
				photo_main: 'https://example.com/',
				photo_small: 'https://example.com/',
				project_info: {
					field1: '',
					field2: '',
					field3: '',
				},
				account_id: profile_id,
				project_id: '53a196e9-b121-4c69-bf45-8cfec561d244',
			})
		},
		onSuccess: () => {
			toast.success('Пользователь успешно создан!')
		},
		onError: (error) => {
			toast.error('Произошла ошибка при создании пользователя:' + error.message)
		},
		onSettled: () => {
			handleClose()
			setDateBirth(null)
			setArrangedDate(null)
			setFiredDate(null)
			setFullName('')
			setGender('')
			setPhone('')
			setPosition('')
			setEmail('')
			setContractNumber('')
			setInterests('')
			setSalary('')
			setEducation('')
			setAdditionalInfo('')
		},
	})
	return (
		<>
			<button onClick={handleOpen} className={styles.btn}>
				<img width={19} height={19} src={addIcon} />
			</button>
			<Modal
				sx={{
					'& div.MuiModal-backdrop': {
						backgroundColor: 'rgba(255, 255, 255, 0.5)',
					},
				}}
				open={open}
				onClose={handleClose}
			>
				<div className={styles.modalContainer}>
					<div className={styles.modalHeaderContainer}>
						<div className={styles.modalHeading}>Сотрудник</div>
						<button className={styles.btn} onClick={handleClose}>
							<img width={13} height={13} src={closeBtn} />
						</button>
					</div>
					<div className={styles.modalContent}>
						<div className={styles.photoContainer}>
							<button className={styles.photo}>
								<img width={19} height={19} src={addPhotoIcon} />
							</button>
						</div>
						<form onSubmit={sendUser}>
							<div className={styles.inputContainer}>
								<div className={styles.inputWrapper}>
									<input
										className={styles.inputBig}
										type="text"
										placeholder="ФИО"
										onChange={(e) => setFullName(e.target.value)}
										required
									/>
									<input
										className={styles.inputBig}
										type="phone"
										placeholder="Телефон"
										onChange={(e) => setPhone(e.target.value)}
										required
									/>
									<RadioComponent gender={setGender} />
								</div>
								<div className={styles.inputWrapper}>
									<input
										className={styles.inputBig}
										type="text"
										placeholder="Должность"
										onChange={(e) => setPosition(e.target.value)}
										required
									/>
									<input
										className={styles.inputBig}
										type="email"
										placeholder="Email"
										onChange={(e) => setEmail(e.target.value)}
										required
									/>
									<select
										className={styles.selectBranch}
										onChange={(e) => setBranch(e.target.value)}
									>
										{branchesData?.map((branch: IBranches) => (
											<option key={branch.team_id} value={branch.title.ru}>
												{branch.title.ru}
											</option>
										))}
									</select>
								</div>
								<div className={styles.inputWrapper}>
									<DatePicker
										selected={dateBirth}
										onChange={(date: Date) => setDateBirth(() => date)}
										className={styles.inputBig}
										dateFormat="dd.MM.yyyy"
										locale={ru}
										showMonthDropdown
										showYearDropdown
										dropdownMode="select"
										placeholderText="Дата рождения"
										required
									/>
									<DatePicker
										selected={arrangedDate}
										onChange={(date: Date) => setArrangedDate(() => date)}
										className={styles.inputSmall}
										dateFormat="dd.MM.yyyy"
										locale={ru}
										showMonthDropdown
										showYearDropdown
										dropdownMode="select"
										placeholderText="Устроен с"
										required
									/>
									<DatePicker
										selected={firedDate}
										onChange={(date: Date) => setFiredDate(() => date)}
										className={styles.inputSmall}
										dateFormat="dd.MM.yyyy"
										locale={ru}
										showMonthDropdown
										showYearDropdown
										dropdownMode="select"
										placeholderText="Уволен"
									/>
									<input
										className={styles.inputMedium}
										type="text"
										placeholder="Номер договора"
										onChange={(e) => setContractNumber(e.target.value)}
										required
									/>
								</div>
								<div className={styles.inputWrapper}>
									<input
										className={styles.inputBig}
										type="text"
										placeholder="Интересы"
										onChange={(e) => setInterests(e.target.value)}
									/>
									<input
										className={styles.inputSmall}
										type="text"
										placeholder="Зарплата"
										onChange={(e) => setSalary(e.target.value)}
										required
									/>
									<input
										className={styles.inputBigger}
										type="text"
										placeholder="Образование"
										onChange={(e) => setEducation(e.target.value)}
										required
									/>
								</div>
								<div className={styles.inputWrapper}>
									<input
										className={styles.inputBlock}
										type="text"
										placeholder="Дополнительная информация"
										onChange={(e) => setAdditionalInfo(e.target.value)}
									/>
								</div>
								<div className={styles.btnContainer}>
									<div className={styles.btnWrapper}>
										<button className={styles.btnCancel} onClick={handleClose}>
											Отмена
										</button>
										<button className={styles.btnCreate} type="submit">
											Создать
										</button>
									</div>
								</div>
							</div>
						</form>
					</div>
				</div>
			</Modal>
		</>
	)
}
export default ModalCreateEmployee
