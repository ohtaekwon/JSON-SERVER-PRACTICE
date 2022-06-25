import React from 'react';
import Gnb from '../components/Gnb';
import Header from '../components/Header';
import Feeds from '../components/Feeds';

import NavSections from '../components/NavSections';
import Sections from '../components/Sections';
import Container from '../components/Container';
import { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

export default function MainPage() {
  return (
    <>
      <NavSections>
        <Header />
      </NavSections>
      <Sections>
        <Container>
          <Feeds />
        </Container>
      </Sections>
    </>
  );
}
