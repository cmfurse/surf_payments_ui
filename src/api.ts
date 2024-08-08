import axios, {AxiosError, AxiosResponse} from "axios";

const sleep = (delay: number) => {
    return new Promise((resolve) => {
        setTimeout(resolve, delay)
    })
}

axios.defaults.baseURL = 'http://localhost:8000/';

// axios.interceptors.request.use(config => {
//     const token = store.authStore.token;
//     if (token && config.headers) {
//         config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
// });

axios.interceptors.response.use(async response => {
    await sleep(1000) // TODO: for test only
    return response;
}, (error: AxiosError) => {

    // let errorMessage = error.message;
    // if (error.response) {
    //     const serverError = error.response.data as ServerError;
    //     store.commonStore.setServerError(serverError);
    //     errorMessage = serverError.message
    // }
    //
    // toast({
    //     title: 'An API error occurred',
    //     description: errorMessage,
    //     status: 'error',
    //     duration: 9000,
    //     isClosable: true,
    // });

    return Promise.reject(error);
})

const responseBody = <T> (response: AxiosResponse<T>) => response.data;

const requests = {
    get: <T> (url: string) => axios.get<T>(url).then(responseBody),
    post: <T> (url: string, body: object = {}) => axios.post<T>(url, body).then(responseBody),
    put: <T> (url: string, body: object = {}) => axios.put<T>(url, body).then(responseBody),
    delete: <T> (url: string) => axios.delete<T>(url).then(responseBody)
}

export default requests;