import axios from "axios";
const newAxios = axios.create({
	baseURL: "http://localhost:4000",
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
