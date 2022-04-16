import Header from 'components/Header';
import React, { FC } from 'react';
import HeroSection from 'sections/HeroSection/HeroSection';
import * as Styled from './styles';

const Home:FC = () => {
  return (
    <Styled.Home>
        <Header />

        <HeroSection />
    </Styled.Home>
  )
}

export default Home;