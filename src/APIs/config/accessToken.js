import axios from "axios";

export const accessToken = async()=> await fetch('http://localhost:3000/api/auth/token').then(res=>res.json()).then(data=>data)

