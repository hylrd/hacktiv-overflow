import axios from 'axios'

const axiosInstance = axios.create({
	baseURL: 'http://localhost:3000',
	timeout: (60 * 1000), // accept integers in milisecond = 1min
})

export default axiosInstance