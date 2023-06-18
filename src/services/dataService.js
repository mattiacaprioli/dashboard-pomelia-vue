import axios from 'axios';

export default {
  fetchData() {
    return axios.get('../../solar-panels.json')
      .then(response => response.data)
      .catch(error => {
        console.error(error);
        throw error;
      });
  },
}