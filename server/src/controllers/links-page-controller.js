import database from '../database/index.js';


export const getLinks = (req, res) => {
  const links = database.data.links;
  res.status(200).json(links);
}