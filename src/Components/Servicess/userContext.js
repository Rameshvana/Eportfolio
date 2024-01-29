import axios from "axios"

const Url = 'http://localhost:8000/comments'



export function SaveData(data){
  return axios.post(Url,data)
} // Save User comments Data in DB