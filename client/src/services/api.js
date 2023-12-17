import axios from 'axios';

const URL = 'http://localhost:5000'

export const autenticateSignup = async(data) => {
 try {
   return await axios.post(`${URL}/signup` , data)
 } catch (error) {
    console.log('error while fetching adata from api' , error);
 }   
}