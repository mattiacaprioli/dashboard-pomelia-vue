import axios from 'axios';

export default {
  async fetchData() {
    try {
      const response = await axios.get('../../solar-panels.json');
      return response.data;
    } catch (error) {
      console.error(error);
      throw new Error('Errore durante il recupero dei dati.');
    }
  }
}