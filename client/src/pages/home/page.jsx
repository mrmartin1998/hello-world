import React from 'react';
import HelloWorld from '../components/HelloWorld';
import FirstComponent from '../components/FirstComponent';

const Home = () => {
  return (
    <div className="space-y-8">
      <HelloWorld />
      <FirstComponent />
    </div>
  );
};

export default Home; 