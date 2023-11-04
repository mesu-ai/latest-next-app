
import { baseURL } from "./baseURL";

const instance = axios.create({
  baseURL: baseURL,
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});