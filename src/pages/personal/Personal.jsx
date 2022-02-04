
import React from 'react';

import { Sidebar, MusicBar } from '../../components';
import PersonalContent from './PersonalContent';

const Personal = () => {
  return (
    <>
      <Sidebar />
      <PersonalContent />
      <MusicBar />
    </>
  );
};

export default Personal;
