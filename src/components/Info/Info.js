/* eslint-disable linebreak-style */
import React from 'react';
import Container from '../Container/Container';
import { info } from '../../data/dataStore';
import Hero from '../Hero/Hero';


const Info = () => (
  <Container>
    <Hero titleText={info.title} backgroundImage={info.image} />
    <p>{info.textContent}</p>
  </Container>
);

export default Info;