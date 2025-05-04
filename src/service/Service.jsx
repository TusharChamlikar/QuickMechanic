import axios from 'axios';
const Mechanic_url = "http://localhost:9090/Search"
class Service{
    save(user){
        return axios.post(Mechanic_url,user);
    }
    getData(){
        return axios.get(Mechanic_url);
    }
}
export default new Service();
