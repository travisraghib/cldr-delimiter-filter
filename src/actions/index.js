import axios from 'axios';
const DELIMITER_URL = '/api/delimiters/';

export const FETCH_DELIMITER_DATA = 'FETCH_DELIMITER_DATA';
export const SEARCH_DELIMITER = 'SEARCH_DELIMITER';

export function fetchDelimeterData() {
  const request = axios.get(DELIMITER_URL);

  return {
    type   : FETCH_DELIMITER_DATA,
    payload: request
  };
}

export function searchDelimiter(term) {
  return {
    type : SEARCH_DELIMITER,
    payload:term
  };
}