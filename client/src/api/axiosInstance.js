import axios from 'axios'

const axiosInstance = axios.create({
	baseURL: 'http://35.198.234.158',
	timeout: (60 * 1000), // accept integers in milisecond = 1min
})

export default axiosInstance