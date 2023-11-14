
import axios from "axios";
import { b_token, baseURL } from "./baseURL";

export const api = axios.create({
  baseURL: `${baseURL}/api`,
  timeout: 3000,
  headers: {
      'Content-Type': 'application/json',
      // Authorization: `Bearer ${b_token}`,
    },
});


