import axios from 'axios';

const fetchImages = (value = 'flower', page = 1) => {
  return axios.get(
    // eslint-disable-next-line max-len
    `https://pixabay.com/api/?q=${value}&page=${page}&key=12685146-fdd2799488131e47273c0b199&image_type=photo&orientation=horizontal&per_page=12`,
  );
};

export default fetchImages;
