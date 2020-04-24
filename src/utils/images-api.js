import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/?q=';
const options = 'image_type=photo&orientation=horizontal&per_page=12';

const fetchImages = (value = 'flower', page = 1) => {
  return axios
    .get(
      `${BASE_URL}${value}&page=${page}&key=${process.env.REACT_APP_API_KEY}&${options}`,
    )
    .then(({ data }) => data.hits);
};

export default fetchImages;
