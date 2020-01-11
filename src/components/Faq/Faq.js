/* eslint-disable linebreak-style */
import React from 'react';
import Container from '../Container/Container';
import {faq} from '../../data/dataStore';
import Hero from '../Hero/Hero';


const Faq = () => (
  <Container>
    <Hero titleText={faq.title} backgroundImage={faq.image} />
    <p>{faq.textContent}</p>
  </Container>
);

export default Faq;