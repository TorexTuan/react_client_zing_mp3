import React from 'react';
import { Routes, Route } from 'react-router-dom'

import PersonalPage from '../pages/Personal';
import DiscoveryPage from '../pages/Discovery';
import ZingchatPage from '../pages/Zingchat';

const ZingMp3Routes = () => {
  return (
      <Routes>
          <Route path='/' element={<PersonalPage />}/>
          <Route path='/discovery/:hello' element={<DiscoveryPage />}/>
          <Route path='/zing-chat' element={<ZingchatPage />}/>
      </Routes>
  );
};

export default ZingMp3Routes;
