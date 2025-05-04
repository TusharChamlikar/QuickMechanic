import axios from 'axios';
const Mechanic_url = "http://localhost:9090/particular";

class getParticular {
  async getData(email) {
    try {
      const response = await axios.get(`${Mechanic_url}/${email}`);

      // If the response is empty or the data is null/undefined, return null
      if (!response.data || Object.keys(response.data).length === 0) {
        return null;
      }

      return response.data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return null; // Treat errors as "not found"
    }
  }
}

export default new getParticular();
