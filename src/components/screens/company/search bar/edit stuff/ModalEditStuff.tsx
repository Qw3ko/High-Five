import { CompanyService } from '@/services/company/company.service'
import { Modal } from '@mui/material'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import { USERS_URL } from 'config/api.config'
import { ru } from 'date-fns/locale'
import { FC, useEffect, useState } from 'react'
import DatePicker from 'react-datepicker'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import addPhotoIcon from '../../../../../assets/icons/add_a_photo.svg'
import closeBtn from '../../../../../assets/icons/cross.svg'
import changeIcon from '../../../../../assets/icons/pen.svg'
import loadingGif from '../../../../../assets/images/loading.webp'
import { IBranches } from '../../branches/branches list/BranchesList.interface'
import btnStyle from '../../employees/employees list/EmployeesList.module.css'
import styles from '../create stuff/ModalCreateEmployee.module.css'
import RadioComponent from '../create stuff/Radio'

interface IUser {
	id: string
}

const ModalEditEmployee: FC<IUser> = ({ id }) => {
	const [open, setOpen] = useState(false)
	const [currentId, setCurrentId] = useState('')
	const handleOpen = () => {
		setCurrentId(id)
		setOpen(true)
	}
	const handleClose = () => {
		setCurrentId('')
		setOpen(false)
	}
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
	const last_name = fullName.split(' ')[0]
	const first_name = fullName.split(' ')[1]
	const queryClient = useQueryClient()

	const sendUser = () => {
		userMutation.mutate()
	}

	const { data: branchesData } = useQuery({
		queryKey: ['branches'],
		queryFn: () =>
			CompanyService.getBranchesByCompanyId(
				'bd743040-d003-4579-8a34-1da34db38db9'
			),
	})

	const { data: userData, isLoading: loading } = useQuery({
		queryKey: ['user'],
		queryFn: () => CompanyService.getUserById(currentId),
		enabled: !!currentId,
	})

	useEffect(() => {
		setDateBirth(
			userData?.data
				? new Date(
						userData.data.additional_info.birth_date.replace(
							/(\d+).(\d+).(\d+)/,
							'$3-$2-$1'
						)
				  )
				: null
		)
		setArrangedDate(
			userData?.data
				? new Date(
						userData.data.additional_info.work_from.replace(
							/(\d+).(\d+).(\d+)/,
							'$3-$2-$1'
						)
				  )
				: null
		)
		setFullName(
			userData?.data
				? userData.data.additional_info.last_name +
						' ' +
						userData?.data.additional_info.first_name
				: ''
		)
		setBranch(userData?.data ? userData.data.additional_info.branch : '')
		setPhone(userData?.data ? userData.data.contact_phone[0].value : '')
		setPosition(userData?.data ? userData.data.additional_info.position : '')
		setEmail(userData?.data ? userData.data.contact_email[0].value : '')
		setContractNumber(
			userData?.data ? userData.data.additional_info.contractNumber : ''
		)
		setInterests(userData?.data ? userData.data.additional_info.interests : '')
		setSalary(userData?.data ? userData.data.additional_info.salary : '')
		setEducation(userData?.data ? userData.data.additional_info.education : '')
		setAdditionalInfo(
			userData?.data ? userData.data.additional_info.additionalInfo : ''
		)
	}, [userData?.data])

	const userMutation = useMutation({
		mutationFn: () => {
			return axios.patch(USERS_URL + `/user/` + id, {
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
					birth_date: dateBirth
						? dateBirth.toLocaleDateString()
						: new Date().toLocaleDateString(),
					work_from: arrangedDate
						? arrangedDate.toLocaleDateString()
						: new Date().toLocaleDateString(),
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
			})
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['employees'] })
			toast.success('Изменения успешно сохранены!')
		},
		onError: (error) => {
			toast.error('Произошла ошибка при сохранении изменений:' + error)
		},
		onSettled: () => {
			handleClose()
			setCurrentId('')
			setDateBirth(null)
			setArrangedDate(null)
			setFiredDate(null)
			setFullName('')
			setBranch('')
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
			<button onClick={handleOpen} className={btnStyle.btn}>
				<img width={19} height={19} src={changeIcon} />
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
					{loading ? (
						<div className={styles.loadingContainer}>
							<img width={301} height={262} src={loadingGif} />
							<div>Загрузка...</div>
						</div>
					) : (
						<>
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
								<div className={styles.inputContainer}>
									<div className={styles.inputWrapper}>
										<input
											className={styles.inputBig}
											type="text"
											value={fullName}
											placeholder="ФИО"
											onChange={(e) => setFullName(e.target.value)}
											required
										/>
										<input
											className={styles.inputBig}
											type="phone"
											value={phone}
											placeholder="Телефон"
											onChange={(e) => setPhone(e.target.value)}
											required
										/>
										<RadioComponent
											employeeGender={
												userData?.data
													? userData.data.additional_info.gender
													: null
											}
											gender={setGender}
										/>
									</div>
									<div className={styles.inputWrapper}>
										<input
											className={styles.inputBig}
											type="text"
											value={position}
											placeholder="Должность"
											onChange={(e) => setPosition(e.target.value)}
											required
										/>
										<input
											className={styles.inputBig}
											type="email"
											value={email}
											placeholder="Email"
											onChange={(e) => setEmail(e.target.value)}
											required
										/>
										<select
											className={styles.selectBranch}
											onChange={(e) => setBranch(e.target.value)}
											required
											value={branch}
										>
											{branchesData?.data.map((branch: IBranches) => (
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
											value={contractNumber}
											placeholder="Номер договора"
											onChange={(e) => setContractNumber(e.target.value)}
											required
										/>
									</div>
									<div className={styles.inputWrapper}>
										<input
											className={styles.inputBig}
											type="text"
											value={interests}
											placeholder="Интересы"
											onChange={(e) => setInterests(e.target.value)}
											required
										/>
										<input
											className={styles.inputSmall}
											type="text"
											value={salary}
											placeholder="Зарплата"
											onChange={(e) => setSalary(e.target.value)}
											required
										/>
										<input
											className={styles.inputBigger}
											type="text"
											value={education}
											placeholder="Образование"
											onChange={(e) => setEducation(e.target.value)}
											required
										/>
									</div>
									<div className={styles.inputWrapper}>
										<input
											className={styles.inputBlock}
											type="text"
											value={additionalInfo}
											placeholder="Дополнительная информация"
											onChange={(e) => setAdditionalInfo(e.target.value)}
										/>
									</div>
									<div className={styles.btnContainer}>
										<div className={styles.btnWrapper}>
											<button
												className={styles.btnCancel}
												onClick={handleClose}
											>
												Отмена
											</button>
											<button className={styles.btnCreate} onClick={sendUser}>
												Сохранить
											</button>
										</div>
									</div>
								</div>
							</div>
						</>
					)}
				</div>
			</Modal>
		</>
	)
}
export default ModalEditEmployee
