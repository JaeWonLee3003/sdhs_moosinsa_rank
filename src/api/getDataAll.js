import axios from "axios"

export const getDataAll = () =>{
  return axios.get("http://127.0.0.1:5000/getDataAll")
}