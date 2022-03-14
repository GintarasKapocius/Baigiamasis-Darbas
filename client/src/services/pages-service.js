import axios from 'axios';

const requester = axios.create({
  baseURL: 'http://localhost:5002/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

const fetchFaq = async () => {
  try {
    const { data } = await requester.get('/faq');
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

const addFaq = async (title, details) => {
  try {
    const {data} = await requester.post('/faq', { title, details });
    return data.id;
  } catch (error) {
    throw new Error(error.message);
  }
};

const updateFaq = async (id, title, details) => {
  try {
    await requester.put(`/faq/${id}`, { title, details });
  } catch (error) {
    throw new Error(error.message);
  }
};

const deleteFaq = async (id) => {
  try {
    await requester.delete(`/faq/${id}`);
  } catch (error) {
    throw new Error(error.message);
  }
};

const fetchTeams = async () => {
  try {
    const { data } = await requester.get('/teams');
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

const fetchLinks = async () => {
  try {
    const { data } = await requester.get('/links');
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};


const fetchBlogArticles = async () => {
  try {
    const { data } = await requester.get('/blog');
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

const ProductService = {
  fetchTeams,
  fetchLinks,
  fetchBlogArticles,
  fetchFaq,
  addFaq,
  updateFaq,
  deleteFaq,
};

export default ProductService;
