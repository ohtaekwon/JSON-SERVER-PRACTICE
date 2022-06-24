import React from 'react';
import Gnb from '../components/Gnb';
import Header from '../components/Header';
import Feeds from '../components/Feeds';

import Sections from '../components/Sections';
import Container from '../components/Container';

export default function MainPage() {
  // console.log('feed state', feedState);
  return (
    <>
      <Sections>
        <Header />
      </Sections>
      <Sections>
        <Container>
          <Feeds />
        </Container>
      </Sections>
    </>
  );
}
