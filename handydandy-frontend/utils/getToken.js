import axios from 'axios';
import useAxios from 'axios-hooks';

export default async function GetToken() {

  const response = await axios.post('/api/getTokenFromApi')
  return response
}