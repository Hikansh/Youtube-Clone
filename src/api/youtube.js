import axios from 'axios';
import { API_KEY } from '../../keys';

// Import yours from Keys.js in root directory
const API_KEY_ = API_KEY;

export const baseParams = {
  part: 'snippet',
  maxResults: 5,
  key: API_KEY_,
};

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
});
