import axios from 'axios';
const Mechanic_url = "http://localhost:9090/otp";
class MechanicService{
    sendOTP(email){
        return axios.get(`${Mechanic_url}/send/${email}`);
    }
    verifyOTP(otp){
         return axios.get(`${Mechanic_url}/verify/${otp}`)
    }
 
}
export default new MechanicService();