import { api } from "./axiosInstance";


export const accessToken = async()=> await api.get('/auth/token').then(res=>res.data).then(data=>data?.token)

// export const accessToken = async()=> await fetch('http://localhost:3000/api/auth/token').then(res=>res.json()).then(data=>data)

