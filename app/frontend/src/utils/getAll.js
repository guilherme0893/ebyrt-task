import axios from 'axios';

export default async function getTasks() {
  try {
    const url = 'https://localhost/3004';
    const tasks = await axios.get(url);
    return tasks.data;    
  } catch (error) {
    throw new Error('Request failed');    
  }
};
