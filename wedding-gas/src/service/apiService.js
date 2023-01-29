import axios from "axios";

const apiClient = {
  async createData(resquestData) {
    const response = await axios.post("/", resquestData)
    
    return [response];
  },

  async readData() {
    const response = await axios.get("/avo/all/eMAIL");
    return response.data;
  }
};

export default apiClient;
