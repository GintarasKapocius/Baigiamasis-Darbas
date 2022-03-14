import React, { useState, useEffect } from 'react';
import { Container } from '@mui/material';
import APIService from '../../services/pages-service';

import FaqsAccordion from './faqsAccordion';
import HeroWrapper from '../../components/hero-wrapper';

const FaqsPage = () => {
  const [faq, setFaq] = useState([]);
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (id) => (e, isExpanded) => {
    setExpanded(isExpanded ? id : false);
  };

  useEffect(() => {
    (async () => {
      const fetchedFaq = await APIService.fetchFaq();
      setFaq(fetchedFaq);
    })();
  }, []);

  return (
    <>
      <HeroWrapper
        title='FAQ'
        subtitle='Answers to key questions'
        image='https://res.cloudinary.com/dipwpo4gx/image/upload/v1640192554/Hero%20Sections/faq_uiwses.jpg'
        bgcolor='#7b6ef6'
      ></HeroWrapper>
      <Container>
        {faq.map(({ id, title, details }) => (
          <FaqsAccordion key={id} id={id} heading={title} details={details} expanded={expanded} handleChange={handleChange}></FaqsAccordion>
        ))}
      </Container>
    </>
  );
};

export default FaqsPage;
