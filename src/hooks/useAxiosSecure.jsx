import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
    baseURL: 'https://desire-foods-server.vercel.app'
})
const useAxiosSecure = () => {
    const navigate = useNavigate();
    const {logOut} = useAuth();
    // request intercepto to add authorization header for every secure call to the api
    axiosSecure.interceptors.request.use(function (config) {
        const token =localStorage.getItem('access-token');
       // console.log('request stopped by interceptors', token)
        config.headers.authorization = `Bearer ${token}`;
        return config;
    }, function (error) {
        return Promise.reject(error);
    });
    //401 401
    axiosSecure.interceptors.response.use(function (response) {
        return response;
    }, async(error) => {
        const status = error.response.status;
       // console.log('status error w', status);
        // for 401 and 403 logout the user and sent to login
        if (status === 401 || status === 403) {
            await logOut();
            navigate('/login')
        }
        return Promise.reject(error);
    })


    return axiosSecure;
};

export default useAxiosSecure;