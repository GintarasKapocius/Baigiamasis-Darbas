import { v4 as uuidv4 } from 'uuid';
import database from '../database/index.js';

export const getFaq = (req, res) => {
  const faq = database.data.faq;
  res.status(200).json(faq);
}

export const addFaq = (req, res) => {
  const { title, details } = req.body;

  console.log(title, details)

  const id = uuidv4();
  const faqs = database.data.faq;

  console.log(id)
  console.log(faqs)

  faqs.push({
    id,
    title,
    details,
  });

  database.write();
  res.status(201).send({id});
}

export const updateFaq = (req, res) => {
  const { id } = req.params;
  const { title, details } = req.body;

  const faqs = database.data.faq;
  const faqIndex = faqs.findIndex(f => f.id === id);

  if (faqIndex === -1) {
    res.status(404).send("Nerasta");
    return;
  }

  faqs[faqIndex] = {
    title,
    details,
  }

  database.write();
  res.sendStatus(200);
}

export const deleteFaq = (req, res) => {
  const { id } = req.params;

  const faqs = database.data.faq;
  const faqIndex = faqs.find(f => f.id === id);

  if (faqIndex === -1) {
    res.status(404).send("Nerasta");
    return;
  }

  faqs.splice(faqIndex, 1);

  database.write();
  res.sendStatus(200);
}