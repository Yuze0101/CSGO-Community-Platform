import axios from "axios";
const newAxios = axios.create({
	baseURL: "http://192.168.13.8:4000",
});

newAxios.interceptors.response.use(
	(config) => {
		return config.data;
	},
	(error) => {
		throw error;
	},
);

export default newAxios;
