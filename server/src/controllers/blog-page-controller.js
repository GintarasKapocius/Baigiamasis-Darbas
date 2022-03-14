import database from '../database/index.js';

export const getBlogArticles = (req, res) => {
  const blogArticles = database.data.blogArticles;
  res.status(200).json(blogArticles);
}