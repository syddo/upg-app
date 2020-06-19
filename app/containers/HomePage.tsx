import React from 'react';
import WindowBar from '../components/WindowBar';
import ButtonAppBar from '../components/muiButtonAppBar';
import Home from '../components/Home';

export default function HomePage() {
  return (
    <>
      <WindowBar />
      <ButtonAppBar />
      <Home />
    </>
  );
}
