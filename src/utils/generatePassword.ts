export const generatePassword = () => {
	let charset = ''
	let newPassword = ''
	const passwordLength = 10
	const symbols = true
	const numbers = true
	const lowerCase = true
	const upperCase = true

	if (symbols) charset += '!@#$%^&*()'
	if (numbers) charset += '0123456789'
	if (lowerCase) charset += 'abcdefghijklmnopqrstuvwxyz'
	if (upperCase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

	for (let i = 0; i < passwordLength; i++) {
		newPassword += charset.charAt(Math.floor(Math.random() * charset.length))
	}

	return newPassword
}
