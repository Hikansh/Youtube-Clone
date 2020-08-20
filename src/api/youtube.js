import axios from 'axios';
const API_KEY = 'AIzaSyC7m9uiZWhYHNBqd0SdjFWs_Ft6Hyy5AXE';

export const baseParams = {
  part: 'snippet',
  maxResults: 5,
  key: API_KEY,
};

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
});
