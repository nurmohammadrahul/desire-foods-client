import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://desire-foods-server.vercel.app'
})
const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;