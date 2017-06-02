import axios from 'axios';

const API_KEY = '933f21b450ca8973e7b0af90bc07bafd';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){

  const url = `${ROOT_URL}&q=${city},us`;
  // ajax request
  const request = axios.get(url);


  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
