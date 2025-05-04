import axios from 'axios';
const Mechanic_url = "http://localhost:9090/Mechanic";
class MechanicService{
    saveMechanic(Mechanic){
        return axios.post(Mechanic_url,Mechanic);
    }
    getMechanic(){
        return axios.get(Mechanic_url);
    }
    getMechanicById(id){
        return axios.get(`${Mechanic_url}$id`)
    }
    getMechanicByLocation(location){
        return axios.get(`${Mechanic_url}/by-location?location=${location}`);
    }
    deleteMechanicById(id){
        return axios.get(`${Mechanic_url}/${id}`);
    }
}
export default new MechanicService();